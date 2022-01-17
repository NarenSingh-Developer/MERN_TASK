import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/api/post";
import { fetchCategories } from "../redux/api/get";

const AddProduct = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [Product, setProduct] = React.useState({
    name: "",
    model: "",
    categoryId: "",
    image: "",
    price: "",
    description: "",
  });
  console.log("Product: ", Product);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...Product, [name]: value });
  };

  const Submit = async (e) => {
    e.preventDefault();
    dispatch(addProduct(Product));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <>
      <NavBar />
      <section>
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <Form
            className=" d-flex flex-column align-items-center shadow-lg p-5"
            onSubmit={(e) => Submit(e)}
          >
            <h3>Add Product</h3>
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="Name"
              name="name"
              onChange={(e) => handleInput(e)}
              value={Product.name}
            />
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="model"
              name="model"
              onChange={(e) => handleInput(e)}
              value={Product.model}
            />
            <Form.Select
              className="text-start mt-3"
              name="categoryId"
              onChange={(e) => handleInput(e)}
            >
              <option value="">select</option>
              {categories?.map((value, index) => (
                <option value={index}>{value.name}</option>
              ))}
            </Form.Select>

            <Form.Control
              type="text"
              className="mt-3"
              placeholder="image link"
              name="image"
              onChange={(e) => handleInput(e)}
              value={Product.image}
            />
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="price must be number"
              name="price"
              onChange={(e) => handleInput(e)}
              value={Product.price}
            />
            <textarea
              className="form-control mt-3"
              placeholder="description"
              name="description"
              onChange={(e) => handleInput(e)}
              value={Product.description}
            />
            <div className="w-100">
              <Button className="w-100 mt-3" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
