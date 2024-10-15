import React from 'react';
import { NewsItemContainer, Image, Title, Description, ReadMoreLink } from './styles';

interface NewsItemProps {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, description, url, urlToImage }) => (
  <NewsItemContainer>
    {urlToImage && <Image src={urlToImage} alt={title} />}
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ReadMoreLink href={url} target="_blank">Read more</ReadMoreLink>
  </NewsItemContainer>
);

export default NewsItem;
