import Link from "next/link";
import { ArrowUpRight, Camera, MapPin, Menu, Phone } from "lucide-react";

export function SiteHeader() {
  return <>
    <div className="utility-bar">
      <a href="https://www.google.com/maps/dir//516a+3rd+Ave,+New+York,+NY" target="_blank" rel="noreferrer"><MapPin size={13}/>516A 3rd Ave, New York, NY</a>
      <div><a href="https://www.instagram.com/flowerbar.nyc/" target="_blank" rel="noreferrer"><Camera size={13}/><span>@flowerbar.nyc</span></a><a href="tel:+15715058925"><Phone size={13}/><span>(571) 505-8925</span></a></div>
    </div>
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Flower Bar NYC home"><span>flower</span><em>bar nyc</em></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><span className="nav-sigil" aria-hidden="true">✽</span><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
      <Link className="button button-small" href="/contact">Order flowers <ArrowUpRight size={15}/></Link>
      <details className="mobile-nav"><summary aria-label="Open navigation"><Menu size={22}/></summary><nav><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav></details>
    </header>
  </>;
}
