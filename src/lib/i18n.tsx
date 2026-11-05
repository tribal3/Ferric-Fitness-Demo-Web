import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'

export type Lang = 'en'

const en = {
  meta: {
    title: 'Ferric Fitness — Gym in Bahadurabad, Karachi',
    description:
      'Ferric Fitness — a full-service gym in Bahadurabad, Karachi. Strength, cardio, functional training, group classes and personal coaching. Independent website concept by TRIBAL³.',
  },
  nav: {
    home: 'Home',
    about: 'About Us',
    experiences: 'Our Facilities',
    training: 'Training',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  actions: {
    join: 'Join Us',
    call: 'Call Now',
    whatsapp: 'WhatsApp Us',
    directions: 'Get Directions',
    explore: 'Explore Our Gym',
    contact: 'Contact Us',
    retry: 'Open WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    scroll: 'Scroll to explore',
  },
  hero: {
    badge: 'Bahadurabad · Karachi',
    titleTop: 'Iron Sharpens',
    titleAccent: 'Iron.',
    text: 'Ferric Fitness is a full-service gym in Bahadurabad, Karachi — strength, cardio, functional training and personal coaching under one roof.',
    ratingLabel: 'Google rating',
    optionsValue: 'Full Gym Access',
    optionsLabel: 'Strength, cardio & classes',
    locationValue: 'Bahadurabad',
    locationLabel: 'Karachi, Pakistan',
    imageAlt: 'Ferric Fitness training floor with strength and cardio equipment',
  },
  marquee: ['Strength', 'Discipline', 'Consistency', 'Results'],
  about: {
    eyebrow: 'About Ferric Fitness',
    index: '01',
    title: 'More than a gym — a training floor built for real progress.',
    text: 'Ferric Fitness is a full-service gym in Bahadurabad, Karachi, near Tooso Restaurant. The floor brings together free weights, machines, cardio and functional training with hands-on coaching — built for people who want real progress, not just a membership.',
    points: [
      'Free weights, machines and a dedicated cardio zone',
      'Strength, functional training, HIIT and group classes',
      'Personal training and small-group coaching for every level',
    ],
    cardTitle: 'Your journey, our strength',
    cardText: 'Real guidance, real results and a team that shows up with you.',
    imageAlt: 'Ferric Fitness training floor in Bahadurabad, Karachi',
    caption: 'Ferric Fitness · Bahadurabad',
  },
  experiences: {
    eyebrow: 'The Experience',
    index: '02',
    title: 'Two ways to train. One floor.',
    text: 'Choose the training style that fits your goals — both share the same welcoming energy and the same standard of showing up.',
    strength: {
      label: 'Strength & Bodybuilding',
      tag: 'Strength',
      desc: 'Build size, strength and confidence with free weights, machines and focused resistance training on a well-equipped floor.',
      tags: ['Free weights & machines', 'Bodybuilding & conditioning', 'Coached sessions'],
      cta: 'Ask About Strength Training',
      imageAlt: 'Gym floor with strength training equipment',
    },
    functional: {
      label: 'Cardio & Functional Training',
      tag: 'Conditioning',
      desc: 'Treadmills, cycles, HIIT and functional circuits, plus one-on-one personal training and small-group sessions.',
      tags: ['Cardio & endurance', 'Functional & HIIT', 'Personal training'],
      cta: 'Ask About Personal Training',
      imageAlt: 'Cardio and functional training area at Ferric Fitness',
    },
    note: 'Presentation copy only. Please contact the gym directly to confirm current programmes, timings and availability.',
  },
  training: {
    eyebrow: 'Training',
    index: '03',
    title: 'Training for the goals you actually have.',
    text: 'From building size to improving endurance, find a direction for your training and take it one session at a time.',
    items: [
      {
        title: 'Strength & Bodybuilding',
        desc: 'Free weights, machines and progressive resistance training to build size and strength.',
        icon: 'dumbbell',
      },
      {
        title: 'Cardio & Endurance',
        desc: 'Treadmills, cycles and conditioning work to build stamina at your own pace.',
        icon: 'heart',
      },
      {
        title: 'Functional & HIIT',
        desc: 'Functional circuits and high-intensity intervals that build power, speed and confidence.',
        icon: 'target',
      },
      {
        title: 'Personal Training',
        desc: 'One-on-one coaching and targeted plans for fat loss, muscle gain and competition prep.',
        icon: 'compass',
      },
    ],
    note: 'General training categories — contact the gym to confirm current programmes and availability.',
  },
  gallery: {
    eyebrow: 'Gallery',
    index: '04',
    title: 'Inside the training floor.',
    text: 'A look at the atmosphere, equipment and energy inside Ferric Fitness.',
    note: 'Photographs from Ferric Fitness, Bahadurabad, Karachi.',
    alts: [
      'Ferric Fitness training floor in Bahadurabad',
      'Strength and cardio equipment at Ferric Fitness',
      'Training area at Ferric Fitness, Karachi',
    ],
    view: 'View image',
    close: 'Close',
    prev: 'Previous image',
    next: 'Next image',
  },
  why: {
    eyebrow: 'Why Ferric Fitness',
    index: '05',
    title: 'Everything you need. One floor.',
    text: 'A complete fitness setup in Bahadurabad — equipment, coaching and a team that keeps you moving forward.',
    items: [
      {
        title: 'A serious strength floor',
        desc: 'Free weights, machines and a cardio zone in a clean, high-energy space built for training.',
      },
      {
        title: 'An easy Bahadurabad location',
        desc: 'Plot 3/147, near Tooso Restaurant — easy to reach from across Bahadurabad and nearby areas.',
      },
      {
        title: 'Coaching that keeps you accountable',
        desc: 'Hands-on guidance from the Ferric Fitness team for every fitness level.',
      },
      {
        title: 'Personal training & targeted plans',
        desc: 'Goal-specific programmes for fat loss, muscle gain and competition preparation.',
      },
    ],
    ratingCaption: 'Based on 49 public Google reviews.',
    ratingLabel: 'Google Reviews',
  },
  hours: {
    eyebrow: 'Opening Hours',
    title: 'Open daily — 7 AM to 12 AM.',
    text: 'Call or WhatsApp to confirm today’s timings or book a trial session before you visit.',
  },
  contact: {
    eyebrow: 'Contact',
    index: '06',
    title: 'Come train with us.',
    text: 'Questions about membership, personal training or timings? Call or WhatsApp us and we’ll help you get started.',
    labels: {
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      directions: 'Directions',
    },
    locationTitle: 'Find us in Bahadurabad',
    locationText:
      'Plot 3/147, near Tooso Restaurant, Bahadurabad, Karachi. Open the listing in Google Maps for turn-by-turn directions.',
    locationChip: 'Landmark',
    form: {
      title: 'Membership Enquiry',
      subtitle: 'Fill in your details and the enquiry opens in WhatsApp, ready to send.',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      phone: 'Phone Number',
      phonePlaceholder: '03XX XXXXXXX',
      interest: 'Interested In',
      interestMembership: 'Gym Membership',
      interestTraining: 'Personal Training',
      message: 'Message',
      messagePlaceholder: 'Tell us what you’re looking for (optional)',
      send: 'Send Enquiry',
      required: '* Required fields',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please enter your phone number.',
      errorPhoneInvalid: 'Please enter a valid phone number.',
      errorInterest: 'Please choose an option.',
      successTitle: 'Your enquiry is ready',
      successText: 'WhatsApp should have opened with your message ready to send. If it didn’t, use the button below.',
      sendAnother: 'Send another enquiry',
      privacy: 'For this demo, your details are not stored — they are only placed into a WhatsApp message.',
    },
  },
  footer: {
    tagline:
      'A full-service gym in Bahadurabad — strength, cardio, functional training and personal coaching built around your goals.',
    explore: 'Explore',
    contact: 'Contact',
    legal: 'About this site',
    demo: 'Independent website concept by TRIBAL³. Content and imagery are for demonstration purposes.',
    notAffiliated: 'Not affiliated with or authorized by Ferric Fitness.',
    credit: 'Concept & design — TRIBAL³',
  },
  whatsappMessages: {
    general: 'Hello Ferric Fitness, I found your website and would like to ask about membership.',
    strength: 'Hello Ferric Fitness, I would like to ask about strength training.',
    functional: 'Hello Ferric Fitness, I would like to ask about personal training and cardio.',
    join: 'Hello Ferric Fitness, I would like to join. Could you share membership options and timings?',
  },
  floatingWhatsapp: 'Chat on WhatsApp',
}

export const copy = { en }
export type Copy = typeof en

interface LanguageContextValue {
  lang: Lang
  dir: 'ltr'
  isRtl: false
  t: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement
    root.lang = 'en'
    root.dir = 'ltr'
    root.dataset.lang = 'en'
    document.title = copy.en.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', copy.en.meta.description)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang: 'en', dir: 'ltr', isRtl: false, t: copy.en }),
    [],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
