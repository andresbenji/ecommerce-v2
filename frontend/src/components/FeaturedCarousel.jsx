import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useGetFeaturedQuery } from "../slices/featuredApiSlice.js";

import React from "react";

const FeaturedCarousel = () => {
  const { data: featured, isLoading, error } = useGetFeaturedQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h2>Featured Cars</h2>
      <Carousel pause="hover" className="bg-primary mb-4" fade dealy={2000}>
        {featured.map((car) => (
          <Carousel.Item key={car._id}>
            <Image src={car.image} alt={car.name} c fluid />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default FeaturedCarousel;
