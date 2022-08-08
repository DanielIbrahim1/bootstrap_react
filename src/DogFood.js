import * as React from "react";
import { getDogFood } from "./Data";
import { useLocation, NavLink, } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

// function QueryNavLink({ to, ...props }) {
//   let location = useLocation();
//   return <NavLink to={to + location.search} {...props} />;
// }


export default function Food() {
  let food = getDogFood()

  return (
    food.map((food) =>

      { return (
       
          <Row>
            <Col className="d-flex">
              <Card className="flex-fill" key={food}  style={{ width: '18rem' }} >
                {/* <Card.Img variant="top" src={`./media/${food.img}`} /> */}
                <Card.Body>
                  <Card.Title> {food.name} </Card.Title>
                  <Card.Text>
                    {food.name}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      
      )}
      )
  )
}

{/* <Col className="d-flex">
<Card className="flex-fill" key={id} className="productlist">
  <Card.Img variant="top" src={"#"} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{description}</Card.Text>
    <Card.Text>{category}</Card.Text> */}
   