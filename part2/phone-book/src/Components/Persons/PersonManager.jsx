import { useState } from "react";
import { AddNewPersonForm } from "./AddNewPersonForm";
import { PersonsList } from "./PersonsList";


export const PersonManager = () => {
    const [persons, setPersons] = useState([]); //        { id: 1, name: 'Arto Hellas', phone_number: '08012345678' }    ])

    const savePerson = (person) => {
        let duplicate = persons.filter(p => p.name === person.name || p.phone_number === person.phone_number);
        if (duplicate.length > 0) {
            window.alert(`You already have a contact with this name ${person.name} or phone number ${person.phone_number}`);
            return;
        }
        const newPerson = { ...person, id: persons.length + 1 };
        setPersons([...persons, newPerson]);
    };

    return (
        <div>
            <AddNewPersonForm functionThatSavesContacts={savePerson} />
            <hr />
            <PersonsList persons={persons} />
        </div>
    );
};
