
import './App.css'
import ModalConfetti from './components/ModalConfetti'
import CustomConfetti from './components/CustomConfetti'
import ResizableConfetti from './components/ResizableConfetti'
import TriggeredConfetti from './components/TriggeredConfetti'
import ConfettiExample from './components/ConfettiExample'

function App() {

  return (
   <div>
    <ConfettiExample/>
    <TriggeredConfetti/>
    <CustomConfetti/>
    <ResizableConfetti/>
    <ModalConfetti show={true}/>
   </div>
  )
}

export default App
