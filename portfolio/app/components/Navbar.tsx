    "use client";

    import { useState, useEffect } from "react";
    import Link from "next/link";
    import { usePathname } from "next/navigation";
    import { motion } from "framer-motion";

    const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check if the user is on a Blog Page
    const isBlogPage = pathname?.startsWith("/blog");

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setIsMenuOpen(false);
    };

    // Smooth scroll handler for same-page navigation
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        }
    };

    return (
        <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
            <h1 className="text-2xl font-bold text-primary-600">Portfolio</h1>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
            {/* Always Show Home */}
            {isBlogPage ? (
                <Link
                href="/"
                className={`nav-link ${
                    activeLink === "home" ? "text-primary-600" : "text-gray-600"
                }`}
                onClick={() => handleLinkClick("home")}
                >
                Home
                </Link>
            ) : (
                <button
                onClick={() => handleScroll("home")}
                className={`nav-link ${
                    activeLink === "home" ? "text-primary-600" : "text-gray-600"
                }`}
                >
                Home
                </button>
            )}

            {/* Show Other Links Only on Home Page */}
            {!isBlogPage && (
                <>
                <button
                    onClick={() => handleScroll("about")}
                    className={`nav-link ${
                    activeLink === "about" ? "text-primary-600" : "text-gray-600"
                    }`}
                >
                    About
                </button>
                <button
                    onClick={() => handleScroll("projects")}
                    className={`nav-link ${
                    activeLink === "projects"
                        ? "text-primary-600"
                        : "text-gray-600"
                    }`}
                >
                    Projects
                </button>
                </>
            )}

            {/* Always Show Blog Link */}
            <Link
                href="/blog"
                className={`nav-link ${
                activeLink === "blog" ? "text-primary-600" : "text-gray-600"
                }`}
                onClick={() => handleLinkClick("blog")}
            >
                Blog
            </Link>

            {/* Show Contact Only on Home Page */}
            {!isBlogPage && (
                <button
                onClick={() => handleScroll("contact")}
                className={`nav-link ${
                    activeLink === "contact" ? "text-primary-600" : "text-gray-600"
                }`}
                >
                Contact
                </button>
            )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-secondary-800 focus:outline-none"
            >
                {isMenuOpen ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                )}
            </button>
            </div>
        </div>

        {/* Mobile Menu Items */}
        <motion.div
            className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white py-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Mobile menu content similar to desktop links */}
            {isBlogPage ? (
            <Link
                href="/"
                className={`block px-4 py-2 ${
                activeLink === "home" ? "text-primary-600" : "text-gray-600"
                }`}
                onClick={() => handleLinkClick("home")}
            >
                Home
            </Link>
            ) : (
            <button
                onClick={() => handleScroll("home")}
                className={`block px-4 py-2 w-full text-left ${
                activeLink === "home" ? "text-primary-600" : "text-gray-600"
                }`}
            >
                Home
            </button>
            )}

            {!isBlogPage && (
            <>
                <button
                onClick={() => handleScroll("about")}
                className={`block px-4 py-2 w-full text-left ${
                    activeLink === "about" ? "text-primary-600" : "text-gray-600"
                }`}
                >
                About
                </button>
                <button
                onClick={() => handleScroll("projects")}
                className={`block px-4 py-2 w-full text-left ${
                    activeLink === "projects" ? "text-primary-600" : "text-gray-600"
                }`}
                >
                Projects
                </button>
            </>
            )}

            <Link
            href="/blog"
            className={`block px-4 py-2 ${
                activeLink === "blog" ? "text-primary-600" : "text-gray-600"
            }`}
            onClick={() => handleLinkClick("blog")}
            >
            Blog
            </Link>

            {!isBlogPage && (
            <button
                onClick={() => handleScroll("contact")}
                className={`block px-4 py-2 w-full text-left ${
                activeLink === "contact" ? "text-primary-600" : "text-gray-600"
                }`}
            >
                Contact
            </button>
            )}
        </motion.div>
        </motion.nav>
    );
    };

    export default Navbar;
