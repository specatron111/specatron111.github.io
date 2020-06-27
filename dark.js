var darkMode = localStorage.getItem('darkMode');
console.log(darkMode);
if (darkMode === null) {
    darkMode = true
}
function setDarkMode() {
      for (let styleSheet of document.styleSheets) {
            if (styleSheet.href && styleSheet.href.includes('/light-mode.css')) {
                  styleSheet.disabled = !darkMode;
                  break;
            }
      }
}
$().ready(setDarkMode);