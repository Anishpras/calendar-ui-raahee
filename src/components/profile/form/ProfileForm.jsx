import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./_profileForm.scss";
import db from "../../../firebase.utils";
import { useAuth } from "../../../contexts/AuthContext";

const ProfileForm = () => {
  const { currentUser } = useAuth();

  const initialValues = {
    name: "",
    photoURL: "",
    bio: "",
    sessionDuration: 0,
    fees: "",
    weekDaysChecked: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  };

  const onSubmit = (values) => {
    let daysChecked = values.weekDaysChecked;

    db.collection("mhp").doc(currentUser.uid).update({
      name: values.name,
      photoURL: values.photoURL,
      bio: values.bio,
      sessionDuration: values.sessionDuration,
      fees: values.fees,
      weekDaysChecked: daysChecked,
    });
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
            <label htmlFor="name">Name*</label>
            <Field id="name" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" />
          </div>
          <div className="form-control">
            {" "}
            <label htmlFor="photoURL">PhotoURL*</label>
            <Field
              id="photoURL"
              name="photoURL"
              placeholder="Enter a URL for profile photo"
            />
            <ErrorMessage name="photoURL" />
          </div>

          <div className="form-control">
            {" "}
            <label htmlFor="bio">Biography*</label>
            <Field as="textarea" id="bio" name="bio" placeholder="Biography" />
            <ErrorMessage name="bio" />
          </div>

          <div className="form-control">
            {" "}
            <label htmlFor="sessionDuration">Session - Duration*</label>
            <Field
              type="number"
              id="sessionDuration"
              name="sessionDuration"
              placeholder="Enter your session duration"
            />
            <ErrorMessage name="sessionDuration" />
          </div>
          <div className="form-control">
            <label htmlFor="workingDays">Select the working days*</label>

            <div className="checkbox-control">
              <label>
                <Field type="checkbox" name="weekDaysChecked" value="Monday" />
                Monday
              </label>
              <label>
                <Field type="checkbox" name="weekDaysChecked" value="Tuesday" />
                Tuesday
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="weekDaysChecked"
                  value="Wednesday"
                />
                Wednesday
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="weekDaysChecked"
                  value="Thursday"
                />
                Thursday
              </label>
              <label>
                <Field type="checkbox" name="weekDaysChecked" value="Friday" />
                Friday
              </label>
            </div>
          </div>
          <div className="form-control">
            {" "}
            <label htmlFor="fees">Fees*</label>
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
