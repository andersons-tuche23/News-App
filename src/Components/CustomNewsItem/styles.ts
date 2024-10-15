import styled from 'styled-components';

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
