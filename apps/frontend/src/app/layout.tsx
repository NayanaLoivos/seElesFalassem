import type { Metadata } from "next";
import "./globals.css";
import {  Lato, Poppins } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300']
});

const poppins = Poppins( {
  subsets:['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Cuidado com seu pet",
  description: "Aplicação fullstack de organização de informações do pet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={ lato.className }>
        <div className={ poppins.className }>{children}</div>
      </body>
    </html>
  );
}

