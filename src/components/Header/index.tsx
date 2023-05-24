import Navbar from "../Navbar";
import MandalaArmy from '../../../public/mandala-army2023.png';
import './style.css';
import Image from "next/image";
export default function Header(){
    return(
        <header className=" shadow-md flex justify-between items-center h-24 border-b-4 border-b-white">
            <div className="flex items-center">
                <span className="title text-4xl ml-8 "> ARMY </span>
                <div className="flex flex-col text-sm border-l-2 border-white text-white">
                    <span className="ml-2"> EXÉRCITO</span>
                    <span className="ml-2"> ARTE</span>
                   
                </div>
                    <Image
                    src={MandalaArmy}
                    width={100}
                    height={100}
                    alt="mandala-army"
                    />
            </div>
            <Navbar/>
        </header>
    )
}