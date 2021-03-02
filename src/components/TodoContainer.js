import TodoItem from './TodoItem';

const TodoContainer = ({ data, setData }) => (
  <div id="todo-container">
    {data.map((item, index) => (
      <TodoItem
        key={index}
        id={item.id}
        title={item.title}
        text={item.text}
        data={data}
        setData={setData}
      />
    ))}
  </div>
);

export default TodoContainer;
