function load() {
  const versions = document.querySelectorAll('.navbar .dropdown ul a');
  const types = [`/docs/next`, `/docs`];
  let i = 0;

  for (const el of versions) {
    const match = el.href.match(/\/docs\/(\d+\.\d+(\.\d+)?)$/) || el.href.match(/\/docs\/(\d+\.\d+(\.\d+)?)/);
    const version = (types[i++] || match[0]).replace('/docs', '/api');

    if (el.classList.contains('api-version-bound')) {
      continue;
    }

    el.addEventListener('click', (e) => {
      if (window.location.pathname.startsWith(`/api`)) {
        window.location.href = version;
        e.preventDefault();
      }
    });
    el.classList.add('api-version-bound');
  }
}

setInterval(() => {
  if (document.querySelectorAll('.navbar .dropdown ul a').length > 0) {
    load();
  }
}, 500);
