import React, { useEffect, useState } from "react";
import { fetchNews } from "../../api";
import CategoryFilter from "../CustomCategories";
import NewsItem from "../CustomNewsItem";
import {
  NewsListContainer,
  ArticlesContainer,
  CategoryFilterContainer,
} from "./style";

interface Article {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<string>("general");

  const getNews = async () => {
    const news = await fetchNews(category);
    setArticles(news);
  };

  useEffect(() => {
    getNews();
  }, [category]);

  return (
    <NewsListContainer>
      <CategoryFilterContainer>
        <CategoryFilter
          selectedCategory={category}
          onSelectCategory={setCategory}
        />
      </CategoryFilterContainer>
      <ArticlesContainer>
        {articles.map((article) => (
          <NewsItem
            key={article.url}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.image}
          />
        ))}
      </ArticlesContainer>
    </NewsListContainer>
  );
};

export default NewsList;
