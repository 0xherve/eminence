/**
 * Inline script to apply theme before first paint (avoids flash).
 * Inject in layout with: <script dangerouslySetInnerHTML={{ __html: themeScript }} />
 */
export const themeScript = `
(function() {
  var key = 'theme';
  var stored = localStorage.getItem(key);
  var resolved = stored === 'dark' || stored === 'light'
    ? stored
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (resolved === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
})();
`.trim();
