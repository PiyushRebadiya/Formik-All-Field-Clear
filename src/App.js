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
      gender: ""
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .max(5, "Must be 5 characters or less")
        .required("Required"),
      age: Yup.number()
        .max(100, "Must be 3 characters")
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
      <label htmlFor="text">First Name</label>
      <input
        id="text"
        name="text"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.text}
      />
      {formik.touched.text && formik.errors.text ? (
        <div>{formik.errors.text}</div>
      ) : null}
      <br />
      <label htmlFor="age">Last Name</label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
      />
      {formik.touched.age && formik.errors.age ? (
        <div>{formik.errors.age}</div>
      ) : null}

      <br />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br />
      <label> School </label>
      <input
        type="checkbox"
        value="School"
        checked={formik.values.hobby.includes("School")}
        name="hobby"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      <label> UG </label>
      <input
        type="checkbox"
        value="UG"
        checked={formik.values.hobby.includes("UG")}
        name="hobby"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      <label> PG </label>
      <input
        type="checkbox"
        value="PG"
        checked={formik.values.hobby.includes("PG")}
        name="hobby"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.hobby && formik.errors.hobby ? (
        <div>{formik.errors.hobby}</div>
      ) : null}
      <br />
      <label> Male </label>
      <input
        type="radio"
        value="male"
        name="gender"
        checked={formik.values.gender === "male"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      <label> Female </label>
      <input
        type="radio"
        value="female"
        name="gender"
        checked={formik.values.gender === "female"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.gender && formik.errors.gender ? (
        <div>{formik.errors.gender}</div>
      ) : null}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
