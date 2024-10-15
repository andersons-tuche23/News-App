import React from 'react';

import { FilterContainer, CategoryButton } from './styles';

type CategoryFilterProps = {
    selectedCategory: string; 
    onSelectCategory: (category: string) => void; 
};

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
    return (
        <FilterContainer>
            {categories.map((category) => (
                <CategoryButton 
                    key={category} 
                    onClick={() => onSelectCategory(category)}
                    isSelected={selectedCategory === category} 
                >
                    {category}
                </CategoryButton>
            ))}
        </FilterContainer>
    );
};

export default CategoryFilter;
