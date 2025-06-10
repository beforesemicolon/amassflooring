export default {
  cssSelectr: "#hero",
  style: ({env}) => ({
    "#hero": {
      height: "100vh",
      background: `url('${env.assetsOrigin}assets/hero-bg@2x.jpg') no-repeat center center`,
      backgroundSize: "cover",
      paddingTop: "70px",
      "--text-shadow": "0 3px 6px rgba(0, 0, 0, 0.3)",
      h2: {
        fontSize: "clamp(80px, 8vw, 116px)",
        fontWeight: "500",
        textTransform: "uppercase",
        fontFamily: "'Fjalla One', sans-serif",
        margin: 0,
        width: "86%",
        letterSpacing: "2px",
        textShadow: "var(--text-shadow)",
        "& + p": {
          fontSize: "max(2.8vw, 30px)",
          fontWeight: "100",
          margin: 0,
          letterSpacing: "1px",
          textShadow: "var(--text-shadow)",
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
        p: {
          margin: 0,
          padding: "12px 10px",
          fontSize: "1.1rem",
          fontWeight: "600",
          letterSpacing: "1px",
        },
        a: {
          fontSize: "2rem",
        }
      }
    },
  }),
  inputs: [
    { type: "text", name: "title", label: "Title", value: "Massachusetts’\n Trusted Flooring & Renovation Experts" },
    { type: "text", name: "description", label: "Description", value: "Specializing in Flooring, Kitchen & Bathroom Renovations" },
    { type: "text", name: "cta", label: "CTA Text", value: "Request A Quote" },
    { type: "text", name: "note", label: "Note", value: "Commercial & Residential" }
  ],
  render({ title, description, cta, note }) {
    return `
      <section id="hero" class="center">
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
