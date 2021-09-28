import React from "react";
import Header from "./header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'

const Checkout = () => {
  const schema = yup.object({
    name: yup.string().max(15, "Not more than 15 characters").required("Name is required"),
    email: yup.string().required("Email is required"),
    address: yup.string().max(100,"Not more than 50 characters").required("Address is required"),
    cellphone: yup.string().min(11).max(11, "Not more than 11 digits").required("Number is required")
  });
  return(
    <div>
      <Header/>
      <div className="form-main">
        <h3>Place your order</h3>
        <Formik
          initialValues={{ name: "", email: "", address:"",cellphone:"" }}
          onSubmit={() => {
            alert("Your order is on the way!")
          }}
          validationSchema={schema}
        >
          <Form className="form">
            <label><b>Fullname:</b></label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage className="error" name="name" component={"div"} />
            <label><b>Email:</b></label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage className="error" name="email" component={"div"} />
            <label><b>Address:</b></label>
            <Field id="address" name="address" type="text" />
            <ErrorMessage className="error" name="address" component={"div"} />
            <label><b>Phone number:</b></label>
            <Field id="phone" name="cellphone" type="int" />
            <ErrorMessage className="error" name="cellphone" component={"div"}/>
            <button id="btn" className="btn btn-warning" type="submit">Place order</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Checkout