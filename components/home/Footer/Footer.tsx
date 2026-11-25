import { SITE } from "@/constant/constant";

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="bg-blue-900/20 py-8">
      <p className="px-4 text-center text-sm text-gray-400">
        &copy; {year} {SITE.name}. All rights reserved. &middot; {SITE.domain}
      </p>
    </footer>
  );
};

export default Footer;
