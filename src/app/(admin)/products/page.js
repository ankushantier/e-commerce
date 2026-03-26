"use client"
import { useRouter } from "next/navigation";
import CommonButton from "../../../components/common/commonBtn/commonBtn";
import { deleteProduct, GetAllProducts } from "../../../services/adminService";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Productpage = () => {
    const [products, setProducts] = useState([])
    const router = useRouter()
    const getAllProducts = async () => {
        const res = await GetAllProducts()
        console.log(res);
        setProducts(res.data)
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    const handleDelete = async (id) => {
        try {
            const res = await deleteProduct(id)
            if (res.success) {
                getAllProducts()
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="product-page">
            <div className="card-bg-2 product-page-head">
                <h2 className="common-subHeading">All Products</h2>
                <CommonButton text="Add Product" onClick={() => router.push('/addProducts')} />
            </div>

            <Row>
                {
                    products.map((product, index) => {
                        return (
                            <Col lg={3} key={index}>
                                <div className="product-card">
                                    <button onClick={() => handleDelete(product.id)}>delete</button>
                                    <h2 className="product-name">{product.product_name}</h2>

                                    <p className="product-price">₹ {product.price}</p>

                                    <p className="product-description">
                                        {product.description}
                                    </p>

                                    <div className="product-meta">
                                        <p><strong>Brand:</strong> {product.brand}</p>
                                        <p><strong>Category:</strong> {product.category_name}</p>
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