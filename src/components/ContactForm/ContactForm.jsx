import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Contact name is required")
    .min(3, "Contact name must be more than ${min} characters")
    .max(50, "Contact name must be less than ${max} characters"),
  number: Yup.string()
    .required("Contact number is required")
    .matches(/^[0-9\-\+\(\) ]+$/, "Invalid phone number")
    .min(3, "Contact number must be more than ${min} characters")
    .max(50, "Contact number must be less than ${max} characters"),
});

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <div className={css.wrapp}>
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage component="p" name="name" />
          </label>
          <label className={css.label}>
            Number
            <Field className={css.input} type="tel" name="number" />
            <ErrorMessage component="p" name="number" />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};
export default ContactForm;
