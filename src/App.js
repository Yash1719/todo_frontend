import './App.css';
import Header from "./components/Header";
// import Todoform from './components/Todoform';
import TodoFormComponent from './components/TodoFormComponent';

function App() {
  return (
    <div>
      <Header/>
      {/* <Todoform/> */}
      <TodoFormComponent/>
    </div>
  
  );
}

export default App;
