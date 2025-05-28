import { create } from 'zustand';

export type Size = 'Pantagruel' | 'Gargantua';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  pricePantagruel: number;
  priceGargantua: number;
  category: string;
  image: string;
}

export interface Accompaniment {
  id: string;
  name: string;
  price: number;
}

export interface Drink {
  id: string;
  name: string;
  price: number;
}

export interface Sauce {
  id: string;
  name: string;
  price: number;
}

export interface Supplement {
  id: string;
  name: string;
  price: number;
}

export interface CartItemOptions {
  accompaniment?: Accompaniment;
  drink?: Drink;
  sauces: Sauce[];
  supplements: Supplement[];
}

export interface CartItem extends MenuItem {
  quantity: number;
  size: Size;
  options: CartItemOptions;
  totalPrice: number;
}

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: MenuItem, size: Size, options?: CartItemOptions) => void;
  removeItem: (itemId: number, size: Size, optionsId: string) => void;
  clearCart: () => void;
}

// Options disponibles
export const accompaniments: Accompaniment[] = [
  { id: 'frites', name: 'Frites maison', price: 0 },
  { id: 'salade', name: 'Salade verte', price: 0 },
  { id: 'riz', name: 'Riz pilaf', price: 500 },
  { id: 'legumes', name: 'Légumes grillés', price: 800 },
  { id: 'patates', name: 'Patates douces', price: 600 },
];

export const drinks: Drink[] = [
  { id: 'coca', name: 'Coca-Cola', price: 0 },
  { id: 'sprite', name: 'Sprite', price: 0 },
  { id: 'fanta', name: 'Fanta', price: 0 },
  { id: 'eau', name: 'Eau minérale', price: 0 },
  { id: 'jus-orange', name: 'Jus d\'orange', price: 300 },
  { id: 'jus-pomme', name: 'Jus de pomme', price: 300 },
  { id: 'bissap', name: 'Bissap', price: 400 },
];

export const sauces: Sauce[] = [
  { id: 'ketchup', name: 'Ketchup', price: 0 },
  { id: 'mayo', name: 'Mayonnaise', price: 0 },
  { id: 'moutarde', name: 'Moutarde', price: 0 },
  { id: 'bbq', name: 'Sauce BBQ', price: 200 },
  { id: 'caesar', name: 'Sauce Caesar', price: 200 },
  { id: 'tartare', name: 'Sauce Tartare', price: 200 },
  { id: 'piment', name: 'Sauce Piment', price: 150 },
];

export const supplements: Supplement[] = [
  { id: 'bacon', name: 'Bacon', price: 800 },
  { id: 'fromage', name: 'Fromage supplémentaire', price: 500 },
  { id: 'avocat', name: 'Avocat', price: 600 },
  { id: 'oeuf', name: 'Œuf', price: 300 },
  { id: 'champignons', name: 'Champignons', price: 400 },
  { id: 'oignons', name: 'Oignons caramélisés', price: 300 },
];

const calculateItemPrice = (item: MenuItem, size: Size, options: CartItemOptions): number => {
  const basePrice = size === 'Pantagruel' ? item.pricePantagruel : item.priceGargantua;
  const accompanimentPrice = options.accompaniment?.price || 0;
  const drinkPrice = options.drink?.price || 0;
  const saucesPrice = options.sauces.reduce((sum, sauce) => sum + sauce.price, 0);
  const supplementsPrice = options.supplements.reduce((sum, supplement) => sum + supplement.price, 0);
  
  return basePrice + accompanimentPrice + drinkPrice + saucesPrice + supplementsPrice;
};

const generateOptionsId = (options: CartItemOptions): string => {
  const parts = [
    options.accompaniment?.id || 'no-acc',
    options.drink?.id || 'no-drink',
    options.sauces.map(s => s.id).sort().join('-') || 'no-sauces',
    options.supplements.map(s => s.id).sort().join('-') || 'no-supplements'
  ];
  return parts.join('_');
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (item: MenuItem, size: Size, options: CartItemOptions = { sauces: [], supplements: [] }) => {
    set((state) => {
      const optionsId = generateOptionsId(options);
      const existingItem = state.items.find(
        (i) => i.id === item.id && i.size === size && generateOptionsId(i.options) === optionsId
      );

      const totalPrice = calculateItemPrice(item, size, options);

      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.id === item.id && i.size === size && generateOptionsId(i.options) === optionsId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
        return {
          items: updatedItems,
          total: state.total + totalPrice,
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1, size, options, totalPrice }],
        total: state.total + totalPrice,
      };
    });
  },
  removeItem: (itemId: number, size: Size, optionsId: string) => {
    set((state) => {
      const item = state.items.find((i) => i.id === itemId && i.size === size && generateOptionsId(i.options) === optionsId);
      if (!item) return state;

      if (item.quantity > 1) {
        const updatedItems = state.items.map((i) =>
          i.id === itemId && i.size === size && generateOptionsId(i.options) === optionsId
            ? { ...i, quantity: i.quantity - 1 }
            : i
        );
        return {
          items: updatedItems,
          total: state.total - item.totalPrice,
        };
      }

      return {
        items: state.items.filter((i) => !(i.id === itemId && i.size === size && generateOptionsId(i.options) === optionsId)),
        total: state.total - item.totalPrice,
      };
    });
  },
  clearCart: () => set({ items: [], total: 0 }),
})); 