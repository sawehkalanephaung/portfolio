const darkModeToggle = document.getElementById('darkModeToggle');
const theme = localStorage.getItem('theme');

if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
console.log('Current theme:', theme);
darkModeToggle.addEventListener('click', () => {
    console.log('Dark mode toggle clicked');
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

