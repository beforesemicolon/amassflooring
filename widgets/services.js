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
  render({ services, heading, description, env, $comp }) {
    const serviceItems = services.map(service => `
      <li class="service-card col" tabindex="0" data-service="${service.name}">
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
      <dialog id="flooring-service-dialog">${$comp('flooring-installation-service')}</dialog>
      <dialog id="bathroom-remodeling-service-dialog">${$comp('bathroom-renovations-service')}</dialog>
      <dialog id="kitchen-renovations-service-dialog">${$comp('kitchen-remodeling-service')}</dialog>
      <script>
        {
					const flooringServiceDialog = document.getElementById('flooring-service-dialog');
          const bathroomRemodelingServiceDialog = document.getElementById('bathroom-remodeling-service-dialog');
				  const kitchenRenovationsServiceDialog = document.getElementById('kitchen-renovations-service-dialog');
					const flooringServiceCard = document.querySelector('.service-card[data-service="Flooring service"]');
          const bathroomRemodelingServiceCard = document.querySelector('.service-card[data-service="Bathroom Renovations"]');
          const kitchenRenovationsServiceCard = document.querySelector('.service-card[data-service="Kitchen Remodeling"]');
					
					const dialogs = [flooringServiceDialog, bathroomRemodelingServiceDialog, kitchenRenovationsServiceDialog];
					
					[flooringServiceCard, bathroomRemodelingServiceCard, kitchenRenovationsServiceCard].forEach((card, idx) => {
						card.addEventListener('click', () => {
              dialogs[idx].showModal();
              dialogs[idx].querySelector('.return-btn').addEventListener('click', () => {
                 dialogs[idx].close();
              })
						})
					})
        }
      </script>
    `;
  }
}
