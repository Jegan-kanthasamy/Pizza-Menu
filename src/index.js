import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

//MainApp Components
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Header Components
function Header() {
  return (
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>
    </header>
  );
}

//PizzaCard
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

//PizzaMenu
function Pizza(props) {
  if (props.pizzaObj.soldOut) {
    return (
      <li className="pizza sold-out">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>{props.pizzaObj.price}</span>
        </div>
      </li>
    );
  } else {
    return (
      <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>{props.pizzaObj.price}</span>
        </div>
      </li>
    );
  }
}

//Footer Components
function Footer() {
  const currentTime = new Date().getHours();
  const openTime = 12;
  const closeTime = 22;
  const shopStatus = currentTime >= openTime && currentTime <= closeTime;

  return (
    <footer className="footer">
      {shopStatus ? (
        <section className="order">
          <p>{`We're open from ${openTime}:00 to ${closeTime}:00. Come visit us or order online.`}</p>
          <button className="btn">Order</button>
        </section>
      ) : (
        <p>{`We're happy to welcome you between ${openTime}:00 and ${closeTime}:00`}</p>
      )}
    </footer>
  );
}

// Render Code
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
