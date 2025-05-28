import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/button';

export const SupportSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-permanent-marker text-black mb-6">
            Soutenez Grab
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Votre soutien compte énormément pour nous ! Partagez votre expérience et suivez-nous sur les réseaux sociaux pour rester informé de nos actualités.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Avis Google */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <FontAwesomeIcon 
                icon={faGoogle} 
                className="h-12 w-12 text-primary mb-4" 
              />
              <h3 className="text-2xl font-bold mb-4 text-black">Laissez un avis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Votre avis aide d&apos;autres clients à découvrir notre restaurant. Partagez votre expérience sur Google !
              </p>
              <a
                href="https://g.page/r/votre-id-google/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Donner votre avis
                </Button>
              </a>
            </div>

            {/* Réseaux Sociaux */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex justify-center gap-6 mb-6">
                <a
                  href="https://facebook.com/Grab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1877F2] transition-colors transform hover:scale-110"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
                </a>
                <a
                  href="https://instagram.com/Grab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E4405F] transition-colors transform hover:scale-110"
                  aria-label="Suivez-nous sur Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
                </a>
                <a
                  href="https://wa.me/221773512197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#25D366] transition-colors transform hover:scale-110"
                  aria-label="Contactez-nous sur WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Suivez-nous</h3>
              <p className="text-gray-600 leading-relaxed">
                Restez informé de nos nouveautés, événements spéciaux et offres exclusives en nous suivant sur les réseaux sociaux !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 