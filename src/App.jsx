import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./views/Footer/Footer";
import { Header } from "./views/Header/Header";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/authSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalog } from "./views/Catalog/Catalog";
import { Goods } from "./views/Goods/Goods";
import { Cart } from "./views/Cart/Cart";
import { Card } from "./views/Card/Card";
import { PageNotFound } from "./components/pageNotFound/pageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/favorite",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Card />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/*",
    element: (
      <>
        <Header />
        <main>
          <PageNotFound />
        </main>
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  return <RouterProvider router={router} />;
};

export default App;
