import { useState, memo } from "react";

//memo (HOC) Higher orther cpn memo dùng để ghi nhớ props tránh việc re-render k cần thiết
function Content({ onIncrease }) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // console.log("re-render child");
  return (
    <>
      {/* <h1>{count}</h1> */}
      <button onClick={onIncrease}>increase</button>
    </>
  );
}
export default memo(Content);
