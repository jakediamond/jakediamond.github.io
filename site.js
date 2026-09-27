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
  const toggle = document.querySelector('.navbar-toggle');
  if (toggle) {
    toggle.setAttribute('aria-label', 'Toggle navigation');
    toggle.setAttribute('aria-controls', 'navbar');
    toggle.setAttribute('aria-expanded', 'false');
  }
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar a').forEach(link => {
    if (link.getAttribute('href') === file) link.setAttribute('aria-current', 'page');
  });
  const search = document.getElementById('topic-search');
  if (!search) return;
  document.querySelector('.research-search').hidden = false;
  const topics = [...document.querySelectorAll('#topic-list li')];
  const normalize = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const filter = () => {
    const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    topics.forEach(topic => {
      const haystack = normalize(topic.textContent + ' ' + topic.dataset.keywords);
      topic.hidden = !words.every(word => haystack.includes(word));
      if (!topic.hidden) count++;
    });
    document.getElementById('topic-status').textContent = `${count} of ${topics.length} topics`;
    document.querySelector('.no-topics').hidden = count > 0;
  };
  search.addEventListener('input', filter);
  search.addEventListener('keydown', event => {
    if (event.key === 'Escape') { search.value = ''; filter(); }
  });
  filter();
})();
