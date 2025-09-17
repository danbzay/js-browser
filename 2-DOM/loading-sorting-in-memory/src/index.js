import movies from './movies.json';

const moviesTable = document.querySelector('table.movies');

rebuildTable(movies);



let sortOrder = 0;
let sortColumn = 0;
const dataKeys = ['id', 'title', 'year', 'imdb'];
const ths = moviesTable.querySelectorAll('th');

setInterval( () => {
  ths[sortColumn].textContent = ths[sortColumn].textContent.replace(/(\u2193|\u2191)/, '');
  sortColumn = (sortColumn + sortOrder) % 4;
  sortOrder = (sortOrder + 1) % 2;
  moviesTable.querySelectorAll('table > tr').forEach(row => row.remove());
  ths[sortColumn].textContent += sortOrder == 0 ? '\u2191' : '\u2193';
  rebuildTable(movies.sort(compareRows));  
}, 2000)

function rebuildTable(movies) {
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
}

function compareRows(a, b) {
  const aString = a[dataKeys[sortColumn]];    
  const bString = b[dataKeys[sortColumn]];
  let result = 0;
  if (typeof aString === 'string') {
    result = aString.localeCompare(bString);
  } else {
    result = aString - bString;
  }
  return (1 - 2 * sortOrder) * result;
}

