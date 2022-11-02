/* Greeting, Name & Start Order Code */

var greetings = ["Hello", "Hi", "Kia ora", "Ni hao", "Bonjour", "Konnichiwa", "Aloha", "Hola"];

var ran = Math.floor(Math.random()* 8);
var name = prompt("Hello, what is your name?");
alert(greetings[ran] + " " + name + " and welcome to our tree ordering system!");

var ordering = prompt("Would you like to place an order?");
if (ordering.toLowerCase() != "yes") {
  ordering = prompt("Guess you can't order then, but if it was a misclick then type yes to start your order")
}

/* Order Code */

while (ordering.toLowerCase() == "yes") {
  var cost = 0;
  var menu = "boop"
  var order = [];
  alert("Here is our selection of trees: \n \nCommon Trees: ($8.50) \nOak \nBirch \nPine  \nSpruce \nKing Palm \nElm \nWillow \n \nExotic Trees: ($13.50) \nBonsai \nAcer Palmatum \nPonga \nRainbow Eucalyptus \nKakabeak");
  var menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalytpus or Kaka for Kakabeak");
/* Oak Tree Code */
  if (menu.toLowerCase() == "o") {
    var oak = prompt("Oak Trees: $8.50 \nHow many Oak Trees would you like to order? (Max 5)");
    if (oak > "5") {
      alert("Sorry, you can only buy up to five oak trees per order");
      oak = prompt("Oak Trees: $8.50 \nHow many Oak Trees would you like to order? (Max 5)");
    } else if (oak <= "0") {
      
    } else {
      cost = cost + (8.50 * oak)
      order.push(oak + " Oak Trees");
      var again = prompt("Thank you for ordering " + oak + " oak trees, would you like to order more trees?")
    } if (again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalytpus or Kaka for Kakabeak");
    }
  } 
/* Birch Tree Code */
  if (menu.toLowerCase() == "b") {
    var birch = prompt("Birch Trees: $8.50 \nHow many Birch Trees would you like to order? (Max 5)");
    if (birch > "5") {
      alert("Sorry, you can only buy up to five birch trees per order");
      birch = prompt("Birch Trees: $8.50 \nHow many Birch Trees would you like to order? (Max 5)");
    } else if (birch <= "0") {
      
    } else {
      cost = cost + (8.50 * birch);
      order.push(birch + " Birch Trees");
      var again = prompt("Thank you for ordering " + birch + " birch trees, would you like to order more trees?")
    } if (again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalytpus or Kaka for Kakabeak");
    }
  }
/* Pine Tree Code */
  if (menu.toLowerCase() == "p") {
    var pine = prompt("Pine Trees: $8.50 \nHow many Pine Trees would you like to order? (Max 5)");
    if (pine > "5") {
      alert("Sorry, you can only buy up to five pine trees per order");
      pine = prompt("Pine Trees: $8.50 \nHow many Pine Trees would you like to order? (Max 5)");
    } else if (pine <= "0") {
      
    } else {
      cost = cost + (8.50 * pine);
      order.push(pine + " Pine Trees");
      var again = prompt("Thank you for ordering " + pine + " pine trees, would you like to order more trees?")
    } if (again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalytpus or Kaka for Kakabeak");
    }
  }
/* Spruce Tree Code */
  if (menu.toLowerCase() == "s") {
    var spruce = prompt("Spruce Trees: $8.50 \nHow many Spruce Trees would you like to order? (Max 5)");
    if (spruce > "5") {
      alert("Sorry, you can only buy up to five spruce trees per order");
      spruce = prompt("Spruce Trees: $8.50 \nHow many Spruce Trees would you like to order? (Max 5)");
    } else if (spruce <= "0") {
      
    } else {
      cost = cost + (8.50 * spruce);
      order.push(spruce + " Spruce Trees");
      var again = prompt("Thank you for ordering " + spruce + " spruce trees, would you like to order more trees?")
    } if (again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalytpus or Kaka for Kakabeak");
    }
  }
/* King Palm Tree Code */
  if (menu.toLowerCase() == "k") {
    var kingPalm = prompt("King Palm Trees: $8.50 \nHow many King Palm Trees would you like to order? (Max 5)");
    if (kingPalm > "5") {
      alert("Sorry, you can only buy up to five king palm trees per order");
      kingPalm = prompt("King Palm Trees: $8.50 \nHow many King Palm Trees would you like to order? (Max 5)");
    } else if (kingPalm <= "0") {
      
    } else {
      cost = cost + (8.50 * kingPalm);
      order.push(kingPalm + " King Palm Trees");
      var again = prompt("Thank you for ordering " + kingPalm + " king palm trees, would you like to order more trees?")
    } if (again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalytpus or Kaka for Kakabeak");
    }
  }
/* Elm Tree Code */
  if (menu.toLowerCase() == "e") {
    var elm = prompt("Elm Trees: $8.50 \nHow many Elm Trees would you like to order? (Max 5)");
    if (elm > "5") {
      alert("Sorry, you can only buy up to five elm trees per order");
      elm = prompt("Elm Trees: $8.50 \nHow many Elm Trees would you like to order? (Max 5)");
    } else if (elm <= "0") {
      
    } else {
      cost = cost + (8.50 * elm);
      order.push(elm + " Elm Trees");
      var again = prompt("Thank you for ordering " + elm + " elm trees, would you like to order more trees?")
    } if (again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalytpus or Kaka for Kakabeak");
    }
  }
/* Willow Tree Code */
  if (menu.toLowerCase() == "w") {
    var willow = prompt("Willow Trees: $8.50 \nHow many Willow Trees would you like to order? (Max 5)");
    if (willow > "5") {
      alert("Sorry, you can only buy up to five willow trees per order");
      willow = prompt("Willow Trees: $8.50 \nHow many Willow Trees would you like to order? (Max 5)");
    } else if (willow <= "0") {
      
    } else {
      cost = cost + (8.50 * willow);
      order.push(willow + " Willow Trees");
      var again = prompt("Thank you for ordering " + willow + " willow trees, would you like to order more trees?")
    } if (again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalytpus or Kaka for Kakabeak");
    }
  }
  order.sort()
  alert("Your order is: \n" + order[0] + "\n" + order[1] + "\nTotal Cost: \n$" + cost);
  var ordering = prompt("Type yes if you'd like to place another order");
}

var farewells = ["Farewell", "Goodbye", "Servus", "Sayonara", "Zai jin", "Adios", "Haere rā", "Tschüss"];
alert(farewells[ran] + " " + name + ", we hope to see you again soon!");