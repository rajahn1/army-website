import Navbar from "../Navbar";
import './style.css';
export default function Header(){
    return(
        <header className=" shadow-md flex justify-between items-center h-24">
            <div className="flex items-center">
                <span className="title font-serif text-4xl ml-8 "> ARMY </span>
                <div className="flex flex-col text-sm border-l-2 border-white text-white">
                    <span className="ml-2"> EXÉRCITO</span>
                    <span className="ml-2"> ARTE</span>
                </div>
            </div>
            <Navbar/>
        </header>
    )
}