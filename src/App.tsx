import { useState } from "react";
import Header from './components/Header'
import Guide from './components/Guide'
import Input from './components/Input'
import './App.css'

import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
 margin-top: 20px;
  width: calc(80% - 40px);
  padding: 0 20px;
`;

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const onToggleGuide = () => {
    setShowGuide(!showGuide)
  }

  const handleChange = (value: string) => {
    setMarkdown(value)
  }

  return (
    <>
      <Header onToggleGuide={onToggleGuide} />
      <FlexContainer>
        {showGuide && <Guide />}
        <Container>
          <Input onChange={handleChange} value={markdown} />
        </Container>
      </FlexContainer>
    </>
  )
}

export default App