var BeerRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    var bv = new BeerWallView();
    $('#main').append(bv.$el);
    bv.render();
  }
});

var Beer = Backbone.Model.extend({
  url: '/beer'  
});

var Beers = Backbone.Collection.extend({
  model: Beer
});
var AddBeerWallView = Backbone.View.extend({

  //$el: $(this.el),
  events: {
    "click #button2": "addBeer"
  },

  initialize: function() { 
    this.collection.on("add", this.clearInput, this);
  },

  addBeer: function(e) {
    e.preventDefault();

    this.collection.create({ text: this.$('textarea').val() });
  },

  clearInput: function() {
    this.$('textarea').val('');
  },

});


var BeerView = Backbone.View.extend({
  events: {
    "click" : "dissaBEER"
  },

  render: function() {
    $(this.el).html('<div style="float:left"><img src="/assets/images/beer.png" /></div>');
    return this;
  },
  dissaBEER: function() {
    this.remove();

  }
});

var BeerWallView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.appendBeer, this);
  },

  appendBeer: function() {
    var beerBeer = new BeerView();
    $(this.el).append(beerBeer.render().el);
  }

});



$(document).ready(function() {
  //start it up here!
  var beers = new Beers();
  new AddBeerWallView({ el: $('#new'), collection: beers });
  new BeerWallView({ el: $('#wall'), collection: beers });
});
