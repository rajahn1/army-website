import "./style.css";
import Link from "next/link";

export default function Navbar() {
    return(
        <nav>
            <ul>
                <li> <Link href='/'> Home </Link> </li>
                <li><Link href='/courses'> Cursos </Link></li>
                <li><Link href='/about'> quem somos </Link></li>
                <li><Link href='/contact'> contato </Link></li>
            </ul>
        </nav>
    )
}