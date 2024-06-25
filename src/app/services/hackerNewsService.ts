import { IArticle } from "../types/IArticle";

const topStoriesAPI = async () => {
    const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    const data = await response.json();

    // console.log('topStoriesAPI', data)
    return data;
};

const getStory = async (id: string): Promise<IArticle> => {
    const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const data = await response.json();

    const responseAuthor = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${data.by}.json`
    );
    const dataAuthor = await responseAuthor.json();

    const { title, time, url, score } = data;
    const { id: authorId, karma } = dataAuthor;

    return {
        title: title,
        url: url,
        score: score,
        timestamp: time,
        author: { id: authorId, karma: karma },
    } as IArticle;
};

export async function hackerNewsAPI() {
    const topStoriesData = await topStoriesAPI();
    const result: IArticle[] = await Promise.all(
        topStoriesData
            .slice(0, 10)
            .map((id: string, idx: number) => getStory(id))
    );

    return result;
}
