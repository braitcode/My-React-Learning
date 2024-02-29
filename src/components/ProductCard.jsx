import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';

function ProductCard({product}) {
    // const {id, title, price, desc, image} = data;
  return (
    <Card style={{ width: '18rem', height: "25rem", textAlign: "left" }}>
      <Card.Img variant="top" src={product?.image} style={{width: "100%", height: "200px"}} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>{product?.desc}</Card.Text>
        <Card.Text>{product?.price}</Card.Text>
        <Button variant="primary">Purchase</Button>
        <Button variant="warning ms-4" style={{textDecoration: "none", color: "white"}}>
          <NavLink to={`/detail/${product?.id}`}>
            View Details
            </NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;