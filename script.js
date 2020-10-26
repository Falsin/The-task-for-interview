let theFirstBlock = document.getElementById('theFirstBlock');
let theSecondBlock = document.getElementById('theSecondBlock');
let input = document.querySelector('input');
let isChanged = false;

input.addEventListener('mousedown', makeСhanges)

function makeСhanges() {
  isChanged = (!isChanged) ? true : false;

  makeTheFirstBlock(isChanged);
  makeTheSecondBlock(isChanged);
  makeInput(isChanged);
}

function makeTheFirstBlock(value) {
  if (isChanged) {
    return theFirstBlock.style.background = 'yellow';
  }
  return theFirstBlock.style.background = 'red';
}

function makeTheSecondBlock(value) {
  if (isChanged) {
    return theSecondBlock.style.display = 'none';
  }
  return theSecondBlock.style.display = 'block';
}

function makeInput(value) {
  if (isChanged) {
    return input.value = 'Отменить';
  }
  return input.value = 'Изменить';
}