
var darkMode = localStorage.getItem('darkMode', true);
function setDarkMode() {
      for (let styleSheet of document.styleSheets) {
            if (styleSheet.href && styleSheet.href.includes('/light-mode.css')) {
                  styleSheet.disabled = !darkMode;
                  break;
            }
      }
    localStorage.setItem('darkMode', true);
}
function toggleDarkMode() {
  darkMode = !darkMode;
  setDarkMode();
}
setDarkMode();
