import * as React from 'react';
import { category } from '../data/category';
import { products } from "../data";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const createCategoryProductsDOM = () => {
    if (!selectedCategory) {
      return <p>カテゴリが選択されていません</p>
    }

    const categoryKey = Object.keys(category).map(v => {
      if (category[v] === selectedCategory) {
        return v;
      }
      return null;
    }).filter(v => v)[0];
    console.log(categoryKey);

    return <p>{selectedCategory}</p>
  };

  return (
    <div>
      <main>
        <section>
          <ul>
            {Object.values(category).map(v => {
              return (
                <li key={v}>
                  <button
                    type="button"
                    onClick={() => {setSelectedCategory(v)}}
                  >
                    {v}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          {createCategoryProductsDOM()}
        </section>
      </main>
    </div>
  );
};

export default Page;
