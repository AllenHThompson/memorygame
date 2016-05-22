// $(function () {
//   $('.tile').click(function() {
//     $(this).addClass('open');
//   });
// });

// $(function(){
//   $('button').click(function (){
//     this.text('o');
//   });
// });
var monsters = [
  'monsters-01.png',
  'monsters-02.png',
  'monsters-03.png',
  'monsters-04.png',
  'monsters-05.png',
  'monsters-06.png',
  'monsters-07.png',
  'monsters-08.png',
  'monsters-09.png',
  'monsters-10.png',
  'monsters-11.png',
  'monsters-12.png',
  'monsters-13.png',
  'monsters-14.png',
  'monsters-15.png',
  'monsters-16.png'
];



var state = 'first';
var previousMonster;

function match(){
  var openTiles = $('.open img');
  var first = $(openTiles[0]);
  var second = $(openTiles[1]);
  return first.attr('src') === second.attr('src');
}

function onTileClick(){
  if (state === 'first'){
    $(this).addClass('open');
    state = 'second';
  } else if (state === "second"){
    $(this).addClass('open');
    state = 'first';
    if (match()){
      $('.open').addClass('matched');
      $('.open').removeClass('open');
    } else {
      setTimeout(function (){
        $('.tile').removeClass('open');
      }, 1000);
    }
  }
  var matched = $('.matched').length
  var totalCards = $('.tile').length
  if (matched === totalCards){
    $('#message').text('You win!');
  }
}

$(function() {
  $('#easy').click(function(){
      makeTiles(4, 4);
      console.log('found ' + $('.tile').length + ' tiles.');
      $('.tile').click(onTileClick);
  });     //1. wait for document ready
  $('#medium').click(function(){
      makeTiles(9, 6);
      console.log('found ' + $('.tile').length + ' tiles.');
      $('.tile').click(onTileClick);
  });     //1.
  $('#hard').click(function(){
      makeTiles(16, 8);
      console.log('found ' + $('.tile').length + ' tiles.');
      $('.tile').click(onTileClick);
  });

  console.log('found ' + $('.tile').length + ' tiles.');
  $('.tile').click(onTileClick);

});

function shuffle(arr) {
  arr = arr.slice(0);
  var newArr = [];

  while (arr.length > 0) {
    var idx = Math.floor(Math.random() * arr.length);
    var item = arr[idx];
    newArr.push(item);
    arr.splice(idx, 1);
  }
  return newArr;
}

function makeTiles(numMonsters, columns){
var randomMonsters = shuffle(monsters);
var chosenMonsters = randomMonsters.slice(0, numMonsters);
var cards = [];
for (var i = 0; i < chosenMonsters.length; i++){
  var monster = chosenMonsters[i];
  cards.push(monster);
  cards.push(monster);
}

cards = shuffle(cards);

var html = '';
for (var i = 0; i < cards.length; i++){
    html += ('<div class="tile">' +
      '<img class="monster" src="images/' + cards[i] + '">' +
      '<div class="back"></div>' +
    '</div>');
  }
  $('#grid')
  .addClass('column-' + columns)
  .append(html);
}
//$($('.open img')[0]).attr('src')

// $(function(){
//   $('.tile').click(function(){
//      if ($($('.open img')[0]).attr('src') === $($('.open img')[1]).attr('src')
//      console.log("match");
// });
// var counter = 0;
// $(function(){
//   $('.tile').click(function(){
//     counter = counter + 1;
//     console.log(counter);
//  if (counter > 1){
//     if (counter % 2 === 0){
//       console.log("even")
//     } else {
//       $(this).removeClass('open')
//     }
//   }
//    $(removeClass)('open');
//   });
// });

/*
var state = 'locked';
event.on('payment', function(){
if (state === 'locked'){
state = 'unlocked'
*/

/*
vr stae = 'off'
$('#toggle-button').click(function(){
if (state === 'on'){
state = 'off';

} else {
statee = 'on';
}
});
}
*/
// <SCRIPT SRC ="MEMOR-GAM/JEQUER.JSA"></SCRIPT>
//
// /* TOBY'S HINTS
// setTimout(function(){
//   console.lgo('Hello');
// }, 1000)// time is in milliseconds
// })
// */
// /*
// * var timoutId = setTimeout(function(){
//    console.log('Hello');
//  }, 5000)
// */
//
// /*
// $('BUTTON')
// .ADDCLASS9'YELLO')
// <BUTTON CLASS="YELLO">CLICK ME</BUTTON>
// */
// /*
// $('BUTTON').removeClass('on')
// */
// /*
// CONSTRUCTORS ARE ALL FUNCTION CONSTUCTORS ALL CAN BE AS A CONSTURTOR
// */
//
// $('BUTTON').HASCLASS('YELLOW')
//
// $('IMG')
// <IMG SRC = "">
// $('IMG').ATTR('SRC')
//
// /*
// TO DISPLAY A MONSTER OR COMVER IT UP-HIDE THE IMAGE UNTIL YOU HOVER OVER IT
// <BODY>
//   <DIV CALSL = "CONTAINER".
//     <IMG SCR = ""
//   </DIV>
// </BODY>
// */
// /*
// .CONTAINER IMG{
//   DISPLAY: NONE; - DOESN'T TAKE UP SPACE
//   VISIBILTY:HIDDEN; - STILL TAKES UP SPACE
// }
//
// .CONTAINER:HOVER IMG{
//   VISIBILITY:VISIBLE;
// }
// .CONTAINER:HOVER IMG{
//   OPACITY: 1;
// }
// .CONTAINER{
//   BACKGROUND: YELLOW;
// }
// */
//
// /*
// .CONTAINER.SELCTED IM{
// OPAACITY:1;
// }
// $('.CONTAINER') USING JQUERY
// */
