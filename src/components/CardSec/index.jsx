import SecondCardImage from '../../../public/second-card-image.jpg';
import Image from 'next/image';

export default function CardSecond() {
    return(
        <div className="w-1/3">
            <Image
            src={SecondCardImage}
            alt="second-image"
            className='h-full opacity-75'
            />
        </div>
    )
}