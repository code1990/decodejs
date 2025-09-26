const fs = require("fs");

// 字典（从你打印的结果复制过来）
const dict = {
  0: "2rvTDbH",
  1: "19142240JTdFjc",
  2: "show",
  3: "body",
  4: "2956118WRRZax",
  5: "appendChild",
  6: "prototype",
  7: "56955ymcRMp",
  8: "error",
  9: "createElement",
  10: "top",
  11: "className",
  12: "__proto__",
  13: "info",
  14: "20556yOMchF",
  15: "openQQBuy",
  16: "acTooltip",
  17: "return (function() ",
  18: "468RMriSg",
  19: "warn",
  20: "12FriCns",
  21: "1173044uyEpGl",
  22: "log",
  23: "6066vPpSKZ",
  24: "2120wmcYOP",
  25: "constructor",
  26: "globalThis",
  27: "remove",
  28: "16100ZTYvJf",
  29: "div",
  30: "innerHTML",
  31: "push",
  32: "addEventListener",
  33: "20px",
  34: "trace",
  35: "bind",
  36: "ac-tooltip ",
  37: "click",
  38: "classList",
  39: "132jaTCfn",
  40: "apply",
  41: "7050oAfOhn",
  42: "console",
  43: "hide",
  44: "getTime",
  45: "length",
  46: "table",
  47: "shift",
  48: "function",
  49: "getElementById",
  50: "style",
  51: "exception",
  52: "toString",
  53: "add",
};

let code = fs.readFileSync("result (3).js", "utf8");

// 替换 r(数字)
code = code.replace(/r\((\d+)\)/g, (m, p1) => {
  const val = dict[p1];
  return val !== undefined ? val : m;
});

fs.writeFileSync("clean.js", code, "utf8");
console.log("✅ 已输出 clean.js");
