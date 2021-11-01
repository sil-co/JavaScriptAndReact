import React from 'react';

export const CompleteTodos = (props) => {
  const { compTodos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {compTodos.map((compTodo, index) => {
          return (
            <li key={index}>
              <div className="list-row">
                <p>{compTodo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
