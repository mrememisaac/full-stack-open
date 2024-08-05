import { useState } from "react";

export const AddNewPersonForm = ({ functionThatSavesContacts }) => {
    const [newPerson, setNewPerson] = useState({ name: '', phone_number: '' });

    const onChange = (e) => {
        const newState = { ...newPerson, [e.target.name]: e.target.value };
        setNewPerson(newState);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        functionThatSavesContacts(newPerson);
    };

    const style = { paddingTop: "5px" };
    return (
        <>
            <h4>Add Person Form</h4>
            <form onSubmit={onSubmit}>
                <div style={style}>
                    Name:<br /> <input type='text' name={'name'} value={newPerson.name} onChange={onChange} />
                </div>
                <div style={style}>
                    Phone Number:<br /> <input type='text' name={'phone_number'} value={newPerson.phone_number} onChange={onChange} />
                </div>
                <div style={style}>
                    <button type="submit">Add Person</button>
                </div>
            </form>

        </>
    );
};
