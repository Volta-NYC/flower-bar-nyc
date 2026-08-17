"use client";
import { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  function send(event:FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data=new FormData(event.currentTarget);
    const subject=encodeURIComponent(`Flower Bar NYC inquiry from ${data.get("name")}`);
    const body=encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`);
    window.location.href=`mailto:hello.flowerbar.nyc@gmail.com?subject=${subject}&body=${body}`;
  }
  return <form className="contact-form" onSubmit={send}><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="you@example.com"/></label><label>Phone<input name="phone" type="tel" placeholder="(212) 555-0123"/></label><label>Message<textarea name="message" rows={6} required placeholder="Tell us the occasion, palette, delivery date, and budget..."/></label><button className="button" type="submit">Send inquiry <ArrowUpRight size={16}/></button><p>This opens your email app with your inquiry ready to send.</p></form>
}
