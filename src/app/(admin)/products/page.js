import React from "react";
import { Col, Row } from "react-bootstrap";

const Productpage = () => {
    const productList = [
        {
            name: "iPhone 15",
            price: 79999,
            description: "Latest Apple smartphone with powerful A17 chip.",
            stock: 25,
            brand: "Apple",
            category: "Mobile",
        },
        {
            name: "iPhone 15",
            price: 79999,
            description: "Latest Apple smartphone with powerful A17 chip.",
            stock: 25,
            brand: "Apple",
            category: "Mobile",
        },
        {
            name: "iPhone 15",
            price: 79999,
            description: "Latest Apple smartphone with powerful A17 chip.",
            stock: 25,
            brand: "Apple",
            category: "Mobile",
        },
        {
            name: "iPhone 15",
            price: 79999,
            description: "Latest Apple smartphone with powerful A17 chip.",
            stock: 25,
            brand: "Apple",
            category: "Mobile",
        },
        {
            name: "iPhone 15",
            price: 79999,
            description: "Latest Apple smartphone with powerful A17 chip.",
            stock: 25,
            brand: "Apple",
            category: "Mobile",
        },
        {
            name: "iPhone 15",
            price: 79999,
            description: "Latest Apple smartphone with powerful A17 chip.",
            stock: 25,
            brand: "Apple",
            category: "Mobile",
        },
        {
            name: "iPhone 15",
            price: 79999,
            description: "Latest Apple smartphone with powerful A17 chip.",
            stock: 25,
            brand: "Apple",
            category: "Mobile",
        },
        {
            name: "iPhone 15",
            price: 79999,
            description: "Latest Apple smartphone with powerful A17 chip.",
            stock: 25,
            brand: "Apple",
            category: "Mobile",
        }
    ]

    return (
        <div className="product-page">
            <h2 className="common-subHeading">All Products</h2>
            <Row>
                {
                    productList.map((product, index) => {
                        return (
                            <Col lg={3} key={index}>
                                <div className="product-card">
                                    <h2 className="product-name">{product.name}</h2>

                                    <p className="product-price">₹ {product.price}</p>

                                    <p className="product-description">
                                        {product.description}
                                    </p>

                                    <div className="product-meta">
                                        <p><strong>Brand:</strong> {product.brand}</p>
                                        <p><strong>Category:</strong> {product.category}</p>
                                        <p><strong>Stock:</strong> {product.stock}</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default Productpage;