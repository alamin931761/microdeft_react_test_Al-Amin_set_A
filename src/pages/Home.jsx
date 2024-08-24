import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch(
      `https://react-interview.1putym.easypanel.host/api/product?email=naim.microdeft@gmail.com`
    ).then((res) => res.json().then((data) => console.log(data)));
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
