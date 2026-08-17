import { ArrowDownRight, ArrowUpRight, Camera, MapPin, Phone, Sparkles } from "lucide-react";

const palettes = [
  { name: "Pastel dreams", note: "Soft, gentle, and dreamy tones for a classic, romantic look.", color: "#E9B6D0" },
  { name: "Bright & happy", note: "Vibrant, energetic blooms guaranteed to bring sunshine to anyone’s day.", color: "#F0C64F" },
  { name: "Thoughtful & classic", note: "For thank-you, sympathy, or ‘thinking of you’ moments in white, green, and subtle blue.", color: "#9EBA8B" },
];

const sizes = [
  ["Small", "$40"], ["Medium", "$80"], ["Large", "$120"], ["Extra large", "$200"], ["Extravagant", "$400"],
];

export default function Home() {
  return (
    <main>
      <div className="utility"><a href="https://www.google.com/maps/dir//516a+3rd+Ave,+New+York,+NY" target="_blank"><MapPin size={14}/>516A 3rd Avenue · Murray Hill</a><a href="tel:+15715058925"><Phone size={14}/>(571) 505-8925</a></div>
      <header className="nav"><a className="wordmark" href="#top">flower<br/><em>bar nyc</em></a><nav><a href="#story">Our story</a><a href="#palettes">The menu</a><a href="#occasions">Occasions</a></nav><a className="order order-small" href="#order">Start an order <ArrowUpRight size={15}/></a></header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">Bespoke floral design · Manhattan</p><h1>Flowers, <i>but make<br/>them yours.</i></h1><p className="lede">Tell us the feeling, the palette, and your budget. We’ll make the surprise.</p><a className="order" href="#order">Design my arrangement <ArrowDownRight size={17}/></a></div>
        <div className="hero-art" aria-label="Flower Bar NYC seasonal floral arrangements">
          <span className="petal petal-one"/><span className="petal petal-two"/>
          <img className="hero-botanical" src="/images/botanical-spray.png" alt="" aria-hidden="true"/>
          <img className="hero-main" src="/images/flower-1.jpg" alt="Colorful mixed seasonal flower arrangement"/>
          <img className="hero-detail" src="/images/flower-2.jpg" alt="Fresh colorful flowers in a floral arrangement"/>
          <div className="art-note"><Sparkles size={15}/><span>Seasonal stems<br/>arranged daily</span></div>
        </div>
        <div className="hero-foot"><span>Made fresh in Murray Hill</span><span>Delivered across Manhattan</span><span>Since 2025</span></div>
      </section>

      <section className="intro" id="story"><p className="display">No fixed catalog. No two arrangements alike. <em>Just a little joy, arranged for you.</em></p><div><p>Flower Bar NYC is Sherry’s floral studio, rooted in a decade of international design experience and a love for the free-spirited, seasonal style she honed in Australia.</p><a className="text-link" href="#order">Meet Flower Bar <ArrowDownRight size={16}/></a></div><img className="intro-floral" src="/images/flower-3.jpg" alt="A lush Flower Bar seasonal arrangement in yellow, pink, and purple"/></section>

      <section className="palette-section" id="palettes"><div className="section-heading"><p className="eyebrow">01 / Choose the feeling</p><h2>Pick a <i>palette.</i><br/>We’ll take it from there.</h2></div><div className="palette-grid">{palettes.map((palette, index) => <article className="palette-card" key={palette.name}><span className="palette-dot" style={{background: palette.color}}/><p className="card-number">0{index + 1}</p><h3>{palette.name}</h3><p>{palette.note}</p></article>)}</div></section>

      <section className="pricing"><div className="pricing-photo"><img src="/images/flower-3.jpg" alt="Garden-style flowers in a vibrant hand-tied arrangement"/><p>Any day can use flowers.</p></div><div className="price-copy"><p className="eyebrow">02 / Choose the gesture</p><h2>Fresh designs for <i>every</i> kind of moment.</h2><p className="price-intro">Start with your preferred palette, then select a scale that feels right. Every piece is made from the day’s most beautiful stems.</p><div className="size-list">{sizes.map(([size, price]) => <div key={size}><span>{size}</span><b>{price}</b></div>)}</div><p className="fineprint">A matching vase can be added from $10. NYC sales tax applies; Manhattan delivery starts at $15.</p><a className="text-link" href="#order">Plan my delivery <ArrowDownRight size={16}/></a></div></section>

      <section className="occasions" id="occasions"><div><p className="eyebrow">For the moments that matter</p><h2>The right flowers<br/>say <i>enough.</i></h2></div><div className="occasion-list"><p>Birthday mornings <span>↗</span></p><p>NYU bedside delivery <span>↗</span></p><p>Just because <span>↗</span></p><p>Weddings & celebrations <span>↗</span></p><p>Corporate gatherings <span>↗</span></p></div></section>

      <section className="order-section" id="order"><div className="order-title"><p className="eyebrow">Let’s make something beautiful</p><h2>Start with a <i>feeling.</i></h2><p>Send us your occasion, palette, and preferred budget. We’ll be in touch to make it happen.</p></div><div className="contact-card"><a href="mailto:hello.flowerbar.nyc@gmail.com?subject=Flower%20Bar%20NYC%20order%20inquiry"><span>Email to order</span><b>hello.flowerbar.nyc@gmail.com</b><ArrowUpRight size={18}/></a><a href="tel:+15715058925"><span>Call Flower Bar</span><b>(571) 505-8925</b><ArrowUpRight size={18}/></a><a href="https://www.instagram.com/flowerbar.nyc/" target="_blank"><span>See recent arrangements</span><b>@flowerbar.nyc</b><Camera size={18}/></a></div></section>

      <footer><a className="wordmark" href="#top">flower<br/><em>bar nyc</em></a><p>516A 3rd Avenue<br/>New York, NY</p><p>Custom florals, made with feeling.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
