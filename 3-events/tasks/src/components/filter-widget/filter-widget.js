export class FilterWidget {
  constructor(element, filterHandler, submitHandler) {
    if(typeof element === 'string') {
        element = document.querySelector(element);
    }

    this._filterText = document.querySelector('.filter-text')

    this._filterHandler = filterHandler;
    this._submitHandler = submitHandler;
    this.onFilter = this.onFilter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this._element = element;
    this._nameErrorNode = this._element.querySelector('span.hidden');

    this._filterText.addEventListener('input', this.onFilter);
    this._element.addEventListener('submit', this.onSubmit);
  }

  onFilter(e) {
    e.preventDefault();

    if(this._timeout) {
      clearTimeout(this._timeout);
    }
    
    const text = this._filterText.value;
    
    this._timeout = setTimeout(() => this._filterHandler(text), 300);
  }

  onSubmit(e) {
    e.preventDefault();
    const text = this._filterText.value;
    if (text == '') {
      this._nameErrorNode.classList.remove('hidden');
      return;
    }
    this._nameErrorNode.classList.add('hidden');
    this._submitHandler(this._filterText.value);
  }

}
