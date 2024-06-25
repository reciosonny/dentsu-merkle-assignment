import { IArticle } from "@/app/types/IArticle";
import React from "react";
import ArticleAuthorDetails from "../Shared/ArticleAuthorDetails";
import Image from "next/image";
import { getDomainName } from "@/app/utils/parseUrl";
import { getImage } from "@/app/utils/getImage";

const Article: React.FC<IArticle> = (props) => {

    const { id, title, desc, url, timestamp, score, image, author } = props;

    const domain = getDomainName(url);
    const img = getImage(id);

    return (
        <article className="article">
            <div className="article__img">
                <Image src={img} alt={title} />
                <div className="featured-article__img-overlay"></div>
            </div>
            <div className="article__contents">
                <a href={url}><h2>{title}</h2></a>
                <div className="article__origin">
                    <a href={url}>({domain})</a> ({score} points)
                </div>
                <ArticleAuthorDetails author={author} timestamp="asasd" />
            </div>
        </article>
    );
};



export default Article;
