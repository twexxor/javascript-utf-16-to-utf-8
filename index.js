const utf_16_to_utf_8 = function(input, output) {
  let code_unit_1
  let code_unit_2
  let code_point
  let i
  let j
  let is_reverse_byte_order
  let is_valid = true

  if (input.length != 0) {
    i = 0
    j = 0
    is_reverse_byte_order = false

    if (
      input[0] == 0xFEFF ||
      input[0] == 0xFFFE
    ) {
      i++

      if (input[0] == 0xFFFE) {
        is_reverse_byte_order = true
      }
    }

    while (
      is_valid == true &&
      i != input.length
    ) {
      code_unit_1 = input[i]

      if (
        code_unit_1 > -1 &&
        code_unit_1 < 65536
      ) {
        if (is_reverse_byte_order == true) {
          code_unit_1 = (input[i] << 8) + (input[i] >> 8)
        }

        if (
          code_unit_1 > 55295 &&
          code_unit_1 < 57344
        ) {
          if (code_unit_1 < 56320) {
            i++

            if (i != input.length) {
              if (is_reverse_byte_order == true) {
                code_unit_2 = (input[i] << 8) + (input[i] >> 8)
              } else {
                code_unit_2 = input[i]
              }

              if (
                code_unit_2 > 56319 &&
                code_unit_2 < 57344
              ) {
                code_point = ((code_unit_1 & 1023) << 10) + (code_unit_2 & 1023) + 65536
                output[j] = (code_point >> 18) + 240
                code_point &= 262143
                j++
                output[j] = (code_point >> 12) + 128
                j++
                output[j] = ((code_point & 4095) >> 6) + 128
                j++
                output[j] = (code_point & 63) + 128
              } else {
                is_valid = false
              }
            } else {
              is_valid = false
            }
          } else {
            is_valid = false
          }
        } else {
          if (code_unit_1 < 128) {
            output[j] = code_unit_1
          } else {
            if (code_unit_1 < 2048) {
              output[j] = (code_unit_1 >> 6) + 192
              j++
              output[j] = (code_unit_1 & 63) + 128
            } else {
              output[j] = (code_unit_1 >> 12) + 224
              j++
              output[j] = ((code_unit_1 >> 6) & 63) + 128
              j++
              output[j] = (code_unit_1 & 63) + 128
            }
          }
        }
      } else {
        is_valid = false
      }

      i++
      j++
    }
  }

  return is_valid
}

if (
  typeof module != "undefined" &&
  typeof module.exports != "undefined"
) {
  module.exports = utf_16_to_utf_8
}
