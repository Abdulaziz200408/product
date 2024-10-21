import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Favorites from "./Components/Favorites";
import Details from "./Components/detals";
import Cart from "./Components/Cart";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const addToShop = (item) => {
    if (!cart.some((shop) => shop.id === item.id)) {
      setCart([...cart, item]);
    } else {
      console.log("Mahsulot sotilganda allaqachon qo'shilgan.");
    }
  };

  const addToFavorites = (product) => {
    if (!favorites.some((fav) => fav.id === product.id)) {
      setFavorites([...favorites, product]);
    } else {
      console.log("Mahsulot sevimlilarga allaqachon qo'shilgan.");
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavourites) =>
      prevFavourites.filter((item) => item.id !== id)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevcart) => prevcart.filter((item) => item.id !== id));
  };

  return (
    <div className="container_product">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Card addToFavorites={addToFavorites} addToShop={addToShop} />
                </>
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favourites={favorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} />}
            />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
