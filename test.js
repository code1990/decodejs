function a() {
  const n = ["mNj2verIsa", "mtKXndiYndbkvgrgAMm", "C2HVDW", "yM9KEq", "mJK1nJeXofDsuLPHEa", "yxbWzw5Kq2HPBgq", "ChjVDg90ExbL", "nty5ntv5Bwnstxa", "zxjYB3i", "y3jLyxrLrwXLBwvUDa", "Dg9W", "y2XHC3noyw1L", "x19WCM90B19F", "Aw5MBW", "mJa1ntz5t01JAey", "B3bLBLfrqNv5", "ywnuB29SDgLW", "CMv0DxjUicHMDw5JDgLVBIGPia", "ndy4uK1YAvnN", "D2fYBG", "mtjgCMLdBNm", "mte3mZa0nhv5rxbhBa", "Bg9N", "nJa2nNzqCfnlwG", "mJeYmhDTy1Lpua", "y29UC3rYDwn0B3i", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "CMvTB3zL", "mtyXmdbAvfL2sMy", "zgL2", "Aw5Uzxjive1m", "ChvZAa", "ywrKrxzLBNrmAxn0zw5LCG", "mJbWEa", "DhjHy2u", "yMLUza", "ywmTDg9VBhrPCca", "y2XPy2S", "y2XHC3nmAxn0", "mtmYAMfuq2zU", "yxbWBhK", "nZa1mg9bzK9OBG", "y29UC29Szq", "AgLKzq", "z2v0vgLTzq", "BgvUz3rO", "DgfIBgu", "C2HPzNq", "zNvUy3rPB24", "z2v0rwXLBwvUDej5swq", "C3r5Bgu", "zxHJzxb0Aw9U", "Dg9tDhjPBMC", "ywrK"];
  return (a = function () {
    return n
  })()
}

// 解码器（跟 r.IMDXwb 一样）
function decode(str) {
  let e = "", t = "";
  let r, o, l = 0, i = 0;
  for (; (o = str.charAt(i++)); ~o && (r = l % 4 ? 64 * r + o : o, l++ % 4)
    ? e += String.fromCharCode(255 & r >> (-2 * l & 6))
    : 0) {
    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
  }
  for (let i = 0; i < e.length; i++) {
    t += "%" + ("00" + e.charCodeAt(i).toString(16)).slice(-2);
  }
  return decodeURIComponent(t);
}

// 跑一遍，生成字典
const dict = a().map(s => decode(s));
dict.forEach((val, i) => {
  // console.log(i, "=>", val);
  console.log(i + ': "' + val + '",');
});