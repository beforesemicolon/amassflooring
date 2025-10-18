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
        "p, h3": {
          margin: 0,
          textTransform: "capitalize",
          fontSize: "inherit",
          fontWeight: "inherit",
          fontFamily: "inherit",
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
            "p, h3": {
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
            { type: "text", name: "name", value: "Professional Flooring Installation" },
            { type: "text", name: "dialog", value: "flooring-installation-service", readonly: true },
          ]
        },
        {
          type: "group",
          definitions: [
            { type: "image", name: "image", value: "assets/kitchen-remodeling-service.webp" },
            { type: "text", name: "name", value: "Complete Kitchen Remodeling" },
            { type: "text", name: "dialog", value: "kitchen-remodeling-service", readonly: true },
          ]
        },
        {
          type: "group",
          definitions: [
            { type: "image", name: "image", value: "assets/bathroom-renovation-service.webp" },
            { type: "text", name: "name", value: "Expert Bathroom Renovations" },
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
      value: "<p>Transform your <strong>Massachusetts home or business</strong> with our expert <strong>flooring installations</strong>, elegant <strong>kitchen remodeling</strong>, and complete <strong>bathroom renovations</strong>. From <strong>hardwood and luxury vinyl flooring</strong> to custom <strong>tile work</strong> and full-scale renovations, <strong>our commitment to quality craftsmanship ensures stunning results every time</strong>.</p>"
    }
  ],
  render({ services, heading, description, env, $comp }) {
    const serviceItems = services.map((service, index) => `
      <li class="service-card col" tabindex="0" aria-label="Learn more about ${service.name} services" data-dialog="${service.dialog}" itemscope itemtype="https://schema.org/Service">
        <div class="thumbnail thumbnail-1-1">
          <img src="${env.assetsOrigin}${service.image}" alt="Professional ${service.name.toLowerCase()} by A. Mass Flooring & Tile in Massachusetts" loading="lazy" width="300" height="300" itemprop="image" />
        </div>
        <h3 itemprop="name">${service.name}</h3>
        <meta itemprop="provider" content="A. Mass Flooring & Tile" />
        <meta itemprop="areaServed" content="Massachusetts" />
        <meta itemprop="serviceType" content="${service.name}" />
      </li>
    `).join('');

    const dialogs = services.map(service => `<dialog id="${service.dialog}-dialog">${$comp(service.dialog)}</dialog>`).join('')

    return `
      <section id="services" class="center view-section" aria-labelledby="services-heading" itemscope itemtype="https://schema.org/LocalBusiness">
        <div class="wrapper">
          <h2 id="services-heading" itemprop="name">${heading}</h2>
          <div itemprop="description">
            ${description}
          </div>
          <ul class="row" role="list" aria-label="Available services">
            ${serviceItems}
          </ul>
          <meta itemprop="areaServed" content="Massachusetts" />
          <meta itemprop="serviceArea" content="Massachusetts" />
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
