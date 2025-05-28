"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarIcon } from 'lucide-react';

interface ReservationModalProps {
  children: React.ReactNode;
}

export function ReservationModal({ children }: ReservationModalProps) {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Nouvelle réservation:
- Nom: ${name}
- Téléphone: ${phone}
- Date: ${date ? format(date, 'dd MMMM yyyy', { locale: fr }) : ''}
- Heure: ${time}
- Nombre de personnes: ${guests}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/221773512197?text=${encodedMessage}`, '_blank');
  };

  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "19:00", "19:30", "20:00", "20:30", "21:00"
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white border-gray-200 modal-content">
        <DialogHeader className="spring-animation">
          <DialogTitle className="text-2xl font-bold text-black">Réserver une table</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2 spring-animation" style={{ animationDelay: '0.1s' }}>
            <Label htmlFor="name" className="text-black font-medium">Nom complet</Label>
            <Input
              id="name"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-primary focus:ring-primary transition-all duration-200 hover:border-primary/50"
              required
            />
          </div>
          
          <div className="space-y-2 spring-animation" style={{ animationDelay: '0.2s' }}>
            <Label htmlFor="phone" className="text-black font-medium">Numéro de téléphone</Label>
            <Input
              id="phone"
              placeholder="Votre numéro"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-primary focus:ring-primary transition-all duration-200 hover:border-primary/50"
              required
            />
          </div>

          <div className="space-y-2 spring-animation" style={{ animationDelay: '0.3s' }}>
            <Label className="text-black font-medium">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white border-gray-200 text-black hover:bg-gray-50 transition-all duration-200 hover:border-primary/50",
                    !date && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'dd MMMM yyyy', { locale: fr }) : <span>Choisir une date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border-gray-200" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  locale={fr}
                  className="bg-white"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2 spring-animation" style={{ animationDelay: '0.4s' }}>
            <Label className="text-black font-medium">Heure</Label>
            <Select value={time} onValueChange={setTime} required>
              <SelectTrigger className="bg-white border-gray-200 text-black hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Choisir une heure" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot} className="text-black hover:bg-gray-50 focus:bg-gray-50">
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 spring-animation" style={{ animationDelay: '0.5s' }}>
            <Label className="text-black font-medium">Nombre de personnes</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="bg-white border-gray-200 text-black hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Nombre de personnes" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                {[...Array(8)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()} className="text-black hover:bg-gray-50 focus:bg-gray-50">
                    {i + 1} {i + 1 === 1 ? 'personne' : 'personnes'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="spring-animation" style={{ animationDelay: '0.6s' }}>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Envoyer la demande via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 