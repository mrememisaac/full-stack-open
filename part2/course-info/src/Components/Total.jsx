
export const Total = ({ parts }) => {
    console.log(parts);

    const count = parts.reduce((accumulator, part) => {
        part.exercises !== undefined ? accumulator = accumulator + part.exercises : accumulator;
        return accumulator;
    }, 0);
    return <p style={{ fontWeight: "bolder" }}> total of {count} exercises</p >;
};
