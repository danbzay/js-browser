const storage = JSON.parse(localStorage.getItem('trello')) 
  || {maxId: 0, cards: []};


const columns = [...document.querySelectorAll('.column')];
//render cards from storage
storage.cards.forEach(card => { 
  addCard(card.id);
  moveCard(card.col, card.row);
}
 
function addCard(content, id=null)
  id ||= ++maxId; 
  const li = document.createElement('li');
  li.outerHTML = '<li data-id="' + id + '">' + content +  
    '<div class="delete">&#x2A2F;</div>i</li>';
  li.querySelector('.delete').addEventListener('click', () => {
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
    //dropSource.classList.add('dragged');
    //ev.dataTransfer.setData('text', columnIndex + ',' + 
    //  [...dropSource.parentElement.children].indexOf(dropSource));
    //console.log(ev.dataTransfer.getData('text'));
    dropTarget.style.height = dropSource.offsetHeight + 'px'; 
    dropTarget.addEventListener('drop', dropHandler);
    dropSource.addEventListener('dragend', () => {
      //dropSource.classList.remove('dragged');
      dropTarget.removeEventListener('drop', dropHandler);
      dropTarget.remove();
    });
  });


let dropSource;
const dropTarget = document.createElement('li');
dropTarget.classList.add('drop-target');
dropTarget.addEventListener('dragover', ev => ev.preventDefault()); 

//show place for drop
const dragOverHandler = ev => 
    ev.target.parentElement.insertBefore(dropTarget, ev.target);

//drop card
const dropHandler = () => {
  let sourceColumn = columns.indexOf(dropSource.parentElement);
  let sourceRow = [...dropSource.parentElement.chldren].indexOf(dropSource);
  let targetColumn = columns.indexOf(dropTarget.parentElement);
  let targetRow = [...dropTarget.parentElement.chldren].indexOf(dropTarget);

  dropTarget.parentElement.insertBefore(dropSource, dropTarget);
  storage[sourceColumn].splice(sourceRow - 1, 1);
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
//storing card
  if (store) {
    storage[columnIndex].push(content);
    localStorage.setItem('trello', JSON.stringify(storage));
  }
};

