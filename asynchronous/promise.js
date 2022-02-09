import fetch from "node-fetch";

// 非同期処理をおこなう関数を宣言
const getGitUsername = () => {
  return new Promise((resolve, reject) => {
    const url = "https://api.github.com/users/kobakichi";

    // GitHub APIをFetchメソッドで実行
    //resにはfetchで帰ってきた値が入り、res.jsonでjson形式に変換している。
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log("これは非同期処理成功時のメッセージです");
        //fetchが成功したらresolveの中にjson形式のloginの値を返す
        return resolve(json.login);
      })
      .catch((error) => {
        console.error("これは非同期処理失敗時のメッセージです。", error);
        return reject(null);
      });
  });
};

const message = "GitのユーザーIDは";
//usernameには上のfetchで取得したjson.loginの値が入ってくる
getGitUsername().then((username) => {
  console.log(message + username);
});
