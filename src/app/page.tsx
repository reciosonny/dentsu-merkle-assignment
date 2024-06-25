import Article from "@/app/components/Article";
import FeaturedArticle from "./components/FeaturedArticle";
import { IArticle } from "./types/IArticle";
import { hackerNewsAPI } from "./services/hackerNewsService";

export default async function Home() {
    const data = await hackerNewsAPI();

    const featuredArticle: IArticle = data[0];

    return (
        <main className="home">
            {/* TODO: Top article is displayed here */}
            <FeaturedArticle {...featuredArticle} id={0} />

            {/* List of articles go here. */}
            <div className="article-container">
                <h1>Top Stories</h1>

                <div className="article-content">
                    {data.slice(1).map((i, idx) => (
                        <Article
                            key={idx}
                            id={idx+1}
                            title={i.title}
                            image={i.image}
                            score={i.score}
                            timestamp={i.timestamp}
                            url={i.url}
                            author={i.author}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
