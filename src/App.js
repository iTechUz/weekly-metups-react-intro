import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text='Master React' />
      <Todo text="Explore The full React course" />
      <Modal/>
      <Backdrop/>

    </div>
  );
}

export default App;