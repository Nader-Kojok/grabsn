import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Grab',
  description: 'Contactez Grab, le meilleur restaurant de burgers premium à Dakar. Réservations, informations et localisation aux Almadies.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 