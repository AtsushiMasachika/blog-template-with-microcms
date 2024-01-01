import { useState, useEffect } from 'react';

export const MobileHeader: React.FC  = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Add or remove the 'overflow-hidden' class on the body based on the menu state
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    // Cleanup the class when the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const coffee = () => {
    window.location.href = "https://www.buymeacoffee.com/LivingWithYourHelp";
  }

  return (
    <nav className="bg-dominant p-4 fixed w-full z-10 animate-slide-in">
        <div className="container mx-auto flex items-center justify-between">
            <a href="your-site-domain" className="text-white hover:text-accent font-bold text-xl">Your Site Name</a>
            <div className="md:hidden">
                <button className="text-white hover:text-accent" title="menu" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full z-10 h-screen bg-dominant hide-scrollbar ">
                    <button onClick={toggleMenu} title="close" className="flex justify-end text-white hover:text-accent py-2 absolute top-0 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    </button>
                    <div className="flex flex-col items-center justify-center h-full">
                        <a href="/" className="text-white hover:text-accent py-2 text-2xl">Home</a>
                        <a href="/blog/1" className="text-white hover:text-accent py-2 text-2xl">Blog</a>
                        <a href="/about" className="text-white hover:text-accent py-2 text-2xl">About</a>  

                        <div className="my-8 flex justify-center social-links">
                            <a href="your-account-link" target="_blank" className="text-white hover:text-accent mx-4" title="github">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                            <a href="your-account-link" rel="noopener" target="_blank" className="text-white hover:text-accent mx-4" title="X">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </nav>
  );
};
