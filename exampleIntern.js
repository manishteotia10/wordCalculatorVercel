var newString;
var wordLeft;
var x;
var length;
function count()
{
x=$(".message").val();
length= x.length;
if(length==0)
{
  $(".result").text('Start Typing..... You typed  " 0 " Words.');
  $(".wordTyped").text("Words Typed : 0");
  $(".wordRemaining").text("Words Remaining : 100");
}


else
{
  newString = x.split(" ").length;

  wordLeft= 100-newString;
  $(".wordTyped").text("Words Typed : "+newString);

  if(wordLeft>=0)
  {
    $(".wordRemaining").text("Words Remaining : "+wordLeft);
    $(".result").text("You typed "+newString+" words.And you left with "+wordLeft+" words.");
    $(".wordRemaining").css("color","black");
  }
  else{
    $(".wordRemaining").css("color","red");
    $(".wordRemaining").text("!You Ran Out Of Words");
    $(".result").text("You typed "+newString+" words.You Ran Out Of words");

  }


}}
$(document).on("keydown",function(){
  count();
})
