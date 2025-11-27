import './image-gallery.css';

export class ImageGallery {
  constructor(element) {
    if(typeof element === 'string') {
      element = document.querySelector(element);
    }

    this.dropZone = element.querySelector('.drop-zone');
    this.dropZone.addEventListener('drop', ev => {
      ev.preventDefault();
      this.addImagesToList([...ev.dataTransfer.items]
        .map(item => item.getAsFile())
        .filter(file => file));
    });

    window.addEventListener('drop', ev => {
      [...ev.dataTransfer.items].some(item => item.kind === 'file') ? 
        ev => preventDefault() : 0;
    });
    this.dropZone.addEventListener('dragover', ev => {
      console.log(ev);
      const fileItems = [...ev.dataTransfer.items].filter(
        item => item.kind === 'file');
      if (fileItems.length > 0) {
        ev.preventDefault();
        fileItems.some(item => item.type.startsWith('image/')) ?
          ev.dataTransfer.dropEffect = 'copy' : 
          ev.dataTransfer.dropEffect = 'none';
      }
    });
    window.addEventListener('dragover', ev => {
      const fileItems = [...ev.dataTransfer.items].filter(
        item => item.kind === 'file');
      if (fileItems.length > 0) {
        ev.preventDefault();
        this.dropZone.contains(ev.target) ? 0 : 
          ev.dataTransfer.dropEffect = 'none';
      }
    });

    this.imageList = element.querySelector('.image-list');
    document.querySelector('.drop-zone input').addEventListener('change', 
      ev => this.addImagesToList(ev.target.files));
      
      

  }

  addImagesToList(files) {
    for (const file of files) {
      if (file.type.startsWith('image/')) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = file.name;
        const imgX = document.createElement('div');
        imgX.className = 'remover';
        imgX.addEventListener('click', e => e.target.parentElement.remove());
        li.appendChild(img);
        li.appendChild(imgX);
        this.imageList.appendChild(li);
      }
    }
  }


  


} 
