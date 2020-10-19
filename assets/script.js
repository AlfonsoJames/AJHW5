// //set current day//

setInterval(function(){
    var date = moment().format('MMMM Do YYYY h:MM:ss a');
    $('#currentDay').text(date);
}, 1000);



//color changes for time blocks//
$('.time-block').each(function() {
    var timeBlock = parseInt(this.id);
    if (timeBlock > 0 && timeBlock < 6 ) {
        timeBlock += 12;
       }

       // var getTime = new Date().getHours();
       var getTime = moment().format("HH"); 
       var time = parseInt(getTime);
// console.log(time);
// console.log(timeBlock); 
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
//save button functions//
$(".saveBtn").hover(function(){
    $(this).css('background-color', 'yellow');
    }, function(){
    $(this).css('background-color', '#06AED5');
  });
$('.saveBtn').each(function(index, value) {  

    $(this).click (function() {
        var textarea = $(this).siblings('textarea');
        // var parent = $(this).parent();
        var key = $(this).parent().attr("id");
        var entry = $(textarea).val();
        if (entry != "") {
            // console.log(key);
            // console.log(entry);
            localStorage.setItem(key, entry); //store a key/value
            var recall = localStorage.getItem(key); //retrieve the key
        }
    });
});
// load saved events//

$( document ).ready(function() {
    $('.saveBtn').each(function(index, value) {  
        var key = $(this).parent().attr("id");
        var recall = localStorage.getItem(key);
        var textarea = $(this).siblings('textarea');
        $(textarea).text(recall);
        // console.log(textarea);
    })
})
