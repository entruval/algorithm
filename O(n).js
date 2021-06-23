function search(value, list) {
  let found = false,
      position = -1,
      index = 0

  while (!found && index < list.length) {
    if (list[index] == value) {
      found = true
      position = index
    }
    else { index += 1 }
  }

  return position
}

