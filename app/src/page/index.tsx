import * as React from 'react';
import { categories, CategoriesKey } from '../data/categories';
import { schedule } from '../data/schedule';
import { products, ProductsKey } from "../data";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("" as CategoriesKey);
  const [selectedProductDetail, setSelectedProductDetail] = React.useState({
    name: "",
    schedule: schedule.four,
    amount: 0,
    categories: [] as string[],
  });

  const createCategoryProductsDOM = () => {
    if (!selectedCategory) {
      return <p>カテゴリが選択されていません</p>;
    }
    const category = categories[selectedCategory];
    const label = category.label;
    const product = products[selectedCategory];

    return (
      <>
        <p>選択中のカテゴリ：{label}</p>
        <ul>
          {Object.values(product).map((d, idx) => {
            return (
              <li key={d.name}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProductDetail(d);
                  }}
                >
                  {d.name}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const createRelationProductDOM = () => {
    if (!selectedProductDetail.name) {
      return <p>島産品が選択されていません</p>;;
    }
    const detail = selectedProductDetail;
    const relationCategories = detail.categories;
    const relationProducts = relationCategories.map(v => {
      return products[v as ProductsKey];
    });
    const relationProductsName = relationProducts.map(d => {
      return Object.values(d).map(v => v.name);
    }).flatMap(v => v).filter(v => v !== detail.name);

    return (
      <>
        <p>選択中の島産品：{detail.name}</p>
        <p>あわせて生産ボーナスの対象となる島産品：</p>
        <ul>
          {relationProductsName.map(d => {
            return (
              <li key={d}>{d}</li>
            );
          })}
        </ul>
      </>
    );
  };

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
                    onClick={() => { setSelectedCategory(d.key as CategoriesKey) }}
                  >
                    {d.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          {createCategoryProductsDOM()}
          {createRelationProductDOM()}
        </section>
      </main>
    </div>
  );
};

export default Page;
