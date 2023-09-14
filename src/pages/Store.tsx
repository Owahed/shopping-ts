import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

const Store = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <h1>Store</h1>

      <Row md={2} xs={1} lg={4} className="g-3">
        {products.map((product) => (
          <Col key={product.id}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
