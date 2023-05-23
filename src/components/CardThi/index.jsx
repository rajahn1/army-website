import ThirdCardImage from '../../../public/third-card-image.jpg';
import Image from 'next/image';

export default function CardThird() {
    return(
        <div className="h-full w-1/3">
            <Image
            src={ThirdCardImage}
            alt="third-image"
            className='h-full opacity-75'
            />
        </div>
    )
}