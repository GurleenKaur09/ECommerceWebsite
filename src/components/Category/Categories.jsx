import "./categories.css"
import React, { Component } from 'react'
import { Col, Container, Row, Card } from "react-bootstrap"
import { categories } from "../../utils/products"

const Categories = () => {
    return (
      <div>
        <Container style={{maxWidth: '1600px'}}>
          <Row>
          {categories.map((val, index) => {
            return (
              <Col md={2} className='feature' key={index}>
                <Card className="category-card">
                  <Card.Img className="category-card-img" src={val.imgUrl} />
                </Card>
                <div className="category-card-title">
                  {val.title}
                </div>
              </Col>
            )
          })}
          </Row>
        </Container>
      </div>
    )
  }

export default Categories
