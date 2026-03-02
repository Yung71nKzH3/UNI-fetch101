/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

//Question 1
async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}

//Question 2
async function showList(elem, url) {
  const response = await fetch(url);
  const content = await response.json();
  content.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    elem.appendChild(li);
  });
}

//Question 3 - No way xD
async function startShowingMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
  setInterval(() => {
    showMessage(elem, url);
  }, 1000);
}

//Question 4
async function handleError(elem, url) {
  let content;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Validation Error! Status: ${response.status}`);
    }
    content = await response.text();
  } catch (error) {
    content = 'OH DEAR';
  }
  elem.textContent = content;
}

//Question 5
async function drawBox(canvas, url) {
  const ctx = canvas.getContext('2d');
  const response = await fetch(url);
  const content = await response.json();
  ctx.fillStyle = 'black';
  ctx.fillRect(content.x, content.y, 10, 10);

  setInterval(async () => {
    const response = await fetch(url);
    const content = await response.json();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(content.x, content.y, 10, 10);
  }, 1000);
}