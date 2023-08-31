import Header from './components/Header'

import './App.css'

function App() {

  const onToggleGuide = () => {
    console.log('ontoggle')
  }

  return (
    <>
      <Header onToggleGuide={onToggleGuide}/>
    </>
  )
}

export default App