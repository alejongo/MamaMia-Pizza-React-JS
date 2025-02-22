import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { thousandSeparator } from "../helpers/thousandSeparator";

import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

export const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <>
      <Col xs md={6} lg={3}>
        <Card xs={12} md={6} lg={4} className="my-2">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <span className="fw-bold">Ingredients:</span>{" "}
              {ingredients.join(", ")}
            </Card.Text>
            <Card.Text>
              <span className="fw-bold">Price: </span>
              {`$${thousandSeparator(price)}`}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="outline-dark">View more</Button>
              <Button variant="dark">Add to cart</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  ingredients: PropTypes.array,
  img: PropTypes.string,
};
