import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const schema = Yup.object({
  name: Yup.string()
    .min(3, "En az 3 karakter")
    .max(50, "En fazla 50 karakter")
    .required("Zorunlu alan"),
  number: Yup.string()
    .min(3, "En az 3 karakter")
    .max(50, "En fazla 50 karakter")
    .required("Zorunlu alan"),
});

function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          İsim:
          <Field name="name" className={styles.input} placeholder="İsim girin" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Telefon:
          <Field
            name="number"
            className={styles.input}
            placeholder="Telefon numarası girin"
          />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>

        <button type="submit" className={styles.button}>
          Kişi Ekle
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
