const venues = [
  {
    id: 'blue-note',
    name: 'Blue Note Jazz Club',
    type: 'Jazz Club',
    location: 'Downtown District',
    capacity: 250,
    genre: 'Jazz, Blues, Soul',
    priceRange: '$25-$75',
    description: 'An intimate jazz club featuring world-class musicians and emerging talent. Known for its excellent acoustics and cozy atmosphere.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500',
    address: '131 W 3rd Street',
    phone: '(555) 123-4567',
    website: 'bluenote.example.com',
    hours: 'Wed-Sun: 7PM-2AM',
    upcomingEvents: [
      { date: '2024-03-15', artist: 'Miles Davis Tribute Band', price: '$35' },
      { date: '2024-03-22', artist: 'Sarah Chen Quartet', price: '$45' }
    ],
    amenities: ['Full Bar', 'Table Service', 'VIP Lounge', 'Parking'],
    rating: 4.8
  },
  {
    id: 'electric-warehouse',
    name: 'Electric Warehouse',
    type: 'Electronic Music Venue',
    location: 'Industrial Quarter',
    capacity: 1500,
    genre: 'EDM, House, Techno, Dubstep',
    priceRange: '$20-$60',
    description: 'A massive converted warehouse space featuring state-of-the-art sound systems and immersive light shows. The epicenter of electronic music in the city.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500',
    address: '789 Factory Road',
    phone: '(555) 987-6543',
    website: 'electricwarehouse.example.com',
    hours: 'Fri-Sat: 10PM-6AM',
    upcomingEvents: [
      { date: '2024-03-16', artist: 'DJ Nexus', price: '$40' },
      { date: '2024-03-23', artist: 'Bass Drop Festival', price: '$60' }
    ],
    amenities: ['3 Dance Floors', 'Outdoor Terrace', 'Food Trucks', 'Coat Check'],
    rating: 4.6
  },
  {
    id: 'acoustic-garden',
    name: 'The Acoustic Garden',
    type: 'Coffee House & Music Venue',
    location: 'University District',
    capacity: 100,
    genre: 'Folk, Acoustic, Singer-Songwriter, Indie',
    priceRange: '$10-$25',
    description: 'A cozy coffee house by day, intimate music venue by night. Perfect for discovering new singer-songwriters and enjoying acoustic performances.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500',
    address: '456 College Avenue',
    phone: '(555) 234-5678',
    website: 'acousticgarden.example.com',
    hours: 'Daily: 7AM-11PM',
    upcomingEvents: [
      { date: '2024-03-17', artist: 'Open Mic Night', price: '$10' },
      { date: '2024-03-24', artist: 'Emma Rodriguez', price: '$20' }
    ],
    amenities: ['Coffee Bar', 'Organic Food', 'WiFi', 'Study Space'],
    rating: 4.9
  },
  {
    id: 'rock-arena',
    name: 'Rock Arena',
    type: 'Concert Hall',
    location: 'Entertainment District',
    capacity: 3000,
    genre: 'Rock, Alternative, Metal, Punk',
    priceRange: '$30-$150',
    description: 'The premier destination for rock concerts featuring both legendary acts and rising stars. Known for incredible energy and unforgettable performances.',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500',
    address: '1000 Stadium Way',
    phone: '(555) 345-6789',
    website: 'rockarena.example.com',
    hours: 'Event Days Only',
    upcomingEvents: [
      { date: '2024-03-18', artist: 'Thunder Road', price: '$75' },
      { date: '2024-03-25', artist: 'The Rebels', price: '$55' }
    ],
    amenities: ['Stadium Seating', 'Multiple Bars', 'Merchandise Store', 'VIP Boxes'],
    rating: 4.7
  },
  {
    id: 'underground-hip-hop',
    name: 'The Underground',
    type: 'Hip-Hop Club',
    location: 'Arts District',
    capacity: 500,
    genre: 'Hip-Hop, Rap, R&B, Trap',
    priceRange: '$15-$40',
    description: 'The city\'s hub for hip-hop culture featuring live performances, DJ battles, and freestyle competitions. Where underground artists become legends.',
    image: 'https://images.unsplash.com/photo-1571266028243-d220c6a8d424?w=500',
    address: '222 Beats Street',
    phone: '(555) 456-7890',
    website: 'theunderground.example.com',
    hours: 'Thu-Sat: 9PM-3AM',
    upcomingEvents: [
      { date: '2024-03-19', artist: 'MC Lightning', price: '$25' },
      { date: '2024-03-26', artist: 'Beat Battle Championship', price: '$30' }
    ],
    amenities: ['Recording Studio', 'Graffiti Wall', 'Street Food', 'Merch Shop'],
    rating: 4.5
  },
  {
    id: 'symphony-hall',
    name: 'Grand Symphony Hall',
    type: 'Classical Music Hall',
    location: 'Cultural Center',
    capacity: 2200,
    genre: 'Classical, Orchestra, Opera, Chamber Music',
    priceRange: '$45-$200',
    description: 'A stunning architectural marvel with perfect acoustics, home to the City Philharmonic Orchestra and host to world-renowned classical performers.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500',
    address: '100 Mozart Plaza',
    phone: '(555) 567-8901',
    website: 'symphonyhall.example.com',
    hours: 'Box Office: Mon-Sat 10AM-6PM',
    upcomingEvents: [
      { date: '2024-03-20', artist: 'City Philharmonic: Beethoven Night', price: '$85' },
      { date: '2024-03-27', artist: 'Anna Petrov, Piano', price: '$120' }
    ],
    amenities: ['Premium Seating', 'Champagne Bar', 'Coat Check', 'Valet Parking'],
    rating: 4.9
  }
];

export default venues;