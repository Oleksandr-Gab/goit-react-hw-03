import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ visibleContacs, onDelete }) {
    return (
        <ul className={css.contactList}>
            {visibleContacs.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}
