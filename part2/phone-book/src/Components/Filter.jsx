
export const Filter = ({ onChange, filterText }) => {
    return (
        <input type='text' placeholder='Filter the text' onChange={onChange} value={filterText} />
    );
};
