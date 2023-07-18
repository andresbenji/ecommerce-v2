import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useGetFeaturedQuery } from "../slices/featuredApiSlice.js";
import styles from '../assets/styles/custom.module.css'
import React from "react";

const FeaturedCarousel = () => {
  const { data: featured, isLoading, error } = useGetFeaturedQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Featured Cars</h1>
      <Carousel pause="hover" className={styles.carousel} fade delay={2000}>
        {featured.map((car) => (
          <Carousel.Item key={car._id}>
            <Image className={styles.img}src={car.image} alt={car.name} fluid />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default FeaturedCarousel;
