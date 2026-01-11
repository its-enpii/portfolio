"use client";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/logo-text.svg"
            alt="enpii studio"
            className="h-10 w-auto brightness-0 invert opacity-80"
          />

          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">Enpii Studio</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
