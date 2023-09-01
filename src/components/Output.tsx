import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

interface MarkdownOutputProps {
  markdown: string;
}

const OutputContainer = styled.div`
  margin-top: 20px;
  width: calc(100% - 20px);
  padding: 0 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <h2>Converted Markdown</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;