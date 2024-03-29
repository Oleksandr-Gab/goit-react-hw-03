import { useEffect, useState } from "react";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const contactsDefaults = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactArr = () => {
    const saveContacts = window.localStorage.getItem("contactsBase");
    return saveContacts !== null && JSON.parse(saveContacts).length !== 0
        ? JSON.parse(saveContacts)
        : contactsDefaults;
};

function App() {
    const [filter, setFilter] = useState("");
    const [contacts, setContacts] = useState(contactArr);

    useEffect(() => {
        window.localStorage.setItem("contactsBase", JSON.stringify(contacts));
    }, [contacts]);

    const AddContact = (newContact) => {
        setContacts((prevContacts) => {
            return [...prevContacts, newContact];
        });
    };

    const deleteContact = (contactId) => {
        setContacts((prevContacts) => {
            return prevContacts.filter((contact) => contact.id !== contactId);
        });
    };

    const visibleContacs = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={AddContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList
                visibleContacs={visibleContacs}
                onDelete={deleteContact}
            />
        </>
    );
}

export default App;
