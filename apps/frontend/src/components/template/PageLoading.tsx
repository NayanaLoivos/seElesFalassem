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
                <div className= "flex items-center justify-center">
                    <Image className="h-screen"
                        src="/Tela-carregamento.svg" width={200} height={200} alt="logo"/>
                </div>
                <footer className="text-center "> A ferramenta de informações que você precisava para lembrar de tudo sobre seu Pet a qualquer hora!</footer>

            </main>


        </div>
    )
}