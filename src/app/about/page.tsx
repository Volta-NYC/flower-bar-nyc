import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Flower2, Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export default function About() { return <PageShell>
  <section className="inner-hero about-hero"><div className="reveal"><p className="kicker">About Flower Bar NYC</p><h1>Every special moment deserves a <i>special flower.</i></h1></div><div className="about-hero-photo photo-frame reveal delay-one"><Image src="/images/flowerbar-about.jpg" alt="Sherry, the florist behind Flower Bar NYC" fill priority sizes="(max-width: 800px) 90vw, 43vw"/></div></section>
  <section className="founder-section section-pad">
    <div className="founder-aside reveal"><span>Meet Sherry</span><Flower2/><p>Florist · Artist · Founder</p></div>
    <div className="founder-copy"><p className="large-copy reveal">At the heart of Flower Bar NYC is Sherry, a florist with over a decade of international experience.</p><div className="founder-columns"><p className="reveal">She mastered her craft in Australia, a floral hub celebrated for its artistic, catalog-free design culture.</p><p className="reveal delay-one">Bringing that free-spirited creativity to Manhattan, Sherry treats every arrangement as a blank canvas.</p></div></div>
  </section>
  <section className="mission-strip"><Sparkles/><p className="reveal">Her mission is to share the joy of truly custom floral artistry, turning every milestone into an unforgettable, happy surprise.</p><Sparkles/></section>
  <section className="values section-pad"><div className="section-intro reveal"><p className="kicker">02 · The Flower Bar point of view</p><div><h2>Designed to feel<br/><i>like you.</i></h2><p className="section-deck">A simple philosophy guides every stem, color choice, and finishing touch.</p></div></div><div className="value-grid"><article className="reveal"><span>01</span><h3>Season over sameness</h3><p>We follow what is fresh and beautiful now, so every piece has its own personality.</p></article><article className="reveal delay-one"><span>02</span><h3>Feeling over formula</h3><p>Your occasion, color story, and budget shape the design—not a catalog photo.</p></article><article className="reveal delay-two"><span>03</span><h3>Joy in the details</h3><p>From the first stem to the final delivery, every choice is made with care.</p></article></div></section>
  <section className="about-cta"><div className="photo-frame reveal"><Image src="/images/flowerbar-hero.jpg" alt="An original Flower Bar NYC seasonal arrangement" fill sizes="(max-width: 800px) 80vw, 36vw"/></div><div className="reveal delay-one"><p className="kicker">Have a moment in mind?</p><h2>Let’s make it <i>bloom.</i></h2><Link className="button" href="/contact">Talk to Sherry <ArrowUpRight size={16}/></Link></div></section>
  </PageShell> }
