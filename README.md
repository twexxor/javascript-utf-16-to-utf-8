# UTF-16 to UTF-8
## Description
Convert UTF-16 to UTF-8 encoding for an array of numbers client-side in the browser and server-side in Node.js.

## Code Example
The following code demonstrates an example implementation in Node.js with the test.js file included in this package.

``` javascript
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
```

To run the code example in Node.js, execute the following command.

``` console
node test
```

## Purchase
[EntroCraft](https://entrocraft.com/) maintains this open-source package with the permissive MIT license.

It's provided as a convenient evaluation tool for the [premium UTF-16 to UTF-8 library written in C](https://entrocraft.com/dungeon/character-encoding-algorithms/utf-16-to-utf-8/).

Converting code in this package from JavaScript to C is discouraged and subject to [purchasing a license](https://entrocraft.com/dungeon/character-encoding-algorithms/utf-16-to-utf-8/#license) for the premium library in C.

Developers who don't use the C programming language can still [purchase credits](https://entrocraft.com/pricing/) and learn C to become better JavaScript developers and support package maintenance.
