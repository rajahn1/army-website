import FirstCardImage from '../../../public/first-card-image.jpg';
import './styles.css';

export default function CardFirst() {
    const styling = {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.5)), url('${FirstCardImage.src}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        backgroundPosition: 'center',
    }
    return(
        <div className="w-1/3 static first-card hover:animate-pulse" style={styling}>
            <main className='text-pink-800 absolute bottom-5'>
                <h2 className='font-bold text-5xl font-serif mb-10 ml-8'>
                ARTE DO<br/>
                SOM
                </h2>
                <ul className='font-serif flex gap-8 list-disc ml-8 uppercase text-l font-medium'>
                    <li>discotecagem</li>
                    <li>pesquisa</li>
                    <li>network</li>
                </ul>
            </main>
        </div>
    )
}