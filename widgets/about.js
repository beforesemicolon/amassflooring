export default {
  cssSelector: "#about",
  style: {
    ".wrapper": {
      gap: "60px"
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
      value: "<p>Based in East Massachusetts, A-Mass Flooring & Tile has been serving the community for several years, building a loyal customer base and growing mostly through word-of-mouth referrals.</p><p>We believe in doing things right the first time—no shortcuts, no compromises. Our focus on quality and precision ensures flooring and remodeling work that lasts and looks great, whether it's for residential or commercial projects.</p>"
    }
  ],
  render({ title, description, image, env }) {
    return `
      <section id="about" class="center view-section">
        <div class="wrapper row">
          <img src="${env.assetsOrigin}${image}" alt="${title}" loading="lazy"/>
          <div class="content">
            <h2>${title}</h2>
            ${description}
          </div>
        </div>
      </section>
    `;
  }
}
