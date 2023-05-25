import FirstCardImage from '../../../public/first-card-image.jpg';
import './styles.css';

export default function CardFirst() {
    const styling = {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.1)), url('${FirstCardImage.src}')`,
    }
    return(
        <div className="w-1/3   text-pink-700 hover:animate-pulse hover:text-sky-800 hover:scale-90 cursor-pointer bg-cover bg-no-repeat bg-center hfull" style={styling}>
            <main className= 'flex flex-col justify-center items-center h-full bottom-5 '>
                <h2 className=' text-center first-title  font-semibold text-6xl mb-10 ml-8'>
                SEJA <br/>
                UM DJ
                </h2>
                <ul className='flex gap-8 ml-8 uppercase font-medium text-white'>
                    <li className='bg-fuchsia-600 rounded-xl p-3 text-l'>MIXAGEM</li>
                    <li className=' bg-fuchsia-600 rounded-xl p-3 text-l'>PRÁTICA</li>
                    <li className='bg-fuchsia-600 rounded-xl p-3 text-l'>network</li>
                </ul>
                {/* <button className='bg-emerald-500 text-xl font-bold text-white w-48 h-12 mt-6 rounded-xl'> SAIBA MAIS!</button> */}
            </main>
        </div>
    )
}