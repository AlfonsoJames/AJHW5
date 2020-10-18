//set current day
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;

//color changes for time blocks
// var getTime = new Date().getHours();
var getTime = 11;
var time = parseInt(getTime);

$('.time-block').each(function(index, value) {
    var timeBlock = parseInt(this.id);
    if (timeBlock > 0 && timeBlock < 6 ) {
        timeBlock += 12;
       }
    console.log(timeBlock); 
    console.log(time);

    if 
    (time < timeBlock) {
        $( this ).removeClass( 'past present' ).addClass( 'future' );
    } 
    else if  
    (time == timeBlock) {
        $( this ).removeClass( 'past future' ).addClass( 'present' );
    } 
    else  
        $( this ).removeClass( 'future present' ).addClass( 'past' );
    }
  );
//   if (time < $("")) {
    
// }


//save button functions

