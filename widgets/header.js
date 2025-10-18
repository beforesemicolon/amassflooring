export default {
  cssSelector: "#header",
  style: {
    "#header": {
      position: "fixed",
      top: "0",
      width: "100%",
      zIndex: "1000",
      "--header-shape": "polygon(" +
        "0 0%," +
        "100% 0," +
        "100% 50%," +
        "calc(max(350px, (100vw - 1200px) / 2 + 350px)) 50%," +
        "calc(max(280px, (100vw - 1200px) / 2 + 280px)) 100%," +
        "0 100%)",
      "--header-border-shape": "polygon(" +
        "0 calc(100% - 5px), " +
        "calc(max(282px, (100vw - 1200px) / 2 + 282px)) calc(100% - 5px), " +
        "calc(max(352px, (100vw - 1200px) / 2 + 352px)) calc(100% - 70px), " +
        "100% calc(100% - 70px), " +
        "100% calc(100% - 65px), " +
        "calc(max(355px, (100vw - 1200px) / 2 + 355px)) calc(100% - 65px), " +
        "calc(max(285px, (100vw - 1200px) / 2 + 285px)) calc(100% - 0px), " +
        "0 100%)",
      "&::before": {
        content: "''",
        position: "absolute",
        top: "15px",
        left: "0",
        width: "110%",
        height: "100%",
        background: "#fff",
        clipPath: "var(--header-border-shape)",
        zIndex: "1",
        pointerEvents: "none",
        "@media (max-width: 425px)": {
          "&": {
            display: "none",
          }
        }
      },
      "&.simple": {
        borderBottom: "2px solid #f2f2f2",
        "&::before": {
          display: "none",
        }
      }
    },
    header: {
      background: "repeating-linear-gradient(-45deg, #fff, #fff 10px, #fbfbfb 10px, #fbfbfb 20px)",
      padding: "20px 0",
      clipPath: "var(--header-shape)",
      "@media (max-width: 425px)": {
        "&": {
          clipPath: "none",
        }
      }
    },
    ".wrapper": {
      alignItems: "flex-start",
      "@media (max-width: 425px)": {
        "&": {
          alignItems: "center",
        }
      }
    },
    "#logo": {
      margin: 0,
      a: {
        height: "88px",
        width: "auto",
        gap: "10px",
        margin: 0
      }
    },
    "nav": {
      display: "flex",
      alignItems: "center",
      height: "30px",
      fontWeight: "600",
      gap: "30px",
      "@media (max-width: 1024px)": {
        "& > .phone span": {
          display: "none",
        }
      },
      "@media (max-width: 875px)": {
        "& > .menu-item": {
          display: "none",
        },
        "& > .phone span": {
          display: "inline-block",
        }
      },
      "@media (max-width: 600px)": {
        "& > .phone span": {
          display: "none",
        }
      },
    },
    ".menu-item": {
      textDecoration: "none",
      color: "#565F6F",
      fontFamily: "'Open Sans', sans-serif",
      transition: "color 0.3s",
      fontSize: "20px",
      "&.active": {
        color: "#f44336",
      }
    },
    ".phone": {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "20px",
      gap: "0",
      textDecoration: "none",
      color: "#001f3f",
      img: {
        width: "40px",
        height: "40px",
      }
    }
  },
  inputs: [
    { type: "text", name: "phone", label: "Phone Number", value: "(508) 941 - 8283" },
    {
      type: "list",
      name: "menuItems",
      label: "Menu Items",
      definitions: [
        {
          type: "group",
          name: "item",
          definitions: [
            { type: "text", name: "label", label: "Label", value: "Services" },
            { type: "text", name: "link", label: "Section ID", value: "#services" }
          ]
        },
        {
          type: "group",
          name: "item",
          definitions: [
            { type: "text", name: "label", label: "Label", value: "About" },
            { type: "text", name: "link", label: "Section ID", value: "#about" }
          ]
        },
        {
          type: "group",
          name: "item",
          definitions: [
            { type: "text", name: "label", label: "Label", value: "Our Work" },
            { type: "text", name: "link", label: "Section ID", value: "#our-work" }
          ]
        },
        {
          type: "group",
          name: "item",
          definitions: [
            { type: "text", name: "label", label: "Label", value: "Contact" },
            { type: "text", name: "link", label: "Section ID", value: "#contact" }
          ]
        }
      ]
    }
  ],
  scripts: [
    "header.js"
  ],
  render({ phone, menuItems, env }) {
    const cleanPhone = phone.replace(/\D/g, "");

    return `
       <div id="header">
         <header class="space-apart" itemscope itemtype="https://schema.org/LocalBusiness">
          <div class="wrapper space-apart">
            <h1 id="logo">
              <a href="/" class="row" aria-label="A. Mass Flooring & Tile - Massachusetts Flooring Experts Homepage" itemprop="url">
                <img class="logo-symbol" src="${env.assetsOrigin}assets/logo/symbol-logo-black.svg" alt="A. Mass Flooring & Tile company logo symbol" height="88" width="88" style="height: 88px" itemprop="logo" />
                <img class="logo-name" src="${env.assetsOrigin}assets/logo/name-logo-black.svg" alt="A. Mass Flooring & Tile company name" height="43" width="auto" style="height: 43px" />
                <meta itemprop="name" content="A. Mass Flooring & Tile" />
                <meta itemprop="description" content="Massachusetts flooring and tile experts specializing in residential and commercial services" />
              </a>
            </h1>
            <nav class="row" role="navigation" aria-label="Main navigation">
              <a href="tel:${cleanPhone}" class="phone row" aria-label="Call A. Mass Flooring & Tile at ${phone}" itemprop="telephone" content="${cleanPhone}">
                <img src="${env.assetsOrigin}assets/icons/phone.icon.svg" alt="Phone" height="40" width="40" />
                <span>${phone}</span>
              </a>
              ${menuItems.map(item => `
                <a href="${item.link}" class="menu-item" aria-label="Navigate to ${item.label} section">${item.label}</a>
              `).join('')}
            </nav>
          </div>
        </header>
      </div>
    `;
  }
}
