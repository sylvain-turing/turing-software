// Company Information
export const COMPANY_INFO = {
  name: "Turing Software",
  tagline: "Agence web spécialisée en création de sites internet, applications mobiles et sites e-commerce.",
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

// Navigation link types
export type NavLink = {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
};

// Navigation
export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/creation-site-web", label: "Création de site web" },
  { href: "/application-mobile", label: "Application mobile" },
  { href: "/site-e-commerce", label: "Site e-commerce" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
];
