'use client';

import { useEffect, useState } from 'react';
import { getRestaurantStatus, getStatusMessage, getTimeUntilClosing, type RestaurantStatus } from '@/lib/utils/restaurant-status';

export const StatusBadge = () => {
  const [status, setStatus] = useState<RestaurantStatus>('open');

  useEffect(() => {
    // Mettre à jour le statut initialement
    setStatus(getRestaurantStatus());

    // Mettre à jour le statut toutes les minutes
    const interval = setInterval(() => {
      setStatus(getRestaurantStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: RestaurantStatus): string => {
    const timeUntilClosing = getTimeUntilClosing();
    if (timeUntilClosing !== null && timeUntilClosing <= 0) {
      return 'bg-red-100 text-red-800';
    }
    
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
      case 'closing-soon':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return '';
    }
  };

  const getDisplayMessage = (status: RestaurantStatus): string => {
    const timeUntilClosing = getTimeUntilClosing();
    if (timeUntilClosing !== null && timeUntilClosing <= 0) {
      return 'Fermé';
    }
    return getStatusMessage(status);
  };

  return (
    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
      {getDisplayMessage(status)}
    </div>
  );
}; 