import './index.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Todos from './components/Todos';
import TodoContainer from './components/TodoContainer';

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Form data={data} setData={setData} />
        <Todos>
          <h1>My Todos</h1>
          <TodoContainer data={data} setData={setData} />
        </Todos>
      </Main>
    </>
  );
}

export default App;
