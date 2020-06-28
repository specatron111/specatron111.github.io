var darkMode = localStorage.getItem('darkMode');
if (darkMode === 'false') darkMode = false;
else if (darkMode === 'true') darkMode = true;
else darkMode = true;
document.getElementById('darkmode-toggle').checked = !darkMode;

function setDarkMode() {
	for (let styleSheet of document.styleSheets) {
		if (styleSheet.href && styleSheet.href.includes('/light-mode.css')) {
			styleSheet.disabled = darkMode;
			break;
		}
	}
}
setDarkMode();

function darkModeClicked(checkbox) {
	darkMode = !checkbox.checked;
	localStorage.setItem('darkMode', darkMode);
	setDarkMode();
}