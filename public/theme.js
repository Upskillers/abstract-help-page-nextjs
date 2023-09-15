console.log("I actially loaded a thing")

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    console.log("computer said DARK")
} else {
    document.documentElement.classList.remove('dark')
    console.log("computer said LIGHT")
}