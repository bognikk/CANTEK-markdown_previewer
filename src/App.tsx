import Header from './components/Header'
import Guide from './components/Guide'
import './App.css'

function App() {

  const onToggleGuide = () => {
    console.log('ontoggle')
  }

  return (
    <>
      <Header onToggleGuide={onToggleGuide} />
      <Guide />
    </>
  )
}

export default App