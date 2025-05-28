type OpeningHours = {
  [key: string]: {
    open: string;
    close: string;
  } | 'closed';
};

export type RestaurantStatus = 'open' | 'closed' | 'closing-soon';

const OPENING_HOURS: OpeningHours = {
  'monday': 'closed',
  'tuesday': { open: '12:00', close: '00:00' },
  'wednesday': { open: '12:00', close: '00:00' },
  'thursday': { open: '12:00', close: '00:00' },
  'friday': { open: '11:30', close: '00:00' },
  'saturday': { open: '12:00', close: '00:00' },
  'sunday': { open: '12:00', close: '00:00' }
};

const CLOSING_SOON_THRESHOLD = 30; // minutes

const parseTime = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const getCurrentDayHours = () => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const currentDay = days[new Date().getDay()];
  return OPENING_HOURS[currentDay];
};

const adjustTimeForMidnight = (minutes: number): number => {
  return minutes === 0 ? 24 * 60 : minutes;
};

const formatMinutesRemaining = (minutes: number): string => {
  if (minutes <= 0) {
    return "plus de commandes possibles pour ce service";
  }
  if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} heure${hours > 1 ? 's' : ''}`;
  }
  return `${hours} heure${hours > 1 ? 's' : ''} et ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`;
};

export const getTimeUntilClosing = (): number | null => {
  const currentHours = getCurrentDayHours();
  
  if (currentHours === 'closed') {
    return null;
  }

  const now = new Date();
  const currentTime = parseTime(`${now.getHours()}:${now.getMinutes()}`);
  const closingTime = adjustTimeForMidnight(parseTime(currentHours.close));
  
  return Math.max(0, closingTime - currentTime - CLOSING_SOON_THRESHOLD);
};

export const getRestaurantStatus = (): RestaurantStatus => {
  const currentHours = getCurrentDayHours();
  
  if (currentHours === 'closed') {
    return 'closed';
  }

  const now = new Date();
  const currentTime = parseTime(`${now.getHours()}:${now.getMinutes()}`);
  const openingTime = parseTime(currentHours.open);
  const closingTime = adjustTimeForMidnight(parseTime(currentHours.close));

  // Si l'heure actuelle est avant l'ouverture ou après la fermeture
  if (currentTime < openingTime || currentTime >= closingTime) {
    return 'closed';
  }

  // Si l'heure actuelle est proche de la fermeture
  const minutesUntilClosing = closingTime - currentTime;
  if (minutesUntilClosing <= CLOSING_SOON_THRESHOLD) {
    return 'closing-soon';
  }

  return 'open';
};

export const getNextOpeningTime = (): string => {
  const currentHours = getCurrentDayHours();
  
  if (currentHours === 'closed') {
    // Trouver le prochain jour d'ouverture
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayNames = {
      'sunday': 'dimanche',
      'monday': 'lundi',
      'tuesday': 'mardi',
      'wednesday': 'mercredi',
      'thursday': 'jeudi',
      'friday': 'vendredi',
      'saturday': 'samedi'
    };
    const currentDayIndex = new Date().getDay();
    
    let nextOpenDay;
    let daysToAdd = 1;
    
    while (!nextOpenDay && daysToAdd <= 7) {
      const nextIndex = (currentDayIndex + daysToAdd) % 7;
      const nextDayKey = days[nextIndex];
      const nextDayHours = OPENING_HOURS[nextDayKey];
      if (nextDayHours !== 'closed') {
        nextOpenDay = {
          day: dayNames[nextDayKey as keyof typeof dayNames],
          hours: nextDayHours
        };
      }
      daysToAdd++;
    }
    
    if (nextOpenDay) {
      return `${nextOpenDay.day} à ${nextOpenDay.hours.open}`;
    }
    
    return 'Bientôt';
  }

  return currentHours.open;
};

export const getStatusMessage = (status: RestaurantStatus): string => {
  switch (status) {
    case 'open': {
      const timeUntilClosing = getTimeUntilClosing();
      if (timeUntilClosing !== null) {
        if (timeUntilClosing <= 0) {
          return 'Les commandes sont terminées pour ce service';
        }
        return `Ouvert - Commandes possibles pendant encore ${formatMinutesRemaining(timeUntilClosing)}`;
      }
      return 'Ouvert';
    }
    case 'closed':
      return `À bientôt ! Nous rouvrons ${getNextOpeningTime()}`;
    case 'closing-soon': {
      const timeUntilClosing = getTimeUntilClosing();
      if (timeUntilClosing !== null && timeUntilClosing <= 0) {
        return 'Les commandes sont terminées pour ce service';
      }
      return `Les commandes seront bientôt terminées (${formatMinutesRemaining(timeUntilClosing || 0)})`;
    }
    default:
      return '';
  }
}; 