import * as React from "react";
import { useRecoilState } from "recoil"
import { selectedCategoryAtom } from "../state/atom";
import { categories, CategoriesKey } from '../data/categories';
import CategoryProducts from "./organisms/CategoryProducts";
import RelationProduct from './organisms/RelationProducts';
import ProductSearch from "./organisms/ProductSearch";
import Schedule from "./organisms/Schedule";
import Select from "../component/Select";
import style from "./style.module.scss";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryAtom);
  const selectData = Object.values(categories).map(d => {
    return {
      value: d.key,
      label: d.label
    };
  });

  return (
    <main className={style.main}>
      <section>
        <ProductSearch />
      </section>

      <section className={style.section}>
        <div className={style.select}>
          <p>選択中のカテゴリ：</p>
          <Select
            data={selectData}
            onClick={v => { setSelectedCategory(v as CategoriesKey); }}
            selectedValue={selectedCategory}
          />
        </div>
      </section>

      <section className={style.section}>
        <CategoryProducts />
      </section>

      <section className={style.section}>
        <RelationProduct />
      </section>

      <section className={style.section}>
        <Schedule />
      </section>
    </main>
  );
};

export default Page;
