export default {
  cssSelector: "#footer",
  style: ({ env }) => ({
    "#footer": {
      backgroundColor: "var(--accent-color)",
      color: "#fff",
      justifyContent: "space-between",
      address: {
        p: {
          fontSize: "1.2em",
          color: "#ccc"
        }
      }
    },
    a: {
      color: "#fff",
      textDecoration: "none"
    },
    ".wrapper": {
      marginTop: "150px",
      alignItems: "flex-start",
      "@media (max-width: 1024px)": {
        flexWrap: "wrap",
      },
      "@media (max-width: 600px)": {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }
    },
    img: {
      position: "relative",
      top: "-10px",
    },
    ".details": {
      gap: "30px",
    },
    ".contact-info, .social-links": {
      paddingTop: "40px",
      flex: "1 1 35vw",
      minWidth: "30%",
      "@media (max-width: 600px)": {
        paddingTop: 0,
        flex: "1",
        alignItems: "center",
      }
    },
    ".social-links": {
      gap: "35px",
      a: {
        span: {
          display: "inline-block",
          width: "30px",
          height: "30px",
          textIndent: "2em",
          overflow: "hidden",
        }
      },
      "@media (max-width: 1024px)": {
        paddingTop: "0",
        justifyContent: "center",
      }
    },
    ".floor-samples": {
      width: "100%",
      height: "50%",
      backgroundImage: `url('${env.assetsOrigin}assets/flooring-samples.webp')`,
      backgroundRepeat: "repeat-x",
      backgroundSize: "auto 100%",
      backgroundPosition: "center",
      opacity: "0.8",
    },
    ".company-info": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "@media (max-width: 600px)": {
        marginBottom: "20px",
      }
    },
    ".contact-info": {
      "h3": {
        margin: "0 0 10px 0",
        fontSize: "1.2em",
      },
      "p": {
        margin: "5px 0",
        lineHeight: "1.4",
      },
      "strong": {
        color: "#fff",
        fontWeight: "600",
      },
      "a": {
        color: "#ccc",
        textDecoration: "none",
        "&:hover": {
          color: "#fff",
          textDecoration: "underline",
        },
        "&:focus": {
          outline: "2px solid #fff",
          outlineOffset: "2px",
        }
      }
    }
  }),
  inputs: [
    { type: "image", name: "logo", value: "assets/logo/emblem-logo-white.svg" },
    { type: "html", name: "address", value: "75 North Main Street\n#2090\nRandolph, MA 02368" },
    { type: "text", name: "email", value: "info@amassflooring.com" },
    {
      type: "text",
      name: "copyright",
      label: "Copyright",
      value: "© 2025 A-Mass Flooring & Tile LLC. Licensed Massachusetts flooring contractors. All rights reserved."
    },
    {
      type: "group", name: "socialLinks", definitions: [
        { type: "text", name: "facebook", value: "https://www.facebook.com/people/A-Mass-Flooring/61577201170889/" },
        { type: "text", name: "instagram", value: "https://www.instagram.com/amassflooring/" },
        { type: "text", name: "twitter", value: "" },
        { type: "text", name: "youtube", value: "" },
      ]
    }
  ],
  render({ logo, address, copyright, socialLinks, email, env }) {
    const socialPlatforms = {
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      youtube: 'YouTube'
    };

    const social = Object.entries(socialLinks)
      .filter(([platform, url]) => Boolean(url))
      .map(([platform, url]) => `
        <a target="_blank"
           href="${url}"
           rel="noopener noreferrer"
           aria-label="Follow A. Mass Flooring & Tile on ${socialPlatforms[platform]}"
           itemprop="sameAs">
          <span style="background: url(${env.assetsOrigin}assets/icons/${platform}.icon.svg)"
                aria-hidden="true">${socialPlatforms[platform]}</span>
        </a>
      `).join("");

    const formattedAddress = address.replace(/\n/g, "<br>");

    return `
      <footer id="footer" class="view-section col" role="contentinfo" itemscope itemtype="https://schema.org/LocalBusiness">
        <div class="wrapper row">
          <div class="company-info">
            <img src="${env.assetsOrigin}${logo}"
                 alt="A. Mass Flooring & Tile company logo - Massachusetts flooring and renovation experts"
                 width="300"
                 height="300"
                 loading="lazy"
                 itemprop="logo" />
            <meta itemprop="name" content="A. Mass Flooring & Tile" />
            <meta itemprop="description" content="Professional flooring installation and renovation services in Massachusetts" />
          </div>
          <div class="contact-info" itemscope itemtype="https://schema.org/PostalAddress">
            <h3 hidden>Contact Information</h3>
            <address itemprop="address">
              <span itemprop="streetAddress">75 North Main Street<br>#2090</span><br>
              <span itemprop="addressLocality">Randolph</span>,
              <span itemprop="addressRegion">MA</span>
              <span itemprop="postalCode">02368</span><br>
              <span itemprop="addressCountry">United States</span>
            </address>
            <p>
              <strong>Phone:</strong>
              <a href="tel:+15089418283" itemprop="telephone">(508) 941-8283</a>
            </p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:${email}" itemprop="email">${email}</a>
            </p>
            <p>
              <strong>Service Area:</strong>
              <span itemprop="areaServed">Massachusetts</span>
            </p>
            <p><small><em>${copyright}</em></small></p>
          </div>
          <div class="social-links row">
            <h3 hidden>Follow Us</h3>
            ${social}
            <div itemscope itemtype="https://schema.org/ContactPoint">
              <meta itemprop="contactType" content="Customer Service" />
              <meta itemprop="areaServed" content="Massachusetts" />
              <meta itemprop="availableLanguage" content="English" />
            </div>
          </div>
        </div>
        <div class="floor-samples" role="img" aria-label="Decorative flooring samples pattern"></div>
        <meta itemprop="priceRange" content="$$" />
        <meta itemprop="paymentAccepted" content="Cash, Check, Credit Card" />
        <meta itemprop="url" content="/" />
      </footer>
    `;
  }
}
