import { Righteous } from "next/font/google";
import Link from 'next/link'

const fonte = Righteous({
    subsets: ["latin"],
    weight: "400",
});
export default function Logo() {
    return (
        <Link href="/" className={`${fonte.className}`}>
            <span className="logo-texto">se eles falassem</span>
        </Link>
    )
}