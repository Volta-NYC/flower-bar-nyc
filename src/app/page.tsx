import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Heart, MoveRight, Quote, Star } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SpinGallery } from "@/components/SpinGallery";

const services = [
  ["1", "Daily Designer’s Choice", "One-of-a-kind, seasonal arrangements tailored to your color palette, size, and budget."],
  ["2", "NYU Hospital Bedside Delivery", "Prompt, thoughtful get-well flowers and custom baskets delivered directly to patients and visitors."],
  ["3", "Manhattan-Wide Delivery", "Reliable, fresh flower delivery for birthdays, anniversaries, and just-because moments."],
  ["4", "Events & Celebrations", "Custom floral styling for weddings, graduations, corporate gatherings, and special milestones."],
];

const galleryImages = [
  { src: "/images/gallery/flowerbar-gallery-1.webp", alt: "A bright Flower Bar NYC arrangement with sunflowers and soft orange blooms" },
  { src: "/images/gallery/flowerbar-gallery-2.webp", alt: "Pink roses and mixed seasonal flowers arranged outside Flower Bar NYC" },
  { src: "/images/gallery/flowerbar-gallery-3.webp", alt: "Fresh hand-tied bouquet with pink, white, and peach stems" },
  { src: "/images/gallery/flowerbar-gallery-4.webp", alt: "Buckets of fresh flowers and greenery inside Flower Bar NYC" },
  { src: "/images/gallery/flowerbar-gallery-5.webp", alt: "Colorful wrapped bouquets and floral gifts at Flower Bar NYC" },
  { src: "/images/gallery/flowerbar-gallery-6.webp", alt: "A close arrangement of roses, hydrangeas, and seasonal filler flowers" },
  { src: "/images/gallery/flowerbar-gallery-7.webp", alt: "Flower Bar NYC storefront and display inside Semicolon Cafe" },
  { src: "/images/gallery/flowerbar-gallery-8.webp", alt: "Tall potted plant and fresh greenery at Flower Bar NYC" },
  { src: "/images/gallery/flowerbar-gallery-9.webp", alt: "A lush mixed bouquet with blush and lavender tones" },
  { src: "/images/gallery/flowerbar-gallery-10.webp", alt: "Fresh flowers arranged in shop buckets for custom bouquets" },
];

const testimonials = [
  {
    name: "E G",
    quote: "Amazing attention to detail and floral arrangements for my baby shower! Feeling still so grateful for these beautiful arrangements and making my day so special.",
  },
  {
    name: "Laurie B",
    quote: "Beautiful flowers and bouquets made with great taste with very reasonable prices. I am so happy to have such a cute local flower shop in my neighborhood",
  },
  {
    name: "Tayson Nguyen",
    quote: "Beautiful bouquets! Sherry was very helpful with deciding which flowers to get for my wife on our anniversary. Fair prices. Definitely going to her again in the future!",
  },
  {
    name: "will bryan",
    quote: "Incredible! The most beautiful flowers delivered with personality and charm on a national holiday! Made my birthday.",
  },
  {
    name: "Meg Hernandez",
    quote: "The flowers I ordered for Mother’s Day were absolutely perfect. My mom loved them! Definitely will order again!",
  },
  {
    name: "LamSon Nguyen",
    quote: "Great experience! Flower arrangements came out better than I could have imagined!!! I highly recommend their service to everyone! Friendly and so meticulous to details!",
  },
];

