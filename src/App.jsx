import { Route, Routes } from "react-router-dom";
import Layout from "./components/authComponents/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/adminView/AdminLayout";
import AdminDashboard from "./pages/admin-view/Dashboard";
import AdminProducts from "./pages/admin-view/Products";
import AdminOrders from "./pages/admin-view/Orders";
import AdminFeatures from "./pages/admin-view/Features";
import ShoppingLayout from "./components/shoppingView/Layout";
import NotFound from "./pages/NotFound/Index";
import Home from "./pages/shopping-view/Home";
import ProductListing from "./pages/shopping-view/Listing";
import Checkout from "./pages/shopping-view/Checkout";
import Account from "./pages/shopping-view/Account";
import CheckAuth from "./components/common/CheckAuth";
import UnAuthPage from "./pages/UnAuthPage/UnAuthPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/authslice";

function App() {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth()).then((data) => {
      console.log(data);
    });
  }, [dispatch]);

  if (isLoading)
    return (
      <div className="min-h-screen h-full flex justify-center items-center">
        Loading.....
      </div>
    );

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Layout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>

          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<Home />} />
            <Route path="listing" element={<ProductListing />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/unauth-page" element={<UnAuthPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
