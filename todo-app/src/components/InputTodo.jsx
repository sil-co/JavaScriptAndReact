import React from 'react';

const style = {
  backgroundColor: '#c1ffff',
  width: 400,
  height: 30,
  padding: 8,
  margin: 8,
  borderRadius: 8,
};

const InputTodo = (props) => {

  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div style={style}>
      <input disabled={disabled} placeholder="ToDoを入力" value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  );
};



export default InputTodo;