export default function Home() {
  return <PageShell>
    <section className="home-hero">
      <div className="hero-copy reveal"><p className="kicker">Custom floral design · Murray Hill</p><h1>We’ll design a <i>beautiful surprise.</i></h1><p>Just pick your palette and budget. Sherry will turn the day’s freshest stems into something entirely your own.</p><div className="button-row"><Link className="button" href="/contact">Schedule flower delivery <ArrowUpRight size={16}/></Link><Link className="round-link" href="/services" aria-label="Explore services"><ArrowDownRight size={21}/></Link></div></div>
      <div className="hero-visual reveal delay-one">
        <div className="photo-frame hero-frame"><Image src="/images/flowerbar-hero.jpg" alt="A colorful Flower Bar NYC arrangement" fill priority sizes="(max-width: 800px) 92vw, 48vw"/></div>
        <p className="image-caption">Original Flower Bar NYC arrangement · Seasonal stems, arranged daily</p>
      </div>
      <div className="hero-details reveal delay-two"><span>Made in Manhattan</span><span>Delivered daily</span><span>Designed with feeling</span></div>
    </section>

    <section className="statement curved-top">
      <p className="kicker reveal">Our way of doing flowers</p>
      <div className="statement-grid"><h2 className="reveal">We skip the catalog.</h2><p className="reveal delay-one">Every arrangement starts with a feeling—not a product number. Choose your palette, share your budget, and leave room for a little magic.</p></div>
      <div className="ticker reveal" aria-label="Flower Bar qualities"><span>Fresh-picked</span><Heart size={18}/><span>Catalog-free</span><Heart size={18}/><span>Made for you</span><Heart size={18}/><span>Manhattan delivery</span></div>
    </section>

    <section className="service-preview section-pad">
      <div className="section-intro reveal"><p className="kicker">2 · What we make</p><div><h2>Flowers for <i>real life.</i></h2><p className="section-deck">Four thoughtful ways to send, celebrate, gather, or simply brighten an ordinary day.</p></div><Link className="text-link" href="/services">See all services <MoveRight size={17}/></Link></div>
      <div className="service-list">{services.map(([number,title,copy])=><article className="service-row reveal" key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={19}/></article>)}</div>
    </section>

    <SpinGallery images={galleryImages} />

    <section className="home-story">
      <div className="story-photo photo-frame reveal"><Image src="/images/flowerbar-about.jpg" alt="Sherry creating a fresh floral arrangement" fill sizes="(max-width: 800px) 90vw, 46vw"/></div>
      <div className="story-copy reveal delay-one"><p className="kicker">Meet the florist</p><h2>Free-spirited florals, <i>made by Sherry.</i></h2><p>With over a decade of international experience, Sherry brings the artistic, catalog-free design culture she mastered in Australia to Manhattan.</p><Link className="button button-outline" href="/about">Read our story <ArrowUpRight size={16}/></Link></div>
    </section>

    <section className="testimonials-section section-pad">
      <div className="testimonials-heading reveal">
        <p className="kicker">4 · Testimonials</p>
        <h2>Google reviewers keep coming back <i>for the feeling.</i></h2>
        <p className="section-deck">Flower Bar NYC is rated 5.0 on Google Maps, with customers calling out Sherry’s care, fresh bouquets, fair prices, and special-occasion arrangements.</p>
        <div className="stars" aria-label="5.0-star Google rating"><Star/><Star/><Star/><Star/><Star/></div>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card reveal" key={testimonial.name}>
            <Quote size={24} />
            <p>{testimonial.quote}</p>
            <footer>
              <b>{testimonial.name}</b>
              <span>Google review</span>
            </footer>
          </article>
        ))}
      </div>
      <div className="review-source reveal">
        <div className="google-g">G</div>
        <div><b>Google Maps</b><p>5.0 rating from 30 reviews for Flower Bar nyc (Located in Semicolon Cafe).</p></div>
        <a href="https://www.google.com/maps/place/Flower+Bar+nyc+(Located+in+Semicolon+Cafe)/@40.7461546,-73.9780296,17z/data=!4m8!3m7!1s0x89c25950fc268dbb:0xf8edb2b5888d6bfe!8m2!3d40.7461546!4d-73.9780296!9m1!1b1!16s%2Fg%2F11z1f7c3m1" target="_blank" rel="noreferrer" aria-label="Read Flower Bar NYC reviews on Google Maps"><ArrowUpRight/></a>
      </div>
    </section>
  </PageShell>;
}
