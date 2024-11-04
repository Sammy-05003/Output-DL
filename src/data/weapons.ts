export const WEAPONS = [
  {
    id: 'rifle1',
    name: 'AK-203',
    type: 'Assault Rifle',
    image: 'https://images.unsplash.com/photo-1632435499152-18838be77960?auto=format&fit=crop&w=800&q=80',
    description: '7.62×39mm assault rifle',
    stock: 2500,
    criticalLevel: 1000,
    monthlyProduction: 500
  },
  {
    id: 'rifle2',
    name: 'INSAS',
    type: 'Assault Rifle',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80',
    description: '5.56×45mm NATO assault rifle',
    stock: 3500,
    criticalLevel: 1200,
    monthlyProduction: 600
  },
  {
    id: 'rifle3',
    name: 'SIG 716i',
    type: 'Battle Rifle',
    image: 'https://images.unsplash.com/photo-1632435499152-18838be77960?auto=format&fit=crop&w=800&q=80',
    description: '7.62×51mm NATO battle rifle',
    stock: 1800,
    criticalLevel: 800,
    monthlyProduction: 400
  }
];

export const AMMUNITION: Record<string, Array<{
  id: string;
  name: string;
  type: string;
  image: string;
  stock: number;
  criticalLevel: number;
  monthlyProduction: number;
}>> = {
  'rifle1': [
    { 
      id: 'ammo1', 
      name: '7.62×39mm', 
      type: 'Standard', 
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&q=80',
      stock: 150000,
      criticalLevel: 50000,
      monthlyProduction: 30000
    },
    { 
      id: 'ammo2', 
      name: '7.62×39mm', 
      type: 'Tracer', 
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44?auto=format&fit=crop&w=400&q=80',
      stock: 50000,
      criticalLevel: 20000,
      monthlyProduction: 10000
    }
  ],
  'rifle2': [
    { 
      id: 'ammo3', 
      name: '5.56×45mm', 
      type: 'Standard', 
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&q=80',
      stock: 200000,
      criticalLevel: 60000,
      monthlyProduction: 40000
    },
    { 
      id: 'ammo4', 
      name: '5.56×45mm', 
      type: 'Tracer', 
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44?auto=format&fit=crop&w=400&q=80',
      stock: 60000,
      criticalLevel: 25000,
      monthlyProduction: 15000
    }
  ],
  'rifle3': [
    { 
      id: 'ammo5', 
      name: '7.62×51mm', 
      type: 'Standard', 
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&q=80',
      stock: 180000,
      criticalLevel: 55000,
      monthlyProduction: 35000
    },
    { 
      id: 'ammo6', 
      name: '7.62×51mm', 
      type: 'Tracer', 
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44?auto=format&fit=crop&w=400&q=80',
      stock: 45000,
      criticalLevel: 18000,
      monthlyProduction: 12000
    }
  ]
};