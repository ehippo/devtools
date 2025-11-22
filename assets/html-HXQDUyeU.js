function l(){const e=document.createElement("div");e.innerHTML=`
    <h2>HTML Encoder/Decoder</h2>
    <textarea id="html-input" placeholder="Enter HTML here"></textarea>
    <button id="encode-html-btn">Encode HTML</button>
    <button id="decode-html-btn">Decode HTML</button>
    <textarea id="html-output" placeholder="Result"></textarea>
  `;const t=e.querySelector("#html-input"),n=e.querySelector("#html-output"),o=e.querySelector("#encode-html-btn"),r=e.querySelector("#decode-html-btn");return o.addEventListener("click",()=>{n.value=t.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}),r.addEventListener("click",()=>{const c=document.createElement("textarea");c.innerHTML=t.value,n.value=c.value}),e}export{l as default};
