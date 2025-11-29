import './popover.css';

export class Popover {
  constructor(element) {
    if (typeof element === 'string') {
      element= document.querySelector(element);
    }
    this.form = element;
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.form.addEventListener('submit', this.onSubmitHandler);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    let bubble = document.querySelector('.bubble');
    if (bubble) {
      bubble.remove();
      return;
    }
    bubble = document.createElement('div');
    bubble.innerHTML = `
      <div>
        <h1>Popover title</h1>
        <p>And here's some amasing content. It's very engaging. Right?</p>
      </div>
      <div></div>`;

    document.body.appendChild(bubble);
    bubble.classList.add('bubble');
    const {left, top, width } = 
      e.currentTarget.elements.toggle.getBoundingClientRect();
    bubble.style.left = left + width / 2 - bubble.offsetWidth / 2 + 'px';
    bubble.style.top = top - bubble.offsetHeight + 'px';
  }
}

