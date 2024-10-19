import axios from 'axios';

const API_KEY = 'f2697308046055bda7d58db7a532f25f'; 
const BASE_URL = 'https://gnews.io/api/v4';

export const fetchNews = async (query = 'tesla', from = '2024-10-17') => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                q: query,
                from: from,
                token: API_KEY, 
                lang: 'en',
                max: 10 
            }
        });

        const uniqueTitles = new Set();
        
        const uniqueArticles = response.data.articles.filter(article => {
            if (!uniqueTitles.has(article.title)) {
                uniqueTitles.add(article.title); 
                return true; 
            }
            return false; 
        });

        return uniqueArticles.map(article => ({
            title: article.title,
            description: article.description,
            url: article.url,
            image: article.image, 
            publishedAt: article.publishedAt,
            source: article.source.name
        }));
    } catch (error) {
        console.error('Erro ao buscar notícias:', error.message);
        return [];
    }
};
