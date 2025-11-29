import './trip-calendar.css';

export const validation = {
  outbound: out => Date.parse(out + 'T24:00:00') >= new Date(),
  outMessage: 'Вы не сможете уехать в прошлом',
  inbound: (out, inb) => Date.parse(inb + 'T24:00:00') >= 
    Date.parse(out + 'T24:00:00'),
  inMessage: 'Вы не сможете вернуться пока еще не там',
}

export class TripCalendar {
  constructor(element) {
    if (typeof element === "string") { 
      element = document.querySelector(element);
    } 
    this.outbound = element.elements.outbound;
    this.inbound = element.elements.inbound;
    element.elements.return.checked = false;
    // we need YYYY-MM-DD
    this.today =(new Date(Date.parse(new Date) 
      - (new Date).getTimezoneOffset()*60*1000)).toISOString().slice(0, 10);

    this.outbound.setAttribute('min', this.today);
    this.outbound.addEventListener('invalid', ev => 
      ev.target.validity.rangeUnderflow ? 
        ev.target.setCustomValidity(validation.outMessage) : 0);

    this.inbound.setAttribute('min', this.today);
    this.inbound.addEventListener('invalid', ev => 
        ev.target.validity.rangeUnderflow ? 
          ev.target.setCustomValidity(validation.inMessage) : 0);

    element.elements.return.addEventListener('change', (ev) => {
      if (ev.target.checked) {
        element.querySelector('.hide').classList.remove('hidden');
        this.outbound.value ? this.inbound.setAttribute(
          'min', this.outbound.value) : 0;
        this.inbound.required = true;
      } else {
        element.querySelector('.hide').classList.add('hidden');
        this.inbound.required = false;
      }
    });

    element.addEventListener('change', (ev) => 
      ev.target.setCustomValidity(''));
  
    element.elements.return.addEventListener('change', (ev) => {
      if (ev.target.checked) {
        element.querySelector('.hide').classList.remove('hidden');
        this.outbound.value ? this.inbound.setAttribute(
          'min', this.outbound.value) : 0;
      } else {
        element.querySelector('.hide').classList.add('hidden');
      }
    });

    element.addEventListener('submit', ev => {
      ev.preventDefault();
      if (!validation.outbound(this.outbound.value)) {
        this.outbound.setCustomValidity(validation.outMessage);
        this.outbound.reportValidity();
        return;
      }
      if (element.elements.return.checked
      && validation.inbound(this.outbound.value, this.inbound.value)) {
        this.inbound.setCustomValidity(validation.inMessage);
        this.inbound.reportValidity();
        return;
      }
    });
    
    element.addEventListener('change', (ev) => 
      ev.target.setCustomValidity(''));
  }
}
