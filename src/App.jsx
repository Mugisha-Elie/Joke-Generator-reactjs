import './index.css'
import Joke from './components/Joke'

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-10 rounded shadow-lg w-[70%] flex flex-col items-center justify-start gap-7">
        <h1 className="font-semibold text-2xl ">Joke generator from JokeAPI</h1>
        <Joke />
      </div>
    </div>
  )
}

export default App;
