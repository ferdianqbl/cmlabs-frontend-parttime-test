import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-400">
      <div className="container py-8">
        <div className="flex justify-center items-center gap-4">
          <p>🍕 Foodpedia {new Date().getFullYear()} 🍕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
