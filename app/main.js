//routes
var BeerRouter = Backbone.Router.extend({
  routes: {
            "": "index"
          },

  index: function() {
          //alert("index!");
          console.log('index route achieved');
         }
});

var BeerView = Backbone.View.extend({
  events: {
            "click" : "eventTest"
          },
  eventTest: function() {
                alert('Ride like the wind!');
              },
  initialize: function() { 
              $('#main').append("<p class='beerclass'>I'm a beer view!</p>");
              }

});
//model

//collection

//view

//template? (should be in another file)  

$(document).ready(function() {
  //start it up here!
  var router = new BeerRouter();
  Backbone.history.start();
  var bv = new BeerView();
  //bv.initialize();
});
