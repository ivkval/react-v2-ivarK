const TodoItem = ({ title, text, data, setData, id }) => {
  const deleteTodo = (e) => {
    setData(data.filter((item) => item.id !== Number(e.target.id)));
  };

  return (
    <article className="card">
      <header>
        <h3 className="card-title">{title}</h3>
      </header>
      <p className="card-text">{text}</p>
      <button className="card-btn" type="button" id={id} onClick={deleteTodo}>
        Complete
      </button>
    </article>
  );
};
export default TodoItem;
