import { useState } from 'react'
import { NotesList } from './NotesList';

const NewNoteForm = ({ functionThatSavesNotes }) => {
  const [newNote, setNewNote] = useState({ content: '', important: false });

  const onSubmit = (e) => {
    e.preventDefault();
    functionThatSavesNotes(newNote);
  }

  const onChange = (e) => {
    const value = e.target.type === 'checkbox' ? !newNote.important : e.target.value;
    const newState = { ...newNote, [e.target.name]: value };
    setNewNote(newState);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Note</label>
        <input type='text' name='content' value={newNote.content} onChange={onChange} placeholder='Enter note' />
        <label><input type='checkbox' name='important' onChange={onChange} checked={newNote.important} /> Is Important</label>
        <button type='submit'>Add Note</button>
      </form>
      <hr />
    </>
  );
}

const NotesManager = (props) => {

  const [notes, setNotes] = useState([]);

  const savesNote = (newNote) => {
    console.log(newNote);

    setNotes([...notes, { ...newNote, id: notes.length + 1 }]);
  }

  return (
    <div>
      <NotesList notes={notes} />
      <NewNoteForm functionThatSavesNotes={savesNote} />
    </div>
  )
}

export default NotesManager;