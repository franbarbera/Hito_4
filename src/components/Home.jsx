import { Link } from "react-router-dom";
import "./Home.css";
import CardPizza from "./CardPizza";
import { useState, useEffect } from "react";

const Home = ({ onAddToCart }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar las pizzas");
        }
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div className="home-container">
      <h2>Explora nuestras deliciosas pizzas </h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
