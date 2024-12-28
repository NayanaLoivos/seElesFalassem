import React from "react";
import Logo from "./Logo";
import Image from "next/image";

export interface PaginaProps {
    children?: React.ReactNode;
    className?: string;
}

export default function PageLoading(props: PaginaProps) {
    return (
        <div className="">
            <Logo />
            <main className={ props.className }>{ props.children }
                <div className= "flex flex-col items-center justify-center">
                    <Image className=""
                        src="/Tela-carregamento.svg" width={400} height={400} alt="logo"/>
                    <Image className="py-5"
                           src="/icones/loader.svg" width={40} height={40} alt="logo"/>
                </div>
                <div>
                    <footer className="text-center"> A ferramenta que coloca as informações do seu pet na palma da sua mão!
                    </footer>
                </div>
            </main>


        </div>
    )
}