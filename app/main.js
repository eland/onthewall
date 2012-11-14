var BeerRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    var bv = new BeerView();
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
var AddBeerView = Backbone.View.extend({

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

  initialize: function() {
    this.collection.on('add', this.appendBeer, this);
  },

  appendBeer: function(beer) {
    $('#wall').append('<p id=' + beer.cid + '>' + beer.escape('text') + '</p>');
  }

});



$(document).ready(function() {
  //start it up here!
  var beers = new Beers();
  new AddBeerView({ el: $('#new'), collection: beers });
  new BeerView({ el: $('#wall'), collection: beers });
  
});
