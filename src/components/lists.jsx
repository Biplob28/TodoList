function TodoLists({ inputs, deletetask }) {
  return (
    <div className="list-section">
      <ul>
        {inputs.map((input, index) => (
          <li key={index}>
            {input}
            <button className="deletebtn" onClick={() => deletetask(index)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoLists;
