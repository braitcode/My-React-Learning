import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function CountriesCard({countries}) {
  return (
    <Card style={{ width: '18rem', height: "25rem", textAlign: "left" }}>
      <Card.Img variant="top" src={countries?.flags.png} style={{width: "100%", height: "200%"}} />
      <Card.Body>
        <Card.Title>{countries?.name}</Card.Title>
        <Card.Text>{countries?.population}</Card.Text>
        <Card.Text>{countries?.region}</Card.Text>
        <Card.Text>{countries?.capital}</Card.Text>
        <Button variant="warning ms-4" style={{textDecoration: "none", color: "white"}}>
          <NavLink to="/condetail">
            View Details
            </NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CountriesCard;