"use client";

import React from "react";
import Text from "@/components/Text";
import SearchForm from "@/components/forms/SearchForm";
import { useGlobalContext } from "@/context/globalContext";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const { dictionary } = useGlobalContext();
  const homepage = dictionary["homePage"];
  const translatedTitle = homepage.main.title.split("\n");
  const translatedSubtitle = homepage.main.subtitle.split("\n");
  const renderTranslatedTitle = () => (
    <>
      {translatedTitle.map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </>
  );
  const renderTranslatedSubtitle = () => (
    <>
      {translatedSubtitle.map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </>
  );

  return (
    <main>
      <div className="flex flex-col text-center items-center justify-center py-12 gap-2 min-h-44">
        <Text className="sm:leading-18" fontFamily="serif" variant="h2" size="jumbo">
          {renderTranslatedTitle()}
        </Text>
        {/* search section */}
        <section>
          <Text variant="h2" size="lg">
            {renderTranslatedSubtitle()}
          </Text>
          <SearchForm />
        </section>
        {/* grid items */}
        <MasonryGrid />
      </div>
    </main>
  );
}

export default Hero;

type Place = { id: number; image: string; title: string };

const MasonryGrid = () => {
  const items: Place[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Kitchen with Open Shelving",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1679466735992-0186056c06cd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cozy Living Room with Fireplace",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1616046386594-c152babc9e15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Minimalist Home Office Setup",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1676321046577-bb6a6d1a7c11?q=80&w=2153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rustic Dining Area with Wooden Table",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sleek Bathroom with Walk-in Shower",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sunny Breakfast Nook with Bay Window",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Industrial Loft Bedroom with Exposed Brick",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Scandinavian-inspired Nursery",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Luxury Walk-in Closet Organization",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Outdoor Patio with Cozy Seating",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1505433329165-09624aec350e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Home Library with Floor-to-Ceiling Bookshelves",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mediterranean-style Courtyard Garden",
    },
  ];

  const getColumns = (columnsCount: number) => {
    const columns = Array.from<number, Place[]>({ length: columnsCount }, () => []);

    items.forEach((item, index) => {
      columns[index % columnsCount].push(item);
    });

    return columns;
  };

  return (
    <div className="max-w-[1800px] mt-6 mx-auto px-4 py-8">
      <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {getColumns(4).map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-6">
            {column.map((item) => (
              <Link
                key={item.id}
                className="hover:shadow-lg duration-500 overflow-hidden  hover:scale-105 px-2 h-fit"
                href={`/homespace/${item.id}`}
              >
                <Image
                  height={100}
                  width={100}
                  className="w-full  h-auto object-cover  rounded-lg transition-transform duration-500 "
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <h2 className="text-gray-800 mt-2 mb-6  text-left text-lg font-medium">
                  {item.title}
                </h2>
              </Link>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};
