/**
 * 配列に追加する
 *
 * 配列aの最後にbを追加した新しい配列resultを作ってください。
 * ただし、配列aを変更してはいけません。
 */

// 元データ
const a = [1, 2, 3];
const b = 4;

// この下にコードを書く
const result = [];

// ここまで。この下は編集しない

// テストコード
test("01", () => {
  expect(a).toEqual([1, 2, 3]);
  expect(result).toEqual([1, 2, 3, 4]);
});
