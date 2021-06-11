import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./_profileForm.scss";
const ProfileForm = () => {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    console.log(profileData);
  }, [profileData]);

  const initialValues = {
    name: "",
    photoURL: "",
    bio: "",
    sessionDuration: 0,
    fees: "",
    weekDaysChecked: ["monday", "tuesday", "wednesday", "thursday", "friday"],
  };

  const onSubmit = (values) => {
    setProfileData(values);
    console.log(values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    photoURL: Yup.string().required("Please enter URL"),
    bio: Yup.string().required("Required"),
    sessionDuration: Yup.number()
      .required("Required")
      .positive("Sessions duration needs to be positive")
      .integer(),
    fees: Yup.string().required("Required"),
    weekDaysChecked: Yup.array().min(1),
  });
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        <Form className="formik-form">
          <div className="form-control">
            {" "}
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" />
          </div>
          <div className="form-control">
            {" "}
            <label htmlFor="photoURL">PhotoURL</label>
            <Field
              id="photoURL"
              name="photoURL"
              placeholder="Enter a URL for profile photo"
            />
            <ErrorMessage name="photoURL" />
          </div>

          <div className="form-control">
            {" "}
            <label htmlFor="bio">Biography</label>
            <Field as="textarea" id="bio" name="bio" placeholder="Biography" />
            <ErrorMessage name="bio" />
          </div>

          <div className="form-control">
            {" "}
            <label htmlFor="sessionDuration">Session - Duration</label>
            <Field
              type="number"
              id="sessionDuration"
              name="sessionDuration"
              placeholder="Enter your session duration"
            />
            <ErrorMessage name="sessionDuration" />
          </div>
          <div className="form-control checkbox-control">
            <label>
              <Field type="checkbox" name="weekDaysChecked" value="monday" />
              Monday
            </label>
            <label>
              <Field type="checkbox" name="weekDaysChecked" value="tuesday" />
              Tuesday
            </label>
            <label>
              <Field type="checkbox" name="weekDaysChecked" value="wednesday" />
              Wednesday
            </label>
            <label>
              <Field type="checkbox" name="weekDaysChecked" value="thursday" />
              Thursday
            </label>
            <label>
              <Field type="checkbox" name="weekDaysChecked" value="friday" />
              Friday
            </label>
          </div>
          <div className="form-control">
            {" "}
            <label htmlFor="fees">Fees</label>
            <Field id="fees" name="fees" placeholder="Enter your fees" />
            <ErrorMessage name="fees" />
          </div>
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileForm;
