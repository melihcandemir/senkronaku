import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ürünlerimiz", href: "/urunlerimiz" },
    {
      name: "Hizmetlerimiz",
      isDropdown: true,
      key: "services",
      items: [
        { name: "Akü Bakım Servisi", href: "/hizmetlerimiz/aku-bakim-servisi" },
        { name: "Akü Yenileme", href: "/hizmetlerimiz/aku-yenileme" },
        { name: "Akü Bakım Talimatı", href: "/hizmetlerimiz/aku-bakim-talimati" },
        { name: "Traksiyoner Akü", href: "/hizmetlerimiz/traksiyoner-aku" },
        { name: "Ölçü Listesi", href: "/hizmetlerimiz/olcu-listesi" },
      ],
    },
    { name: "İletişim", href: "/iletisim" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-secondary/98 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-secondary"}`}>
      {/* Top accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src={logo}
              alt="Senkron Akü Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => link.isDropdown && setOpenDropdown(link.key)}
                onMouseLeave={() => link.isDropdown && setOpenDropdown(null)}
              >
                {link.isDropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.key)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${openDropdown === link.key ? "text-primary bg-white/5" : "text-tertiary hover:text-primary hover:bg-white/5"}`}
                  >
                    {link.name}
                    <svg
                      className={`h-4 w-4 fill-current transition-transform duration-200 ${openDropdown === link.key ? "rotate-180 text-primary" : ""}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-lg font-medium text-sm block transition-all duration-200 ${isActive(link.href) ? "text-primary bg-white/5" : "text-tertiary hover:text-primary hover:bg-white/5"}`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"></div>
                    )}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.isDropdown && (
                  <div
                    className={`absolute left-0 top-full pt-2 w-60 transition-all duration-200 ease-out origin-top ${openDropdown === link.key ? "opacity-100 scale-100 visible translate-y-0" : "opacity-0 scale-95 invisible -translate-y-2"}`}
                  >
                    <div className="bg-tertiary rounded-2xl shadow-2xl shadow-black/20 border border-gray-100 overflow-hidden">
                      <div className="h-0.5 bg-primary"></div>
                      <div className="py-2">
                        {link.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.href}
                            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 hover:bg-primary hover:text-secondary group/item ${isActive(item.href) ? "text-primary bg-primary/10" : "text-secondary"}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-secondary transition-colors duration-200"></span>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href="tel:+905333233210"
              className="ml-4 inline-flex items-center gap-2 bg-primary hover:bg-yellow-500 text-secondary font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-md shadow-primary/20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Ara
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-tertiary hover:text-primary focus:outline-none p-2 rounded-xl hover:bg-white/5 transition-all duration-200"
              aria-label="Menüyü aç/kapat"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} bg-[#00001a] border-t border-white/10`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.isDropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.key)}
                    className="w-full flex justify-between items-center px-4 py-3 text-base font-semibold text-tertiary hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-200"
                  >
                    {link.name}
                    <svg
                      className={`h-5 w-5 transform transition-transform duration-200 ${openDropdown === link.key ? "rotate-180 text-primary" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openDropdown === link.key && (
                    <div className="ml-4 mt-1 space-y-1 pb-2">
                      {link.items.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-200 ${isActive(link.href) ? "text-primary bg-white/5" : "text-tertiary hover:text-primary hover:bg-white/5"}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <a
            href="tel:+905333233210"
            className="flex items-center justify-center gap-2 mt-4 bg-primary hover:bg-yellow-500 text-secondary font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-primary/20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +90 533 323 32 10
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
