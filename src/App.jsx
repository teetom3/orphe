import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container className="main_Container">
        <Row>
          <Col>
            <Dish
              name="Tacos à l’unité"
              image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              price={3}
            />
          </Col>

          <Col>
            <Dish
              name="Enchiladas"
              image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              price={12}
            />
          </Col>

          <Col>
            <Dish
              name="Mole poblano"
              image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              price={15}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default App;
