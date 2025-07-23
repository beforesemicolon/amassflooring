export default {
  cssSelector: "#our-work",
  style: {
    "header.space-apart": {
      "@media (max-width: 600px)": {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0,
        marginBottom: "10px",
      }
    },
    "#our-work": {
      backgroundColor: "#f7f7f7",
    },
    ".description": {
      p: {
        maxWidth: "100%",
      }
    },
    ".image-gallery": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      "@media (max-width: 600px)": {
        "& button": {
          "height": "50px"
        }
      }
    },
    ".gallery-header": {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: "10px",
      button: {
        all: "unset",
        fontSize: "4rem",
        cursor: "pointer",
        "&:active": {
          transform: "scale(0.8)",
        }
      }
    },
    ".image-row": {
      display: "flex",
      gap: "35px",
      transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
      willChange: "transform",
      height: "285px",
      width: "100vw",
      "@media (max-width: 875px)": {
        height: "30vw",
      },
      img: {
        height: "100%",
        flex: "0 0 auto",
        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        "&:hover": {
          transform: "scale(1.4)",
          zIndex: "1",
          "@media (max-width: 600px)": {
            transform: "scale(2)",
          }
        }
      }
    },
    ".rating": {
      "@media (max-width: 600px)": {
        "& img": {
          width: "20px !important",
        }
      }
    }
  },
  scripts: [
    "our-work.js",
  ],
  inputs: [
    { type: "text", name: "title", value: "Our Work" },
    { type: "html", name: "description", value: "<p>At A-Mass Flooring & Tile, we combine precision and care in every flooring and renovation project—transforming both <strong>residential and commercial</strong> spaces with clean, professional results. From flawless flooring to stunning bathroom and kitchen remodels, our team’s attention to detail ensures that your vision is not just met but elevated to something you’ll love for years to come. <em>Let us bring your next project to life</em>.</p>" },
    {
      type: "list",
      name: "images",
      definitions: [
        { type: "image", name: "image", value: "assets/project-1.webp" },
        { type: "image", name: "image", value: "assets/project-2.webp" },
        { type: "image", name: "image", value: "assets/project-3.webp" },
        { type: "image", name: "image", value: "assets/project-4.webp" },
        { type: "image", name: "image", value: "assets/project-5.webp" },
        { type: "image", name: "image", value: "assets/project-6.webp" },
        { type: "image", name: "image", value: "assets/project-7.webp" },
        { type: "image", name: "image", value: "assets/project-8.webp" },
        { type: "image", name: "image", value: "assets/project-9.webp" },
        { type: "image", name: "image", value: "assets/project-10.webp" },
        { type: "image", name: "image", value: "assets/project-11.webp" },
        { type: "image", name: "image", value: "assets/project-12.webp" },
        { type: "image", name: "image", value: "assets/project-13.webp" },
        { type: "image", name: "image", value: "assets/project-14.webp" },
        { type: "image", name: "image", value: "assets/project-15.webp" },
        { type: "image", name: "image", value: "assets/project-16.webp" },
        { type: "image", name: "image", value: "assets/project-17.webp" },
        { type: "image", name: "image", value: "assets/project-18.webp" },
        { type: "image", name: "image", value: "assets/project-19.webp" },
        { type: "image", name: "image", value: "assets/project-20.webp" },
        { type: "image", name: "image", value: "assets/project-21.webp" },
        { type: "image", name: "image", value: "assets/project-22.webp" },
        { type: "image", name: "image", value: "assets/project-23.webp" },
        { type: "image", name: "image", value: "assets/project-24.webp" },
        { type: "image", name: "image", value: "assets/project-25.webp" },
        { type: "image", name: "image", value: "assets/project-26.webp" },
        { type: "image", name: "image", value: "assets/project-27.webp" },
        { type: "image", name: "image", value: "assets/project-28.webp" },
        { type: "image", name: "image", value: "assets/project-29.webp" },
        { type: "image", name: "image", value: "assets/project-30.webp" },
        { type: "image", name: "image", value: "assets/project-31.webp" },
        { type: "image", name: "image", value: "assets/project-32.webp" },
        { type: "image", name: "image", value: "assets/project-33.webp" },
        { type: "image", name: "image", value: "assets/project-34.webp" },
        { type: "image", name: "image", value: "assets/project-35.webp" },
        { type: "image", name: "image", value: "assets/project-36.webp" },
        { type: "image", name: "image", value: "assets/project-37.webp" },
        { type: "image", name: "image", value: "assets/project-38.webp" },
        { type: "image", name: "image", value: "assets/project-39.webp" },
        { type: "image", name: "image", value: "assets/project-40.webp" },
        { type: "image", name: "image", value: "assets/project-41.webp" },
        { type: "image", name: "image", value: "assets/project-42.webp" },
        { type: "image", name: "image", value: "assets/project-43.webp" },
        { type: "image", name: "image", value: "assets/project-44.webp" },
        { type: "image", name: "image", value: "assets/project-45.webp" },
        { type: "image", name: "image", value: "assets/project-46.webp" },
      ]
    }
  ],
  render({ title, images, description, env }) {
    const imagesHtml = images.map((imageSrc, idx) => `
      <img src="${env.assetsOrigin}${imageSrc}" alt="work example ${idx+1}" loading="lazy" />
    `).join('');
    return `
      <section id="our-work" class="center view-section">
        <div class="wrapper">
          <header class="space-apart">
            <h2>${title}</h2>
            <a href="https://g.page/r/CeB4dRbzrVTxEBM/review" target="_blank" class="rating row">
              <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="star rating" width="35" height="35" />
              <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="star rating" width="35" height="35" />
              <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="star rating" width="35" height="35" />
              <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="star rating" width="35" height="35" />
              <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="star rating" width="35" height="35" />
            </a>
          </header>
          <div class="description">${description}</div>
          <div class="image-gallery">
            <div class="gallery-header">
              <button class="gallery-next-btn">&#8594;</button>
            </div>
            <div class="image-row">
              ${imagesHtml}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
