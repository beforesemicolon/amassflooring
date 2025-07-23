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
      alignItems: "flex-start",
      "@media (max-width: 425px)": {
        "&": {
          margin: "20px 0 0 0",
          flexDirection: "column",
          gap: "20px",
        }
      },
      li: {
        flex: "1",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "1.6rem",
        cursor: "pointer",
        p: {
          margin: 0,
          textTransform: "capitalize",
        },
        "@media (max-width: 600px)": {
          "&": {
            fontSize: "1rem",
          }
        },
        "@media (max-width: 425px)": {
          "&": {
            flexDirection: "row",
            maxHeight: "35vw",
            width: "100%",
            ".thumbnail": {
              height: "100%",
              width: "30%",
              minWidth: "30%",
              paddingTop: "30%",
            },
            p: {
              textAlign: "left",
              padding: "10px 0 0 ",
              fontSize: "1.4rem",
            }
          }
        },
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
            { type: "text", name: "name", value: "Flooring installation" },
            { type: "text", name: "dialog", value: "flooring-installation-service", readonly: true },
          ]
        },
        {
          type: "group",
          definitions: [
            { type: "image", name: "image", value: "assets/kitchen-remodeling-service.webp" },
            { type: "text", name: "name", value: "Kitchen Remodeling" },
            { type: "text", name: "dialog", value: "kitchen-remodeling-service", readonly: true },
          ]
        },
        {
          type: "group",
          definitions: [
            { type: "image", name: "image", value: "assets/bathroom-renovation-service.webp" },
            { type: "text", name: "name", value: "Bathroom Renovations" },
            { type: "text", name: "dialog", value: "bathroom-renovations-service", readonly: true },
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
  render({ services, heading, description, env, $comp }) {
    const serviceItems = services.map(service => `
      <li class="service-card col" tabindex="0" aria-label="${service.name} service-card" data-dialog="${service.dialog}">
        <div class="thumbnail thumbnail-1-1">
          <img src="${env.assetsOrigin}${service.image}" alt="${service.name}" loading="lazy" />
        </div>
        <p>${service.name}</p>
      </li>
    `).join('');
    
    const dialogs = services.map(service => `<dialog id="${service.dialog}-dialog">${$comp(service.dialog)}</dialog>`).join('')
    
    return `
      <section id="services" class="center view-section">
        <div class="wrapper">
          <h2>${heading}</h2>
          ${description}
          <ul class="row">${serviceItems}</ul>
        </div>
      </section>
      ${dialogs}
      <script>
        {
					document.querySelectorAll('#services .service-card').forEach((card) => {
						const dialog = document.getElementById(card.dataset.dialog + '-dialog')
						
						card.addEventListener('click', () => {
              dialog.showModal();
              dialog.querySelector('.return-btn').addEventListener('click', () => {
                 dialog.close();
              })
						})
					})
        }
      </script>
    `;
  }
}
