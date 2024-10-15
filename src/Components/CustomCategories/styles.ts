import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const CategoryButton = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? '#0070f3' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : '#0070f3')};
  border: 1px solid #0070f3;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #005bb5;
    color: white;
  }
`;
