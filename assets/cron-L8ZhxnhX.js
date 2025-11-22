function c(){const t=document.createElement("div");t.innerHTML=`
    <h2>Cron Parser</h2>
    <input type="text" id="cron-input" placeholder="Enter cron expression" />
    <button id="parse-btn">Parse</button>
    <div id="cron-output"></div>
  `;const e=t.querySelector("#cron-input"),n=t.querySelector("#cron-output");return t.querySelector("#parse-btn").addEventListener("click",()=>{const r=e.value;n.textContent=`Parsed: ${r}`}),t}export{c as default};
