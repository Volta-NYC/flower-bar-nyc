import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Heart } from "lucide-react";
import { PageShell } from "@/components/PageShell";

const offerings = [
  {name:"Daily Designer’s Choice", tag:"Our signature", copy:"One-of-a-kind, seasonal arrangements tailored to your choice of color palette, size, and budget.", uses:["Birthdays", "Anniversaries", "Thank-yous", "Just because"]},
  {name:"NYU Hospital Bedside Delivery", tag:"Nearby & prompt", copy:"Thoughtful get-well flowers and custom baskets delivered directly to patients and visitors.", uses:["Get well", "New baby", "Care packages", "Visitor gifts"]},
  {name:"Manhattan-Wide Delivery", tag:"Across the city", copy:"Reliable, fresh flower delivery servicing most of Manhattan for the moments worth marking.", uses:["Home delivery", "Office delivery", "Same-day inquiries", "Surprises"]},
  {name:"Events & Celebrations", tag:"Made to gather", copy:"Custom floral styling for weddings, graduations, corporate gatherings, and special milestones.", uses:["Weddings", "Graduations", "Corporate", "Milestones"]},
];
const palettes = [["Pastel dreams","Soft, gentle, and romantic.","pink"],["Bright & happy","Vibrant blooms with plenty of energy.","yellow"],["Thoughtful & classic","White, green, and subtle blue.","sage"]];
const sizes = [["Small","$40"],["Medium","$80"],["Large","$120"],["Extra large","$200"],["Extravagant","$400"]];

export default function Services() { return <PageShell>
  <section className="inner-hero services-hero"><div className="reveal"><p className="kicker">The flower menu</p><h1>Pick the feeling.<br/><i>We’ll make the flowers.</i></h1><p>Seasonal, one-of-a-kind floral design for daily gestures, hospital rooms, celebrations, and everything between.</p></div><div className="mini-orbit"><Heart/><span>No fixed<br/>catalog</span></div></section>
  <section className="offerings-shell section-pad"><div className="text-section-heading reveal"><p className="kicker">01 · Ways to flower</p><h2>Four services.<br/><i>Endless possibilities.</i></h2><p className="section-deck">Choose the kind of moment you’re planning. Every design remains seasonal, custom, and unmistakably yours.</p></div><div className="offerings">{offerings.map((item,index)=><article className="offering-card reveal" key={item.name}><div className="offering-top"><span>0{index+1}</span><p>{item.tag}</p></div><h2>{item.name}</h2><p className="offering-copy">{item.copy}</p><ul>{item.uses.map(use=><li key={use}><Check size={14}/>{use}</li>)}</ul></article>)}</div></section>
  <section className="palette-band">
    <div className="palette-photo photo-frame reveal"><Image src="/images/flowerbar-services.jpg" alt="Flower Bar NYC seasonal floral design" fill sizes="(max-width: 800px) 90vw, 42vw"/></div>
    <div className="palette-copy"><p className="kicker reveal">02 · Designer’s choice, your direction</p><h2 className="reveal">Start with a <i>palette.</i></h2><p className="section-deck reveal">Give Sherry a color mood and she’ll select the most beautiful seasonal stems available that day.</p><div className="palette-options">{palettes.map(([name,copy,color])=><div className="reveal" key={name}><span className={`swatch ${color}`}/><div><h3>{name}</h3><p>{copy}</p></div></div>)}</div></div>
  </section>
  <section className="pricing-section section-pad">
    <div className="pricing-intro reveal"><p className="kicker">03 · Choose the gesture</p><h2>Every size,<br/><i>made special.</i></h2><p>A matching vase can be added from $10. NYC sales tax applies; Manhattan delivery starts at $15.</p><a className="text-link" href="https://drive.google.com/file/d/1zhEjkFAdtE7441UgCslTvlqh4BVbyk3X/view?usp=sharing" target="_blank" rel="noreferrer">View the full pricing chart <ArrowUpRight size={16}/></a></div>
    <div className="price-list reveal delay-one">{sizes.map(([size,price])=><div key={size}><span>{size}</span><b>{price}</b></div>)}<Link className="button" href="/contact">Get a quote <ArrowUpRight size={16}/></Link></div>
  </section>
  <section className="service-note"><p>Not sure what to choose?</p><h2>Tell us the occasion. <i>We’ll guide you.</i></h2><Link className="button button-light" href="/contact">Start an order <ArrowUpRight size={16}/></Link></section>
  </PageShell> }
