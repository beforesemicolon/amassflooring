export default {
  cssSelector: "#hero",
  style: ({ env }) => ({
    "#hero": {
      background: `url('${env.assetsOrigin}assets/hero-bg.webp') no-repeat center center`,
      backgroundSize: "cover",
      paddingTop: "100px",
      "--text-shadow": "0 3px 6px rgba(0, 0, 0, 0.3)",
      position: "relative"
    },
    h2: {
      fontSize: "clamp(80px, 8vw, 116px)",
      textTransform: "uppercase",
      margin: 0,
      width: "86%",
      textShadow: "var(--text-shadow)",
      color: "#fff",
      "& + p": {
        fontSize: "clamp(16px, 2.8vw, 41px)",
        fontWeight: "100",
        margin: 0,
        letterSpacing: "1px",
        textShadow: "var(--text-shadow)",
        color: "#fff",
        maxWidth: "100%",
      },
      "@media (max-width: 1024px)": {
        "&": {
          fontSize: "clamp(65px, 10vw, 116px)",
          width: "90%",
        },
        "& + p": {
          fontSize: "30px",
        },
      },
      "@media (max-width: 425px)": {
        "&": {
          fontSize: "clamp(45px, 10vw, 116px)",
        },
        "& + p": {
          fontSize: "1.2rem",
        },
      }
    },
    ".cta-action": {
      display: "inline-flex",
      background: "var(--accent-color)",
      color: "#fff",
      textAlign: "center",
      marginTop: "clamp(30px, 4vw, 60px)",
      borderBottomLeftRadius: "3px",
      borderBottomRightRadius: "3px",
      gap: 0,
      p: {
        margin: 0,
        padding: "12px 10px",
        fontSize: "1.1rem",
        fontWeight: "600",
        letterSpacing: "1px",
        "@media (max-width: 600px)": {
          "&": {
            fontSize: "0.9rem",
            padding: "8px 10px",
          }
        }
      },
      a: {
        fontSize: "2rem",
        "@media (max-width: 600px)": {
          "&": {
            fontSize: "1.4rem",
          }
        }
      },
    }
  }),
  inputs: [
    { type: "textarea", name: "title", value: "Massachusetts’\n Trusted Flooring & Renovation Experts" },
    { type: "textarea", name: "description", value: "Specializing in Flooring, Kitchen & Bathroom Renovations" },
    { type: "text", name: "cta", value: "Request A Quote" },
    { type: "text", name: "note", value: "Commercial & Residential" }
  ],
  render({ title, description, cta, note, env }) {
    return `
      <section id="hero" class="center view-section" role="banner" aria-label="Hero section showcasing Massachusetts flooring and renovation services">
        <img src="${env.assetsOrigin}assets/hero-bg.webp" alt="Professional flooring installation by A. Mass Flooring & Tile in Massachusetts home" style="position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none;" loading="eager" />
        <div class="wrapper" itemscope itemtype="https://schema.org/LocalBusiness">
          <h2 itemprop="name">${title}</h2>
          <p itemprop="description">${description}</p>
          <div class="cta-action col">
            <a href="#contact" class="btn" aria-label="Request a quote for flooring and renovation services in Massachusetts" itemprop="makesOffer" itemscope itemtype="https://schema.org/Offer">
              <span itemprop="name">${cta}</span>
            </a>
            <p><span itemprop="serviceType">${note}</span></p>
          </div>
          <meta itemprop="areaServed" content="Massachusetts" />
          <meta itemprop="serviceArea" content="Massachusetts" />
          <meta itemprop="priceRange" content="$$" />
          <meta itemprop="telephone" content="(508) 941-8283" />
          <meta itemprop="url" content="/" />
        </div>
      </section>
    `;
  }
}
