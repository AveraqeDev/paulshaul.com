const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="flex items-center">
            © {new Date().getFullYear()} Paul Parrish
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
