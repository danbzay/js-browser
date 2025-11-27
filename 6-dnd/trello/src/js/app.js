const storage = JSON.parse(localStorage.getItem('trello'))  || [[],[],[]];

const columns = [...document.querySelectorAll('.column')];
let dropSource;
const dropTarget = document.createElement('li');
dropTarget.classList.add('drop-target');
dropTarget.addEventListener('dragover', ev => ev.preventDefault()); 

//show place for drop
const dragOverHandler = ev => 
    ev.target.parentElement.insertBefore(dropTarget, ev.target);

//drop card
const dropHandler = ev => {
  [cs, is] = ev.dataTransfer.getData('text').split(',').map(s => Number(s));
  let ct = columns.indexOf(dropTarget.parentElement);
  let it = [...dropTarget.parentElement.children].indexOf(dropTarget);
  dropTarget.parentElement.insertBefore(dropSource, dropTarget);
  storage[cs].splice(is - 1, 1);
  storage[ct].splice(it - 1, 0, dropSource.innerText);
};

//recreating stored cards
for (let i = 0; i < storage.length; i++) {
  storage[i].forEach(content => createCard(content, i, false));
}

//adding another card
const addCardHandler = ev => {
  ev.target.removeEventListener('click', addCardHandler);
  ev.target.innerHTML = `
    <textarea name="card-input" rows="3" required 
      placeholder="Enter a title for this card..."></textarea>
    <button type="button">Add Card</buton>`;
  ev.target.lastElementChild.addEventListener('click', () => {
    //do some replacement for safety
    let content = ev.target.firstElementChild.value.replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    createCard(content, ev.target.parentElement);  
    ev.target.innerHTML = '+ Add another card';
    ev.target.addEventListener('click', addCardHandler);
  });
};

//doing some initialization
document.querySelectorAll('.add').forEach(li => {
  li.addEventListener('click', addCardHandler);
  li.addEventListener('dragover', dragOverHandler);
});

//creating card from content in column
function createCard(content, columnIndex, store=true) {
  columnIndex = typeof columnIndex === 'number' ? 
    columnIndex : columns.indexOf(columnIndex);
  const li = document.createElement('li');
  columns[columnIndex].insertBefore(li, columns[columnIndex].lastElementChild);
//deleting card 
  li.innerHTML = content.replace(/\n/g, '<br>') +
    '<div class="delete">&#x2A2F;</div>';
  li.querySelector('.delete').addEventListener('click', ev => {
    storage[columnIndex]
      .splice([...li.parentElement.children].indexOf(li) - 1, 1);
    localStorage.setItem('trello', JSON.stringify(storage));
    li.remove();
  });
  li.addEventListener('dragover', dragOverHandler);
  li.setAttribute('draggable', true);
//dragging start
  li.addEventListener('dragstart', ev => {
    dropSource = li;
    dropSource.classList.add('dragged');
    ev.dataTransfer.setData('text', columnIndex + ',' + 
      [...dropSource.parentElement.children].indexOf(dropSource));
    console.log(ev.dataTransfer.getData('text'));
    dropTarget.style.height = dropSource.offsetHeight + 'px'; 
    dropTarget.addEventListener('drop', dropHandler);
    dropSource.addEventListener('dragend', () => {
      dropSource.classList.remove('dragged');
      dropTarget.removeEventListener('drop', dropHandler);
      dropTarget.remove();
    });
  });
//storing card
  if (store) {
    storage[columnIndex].push(li.firstChild.innerText);
    localStorage.setItem('trello', JSON.stringify(storage));
  }
};

