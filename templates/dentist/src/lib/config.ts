import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Riverside Modern Dentistry",
    tagline: "Achieve Your Healthiest, Brightest Smile.",
    phone: "(951) 261-5277",
    phoneHref: "tel:+19512615277",
    email: "info@riversidemoderndentistry.com",
    address: "6161 Van Buren Blvd Ste 103 Riverside, CA 92503",
    city: "Riverside",
    serviceAreas: ["Riverside, CA", "Corona, CA", "Moreno Valley, CA"],
    license: "CA Dental Board Licensed",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "navy",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Teeth Cleaning & Whitening", desc: "Keep your smile sparkling with routine cleanings and professional whitening treatments.", urgent: false },
    { icon: "shield-check", title: "Crowns & Fillings", desc: "Restore damaged teeth with durable crowns and tooth-colored fillings for a natural look.", urgent: false },
    { icon: "wrench", title: "Emergency Dental Care", desc: "Immediate relief for toothaches, broken teeth, and other urgent dental issues.", urgent: true },
    { icon: "home", title: "Family Dentistry", desc: "Comprehensive dental care for patients of all ages, from toddlers to seniors.", urgent: false },
    { icon: "scissors", title: "Wisdom Teeth Removal", desc: "Expert and gentle extraction of problematic wisdom teeth to prevent future complications.", urgent: false },
    { icon: "heart", title: "Veneers & Bonding", desc: "Transform your smile with cosmetic solutions like veneers and dental bonding for improved aesthetics.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Riverside, CA", stars: 5, text: "I had a fantastic experience getting my teeth cleaned last week. The hygienist was incredibly thorough and gentle, and Dr. Smith took the time to explain everything clearly. My teeth feel amazing, and the office staff made scheduling a breeze. Highly recommend for anyone in Riverside!" },
    { name: "Mark T.", location: "Corona, CA", stars: 5, text: "My son had an emergency chipped tooth, and Riverside Modern Dentistry got us in immediately. The staff was so kind and reassuring, and the dentist fixed his tooth perfectly. We were so relieved and grateful for their quick, professional care. It made a stressful situation much easier to handle." },
    { name: "Jessica R.", location: "Moreno Valley, CA", stars: 5, text: "I've always been nervous about dental work, but the team here made me feel completely at ease during my root canal. They explained each step, checked in on me constantly, and the procedure was surprisingly comfortable. I'm so happy with the outcome and will definitely be back for all my dental needs." }
  ],

  trustBadges: [
    "CA Dental Board Licensed", "Personalized Care", "Advanced Technology", "CEREC® Single-Visit Crowns", "Digital X-Rays", "Friendly Environment"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Flexible Scheduling", desc: "We offer convenient appointment times to fit your busy lifestyle." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront costs with no hidden fees, and various payment options." },
    { icon: "award", title: "Experienced Dentists", desc: "Our team of highly skilled and compassionate dentists ensures top-quality care." },
    { icon: "thumbs-up", title: "Patient-Centered Approach", desc: "Your comfort and health are our top priorities in every visit." },
    { icon: "phone", title: "Emergency Support", desc: "Prompt care for urgent dental needs to alleviate pain and prevent further issues." },
    { icon: "sparkles", title: "Modern Technology", desc: "Utilizing the latest dental advancements for precise and efficient treatments." }
  ],

  formServiceOptions: ["Teeth Cleaning & Whitening", "Crowns & Fillings", "Emergency Dental Care", "Family Dentistry", "Wisdom Teeth Removal", "Veneers & Bonding"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!