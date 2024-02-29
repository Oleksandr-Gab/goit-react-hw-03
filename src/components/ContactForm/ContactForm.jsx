import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long")
        .required("This is required you dummy"),
    number: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long")
        .required("This is required you dummy"),
});

export default function ContactForm({ onAddContact }) {
    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                onAddContact({
                    id: nanoid(),
                    name: values.name,
                    number: values.number,
                });
                actions.resetForm();
            }}
        >
            <Form className={css.form}>
                <div>
                    <label htmlFor="351351351">Name</label>
                    <Field
                        className={css.input}
                        name="name"
                        type="text"
                        id="351351351"
                    />
                    <ErrorMessage name="name" component={"span"} />
                </div>
                <div>
                    <label htmlFor="3515631631">Number</label>
                    <Field
                        className={css.input}
                        name="number"
                        type="tel"
                        id="3515631631"
                    />
                    <ErrorMessage name="number" component={"span"} />
                </div>
                <button className={css.btn} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}
