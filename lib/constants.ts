// Company Information
export const COMPANY_INFO = {
  name: "Turing Software",
  tagline: "Nous concevons des produits web sur-mesure (SaaS, ERP, sites) adaptés à votre métier.",
  siret: "94405082200013",
  phone: "06 84 25 95 94",
  email: "contact@turing-software.com",
  address: {
    street: "60 rue francois Ier",
    postalCode: "75008",
    city: "Paris",
    country: "France"
  }
};

// Helper function to format address as a single line
export const formatAddress = (address: typeof COMPANY_INFO.address) => 
  `${address.street}, ${address.postalCode} ${address.city}, ${address.country}`;

// Navigation
export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];
