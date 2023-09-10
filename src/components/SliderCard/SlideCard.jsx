import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SlideCard = ({title,desc,cover}) => {
  const [expand, setExpand] = useState(false);
  return (
      <Container className='box' >
        <Row>
          <Col md={6}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <Link aria-label="Go to Shop Page" to="/shop" onClick={() => setExpand(false)}>
              <button className="btn-primary">Visit Collections</button>
            </Link>
          </Col>
          <Col md={6}>
            <img src={cover} alt="#" />
          </Col>
        </Row>

    </Container>
  )
}

export default SlideCard
