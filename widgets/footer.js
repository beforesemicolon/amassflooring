export default {
  cssSelector: "#footer",
  style: {
    "#footer": {
      backgroundColor: "var(--accent-color)",
      color: "#fff",
      justifyContent: "space-between",
      address: {
        p: {
          fontSize: "1.2em",
          color: "#68a2ff"
        }
      }
    },
    a: {
      color: "#fff",
      textDecoration: "none"
    },
    ".wrapper": {
      marginTop: "150px",
      alignItems: "flex-start"
    },
    img: {
      position: "relative",
      top: "-10px",
    },
    ".details": {
      gap: "30px",
    },
    ".contact-info, .social-links": {
      paddingTop: "30px",
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
      }
    },
    ".floor-samples": {
      width: "100%",
      height: "50%",
      backgroundImage: "url('/assets/flooring-samples.webp')",
      backgroundRepeat: "repeat-x",
      backgroundSize: "auto 100%",
      backgroundPosition: "center",
      opacity: "0.8",
    }
  },
  inputs: [
    {type: "image", name: "logo", value: "assets/logo/emblem-logo-white.svg"},
    {type: "html", name: "address", value: "<p>233 Broad St\nSte 13A #100\nBridgewater, MA 02324</p>"},
    {type: "text", name: "phone", value: "(508) 941 - 8283"},
    {
      type: "text",
      name: "copyright",
      label: "Copyright",
      value: "© 2025 A-Mass Flooring & Tile LLC. All rights reserved."
    },
    {
      type: "group", name: "socialLinks", definitions: [
        {type: "text", name: "facebook", value: "https://www.facebook.com/people/A-Mass-Flooring/61577201170889/"},
        {type: "text", name: "instagram", value: "https://www.instagram.com/amassflooring/"},
        {type: "text", name: "twitter", value: ""},
        {type: "text", name: "youtube", value: ""},
      ]
    }
  ],
  render({logo, address, phone, copyright, socialLinks, env}) {
    const social = Object.entries(socialLinks)
      .filter(([k, v]) => Boolean(v))
      .map(([k, v]) => `<a target="_blank" href="${v}" aria-label="${k} social logo"><span style="background: url(${env.assetsOrigin}assets/icons/${k}.icon.svg)">${k}</span></a>`).join("");
    
    const formattedAddress = address.replace(/\n/g, "<br>");
    
    return `
      <footer id="footer" class="view-section col">
        <div class="wrapper row">
          <img src="${env.assetsOrigin}${logo}" alt="a.mass flooring & tile logo" width="300" height="300" loading="lazy" />
          <div class="contact-info">
            <p><a href="tel:${phone.replace(/\D/g, "")}">${phone}</a></p>
            <address>${formattedAddress}</address>
            <p><small><em>${copyright}</em></small></p>
          </div>
          <div class="social-links row">
            ${social}
          </div>
        </div>
        <div class="floor-samples"></div>
      </footer>
    `;
  }
}
