import styled from 'styled-components';

export const NewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const CategoryFilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const NewsItemContainer = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.2em;
`;

export const Description = styled.p`
  font-size: 0.9em;
  color: #666;
`;

export const ReadMoreLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;
