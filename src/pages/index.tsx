import React from 'react';
import NewList from '../Components/CustomNewList/index';
import { Title } from './styles'; 

const HomePage: React.FC = () => {
    return (
        <div>
            <Title>Últimas Notícias</Title>
            <NewList />
        </div>
    );
};

export default HomePage;
