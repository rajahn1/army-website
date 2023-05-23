import SecondCardImage from '../../../public/second-card-image.jpg';
import './style.css';

export default function CardSecond() {
    const styling = {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.5)), url('${SecondCardImage.src}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%'
    }
    return(
        <div className="w-1/3 second-card hover:animate-pulse" style={styling}>
            hello world
        </div>
    )
}