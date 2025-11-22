export default function createHtmlTool() {
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>HTML Encoder/Decoder</h2>
    <textarea id="html-input" placeholder="Enter HTML here"></textarea>
    <button id="encode-html-btn">Encode HTML</button>
    <button id="decode-html-btn">Decode HTML</button>
    <textarea id="html-output" placeholder="Result"></textarea>
  `;

  const input = container.querySelector('#html-input');
  const output = container.querySelector('#html-output');
  const encodeBtn = container.querySelector('#encode-html-btn');
  const decodeBtn = container.querySelector('#decode-html-btn');

  encodeBtn.addEventListener('click', () => {
    output.value = input.value.replace(/&/g, '&amp;')
                              .replace(/</g, '&lt;')
                              .replace(/>/g, '&gt;')
                              .replace(/"/g, '&quot;')
                              .replace(/'/g, '&#039;');
  });

  decodeBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = input.value;
    output.value = textarea.value;
  });

  return container;
}