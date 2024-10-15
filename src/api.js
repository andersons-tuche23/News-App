import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (query = 'tesla', from = '2024-09-15', sortBy = 'publishedAt') => {
    try {
        const response = await axios.get(`${BASE_URL}/everything`, {
            params: {
                q: query,        
                from: from,      
                sortBy: sortBy,  
                apiKey: API_KEY  
            }
        });
        return response.data.articles; 
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        return [];
    }
};
