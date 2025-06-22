export default {
  cssSelector: "#services",
  style: {
    "#services": {
      backgroundColor: "#f7f7f7",
    },
    ul: {
      listStyleType: "none",
      padding: "0",
      margin: "45px 0 0 0",
      gap: "45px",
      li: {
        flex: "1",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "1.6rem",
        cursor: "pointer",
        p: {
          margin: 0,
          textTransform: "capitalize",
        }
      }
    }
  },
  inputs: [
    {
      type: "list",
      name: "services",
      definitions: [
        {
          type: "group",
          definitions: [
            { type: "image", name: "image", value: "assets/flooring-service.webp" },
            { type: "text", name: "name", value: "Flooring service" },
          ]
        },
        {
          type: "group",
          definitions: [
            { type: "image", name: "image", value: "assets/kitchen-remodeling-service.webp" },
            { type: "text", name: "name", value: "Kitchen Remodeling" },
          ]
        },
        {
          type: "group",
          definitions: [
            { type: "image", name: "image", value: "assets/bathroom-renovation-service.webp" },
            { type: "text", name: "name", value: "Bathroom Renovations" },
          ]
        }
      ]
    },
    {
      type: "text",
      name: "heading",
      value: "Services"
    },
    {
      type: "html",
      name: "description",
      value: "<p>Transform your space with expert flooring installations and elegant kitchen and bathroom renovations. <strong>Our commitment to quality ensures stunning results every time</strong>.</p>"
    }
  ],
  render({ services, heading, description, env }) {
    const serviceItems = services.map(service => `
      <li class="service-card col" tabindex="0">
        <div class="thumbnail thumbnail-1-1">
          <img src="${env.assetsOrigin}${service.image}" alt="${service.name}" loading="lazy" />
        </div>
        <p>${service.name}</p>
      </li>
    `).join('');
    
    return `
      <section id="services" class="center view-section">
        <div class="wrapper">
          <h2>${heading}</h2>
          ${description}
          <ul class="row">${serviceItems}</ul>
        </div>
      </section>
    `;
  }
}
