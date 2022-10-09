let darkMode = false;
const toggleDarkMode = () => {
    const body = document.getElementById('body')
    const toggle = document.getElementById('toggle')
    darkMode = !darkMode;
    body.classList.remove(darkMode ? 'light' : 'dark');
    body.classList.add(darkMode ? 'dark' : 'light');
    toggle.innerHTML = darkMode ? 'Switch to light mode' : 'Switch to dark mode'
}