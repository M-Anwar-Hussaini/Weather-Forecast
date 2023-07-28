import { BsChevronLeft } from "react-icons/bs";
import { FaAngleLeft, FaMicrophone,FaGear } from "react-icons/fa6";

export default function MyNavbar() {
  return (
      <header>
        <nav className='d-flex align-items-center justify-content-between p-2 shadow'>
          <div>
            <FaAngleLeft fontSize='24px' cursor='pointer'/>
          </div>
          <div><h2>Afghanistan</h2></div>
          <div className="d-flex gap-4">
            <FaMicrophone fontSize='24px' cursor='pointer'/>
            <FaGear fontSize='24px' cursor='pointer'/>
          </div>
        </nav>
      </header>
  );
}
