import { ArrowUpRight, Camera, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() { return <PageShell>
  <section className="contact-hero"><div className="reveal"><p className="kicker">Get a quote</p><h1>Tell us what you’re <i>celebrating.</i></h1><p>View our pricing chart and submit an inquiry to place your order, or reach out with any questions.</p><a className="text-link" href="https://drive.google.com/file/d/1zhEjkFAdtE7441UgCslTvlqh4BVbyk3X/view?usp=sharing" target="_blank" rel="noreferrer">Open pricing chart <ArrowUpRight size={16}/></a></div><div className="contact-flower" aria-hidden="true"><span/><span/><span/><b/></div></section>
  <section className="contact-layout section-pad">
    <div className="contact-info reveal"><p className="kicker">Flower Bar NYC</p><h2>We’d love to hear <i>your idea.</i></h2><div className="contact-links"><a href="tel:+15715058925"><Phone/><span><small>Call</small>(571) 505-8925</span></a><a href="https://www.google.com/maps/dir//516a+3rd+Ave,+New+York,+NY" target="_blank" rel="noreferrer"><MapPin/><span><small>Find us</small>516A 3rd Avenue<br/>New York, NY</span></a><a href="https://www.instagram.com/flowerbar.nyc/" target="_blank" rel="noreferrer"><Camera/><span><small>Follow</small>@flowerbar.nyc</span></a></div></div>
    <div className="form-wrap reveal delay-one"><div className="form-heading"><span>Order inquiry</span><p>Share a few details and we’ll continue the conversation by email.</p></div><ContactForm/></div>
  </section>
  <section className="contact-bottom"><p>Daily Designer’s Choice</p><span>·</span><p>NYU Hospital Delivery</p><span>·</span><p>Manhattan-Wide Delivery</p><span>·</span><p>Events & Celebrations</p></section>
  </PageShell> }
