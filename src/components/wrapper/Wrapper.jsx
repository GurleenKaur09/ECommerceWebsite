import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { serviceData } from "../../utils/products"

const Wrapper = () => {
  return (
      <section className='wrapper background'>
        <Container style={{maxWidth: '1600px'}}>
          <Row>
          {serviceData.map((val, index) => {
            return (
              <Col md={3} sm={5} xs={9} style={{backgroundColor:val.bg, marginTop: '20px', borderRadius: '10px'}} className='feature' key={index}>
                <div className='icon'>
                  {val.icon}
                </div>
                <h3>{val.title}</h3>
                <p>{val.subtitle}</p>
              </Col>
            )
          })}
          </Row>
        </Container>
      </section>
  )
}

export default Wrapper
