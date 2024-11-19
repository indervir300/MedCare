import Link from "next/link";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaAnchor, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/treatments", label: "Treatments" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" }
  ];

  const services = [
    "Primary Care",
    "Specialist Consultations",
    "Diagnostic Services",
    "Preventive Care",
    "Emergency Services"
  ];

  return (
    <footer className="bg-blue-50 text-gray-800 pt-12 pb-6 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <FaAnchor className="text-blue-600 text-3xl" />
              <span className="text-2xl font-semibold text-gray-800 dark:text-gray-400">MedCare</span>
            </div>
            <p className="text-sm text-gray-700 mb-4 dark:text-gray-400">
              Providing compassionate and comprehensive healthcare services 
              to support your wellness journey with advanced medical solutions.
            </p>
            <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors duration-300 
                hover:scale-110 transform"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors duration-300 
                hover:scale-110 transform"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors duration-300 
                hover:scale-110 transform"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors duration-300 
                hover:scale-110 transform"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-800">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-700 dark:text-gray-400 hover:text-blue-600 
                    transition-colors duration-300 inline-block dark:hover:text-blue-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-800">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-700 flex items-center dark:text-gray-400">
                    <span className="mr-2 text-blue-500">•</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-800">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-600" />
                <span className="text-sm text-gray-700 dark:text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600" />
                <span className="text-sm text-gray-700 dark:text-gray-400">info@medcare.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <span className="text-sm text-gray-700 dark:text-gray-400">
                  123 Healthcare Street, Wellness City
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} MedCare Health Solutions. All Rights Reserved.
            <span className="block mt-2 text-xs text-gray-500 dark:text-gray-400">
              Designed with care for your health and wellness
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}