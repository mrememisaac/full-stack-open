import { Part } from "./Part";


export const Content = ({ parts }) => {
    const content = parts.map(part => <Part key={part.name} {...part} />);
    return (content);
};
