import React from "react";
import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      text: "",
      age: "",
      email: "",
      hobby: [],
      gender: "",
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .max(5, "Must be 5 characters or less")
        .required("Required"),
      age: Yup.number()
        .max(100, "Must be 2 characters")
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      hobby: Yup.array().min(1).required("Required..............School"),
      gender: Yup.string().required(
        "Required..............radio button......."
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("++++++++++", formik);
      console.log("value", values);
      resetForm({ values: "" });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="title">
        <h1 className="title_login_page">Login Page</h1>
      </div>
      <div className="input_text_div">
        <div className="input_text_design">
          <label htmlFor="text">First Name</label>
          <br />
          <input
            id="text"
            name="text"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.text}
          />
          {formik.touched.text && formik.errors.text ? (
            <div className="text_danger">{formik.errors.text}</div>
          ) : null}
        </div>
        <br />
        <div className="input_text_design">
          <label htmlFor="age">age</label>
          <br />
          <input
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text_danger">{formik.errors.age}</div>
          ) : null}
        </div>
        <br />
        <div className="input_text_design">
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text_danger">{formik.errors.email}</div>
          ) : null}
        </div>
        <br />
      </div>
      <h3 className="h3_hobby">
        Hobby :
      </h3>
      <div className="input_checkbox_div">
        <div className="input_checkbox_design">
          <label> School </label>
          <input
            type="checkbox"
            value="School"
            checked={formik.values.hobby.includes("School")}
            name="hobby"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="input_checkbox_design">
          <label> UG </label>
          <input
            type="checkbox"
            value="UG"
            checked={formik.values.hobby.includes("UG")}
            name="hobby"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="input_checkbox_design">
          <label> PG </label>
          <input
            type="checkbox"
            value="PG"
            checked={formik.values.hobby.includes("PG")}
            name="hobby"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <br />
      </div>
      {formik.touched.hobby && formik.errors.hobby ? (
        <div className="input_checkbox_design text_danger" style={{ marginTop: "5px" }}>
          {formik.errors.hobby}
        </div>
      ) : null}
      <h3 className="h3_gender">
        Gender :
      </h3>
      <div className="input_radio_div">
        <div className="input_radio_design">
          <label> Male </label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={formik.values.gender === "male"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="input_radio_design">
          <label> Female </label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={formik.values.gender === "female"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      {formik.touched.gender && formik.errors.gender ? (
        <div style={{ marginTop: "5px", marginLeft: "90px" ,color: "red" }}>
          {formik.errors.gender}
        </div>
      ) : null}
      <div className="submit_button">
        <button type="submit" className="submit_handler">Submit</button>
      </div>
    </form>
  );
}

export default App;
