const box = document.getElementById("box");

function moveNo(btn){
  btn.style.left = Math.random() * (box.offsetWidth - btn.offsetWidth) + "px";
  btn.style.top  = Math.random() * (box.offsetHeight - btn.offsetHeight) + "px";
}

function step1(){
  box.innerHTML = `
    <div class="teddy">🥰</div>
    <h2>You are very special for me, Shami ❤️</h2>
    <p>Some connections don’t need reasons…</p>
    <button class="yesBtn" onclick="step2()">Next ➡️</button>
  `;
}

function step2(){
  box.innerHTML = `
    <div class="teddy">💞</div>
    <h2>Little confession ✨</h2>
    <p>With you, even silence feels warm.</p>
    <button class="yesBtn" onclick="step3()">Go on ➡️</button>
  `;
}

function step3(){
  box.innerHTML = `
    <div class="teddy">🌙</div>
    <h2>Imagine us…</h2>
    <p>Late talks, shared dreams, soft smiles.</p>
    <button class="yesBtn" onclick="step4()">Hmm ➡️</button>
  `;
}

function step4(){
  box.innerHTML = `
    <div class="teddy">😳❤️</div>
    <h2>Bold question 🙈</h2>
    <p>Ky ap mere mummy ke damad banogy? 😜</p>
    <button class="yesBtn" onclick="step5()">Next ➡️</button>
  `;
}

function step5(){
  box.innerHTML = `
    <div class="teddy">💖</div>
    <h2>Last one… 😌</h2>
    <p>Ready?</p>
    <button class="yesBtn" onclick="finalStep()">Yes ➡️</button>
  `;
}

function finalStep(){
  box.innerHTML = `
    <div class="teddy">👶❤️🧸</div>
    <h2>Ky ap mere bacho ke papa banogy? 😳💖</h2>
    <p>(No button bhagta rahega 😜)</p>
    <button class="yesBtn" onclick="end()">YES 😍</button>
    <button class="noBtn" onmouseover="moveNo(this)">NO 🙈</button>
  `;
}

function end(){
  box.innerHTML = `
    <div class="teddy">🥰💍</div>
    <h2>Bas… dil jeet liya ❤️</h2>
    <p>Feelings bilkul real hain ✨<br>I love you 💕</p>
  `;
}