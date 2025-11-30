//remove spaces between tags
export const compact = html => html.replace(/\n/g, '').replace(/^ *</g, '<')
      .replace(/> *</g, '><').replace(/> *$/g, '>');

export const bubbleHTML0 = `
  <div>
    <h1>Popover title</h1>
    <p>And here's some amasing content. It's very engaging. Right?</p>
  </div>
  <div></div>`;

