import React from 'react'
import CountriesCard from '../components/CountriesCard'
import { data } from '../BD/CountriesDB'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Countries = () => {
  return (
    
    <div>
      <div className="header d-flex justify-content-between">
        <h2>Where in the world?</h2>
        <h2>Dark Mode</h2>
      </div>
      <div className="">
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </div>
      <h1>Countries of the World</h1>
      <div className="d-flex justify-content-between flex-wrap gap-3">
        {data.map((p) => {
          return(
            <div className="" key={p.id} >
              <CountriesCard countries={p}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Countries;