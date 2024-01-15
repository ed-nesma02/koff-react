import { useDispatch, useSelector } from "react-redux";
import { Catalog } from "../../components/Catalog/Catalog";
import { Goods } from "../../components/Goods/Goods";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categoriesSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchCategories());
    }
  }, [dispatch, accessToken]);

  return (
    <main>
      <Catalog categories={categories} />
      <Goods />
    </main>
  );
};
