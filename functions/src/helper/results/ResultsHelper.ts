import { CardProps } from "../../model/card/CardProps";

const getResults = <T>(items: T[], mapper: (i: T) => CardProps, query: string) => ({
    id: "results",
    title: `Results of "${query}"`,
    cards: items.map(mapper),
    isGrid: true
});

export default getResults;