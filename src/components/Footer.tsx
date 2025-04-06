import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import logo from '../assets/logo_trans.png';

const navigation = {
  main: [
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FiFacebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FiTwitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FiLinkedin,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FiInstagram,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-7 w-7" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Main Navigation - Horizontal Centered */}
        <nav className="flex justify-center gap-x-8 mb-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Legal Links - Left Aligned Horizontal */}
        <nav className="flex justify-start gap-x-8 mb-8" aria-label="Legal">
          {navigation.legal.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-gray-500 hover:text-gray-700"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="relative">
          {/* Copyright Text - Centered */}
          <p className="text-center text-base leading-5 text-gray-500 mb-8">
            &copy; {new Date().getFullYear()} Trade Council. All rights reserved.
          </p>

          {/* Logo - Bottom Right */}
          <div className="absolute bottom-0 right-0">
            <img 
              src={logo} 
              alt="Trade Council Logo" 
              className="h-24 w-auto object-contain hover:opacity-90 transition-opacity"
              style={{ minWidth: '180px', maxWidth: '220px' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
} 