var cityData = null;

$(document).ready(function(){
    $('.initiate').on('click', function(){
        if(cityData === null){
            $.get('template.html', function(data){
               cityData = data;
               $('.container').append(data);
            });
        } else {
            console.log("You already initiated.");
        }
    })
});
