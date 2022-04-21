/**
 * 配列を2つづつの配列にまとめる
 *
 * 配列aの値を2つづつ配列にまとめた新しい配列resultを作ってください。
 * 余ったら最後の配列の数は少なくて構いません
 * ただし、配列aは変更してはいけません。
 */

// 元データ
const a = [1, 2, 3, 4, 5, 6, 7];

// この下にコードを書く
const length = Math.ceil(a.length / 2);
const result = new Array(length)
  .fill()
  .map((_, i) => a.slice(i * 2, (i + 1) * 2));

// ここまで。この下は編集しない

// テストコード
test("05", () => {
  expect(a).toEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(result).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
});
