import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useContext, useEffect, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import SliderHome from "../components/Slider"
import Banner from "../components/Banner/Banner";
import PriceRangeSelect from '../components/SortPrice'
import { DataContainer } from "../App";

const Shop = () => {
    const {addToCart} =useContext(DataContainer);
    const [filterList,setFilterList] = useState(products.filter(item => item.category ==="sofa"));
    const [sortedList, setSortedList] = useState(filterList);
    const [priceRangeFilter, setPriceRangeFilter] = useState('');
    
    useEffect(()=> {
        window.scrollTo(0,0);
    },[])

   
    return ( 
        <Fragment>
            <SliderHome />
            <div className="d-flex" style={{marginTop:'50px', marginLeft:'130px', color:'gray'}}>
            <h3 style={{marginLeft: '-60px'}}>Shop Products</h3>
            <p style={{margin:'5px 11px'}}></p>
            </div>
            <section className="filter-bar">
                <Container style={{maxWidth: '1600px'}} className="filter-bar-contianer">
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <div className="sort-bars">
                            <FilterSelect setFilterList={setFilterList}/>
                            <PriceRangeSelect setFilterList={setFilterList} />
                            </div>
                        </Col>
                        <Col md={8}>
                            <SearchBar setFilterList={setFilterList}/>
                        </Col>
                    </Row>
                </Container>
                <Container style={{maxWidth: '1600px'}}>
                    <ShopList productItems={filterList} addToCart={addToCart}/>
                </Container>
            </section>
        </Fragment>
    );
}

export default Shop;