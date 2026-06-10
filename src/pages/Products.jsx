/* 260606 front프로젝트 시작 */

/* 1단계 관리자 레이아웃 + 라우터 생성 */
/* 12단계 Products 페이지 */
/*  */
/*  */

import { useState } from "react";
import { products } from "../constants/products";

function Products() {
  
  const [searchKeyword, setSearchKeyword] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });


  return (
    <section>
      <div className="page-header">
        <div>
          <p className="page-label">Product Management</p>
          <h2>Products</h2>
        </div>

        <div className="page-controls">
          <input
            type="text"
            placeholder="Search products"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="6" className="empty-table">
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>#{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>${product.price.toLocaleString()}</td>
                  <td>{product.stock}</td>
                  <td>
                    <span
                      className={`status-badge ${product.status
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Products;