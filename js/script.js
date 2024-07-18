// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

//Mobile menu ========================
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// =================Dark Mode Switch ==========
const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");
const dot = document.querySelectorAll(".dot");
const logo = document.querySelectorAll(".logo");

const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};
// changing dots colors light and dark mode
const dots = function () {
  if (checkbox.checked) {
    dot.forEach((Element) => {
      Element.style.background = "";
    });
  } else {
    dot.forEach((Element) => {
      Element.style.background = "";
    });
  }
};
//calling the function directly

toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);
checkbox.addEventListener("click", dots);
// checkbox.addEventListener("click", logoColor);

// Tytpewritter effect
const typeWriter = document.getElementById("typewriter-text");
const text = "Hello, my name is ";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);

// Tilt effect
VanillaTilt.init(document.querySelectorAll(".has-tooltip"), {
  max: 40,
  speed: 400,
  glare: true
  });

const _0x3ae847=_0x3aef;(function(_0x573825,_0x6d07eb){const _0x5c984a=_0x3aef,_0x55b135=_0x573825();while(!![]){try{const _0x16f2f2=parseInt(_0x5c984a(0xb1))/0x1+parseInt(_0x5c984a(0xb3))/0x2*(-parseInt(_0x5c984a(0xa9))/0x3)+parseInt(_0x5c984a(0xbc))/0x4+-parseInt(_0x5c984a(0xaa))/0x5+-parseInt(_0x5c984a(0x9f))/0x6*(-parseInt(_0x5c984a(0xaf))/0x7)+-parseInt(_0x5c984a(0xc3))/0x8*(-parseInt(_0x5c984a(0xc6))/0x9)+-parseInt(_0x5c984a(0xa1))/0xa*(parseInt(_0x5c984a(0xad))/0xb);if(_0x16f2f2===_0x6d07eb)break;else _0x55b135['push'](_0x55b135['shift']());}catch(_0x495d7e){_0x55b135['push'](_0x55b135['shift']());}}}(_0x1e2c,0x52cf7));const canvas=document[_0x3ae847(0xa5)](_0x3ae847(0x9b)),ctx=canvas['getContext']('2d');canvas[_0x3ae847(0xcb)]=window[_0x3ae847(0xbb)],canvas[_0x3ae847(0xae)]=window[_0x3ae847(0xbf)];let gradient=ctx[_0x3ae847(0xab)](0x0,0x0,canvas[_0x3ae847(0xcb)],canvas[_0x3ae847(0xae)]);gradient[_0x3ae847(0xc4)](0x0,_0x3ae847(0xb8)),gradient[_0x3ae847(0xc4)](0.2,_0x3ae847(0xb6)),gradient[_0x3ae847(0xc4)](0.4,_0x3ae847(0xc0)),gradient[_0x3ae847(0xc4)](0.6,_0x3ae847(0xa8)),gradient[_0x3ae847(0xc4)](0.8,_0x3ae847(0xb5)),gradient['addColorStop'](0x1,_0x3ae847(0xc2));class Symbol{constructor(_0x270ba2,_0x4cce7d,_0x385176,_0xf8871d){const _0xd84511=_0x3ae847;this[_0xd84511(0xb4)]=_0xd84511(0xc9),this['x']=_0x270ba2,this['y']=_0x4cce7d,this[_0xd84511(0xc7)]=_0x385176,this['text']='',this['canvasHeight']=_0xf8871d;}[_0x3ae847(0xa6)](_0x18a2e2){const _0x2d62d1=_0x3ae847;this[_0x2d62d1(0xb2)]=this[_0x2d62d1(0xb4)]['charAt'](Math[_0x2d62d1(0x9c)](Math['random']()*this[_0x2d62d1(0xb4)][_0x2d62d1(0xa3)])),_0x18a2e2[_0x2d62d1(0xa0)](this[_0x2d62d1(0xb2)],this['x']*this[_0x2d62d1(0xc7)],this['y']*this[_0x2d62d1(0xc7)]),this['y']*this['fontSize']>this[_0x2d62d1(0xb7)]&&Math['random']()>0.98?this['y']=0x0:this['y']+=0x1;}}class Effect{constructor(_0x1c6a55,_0x26235a){const _0x418c8e=_0x3ae847;this['canvasWidth']=_0x1c6a55,this['canvasHeight']=_0x26235a,this[_0x418c8e(0xc7)]=0x19,this[_0x418c8e(0xb0)]=this['canvasWidth']/this[_0x418c8e(0xc7)],this[_0x418c8e(0xac)]=[],this.#initialize(),console[_0x418c8e(0xba)](this[_0x418c8e(0xac)]);}#initialize(){const _0x4f67f1=_0x3ae847;for(let _0x3bf1a6=0x0;_0x3bf1a6<this[_0x4f67f1(0xb0)];_0x3bf1a6++){this[_0x4f67f1(0xac)][_0x3bf1a6]=new Symbol(_0x3bf1a6,0x0,this[_0x4f67f1(0xc7)],this[_0x4f67f1(0xb7)]);}}['resize'](_0x477ad1,_0x529ca3){const _0x5ea969=_0x3ae847;this['canvasWidth']=_0x477ad1,this[_0x5ea969(0xb7)]=_0x529ca3,this['columns']=this[_0x5ea969(0xa4)]/this[_0x5ea969(0xc7)],this[_0x5ea969(0xac)]=[],this.#initialize();}}const effect=new Effect(canvas[_0x3ae847(0xcb)],canvas[_0x3ae847(0xae)]);function _0x1e2c(){const _0x1bdd1e=['innerHeight','green','center','magenta','4180856RWjWHD','addColorStop','font','9vBmQTg','fontSize','fillRect','アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ','px\x20monospace','width','canvas1','floor','checked','forEach','688998eaptFJ','fillText','10ZVBItq','resize','length','canvasWidth','getElementById','draw','rgba(0,\x200,\x200,\x200.05)','cyan','519NlgdoF','1503635tnQIkP','createLinearGradient','symbols','1630123XclEZe','height','7kiJAPJ','columns','236993ProxWn','text','5722eEmbWj','charachters','blue','yellow','canvasHeight','red','fillStyle','log','innerWidth','1634524OMZZFi','textAlign','addEventListener'];_0x1e2c=function(){return _0x1bdd1e;};return _0x1e2c();}let lastTime=0x0;const fps=0x1e,nextFrame=0x3e8/fps;let timer=0x0;function animate(_0x49f773){const _0x26c3d9=_0x3ae847,_0x12b66b=_0x49f773-lastTime;lastTime=_0x49f773,timer>nextFrame?(checkbox[_0x26c3d9(0x9d)]?ctx[_0x26c3d9(0xb9)]=_0x26c3d9(0xa7):ctx['fillStyle']='rgba(128,\x20128,\x20128,\x200.05)',ctx[_0x26c3d9(0xbd)]=_0x26c3d9(0xc1),ctx[_0x26c3d9(0xc8)](0x0,0x0,canvas[_0x26c3d9(0xcb)],canvas['height']),ctx['fillStyle']=gradient,ctx[_0x26c3d9(0xc5)]=effect['fontSize']+_0x26c3d9(0xca),effect['symbols'][_0x26c3d9(0x9e)](_0x1d7f68=>_0x1d7f68[_0x26c3d9(0xa6)](ctx)),timer=0x0):timer+=_0x12b66b,requestAnimationFrame(animate);}function _0x3aef(_0x10d93f,_0x23a2f9){const _0x1e2cd8=_0x1e2c();return _0x3aef=function(_0x3aeffe,_0x113c34){_0x3aeffe=_0x3aeffe-0x9b;let _0x26c790=_0x1e2cd8[_0x3aeffe];return _0x26c790;},_0x3aef(_0x10d93f,_0x23a2f9);}animate(0x0),window[_0x3ae847(0xbe)](_0x3ae847(0xa2),function(){const _0x29d785=_0x3ae847;canvas['width']=window[_0x29d785(0xbb)],canvas[_0x29d785(0xae)]=window['innerHeight'],effect['resize'](canvas[_0x29d785(0xcb)],canvas['height']);let _0x15d129=ctx[_0x29d785(0xab)](0x0,0x0,canvas[_0x29d785(0xcb)],canvas[_0x29d785(0xae)]);_0x15d129[_0x29d785(0xc4)](0x0,'red'),_0x15d129[_0x29d785(0xc4)](0.2,'yellow'),_0x15d129[_0x29d785(0xc4)](0.4,_0x29d785(0xc0)),_0x15d129['addColorStop'](0.6,_0x29d785(0xa8)),_0x15d129['addColorStop'](0.8,_0x29d785(0xb5)),_0x15d129[_0x29d785(0xc4)](0x1,_0x29d785(0xc2));});


