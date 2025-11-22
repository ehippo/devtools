export default function createBase64Tool() {
  const container = document.createElement('div');
  container.classList.add('base64-tool-container');
  container.innerHTML = `
    <header>
      <h2 class="base64-header">Base64 Encoder/Decoder</h2>
    </header>    
    <div class="base64-io-container">
      <div class="base64-buttons">
        <button id="encode-btn">Encode</button>
        <button id="decode-btn">Decode</button>
      </div>
      <textarea id="base64-input" class="base64-textarea" placeholder="Enter text here"></textarea>
      <textarea id="base64-output" class="base64-textarea" placeholder="Result" readonly></textarea>
    </div>
  `;

  const input = container.querySelector('#base64-input');
  const output = container.querySelector('#base64-output');
  const encodeBtn = container.querySelector('#encode-btn');
  const decodeBtn = container.querySelector('#decode-btn');

  encodeBtn.addEventListener('click', () => {
    output.value = btoa(input.value);
  });

  decodeBtn.addEventListener('click', () => {
    try {
      output.value = atob(input.value);
    } catch (e) {
      output.value = 'Invalid Base64 string';
    }
  });

  return container;
}