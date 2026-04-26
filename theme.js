// Global theme switcher: dark (default) ↔ light
(function() {
  function init() {
    // Restore saved preference
    var saved = localStorage.getItem('kabuki-theme');
    if (saved === 'light') document.body.classList.add('light-theme');

    // Inject toggle button
    var btn = document.createElement('button');
    btn.id = 'theme-toggle-btn';
    btn.setAttribute('aria-label', 'Переключить тему');
    btn.title = 'Переключить тёмную/светлую тему';
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
    btn.style.cssText = 'position:fixed;top:14px;right:14px;z-index:9999;background:rgba(20,20,18,.85);color:#f0d4a8;border:1px solid #c49a6c;border-radius:50%;width:34px;height:34px;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);';
    btn.addEventListener('click', function() {
      document.body.classList.toggle('light-theme');
      localStorage.setItem('kabuki-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    });
    document.body.appendChild(btn);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
