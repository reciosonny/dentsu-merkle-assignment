import Image from "next/image";
import styles from "./page.module.css";
import TopArticle from "@/app/components/TopArticle";

export default function Home() {
    return (
        <main>
            <TopArticle />
            <h1>What Game of Thrones did to the media?</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quidem a! Voluptatibus ipsam corporis quasi sequi doloremque. Excepturi aperiam possimus in sed dolore, nostrum officia eligendi dicta odit voluptatem obcaecati.</span>
        </main>
    );
}
