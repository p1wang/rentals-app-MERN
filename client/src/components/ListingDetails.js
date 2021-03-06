import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import defaultPfp from "../assets/images/blank-pfp.png";

const ListingDetails = () => {
  const { currentListing } = useSelector((state) => state.listings);

  return (
    <>
      <Carousel>
        {currentListing.images.map((image) => (
          <Carousel.Item key={image}>
            <img
              className="d-block w-100"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "45vh",
              }}
              src={image}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-5">
        <Row className="m-2">
          <Col>
            <p className="fs-2">{`$${currentListing.price}`}</p>
          </Col>
        </Row>
        <Row className="m-2 border-bottom">
          <Col>
            <span className="fs-5 ">Postal Code:</span>
            <p className="fw-light">{currentListing.postalCode}</p>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <span className="fs-5 ">Unit Type:</span>
            <p className="fw-light">{currentListing.unitType}</p>
          </Col>
          <Col>
            <span className="fs-5 ">Agreement Type:</span>
            <p className="fw-light">{currentListing.agreementType}</p>
          </Col>
        </Row>
        <Row className="m-2 border-bottom">
          <Col>
            <span className="fs-5 ">Unit Specs:</span>
            <div className="d-flex justify-content-around">
              <p className="fw-light">{`${currentListing.bedrooms} Bedroom`}</p>
              <p className="fw-light">{`${currentListing.bathrooms} Bathroom`}</p>
              <p className="fw-light">{`${currentListing.parkings} Parking`}</p>
            </div>
          </Col>
        </Row>
        <Row className="m-2 ">
          <Col>
            <span className="fs-5 ">Description:</span>
            <p className="fw-light">{currentListing.description}</p>
          </Col>
        </Row>
        <Row className="m-2 border-bottom">
          <Col>
            <span className="fs-5 ">Contact:</span>
            <div className="d-flex align-items-center m-2">
              <Image
                src={
                  currentListing.creatorPfp
                    ? currentListing.creatorPfp
                    : defaultPfp
                }
                width="40px"
                height="40px"
                alt="profile pic"
                className="me-4"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <span className="fw-light">{currentListing.creatorEmail}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListingDetails;
