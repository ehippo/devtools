export default function createCronTool() {
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>Cron Parser</h2>
    <input type="text" id="cron-input" placeholder="Enter cron expression" />
    <button id="parse-btn">Parse</button>
    <div id="cron-output"></div>
  `;

  const input = container.querySelector('#cron-input');
  const output = container.querySelector('#cron-output');
  const parseBtn = container.querySelector('#parse-btn');

  parseBtn.addEventListener('click', () => {
    const cronExpression = input.value;
    // This is a simplified example. A real cron parser would be more complex.
    // For now, we'll just display the input.
    output.textContent = `Parsed: ${cronExpression}`;
  });

  return container;
}