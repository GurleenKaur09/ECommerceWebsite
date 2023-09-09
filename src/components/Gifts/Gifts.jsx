import React, { Component } from 'react'
import { Col, Container, Row, Button } from "react-bootstrap"
import "./gifts.css"

const Gifts = () => {
    return (
      <div style={{backgroundColor: '#bcd9ea'}}>
        <Container className='gifts-container'>
            <Row className='gifts-row1'>
                Find Gifts for your Loved ones
            </Row>
            <Row className='gifts-row' md={4}>
                <Col>
                <select className="gifts-select">
                    <option>Select By Relation</option>
                    <option value="1">Father</option>
                    <option value="2">Mother</option>
                    <option value="3">Brother</option>
                    <option value="4">Sister</option>
                    <option value="5">Wife</option>
                    <option value="6">Husband</option>
                    <option value="7">Son</option>
                    <option value="8">Daughter</option>
                </select>
                </Col>
                <Col xs={6}>
                <select className="gifts-select">
                    <option>Select By Occasion</option>
                    <option value="1">Father's Day</option>
                    <option value="2">Mother's Day</option>
                    <option value="3">Indepedence Day</option>
                    <option value="4">Raksha Bandhan</option>
                    <option value="5">Diwali</option>
                    <option value="6">Engagement</option>
                    <option value="7">Wedding</option>
                    <option value="8">Birthday</option>
                    <option value="9">Anniversary</option>
                    <option value="10">New Year</option>
                    <option value="11">Friendship Day</option>
                    <option value="12">Republic Day</option>
                    <option value="13">Holi</option>
                    <option value="14">Retirement</option>
                </select>
                </Col>
                <Col>
                    <Button className='gifts-button' variant="primary">FIND GIFTS</Button>{' '}
                </Col>
            </Row>
        </Container>
      </div>
    )
  }

export default Gifts
