import React from "react";
import Logo from "./Logo";
import FotoUpload from "./FotoUpload";


export interface PaginaProps {
    children?: React.ReactNode;
    className?: string;
}

export default function NavBar(props: PaginaProps) {
    return (
        <div className="flex">
            <Logo />
            <FotoUpload/>
            <main className={ props.className }>{ props.children}</main>
        </div>
    )
}