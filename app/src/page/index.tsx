import * as React from "react";
import { useSetRecoilState } from "recoil"
import { selectedCategoryAtom } from "../state/atom";
import { categories, CategoriesKey } from '../data/categories';
import CategoryProducts from "./organisms/CategoryProducts";
import RelationProduct from './organisms/RelationProducts';
import Select from "../component/Select";

const Page = () => {
  const setSelectedCategory = useSetRecoilState(selectedCategoryAtom);
  const selectData = Object.values(categories).map(d => {
    return {
      value: d.key,
      label: d.label
    };
  });

  return (
    <div>
      <main>
        <section>
          <Select data={selectData} onClick={v => { setSelectedCategory(v as CategoriesKey); }} />
        </section>

        <section>
          <CategoryProducts />
          <RelationProduct />
        </section>
      </main>
    </div>
  );
};

export default Page;
