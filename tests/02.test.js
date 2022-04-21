/**
 * 配列から削除する
 *
 * 配列aの最後の要素を削除した新しい配列resultを作ってください。
 * 削除した最後の要素はdeletedItemに入れてください。
 * ただし、配列aを変更してはいけません。
 */

// 元データ
const a = [1, 2, 3, 4];

// この下にコードを書く

const result = a.slice(0, -1);
const deletedItem = a[a.length - 1];

// ここまで。この下は編集しない

// テストコード
test("02", () => {
  expect(a).toEqual([1, 2, 3, 4]);
  expect(result).toEqual([1, 2, 3]);
  expect(deletedItem).toBe(4);
});
