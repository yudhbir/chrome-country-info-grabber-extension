$(document).ready(function(){
      $("#country_selector").countrySelect();
      var countryData = $("#country_selector").countrySelect("getSelectedCountryData");
      console.log(countryData);
      render_Country_Info(countryData.iso2);
      $(".country-list").on('click','li',function(event){
            var country_code=$(event.target).parent().data('country-code');
            // console.log(country_code);
            render_Country_Info(country_code);
      });
      
});
function render_Country_Info(countryData){
      $.ajax({
            url: "http://api.worldbank.org/v2/country/"+countryData+"?format=json",
             success: function(result){
                  if(result[1][0]){
                        var html='<p>Country Name: '+result[1][0].name+'</p>';
                        html+='<p>capital Name: '+result[1][0].capitalCity+'</p>';
                        html+='<p>Latitude: '+result[1][0].latitude+'</p>';
                        html+='<p>Longitude: '+result[1][0].longitude+'</p>';
                        $("#div1").html(html);
                  }
            }
      });
}