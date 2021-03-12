import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import ProductService from "./ProductService";

import "./CarouselDemo.css";

function CarouselDemo() {
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

  //   const productService = new ProductService();
  //   console.log("up here");

  useEffect(() => {
    let data = {
      data: [
        {
          id: "1",
          company_name: "XHighlight",
          founders: "Alvie Stoddard",
          description:
            "The Fastest and Easiest Way to make your Sports Highlight Videos",
          image: "XHighlght.png",
          //   price: 65,
          website: "xhighlight.com",
          custom_field_one: "",
          custom_field_two: "",
          other_info: "",
        },
        {
          id: "2",
          company_name: "Onleye",
          founders: "Julian Wiley",
          description:
            "Reinventing Car Security",
          image: "onleye.png",
          //   price: 65,
          website: "onleye.com",
          //   quantity: 24,
          //   inventoryStatus: "INSTOCK",
          custom_field_one: "",
          custom_field_two: "",
          other_info: "",
        },
        {
          id: "3",
          company_name: "Combust-EV",
          founders: "Tommy Croissant",
          description:
            "Converting Gas to Electric Vehicles",
          image: "XHighlght.png",
          //   price: 65,
          website: "combust-ev.com",
          //   quantity: 24,
          //   inventoryStatus: "INSTOCK",
          custom_field_one: "",
          custom_field_two: "",
          other_info: "",
        },
        {
          id: "4",
          company_name: "VinciVR",
          founders: "Eagle Wu",
          description:
            "Reinveinting Trainnig Through Virtual Reality",
          image: "VinciVR.png",
          //   price: 65,
          website: "vincivr.com",
          //   quantity: 24,
          //   inventoryStatus: "INSTOCK",
          custom_field_one: "",
          custom_field_two: "",
          other_info: "",
        },
        {
          id: "5",
          company_name: "XHighlight",
          founders: "Alvie Stoddard",
          description:
            "The Fastest and Easiest Way to make your Sports Highlight Videos",
          image: "XHighlght.png",
          //   price: 65,
          website: "xhighlight.com",
          custom_field_one: "",
          custom_field_two: "",
          other_info: "",
        },
      ],
    };
    setProducts(data.data.slice(0, 9));
  }, []);

  const productTemplate = (product) => {
    console.log(product);
    console.log("product");
    return (
      <div className="product-item">
        <a href="/">
          <div className="product-item-content">
            <div className="p-mb-3">
              <img
                src={
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                }
                onError={(e) =>
                  (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
                alt={"product.name"}
                className="product-image"
              />
            </div>
            <div>
              <h4 className="p-mb-1">{product.name}</h4>
              <h6 className="p-mt-0 p-mb-3">${"product.price"}</h6>
              <span
                className={`product-badge status-${"product.inventoryStatus.toLowerCase()"}`}
              >
                {"product.inventoryStatus"}
              </span>
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
        </a>
      </div>
    );
  };

  return (
    <div className="carousel-demo">
      {console.log("test")}
      {/* <div className="card">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          header={<h5>Basic</h5>}
        />
      </div> */}

      <div className="card">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular={true}
          autoplayInterval={3000}
          itemTemplate={productTemplate}
          header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>}
        />
      </div>
      {/* <div className="card">
        <Carousel
          value={products}
          numVisible={1}
          numScroll={1}
          orientation="vertical"
          verticalViewPortHeight="352px"
          itemTemplate={productTemplate}
          header={<h5>Vertical</h5>}
          style={{ maxWidth: "400px", marginTop: "2em" }}
        />
      </div> */}
    </div>
  );
}

export default CarouselDemo;
