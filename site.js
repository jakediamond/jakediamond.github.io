/* Small progressive enhancements; all content and navigation work without JS. */
(() => {
  'use strict';
  const main = document.querySelector('.main-container');
  if (main) {
    main.id = 'main-content';
    main.setAttribute('role', 'main');
    main.setAttribute('tabindex', '-1');
    const skip = document.createElement('a');
    skip.className = 'skip-link';
    const heading = main.querySelector('h1');
    if (heading) {
      heading.id = heading.id || 'content-start';
      heading.setAttribute('tabindex', '-1');
    }
    skip.href = heading ? '#' + heading.id : '#main-content';
    skip.textContent = 'Skip to content';
    document.body.prepend(skip);
  }
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-header nav a').forEach(link => {
    if (link.getAttribute('href') === file) link.setAttribute('aria-current', 'page');
  });
})();
