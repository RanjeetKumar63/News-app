import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2024-06-06&apiKey=8971cfddd1fe4c5f80d6530ea7595389`
    )
      .then((response) => response.json())
      .then((news) => {
        console.log(news.articles);
        setArticles(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  console.log(articles);
  return (
    <div className="App">
      <header className="header">
        <h1>News App</h1>
        <input
          type="text"
          onChange={(event) => {
            if (event.target.value !== "") {
              setCategory(event.target.value);
            } else {
              setCategory("india");
            }
          }}
          placeholder="Search News"
        />
      </header>
      <section className="news-articles">
        {articles.length !== 0 ? (
          articles.map((article) => {
            return <News article={article} />;
          })
        ) : (
          <h3>No News Found For Searched Text</h3>
        )}
      </section>
    </div>
  );
}

export default App;
