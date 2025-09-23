import './image-gallery.css';

export class ImageGallery {
  constructor(element) {
    if(typeof element === 'string') {
      element = document.querySelector(element);
    }

    this._inputForm = element.querySelector('.image-input-data');
    this._messageArea = this._inputForm.querySelector('.message-area'); 
    this._imageList = element.querySelector('.image-list');
    
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this._inputForm.addEventListener('submit', this.onSubmitHandler);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    if (!this._inputForm.title.value) {
      this._inputForm.title.select();
      this._messageArea.textContent = 
        'Должно же быть хоть какое-то название у картинки...';
      return;
    }
    if (!this._inputForm.link.value) {
      this._inputForm.link.select();
      this._messageArea.textContent = 
        'А как мы ее без ссылки будем показывать?';
      return;
    }
    this._addImageToList(); 
  }
  
  _addImageToList() {
    const img = document.createElement('img');
    img.addEventListener('load', () => {
      const imgX = document.createElement('div');
      imgX.className = 'remover';
      imgX.addEventListener('click', e => e.target.parentElement.remove());
      const li = document.createElement('li');
      li.appendChild(img);
      li.appendChild(document.createElement('span'))
        .appendChild(document.createTextNode(this._inputForm.title.value));
      li.appendChild(imgX);
      this._imageList.appendChild(li);
      this._messageArea.textContent = 
        'Возможно, ваша картинка успешно добавлена';
      this._inputForm.title.value = '';
      this._inputForm.link.value = '';
    });
    img.addEventListener('error', () => {
      this._messageArea.textContent = 'Неверный URL изображения';
      this._inputForm.link.select();
    });
    img.setAttribute('src', this._inputForm.link.value);
  }
} 
