const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-white p-4 text-center font-semibold text-neutral-600">
      <p>
        Copyright &copy; {date.getFullYear()} -
        <a href="github.com/SM8UTI" target="_blank" className="ml-1">
          SM8UTI
        </a>
      </p>
    </footer>
  );
};

export default Footer;
