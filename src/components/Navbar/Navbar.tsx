
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import CartCountBadge from "../CartCountBadge"

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">Logo</h1>
        <div className="relative w-full max-w-[500px]">
            <input className="bg-[#d8dade] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="search product" 
            />
            <IoIosSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-900 cursor-pointer" size={20}
            />
    
        </div>
        <div className="flex space-x-3 ">
            <div className="icon__wrapper cursor-pointer ">
              <FaRegUser/> 
            </div>
            <div className="icon__wrapper relative cursor-pointer">
              <RiShoppingCartLine />
              <CartCountBadge  size="w-[25px] h-[25px]"/> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
