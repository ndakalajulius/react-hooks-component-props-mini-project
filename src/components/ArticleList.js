import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    console.log(posts);
    return (
        <main>
            { posts.map((post, id) => 
            <Article key={id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
            ) }
        </main>
    )
}

export default ArticleList;