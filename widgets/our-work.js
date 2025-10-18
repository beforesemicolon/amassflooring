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
      backgroundColor: "#fff",
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
    },
    ".rating-link": {
      textDecoration: "none",
      "&:hover": {
        opacity: "0.8",
      },
      "&:focus": {
        outline: "2px solid var(--accent-color)",
        outlineOffset: "2px",
      }
    },
    ".sr-only": {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: "0",
    }
  },
  scripts: [
    "our-work.js",
  ],
  inputs: [
    { type: "text", name: "title", value: "Our Work" },
    { type: "html", name: "description", value: "<p>At <strong>A-Mass Flooring & Tile</strong>, we combine precision and care in every <strong>flooring and renovation project</strong> throughout <strong>Massachusetts</strong>—transforming both <strong>residential and commercial</strong> spaces with clean, professional results. From flawless <strong>hardwood and luxury vinyl flooring</strong> to stunning bathroom and kitchen remodels, our team’s attention to detail ensures that your vision is not just met but elevated to something you’ll love for years to come. <em>Let us bring your next Massachusetts project to life</em>.</p>" },
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
    // Generate descriptive alt text for project images
    const projectTypes = [
      'Hardwood flooring installation', 'Luxury vinyl plank flooring', 'Ceramic tile installation',
      'Kitchen renovation', 'Bathroom remodeling', 'Commercial flooring project', 'Tile backsplash installation',
      'Laminate flooring', 'Carpet installation', 'Epoxy flooring', 'Stone tile work', 'Hardwood refinishing',
      'Kitchen countertop installation', 'Bathroom tile work', 'Commercial tile project', 'Vinyl tile flooring',
      'Custom kitchen design', 'Bathroom renovation', 'Flooring repair', 'Tile restoration',
      'Luxury bathroom remodel', 'Modern kitchen renovation', 'Commercial flooring installation', 'Residential tile work',
      'Hardwood floor sanding', 'Kitchen backsplash', 'Bathroom floor tile', 'Commercial renovation',
      'Custom tile design', 'Flooring installation', 'Kitchen remodeling', 'Bathroom upgrade',
      'Tile and grout work', 'Luxury flooring', 'Commercial tile installation', 'Residential renovation',
      'Custom flooring', 'Tile repair', 'Kitchen upgrade', 'Bathroom design',
      'Professional flooring', 'Tile installation', 'Kitchen renovation', 'Bathroom remodeling',
      'Flooring project', 'Tile work', 'Kitchen design', 'Bathroom renovation'
    ];

    const imagesHtml = images.map((imageSrc, idx) => {
      const projectType = projectTypes[idx] || 'Professional flooring and renovation project';
      return `
        <img src="${env.assetsOrigin}${imageSrc}" 
             alt="${projectType} completed by A. Mass Flooring & Tile in Massachusetts" 
             loading="lazy" 
             width="400" 
             height="285"
             itemprop="image" />
      `;
    }).join('');

    return `
      <section id="our-work" class="center view-section" aria-labelledby="our-work-heading" itemscope itemtype="https://schema.org/LocalBusiness">
        <div class="wrapper">
          <header class="space-apart">
            <h2 id="our-work-heading" itemprop="name">${title}</h2>
            <div class="rating row" itemscope itemtype="https://schema.org/AggregateRating">
              <a href="https://g.page/r/CeB4dRbzrVTxEBM/review" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="View our 5-star Google reviews for A. Mass Flooring & Tile"
                 class="rating-link row">
                <span class="sr-only">5 out of 5 stars rating</span>
                <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="" width="35" height="35" role="presentation" />
                <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="" width="35" height="35" role="presentation" />
                <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="" width="35" height="35" role="presentation" />
                <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="" width="35" height="35" role="presentation" />
                <img loading="lazy" src="${env.assetsOrigin}assets/icons/star.icon.svg" alt="" width="35" height="35" role="presentation" />
                <meta itemprop="ratingValue" content="5" />
                <meta itemprop="bestRating" content="5" />
                <meta itemprop="worstRating" content="1" />
                <meta itemprop="ratingCount" content="50" />
              </a>
            </div>
          </header>
          <div class="description" itemprop="description">${description}</div>
          <div class="image-gallery" role="region" aria-label="Project gallery showcasing completed flooring and renovation work">
            <div class="gallery-header">
              <button class="gallery-next-btn" 
                      aria-label="View next project images" 
                      type="button"
                      title="Navigate to next images in gallery">
                <span aria-hidden="true">&#8594;</span>
                <span class="sr-only">Next</span>
              </button>
            </div>
            <div class="image-row" role="img" aria-label="Gallery of completed flooring and renovation projects by A. Mass Flooring & Tile">
              ${imagesHtml}
            </div>
          </div>
          <meta itemprop="areaServed" content="Massachusetts" />
          <meta itemprop="serviceArea" content="Massachusetts" />
          <meta itemprop="priceRange" content="$$" />
        </div>
      </section>
    `;
  }
}
