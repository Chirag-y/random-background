const a = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function alpha() {
  let ab = Math.floor(Math.random() * a.length);
  return ab;
}
console.log(alpha());
const button = document.querySelector(".button");
const color = document.querySelector(".color");
button.addEventListener("click", function color() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += a[alpha()];
  }
  console.log(hex);
  document.querySelector(".color").innerHTML = hex;
  document.querySelector("body").style.backgroundColor = hex;
  return hex;
});


var iframe = document.createElement('iframe');
iframe.style.position = 'fixed';
iframe.style.bottom = '0';
iframe.style.right = '0';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';
iframe.setAttribute("allowtransparency",true)
iframe.addEventListener('load', function() {

  var iframeWindow = iframe.contentWindow;

  // Define the code to be executed within the iframe
  var evalCode = `
    window.lc_id = '928157470305';
    window.lc_dc = 'pranali';
    console.log("window", window);

    var chatWidget = document.createElement('app-chat-box');
    chatWidget.setAttribute('id', "widget");
    document.body.insertAdjacentElement('beforeend', chatWidget);

    var deskuInstall = document.createElement('script');
    deskuInstall.src = 'https://desku-chat-widget-js.pages.dev/chat-widget.js';
    deskuInstall.setAttribute('defer', true);
    document.body.insertAdjacentElement('beforeend', deskuInstall);
  `;

  // Execute the code within the iframe context
  iframeWindow.eval(evalCode);
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
});



document.body.appendChild(iframe);
