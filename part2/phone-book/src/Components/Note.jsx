export const Note = ({ note }) => {
    return (<div> {note.id} - {note.content} {note.important ? ' - !' : ''}</div>)
}