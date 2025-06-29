const sections = document.querySelectorAll('.view-section');
const menuLinks = document.querySelectorAll('.menu-item');

const observer = new IntersectionObserver(
  entries => {
    // Find the entry with the highest intersection ratio that is intersecting
    const visibleEntry = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    
    if (visibleEntry) {
      menuLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === ("#" + visibleEntry.target.id)
        );
      });
    }
  },
  { threshold: Array.from({length: 101}, (_, i) => i / 100) }
);

sections.forEach(section => observer.observe(section));

const header = document.querySelector('div#header header');
const logo = header.querySelector('#logo a');
const logoSymbol = header.querySelector('.logo-symbol');
const wrapper = header.querySelector('.wrapper');
const contentBox = document.querySelector('body > .content');
const headerBefore = header;

const lerp = (a, b, t) => {
    return a + (b - a) * t;
  }

;contentBox.addEventListener('scroll', (e) => {
  const boxWidth = contentBox.offsetWidth;
  const isMobile = boxWidth < 450;
  const scrollY = Math.min(contentBox.scrollTop, 44);
  const t = scrollY / 44;
  
  requestAnimationFrame(() => {
    logo.style.height = lerp(88, 44, t) + 'px';
    header.style.clipPath = t >= 0.4 || isMobile ? 'none' : 'var(--header-shape)';
    
    logoSymbol.style.height = lerp(88, 60, t) + 'px';
    
    if (t >= 0.4) {
      wrapper.style.alignItems = 'center';
      header.parentNode.classList.add('simple');
      header.style.background = '#fff';
    } else {
      wrapper.style.alignItems = isMobile  ? 'center' : 'flex-start';
      header.parentNode.classList.remove('simple');
      header.style.removeProperty('background');
    }
  })
  
})
