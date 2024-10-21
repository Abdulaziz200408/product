import React, { useState, useEffect } from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../Images/photo_2024-10-20_08-37-43 .jpg";
import "../App.css";

function Navbar() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  return (
    <div className="mt-4">
      <ul className="flex justify-between gap-5 items-center">
        <li style={{ width: "120px" }}>
          <img
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            src={logo}
            alt="logo"
            className="logo"
          />
        </li>
        <li>
          <div style={{ position: "relative", display: "inline-block" }}>
            <CiSearch
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "gray",
                fontSize: "20px",
              }}
            />
            <input
              placeholder="qidiruv..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "10px 10px 10px 30px",
                borderRadius: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "white",
                fontSize: "16px",
                width: "750px",
                height: "40px",
                cursor: "pointer",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                transition: "all 0.3s ease",
              }}
            />
          </div>
          {filteredProducts.length > 0 && (
            <div
              style={{
                width: "750px",
              }}
              className="absolute z-10 bg-white border border-gray-300 rounded-md mt-3 max-h-60 overflow-hidden"
            >
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/details/${product.id}`}>
                  <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-10 h-10 mr-2"
                    />
                    <span>{product.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>
        <div className="flex justify-between gap-6">
          <Link to="/favorites">
            <li className="crcle_menu">
              <CiHeart className="text-xl" />
            </li>
          </Link>
          <Link to="/cart">
            <li className="crcle_menu">
              <HiOutlineShoppingBag className="text-xl" />
            </li>
          </Link>
          <li className="crcle_menu_user">
            <CiUser className="text-xl" />
            Profil
          </li>
        </div>
      </ul>
      <div className="flex justify-between items-center gap-10 mt-10">
        <button className="About_button">Товары по акции</button>
        <button className="About_button_activ">Новинки</button>
        <button className="About_button">Поставщикам</button>
        <button className="About_button">Контакты</button>
        <button className="About_button">Возврат товара</button>
      </div>
    </div>
  );
}

export default Navbar;
