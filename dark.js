
var darkMode = localStorage.getItem('darkMode', true);
console.log(darkMode);
function setDarkMode() {
      for (let styleSheet of document.styleSheets) {
            if (styleSheet.href && styleSheet.href.includes('/light-mode.css')) {
                  styleSheet.disabled = !darkMode;
                  break;
            }
      }
}
setDarkMode();
