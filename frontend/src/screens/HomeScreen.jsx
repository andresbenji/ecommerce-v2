import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import FeaturedCarousel from "../components/FeaturedCarousel";

const HomeScreen = () => {
  const { pageNumber } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({ pageNumber });

  return (
    <>
    <FeaturedCarousel/>
      {isLoading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <Message variant="danger">{error.data.message || error.error}</Message>
      ) : (
        <>
        <Meta/>
          <h1>Latest Products</h1>
          <Row>
            {/* maps through each product in product.js and outputs a new column */}
            {data.products.map((product) => (
              //how much space the columns should take
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
