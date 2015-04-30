var cityHtml = null;
var cityData = null;
var i;

$(document).ready(function(){
    $('.initiate').on('click', function(){
        if(cityHtml === null){
            $.get('template.html', function(data){
               cityHtml = data;
            });
            $.get('data.json', function(data){
                cityData = data;
                for(i = 0; i < data.cities.length; i++) {
                    $('.mainContainer').append(cityHtml);
                    var cityName = data.cities[i].name;
                    var cityArea = data.cities[i].area;
                    var cityPop = data.cities[i].population;
                    $('.cityDataContainer').last().append("<p>Name: " + cityName + "<br>Area: " + cityArea + "<br>Population: " + cityPop + "</p>");
                }
            });
        } else {
            console.log("You already initiated.");
        }


        $('.container').on('click', '.removeButton', function(){
            //console.log("works", this);
            $(this).parents('.cityContainer').remove();
        });
    });

});
