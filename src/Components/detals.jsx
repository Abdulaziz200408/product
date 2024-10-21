import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaShoppingCart,
  FaHeart,
  FaExchangeAlt,
  FaBoxOpen,
} from "react-icons/fa"; // Iconlar uchun

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  if (!item) {
    return <div>Yuklanmoqda...</div>;
  }

  return (
    <div
      style={{
        marginTop: "110px",
      }}
      className="flex flex-col md:flex-row max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <img
        style={{
          maxHeight: "300px",
          objectFit: "contain", // Rasmni yaxshiroq joylashtirish uchun
        }}
        src={item.images[0]}
        alt={item.title}
        className="w-full h-64 md:h-auto md:w-1/2 rounded-lg"
      />
      <div className="md:w-1/2 md:pl-6 flex flex-col justify-between">
        <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-600 mb-4">
          Sintetik material, 1941 yilda AQShda ishlab chiqilgan.
        </p>
        <div className="text-gray-500 text-sm mb-2">
          <FaBoxOpen className="inline mr-1" /> (1.185 * 0.585) (20mm)
        </div>

        <div className="text-2xl font-semibold text-black mb-4">
          14 600 so'm
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={decrementCount}
            className="bg-gray-200 text-black px-3 py-1 rounded-md hover:bg-gray-300 transition duration-200"
          >
            -
          </button>
          <span className="text-lg font-semibold">{count}</span>
          <button
            onClick={incrementCount}
            className="bg-gray-200 text-black px-3 py-1 rounded-md hover:bg-gray-300 transition duration-200"
          >
            +
          </button>
        </div>

        <div className="flex space-x-4 items-center mb-4">
          <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-200">
            <FaShoppingCart className="inline mr-2" /> Savatga qo'shish
          </button>
          <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200">
            <FaExchangeAlt className="inline mr-2" /> Xarid qilish
          </button>
        </div>

        <div className="flex justify-between mt-4 space-x-4">
          <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer transition duration-200" />
          <FaExchangeAlt className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-200" />
          <FaBoxOpen className="text-gray-600 hover:text-green-500 cursor-pointer transition duration-200" />
        </div>
      </div>
    </div>
  );
}

export default Details;
