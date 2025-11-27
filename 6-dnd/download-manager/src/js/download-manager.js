
const fileList = document.querySelector('.download-manager ul');
//const files = [f1, f2, f3];
let downloaded = 0;


//fileList.innerHTML = files.reduce((a, c) => a + '<li><a href="' + c + 
 // '>' + c.split('\/').pop() + '</a></li>', '');
fileList.querySelectorAll('a').forEach(a => a.addEventListener('click', ev => {
  //ev.preventDefault();
  downloaded += getFileSize(a.href);
  console.log(downloaded);
}));

async function getFileSize(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    if (response.ok) {
      const contentLength = response.headers.get('Content-Length');
      if (contentLength) {
        return parseInt(contentLength, 10); // File size in bytes
      } else {
        console.warn('Content-Length header not found in response.');
        return null;
      }
    } else {
      console.error(`Error fetching file size: ${response.status} ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.error('Network error or other issue:', error);
    return null;
  }
}



