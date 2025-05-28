import { useCartStore, type CartItemOptions } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from 'react';
import OrderForm from '../order/OrderForm';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper function to generate options ID
const generateOptionsId = (options: CartItemOptions): string => {
  const parts = [
    options.accompaniment?.id || 'no-acc',
    options.drink?.id || 'no-drink',
    options.sauces.map((s) => s.id).sort().join('-') || 'no-sauces',
    options.supplements.map((s) => s.id).sort().join('-') || 'no-supplements'
  ];
  return parts.join('_');
};

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, total, removeItem, addItem, clearCart } = useCartStore();
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg bg-white border-gray-200 sheet-content">
          <SheetHeader className="spring-animation">
            <SheetTitle className="font-playfair text-2xl text-black">Votre Panier</SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] spring-animation">
              <p className="text-gray-600 mb-4">Votre panier est vide.</p>
              <Link href="/menu">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" onClick={onClose}>
                  Voir le menu
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col h-[calc(100vh-200px)]">
              <ScrollArea className="flex-grow pr-4">
                <div className="space-y-4">
                  {items.map((item, index) => {
                    const price = item.size === 'Pantagruel' ? item.pricePantagruel : item.priceGargantua;
                    const optionsId = generateOptionsId(item.options);
                    return (
                      <div 
                        key={`${item.id}-${item.size}-${optionsId}`}
                        className="flex gap-3 items-center bg-gray-50 p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 hover:scale-[1.02] spring-animation"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="text-sm font-bold truncate text-black">{item.name}</h3>
                          <p className="text-xs text-gray-600">Taille: {item.size}</p>
                          <p className="text-sm text-primary font-semibold">{price} F</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeItem(item.id, item.size, optionsId)}
                            disabled={item.quantity <= 1}
                            className="h-7 w-7 p-0 border-gray-200 text-black hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                          >
                            -
                          </Button>
                          <span className="w-4 text-center text-sm text-black">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addItem(item, item.size, item.options)}
                            className="h-7 w-7 p-0 border-gray-200 text-black hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 h-7 w-7 p-0 ml-2 transition-all duration-200 hover:scale-110"
                          onClick={() => removeItem(item.id, item.size, optionsId)}
                        >
                          <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>

              <div className="mt-8 space-y-6 border-t border-gray-200 pt-6 spring-animation" style={{ animationDelay: '0.3s' }}>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-black">Total</span>
                  <span className="font-bold text-xl text-primary">{total} F</span>
                </div>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    onClick={() => setIsOrderFormOpen(true)}
                  >
                    Commander
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-12 text-base border-gray-200 text-black hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                    onClick={clearCart}
                  >
                    Vider le panier
                  </Button>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
      />
    </>
  );
};

export default CartSidebar; 