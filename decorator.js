
// Javascript Implementations of the Decorator Pattern //
// The aim here is to provide many examples of this pattern to help fellow developers understand this pattern. //


// What better way to illustrate the decorator pattern that with a create your own greasy fryup example...
// This example is heavily influenced by the macbook example shown in Addy Osmani's essential js design patterns book.

// Our Fry up Constructor
function FryUp() { 

  this.items = ["bacon","egg","sausage","beans","tomato"];
  this.cost = function () { return 5; }; 

}

// Add common methods to constructor prototype
FryUp.prototype.addItem = function( item ){

  this.items.push( item );

};

FryUp.prototype.displayCost = function(){

  return "£" + this.cost();

};

FryUp.prototype.displayItems = function(){
  
  var displayString = "",
        i;

  for ( i = 0; i < this.items.length; i++ ) {
    displayString += "Item " + ( i + 1 ) + ": " + this.items[i] + ", ";
  }

  return displayString;

};

// Fry up decorator 1
function addBlackPudding( fryUp ) { 

  var baseCost = fryUp.cost(); 
  fryUp.cost = function() { 
    return baseCost + 1; 
  }; 
  fryUp.addItem( "black pudding" );

} 

// Fry up decorator 2
function addHashBrown( fryUp ) { 

  var baseCost = fryUp.cost(); 
  fryUp.cost = function() { 
    return baseCost + 0.75; 
  };
  fryUp.addItem( "hash browns" );

} 

// Fry up decorator 3
function addFriedSlice( fryUp ) { 

  var baseCost = fryUp.cost(); 
  fryUp.cost = function() { 
    return baseCost + 0.85; 
  }; 
  fryUp.addItem( "fried slice" );

} 

// Create fry up instance
var myFryUp = new FryUp(); 

// Decorate instance with additional items
addBlackPudding( myFryUp ); 
addHashBrown( myFryUp );
addFriedSlice( myFryUp );

// £7.6
console.log( myFryUp.displayCost() );

// " Item 1: bacon, Item 2: egg, Item 3: sausage, Item 4: beans, Item 5: tomato, Item 6: black pudding, Item 7: hash browns, Item 8: fried slice, "
console.log( myFryUp.displayItems() );
