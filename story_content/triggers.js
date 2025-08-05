function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nVdodd5QKr":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('65xwk0DqAgn');
const duration = 750;
const easing = 'ease-out';
const id = '60EjpktGNFf';
const bounceAmount = 1;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

};
