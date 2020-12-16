import React, { useState } from "react"
import Article from "../components/Article/Article"

const Articles = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "Projet 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "Projet 2", body: "Quisque cursus, metus vitae pharetra" },
  ])

return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

export default Articles