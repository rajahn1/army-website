import FirstCardImage from '../../../public/fisrt-card-image.jpg';
import Image from 'next/image';
export default function CardFirst() {
    return(
        <div className="w-1/3">
            <Image
            src={FirstCardImage}
            alt="first-image"
            className='h-full opacity-75'
            />
        </div>
    )
}