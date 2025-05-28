import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ReservationModal } from '@/components/reservation-modal';

export const CTASection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-permanent-marker text-white mb-6">
          Venez Savourer l&apos;Excellence
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Que ce soit pour un burger gourmand entre amis, un dîner en famille ou une grillade premium, notre équipe sera heureuse de vous accueillir dans notre restaurant moderne à Ngor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="w-full sm:w-auto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg w-full sm:w-[200px] h-[60px] border-2 border-primary hover:border-primary/90 flex items-center justify-center font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Commander
            </Button>
          </Link>
          <ReservationModal>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-primary/20 text-lg w-full sm:w-[200px] h-[60px] border-2 border-white hover:border-primary text-white hover:text-white transition-all duration-200 flex items-center justify-center font-bold rounded-xl shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Réserver une table
            </Button>
          </ReservationModal>
        </div>
      </div>
    </section>
  );
}; 