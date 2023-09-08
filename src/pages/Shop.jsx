import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useContext, useEffect, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";

const Shop = () => {
    const {addToCart} =useContext(DataContainer);
    const [filterList,setFilterList] = useState(products.filter(item => item.category ==="sofa"));
    const [sortedList, setSortedList] = useState(filterList);
    
    useEffect(()=> {
        window.scrollTo(0,0);
    },[])
    return ( 
        <Fragment>
            <div className="d-flex" style={{marginTop:'50px', marginLeft:'130px', color:'gray'}}>
            <h3>Shop Products</h3>
            <p style={{margin:'5px 11px'}}>({products.length} {' '}items)</p>
            </div>
            <section className="filter-bar">
                <Container className="filter-bar-contianer">
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <FilterSelect setFilterList={setFilterList}/>
                        </Col>
                        <Col md={8} style={{width: '62%'}}>
                            <SearchBar setFilterList={setFilterList}/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <ShopList productItems={filterList} addToCart={addToCart}/>
                </Container>
            </section>
        </Fragment>
    );
}

export default Shop;