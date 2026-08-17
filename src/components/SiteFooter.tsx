import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-bloom" aria-hidden="true"/>
    <div className="footer-top reveal">
      <div><p className="kicker">Let’s make someone’s day</p><h2>Flowers are always<br/><i>a good idea.</i></h2></div>
      <Link className="button button-light" href="/contact">Schedule a delivery <ArrowUpRight size={16}/></Link>
    </div>
    <div className="footer-grid reveal delay-one">
      <Link className="wordmark footer-mark" href="/"><span>flower</span><em>bar nyc</em></Link>
      <div><b>Visit</b><a href="https://www.google.com/maps/dir//516a+3rd+Ave,+New+York,+NY" target="_blank" rel="noreferrer">516A 3rd Avenue<br/>New York, NY</a></div>
      <div><b>Talk to us</b><a href="tel:+15715058925">(571) 505-8925</a><a href="https://www.instagram.com/flowerbar.nyc/" target="_blank" rel="noreferrer"><Camera size={14}/> @flowerbar.nyc</a></div>
      <div><b>Explore</b><Link href="/services">Services</Link><Link href="/about">Our story</Link><Link href="/contact">Get a quote</Link></div>
    </div>
    <p className="footer-note reveal delay-two">Custom, seasonal floral design · Daily delivery across Manhattan</p>
  </footer>;
}
