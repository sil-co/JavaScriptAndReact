import React from 'react';

const TodoLists = (props) => {

  const { todoLists, onClickDelete, onClickComp } = props;

  return (
    <div className="todo-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {/* map関数の第二引数には何番目の要素か受け取ることができる */}
        {todoLists.map((todo, index) => {
          return (
            <li key={index}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComp(index)}>完了</button>
                {/* onClickDelete(index)と書いてしまうとレンダリングのタイミングで関数が実行される
                    よってcallback関数を設定することで回避 */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoLists;
