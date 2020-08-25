let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let answerIndex = 0;
// let mek = document.getElementById("one1");
// let erku = document.getElementById("two1");
// let ereq = document.getElementById("thre1");
// let chors = document.getElementById("four1");
let jishtqanak = 0;
let sxalqanak = 0;
let seconds = 10;

function talHarc() {
  let zang = ["one1", "two1", "thre1", "four1"];

  let g = Math.floor(Math.random() * alphabet.length);
  let randomLetter = alphabet[g];
  let randomNumber = Math.floor(Math.random() * (26 - g));
  let question = `${randomLetter} + ${randomNumber}`;
  answerIndex = g + randomNumber;
  let answerLetter = alphabet[answerIndex];
  document.getElementById("word").innerHTML = question;

  let patasxanneriZangvac = stanalPatasxanneriZangvac();
  for (i = 0; i < 4; i++) {
    let pzPatahakanTiv = Math.floor(Math.random() * patasxanneriZangvac.length);
    document.getElementById(zang[i]).innerHTML =
      alphabet[patasxanneriZangvac[pzPatahakanTiv]];
    patasxanneriZangvac.splice(pzPatahakanTiv, 1);
  }
}

function patasxaniHastatum(divName) {
  let jishtPatasxan = alphabet[answerIndex];
  let yntrvacPatasxan = divName.innerText;

  if (jishtPatasxan == yntrvacPatasxan) {
    jishtqanak++;
    document.getElementById("true").innerHTML = jishtqanak;
    PlayAudio2();
    talHarc();
    seconds += 5;
  } else {
    sxalqanak++;
    document.getElementById("folse").innerHTML = sxalqanak;
    PlayAudio3();
    talHarc();
   
  }
  if (sxalqanak == 10) {
     
    alert(`Game Over Your Score IS  ${jishtqanak}` );
   location.reload();

  }
}

function stanalPatasxanneriZangvac() {
  let patasxanneriZangvac = [answerIndex];  

  while (true) {
    let patahakanTivAybubenic = Math.floor(Math.random() * alphabet.length);    

    if (!patasxanneriZangvac.find((x) => x == patahakanTivAybubenic)) {
      patasxanneriZangvac.push(patahakanTivAybubenic);
    }

    if (patasxanneriZangvac.length == 4) {
      break;
    }
  }

  return patasxanneriZangvac;
}

function Time() {
  var countdown = setInterval(function () {
    seconds--;
    document.getElementById("time1").innerHTML = seconds;
    if (seconds <= 0) {
     
      clearInterval(countdown);
      alert(`Game Over Your Score IS  ${jishtqanak}`);

           location.reload();
    }
  }, 1000);
}

function Show() {
  let dav = document.getElementById("area");
  let dav1 = document.getElementById("time");
  let dav2 = document.getElementById("truefolsediv");
  let dav3 = document.getElementById("but");
  let dav4 = document.getElementById("text");
  let arm = document.getElementById("by");
  dav.style.display = "block";
  dav1.style.display = "block";
  dav2.style.display = "block";
  dav3.style.display = "none";
  dav4.style.display = "none";
  arm.style.display= "none";
}

// =======================   Audio   ========================



// window.onload=function PlayAudio() {
//   let x = document.getElementById("myAudio");
//   x.play(); 
// };

function PlayAudio1() {
  let y = document.getElementById("myAudio1");
    y.play();
  }

function PlayAudio2() {
  let z = document.getElementById("myAudio2");
  z.play();
}

function PlayAudio3() {
  let t = document.getElementById("myAudio3");
  t.play(); 
}



