'use strict';
const inputEl = document.getElementById('input');

const listEl = document.getElementById('list-container');

const btnEl = document.getElementById('btn');

btnEl.addEventListener('click', function () {
  if (inputEl.value === '') {
    alert('You must Add your Notes');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputEl.value;
    listEl.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputEl.value = null;
  saveData();
});

listEl.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
});
function saveData() {
  localStorage.setItem('data', listEl.innerHTML);
}

function showData() {
  listEl.innerHTML = localStorage.getItem('data');
}
showData();
