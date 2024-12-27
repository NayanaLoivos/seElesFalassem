import { Righteous } from "next/font/google";
import Link from 'next/link';

const font = Righteous({
    subsets: ["latin"],
    weight: "400",
    weight: "400",
});
export default function Logo() {
    return (
        <Link href="/" className={`${font.className}`}>
            <div className="flex
            flex-col
            items-center
            min-w-screen
            logo-texto"
            style={{ background: 'var(--light-green)'}}>se eles falassem</div>
        </Link>
    )
}