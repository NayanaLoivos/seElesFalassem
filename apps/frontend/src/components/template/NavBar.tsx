import React from "react";
import Logo from "./Logo";

export interface PaginaProps {
    children?: React.ReactNode;
    className?: string;
}

export default function NavBar(props: PaginaProps) {
    return (
        <div className="">
            <Logo />
            <main className={ props.className }>{ props.children }</main>
        </div>
    )
}