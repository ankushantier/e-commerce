"use client"
import { useRouter } from "next/navigation";
import { PencilLine, Trash2 } from "lucide-react";
import CommonButton from "../../../components/common/commonBtn/commonBtn";
import {
    deleteProduct,
    GetAllProducts
} from "../../../services/adminService";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import EditProductModal from "../../../components/common/Modals/EditProductModal/EditProductModal";

const Productpage = () => {
    const [products, setProducts] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
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

    const handleEdit = (product) => {
        setSelectedProduct(product)
        setShowEdit(true)
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
                            <Col lg={3} key={product.id || index}>
                                <div className="product-card">
                                    <div className="product-actions">
                                        <button
                                            type="button"
                                            className="icon-btn delete-btn"
                                            onClick={() => handleDelete(product.id)}
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                        <button
                                            type="button"
                                            className="icon-btn edit-btn"
                                            onClick={() => handleEdit(product)}
                                            title="Edit"
                                        >
                                            <PencilLine size={18} />
                                        </button>
                                    </div>

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

            <EditProductModal
                show={showEdit}
                onHide={() => setShowEdit(false)}
                product={selectedProduct}
                onUpdated={getAllProducts}
            />
        </div>
    );
};

export default Productpage;