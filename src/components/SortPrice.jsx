import React from 'react';
import Select from 'react-select';
import { products } from '../utils/products';

const PriceRangeSelect = ({ setFilterList }) => {
    const handleChange = (selectedOption) => {
        if (selectedOption.value === 'All Products') {
          // If "All Products" is selected, set the filter to include all products
          setFilterList(products.filter(item => item.category ));
        } else {
          // Split the selected price range and convert it to numbers
          const [minPrice, maxPrice] = selectedOption.value.split('-').map(Number);
      
          // Filter products based on the selected price range
          setFilterList(products.filter(item => {
            const productPrice = item.price; // Assuming product.price is a number
            return productPrice >= minPrice && productPrice <= maxPrice;
          }));
        }
      };

  const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "150px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        width: "100%"
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

  const options = [
    {value: 'All Products', label: 'All Products'},
    { value: '0-99', label: '0 - 99' },
    { value: '100-199', label: '100 - 199' },
    { value: '200-299', label: '200 - 299' },
    { value: '300-399', label: '400 - 499' },
    { value: '500-599', label: '600 - 699' },
    { value: '700-799', label: '800 - 899' },
    { value: '900-999', label: '1000' }
    // Add more price range options as needed
  ];

  return (
    <Select
      options={options}
      defaultValue={{ value: '', label: 'All Products' }}
      onChange={handleChange}
      
    />
  );
};

export default PriceRangeSelect;
