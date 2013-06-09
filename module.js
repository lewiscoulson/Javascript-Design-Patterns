
// Javascript Implementations of the Module Pattern //
// The aim here is to provide many examples of this pattern to help fellow developers understanding of this pattern. //


var lewis = (function () {

  // Private properties
  var age = 24,
      height = 5,
      favouriteMusic = ["Bonobo","Tycho","Thom Yorke","Teebs","Four Tet"];

  // Private methods
  function getActualHeight(){
    return parseInt( height , 10);
  }

  // Return public methods
  return { 

    getAge: function() {
     
      return "My age is - " + age;

    },

    setAge: function( newAge ) {
      
      age = newAge;

    },

    getHeight: function() {
      
      return "My height is - " + ( getActualHeight() + 1 ) + " foot";

    },

    setAge: function( newHeight ) {
      
      age = newHeight;

    },

    getFavouriteMusic: function(){
      
      var displayString = "",
        i;

      for ( i = 0; i < favouriteMusic.length; i++ ) {
        displayString += this.items[i] + ", ";
      }

      return displayString;

    },

    setFavouriteMusic: function( newArtist ){
      
      favouriteMusic.push( newArtist );

    }

  };

}());

// "My height is - 6 foot"
lewis.getHeight();