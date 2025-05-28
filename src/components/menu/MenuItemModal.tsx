'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter 
} from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  useCartStore, 
  type MenuItem, 
  type Size, 
  type CartItemOptions,
  type Accompaniment,
  type Drink,
  type Sauce,
  type Supplement,
  accompaniments,
  drinks,
  sauces,
  supplements
} from '@/lib/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface MenuItemModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

const MenuItemModal = ({ item, isOpen, onClose }: MenuItemModalProps) => {
  const [selectedSize, setSelectedSize] = useState<Size>('Pantagruel');
  const [selectedAccompaniment, setSelectedAccompaniment] = useState<Accompaniment | undefined>(
    selectedSize === 'Gargantua' ? accompaniments[0] : undefined
  );
  const [selectedDrink, setSelectedDrink] = useState<Drink | undefined>(
    selectedSize === 'Gargantua' ? drinks[0] : undefined
  );
  const [selectedSauces, setSelectedSauces] = useState<Sauce[]>([]);
  const [selectedSupplements, setSelectedSupplements] = useState<Supplement[]>([]);

  const addItem = useCartStore((state) => state.addItem);

  const handleSizeChange = (size: Size) => {
    setSelectedSize(size);
    if (size === 'Gargantua') {
      // Pour les menus, inclure automatiquement frites et boisson par défaut
      if (!selectedAccompaniment) setSelectedAccompaniment(accompaniments[0]);
      if (!selectedDrink) setSelectedDrink(drinks[0]);
    } else {
      // Pour les simples, pas d'accompagnement ni boisson inclus
      setSelectedAccompaniment(undefined);
      setSelectedDrink(undefined);
    }
  };

  const handleSauceToggle = (sauce: Sauce) => {
    setSelectedSauces(prev => 
      prev.find(s => s.id === sauce.id)
        ? prev.filter(s => s.id !== sauce.id)
        : [...prev, sauce]
    );
  };

  const handleSupplementToggle = (supplement: Supplement) => {
    setSelectedSupplements(prev => 
      prev.find(s => s.id === supplement.id)
        ? prev.filter(s => s.id !== supplement.id)
        : [...prev, supplement]
    );
  };

  const calculateTotalPrice = () => {
    const basePrice = selectedSize === 'Pantagruel' ? item.pricePantagruel : item.priceGargantua;
    const accompanimentPrice = selectedAccompaniment?.price || 0;
    const drinkPrice = selectedDrink?.price || 0;
    const saucesPrice = selectedSauces.reduce((sum, sauce) => sum + sauce.price, 0);
    const supplementsPrice = selectedSupplements.reduce((sum, supplement) => sum + supplement.price, 0);
    
    return basePrice + accompanimentPrice + drinkPrice + saucesPrice + supplementsPrice;
  };

  const handleAddToCart = () => {
    const options: CartItemOptions = {
      accompaniment: selectedAccompaniment,
      drink: selectedDrink,
      sauces: selectedSauces,
      supplements: selectedSupplements,
    };

    addItem(item, selectedSize, options);
    onClose();
    
    // Reset form
    setSelectedSize('Pantagruel');
    setSelectedAccompaniment(undefined);
    setSelectedDrink(undefined);
    setSelectedSauces([]);
    setSelectedSupplements([]);
  };

  const isMenu = selectedSize === 'Gargantua';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-gray-200 modal-content">
        <DialogHeader className="spring-animation">
          <DialogTitle className="text-2xl font-bold text-black">
            Personnaliser votre {item.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image et description */}
          <div className="flex gap-4 spring-animation" style={{ animationDelay: '0.1s' }}>
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-black">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>

          {/* Taille */}
          <div className="space-y-3 spring-animation" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold text-black">Choisissez votre formule</h4>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={selectedSize === 'Pantagruel' ? 'default' : 'outline'}
                onClick={() => handleSizeChange('Pantagruel')}
                className={`h-auto p-4 flex flex-col items-start transition-all duration-300 hover:scale-105 ${
                  selectedSize === 'Pantagruel' 
                    ? 'bg-primary hover:bg-primary/90 text-white border-primary shadow-lg' 
                    : 'bg-white hover:bg-gray-50 text-black border-gray-200 hover:border-primary/50'
                }`}
              >
                <span className="font-bold">Simple</span>
                <span className="text-sm opacity-80">Plat uniquement</span>
                <span className={`text-lg font-bold ${
                  selectedSize === 'Pantagruel' ? 'text-white' : 'text-primary'
                }`}>
                  {item.pricePantagruel} F
                </span>
              </Button>
              <Button
                variant={selectedSize === 'Gargantua' ? 'default' : 'outline'}
                onClick={() => handleSizeChange('Gargantua')}
                className={`h-auto p-4 flex flex-col items-start transition-all duration-300 hover:scale-105 ${
                  selectedSize === 'Gargantua' 
                    ? 'bg-primary hover:bg-primary/90 text-white border-primary shadow-lg' 
                    : 'bg-white hover:bg-gray-50 text-black border-gray-200 hover:border-primary/50'
                }`}
              >
                <span className="font-bold">Menu</span>
                <span className="text-sm opacity-80">Plat + Accompagnement + Boisson</span>
                <span className={`text-lg font-bold ${
                  selectedSize === 'Gargantua' ? 'text-white' : 'text-primary'
                }`}>
                  {item.priceGargantua} F
                </span>
              </Button>
            </div>
          </div>

          {/* Accompagnement (pour les menus) */}
          {isMenu && (
            <div className="space-y-3 spring-animation" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-semibold text-black">Accompagnement</h4>
              <Select 
                value={selectedAccompaniment?.id} 
                onValueChange={(value) => setSelectedAccompaniment(accompaniments.find(a => a.id === value))}
              >
                <SelectTrigger className="bg-white border-gray-200 text-black hover:border-primary/50 transition-colors">
                  <SelectValue placeholder="Choisissez votre accompagnement" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  {accompaniments.map((acc) => (
                    <SelectItem key={acc.id} value={acc.id} className="text-black hover:bg-gray-50 focus:bg-gray-50">
                      {acc.name} {acc.price > 0 && `(+${acc.price} F)`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Boisson (pour les menus) */}
          {isMenu && (
            <div className="space-y-3 spring-animation" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold text-black">Boisson</h4>
              <Select 
                value={selectedDrink?.id} 
                onValueChange={(value) => setSelectedDrink(drinks.find(d => d.id === value))}
              >
                <SelectTrigger className="bg-white border-gray-200 text-black hover:border-primary/50 transition-colors">
                  <SelectValue placeholder="Choisissez votre boisson" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  {drinks.map((drink) => (
                    <SelectItem key={drink.id} value={drink.id} className="text-black hover:bg-gray-50 focus:bg-gray-50">
                      {drink.name} {drink.price > 0 && `(+${drink.price} F)`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Sauces */}
          <div className="space-y-3 spring-animation" style={{ animationDelay: '0.5s' }}>
            <h4 className="font-semibold text-black">Sauces (optionnel)</h4>
            <div className="grid grid-cols-2 gap-2">
              {sauces.map((sauce) => (
                <div key={sauce.id} className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <Checkbox
                    id={sauce.id}
                    checked={selectedSauces.some(s => s.id === sauce.id)}
                    onCheckedChange={() => handleSauceToggle(sauce)}
                    className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label htmlFor={sauce.id} className="text-sm text-black cursor-pointer">
                    {sauce.name} {sauce.price > 0 && `(+${sauce.price} F)`}
                  </label>
                </div>
              ))}
            </div>
            {selectedSauces.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {selectedSauces.map((sauce) => (
                  <Badge key={sauce.id} variant="secondary" className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                    {sauce.name}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Suppléments */}
          <div className="space-y-3 spring-animation" style={{ animationDelay: '0.6s' }}>
            <h4 className="font-semibold text-black">Suppléments (optionnel)</h4>
            <div className="grid grid-cols-2 gap-2">
              {supplements.map((supplement) => (
                <div key={supplement.id} className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <Checkbox
                    id={supplement.id}
                    checked={selectedSupplements.some(s => s.id === supplement.id)}
                    onCheckedChange={() => handleSupplementToggle(supplement)}
                    className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label htmlFor={supplement.id} className="text-sm text-black cursor-pointer">
                    {supplement.name} (+{supplement.price} F)
                  </label>
                </div>
              ))}
            </div>
            {selectedSupplements.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {selectedSupplements.map((supplement) => (
                  <Badge key={supplement.id} variant="secondary" className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                    {supplement.name}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-3 spring-animation" style={{ animationDelay: '0.7s' }}>
          <div className="flex-1 text-center sm:text-left">
            <span className="text-lg font-bold text-primary">
              Total: {calculateTotalPrice()} F
            </span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="border-gray-200 text-black hover:bg-gray-50 transition-all duration-200 hover:scale-105">
              Annuler
            </Button>
            <Button 
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
              Ajouter au panier
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemModal; 