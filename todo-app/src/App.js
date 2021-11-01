/* eslint react-hooks/exhaustive-deps: off  */

import React, { useState } from 'react';

import "./styles.css";
import InputTodo from './components/InputTodo';
import TodoLists from './components/TodoLists';
import { CompleteTodos } from './components/CompleteTodos';


function App() {

  // inputに入力した値のstate
  const [todoText, setTodoText] = useState('');
  // todolist(未完了リスト)のstate
  const [todoLists, setTodoLists] = useState([]);
  // compList(完了リスト)のstate
  const [compTodos, setCompTodos] = useState([]);

  // input textで変更された値を受け取り保持する。
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  // 追加buttonを押された時 todoListsの配列に内容を追加する
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todoLists, todoText];
    setTodoLists(newTodos);
    setTodoText('');
  };

  // delete function
  const onClickDelete = (index) => {
    const newTodos = [...todoLists];
    // splice 第一引数に配列の何番目を削除するか 第二引数にいくつ削除するかを設定する
    newTodos.splice(index, 1);
    setTodoLists(newTodos);
  };
  // complete function
  const onClickComp = (index) => {
    const newTodos = [...todoLists];
    newTodos.splice(index, 1);
    const newCompTodos = [...compTodos, todoLists[index]];
    setTodoLists(newTodos);
    setCompTodos(newCompTodos);
  };
  // 戻すbutton
  const onClickBack = (index) => {
    const newCompTodos = [...compTodos];
    newCompTodos.splice(index, 1);
    setCompTodos(newCompTodos);
    const newTodoLists = [...todoLists, compTodos[index]];
    setTodoLists(newTodoLists);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={todoLists.length >= 5}
      />
      {todoLists.length >= 5 && <p style={{color: 'red'}}>登録できるデータは5個までです。消化しましょう。</p> }

      <TodoLists todoLists={todoLists} onClickDelete={onClickDelete} onClickComp={onClickComp} />

      <CompleteTodos compTodos={compTodos} onClickBack={onClickBack} />

    </>
  );
};

export default App;

