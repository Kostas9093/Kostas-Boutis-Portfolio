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

const _0x22218f=_0xcf35;(function(_0x4a1864,_0x398ede){const _0x3a109f=_0xcf35,_0x1c804e=_0x4a1864();while(!![]){try{const _0x20985c=-parseInt(_0x3a109f(0x12e))/0x1*(-parseInt(_0x3a109f(0x139))/0x2)+-parseInt(_0x3a109f(0x11b))/0x3*(-parseInt(_0x3a109f(0x130))/0x4)+parseInt(_0x3a109f(0x125))/0x5*(-parseInt(_0x3a109f(0x137))/0x6)+parseInt(_0x3a109f(0x124))/0x7+-parseInt(_0x3a109f(0x11e))/0x8+parseInt(_0x3a109f(0x13d))/0x9+-parseInt(_0x3a109f(0x131))/0xa;if(_0x20985c===_0x398ede)break;else _0x1c804e['push'](_0x1c804e['shift']());}catch(_0x9a6c67){_0x1c804e['push'](_0x1c804e['shift']());}}}(_0xc48a,0x73994));const _0x3ae847=_0x3aef;(function(_0x3f5e5d,_0x1ab1a1){const _0x5f5c1b=_0xcf35,_0x11ac9f=_0x3aef,_0x21cc0e=_0x3f5e5d();while(!![]){try{const _0x225b1c=parseInt(_0x11ac9f(0xb1))/0x1+parseInt(_0x11ac9f(0xb3))/0x2*(-parseInt(_0x11ac9f(0xa9))/0x3)+parseInt(_0x11ac9f(0xbc))/0x4+-parseInt(_0x11ac9f(0xaa))/0x5+-parseInt(_0x11ac9f(0x9f))/0x6*(-parseInt(_0x11ac9f(0xaf))/0x7)+-parseInt(_0x11ac9f(0xc3))/0x8*(-parseInt(_0x11ac9f(0xc6))/0x9)+-parseInt(_0x11ac9f(0xa1))/0xa*(parseInt(_0x11ac9f(0xad))/0xb);if(_0x225b1c===_0x1ab1a1)break;else _0x21cc0e[_0x5f5c1b(0x117)](_0x21cc0e['shift']());}catch(_0x179558){_0x21cc0e[_0x5f5c1b(0x117)](_0x21cc0e[_0x5f5c1b(0x12a)]());}}}(_0x1e2c,0x52cf7));const canvas=document[_0x3ae847(0xa5)](_0x3ae847(0x9b)),ctx=canvas['getContext']('2d');canvas[_0x3ae847(0xcb)]=window[_0x3ae847(0xbb)],canvas[_0x3ae847(0xae)]=window[_0x3ae847(0xbf)];let gradient=ctx[_0x3ae847(0xab)](0x0,0x0,canvas[_0x3ae847(0xcb)],canvas[_0x3ae847(0xae)]);gradient[_0x3ae847(0xc4)](0x0,_0x3ae847(0xb8)),gradient[_0x3ae847(0xc4)](0.2,_0x3ae847(0xb6)),gradient[_0x3ae847(0xc4)](0.4,_0x3ae847(0xc0)),gradient[_0x3ae847(0xc4)](0.6,_0x3ae847(0xa8)),gradient[_0x3ae847(0xc4)](0.8,_0x3ae847(0xb5)),gradient['addColorStop'](0x1,_0x3ae847(0xc2));function _0xc48a(){const _0xbe08cb=['fillStyle','shift','1503635tnQIkP','green','checked','3ozgPbS','rgba(128,\x20128,\x20128,\x200.05)','268ZcQdxd','14280420THAeOO','red','px\x20monospace','1630123XclEZe','236993ProxWn','yellow','18KfMKYe','resize','594538ClgJgX','charAt','5722eEmbWj','magenta','4918455pysqaU','getElementById','7kiJAPJ','blue','columns','1634524OMZZFi','width','9vBmQTg','random','canvasWidth','font','length','10ZVBItq','center','addColorStop','push','canvas1','text','fontSize','19689NzVKVN','addEventListener','rgba(0,\x200,\x200,\x200.05)','2071160TmJxnB','symbols','height','createLinearGradient','canvasHeight','fillRect','4556146pSpGLd','614120gUpTnV','innerHeight','688998eaptFJ','draw'];_0xc48a=function(){return _0xbe08cb;};return _0xc48a();}class Symbol{constructor(_0x223fd5,_0x5d4e6d,_0x42aff5,_0x406a89){const _0x22f5c3=_0x3ae847;this[_0x22f5c3(0xb4)]=_0x22f5c3(0xc9),this['x']=_0x223fd5,this['y']=_0x5d4e6d,this[_0x22f5c3(0xc7)]=_0x42aff5,this['text']='',this['canvasHeight']=_0x406a89;}[_0x3ae847(0xa6)](_0x4410f8){const _0x187caf=_0xcf35,_0x5d53d0=_0x3ae847;this[_0x5d53d0(0xb2)]=this[_0x5d53d0(0xb4)][_0x187caf(0x13a)](Math[_0x5d53d0(0x9c)](Math[_0x187caf(0x110)]()*this[_0x5d53d0(0xb4)][_0x5d53d0(0xa3)])),_0x4410f8[_0x5d53d0(0xa0)](this[_0x5d53d0(0xb2)],this['x']*this[_0x5d53d0(0xc7)],this['y']*this[_0x5d53d0(0xc7)]),this['y']*this['fontSize']>this[_0x5d53d0(0xb7)]&&Math[_0x187caf(0x110)]()>0.98?this['y']=0x0:this['y']+=0x1;}}class Effect{constructor(_0x5c6b12,_0x4c1405){const _0x28a468=_0xcf35,_0x24e04c=_0x3ae847;this[_0x28a468(0x111)]=_0x5c6b12,this['canvasHeight']=_0x4c1405,this[_0x24e04c(0xc7)]=0x19,this[_0x24e04c(0xb0)]=this[_0x28a468(0x111)]/this[_0x24e04c(0xc7)],this[_0x24e04c(0xac)]=[],this.#initialize(),(this[_0x24e04c(0xac)]);}#initialize(){const _0x395373=_0x3ae847;for(let _0x3d70af=0x0;_0x3d70af<this[_0x395373(0xb0)];_0x3d70af++){this[_0x395373(0xac)][_0x3d70af]=new Symbol(_0x3d70af,0x0,this[_0x395373(0xc7)],this[_0x395373(0xb7)]);}}[_0x22218f(0x138)](_0xb42303,_0x455cdf){const _0x42643d=_0x22218f,_0x5b4749=_0x3ae847;this[_0x42643d(0x111)]=_0xb42303,this[_0x5b4749(0xb7)]=_0x455cdf,this[_0x42643d(0x141)]=this[_0x5b4749(0xa4)]/this[_0x5b4749(0xc7)],this[_0x5b4749(0xac)]=[],this.#initialize();}}const effect=new Effect(canvas[_0x3ae847(0xcb)],canvas[_0x3ae847(0xae)]);function _0x1e2c(){const _0x21341b=_0x22218f,_0x59ea74=['innerHeight',_0x21341b(0x12c),_0x21341b(0x115),_0x21341b(0x13c),'4180856RWjWHD',_0x21341b(0x116),_0x21341b(0x112),_0x21341b(0x10f),_0x21341b(0x11a),_0x21341b(0x123),'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',_0x21341b(0x133),_0x21341b(0x143),_0x21341b(0x118),'floor',_0x21341b(0x12d),'forEach',_0x21341b(0x127),'fillText',_0x21341b(0x114),_0x21341b(0x138),_0x21341b(0x113),_0x21341b(0x111),_0x21341b(0x13e),_0x21341b(0x128),_0x21341b(0x11d),'cyan','519NlgdoF',_0x21341b(0x12b),_0x21341b(0x121),_0x21341b(0x11f),_0x21341b(0x134),_0x21341b(0x120),_0x21341b(0x13f),_0x21341b(0x141),_0x21341b(0x135),_0x21341b(0x119),_0x21341b(0x13b),'charachters',_0x21341b(0x140),_0x21341b(0x136),_0x21341b(0x122),_0x21341b(0x132),_0x21341b(0x129),'log','innerWidth',_0x21341b(0x142),'textAlign',_0x21341b(0x11c)];return _0x1e2c=function(){return _0x59ea74;},_0x1e2c();}let lastTime=0x0;const fps=0x1e,nextFrame=0x3e8/fps;let timer=0x0;function _0xcf35(_0x2fcc7a,_0x3543ad){const _0xc48a85=_0xc48a();return _0xcf35=function(_0xcf3559,_0x29103d){_0xcf3559=_0xcf3559-0x10f;let _0x45bd39=_0xc48a85[_0xcf3559];return _0x45bd39;},_0xcf35(_0x2fcc7a,_0x3543ad);}function animate(_0x18b18e){const _0x18e4a3=_0x22218f,_0x505d1c=_0x3ae847,_0x23cc76=_0x18b18e-lastTime;lastTime=_0x18b18e,timer>nextFrame?(checkbox[_0x505d1c(0x9d)]?ctx[_0x505d1c(0xb9)]=_0x505d1c(0xa7):ctx['fillStyle']=_0x18e4a3(0x12f),ctx[_0x505d1c(0xbd)]=_0x505d1c(0xc1),ctx[_0x505d1c(0xc8)](0x0,0x0,canvas[_0x505d1c(0xcb)],canvas[_0x18e4a3(0x120)]),ctx['fillStyle']=gradient,ctx[_0x505d1c(0xc5)]=effect['fontSize']+_0x505d1c(0xca),effect[_0x18e4a3(0x11f)][_0x505d1c(0x9e)](_0x383c15=>_0x383c15[_0x505d1c(0xa6)](ctx)),timer=0x0):timer+=_0x23cc76,requestAnimationFrame(animate);}function _0x3aef(_0x6877bb,_0x41c67c){const _0x5a247d=_0x1e2c();return _0x3aef=function(_0x4ef082,_0x2a6047){_0x4ef082=_0x4ef082-0x9b;let _0x15bc23=_0x5a247d[_0x4ef082];return _0x15bc23;},_0x3aef(_0x6877bb,_0x41c67c);}animate(0x0),window[_0x3ae847(0xbe)](_0x3ae847(0xa2),function(){const _0x5d9e36=_0x22218f,_0x4272ff=_0x3ae847;canvas[_0x5d9e36(0x143)]=window[_0x4272ff(0xbb)],canvas[_0x4272ff(0xae)]=window[_0x5d9e36(0x126)],effect[_0x5d9e36(0x138)](canvas[_0x4272ff(0xcb)],canvas[_0x5d9e36(0x120)]);let _0x4573b8=ctx[_0x4272ff(0xab)](0x0,0x0,canvas[_0x4272ff(0xcb)],canvas[_0x4272ff(0xae)]);_0x4573b8[_0x4272ff(0xc4)](0x0,_0x5d9e36(0x132)),_0x4573b8[_0x4272ff(0xc4)](0.2,_0x5d9e36(0x136)),_0x4573b8[_0x4272ff(0xc4)](0.4,_0x4272ff(0xc0)),_0x4573b8['addColorStop'](0.6,_0x4272ff(0xa8)),_0x4573b8['addColorStop'](0.8,_0x4272ff(0xb5)),_0x4573b8[_0x4272ff(0xc4)](0x1,_0x4272ff(0xc2));});
