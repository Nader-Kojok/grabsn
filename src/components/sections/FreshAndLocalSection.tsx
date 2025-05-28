import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf,
  faHandHoldingHeart,
  faFire,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export const FreshAndLocalSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-permanent-marker text-black mb-4">
              Notre Démarche &ldquo;Premium & Frais&rdquo;
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Nous nous engageons à proposer des burgers de qualité supérieure composés de produits frais et locaux, à haute valeur gustative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add"
                alt="Ingrédients frais pour burgers"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="bg-primary p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                  <FontAwesomeIcon icon={faLeaf} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Produits Locaux</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous sélectionnons avec soin nos ingrédients auprès des producteurs locaux pour garantir fraîcheur et qualité tout en soutenant l&apos;économie locale.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="bg-primary p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Fait Maison</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chaque burger est préparé à la minute, avec nos pains briochés maison préparés chaque jour et nos sauces élaborées selon nos recettes secrètes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="bg-primary p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                  <FontAwesomeIcon icon={faFire} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Grill Premium</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nos steaks sont grillés sur notre plancha professionnelle qui leur confère une cuisson parfaite et ce goût unique et savoureux que seule l&apos;expertise peut offrir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
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
      </div>
    </section>
  );
}; 