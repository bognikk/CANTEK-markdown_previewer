import React from 'react';
import styled from 'styled-components';

const MarkdownListContainer = styled.div`
  display: flex;
  justify-content: center;

  ul {
    padding: 0;
    margin: 0;

    li {
      font-size: 18px;
    }
  }
`;

interface listItems {
  item: string;
}

const Table: React.FC<{ data: listItems[] }> = ({ data }) => {
  return (
    <MarkdownListContainer>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.item}</li>
        ))}
      </ul>
    </MarkdownListContainer>
  );
};

export default Table;
