import './helpdesk.css';


const URL = 'http://localhost:3000';

const tickets = new Map();
//Add or edit ticket form
const ticketForm = document.createElement('form');
ticketForm.classList.add('ticket');
ticketForm.innerHTML = `
  <h1></h1>
  <label for="name">Краткое описание</label><br>
  <input type="text" name="name" required><br>
  <label for="description">Подробное описание</label><br>
  <textarea type="text" name="description" rows="3" required></textarea>
  <button type="button" name="cancel">Отмена</button>
  <button type="submit">ОК</button>`;
// Отмена  
ticketForm.elements.cancel.addEventListener('click', (ev) => {
  ev.preventDefault();
  ticketForm.remove();
});
// ОК
ticketForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  let ticket = {id: ticketForm.dataset.id, 
    name: ticketForm.elements.name.value};
  try {
    const resj = await (await fetch(URL, { 
      method: ticket.id === null ? 'POST' : 'PUT', 
      headers: {'Accept': 'application/json', 
      'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        ticket: ticket,
        description: ticketForm.elements.description.value
      })
    })).json();
    ticket = {...tickets.get(resj.id), ...ticket, ...resj};
    tickets.set(ticket.id, ticket); 
    ticketForm.remove();
    renderTickets();
    console.log('tickets:' + JSON.stringify([...tickets.values()]));
  } catch (error) {
    console.log(error);
  }
});

//Add ticket button
const addBtn = document.querySelector('.add-ticket');
addBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  ticketForm.dataset.id = 'NEW';
  ticketForm.querySelector('h1').textContent = 'Добавить тикет';
  ticketForm.elements.name.value = '';  
  ticketForm.elements.description.value = ''; 
  document.querySelector('.app').append(ticketForm);
});
 
//Delete confirm form
const confirmDeleteForm = document.createElement('form');
confirmDeleteForm.classList.add('confirm-delete');
confirmDeleteForm.innerHTML = `
  <h1>Точно удаляем?</h1>
  <p>Вы уверены? Это навсегда.</p>
  <button type="button" name="no">Нет</button>
  <button type="submit" name="yes">Да</button>`;
//No  
confirmDeleteForm.elements.no.addEventListener('click', (ev) => {
  ev.preventDefault();
  confirmDeleteForm.remove();
});
//Yes
confirmDeleteForm.elements.yes.addEventListener('click', async (ev) => {
  ev.preventDefault();
  try {
    const res = await fetch(URL + '?id=' + confirmDeleteForm.dataset.id, {
      method: 'DELETE', headers: {'Accept': 'application/json', 
      'Content-type': 'application/json'}
    });
    tickets.delete(confirmDeleteForm.dataset.id);
    ticketsTb.querySelector('[data-id="' + confirmDeleteForm.dataset.id)
      .remove();
    confirmDeleteForm.remove();
  } catch (error) { 
    console.log(error);
  }
});

//Render tickets table
const ticketsTb = document.querySelector('.tickets tbody');
fetch(URL).then(res => res.json())
  .then(resj => resj.forEach(t => tickets.set(t.id, t))) //tickets.values()
  .then(() => renderTickets());

function renderTickets() {
  ticketsTb.innerHTML = [...tickets.values()].reduce((a, c) => a + 
    '<tr data-id="' + c.id + '"><td data-status=' + c.status + 
    '></td><td data-full=false><span class="name">' + c.name + 
    '</span><span class="description"></span></td><td>' + 
    new Date(Number(c.created)).toISOString()
    .replace(/^\d\d(\d\d)-(\d\d)-(\d\d)T(\d\d:\d\d).*$/, '$3.$2.$1 $4') + 
    '</td><td class="read"></td><td class="delete"></td></tr>', '');
  for (const r of ticketsTb.rows) {
    // Toggle status
    r.cells[0].addEventListener('click', async () => {
      try {
        r.cells[0].dataset.status = 
          (r.cells[0].dataset.status === "false") + '';
        await fetch(URL, {
          method: 'PUT', headers: {'Accept': 'application/json', 
          'Content-type': 'application/json'},
          body: JSON.stringify(
            {ticket:{id: r.dataset.id, status: r.cells[0].dataset.status}})
        });
        tickets.get(r.dataset.id).status = r.cells[0].dataset.status;
      } catch (error) {
        console.log(error);
      }
    });
    // Describe
    r.cells[1].addEventListener('click', async () => {
      if (r.cells[1].dataset.full === "false" ) {
        try {
          const resj= await (await fetch(URL + '?id=' + r.dataset.id, {
            method: 'GET', headers: {'Accept': 'application/json', 
            'Content-type': 'application/json'}
          })).json();
          console.log(resj);
          r.cells[1].querySelector('.description').textContent = 
            resj.description;
          r.cells[1].dataset.full = "true"; 
        } catch (error) { 
          console.log(error);
        }
      } else {
        r.cells[1].children[1].textContent = '';
        r.cells[1].dataset.full = "false"; 
      }
    });
    // Edit
    r.cells[3].addEventListener('click', async () => {
      try {
        ticketForm.dataset.id = r.dataset.id;
        ticketForm.querySelector('h1').textContent = 
          'Изменить тикет #' + r.dataset.id;
        const resj = await (await fetch(URL + '?id=' + r.dataset.id, {
          method: 'GET', headers: {'Accept': 'application/json', 
          'Content-type': 'application/json'}
        })).json();
        ticketForm.elements.name.value = resj.ticket.name;  
        ticketForm.elements.description.value = resj.description; 
      } catch (error) { 
        console.log(error);
      }
      document.querySelector('.app').append(ticketForm);
    });
    // Delete
    r.cells[4].addEventListener('click', async () => {
      confirmDeleteForm.dataset.id = r.dataset.id;
      document.querySelector('.app').append(confirmDeleteForm);
    });
  }
}

