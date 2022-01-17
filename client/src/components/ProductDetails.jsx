import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/api/get";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products);

  const getProduct = () => {
    dispatch(fetchProductById(id));
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <NavBar />
      <Container>
        <Row className="shadow-lg py-5 pe-lg-5">
          {product?.map((value) => (
            <>
              <Col lg={6}>
                <img
                  className="w-100"
                  src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
                  alt="img"
                />
              </Col>
              <Col lg={6}>
                <h4>{value.name}</h4>
                <h5>{value.model}</h5>
                <h5>${value.price}</h5>
                <p>{value.description}</p>
                <Button>ADD CART</Button>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
