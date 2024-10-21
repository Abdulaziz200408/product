import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";

function Favorites({ cart, removeFromCart }) {
  return (
    <div>
      {cart?.length === 0 ? (
        <p>Sevimli mahsulotlar yo'q.</p>
      ) : (
        <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {cart.map((item) => (
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
                  style={{ background: "#FFB12A" }}
                  className="flex-1 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <GrDocumentText />
                  Оформить
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ color: "#FFB12A" }}
                  className="border font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;