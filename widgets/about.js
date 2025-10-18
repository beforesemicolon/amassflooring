export default {
  cssSelector: "#about",
  style: {
    ".wrapper": {
      gap: "60px",
      "@media (max-width: 875px)": {
        flexDirection: "column-reverse",
        "alignItems": "flex-start",
        img: {
          transform: "rotate(-90deg) translateY(67%) scale(2)",
          height: "35vw"
        }
      }
    },
    ".content": {
      fontSize: "1.2rem",
    }
  },
  inputs: [
    { type: "text", name: "title", value: "About Us" },
    { type: "image", name: "image", value: "assets/flooring-selection-options.webp" },
    {
      type: "html",
      name: "description",
      value: "<p>Based in <strong>Massachusetts</strong>, <strong>A-Mass Flooring & Tile</strong> has been serving homeowners and businesses throughout the state for several years—building a loyal customer base and growing primarily through word-of-mouth referrals.</p>" +
        "<p>We specialize in <strong>professional flooring installation</strong>, <strong>tile work</strong>, and complete <strong>kitchen and bathroom renovations</strong>. Our experienced team believes in doing things right the first time—no shortcuts, no compromises. Our focus on quality craftsmanship and precision ensures flooring and remodeling work that looks great and lasts for years to come—whether for <strong>residential or commercial projects</strong> across Massachusetts.</p>" +
        "<p>From <strong>hardwood flooring</strong> and <strong>luxury vinyl plank (LVP)</strong> to custom <strong>tile installations</strong> and full-scale renovations, we deliver exceptional results that exceed our customers' expectations.</p>"
    }
  ],
  render({ title, description, image, env }) {
    return `
      <section id="about" class="center view-section" aria-labelledby="about-heading" itemscope itemtype="https://schema.org/LocalBusiness">
        <div class="wrapper row">
          <img src="${env.assetsOrigin}${image}" alt="Wide selection of flooring options including hardwood, tile, and luxury vinyl displayed at A. Mass Flooring & Tile showroom" loading="lazy" height="621" width="414" itemprop="image"/>
          <div class="content">
            <h2 id="about-heading" itemprop="name">${title}</h2>
            <div itemprop="description">
              ${description}
            </div>
            <meta itemprop="foundingDate" content="2018" />
            <meta itemprop="areaServed" content="Massachusetts" />
            <meta itemprop="serviceType" content="Flooring Installation, Tile Installation, Kitchen Renovation, Bathroom Renovation" />
            <meta itemprop="priceRange" content="$800+" />
            <meta itemprop="paymentAccepted" content="Cash, Check, Credit/Debit Card, Cash App, Venmo, Zelle" />
          </div>
        </div>
      </section>
    `;
  }
}
