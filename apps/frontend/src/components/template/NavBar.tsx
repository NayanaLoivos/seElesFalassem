import React from "react";
import Logo from "./Logo";
import FotoUpload from "./FotoUpload";


export interface PaginaProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="
        flex  py-10 min-h-screen
        bg-[url('/Backgroud.svg')] bg-cover
        "
        >
            <Logo />
            <FotoUpload/>
            <main className={ props.className }>{ props.children}</main>
        </div>
    )
}