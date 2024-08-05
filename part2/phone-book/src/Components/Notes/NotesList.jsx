import { useState } from "react";
import { Note } from "./Note";

export const NotesList = ({ notes }) => {
    const [showAll, setShowAll] = useState(true);

    const toggleShowAll = (e) => {
        const choice = !showAll;
        setShowAll(choice);
    };

    const notesToShow = showAll ? notes : notes.filter(note => note.important);

    return (
        <>
            <h1>Notes</h1>
            <div>
                <input type='checkbox' onChange={toggleShowAll} checked={showAll} />Show All
            </div>
            <ul>
                {notesToShow.map(note => <Note key={note.id} note={note} />
                )}
            </ul>
        </>
    );
};
