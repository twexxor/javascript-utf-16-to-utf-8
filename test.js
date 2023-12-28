const utf_16_to_utf_8 = require("./index.js")
const input = [0xFEFF, 0x2764, 0xFE0F, 0x0001, 0x0002, 0x0003, 0x00A9]
const output = []
let i = 0

if (utf_16_to_utf_8(input, output) == true) {
  while (i != output.length) {
    console.log("0x" + output[i].toString(16).toUpperCase().padStart(2, "0"))
    i++
  }
} else {
  console.log("invalid")
}
