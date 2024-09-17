"use client";
import { useState } from "react";
import Button from "@/components/button";
import Image from "next/image";
import bgTeste from "./assets/teste.jpg";
import naturaLogo from "./assets/natura-logo.svg";
import percentSvg from "./assets/background.svg";

const ITEMS_PER_PAGE = 3;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      title: "Linhas de Perfume",
      description:
        "Lorem ipsum dolor sit amet, dot set inco, lorem ipsum dolor sit amet.",
      price: 150,
      image: bgTeste,
    },
    {
      title: "Linhas de Perfume",
      description:
        "Lorem ipsum dolor sit amet, dot set inco, lorem ipsum dolor sit amet.",
      price: 150,
      image: bgTeste,
    },
    {
      title: "Linhas de Perfume",
      description:
        "Lorem ipsum dolor sit amet, dot set inco, lorem ipsum dolor sit amet.",
      price: 150,
      image: bgTeste,
    },
    {
      title: "Linhas de Perfume",
      description:
        "Lorem ipsum dolor sit amet, dot set inco, lorem ipsum dolor sit amet.",
      price: 150,
      image: bgTeste,
    },
    {
      title: "Linhas de Perfume",
      description:
        "Lorem ipsum dolor sit amet, dot set inco, lorem ipsum dolor sit amet.",
      price: 150,
      image: bgTeste,
    },

    // Adicione mais itens aqui, se necessário
  ];

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <header className="flex justify-around py-8 items-center bg-[#FFF0E1]">
        <div className="w-[1440px] mx-auto flex justify-between">
          <div className="flex gap-12 items-center h-12">
            <Image
              src={naturaLogo}
              width={100}
              height={100}
              alt="natura logo"
            />
            <ul className="flex gap-6 items-center tracking-tighter font-semibold">
              <li>Catálogo</li>
              <li>Revendedoras</li>
              <li>Recomendações</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <Button className="bg-[#FFC000] text-white py-2 px-4 font-semibold rounded">
              Sou cliente
            </Button>
            <Button className="bg-transparent border border-[#FFC000] text-[#EB6619] py-2 px-4 rounded">
              Sou Revendedora
            </Button>
          </div>
        </div>
      </header>
      <div className="w-[1440px] mx-auto">
        <h2 className="text-2xl tracking-tighter font-semibold mt-12">
          Novidades Natura 2024
        </h2>
        <div className="flex">
          <div className="w-1/2 bg-[#FFEFE1] p-8 flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <div className="bg-[#EB6718] h-1 w-6 rounded-full tracking-tighter"></div>
              <span>Linhas de Perfume</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter">
              Perfumes
              <br /> Adamantium ProX
            </h1>
            <div>
              <span className="text-xl tracking-tighter">
                De R$ 250,00, por apenas
              </span>
              <h3 className="text-4xl font-bold tracking-tighter">R$ 150,00</h3>
            </div>
            <Button className="bg-[#FFC000] text-white py-4 w-1/3 text-3xl px-8 font-semibold rounded-full">
              Comprar
            </Button>
          </div>
          <div className="w-1/2 bg-gradient-to-tr from-[#EB6619] to-[#FFC000] "></div>
        </div>
      </div>
      <div className="relative my-16 h-32 flex justify-center items-center flex-col gap-2">
        <Image
          className="absolute  left-0"
          src={percentSvg}
          width={1920}
          height={400}
          alt="natura logo"
        />
        <h3 className="text-4xl font-semibold text-center tracking-tighter">
          Descontos Progressivos
        </h3>
        <p className="text-xl text-center tracking-tighter w-1/2 mx-auto">
          Compre mais e pague menos com os descontos progressivos dos produtos
          com selo e conheça o poder e a tecnologia Natura, que vai desde creme
          hidratante até o refil do shampoo Mamãe e Bebê.
        </p>
      </div>
      <div>
        <h1 className="text-6xl text-center tracking-tighter font-semibold my-6">
          Produtos em alta no momento
        </h1>
        <div className="flex flex-col gap-4 items-center px-8 w-[1440px] mx-auto">
          <div className="flex flex-row gap-8">
            {currentItems.map((item, index) => (
              <div>
                <div className="bg-gradient-to-tr h-[300px] flex items-center justify-center from-[#EB6619] to-[#FFC000] ">
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.image}
                      width={300}
                      height={300}
                      alt="item"
                    />
                  </div>
                </div>
                <div
                  key={index}
                  className="flex flex-col bg-[#FFEFE1] p-8 rounded mb-4"
                >
                  <div className="flex flex-col gap-2">
                    <h2 className="text-3xl mt-8 font-bold tracking-tighter">
                      {item.title}
                    </h2>
                    <p className="text-sm tracking-tighter">
                      {item.description}
                    </p>
                    <span className="text-4xl font-semibold tracking-tighter">
                      R$ {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-8 self-end">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600"
            >
              Anterior
            </button>
            <span className="flex items-center px-4 py-2 bg-gray-100 text-gray-600">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600"
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
