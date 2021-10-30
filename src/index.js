
// 追加buttonの機能(event)を書く
const onClickAdd = () => {
  // 入力した内容を取得
  const inputText = document.querySelector("#add-text").value;

  // 未入力の場合はalertの表示
  if (inputText.length === 0) {
    alert("文字を入力してください。");
  } else {
    // inputエリアを初期値に戻す
    document.querySelector("#add-text").value = "";

    // create todo
    createTodoList(inputText);

  }
}

document.querySelector("#add-btn").addEventListener("click", () =>  onClickAdd());

// 未完了リストから指定の要素を削除
const deleteFromTodoList = (target) => {
  document.querySelector("#todo-list").removeChild(target);
};

// function that add list to todo-list
const createTodoList = (text) => {
  // Create Element and add text
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = text;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了ボタンに機能(Event)を追加する
  completeButton.addEventListener("click", () => {

    // 先祖要素を取得
    const deleteTarget = completeButton.parentNode.parentNode;

    // 先祖要素をto do listから削除
    deleteFromTodoList(deleteTarget);

    // 親要素を取得 必要要素の抜き出し、追加、作成
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const p = document.createElement("p");
    p.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    const li = document.createElement("li");

    // backButtonへ戻す機能(Event)を追加
    backButton.addEventListener("click", () => {
      // complete-listから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.querySelector("#complete-list").removeChild(deleteTarget);

      // todo-listへ追加
      // document.querySelector("#todo-list").appendChild(deleteTarget);
      // const completeButton = deleteTarget.childNodes[0].childNodes[1].innerText = "完了"
      // const deleteButton = document.createElement("button");
      // deleteButton.innerText = "削除";
      // deleteTarget.childNodes[0].appendChild(deleteButton);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createTodoList(text);
    });

    // complite-listへ追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);
    document.querySelector("#complete-list").appendChild(li);
  });

  // 削除(deleteButton)の作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 削除(deleteButton)に機能を加える
  deleteButton.addEventListener("click", () => {
    const result = window.confirm("本当に削除しても大丈夫ですか？");
    if (result) {
      // deleteButtonの先祖要素を取得し、削除する
      const deleteTarget = deleteButton.parentNode.parentNode;
      deleteFromTodoList(deleteTarget);
    }
  });

  // 作成したElement(createElement)を配下に置いていく。
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // todo-listに新規作成したtodoを追加する
  document.querySelector("#todo-list").appendChild(li);
};
