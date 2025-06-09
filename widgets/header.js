export default {
  style: {
    ".header-wrapper": {
      position: "sticky",
      top: "0",
      width: "100%",
      zIndex: "1000",
      "--header-shape": "polygon(" +
        "0 0%," + // top-left
        "100% 0," + // top-right
        "100% 50%," + // middle-right
        "calc(max(350px, (100vw - 1200px) / 2 + 350px)) 50%," + // center left
        "calc(max(280px, (100vw - 1200px) / 2 + 280px)) 100%," + // center bottom
        "0 100%)", // bottom-left
      "--header-border-shape": "polygon(" +
        "0 calc(100% - 5px), " +
        "calc(max(282px, (100vw - 1200px) / 2 + 282px)) calc(100% - 5px), " +
        "calc(max(352px, (100vw - 1200px) / 2 + 352px)) calc(100% - 70px), " +
        "100% calc(100% - 70px), " +
        "100% calc(100% - 65px), " +
        "calc(max(355px, (100vw - 1200px) / 2 + 355px)) calc(100% - 65px), " +
        "calc(max(285px, (100vw - 1200px) / 2 + 285px)) calc(100% - 0px), " +
        "0 100%)",
    },
    header: {
      background: "repeating-linear-gradient(-45deg, #fff, #fff 10px, #fbfbfb 10px, #fbfbfb 20px)",
      padding: "20px 40px",
      clipPath: "var(--header-shape)",
    },
    ".header-wrapper::before": {
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
    },
    ".wrapper": {
      alignItems: "flex-start",
    },
    "#logo": {
      height: "88px",
      width: "auto",
      gap: "10px",
      margin: 0
    },
    ".navigation": {
      display: "flex",
      alignItems: "center",
      height: "30px",
      fontWeight: "600",
      gap: "30px"
    },
    ".menu-item": {
      textDecoration: "none",
      color: "#565F6F",
      fontFamily: "'Open Sans', sans-serif",
      transition: "color 0.3s",
      fontSize: "20px",
    },
    ".phone": {
      fontFamily: "'Open Sans', sans-serif",
      color: "#001f3f",
      marginLeft: "20px",
      fontSize: "20px",
      gap: "0",
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
  render({ phone, menuItems, env }) {
    return `
       <div class="header-wrapper">
         <header class="space-apart">
          <div class="wrapper space-apart">
            <h1 id="logo" class="row">
              <img class="logo-symbol" src="${env.assetsOrigin}assets/logo/symbol-logo-black.svg" alt="A. Mass Flooring & Tile Logo" height="88" style="height: 88px" />
              <img class="logo-name" src="${env.assetsOrigin}assets/logo/name-logo-black.svg" alt="A. Mass Flooring & Tile Logo" height="43" style="height: 43px" />
            </h1>
            <nav class="navigation row">
              <div class="phone row">
                <img src="${env.assetsOrigin}assets/icons/phone.icon.svg" alt="phone icon" height="16" width="16" />
                ${phone}
              </div>
              ${menuItems.map(item => `
                <a href="${item.link}" class="menu-item">${item.label}</a>
              `).join('')}
            </nav>
          </div>
        </header>
      </div>
    `;
  }
}
