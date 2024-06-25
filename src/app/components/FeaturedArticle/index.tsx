import { IArticle } from "@/app/types/IArticle";
import React from "react";
import ArticleAuthorDetails from "../Shared/ArticleAuthorDetails";
import Image from "next/image";

import imgSample from '@/app/assets/img/0.jpg';
import { getDomainName } from "@/app/utils/parseUrl";

const FeaturedArticle: React.FC<IArticle> = ({
    author,
    desc,
    image,
    score,
    timestamp,
    title,
    url,
}) => {

    const domain = getDomainName(url);

    return (
        <article className="featured-article">
            <div className="featured-article__img">
                <Image src={imgSample} alt={title} />
                <div className="featured-article__img-overlay"></div>
            </div>

            <div className="featured-article__content">
                <a href={url}><h1>{title}</h1></a>
                <div className="featured-article__origin">
                    <a href={url}>({domain})</a> ({score} points)
                </div>
                <p className="featured-article__desc">{desc}</p>
                <ArticleAuthorDetails author={author} timestamp="June 24, 2024" />
            </div>
        </article>
    );
};

export default FeaturedArticle;
