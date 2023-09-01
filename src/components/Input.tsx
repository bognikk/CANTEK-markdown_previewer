import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface MarkdownInputProps {
  value: string;
  onChange: (value: string) => void;
}

const InputContainer = styled.div`
  
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const MarkdownInput: FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <h2>Markdown Input</h2>
      <TextArea
        value={value}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          onChange(event.target.value)
        }
        placeholder="Enter Markdown text here..."
      />
    </InputContainer>
  );
};

export default MarkdownInput;
