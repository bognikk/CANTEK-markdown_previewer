import styled from 'styled-components';
import List from './UI/List';

const Guide = styled.div`
  background-color: #444;
  padding: 10px;
  width: 20%;
  border-radius: 4px;
  margin-top: 20px;
  color: #f7f7f7;
  font-weight: 700;

  ul {
    list-style: none;
    li {
      text-decoration: none;
    }
  }
`;

const MarkdownGuide = () => {
  const markdownSyntaxes = [
    { item: '# Header 1' },
    { item: '## Header 2' },
    { item: '### Header 3' },
    { item: '**bold text**' },
    { item: '*italicized text*' },
    { item: '> blockquote' },
    { item: '1. First item' },
    { item: '2. Second item' },
    { item: '3. Third item' },
    { item: '- First item' },
    { item: '- Second item' },
    { item: '- Third item' },
  ];


  return (
    <Guide>
      <h2>Basic Markdown syntaxes</h2>
      <List data={markdownSyntaxes} />
    </Guide>
  );
};

export default MarkdownGuide;
