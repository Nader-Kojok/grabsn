'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getRestaurantStatus, getStatusMessage, getTimeUntilClosing, type RestaurantStatus } from '@/lib/utils/restaurant-status';

export const StatusModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<RestaurantStatus>('open');

  useEffect(() => {
    const currentStatus = getRestaurantStatus();
    const timeUntilClosing = getTimeUntilClosing();
    if (currentStatus === 'closed' || currentStatus === 'closing-soon' || (timeUntilClosing !== null && timeUntilClosing <= 0)) {
      setStatus(currentStatus);
      setIsOpen(true);
    }
  }, []);

  const getModalIcon = (status: RestaurantStatus): string => {
    const timeUntilClosing = getTimeUntilClosing();
    if (timeUntilClosing !== null && timeUntilClosing <= 0) {
      return '🌙';
    }
    switch (status) {
      case 'closed':
        return '👋';
      case 'closing-soon':
        return '⏰';
      default:
        return '🍕';
    }
  };

  const getModalTitle = (status: RestaurantStatus): string => {
    const timeUntilClosing = getTimeUntilClosing();
    if (timeUntilClosing !== null && timeUntilClosing <= 0) {
      return 'Service terminé';
    }
    switch (status) {
      case 'closed':
        return 'À bientôt !';
      case 'closing-soon':
        return 'Dernières commandes';
      default:
        return 'Information';
    }
  };

  const getModalMessage = (status: RestaurantStatus): string => {
    const timeUntilClosing = getTimeUntilClosing();
    if (timeUntilClosing !== null && timeUntilClosing <= 0) {
      return 'Nous avons terminé notre service pour aujourd\'hui. Nous vous attendons avec plaisir lors de notre prochaine ouverture !';
    }
    switch (status) {
      case 'closing-soon':
        return 'Pour vous garantir la meilleure qualité de service, nous limitons les commandes en fin de service.';
      case 'closed':
        return 'Nous avons hâte de vous retrouver pour de nouvelles saveurs !';
      default:
        return '';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-playfair text-center flex flex-col items-center gap-2">
            <span className="text-4xl">{getModalIcon(status)}</span>
            {getModalTitle(status)}
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4 py-4">
          <p className="text-lg font-medium">
            {getStatusMessage(status)}
          </p>
          <p className="text-sm text-gray-600">
            {getModalMessage(status)}
          </p>
          <Button 
            onClick={() => setIsOpen(false)}
            className="bg-primary hover:bg-secondary"
          >
            J&apos;ai compris
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 