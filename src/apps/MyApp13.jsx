const a = "hello";
const b = 3.14;
const c = "world";
const d = 9.99;
const f = "harris";

// export { a };
// export { b };

// named export
export { a, b, f };

// default export (unnamed) (이름이 없음 그래서 아무거나 써도 됨)
// 파일내에 하나만 존재함
// export default c;
export default "안녕";
