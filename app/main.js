//routes
var BeerRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    var bv = new BeerView();
    $('#main').append(bv.$el);
    bv.render();
    console.log('index route achieved');
  }
});

var BeerView = Backbone.View.extend({
  $el: $(this.el),

  events: {
    "click #button2" : "eventTest"
  },

  eventTest: function() {
    alert('Ride like the wind!');
  },

  render: function() {
    this.$el.append("<button type='button' id='button2'>button!</button><p class='beerclass'>I'm a beer view!</p>");
    return this;
  },

  initialize: function() { 
    _.bindAll(this, 'render');
  }

});
//model

//collection

//template? (should be in another file)  

$(document).ready(function() {
  //start it up here!
  var router = new BeerRouter();
  Backbone.history.start();
  //bv.initialize();
});
