/**
 * asynchronousfunc.js
 * 非同期処理の関数
 * userIDがundefinedになる
 */

import fetch from "node-fetch";

// 非同期処理をおこなう関数を宣言
// タスクキューに登録されるため、コールスタックのconsole.logが出力されてからこの関数が実行される
const getGitUsername = () => {
  const url = "https://api.github.com/users/deatiger";

  // GitHub APIをFetchメソッドで実行
  //resにはfetchで返ってきた値が入る
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log("これは非同期処理成功時のメッセージです");
      return json.login;
    })
    .catch((error) => {
      console.error("これは非同期処理失敗時のメッセージです。", error);
      return null;
    });
};

const message = "GitのユーザーIDは";

/**
 * 先にconsole.logの処理を実施してからgetGitUsernameが実行されるので、usernameはundefinedになる
 * usernameには上のgetGitUsernameのjson.loginの値が入る
 */
const username = getGitUsername();
console.log(message + username);
