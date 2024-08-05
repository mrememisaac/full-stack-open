import { useState } from "react";
import { Filter } from './Components/Filter';
import { PersonDisplay } from "./PersonDisplay";

export const PersonsList = ({ persons }) => {
    const [filterText, setFilterText] = useState('');

    const onChange = (e) => {
        const newFilter = e.target.value.toLowerCase();
        setFilterText(newFilter);
    };

    const filteredPersons = filterText === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filterText) || person.phone_number.toLowerCase().includes(filterText));

    return (
        <>
            <h4>Phonebook</h4>
            <Filter onChange={onChange} filterText={filterText} />
            {filteredPersons.map(person => <PersonDisplay key={person.id} person={person} />)}
        </>
    );
};
