

export default function Footer(){
    return(
        <div className = "w-full bg-[#003049] flex flex-col md:flex-row justify-start justify-items-start">
                <div class="w-full grid grid-cols-1 gap-8 md:grid-cols-4 pl-3 py-4 md:p-12 md:ml-32">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Abstract</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Start Trial</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline ">Blog</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline ">Help Centre</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline ">Release Notes</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline ">Status</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase text-white">Community</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Twitter</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">LinkedIn</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Dribbble</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Podcast</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase">Company</h2>
                        <ul class="text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">About Us</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Careers</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Legal</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="block mr-32 mb-8 mt-auto" id="copyright">
                    <svg class="abstract-logo-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
                        <g class="abstract-logo-mark-footer" fill="#fff">
                            <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                            <circle cx="21.24" cy="29.58" r="4.96"></circle>
                        </g>
                    </svg>
                    <p className = "text-gray-400">© Copyright 2023</p>
                    <p className = "text-gray-400">Abstract Studio Design, Inc.</p>
                    <p className = "text-gray-400">All rights reserved</p>
                </div>
            </div>
    )
}