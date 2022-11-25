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

function orderFunction() {
  while (menu.toLowerCase() != "o" && menu.toLowerCase() != "b" && menu.toLowerCase() != "p" && menu.toLowerCase() != "s" && menu.toLowerCase() != "k" && menu.toLowerCase() != "e" && menu.toLowerCase() != "w" && menu.toLowerCase() != "bon" && menu.toLowerCase() != "acer" && menu.toLowerCase() != "pong" && menu.toLowerCase() != "rain" && menu.toLowerCase() != "kaka") {
    alert("Invalid option chosen, you can only choose from the selection on the tree menu. Please try again");
    menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
  } 
}

while (ordering.toLowerCase() == "y") {
  var menu = "boop";
  var again = "beep";
  var phone = '';
  var totalTrees = 0;
  var cost = 0;
  var costOne = 0;
  var costTwo = 0;
  var oak = 0;
  var birch = 0;
  var pine = 0;
  var spruce = 0;
  var kingPalm = 0;
  var elm = 0;
  var willow = 0;
  var bonsai = 0;
  var acerPalmatum = 0;
  var ponga = 0;
  var rainbowEucalyptus = 0;
  var kakabeak = 0;
  var stanTrees = 0;
  var exoTrees = 0;
  var firstCost = 0;
  var secondCost = 0;
  var order = [];
  alert("Here is our selection of trees: \n \nCommon Trees: ($8.50) \nOak \nBirch \nPine  \nSpruce \nKing Palm \nElm \nWillow \n \nExotic Trees: ($13.50) \nBonsai \nAcer Palmatum \nPonga \nRainbow Eucalyptus \nKakabeak");
  menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
  orderFunction(menu);
/* Oak Tree Code */
  if (menu.toLowerCase() == "o" || menu == "o") {
    oak = prompt("Oak Trees: $8.50 \nHow many Oak Trees would you like to order? (Max 5)");
    if (oak > "5") {
      alert("Sorry, you can only buy up to five oak trees per order");
      oak = prompt("Oak Trees: $8.50 \nHow many Oak Trees would you like to order? (Max 5)");
    } else if (oak <= "0") {
      alert("Invalid amount, please try again");
      oak = prompt("Oak Trees: $8.50 \nHow many Oak Trees would you like to order? (Max 5)");
    } order.push("\n" + oak + " Oak Tree(s)");
      stanTrees = Number(stanTrees) + Number(oak);
      again = prompt("Thank you for ordering " + oak + " oak tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  } 
/* Birch Tree Code */
  if (menu.toLowerCase() == "b" || menu == "b") {
    birch = prompt("Birch Trees: $8.50 \nHow many Birch Trees would you like to order? (Max 5)");
    if (birch > "5") {
      alert("Sorry, you can only buy up to five birch trees per order");
      birch = prompt("Birch Trees: $8.50 \nHow many Birch Trees would you like to order? (Max 5)");
    } else if (birch <= "0") {
      alert("Invalid amount, please try again");
      birch = prompt("Birch Trees: $8.50 \nHow many Birch Trees would you like to order? (Max 5)");
    } order.push("\n" + birch + " Birch Tree(s)");
      stanTrees = Number(stanTrees) + Number(birch);
      again = prompt("Thank you for ordering " + birch + " birch tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  }
/* Pine Tree Code */
  if (menu.toLowerCase() == "p" || menu == "p") {
    pine = prompt("Pine Trees: $8.50 \nHow many Pine Trees would you like to order? (Max 5)");
    if (pine > "5") {
      alert("Sorry, you can only buy up to five pine trees per order");
      pine = prompt("Pine Trees: $8.50 \nHow many Pine Trees would you like to order? (Max 5)");
    } else if (pine <= "0") {
      alert("Invalid amount, please try again");
      pine = prompt("Pine Trees: $8.50 \nHow many Pine Trees would you like to order? (Max 5)");
    } order.push("\n" + pine + " Pine Tree(s)");
      stanTrees = Number(stanTrees) + Number(pine);
      again = prompt("Thank you for ordering " + pine + " pine tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  }
/* Spruce Tree Code */
  if (menu.toLowerCase() == "s" || menu == "s") {
    spruce = prompt("Spruce Trees: $8.50 \nHow many Spruce Trees would you like to order? (Max 5)");
    if (spruce > "5") {
      alert("Sorry, you can only buy up to five spruce trees per order");
      spruce = prompt("Spruce Trees: $8.50 \nHow many Spruce Trees would you like to order? (Max 5)");
    } else if (spruce <= "0") {
      alert("Invalid amount, please try again");
      spruce = prompt("Spruce Trees: $8.50 \nHow many Spruce Trees would you like to order? (Max 5)");
    } order.push("\n" + spruce + " Spruce Tree(s)");
      stanTrees = Number(stanTrees) + Number(spruce);
      again = prompt("Thank you for ordering " + spruce + " spruce tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  }
/* King Palm Tree Code */
  if (menu.toLowerCase() == "k" || menu == "k") {
    kingPalm = prompt("King Palm Trees: $8.50 \nHow many King Palm Trees would you like to order? (Max 5)");
    if (kingPalm > "5") {
      alert("Sorry, you can only buy up to five king palm trees per order");
      kingPalm = prompt("King Palm Trees: $8.50 \nHow many King Palm Trees would you like to order? (Max 5)");
    } else if (kingPalm <= "0") {
      alert("Invalid amount, please try again");
      kingPalm = prompt("King Palm Trees: $8.50 \nHow many King Palm Trees would you like to order? (Max 5)");
    } order.push("\n" + kingPalm + " King Palm Tree(s)");
      stanTrees = Number(stanTrees) + Number(kingPalm);
      again = prompt("Thank you for ordering " + kingPalm + " king palm tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  }
/* Elm Tree Code */
  if (menu.toLowerCase() == "e" || menu == "e") {
    elm = prompt("Elm Trees: $8.50 \nHow many Elm Trees would you like to order? (Max 5)");
    if (elm > "5") {
      alert("Sorry, you can only buy up to five elm trees per order");
      elm = prompt("Elm Trees: $8.50 \nHow many Elm Trees would you like to order? (Max 5)");
    } else if (elm <= "0") {
      alert("Invalid amount, please try again");
      elm = prompt("Elm Trees: $8.50 \nHow many Elm Trees would you like to order? (Max 5)");
    } order.push("\n" + elm + " Elm Tree(s)");
      stanTrees = Number(stanTrees) + Number(elm);
      again = prompt("Thank you for ordering " + elm + " elm tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  }
/* Willow Tree Code */
  if (menu.toLowerCase() == "w" || menu == "w") {
    willow = prompt("Willow Trees: $8.50 \nHow many Willow Trees would you like to order? (Max 5)");
    if (willow > "5") {
      alert("Sorry, you can only buy up to five willow trees per order");
      willow = prompt("Willow Trees: $8.50 \nHow many Willow Trees would you like to order? (Max 5)");
    } else if (willow <= "0") {
      alert("Invalid amount, please try again");
      willow = prompt("Willow Trees: $8.50 \nHow many Willow Trees would you like to order? (Max 5)");
    } order.push("\n" + willow + " Willow Tree(s)");
      stanTrees = Number(stanTrees) + Number(willow);
      again = prompt("Thank you for ordering " + willow + " willow tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  }
/* Bonsai Tree Code */
  if (menu.toLowerCase() == "bon" || menu == "bon") {
    bonsai = prompt("Bonsai Trees: $13.50 \nHow many Bonsai Trees would you like to order? (Max 5)");
    if (bonsai > "5") {
      alert("Sorry, you can only buy up to five bonsai trees per order");
      bonsai = prompt("Bonsai Trees: $13.50 \nHow many Bonsai Trees would you like to order? (Max 5)");
    } else if (bonsai <= "0") {
      alert("Invalid amount, please try again");
      bonsai = prompt("Bonsai Trees: $13.50 \nHow many Bonsai Trees would you like to order? (Max 5)");
    } order.push("\n" + bonsai + " Bonsai Tree(s)");
      exoTrees = Number(exoTrees) + Number(bonsai);
      again = prompt("Thank you for ordering " + bonsai + " bonsai tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
     if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  } 
/* Acer Palmatum Tree Code */
  if (menu.toLowerCase() == "acer" || menu == "acer") {
    acerPalmatum = prompt("Acer Palmatum Trees: $13.50 \nHow many Acer Palmatum Trees would you like to order? (Max 5)");
    if (acerPalmatum > "5") {
      alert("Sorry, you can only buy up to five acer palmatum trees per order");
      acerPalmatum = prompt("Acer Palmatum Trees: $13.50 \nHow many Acer Palmatum Trees would you like to order? (Max 5)");
    } else if (acerPalmatum <= "0") {
      alert("Invalid amount, please try again");
      acerPalmatum = prompt("Acer Palmatum Trees: $13.50 \nHow many Acer Palmatum Trees would you like to order? (Max 5)");
    } order.push("\n" + acerPalmatum + " Acer Palmatum Tree(s)");
      exoTrees = Number(exoTrees) + Number(acerPalmatum);
      again = prompt("Thank you for ordering " + acerPalmatum + " acer palmatum tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  } 
/* Ponga Tree Code */
  if (menu.toLowerCase() == "pong" || menu == "pong") {
    ponga = prompt("Ponga Trees: $13.50 \nHow many Ponga Trees would you like to order? (Max 5)");
    if (ponga > "5") {
      alert("Sorry, you can only buy up to five ponga trees per order");
      ponga = prompt("Ponga Trees: $13.50 \nHow many Ponga Trees would you like to order? (Max 5)");
    } else if (ponga <= "0") {
      alert("Invalid amount, please try again");
      ponga = prompt("Ponga Trees: $13.50 \nHow many Ponga Trees would you like to order? (Max 5)");
    } order.push("\n" + ponga + " Ponga Tree(s)");
      exoTrees = Number(exoTrees) + Number(ponga);
      again = prompt("Thank you for ordering " + ponga + " ponga tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  }
/* Rainbow Eucalytpus Tree Code */
  if (menu.toLowerCase() == "rain" || menu == "rain") {
    rainbowEucalyptus = prompt("Rainbow Eucalyptus Trees: $13.50 \nHow many Rainbow Eucalyptus Trees would you like to order? (Max 5)");
    if (rainbowEucalyptus > "5") {
      alert("Sorry, you can only buy up to five rainbow eucalyptus trees per order");
      rainbowEucalyptus = prompt("Rainbow Eucalyptus Trees: $13.50 \nHow many Rainbow Eucalyptus Trees would you like to order? (Max 5)");
    } else if (rainbowEucalyptus <= "0") {
      alert("Invalid amount, please try again");
      rainbowEucalyptus = prompt("Rainbow Eucalyptus Trees: $13.50 \nHow many Rainbow Eucalyptus Trees would you like to order? (Max 5)");
    } order.push("\n" + rainbowEucalyptus + " Rainbow Eucalyptus Tree(s)");
      exoTrees = Number(exoTrees) + Number(rainbowEucalyptus);
      again = prompt("Thank you for ordering " + rainbowEucalyptus + " rainbow eucalyptus tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  } 
/* Kakabeak Tree Code */
  if (menu.toLowerCase() == "kaka" || menu == "kaka") {
    kakabeak = prompt("Kakabeak Trees: $13.50 \nHow many Kakabeak Trees would you like to order? (Max 5)");
    if (kakabeak > "5") {
      alert("Sorry, you can only buy up to five kakabeak trees per order");
      kakabeak = prompt("Kakabeak Trees: $13.50 \nHow many Kakabeak Trees would you like to order? (Max 5)");
    } else if (kakabeak <= "0") {
      alert("Invalid amount, please try again");
      kakabeak = prompt("Kakabeak Trees: $13.50 \nHow many Kakabeak Trees would you like to order? (Max 5)");
    } order.push("\n" + kakabeak + " Kakabeak Tree(s)");
      exoTrees = Number(exoTrees) + Number(kakabeak);
      again = prompt("Thank you for ordering " + kakabeak + " kakabeak tree(s), would you like to order more trees? (Type y if you do or any other key to finish your order)");
      if (again.toLowerCase() == "y" || again.toLowerCase() == "yes") {
      menu = prompt("What would you like to order? Type O for Oak, B for Birch, P for Pine, S for Spruce, K for King Palm, E for Elm, W for Willow, Bon for Bonsai, Acer for Acer Palmatum, Pong for Ponga, Rain for Rainbow Eucalyptus or Kaka for Kakabeak");
      orderFunction(menu);
    }
  }
/* Pick Up/Delivery + End Order Code */
  
  function stanFunction(standTrees, stanCost) {
    firstCost = standTrees * stanCost;
    return firstCost;
  }

  function exoFunction(exotTrees, exoCost) {
    secondCost = exotTrees * exoCost;
    return secondCost;
  }

  costOne = stanFunction(stanTrees, 8.5);
  costTwo = exoFunction(exoTrees, 13.5);
  cost = costOne + costTwo;
  totalTrees = Number(stanTrees) + Number(exoTrees);

  function phoneFunction() {
    while (isNaN(phone)) {
      alert("Sorry, you can only enter numbers when typing your phone number. Please try again");
      phone = prompt("Please enter your phone number here so we can ring you when your order's ready");
    } if (phone.length < 8) {
      alert("Sorry, but a phone number needs to be at least 8 digits long. Please try again");
      phone = prompt("Please enter your phone number here so we can ring you when your order's ready");
      phoneFunction(phone);
    } else if (phone.length > 10) {
      alert("Sorry, a phone number can only be up to 10 digits long, please try again");
      phone = prompt("Please enter your phone number here so we can ring you when your order's ready");
      phoneFunction(phone);
    } else if (phone.length == 8) {
      phone = phone.charAt(0) + phone.charAt(1) + '-' + phone.charAt(2) + phone.charAt(3) + phone.charAt(4) + '-' + phone.charAt(5) + phone.charAt(6) + phone.charAt(7);
    } else {
       phone = phone.charAt(0) + phone.charAt(1) + phone.charAt(2) + '-' + phone.charAt(3) + phone.charAt(4) + phone.charAt(5) + '-' + phone.charAt(6) + phone.charAt(7) + phone.charAt(8) + phone.charAt(9);
    }
  }

  if (again.toLowerCase() != "y") {
    var type = prompt("How would you like to take your order? \nPick Up (type p) \nDelivery (type d)");
  if (type.toLowerCase() == "p") {
    var phone = prompt("Please enter your phone number here so we can ring you when your order's ready");
    phoneFunction(phone);
    order.sort();
    alert("Your order is: " + order + "\nPhone: " + phone + "\nTotal Trees: " + totalTrees + "\nTotal Cost: $" + cost);
    var confirm = prompt("Type y to confirm your order or any other key to cancel");
  } else if (type.toLowerCase() == "d") {
    var address = prompt("Please enter your address so we can deliver it straight to you");
    phone = prompt("Please enter your phone number here so we can ring you when your order's ready and on its way");
    phoneFunction(phone);
    cost = cost + 3;
    order.sort();
    alert("Your order is: " + order + "\nPhone: " + phone + "\nAddress: " + address + "\nTotal Trees: " + totalTrees + "\nTotal Cost: $" + cost);
    confirm = prompt("Type y to confirm your order or any other key to cancel it");
} else {
    alert("Sorry, that is an invalid option, please try again");
    type = prompt("How would you like to take your order? \nPick Up (type p) \nDelivery (type d)");
} if (confirm.toLowerCase() != "y" || confirm.toLowerCase() == null) {
    alert("Order cancelled");
} if (confirm.toLowerCase() == "y") {
    alert("Order confirmed");
}
  var ordering = prompt("Type y if you'd like to place another order or any other key to exit");
  }
}

/* Farewell Code */
var farewells = ["Farewell", "Goodbye", "Servus", "Sayonara", "Zai jin", "Adios", "Haere rā", "Tschüss"];
alert(farewells[ran] + " " + name + ", we hope to see you again soon!");