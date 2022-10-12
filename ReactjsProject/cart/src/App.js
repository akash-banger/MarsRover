import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import React, { useState } from "react";
import Footer from "./Components/Footer";


function App() {

  let itemName = React.createRef();
  let itemPrice = React.createRef();
  var productList = [
    {
      name: "Iphone XS Max",
      Price: 45000,
      Quantity: 0,
    },
    {
      name: "Iphone 11 Max",
      Price: 50000,
      Quantity: 0,
    },
  ];

  var [productList, setproductList] = useState(productList);

  let incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].Quantity++;
    setproductList(newProductList);
  };

  let decrementQuantity = (index) => {
    if (productList[index].Quantity > 0) {
      let newProductList = [...productList];
      newProductList[index].Quantity--;
      setproductList(newProductList);
    }
  };

  let Reset = () => {
    let newProductList = [...productList];
    newProductList[0].Quantity = 0;
    newProductList[1].Quantity = 0;
    setproductList(newProductList);
  };

  let removeItem = (index) => {
    let newProductList = [...productList];
    newProductList.splice(index, 1);
    setproductList(newProductList);
  };

  let totalAmount = 0;
  productList.forEach((item) => {
    totalAmount += item.Price * item.Quantity;
  });

  let addItemFunc = () => {
    const Item = itemName.current;
    const Cost = itemPrice.current;
    let newProductList = [...productList];
    newProductList.push({ name: Item.value , Price: Cost.value , Quantity: 0 });
    setproductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
          addItemFunc={addItemFunc}
        />
        <div className="input-group mb-3 row">
          <input
            type="text"
            ref={itemName}
            className="form-control col-8"
            placeholder="Enter Item Name"
            aria-label="Enter Item Name"
            aria-describedby="basic-addon2"
          />
          <input
            type="text"
            ref={itemPrice}
            className="form-control col-8"
            placeholder="Enter Item Price"
            aria-label="Enter Item Price"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append col-2">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={addItemFunc}
            >
              Add Item
            </button>
          </div>
        </div>
      </main>
      <Footer totalAmount={totalAmount} Reset={Reset} />
    </>
  );
}

export default App;
