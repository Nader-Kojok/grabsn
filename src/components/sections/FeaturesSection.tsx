import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHamburger, 
  faBookOpen,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <FontAwesomeIcon icon={faHamburger} className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Notre Savoir-Faire</h3>
            <p className="text-gray-600 leading-relaxed">
              Des burgers gourmands grillés à la perfection, préparés avec passion par notre équipe de chefs expérimentés.
            </p>
          </div>
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <FontAwesomeIcon icon={faBookOpen} className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Notre Histoire</h3>
            <p className="text-gray-600 leading-relaxed">
              Une belle aventure qui dure depuis 20 ans, avec une équipe fidèle qui prend plaisir à vous accueillir chaque jour.
            </p>
          </div>
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <FontAwesomeIcon icon={faUtensils} className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Notre Ambiance</h3>
            <p className="text-gray-600 leading-relaxed">
              Un espace moderne et chaleureux où petits et grands se sentent comme à la maison, avec une terrasse conviviale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 