const cards = new Map(JSON.parse(localStorage.getItem('trello')));
let maxId = Math.max([...cards.keys()]);
const saveCards = () => localStorage.setItem('trello', 
  JSON.stringify([...cards.entries()])); 

const columns = [...document.querySelectorAll('.cards')];

//prepare place to drop 
const dropTarget = document.createElement('li');
dropTarget.classList.add('drop-target');
dropTarget.addEventListener('dragover', ev => ev.preventDefault()); 

const dragOverHandler = ev =>   
    ev.target.parentElement.insertBefore(dropTarget, ev.target);
  
//drop card
const dropHandler = ev => {
  let id = Number(ev.dataTransfer.getData('text'));
  let targetColumn = columns.indexOf(dropTarget.parentElement);
  let targetRow = [...dropTarget.parentElement.children].indexOf(dropTarget);
  dropTarget.parentElement.insertBefore(
    document.querySelector('[data-id="' + id + '"]'), dropTarget);
  cards.set(id, {...cards.get(id), column: targetColumn, row: targetRow});
  saveCards();
};

//adding another card
const addCardHandler = ev => {
  ev.target.removeEventListener('click', addCardHandler);
  ev.target.innerHTML = 
   `<textarea name="card-input" rows="3" required 
      placeholder="Enter a title for this card..."></textarea>
    <button type="button">Add Card</buton>`;
  ev.target.lastElementChild.addEventListener('click', () => {
    //do some replacement for safety
    let content = ev.target.firstElementChild.value.replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    addCard({id: null, content: content, 
      column: columns.indexOf(ev.target.parentElement), 
      row: ev.target.parentElement.children.length - 1
    });  
    ev.target.innerHTML = '+ Add another card';
    ev.target.addEventListener('click', addCardHandler);
    ev.target.addEventListener('dragover', dragOverHandler);
  });
};

document.querySelectorAll('.add').forEach(li => {
  li.addEventListener('click', addCardHandler);
  li.addEventListener('dragover', dragOverHandler);
});

//render cards from storage
[...cards.values()].sort((a, b)  => Number(a.row) - Number(b.row))
  .forEach(card => addCard(card, false));

function addCard(card, store=true) {
  card.id ||= ++maxId; 
  const li = document.createElement('li');
  li.dataset.id = card.id;
  li.innerHTML = card.content + '<div class="delete">&#x2A2F;</div>';
  //place
  columns[card.column].children[card.row]
    .insertAdjacentElement('beforebegin', li);
  //store
  if (store) {
    cards.set(card.id, card);  
    saveCards();
  }
  //delete
  li.querySelector('.delete').addEventListener('click', () => {
    cards.delete(card.id, card);
    li.remove();
    saveCards();
  });
  li.addEventListener('dragover', dragOverHandler);
  li.setAttribute('draggable', true);
  //dragging start
  li.addEventListener('dragstart', ev => {
    ev.dataTransfer.setData('text', card.id);
    dropTarget.style.height = li.offsetHeight + 'px'; 
    dropTarget.addEventListener('drop', dropHandler);
    li.classList.add("dragged");
    li.addEventListener('dragend', () => {
      dropTarget.removeEventListener('drop', dropHandler);
      dropTarget.remove();
      li.classList.remove("dragged");
    });
  });
}

