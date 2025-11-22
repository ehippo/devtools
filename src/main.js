import './style.css'

const tools = [
  {
    name: 'Encoders/Decoders',
    children: [
      { id: 'base64-encoder-decoder', name: 'Base64', component: () => import('./tools/base64.js') },
      { id: 'html-encoder-decoder', name: 'HTML', component: () => import('./tools/html.js') },
    ]
  },
  {
    name: 'Formatters/Parsers',
    children: [
      { id: 'json-formatter', name: 'JSON Formatter', component: () => import('./tools/json.js') },
    ]
  },
  {
    name: 'Time Tools',
    children: [
      { id: 'cron-parser', name: 'Cron Parser', component: () => import('./tools/cron.js') },
    ]
  },
];

const leftPane = document.querySelector('#left-pane');
const rightPane = document.querySelector('#right-pane');

function renderToolList() {
  leftPane.innerHTML = ''; // Clear existing list
  tools.forEach(toolGroup => {
    const groupContainer = document.createElement('div');
    groupContainer.classList.add('tool-group');

    const groupTitle = document.createElement('div');
    groupTitle.textContent = toolGroup.name;
    groupTitle.classList.add('tool-group-title');
    groupTitle.classList.add('collapsed');
    groupContainer.appendChild(groupTitle);

    const groupContent = document.createElement('div');
    groupContent.classList.add('tool-group-content');
    groupContent.classList.add('hidden');
    groupContainer.appendChild(groupContent);

    // Handle group collapse/expand
    const toggleGroup = (e) => {
      e.stopPropagation();
      const isCollapsed = groupTitle.classList.contains('collapsed');
      
      // Close all other groups first
      document.querySelectorAll('.tool-group-title').forEach(title => {
        if (title !== groupTitle) {
          title.classList.add('collapsed');
          title.nextElementSibling.classList.add('hidden');
        }
      });

      // Toggle current group
      groupTitle.classList.toggle('collapsed');
      groupContent.classList.toggle('hidden');
    };

    groupTitle.addEventListener('click', toggleGroup);

    toolGroup.children?.forEach(tool => {
      const toolItem = document.createElement('div');
      toolItem.textContent = tool.name;
      toolItem.classList.add('tool-item');
      
      toolItem.addEventListener('click', (e) => {
        e.stopPropagation();
        // Remove active class from all tools
        document.querySelectorAll('.tool-item').forEach(item => 
          item.classList.remove('active')
        );
        // Add active class to clicked tool
        toolItem.classList.add('active');
        loadTool(tool);
      });
      
      groupContent.appendChild(toolItem);
    });

    leftPane.appendChild(groupContainer);
  });
}

async function loadTool(tool) {
  rightPane.innerHTML = ''; // Clear previous tool
  const module = await tool.component();
  const toolComponent = module.default();
  rightPane.appendChild(toolComponent);
}

renderToolList();
