import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Favorites from "./Components/Favorites";

function App() {
  const location = useLocation();

  const showNavbar = location.pathname !== "/favorites";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
