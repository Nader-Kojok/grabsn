import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { MenuItem } from '@/lib/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MenuItemModal from './MenuItemModal';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="group bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm italic leading-relaxed">
              {item.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-600">
                <span className="block">Simple: <span className="text-primary font-bold">{item.pricePantagruel} F</span></span>
                <span className="block">Menu: <span className="text-primary font-bold">{item.priceGargantua} F</span></span>
              </div>
            </div>
            <Button 
              onClick={handleOpenModal}
              className="bg-primary hover:bg-primary/90 text-white transition-all duration-200 font-bold rounded-xl px-6 shadow-lg hover:shadow-xl"
              aria-label={`Personnaliser et ajouter ${item.name} au panier`}
            >
              <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
              Personnaliser
            </Button>
          </div>
        </div>
      </div>

      <MenuItemModal 
        item={item}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default MenuCard; 