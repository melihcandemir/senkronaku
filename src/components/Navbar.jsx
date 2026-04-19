import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    {
      name: 'Ürünlerimiz',
      isDropdown: true,
      key: 'products',
      items: [
        'Akü Kapağı', 'Akü Kazanı', 'Akü Soketleri', 'Akü Kabloları', 'Kutu', 'Starter Akü', 'Civata', 'Saf Su'
      ]
    },
    {
      name: 'Hizmetlerimiz',
      isDropdown: true,
      key: 'services',
      items: [
        'Akü Bakım Servisi', 'Akü Yenileme', 'Akü Bakım Talimatı', 'Traksiyoner Akü', 'Ölçü Listesi'
      ]
    },
    { name: 'İletişim', href: '#' },
  ];

  return (
    <nav className="bg-secondary text-tertiary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img className="h-14 w-auto object-contain" src={logo} alt="Senkron Akü Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
                    className="flex items-center hover:text-primary transition-colors duration-200 font-medium py-6"
                  >
                    {link.name}
                    <svg className="ml-1 h-4 w-4 fill-current transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                ) : (
                  <Link to={link.href} className="hover:text-primary transition-colors duration-200 font-medium py-6 block">
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.isDropdown && (
                  <div
                    className={`absolute left-0 top-full mt-0 w-56 rounded-b-md shadow-xl bg-tertiary text-secondary transition-all duration-200 ease-in-out origin-top border-t-2 border-primary ${openDropdown === link.key ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                  >
                    <div className="py-2">
                      {link.items.map((item, idx) => (
                        <a key={idx} href="#" className="block px-4 py-2.5 text-sm hover:bg-primary hover:text-secondary transition-colors duration-200 font-medium border-b border-gray-100 last:border-0">
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-tertiary hover:text-primary focus:outline-none p-2">
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
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 block' : 'max-h-0 opacity-0 hidden'} bg-[#00001f] border-t border-gray-800`}>
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link, index) => (
            <div key={index} className="border-b border-gray-800 last:border-0 pb-2">
              {link.isDropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.key)}
                    className="w-full flex justify-between items-center py-3 text-base font-semibold text-tertiary hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                    <svg className={`h-5 w-5 transform transition-transform duration-200 ${openDropdown === link.key ? 'rotate-180 text-primary' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openDropdown === link.key && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-[#000015] rounded-lg mt-1 mb-2">
                      {link.items.map((item, idx) => (
                        <a key={idx} href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-primary hover:bg-[#000029] rounded-md transition-colors duration-200">
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-semibold text-tertiary hover:text-primary transition-colors duration-200">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
