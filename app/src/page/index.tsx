import * as React from 'react';
import { useSetRecoilState } from "recoil"
import { selectedCategoryAtom } from "../state/atom";
import { categories, CategoriesKey } from '../data/categories';
import CategoryProducts from "./organisms/CategoryProducts";
import RelationProduct from './organisms/RelationProducts';

const Page = () => {
  const setSelectedCategory = useSetRecoilState(selectedCategoryAtom);

  return (
    <div>
      <main>
        <section>
          <ul>
            {Object.values(categories).map(d => {
              return (
                <li key={d.key}>
                  <button
                    type="button"
                    onClick={() => { setSelectedCategory(d.key as CategoriesKey); }}
                  >
                    {d.label}
                  </button>
                </li>
              );
            })}
          </ul>
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
