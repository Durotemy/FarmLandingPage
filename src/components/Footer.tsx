const Footer = () => {
  return (
    <footer className="w-full bg-[#2F2E2E] text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between fixed bottom-0 left-0 z-50 shadow-lg">
      <div className="text-center md:text-left w-full md:w-auto">
        <span className="font-bold text-lg">SolaFarms</span> &copy;{" "}
        {new Date().getFullYear()} &mdash; All rights reserved.
      </div>
      <div className="mt-2 md:mt-0 text-sm text-green-100">
        Our Commitment: Sustainable Agriculture &bull; Eco-Friendly Innovation
      </div>
    </footer>
  );
};

export default Footer;
