import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu - Grab',
  description: 'Découvrez notre menu de burgers premium, sandwichs gourmands et grillades. Des ingrédients frais et de qualité pour une expérience culinaire exceptionnelle à Dakar.',
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 