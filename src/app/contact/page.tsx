'use client';

import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

export default function ContactPage() {
  const handleCall = () => {
    window.location.href = 'tel:+221773512197';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/221773512197';
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-permanent-marker text-black mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accueillir dans les meilleures conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold font-permanent-marker text-black mb-8">Nos Informations</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MdLocationOn className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">Adresse</h3>
                    <p className="text-gray-600">Ngor Almadies</p>
                    <p className="text-gray-600">Les Almadies, Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <FaPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">Téléphone</h3>
                    <p className="text-gray-600">+221 77 351 21 97</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MdEmail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">Email</h3>
                    <p className="text-gray-600">contact@Grab.sn</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleCall}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-bold shadow-lg hover:shadow-xl"
                  aria-label="Appeler"
                >
                  <FaPhone className="mr-2" />
                  Appeler
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#25D366]/90 transition-colors font-bold shadow-lg hover:shadow-xl"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold font-permanent-marker text-black mb-6">Horaires d&apos;ouverture</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-black">Lundi</span>
                  <span className="text-primary font-medium">8h30 - 2h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-black">Mardi</span>
                  <span className="text-primary font-medium">8h30 - 2h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-black">Mercredi</span>
                  <span className="text-primary font-medium">8h30 - 2h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-black">Jeudi</span>
                  <span className="text-primary font-medium">8h30 - 2h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-black">Vendredi</span>
                  <span className="text-primary font-medium">8h30 - 2h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-black">Samedi</span>
                  <span className="text-primary font-medium">8h30 - 2h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-black">Dimanche</span>
                  <span className="text-primary font-medium">8h30 - 2h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.05876641711175!2d-17.50771900000003!3d14.748554599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec112ea14407dcd%3A0x925c3fa2c9010a4c!2sBurg%20%26%20Co!5e0!3m2!1sfr!2sfr!4v1710347161811!5m2!1sfr!2sfr"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Google Maps - Localisation Grab"
              aria-label="Carte Google Maps montrant l'emplacement de Grab"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 