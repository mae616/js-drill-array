/**
 * 配列を繋げる
 *
 * 配列aとbを繋げた新しい配列resultを作ってください。
 * ただし、配列aもbも変更してはいけません。
 */

// 元データ
const a = [1, 2, 3];
const b = [4, 5, 6];

// この下にコードを書く
const result = [...a, ...b];

// ここまで。この下は編集しない

// テストコード
test("03", () => {
  expect(a).toEqual([1, 2, 3]);
  expect(b).toEqual([4, 5, 6]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});
