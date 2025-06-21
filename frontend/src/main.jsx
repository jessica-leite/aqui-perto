// Frontend React para o site "Aqui Perto"
// Tecnologias: React + TailwindCSS + React Router + ícones Lucide

import { useState } from 'react';
import { MapPin, Search, Store } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const mockBusinesses = [
  { id: 1, name: 'Padaria da Esquina', category: 'Padaria', location: 'Rua A, Brasília - DF' },
  { id: 2, name: 'Salão da Lú', category: 'Beleza', location: 'Av. Central, Brasília - DF' },
  { id: 3, name: 'Mercadinho do Zé', category: 'Mercado', location: 'Rua 2, Brasília - DF' },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const filtered = mockBusinesses.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Aqui Perto</h1>
        <p className="text-gray-600">Descubra pequenos comércios perto de você</p>
      </header>

      <section className="flex items-center gap-2 mb-6">
        <Input
          placeholder="Buscar por nome ou categoria..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow"
        />
        <Button variant="outline"><Search className="w-5 h-5" /></Button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(b => (
          <Card key={b.id} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2 text-blue-500">
                <Store className="w-5 h-5" />
                <h2 className="text-lg font-semibold">{b.name}</h2>
              </div>
              <p className="text-sm text-gray-600">{b.category}</p>
              <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <MapPin className="w-4 h-4" /> {b.location}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
