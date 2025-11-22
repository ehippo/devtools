function d(){const e=document.createElement("div");e.classList.add("base64-tool-container"),e.innerHTML=`
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
  `;const a=e.querySelector("#base64-input"),t=e.querySelector("#base64-output"),n=e.querySelector("#encode-btn"),o=e.querySelector("#decode-btn");return n.addEventListener("click",()=>{t.value=btoa(a.value)}),o.addEventListener("click",()=>{try{t.value=atob(a.value)}catch{t.value="Invalid Base64 string"}}),e}export{d as default};
