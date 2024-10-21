import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Brend from "../Components/brend";
import { CiHeart } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ addToFavorites, addToShop }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Xato: ", error);
        setIsLoading(false);
      });
  }, []);
  const handleAddToFavorites = (product) => {
    addToFavorites(product);
    toast.success("Mahsulot sevimlilarga qo'shildi!");
  };

  const handAddShop = (item) => {
    addToShop(item);
    toast.success("Mahsulot savatga qo'shildi!");
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <p>Yuklanmoqda...</p>
      ) : (
        <div>
          <div className="mini_card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {data.slice(0, 12).map((item) => (
              <div
                key={item.id}
                className="border rounded-xl shadow-lg p-4 bg-white transition-transform duration-200 hover:scale-105"
                style={{ width: "280px", margin: "0 auto" }}
              >
                <Link to={`/details/${item.id}`}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-40 object-contain mb-4"
                  />
                </Link>
                <h2 className="text-md font-semibold mb-1">{item.title}</h2>
                <p className="text-lg font-bold mb-4">{item.price} сум</p>
                <div className="flex justify-between items-center space-x-2">
                  <button
                    onClick={() => handAddShop(item)}
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
                    onClick={() => handleAddToFavorites(item)}
                    className="border  border-yellow-400 text-yellow-500 font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <CiHeart />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Brend />
          <div className="container mx-auto p-6">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Популярные товары</h2>
              <a href="#" className="text-blue-500 hover:underline">
                Смотреть все &gt;
              </a>
            </div>

            <div className="mini_card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl shadow-lg p-4 bg-white transition-transform duration-200 hover:scale-105"
                  style={{ width: "280px", margin: "0 auto" }}
                >
                  <Link to={`/details/${item.id}`}>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-40 object-contain mb-4"
                    />
                  </Link>
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
                      onClick={() => handleAddToFavorites(item)}
                      className="border border-yellow-400 text-yellow-500 font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                    >
                      <CiHeart />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
