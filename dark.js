
function setDarkMode(x) {
      for (let styleSheet of document.styleSheets) {
            if (styleSheet.href && styleSheet.href.includes('/light-mode.css')) {
                  styleSheet.disabled = !x;
                  break;
            }
      }
}
