export default {
  cssSelector: "#hero",
  style: ({env}) => ({
    "#hero": {
      background: `url('${env.assetsOrigin}assets/hero-bg.webp') no-repeat center center`,
      backgroundSize: "cover",
      paddingTop: "100px",
      "--text-shadow": "0 3px 6px rgba(0, 0, 0, 0.3)"
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
          fontSize: "clamp(40px, 10vw, 116px)",
        }
      }
    },
    ".cta-action": {
      display: "inline-flex",
      background: "var(--accent-color)",
      color: "#fff",
      textAlign: "center",
      marginTop: "60px",
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
            fontSize: "1rem",
          }
        }
      },
      a: {
        fontSize: "2rem",
        "@media (max-width: 600px)": {
          "&": {
            fontSize: "1.6rem",
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
  render({ title, description, cta, note }) {
    return `
      <section id="hero" class="center view-section">
        <div class="wrapper">
          <h2>${title}</h2>
          <p>${description}</p>
          <div class="cta-action col">
            <a href="#contact" class="btn">${cta}</a>
            <p>${note}</p>
          </div>
        </div>
      </section>
    `;
  }
}
