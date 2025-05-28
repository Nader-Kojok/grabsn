import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faLocationDot, 
  faClock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Grab Logo"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Depuis 20 ans, nous partageons notre passion des burgers gourmands et des grillades premium dans une ambiance moderne et conviviale à Ngor.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/Grab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Suivez-nous sur Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/Grab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Suivez-nous sur Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/221773512197" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <nav className="space-y-3">
              <Link 
                href="/"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="/about"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                À Propos
              </Link>
              <Link 
                href="/menu"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Menu
              </Link>
              <Link 
                href="/contact"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:+221773512197"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-3" />
                +221 77 351 21 97
              </a>
              <a 
                href="https://wa.me/221773512197"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 mr-3" />
                WhatsApp
              </a>
              <a 
                href="mailto:contact@Grab.sn"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-3" />
                contact@Grab.sn
              </a>
              <p className="flex items-start text-gray-300">
                <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 mr-3 mt-1" />
                <span>Ngor Almadies<br />Les Almadies, Dakar, Sénégal</span>
              </p>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Horaires</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-3" />
                <div>
                  <p className="font-medium">Lundi - Dimanche</p>
                  <p>8h30 - 2h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-300 space-y-2">
            <p>
              © {currentYear} Grab. Tous droits réservés.
            </p>
            <p className="text-sm">
              Développé avec ❤️ par <a href="https://agencearcane.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/90">Agence Arcane</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 