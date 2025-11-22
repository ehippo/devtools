export default function createJsonTool() {
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>JSON Formatter</h2>
    <textarea id="json-input" placeholder="Enter JSON here"></textarea>
    <button id="format-btn">Format</button>
    <textarea id="json-output" placeholder="Formatted JSON"></textarea>
  `;

  const input = container.querySelector('#json-input');
  const output = container.querySelector('#json-output');
  const formatBtn = container.querySelector('#format-btn');

  formatBtn.addEventListener('click', () => {
    try {
      const parsed = JSON.parse(input.value);
      output.value = JSON.stringify(parsed, null, 2);
    } catch (e) {
      output.value = 'Invalid JSON';
    }
  });

  return container;
}