export const PersonDisplay = ({ person }) => {
    return (
        <>
            <p>{person.id}. {person.name} - {person.phone_number}</p>
        </>
    );
};
