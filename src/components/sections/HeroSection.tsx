import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ReservationModal } from '@/components/reservation-modal';

export const HeroSection = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center bg-white">
      <div className="absolute inset-0 z-0 pt-16">
        <Image
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
          alt="Burger délicieux"
          fill
          className="object-cover brightness-75 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-permanent-marker mb-6 text-white drop-shadow-2xl">
            Grab
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-white">
            Restaurant de Burgers Premium
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Situé au cœur des Almadies à Dakar, Grab est réputé pour ses délicieux burgers gourmands, ses sandwichs savoureux et ses grillades premium. Profitez de notre ambiance moderne et de notre terrasse à deux pas de la plage de Ngor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu" className="w-full sm:w-auto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg w-full sm:w-[200px] h-[60px] border-2 border-primary hover:border-primary/90 flex items-center justify-center font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Commander
              </Button>
            </Link>
            <ReservationModal>
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-primary/20 text-lg w-full sm:w-[200px] h-[60px] border-2 border-white hover:border-primary text-white hover:text-white transition-all duration-200 flex items-center justify-center font-bold rounded-xl shadow-lg hover:shadow-xl"
              >
                Réserver une table
              </Button>
            </ReservationModal>
          </div>
        </div>
      </div>
    </section>
  );
};