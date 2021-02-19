import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import ProductService from "./ProductService";
import "./CarouselDemo.css";

const CarouselDemo = () => {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productService = new ProductService();

  useEffect(() => {
    productService
      .getProductsSmall()
      .then((data) => setProducts(data.slice(0, 9)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const productTemplate = (product) => {
    return (
      <div className="product-item">
        <img
          src={`https://via.placeholder.com/350x150`}
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/350x150")
          }
          alt="product.name"
          className="product-image"
        />
        <div className="product-item-content">
          <div className="p-mb-3">
            <img
              src={`https://via.placeholder.com/350x150`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt="product.name"
              className="product-image"
            />
          </div>
          <div>
            <h4 className="p-mb-1">product.name</h4>
            <h6 className="p-mt-0 p-mb-3">$product.price</h6>
            product.inventoryStatus
            <div className="car-buttons p-mt-5">
              <Button
                icon="pi pi-search"
                className="p-button p-button-rounded p-mr-2"
              />
              <Button
                icon="pi pi-star"
                className="p-button-success p-button-rounded p-mr-2"
              />
              <Button
                icon="pi pi-cog"
                className="p-button-help p-button-rounded"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    // <div className="carousel-demo">
    //   <div className="card">
    //     <Carousel
    //       value={products}
    //       numVisible={3}
    //       numScroll={3}
    //       responsiveOptions={responsiveOptions}
    //       itemTemplate={productTemplate}
    //       header={<h5>Basic</h5>}
    //     />
    //   </div>

    <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
        header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>}
      />
    </div>

    //   <div className="card">
    //     <Carousel
    //       value={products}
    //       numVisible={1}
    //       numScroll={1}
    //       orientation="vertical"
    //       verticalViewPortHeight="352px"
    //       itemTemplate={productTemplate}
    //       header={<h5>Vertical</h5>}
    //       style={{ maxWidth: "400px", marginTop: "2em" }}
    //     />
    //   </div>
    // </div>
  );
};

export default CarouselDemo;
