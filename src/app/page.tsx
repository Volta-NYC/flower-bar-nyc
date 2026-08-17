import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Heart, MoveRight, Star } from "lucide-react";
import { PageShell } from "@/components/PageShell";

const services = [
  ["01", "Daily Designer’s Choice", "One-of-a-kind, seasonal arrangements tailored to your color palette, size, and budget."],
  ["02", "NYU Hospital Bedside Delivery", "Prompt, thoughtful get-well flowers and custom baskets delivered directly to patients and visitors."],
  ["03", "Manhattan-Wide Delivery", "Reliable, fresh flower delivery for birthdays, anniversaries, and just-because moments."],
  ["04", "Events & Celebrations", "Custom floral styling for weddings, graduations, corporate gatherings, and special milestones."],
];

export default function Home() {
  return <PageShell>
    <section className="home-hero">
      <div className="hero-copy reveal"><p className="kicker">Custom floral design · Murray Hill</p><h1>We’ll design a <i>beautiful surprise.</i></h1><p>Just pick your palette and budget. Sherry will turn the day’s freshest stems into something entirely your own.</p><div className="button-row"><Link className="button" href="/contact">Schedule flower delivery <ArrowUpRight size={16}/></Link><Link className="round-link" href="/services" aria-label="Explore services"><ArrowDownRight size={21}/></Link></div></div>
      <div className="hero-visual reveal delay-one">
        <div className="photo-frame hero-frame"><Image src="/images/flowerbar-hero.jpg" alt="A colorful Flower Bar NYC arrangement" fill priority sizes="(max-width: 800px) 92vw, 48vw"/></div>
        <p className="image-caption">Original Flower Bar NYC arrangement · Seasonal stems, arranged daily</p>
      </div>
      <div className="hero-details"><span>Made in Manhattan</span><span>Delivered daily</span><span>Designed with feeling</span></div>
    </section>

    <section className="statement curved-top">
      <p className="kicker reveal">Our way of doing flowers</p>
      <div className="statement-grid"><h2 className="reveal">We skip the catalog.</h2><p className="reveal delay-one">Every arrangement starts with a feeling—not a product number. Choose your palette, share your budget, and leave room for a little magic.</p></div>
      <div className="ticker" aria-label="Flower Bar qualities"><span>Fresh-picked</span><Heart size={18}/><span>Catalog-free</span><Heart size={18}/><span>Made for you</span><Heart size={18}/><span>Manhattan delivery</span></div>
    </section>

    <section className="service-preview section-pad">
      <div className="section-intro reveal"><p className="kicker">02 · What we make</p><div><h2>Flowers for <i>real life.</i></h2><p className="section-deck">Four thoughtful ways to send, celebrate, gather, or simply brighten an ordinary day.</p></div><Link className="text-link" href="/services">See all services <MoveRight size={17}/></Link></div>
      <div className="service-list">{services.map(([number,title,copy])=><article className="service-row reveal" key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={19}/></article>)}</div>
    </section>

    <section className="home-story">
      <div className="story-photo photo-frame reveal"><Image src="/images/flowerbar-about.jpg" alt="Sherry creating a fresh floral arrangement" fill sizes="(max-width: 800px) 90vw, 46vw"/></div>
      <div className="story-copy reveal delay-one"><p className="kicker">Meet the florist</p><h2>Free-spirited florals, <i>made by Sherry.</i></h2><p>With over a decade of international experience, Sherry brings the artistic, catalog-free design culture she mastered in Australia to Manhattan.</p><Link className="button button-outline" href="/about">Read our story <ArrowUpRight size={16}/></Link></div>
    </section>

    <section className="reviews-section section-pad">
      <div className="reviews-heading reveal"><p className="kicker">04 · From the neighborhood</p><h2>A little local <i>flower love.</i></h2><p className="section-deck">Thoughtful design, personal service, and fresh flowers made right here in Murray Hill.</p><div className="stars" aria-label="Google reviews"><Star/><Star/><Star/><Star/><Star/></div></div>
      <div className="review-board reveal delay-one">
        <div className="review-note review-note-one"><span>01</span><h3>Custom, never cookie-cutter</h3><p>Every order is designed around a palette, moment, and budget.</p></div>
        <div className="review-note review-note-two"><span>02</span><h3>Made nearby, delivered with care</h3><p>Fresh arrangements travel across Manhattan, including bedside delivery to NYU Hospital.</p></div>
        <div className="review-source"><div className="google-g">G</div><div><b>Google Reviews</b><p>Read verified customer reviews on Google.</p></div><a href="https://www.google.com/search?q=Flower+Bar+NYC+reviews" target="_blank" rel="noreferrer" aria-label="Read Flower Bar NYC reviews on Google"><ArrowUpRight/></a></div>
      </div>
    </section>
  </PageShell>;
}
