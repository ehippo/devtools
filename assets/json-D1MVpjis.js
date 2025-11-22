function a(){const t=document.createElement("div");t.innerHTML=`
    <h2>JSON Formatter</h2>
    <textarea id="json-input" placeholder="Enter JSON here"></textarea>
    <button id="format-btn">Format</button>
    <textarea id="json-output" placeholder="Formatted JSON"></textarea>
  `;const r=t.querySelector("#json-input"),e=t.querySelector("#json-output");return t.querySelector("#format-btn").addEventListener("click",()=>{try{const n=JSON.parse(r.value);e.value=JSON.stringify(n,null,2)}catch{e.value="Invalid JSON"}}),t}export{a as default};
