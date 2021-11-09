import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard";

export default class ProductList extends Component {
    render() {
        const { products } = this.props;
        return (
            <div className="container flex center">
                {products.map((item) => <ProductCard product={ item } key={ item.id} />)}
            </div>
        )
    }
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };