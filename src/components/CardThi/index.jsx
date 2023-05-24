import ThirdCardImage from '../../../public/third-card-image.jpg';
import './styles.css';
export default function CardThird() {
    const styling = {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.5)), url('${ThirdCardImage.src}')`,
    }
    return(
        <div className="h-full w-1/3 bg-cover bg-center bg-no-repeat third-card hover:animate-pulse" style={styling}>
        </div>
    )
}