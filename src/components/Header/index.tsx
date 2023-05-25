import Navbar from "../Navbar";
import MandalaArmy from '../../../public/mandala-army2023.png';
import './style.css';
import Image from "next/image";
import IconNav from '../../../public/icons8-menu-64.png';
export default function Header(){
    return(
        <header className="drop-shadow-lg flex justify-center items-center h-20 border-b-violet-300 border-b-2">
            <div className="flex items-center">
                <span className="title ml-8"> ARMY </span>
                {/* <div className="flex flex-col text-sm border-l-2 border-white text-white"> */}
                    {/* <span className="ml-2"> EXÉRCITO</span> */}
                    {/* <span className="ml-2"> ARTE</span> */}
                   
                {/* </div> */}
                    <Image
                    src={MandalaArmy}
                    width={70}
                    alt="mandala-army"
                    />
            </div>
            {/* <Navbar/> */}
            <div className="absolute right-5">
            <Image className="cursor-pointer hover:scale-110"
            src={IconNav}
            alt='icon nav'
            width={45}
            />
            </div>
        </header>
    )
}