/**
 * 配列から重複を除く
 *
 * 配列aには重複した値が入っています。重複を除いた新しい配列resultを作ってください
 * ただし、配列aは変更してはいけません。
 */

// 元データ
const a = [1, 1, 2, 1, 3, 5, 3, 2];

// この下にコードを書く
const result = a.filter(
  (element, index, array) => array.indexOf(element) === index
);

// ここまで。この下は編集しない

// テストコード
test("04", () => {
  expect(a).toEqual([1, 1, 2, 1, 3, 5, 3, 2]);
  expect(result).toEqual([1, 2, 3, 5]);
});
