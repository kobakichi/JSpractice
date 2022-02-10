/**
 * returnFunction
 * returnの使い方を理解する
 */

/**
 * 関数定義
 * @param {string} name -名前を入れる-
 */

function getObj(name) {
  //オブジェクトリテラルの作成
  var obj = {
    name: name,
    text: function () {
      console.log("わたしの名前は" + name + "です");
    },
  };
  //渡されたパラメータを適用させた変数objを返す
  return obj;
}
//getObj("小林").text();で"わたしの名前は小林です"が出力される。
console.log(getObj("小林"));

//実行結果=>{ name: '小林', text: [Function: text] }
