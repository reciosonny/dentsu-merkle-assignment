import { StaticImageData } from "next/image";
import { IAuthor } from "./IAuthor";

export type IArticle = {
    id: number;
    title: string;
    desc?: string;
    url: string;
    timestamp: string;
    score: number;
    /**
     * Dummy image URL
     */
    image: string | StaticImageData;
    author: IAuthor;
}