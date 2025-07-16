import logo from "../../public/logo.svg"

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide"><img src={logo} alt="" width={40} height={40} />Doozie</h1>
      <span className="text-sm text-gray-400">Stay organized</span>
    </div>
  );
};

export default Header;
