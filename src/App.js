import { Routes, Route, Navigate } from "react-router-dom";
import {
  Login,
  Shop,
  ShopDetail,
  Cart,
  About,
  Contact,
  Myorders,
  Home,
} from "./pages";
import { ProtectedRoutes, Loading, CustomRouter } from "./components";
import { history } from "./utils";
import { useSelector } from "react-redux";
import "./styles.css";

function App() {
  const isLoading = useSelector((state) => state.app.isLoading);

  return (
    <div>
      <CustomRouter history={history}>
        {isLoading && <Loading />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ShopDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myorders" element={<Myorders />} />
          </Route>
        </Routes>
      </CustomRouter>
    </div>
  );
}

export default App;
