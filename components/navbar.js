import { useState, useEffect } from 'react';

export default function Navbar() {
    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((current) => !current);
    };

    const [theme, setTheme] = useState(true);
    // for dark mode
    useEffect(() => {
        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        const theme = JSON.parse(localStorage.getItem('theme'));
        // if not theme and user OS is dark mode
        if ((!theme && 
            window.matchMedia('(prefers-color-scheme: dark)').matches) ||           theme === 'dark') {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            themeToggleDarkIcon.classList.remove('hidden');

        }
    }, [theme]);

    function handleDarkToggle() {
        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');


        if (theme === "light") {
            // when theme is changed, set the localStorage
            localStorage.setItem("theme", JSON.stringify("dark"));
            setTheme("dark");
            document.documentElement.classList.add("dark");
          } else {
            // when theme is changed, set the localStorage
            localStorage.setItem("theme", JSON.stringify("light"));
            console.log("set light")

            setTheme("light");
            document.documentElement.classList.remove("dark");
          }
    };

    
    return (
        <div className="w-full">
        <div className="w-full bg-[#003049] m-0 flex flex-row justify-between">
            <div id="logo-wrapper" className="pr-2 m-1 md:ml-4 w-auto h-16 flex p-4">
                <svg className="abstract-logo logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
                    <g className="abstract-logo-mark" fill="#fff">
                        <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                        <circle cx="21.24" cy="29.58" r="4.96"></circle>
                    </g>
                    <g className="abstract-logo-wordmark" fill="#fff">
                        <path className="abstract-logo-letter-1" d="M70.9 28.81c2.37-6.59 3.32-9.26 4.19-12 1.26 3.92 2.56 7.58 4.08 12zM72.54 12L62.33 38.91h5.22l2.17-6.29h10.63l2.13 6.29h5.26L77.91 12z"></path>
                        <path className="abstract-logo-letter-2" d="M98.43 35.56c-2.82 0-4.46-2.33-4.46-6.37 0-3.62 1.91-5.9 4.61-5.9 2.55 0 4.12 2.32 4.12 6.13 0 4-1.64 6.14-4.27 6.14m-4.34-13.07V12h-4.46v26.9h4.27v-2.47a6.31 6.31 0 0 0 5.63 2.86c4.69 0 7.81-3.66 7.81-9.87s-2.85-9.87-7.31-9.87a7.3 7.3 0 0 0-5.94 2.94z"></path>
                        <path className="abstract-logo-letter-3" d="M116.71 22.8a4.77 4.77 0 0 1 4.29 2.67l3.32-2.25a8.44 8.44 0 0 0-7.48-3.82c-4.69 0-7.36 2.75-7.36 5.73s1.87 4.61 4.81 5.53l2 .65c2.86.91 3.51 1.45 3.51 2.71s-1.07 2-3 2a5.34 5.34 0 0 1-4.84-3.09l-3.47 2.29a9.35 9.35 0 0 0 8.12 4.27c4.73 0 7.67-2.56 7.67-6.07 0-3-1.91-4.61-5.26-5.68l-2-.61c-2.44-.76-3-1.3-3-2.44s.92-1.87 2.82-1.87"></path>
                        <path className="abstract-logo-letter-4" d="M133.3 23.52h3.7V20h-3.7v-6.2h-4.44l-.08 6.2h-3v3.57h3v10.4a5.92 5.92 0 0 0 1.07 4c.77.92 2 1.38 3.9 1.38a13.24 13.24 0 0 0 3.32-.43v-3.59a5.51 5.51 0 0 1-1.83.35c-1.38 0-1.94-.69-1.94-2.64z"></path>
                        <path className="abstract-logo-letter-5" d="M143.77 20h-4.27v19h4.5v-8.88a7.63 7.63 0 0 1 1-4.36 4.43 4.43 0 0 1 4-1.89 6.15 6.15 0 0 1 1.64.25V20a5.3 5.3 0 0 0-1.64-.3 5.44 5.44 0 0 0-5.26 3.18z"></path>
                        <path className="abstract-logo-letter-6" d="M163.54 30.93a5.57 5.57 0 0 1-.84 3 4.61 4.61 0 0 1-4 2c-2 0-2.9-1-2.9-2.4a2.34 2.34 0 0 1 1.64-2.33 18.72 18.72 0 0 1 6.07-1.15zm4.25-4c0-3-.4-4.54-1.58-5.65s-3.09-1.83-5.69-1.83c-4.85 0-7.91 2.29-8.21 6.42l4.28.38c.23-2.1 1.26-3.29 3.59-3.29a3.65 3.65 0 0 1 2.63.81 3 3 0 0 1 .73 2.29v1c-3 .19-6.68.72-8.55 1.56a5.25 5.25 0 0 0-3.48 5.08c0 3.4 2.45 5.57 5.92 5.57a7.63 7.63 0 0 0 6.22-2.71c.41 1.9 1.75 2.61 4.14 2.61a6.21 6.21 0 0 0 2-.31V36c-1.73.31-2-.7-2-2.18z"></path>
                        <path className="abstract-logo-letter-7" d="M175.35 29.31c0-4.23 2-6.17 4.57-6.17 1.8 0 3.17.84 3.7 3.35l4-1.37A7.33 7.33 0 0 0 180 19.4c-5.69 0-9.27 3.78-9.27 10s3.51 10.06 9 10.06c4.31 0 6.83-2.28 7.93-5.45l-4-1.37a3.51 3.51 0 0 1-3.7 3.09c-2.86-.01-4.61-2.22-4.61-6.42z"></path>
                        <path className="abstract-logo-letter-8" d="M196.23 23.52h3.67V20h-3.67v-6.2h-4.44l-.08 6.2h-3v3.57h3v10.4a5.92 5.92 0 0 0 1.07 4c.77.92 2 1.38 3.9 1.38a13.24 13.24 0 0 0 3.32-.43v-3.59a5.51 5.51 0 0 1-1.83.35c-1.38 0-1.94-.69-1.94-2.64z"></path>
                    </g>
                </svg>
                <div className="inline-block w-0.5 self-stretch my-0.5 mx-2 bg-[#C1121F]"></div>
                <a className="text-white m-auto ml-0" title="Home" href="#">Help Center</a>
            </div>
            <div className="m-auto mr-4 hidden md:block">
                <button onClick={handleDarkToggle} className = "m-auto mr-4 align-middle">
                    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    <svg id="theme-toggle-light-icon" className="hidden w-5 h-5 fill-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </button>

                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900
                                                 focus:outline-none focus:ring-4 focus:ring-gray-300
                                                 font-medium rounded-lg text-sm px-5 py-2.5 border
                                                 border-white ">Submit a request</button>
                <button type="button" className="text-white bg-[#669BBC] hover:bg-blue-800
                                                 focus:ring-4 focus:ring-blue-300 font-medium
                                                 rounded-lg text-sm px-5 py-2.5 ml-2
                                                 focus:outline-none border border-[#669BBC]">Sign in</button>
            </div>
            <div className="m-auto mr-1 md:hidden">
                <button onClick={handleToggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center
                                                                                                              p-2 w-10 h-10 justify-center
                                                                                                              text-sm text-gray-500 rounded-lg
                                                                                                              bg-none md:hidden focus:outline-none
                                                                                                              focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
        </div>
        {visible && 
            <ul className="font-medium flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 mt-0 md:hidden">
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-[#669BBC]" aria-current="page">Submit a request</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-[#669BBC]">Sign in</a>
                </li>
            </ul>}</div>)

}