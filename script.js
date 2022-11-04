/* Greeting, Name & Start Order Code */

var greetings = ["Hello", "Hi", "Kia ora", "Ni hao", "Bonjour", "Konnichiwa", "Aloha", "Hola"];

var ran = Math.floor(Math.random()* 8);
var name = prompt("Hello, what is your name?");
alert(greetings[ran] + " " + name + " and welcome to our tree ordering system!");

var ordering = prompt("Would you like to place an order? (Type y if you do)");
if (ordering.toLowerCase() != "y") {
  ordering = prompt("Guess you can't order then, but if it was a misclick then type y to start your order");
}

/* Order Code */

while (ordering.toLowerCase() == "y") {
  var cost = 0;
  var menu = "boop";
  var order = [];
  alert("Here is our selection of trees: \n \nCommon Trees: ($8.50) \nOak \nBirch \nPine  \nSpruce \nKing Palm \nElm \nWillow \n \nExotic Trees: ($13.50) \nBonsai \nAcer Palmatum \nPonga \nRainbow Eucalyptus \nKakabeak");
  var menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
  if (menu.toLowerCase() != "o" && menu.toLowerCase() != "b" && menu.toLowerCase() != "p" && menu.toLowerCase() != "s" && menu.toLowerCase() != "k" && menu.toLowerCase() != "e" && menu.toLowerCase() != "w" && menu.toLowerCase() != "bon" && menu.toLowerCase() != "acer" && menu.toLowerCase() != "pong" && menu.toLowerCase() != "rain" && menu.toLowerCase() != "kaka") {
    alert("Invalid option chosen, you can only choose from the selection on the tree menu. Please try again");
    menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
  }
/* Oak Tree Code */
  if (menu.toLowerCase() == "o" || menu == "o") {
    var oak = prompt("Oak Trees: $8.50 \nHow many Oak Trees would you like to order? (Max 5)");
    if (oak > "5") {
      alert("Sorry, you can only buy up to five oak trees per order");
      oak = prompt("Oak Trees: $8.50 \nHow many Oak Trees would you like to order? (Max 5)");
    } else if (oak <= "0") {
      alert("Invalid amount, please try again");
      oak = prompt("Oak Trees: $8.50 \nHow many Oak Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (8.50 * oak);
      order.push("\n" + oak + " Oak Trees");
      var again = prompt("Thank you for ordering " + oak + " oak trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  } 
/* Birch Tree Code */
  if (menu.toLowerCase() == "b" || menu == "b") {
    var birch = prompt("Birch Trees: $8.50 \nHow many Birch Trees would you like to order? (Max 5)");
    if (birch > "5") {
      alert("Sorry, you can only buy up to five birch trees per order");
      birch = prompt("Birch Trees: $8.50 \nHow many Birch Trees would you like to order? (Max 5)");
    } else if (birch <= "0") {
      alert("Invalid amount, please try again");
      birch = prompt("Birch Trees: $8.50 \nHow many Birch Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (8.50 * birch);
      order.push("\n" + birch + " Birch Trees");
      var again = prompt("Thank you for ordering " + birch + " birch trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  }
/* Pine Tree Code */
  if (menu.toLowerCase() == "p" || menu == "p") {
    var pine = prompt("Pine Trees: $8.50 \nHow many Pine Trees would you like to order? (Max 5)");
    if (pine > "5") {
      alert("Sorry, you can only buy up to five pine trees per order");
      pine = prompt("Pine Trees: $8.50 \nHow many Pine Trees would you like to order? (Max 5)");
    } else if (pine <= "0") {
      alert("Invalid amount, please try again");
      pine = prompt("Pine Trees: $8.50 \nHow many Pine Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (8.50 * pine);
      order.push("\n" + pine + " Pine Trees");
      var again = prompt("Thank you for ordering " + pine + " pine trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  }
/* Spruce Tree Code */
  if (menu.toLowerCase() == "s" || menu == "s") {
    var spruce = prompt("Spruce Trees: $8.50 \nHow many Spruce Trees would you like to order? (Max 5)");
    if (spruce > "5") {
      alert("Sorry, you can only buy up to five spruce trees per order");
      spruce = prompt("Spruce Trees: $8.50 \nHow many Spruce Trees would you like to order? (Max 5)");
    } else if (spruce <= "0") {
      alert("Invalid amount, please try again");
      spruce = prompt("Spruce Trees: $8.50 \nHow many Spruce Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (8.50 * spruce);
      order.push("\n" + spruce + " Spruce Trees");
      var again = prompt("Thank you for ordering " + spruce + " spruce trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  }
/* King Palm Tree Code */
  if (menu.toLowerCase() == "k" || menu == "k") {
    var kingPalm = prompt("King Palm Trees: $8.50 \nHow many King Palm Trees would you like to order? (Max 5)");
    if (kingPalm > "5") {
      alert("Sorry, you can only buy up to five king palm trees per order");
      kingPalm = prompt("King Palm Trees: $8.50 \nHow many King Palm Trees would you like to order? (Max 5)");
    } else if (kingPalm <= "0") {
      alert("Invalid amount, please try again");
      kingPalm = prompt("King Palm Trees: $8.50 \nHow many King Palm Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (8.50 * kingPalm);
      order.push("\n" + kingPalm + " King Palm Trees");
      var again = prompt("Thank you for ordering " + kingPalm + " king palm trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  }
/* Elm Tree Code */
  if (menu.toLowerCase() == "e" || menu == "e") {
    var elm = prompt("Elm Trees: $8.50 \nHow many Elm Trees would you like to order? (Max 5)");
    if (elm > "5") {
      alert("Sorry, you can only buy up to five elm trees per order");
      elm = prompt("Elm Trees: $8.50 \nHow many Elm Trees would you like to order? (Max 5)");
    } else if (elm <= "0") {
      alert("Invalid amount, please try again");
      elm = prompt("Elm Trees: $8.50 \nHow many Elm Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (8.50 * elm);
      order.push("\n" + elm + " Elm Trees");
      var again = prompt("Thank you for ordering " + elm + " elm trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  }
/* Willow Tree Code */
  if (menu.toLowerCase() == "w" || menu == "w") {
    var willow = prompt("Willow Trees: $8.50 \nHow many Willow Trees would you like to order? (Max 5)");
    if (willow > "5") {
      alert("Sorry, you can only buy up to five willow trees per order");
      willow = prompt("Willow Trees: $8.50 \nHow many Willow Trees would you like to order? (Max 5)");
    } else if (willow <= "0") {
      alert("Invalid amount, please try again");
      willow = prompt("Willow Trees: $8.50 \nHow many Willow Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (8.50 * willow);
      order.push("\n" + willow + " Willow Trees");
      var again = prompt("Thank you for ordering " + willow + " willow trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  }
/* Bonsai Tree Code */
  if (menu.toLowerCase() == "bon" || menu == "bon") {
    var bonsai = prompt("Bonsai Trees: $13.50 \nHow many Bonsai Trees would you like to order? (Max 5)");
    if (bonsai > "5") {
      alert("Sorry, you can only buy up to five bonsai trees per order");
      bonsai = prompt("Bonsai Trees: $13.50 \nHow many Bonsai Trees would you like to order? (Max 5)");
    } else if (bonsai <= "0") {
      alert("Invalid amount, please try again");
      bonsai = prompt("Bonsai Trees: $13.50 \nHow many Bonsai Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (13.50 * bonsai);
      order.push("\n" + bonsai + " Bonsai Trees");
      var again = prompt("Thank you for ordering " + bonsai + " bonsai trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  } 
/* Acer Palmatum Tree Code */
  if (menu.toLowerCase() == "acer" || menu == "acer") {
    var acerPalmatum = prompt("Acer Palmatum Trees: $13.50 \nHow many Acer Palmatum Trees would you like to order? (Max 5)");
    if (acerPalmatum > "5") {
      alert("Sorry, you can only buy up to five acer palmatum trees per order");
      acerPalmatum = prompt("Acer Palmatum Trees: $13.50 \nHow many Acer Palmatum Trees would you like to order? (Max 5)");
    } else if (acerPalmatum <= "0") {
      alert("Invalid amount, please try again");
      acerPalmatum = prompt("Acer Palmatum Trees: $13.50 \nHow many Acer Palmatum Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (13.50 * acerPalmatum);
      order.push("\n" + acerPalmatum + " Acer Palmatum Trees");
      var again = prompt("Thank you for ordering " + acerPalmatum + " acer palmatum trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  } 
/* Ponga Tree Code */
  if (menu.toLowerCase() == "pong" || menu == "pong") {
    var ponga = prompt("Ponga Trees: $13.50 \nHow many Ponga Trees would you like to order? (Max 5)");
    if (ponga > "5") {
      alert("Sorry, you can only buy up to five ponga trees per order");
      ponga = prompt("Ponga Trees: $13.50 \nHow many Ponga Trees would you like to order? (Max 5)");
    } else if (ponga <= "0") {
      alert("Invalid amount, please try again");
      ponga = prompt("Ponga Trees: $13.50 \nHow many Ponga Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (13.50 * ponga);
      order.push("\n" + ponga + " Ponga Trees");
      var again = prompt("Thank you for ordering " + ponga + " ponga trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  }
/* Rainbow Eucalytpus Tree Code */
  if (menu.toLowerCase() == "rain" || menu == "rain") {
    var rainbowEucalyptus = prompt("Rainbow Eucalyptus Trees: $13.50 \nHow many Rainbow Eucalyptus Trees would you like to order? (Max 5)");
    if (rainbowEucalyptus > "5") {
      alert("Sorry, you can only buy up to five rainbow eucalyptus trees per order");
      rainbowEucalyptus = prompt("Rainbow Eucalyptus Trees: $13.50 \nHow many Rainbow Eucalyptus Trees would you like to order? (Max 5)");
    } else if (rainbowEucalyptus <= "0") {
      alert("Invalid amount, please try again");
      rainbowEucalyptus = prompt("Rainbow Eucalyptus Trees: $13.50 \nHow many Rainbow Eucalyptus Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (13.50 * rainbowEucalyptus);
      order.push("\n" + rainbowEucalyptus + " Rainbow Eucalyptus Trees");
      var again = prompt("Thank you for ordering " + rainbowEucalyptus + " rainbow eucalyptus trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  } 
/* Kakabeak Tree Code */
  if (menu.toLowerCase() == "kaka" || menu == "kaka") {
    var kakabeak = prompt("Kakabeak Trees: $13.50 \nHow many Kakabeak Trees would you like to order? (Max 5)");
    if (kakabeak > "5") {
      alert("Sorry, you can only buy up to five kakabeak trees per order");
      kakabeak = prompt("Kakabeak Trees: $13.50 \nHow many Kakabeak Trees would you like to order? (Max 5)");
    } else if (kakabeak <= "0") {
      alert("Invalid amount, please try again");
      kakabeak = prompt("Kakabeak Trees: $13.50 \nHow many Kakabeak Trees would you like to order? (Max 5)");
    } else {
      cost = cost + (13.50 * kakabeak);
      order.push("\n" + kakabeak + " Kakabeak Trees");
      var again = prompt("Thank you for ordering " + kakabeak + " kakabeak trees, would you like to order more trees? (Type y if you do)");
    } if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
    }
  }
/* Pick Up/Delivery + End Order Code */
  var type = prompt("How would you like to take your order? \nPick Up (type p) \nDelivery (type d)");
  if (type.toLowerCase() == "p") {
    var phone = prompt("Please enter your phone number here so we can ring you when your order's ready");
    order.sort();
    alert("Your order is:" + order + "\nPhone: " + phone + "\nTotal Cost: \n$" + cost);
    var confirm = prompt("Type y to confirm your order");
  } else if (type.toLowerCase() == "d") {
    var address = prompt("Please enter your address so we can deliver it straight to you");
    phone = prompt("Please enter your phone number here so we can ring you when your order's ready and on its way");
    cost = cost + 3;
    order.sort();
    alert("Your order is: \n" + order + "\nPhone: " + phone + "\nAddress: " + address + "\nTotal Cost: \n$" + cost);
    confirm = prompt("Type y to confirm your order or any other key to cancel it");
} else {
    alert("Sorry, that is an invalid option, please try again");
    type = prompt("How would you like to take your order? \nPick Up (type p) \nDelivery (type d)");
} if (confirm.toLowerCase() != "y") {
    alert("Order cancelled");
}

  var ordering = prompt("Type y if you'd like to place another order");
}

/* Farewell Code */
var farewells = ["Farewell", "Goodbye", "Servus", "Sayonara", "Zai jin", "Adios", "Haere rā", "Tschüss"];
alert(farewells[ran] + " " + name + ", we hope to see you again soon!");