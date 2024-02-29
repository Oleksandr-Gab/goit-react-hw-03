import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
    return (
        <div className={css.container}>
            <div>
                <p>
                    <FaUser /> {name}
                </p>
                <p>
                    <BsFillTelephoneFill /> {number}
                </p>
            </div>
            <button type="button" onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}
