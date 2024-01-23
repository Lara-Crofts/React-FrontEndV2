// ProductList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ProductList.css';
import '../styles/PriceFilter.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filterOption, setFilterOption] = useState('all');
  const [materialFilter, setMaterialFilter] = useState('all');
  const materials = ['all', 'cotton', 'wool', 'cashmere'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // let endpoint = 'http://localhost:3001/products';
        let endpoint = 'https://backend-dlwo.onrender.com/products';


        // checking if both material and price filters are applied
        if (filterOption !== 'all' && materialFilter !== 'all') {
          endpoint = `https://backend-dlwo.onrender.com/products/material/${materialFilter}?price=${filterOption}`;
        } else if (filterOption !== 'all') {
          endpoint = `https://backend-dlwo.onrender.com/products?price=${filterOption}`;
        } else if (materialFilter !== 'all') {
          endpoint = `https://backend-dlwo.onrender.com/products/material/${materialFilter}`;
        }

        const response = await axios.get(endpoint);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [filterOption, materialFilter]);

  const getFilteredProducts = () => {
    let filteredProducts = products;

    switch (filterOption) {
      case 'lowToHigh':
        filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
        break;
      case 'highToLow':
        filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
        break;
      default:
        // No price filter
        break;
    }

    if (materialFilter !== 'all') {
      filteredProducts = filteredProducts.filter((product) => product.material === materialFilter);
    }

    return filteredProducts;
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleMaterialFilterChange = (event) => {
    setMaterialFilter(event.target.value);
  };

  return (
    <div className="product-list-container">
      <div className="filter-container">
        <label htmlFor="priceFilter">Filter by Price:</label>
        <select id="priceFilter" value={filterOption} onChange={handleFilterChange}>
          <option value="all">All Products</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>

        <label htmlFor="materialFilter">Filter by Material:</label>
        <select id="materialFilter" value={materialFilter} onChange={handleMaterialFilterChange}>
          {materials.map((material) => (
            <option key={material} value={material}>
              {material}
            </option>
          ))}
        </select>
      </div>

      <div className="grid product-list">
        {getFilteredProducts().map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} className="product-img" />
            <h6>{product.title}</h6>
            <p>{product.description}</p>
            <p className="product-material">Material: {product.material}</p>
            <p className="product-price">${product.price}</p>
            <button className="btn btn1">Add to Bag</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;



