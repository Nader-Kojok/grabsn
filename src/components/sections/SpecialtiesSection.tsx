import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const SpecialtiesSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-permanent-marker text-white mb-4">
            Nos Spécialités
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Notre passion pour les burgers gourmands se reflète dans chaque création que nous préparons. Découvrez notre savoir-faire artisanal et notre amour pour les ingrédients de qualité premium.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              alt="Burgers artisanaux"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2 text-primary">L&apos;Art du Burger</h3>
                <p className="text-sm opacity-90 leading-relaxed">Nos steaks hachés sont préparés quotidiennement avec de la viande fraîche et grillés à la perfection pour un goût authentique et savoureux.</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1594007654729-407eedc4be65"
              alt="Préparation artisanale"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2 text-primary">Préparation Artisanale</h3>
                <p className="text-sm opacity-90 leading-relaxed">Chaque jour, notre équipe prépare les pains briochés maison et les sauces selon nos recettes secrètes pour une expérience unique.</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d"
              alt="Ingrédients premium"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2 text-primary">Ingrédients Premium</h3>
                <p className="text-sm opacity-90 leading-relaxed">Des produits frais et de qualité supérieure, choisis avec soin auprès de nos fournisseurs partenaires pour garantir l&apos;excellence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/menu">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Découvrir Notre Carte
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}; 