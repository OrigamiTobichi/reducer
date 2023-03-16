import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import React from "react";
import Content from "./Content.js";
export default function Component() {
  //   const [countDown, setCountDown] = useState(60);

  //   const timerId = useRef();
  //   const h1Element = useRef();
  //   const prevCount = useRef();

  //   useEffect(() => {
  //     prevCount.current = countDown;
  //   }, [countDown]);

  //   useEffect(() => {
  //     return () => {
  //       clearInterval(timerId.current);
  //     };
  //   }, []);
  //   const handleStart = () => {
  //     timerId.current = setInterval(() => {
  //       setCountDown((prevCount) => prevCount - 1);
  //       console.log(prevCount);
  //     }, 1000);
  //   };
  //   const handleStop = () => {
  //     clearInterval(timerId.current);
  //   };

  //   console.log(countDown, prevCount.current);

  //   useEffect(() => {
  //     console.log(h1Element.current);
  //   }, [countDown]);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const inputElement = useRef();

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleAddProduct = () => {
    if (name !== "" && price !== "") {
      setProducts([
        ...products,
        {
          name,
          price: Number(price),
        },
      ]);
      setName("");
      setPrice("");
      inputElement.current.focus();
    }
  };

  /*
    - useMemo giúp tránh việc lặp lại 1 logic nào đó không cần thiết
        + callback được gọi khi component mounted
        + callback được gọi trước khi trước khi update Element Dom
  */

  const result = useMemo(() => {
    console.log("re-render");
    const result = products.reduce((initVal, currVal) => {
      return initVal + currVal.price;
    }, 0);
    return result;
  }, [products]);

  const handleEditName = (index) => {
    if (name === "" || price === "") {
      alert("Vui lòng nhập nội dung cần sửa và nhấn Edit");
    } else {
      //Tạo ra tham chiếu mới trỏ đến buồng nhớ mới
      const newProduct = [...products];
      newProduct.splice(index, 1, {
        name,
        price: parseInt(price),
      });
      setProducts(newProduct);
    }
    setName("");
    setPrice("");
  };

  console.log(products);

  return (
    <div style={{ padding: 30 }}>
      {/* <h1 ref={h1Element}>{countDown}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button> */}
      <h1>{count}</h1>
      <Content onIncrease={handleIncrease} />
      <br />
      <br />
      <input ref={inputElement} value={name} placeholder="Enter name...." onChange={(e) => setName(e.target.value)} />
      <br />
      <input value={price} placeholder="Enter price...." onChange={(e) => setPrice(e.target.value)} />
      <br />
      {/* {console.log("re-render1")} */}
      <h1>Total: {result}</h1>
      <button onClick={handleAddProduct}>Add</button>
      <ul>
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <li>
              {product.name} : {product.price}
              <button style={{ marginLeft: 20 }} onClick={() => handleEditName(index)}>
                Edit
              </button>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
