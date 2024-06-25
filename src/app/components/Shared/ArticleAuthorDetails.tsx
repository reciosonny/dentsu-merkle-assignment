import { IAuthor } from "@/app/types/IAuthor";
import { StaticImageData } from "next/image";
import React from "react";

type IArticleAuthorDetails = { 
    author: IAuthor;
    timestamp: string;
}

const ArticleAuthorDetails: React.FC<IArticleAuthorDetails> = ({ author: { id, karma }, timestamp }) => {


    return (
        <div className="article-details">
            <span className="article-details__author">{id}</span>
            <span className="article-details__author-karma">({karma} karma)</span>
            <div className="article-details__gap"></div>
            <span className="article-details__timestamp">Jun 24, 2024</span>
        </div>
    );
};

export default ArticleAuthorDetails;
