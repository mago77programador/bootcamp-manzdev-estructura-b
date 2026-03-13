document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll Reveal Logic ---
  const sections = document.querySelectorAll('section');
  
  const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);
  
  sections.forEach(section => revealObserver.observe(section));

  // --- Secret Dance Toggle ---
  const customsButton = document.getElementById('customs-button');
  const baileSecreto = document.getElementById('baile-secreto');
  
  if (customsButton && baileSecreto) {
    customsButton.addEventListener('click', () => {
      const isHidden = baileSecreto.classList.toggle('hidden');
      customsButton.textContent = isHidden 
        ? '¡Muestra nuestro baile de saludo!' 
        : 'Ocultar el baile secreto';
      
      if (!isHidden) {
        baileSecreto.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  }
  
  // --- Enhanced Typewriter Effect ---
  const title = document.querySelector('header h1');
  if (title) {
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    
    const type = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };
    
    setTimeout(type, 300);
  }
  
  // --- Theme Toggle Easter Egg ---
  document.body.addEventListener('dblclick', (e) => {
    if (!e.target.closest('button') && !e.target.closest('a')) {
      const isAltTheme = document.body.classList.toggle('alt-theme');
      const root = document.documentElement;
      
      if (isAltTheme) {
        root.style.setProperty('--accent-primary', '#00ffff');
        root.style.setProperty('--accent-secondary', '#ff00ff');
      } else {
        root.style.setProperty('--accent-primary', '#ff00ff');
        root.style.setProperty('--accent-secondary', '#00ffff');
      }
    }
  });
});