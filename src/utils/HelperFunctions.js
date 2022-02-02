function compareAscOrder(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function compareDscOrder(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
}

function compareAscDate(a, b) {
  if (a.created < b.created) {
    return -1;
  }
  if (a.created > b.created) {
    return 1;
  }
  return 0;
}

function compareDscDate(a, b) {
  if (a.created > b.created) {
    return -1;
  }
  if (a.created < b.created) {
    return 1;
  }
  return 0;
}

export { compareAscDate, compareAscOrder, compareDscDate, compareDscOrder };
