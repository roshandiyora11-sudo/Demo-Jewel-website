export const products = [
  // DIAMOND RINGS
  { 
    id: 1, name: 'Aurora Diamond Ring', price: '$2,400', 
    img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1588444837495-c6cfaf504670?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1200'
    ],
    material: 'Diamond', type: 'Ring', category: 'DIAMOND', occasion: 'Wedding', gender: 'Women', 
    description: 'A breathtaking 1.5 carat round-cut diamond set in 18k white gold.', 
    details: [{ label: 'Metal', value: '18k White Gold' }, { label: 'Stone', value: 'Conflict-free Diamond' }] 
  },
  { 
    id: 2, name: 'Celestial Solitaire', price: '$4,100', 
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1602751584552-8ba77eaa704c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=1200'
    ],
    material: 'Diamond', type: 'Ring', category: 'DIAMOND', occasion: 'Wedding', gender: 'Women', 
    description: 'Exquisite solitaire perfection.', 
    details: [{ label: 'Metal', value: 'Platinum' }, { label: 'Stone', value: 'D-Color Diamond' }] 
  },
  { 
    id: 3, name: 'Halo Infinity Ring', price: '$3,200', img: '/assets/images/halo_infinity_ring.png', 
    gallery: [
      '/assets/images/halo_infinity_ring.png',
      'https://images.unsplash.com/photo-1627250329059-04d7776106c5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200'
    ],
    material: 'Diamond', type: 'Ring', category: 'DIAMOND', occasion: 'Wedding', gender: 'Women', 
    description: 'Infinite sparkle with a halo setting.', 
    details: [{ label: 'Metal', value: '18k White Gold' }] 
  },
  
  // GOLD BANGLES
  { 
    id: 4, name: 'Heritage Gold Bangle', price: '$1,850', 
    img: 'https://images.unsplash.com/photo-1535633302704-b02923659a38?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1535633302704-b02923659a38?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1611085583191-a3b131267881?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200'
    ],
    material: 'Gold', type: 'Bangle', category: 'GOLD', occasion: 'Daily Wear', gender: 'Women', 
    description: 'Traditional hand-engraved 22k gold bangle.', 
    details: [{ label: 'Metal', value: '22k Yellow Gold' }, { label: 'Weight', value: '24.5g' }] 
  },
  { 
    id: 5, name: 'Modernist Gold Cuff', price: '$2,100', img: '/assets/images/p1.png', 
    gallery: [
      '/assets/images/p1.png',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1544441892-0545fdf245b7?auto=format&fit=crop&q=80&w=1200'
    ],
    material: 'Gold', type: 'Bangle', category: 'GOLD', occasion: 'Daily Wear', gender: 'Women', 
    description: 'Sleek 18k gold design for the modern woman.', 
    details: [{ label: 'Metal', value: '18k Yellow Gold' }] 
  },
  { 
    id: 6, name: 'Filigree Temple Bangle', price: '$1,550', 
    img: 'https://images.unsplash.com/photo-1576444038440-1da01dfbcba3?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1576444038440-1da01dfbcba3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1511551203424-9b25d007c571?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200'
    ],
    material: 'Gold', type: 'Bangle', category: 'GOLD', occasion: 'Wedding', gender: 'Women', 
    description: 'Classic filigree work inspired by temple art.', 
    details: [{ label: 'Metal', value: '22k Gold' }] 
  },

  // NECKLACES
  { 
    id: 7, name: 'Luminous Pearl Drop', price: '$1,200', 
    img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200'
    ],
    material: 'Gold', type: 'Necklace', category: 'NEW', occasion: 'Gifting', gender: 'Women', 
    description: 'Elegant South Sea pearls Suspended from 14k gold.', 
    details: [{ label: 'Metal', value: '14k Gold' }] 
  },
  { 
    id: 8, name: 'Diamond Rivieria', price: '$8,500', img: '/assets/images/p2.png', 
    gallery: [
      '/assets/images/p2.png', 
      'https://images.unsplash.com/photo-1511551203424-9b25d007c571?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590548784180-2016335391e4?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Diamond', type: 'Necklace', category: 'DIAMOND', occasion: 'Wedding', gender: 'Women', 
    description: 'A continuous stream of brilliance.', 
    details: [{ label: 'Metal', value: '18k Gold' }] 
  },
  { 
    id: 9, name: 'Royal Emerald Choker', price: '$12,400', img: '/assets/images/p3.png', 
    gallery: [
      '/assets/images/p3.png', 
      'https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Necklace', category: 'BEST SELLER', occasion: 'Wedding', gender: 'Women', 
    description: 'Pure emerald brilliance.', 
    details: [{ label: 'Metal', value: '18k Yellow Gold' }] 
  },

  // EARRINGS
  { 
    id: 10, name: 'Diamond Studs (1ct)', price: '$1,500', 
    img: 'https://images.unsplash.com/photo-1630019051930-47382dbdbef7?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1630019051930-47382dbdbef7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590548784180-2016335391e4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Diamond', type: 'Earring', category: 'DIAMOND', occasion: 'Daily Wear', gender: 'Women', 
    description: 'Classic solitaire studs.', 
    details: [{ label: 'Metal', value: '18k White Gold' }] 
  },
  { 
    id: 11, name: 'Gold Jhumkas', price: '$1,100', 
    img: 'https://images.unsplash.com/photo-1635767798638-3e2807e1619b?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1635767798638-3e2807e1619b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Earring', category: 'GOLD', occasion: 'Wedding', gender: 'Women', 
    description: 'Traditional gold bells.', 
    details: [{ label: 'Metal', value: '22k Gold' }] 
  },
  { 
    id: 12, name: 'Pearl Hoop Earrings', price: '$750', 
    img: 'https://images.unsplash.com/photo-1544441892-0545fdf245b7?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1544441892-0545fdf245b7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Earring', category: 'GOLD', occasion: 'Daily Wear', gender: 'Women', 
    description: 'Modern hoops with a classic touch.', 
    details: [{ label: 'Metal', value: '14k Rose Gold' }] 
  },

  // PENDANTS
  { 
    id: 13, name: 'Celestial Star Pendant', price: '$950', 
    img: 'https://images.unsplash.com/photo-1632062590202-0e9debe8942b?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1632062590202-0e9debe8942b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1620608560271-70014022646c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1589128504748-0ca1a9423659?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Pendant', category: 'NEW', occasion: 'Daily Wear', gender: 'Women', 
    description: 'A tiny spark in the night sky.', 
    details: [{ label: 'Metal', value: '18k Gold' }] 
  },
  { 
    id: 14, name: 'Initial Gold Pendant', price: '$450', 
    img: 'https://images.unsplash.com/photo-1620608560271-70014022646c?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1620608560271-70014022646c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1632062590202-0e9debe8942b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Pendant', category: 'GOLD', occasion: 'Gifting', gender: 'Women', 
    description: 'Personalized luxury.', 
    details: [{ label: 'Metal', value: '14k Gold' }] 
  },

  // DIAMOND BANGLES
  { 
    id: 15, name: 'Icy Splendor Bangle', price: '$5,800', 
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1544441892-0545fdf245b7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Diamond', type: 'Bangle', category: 'DIAMOND', occasion: 'Wedding', gender: 'Women', 
    description: 'A row of brilliant-cut diamonds.', 
    details: [{ label: 'Metal', value: 'Platinum' }] 
  },
  { 
    id: 16, name: 'Rose Petal Diamond Cuff', price: '$4,200', 
    img: 'https://images.unsplash.com/photo-1535633302704-b02923659a38?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1535633302704-b02923659a38?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Diamond', type: 'Bangle', category: 'DIAMOND', occasion: 'Wedding', gender: 'Women', 
    description: 'Intricate rose gold with pave diamonds.', 
    details: [{ label: 'Metal', value: '18k Rose Gold' }] 
  },
  { 
    id: 17, name: 'Minimalist Diamond Band', price: '$1,900', 
    img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1598560917007-3914997c0067?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Diamond', type: 'Bangle', category: 'DIAMOND', occasion: 'Daily Wear', gender: 'Women', 
    description: 'Understated elegance for the wrist.', 
    details: [{ label: 'Metal', value: '18k White Gold' }] 
  },

  // MORE GOLD RINGS
  { 
    id: 18, name: 'Signet Gold Ring', price: '$750', 
    img: 'https://images.unsplash.com/photo-1510006780316-2699baa1abb7?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1510006780316-2699baa1abb7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1603561591411-071c4f713932?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1589128504748-0ca1a9423659?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Ring', category: 'GOLD', occasion: 'Daily Wear', gender: 'Men', 
    description: 'A bold statement.', 
    details: [{ label: 'Metal', value: '18k Gold' }] 
  },
  { 
    id: 19, name: 'Gold Knot Ring', price: '$550', 
    img: 'https://images.unsplash.com/photo-1603561591411-071c4f713932?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1603561591411-071c4f713932?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1510006780316-2699baa1abb7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1589128504748-0ca1a9423659?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Ring', category: 'GOLD', occasion: 'Daily Wear', gender: 'Women', 
    description: 'Symbolizing eternal bonds.', 
    details: [{ label: 'Metal', value: '22k Gold' }] 
  },

  // MEN'S JEWELLERY
  { 
    id: 20, name: 'Titanium Men Band', price: '$950', 
    img: 'https://images.unsplash.com/photo-1598560917007-3914997c0067?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1598560917007-3914997c0067?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1510006780316-2699baa1abb7?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Men', type: 'Ring', category: 'NEW', occasion: 'Wedding', gender: 'Men', 
    description: 'Strong and durable.', 
    details: [{ label: 'Metal', value: 'Titanium' }] 
  },
  { 
    id: 21, name: 'Gold Curb Chain', price: '$2,400', 
    img: 'https://images.unsplash.com/photo-1611085583191-a3b131267881?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1611085583191-a3b131267881?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1576444038440-1da01dfbcba3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1510006780316-2699baa1abb7?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Necklace', category: 'GOLD', occasion: 'Daily Wear', gender: 'Men', 
    description: 'Classic masculinity.', 
    details: [{ label: 'Metal', value: '22k Gold' }] 
  },
  
  // ADDITIONAL PRODUCTS
  { 
    id: 22, name: 'Sapphire Night Earrings', price: '$3,400', 
    img: 'https://images.unsplash.com/photo-1630141634710-1840fd4bd29c?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1630141634710-1840fd4bd29c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1630019051930-47382dbdbef7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590548784180-2016335391e4?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Earring', category: 'NEW', occasion: 'Wedding', gender: 'Women', 
    description: 'Deep blue elegance.', 
    details: [{ label: 'Metal', value: '18k White Gold' }] 
  },
  { 
    id: 23, name: 'Ruby Romance Ring', price: '$5,200', 
    img: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1588444837495-c6cfaf504670?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Diamond', type: 'Ring', category: 'DIAMOND', occasion: 'Wedding', gender: 'Women', 
    description: 'Passionate rubies with diamonds.', 
    details: [{ label: 'Metal', value: '18k Yellow Gold' }] 
  },
  { 
    id: 24, name: 'Ethereal Silver Choker', price: '$350', 
    img: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Silver', type: 'Necklace', category: 'GOLD', occasion: 'Daily Wear', gender: 'Women', 
    description: 'Delicate sterling silver.', 
    details: [{ label: 'Metal', value: '925 Silver' }] 
  },
  { 
    id: 25, name: 'Gold Coin Pendant', price: '$650', 
    img: 'https://images.unsplash.com/photo-1589128504748-0ca1a9423659?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1589128504748-0ca1a9423659?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1620608560271-70014022646c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1632062590202-0e9debe8942b?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Pendant', category: 'GOLD', occasion: 'Daily Wear', gender: 'Women', 
    description: 'Luck and prosperity.', 
    details: [{ label: 'Metal', value: '24k Gold' }] 
  },
  { 
    id: 26, name: 'Diamond Tennis Bracelet', price: '$7,500', 
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1535633302704-b02923659a38?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1544441892-0545fdf245b7?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Diamond', type: 'Bangle', category: 'DIAMOND', occasion: 'Wedding', gender: 'Women', 
    description: 'A classic line of diamonds.', 
    details: [{ label: 'Metal', value: '18k White Gold' }] 
  },
  { 
    id: 27, name: 'Floral Gold Studs', price: '$400', 
    img: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1635767798638-3e2807e1619b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1510006780316-2699baa1abb7?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Earring', category: 'GOLD', occasion: 'Gifting', gender: 'Women', 
    description: 'Nature-inspired design.', 
    details: [{ label: 'Metal', value: '18k Gold' }] 
  },
  { 
    id: 28, name: 'Baguette Diamond Band', price: '$2,800', 
    img: 'https://images.unsplash.com/photo-1627250329059-04d7776106c5?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1627250329059-04d7776106c5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1598560917007-3914997c0067?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Diamond', type: 'Ring', category: 'DIAMOND', occasion: 'Wedding', gender: 'Women', 
    description: 'Step-cut brilliance.', 
    details: [{ label: 'Metal', value: 'Platinum' }] 
  },
  { 
    id: 29, name: 'Dainty Gold Chain', price: '$300', 
    img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Necklace', category: 'GOLD', occasion: 'Daily Wear', gender: 'Women', 
    description: 'Perfect for layering.', 
    details: [{ label: 'Metal', value: '14k Gold' }] 
  },
  { 
    id: 30, name: 'Obsidian Signet Ring', price: '$1,200', 
    img: 'https://images.unsplash.com/photo-1589128504748-0ca1a9423659?auto=format&fit=crop&q=80&w=1200', 
    gallery: [
      'https://images.unsplash.com/photo-1589128504748-0ca1a9423659?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1510006780316-2699baa1abb7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1603561591411-071c4f713932?auto=format&fit=crop&q=80&w=1200'
    ], 
    material: 'Gold', type: 'Ring', category: 'GOLD', occasion: 'Daily Wear', gender: 'Men', 
    description: 'Dark obsidian set in gold.', 
    details: [{ label: 'Metal', value: '18k Yellow Gold' }] 
  },
];
