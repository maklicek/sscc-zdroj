
// Simple nav highlighter
(function(){
  try {
    const here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a => {
      const href = a.getAttribute('href');
      if(href === here) { a.classList.add('active'); a.setAttribute('aria-current','page'); }
    });
  } catch(e){}
})();
