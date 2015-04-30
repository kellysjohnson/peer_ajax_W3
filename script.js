var cityHtml = null;
var cityData = null;

$(document).ready(function(){
    $('.initiate').on('click', function(){
        if(cityHtml === null){
            $.get('template.html', function(data){
               cityHtml = data;
               $('.container').append(data);
            });
        } else {
            console.log("You already initiated.");
        }

        $.get('data.json', function(data){
            cityData = data;
            var cityName = data.cities[0].name;
            var cityArea = data.cities[0].area;
            var cityPop = data.cities[0].population;
            $('.cityDataContainer').append("<p>Name: " + cityName + "<br>Area: " + cityArea + "<br>Population: " + cityPop + "</p>");
        });

        $('.container').on('click', '.removeButton', function(){
            //console.log("works", this);
            $(this).parents('.cityContainer').remove();
        });
    });

});
