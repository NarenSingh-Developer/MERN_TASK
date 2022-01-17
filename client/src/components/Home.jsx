import React, { useEffect, useState } from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchCategories } from "../redux/api/get";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const [filterData, setFilterData] = useState([]);

  const filterProduct = (value) => {
    if (value === "all") {
      dispatch(fetchProducts());
      setFilterData([]);
    } else {
      const filterItems = products.filter((item) => item.categoryId == value);
      setFilterData(filterItems);
    }
  };
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [filterData]);
  return (
    <>
      <NavBar />
      <Container>
        <div className="d-flex justify-content-end mb-5 mt-3">
          <h5 className="me-5">Product Categories</h5>
          <select
            name="categories"
            onChange={(e) => filterProduct(e.target.value)}
          >
            <option value="all">All</option>
            {categories?.map((value, index) => (
              <option value={index}>{value.name}</option>
            ))}
          </select>
        </div>

        <Row>
          {filterData.length === 0 ? (
            <Cards data={products} />
          ) : (
            <Cards data={filterData} />
          )}
        </Row>
      </Container>
    </>
  );
};

export const Cards = ({ data }) => {
  return (
    <>
      {data?.map((value) => (
        <Col
          xl={4}
          md={4}
          sm={6}
          xs={12}
          className="d-flex justify-content-center mb-5"
        >
          <Card style={{ width: "18rem" }}>
            <Link to={`/product/${value._id}`}>
              <Card.Img
                variant="top"
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
              />
            </Link>
            <Card.Body className="text-center">
              <Card.Title>{value.name}</Card.Title>
              <Card.Text>
                <p className="mb-1">{value.model}</p>
                <p>${value.price}</p>
              </Card.Text>
              <div>
                <Link
                  to={`/product/${value._id}`}
                  className="btn btn-primary w-100"
                >
                  VIEW
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};
