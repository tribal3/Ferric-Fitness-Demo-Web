export const BUSINESS = {
  nameEn: 'FERRIC FITNESS',
  phoneDisplay: '0319 2713005',
  phoneHref: 'tel:+923192713005',
  whatsappDisplay: '0319 2713005',
  whatsappNumber: '923192713005',
  addressEn:
    'Plot 3/147, near Tooso Restaurant, Bahadurabad, Karachi, Pakistan',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Ferric+Fitness+Bahadurabad+Karachi',
  instagram: 'https://www.instagram.com/ferric.fitness/',
  rating: '4.0',
  reviewCount: 49,
} as const

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.whatsappNumber}`

/** Build a WhatsApp deep link with a pre-filled message. */
export const wa = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`

const asset = (file: string) => `/images/${file}`

export const IMAGES = {
  hero: asset('ferric-hero.jpg'),
  about: asset('ferric-about.jpg'),
  aboutDetail: asset('ferric-detail.jpg'),
  strengthZone: asset('ferric-about.jpg'),
  functional: asset('ferric-hero.jpg'),
  strength: asset('ferric-about.jpg'),
  cardio: asset('ferric-hero.jpg'),
  classes: asset('ferric-detail.jpg'),
  guidance: asset('ferric-about.jpg'),
  gallery: [
    { id: 'ferric-about', w: 1400 },
    { id: 'ferric-hero', w: 1000 },
    { id: 'ferric-detail', w: 1000 },
  ],
}

export const galleryImage = (id: string) => asset(`${id}.jpg`)
