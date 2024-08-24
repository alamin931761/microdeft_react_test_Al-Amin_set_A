import { useEffect, useState } from "react";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(
      `https://react-interview.1putym.easypanel.host/api/product?email=alamin931761@gmail.com`
    ).then((res) => res.json().then((data) => setProduct(data)));
  }, []);

  console.log(product);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
