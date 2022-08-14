import { ImageProps } from "../image/ImageProps";

export interface ItemProps {
    id?: number;
    category?: string;
    title: string;
    info?: string;
    poster: ImageProps;
    path: string;
}

export interface ListProps {
    title?: string;
    items: ItemProps[];
}

export interface WatchlistProps {
    lists: ListProps[];
}
