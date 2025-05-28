import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHamburger, 
  faHeart, 
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'À Propos - Grab',
  description: 'Découvrez l\'histoire de Grab, le meilleur restaurant de burgers premium à Dakar depuis 20 ans, spécialisé dans les burgers gourmands et les grillades.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add"
            alt="Grab Restaurant"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold font-permanent-marker text-primary mb-6 drop-shadow-2xl">
              Notre Histoire
            </h1>
            <p className="text-xl text-white/90">
              Depuis 20 ans, nous partageons notre passion des burgers gourmands et des grillades premium dans une ambiance moderne et conviviale.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-permanent-marker text-primary mb-4">
                L&apos;Excellence du Burger à Dakar
              </h2>
              <p className="text-xl text-muted-foreground">
                Depuis plus de 20 ans, Grab révolutionne la scène culinaire dakaroise avec ses authentiques burgers gourmands et ses grillades premium. Notre restaurant est né d&apos;une passion pour la cuisine américaine moderne et d&apos;un amour pour le Sénégal.
              </p>
              <p className="text-xl text-muted-foreground">
                Situé dans le charmant quartier de Ngor, notre établissement est devenu un lieu de rendez-vous incontournable pour les amateurs de burgers de qualité et d&apos;ambiance moderne et chaleureuse.
              </p>
            </div>
            <div className="relative group overflow-hidden aspect-[4/3] rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                alt="Intérieur du restaurant"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-permanent-marker text-primary mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Notre engagement envers la qualité et l&apos;excellence se reflète dans chaque aspect de notre restaurant.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHamburger} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Qualité Premium</h3>
              <p className="text-muted-foreground">
                Des ingrédients frais et de qualité supérieure, sélectionnés avec soin pour garantir une expérience gustative exceptionnelle.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHeart} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Passion</h3>
              <p className="text-muted-foreground">
                Une équipe passionnée qui met tout son cœur dans la préparation de chaque burger et grillade.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Convivialité</h3>
              <p className="text-muted-foreground">
                Une ambiance moderne et chaleureuse où chaque client se sent comme chez lui.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-permanent-marker text-primary mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Notre équipe de passionnés travaille chaque jour pour vous offrir une expérience culinaire inoubliable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
                alt="Notre Chef"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 text-primary">Notre Chef</h3>
                  <p className="text-sm opacity-90">20 ans d&apos;expérience dans la cuisine de burgers gourmands et grillades premium</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
                alt="Notre Équipe"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 text-primary">Notre Équipe</h3>
                  <p className="text-sm opacity-90">Des professionnels passionnés à votre service</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330"
                alt="Notre Équipe"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 text-primary">Notre Équipe</h3>
                  <p className="text-sm opacity-90">Ensemble, nous créons des moments gourmands inoubliables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 