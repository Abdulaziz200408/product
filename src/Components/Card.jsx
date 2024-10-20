import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import Brend from "../Components/brend";

function Card() {
  const [data, setData] = useState([]);
  const [brands, setBrands] = useState([]); // Brands uchun state qo'shdik

  useEffect(() => {
    // Mahsulotlarni olish
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });

    // Brands ma'lumotini olish (yoki boshqa API manzili)
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      const mockBrands = res.data.map((brand, index) => ({
        id: index,
        name: brand,
        logo: "https://via.placeholder.com/100", // Placeholder logo
      }));
      setBrands(mockBrands);
    });
  }, []);

  return (
    <>
      <div className="mini_card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {data.splice(0, 12).map((item) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-lg p-4 bg-white transition-transform duration-200 hover:scale-105"
            style={{ width: "280px", margin: "0 auto" }}
          >
            <img
              src={item.thumbnail} // Corrected to 'thumbnail'
              alt={item.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-md font-semibold mb-1">{item.title}</h2>
            <p className="text-lg font-bold mb-4">{item.price} сум</p>
            <div className="flex justify-between items-center space-x-2">
              <button
                style={{ background: "#FFB12A" }}
                className="flex-1 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13h10m-5 5a1 1 0 110 2 1 1 0 010-2z"
                  />
                </svg>
                В корзину
              </button>
              <button
                style={{ background: "#FFB12A", color: "white" }}
                className="border font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.28 0 4.26 1.68 4.5 4.09C12.74 4.68 14.72 3 17 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <Brend />
      <div className="container mx-auto p-6">
        {/* Популярные товары qismi */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Популярные товары</h2>
          <a href="#" className="text-blue-500 hover:underline">
            Смотреть все &gt;
          </a>
        </div>

        {/* populyarni tovar */}

        <div className="mini_card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl shadow-lg p-4 bg-white transition-transform duration-200 hover:scale-105"
              style={{ width: "280px", margin: "0 auto" }}
            >
              <img
                src={item.images}
                alt={item.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="text-md font-semibold mb-1">{item.title}</h2>
              <p className="text-lg font-bold mb-4">{item.price} сум</p>
              <div className="flex justify-between items-center space-x-2">
                <button
                  style={{ background: "#FFB12A" }}
                  className="flex-1 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13h10m-5 5a1 1 0 110 2 1 1 0 010-2z"
                    />
                  </svg>
                  В корзину
                </button>
                <button className="border border-yellow-400 text-yellow-500 font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.28 0 4.26 1.68 4.5 4.09C12.74 4.68 14.72 3 17 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
