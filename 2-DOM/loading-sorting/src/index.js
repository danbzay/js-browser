import movies from './movies.json';

const moviesTable = document.querySelector('table.movies');
for (const movie of movies) {
  const tr = document.createElement('tr');
  tr.dataset.id = movie.id;
  tr.appendChild(document.createElement('td'))
    .appendChild(document.createTextNode('#' + movie.id));
  tr.dataset.title = movie.title;
  tr.appendChild(document.createElement('td'))
    .appendChild(document.createTextNode(movie.title));
  tr.dataset.year = movie.year;
  tr.appendChild(document.createElement('td'))
    .appendChild(document.createTextNode('(' + movie.year + ')'));
  tr.dataset.imdb = movie.imdb;
  tr.appendChild(document.createElement('td'))
    .appendChild(document.createTextNode('imdb' + movie.imdb.toFixed(2)));
  moviesTable.appendChild(tr);
}

let sortOrder = 0;
let sortColumn = 0;
const rows = [...moviesTable.querySelectorAll('table > tr')];
const dataKeys = Object.keys(rows[0].dataset);
const ths = moviesTable.querySelectorAll('th');

setInterval( () => {
  ths[sortColumn].textContent = ths[sortColumn].textContent.replace(/(\u2193|\u2191)/, '');
  sortOrder = (sortOrder + 1) % 2;
  sortColumn = (sortColumn + sortOrder) % 4;
  ths[sortColumn].textContent += sortOrder == 0 ? '\u2191' : '\u2193';
  rows.sort(compareRows);  
  for ( const row in rows ) {
    moviesTable.appendChild(rows[row]);
  }
}, 2000)

function compareRows(a, b) {
  const aString = a.dataset[dataKeys[sortColumn]];    
  const bString = b.dataset[dataKeys[sortColumn]];
  //compare strings with removed numbers
  let result = aString.replace(/[\d.]/g, '')
    .localeCompare(bString.replace(/[\d.]/g, ''));
  //compare numbers if equal
  if (result == 0) {
    result = Number(aString) - Number(bString);
  }
  return (1 - 2 * sortOrder) * result;
}

