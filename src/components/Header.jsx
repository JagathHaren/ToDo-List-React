import { ScrollText } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full flex items-center">
      <ScrollText/>
      <h1 className="font-bold text-4xl tracking-wide p-2">To Do List</h1>
    </div>
  )
}

export default Header;
