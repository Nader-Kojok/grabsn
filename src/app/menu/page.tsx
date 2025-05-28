'use client';

import { useState } from 'react';
import MenuCard from '@/components/menu/MenuCard';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { MenuItem } from '@/lib/store';

// Menu items data
const menuItems: MenuItem[] = [
  // BURGERS
  {
    id: 1,
    name: 'Classic Burger',
    description: 'Steak haché, salade, tomate, oignon, cornichons, sauce burger',
    pricePantagruel: 4500,
    priceGargantua: 6500,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },
  {
    id: 2,
    name: 'Cheese Burger',
    description: 'Steak haché, fromage cheddar, salade, tomate, oignon, sauce burger',
    pricePantagruel: 5000,
    priceGargantua: 7000,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add',
  },
  {
    id: 3,
    name: 'Bacon Burger',
    description: 'Steak haché, bacon croustillant, fromage, salade, tomate, sauce BBQ',
    pricePantagruel: 5500,
    priceGargantua: 7500,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5',
  },
  {
    id: 4,
    name: 'Double Cheese',
    description: 'Double steak haché, double fromage, salade, tomate, oignon, sauce spéciale',
    pricePantagruel: 6500,
    priceGargantua: 8500,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9',
  },
  {
    id: 5,
    name: 'Chicken Burger',
    description: 'Filet de poulet grillé, salade, tomate, avocat, sauce caesar',
    pricePantagruel: 5200,
    priceGargantua: 7200,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
  },
  {
    id: 6,
    name: 'Fish Burger',
    description: 'Filet de poisson pané, salade, tomate, sauce tartare',
    pricePantagruel: 5800,
    priceGargantua: 7800,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5',
  },
  {
    id: 7,
    name: 'Veggie Burger',
    description: 'Steak végétarien, avocat, salade, tomate, oignon, sauce verte',
    pricePantagruel: 4800,
    priceGargantua: 6800,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f',
  },
  {
    id: 8,
    name: 'BBQ Burger',
    description: 'Steak haché, oignons caramélisés, fromage, bacon, sauce BBQ',
    pricePantagruel: 6000,
    priceGargantua: 8000,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
  },

  // SANDWICHS
  {
    id: 9,
    name: 'Club Sandwich',
    description: 'Poulet grillé, bacon, salade, tomate, avocat, mayonnaise',
    pricePantagruel: 4200,
    priceGargantua: 6200,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586',
  },
  {
    id: 10,
    name: 'Croque Monsieur',
    description: 'Jambon, fromage gruyère, béchamel, pain de mie grillé',
    pricePantagruel: 3800,
    priceGargantua: 5800,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af',
  },
  {
    id: 11,
    name: 'Sandwich Thon',
    description: 'Thon, salade, tomate, œuf dur, mayonnaise, pain complet',
    pricePantagruel: 3500,
    priceGargantua: 5500,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569',
  },
  {
    id: 12,
    name: 'Panini Poulet',
    description: 'Poulet grillé, poivrons, fromage mozzarella, pesto',
    pricePantagruel: 4000,
    priceGargantua: 6000,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
  },

  // GRILL
  {
    id: 13,
    name: 'Entrecôte Grillée',
    description: 'Entrecôte 300g, frites maison, salade verte, sauce au choix',
    pricePantagruel: 8500,
    priceGargantua: 10500,
    category: 'grill',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
  },
  {
    id: 14,
    name: 'Brochettes de Bœuf',
    description: 'Brochettes de bœuf marinées, légumes grillés, riz pilaf',
    pricePantagruel: 7200,
    priceGargantua: 9200,
    category: 'grill',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
  },
  {
    id: 15,
    name: 'Poulet Grillé',
    description: 'Demi-poulet grillé, frites, salade coleslaw, sauce BBQ',
    pricePantagruel: 6500,
    priceGargantua: 8500,
    category: 'grill',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
  },
  {
    id: 16,
    name: 'Côtes de Porc',
    description: 'Côtes de porc grillées, sauce BBQ, frites, salade',
    pricePantagruel: 7500,
    priceGargantua: 9500,
    category: 'grill',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
  },
];

const categories = [
  { 
    id: 'burger',
    name: 'Burgers',
    icon: '🍔',
    items: menuItems.filter(item => item.category === 'burger')
  },
  { 
    id: 'sandwich',
    name: 'Sandwichs',
    icon: '🥪',
    items: menuItems.filter(item => item.category === 'sandwich')
  },
  { 
    id: 'grill',
    name: 'Grill',
    icon: '🥩',
    items: menuItems.filter(item => item.category === 'grill')
  },
];

export default function MenuPage() {
  const [openCategories, setOpenCategories] = useState<string[]>(['burger']);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-permanent-marker text-black mb-4">
            Notre Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos délicieux burgers, sandwichs et grillades préparés avec des ingrédients frais et de qualité
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <span>Simple : Burger + Frites</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span>Menu : Burger + Frites + Boisson</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg">
              <Collapsible 
                open={openCategories.includes(category.id)}
                onOpenChange={() => toggleCategory(category.id)}
              >
                <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-black">{category.name}</h2>
                    <span className="text-sm text-gray-600">
                      ({category.items.length} {category.items.length > 1 ? 'items' : 'item'})
                    </span>
                  </div>
                  {openCategories.includes(category.id) ? (
                    <ChevronUp className="h-6 w-6 text-primary" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-primary" />
                  )}
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="p-6 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map((item) => (
                        <MenuCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 