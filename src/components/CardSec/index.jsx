import './style.css';
import ArmyArt from '../../../public/arte-army-rotate.jpg';

export default function CardSecond() {
    const styling = {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.5)), url('${ArmyArt.src}')`,
    }
    return(
        <div className="w-1/3 h-full static bg-center bg-contain cursor-pointer hover:animate-pulse" style={styling}>
            <main className=' text-red-700 fle font-roboto-mono flex-col absolute font-extrabold bottom-5 max-w-full'>
                <h2 className='font-bold text-5xl mb-10 ml-8'>
                    QUEM
                     <br/>
                     SOMOS
                </h2>
                <ul className='flex gap-8 font-bold text-xl ml-8  list-disc'>
                    <li> ORIGEM </li>
                    <li> MISSÃO </li>
                    <li>ENERGIAS</li>
                </ul>
                </main>
        </div>
    )
}