//import logo from './logo.svg';
import "./App.css";
//import app from './Component/fireBase.init/fireBase.init';
import { Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import Blogs from "./Component/Blogs/Blogs";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import LogIn from "./Component/LogIn/LogIn";
import SignUp from "./Component/SignUp/SignUp";
import HeaderSection from "./Component/HeaderSection/HeaderSection";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import RequireAuth from "./RequireAuth/RequireAuth";
import AddCarProduct from "./Component/AddCarProduct/AddCarProduct";
import ManageCars from "./Component/ManageCars/ManageCars";
import FooterSection from './Component/FooterSection/FooterSection';
function App() {
  return (
    <div className="App">
      <HeaderSection></HeaderSection>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="blogs"
          element={
            <RequireAuth>
              <Blogs />
            </RequireAuth>
          }
        />
        <Route path="login" element={<LogIn />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="signup" element={<SignUp />} />{" "}
        <Route
          path="/carService/:carServiceId"
          element={
            <RequireAuth>
              <ProductDetail />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="manageItem"
          element={
            <RequireAuth>
              <ManageCars />
            </RequireAuth>
          }
        />
        <Route
          path="addItem"
          element={
            <RequireAuth>
              <AddCarProduct />
            </RequireAuth>
          }
        />
        <Route path="manageCars" element={<ManageCars />}></Route>
      </Routes>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
