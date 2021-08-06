import React from 'react'
import {Row,Col} from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

function Homescreen() {
    return (
        <div>
            <h1 className="mt-3 ms-3">Latest Products</h1>
            <Row>
                {products.map((productwa)=>{
                  return (
                  <Col key={productwa._id} sm={12} md={6} lg={4} xl={3}>
                  <Product
                   product={productwa}
                  />
                  </Col>);  
                })}
            </Row>
        </div>
    )
}

export default Homescreen
