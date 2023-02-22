# Jeu de Nim

## @showdialog
Tutoriel créé par :
![Afficher logo](https://github.com/jtamen/tuto1/blob/master/Images/logo-technotam-chappe1.jpg?raw=true)

## @showdialog
Académie :
![Afficher logo-académie](https://github.com/jtamen/tuto1/blob/master/Images/logo-IAN.png?raw=true)

## @showdialog
Nous allons réaliser un programme permettant de jouer au jeu de nim sur une carte micro:bit.
Vingt dels de la carte sont allumées au départ plus une en bas à gauche représentant le 
joueur 1. Deux personnes jouent à tour de rôle, et choisissent 1, 2 ou 3 allumettes (représentée par les leds
de la microbit). Lorsque le joueur 1 à pris un certain nombre d'alumettes c'est au joueur 2 de jouer, 
il est représenté par la led en bas à droite. Le joueur qui fini en enlevant la ou les dernières alumettes
a gagné la partie.
![Afficher image1](https://github.com/jtamen/tuto1/blob/master/Images/Capture%20d%E2%80%99%C3%A9cran%20nim1.jpg?raw=true)

## Etape 1
```ghost
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
    ```
Dans le bloc ``||basic: Au démarrage||``, on allume 20 leds :
```blocks
 basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
    ```
## Etape 2
On crée 1 variable :
* ``||Variables: Joueur1||``, qui suivant qu'elle sera à 1 ou à 0 indiquera si c'est au joueur 1 de jouer ou pas.
```blocks
 basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
let Joueur1 = 1
 ```
 
## Etape 3
Nous allons créer une ``||Functions : fonction||`` (sous-programme) qui permettra d'indiquer si c'est au joueur 1 de jouer ou au joueur 2.
Cette commande étant répétée à plusieurs reprise, il est conseillé d'en faire une ``||Functions : fonction||`` que nous appelerons chaque 
fois que nous en auront besoin. Nous créerons d'autres ``||Functions : fonctions||`` par la suite.
Nous nommerons cette 1ère fonction : ``||Functions : Modifier le joueur||``.

Dans la catégorie "Avancé", choisir ``||Functions : Fonction||``, puis "Créer une fonction".
Nommons la ``||Functions : Modifier le joueur||``.
```blocks
function Modifier_le_joueur () {
}
 ```
## Etape 4
Plaçons-y un bloc ``||Logic: si Vrai...alors...sinon||``
```blocks
function Modifier_le_joueur () {
    if (true) {
        } else {
        }
}
 ```
## Etape 5
Remplaçons ``||Logic: Vrai||`` par la variable ``||Variables: Joueur1||``
```blocks
function Modifier_le_joueur () {
    if (Joueur1) {
        } else {
        }
}
 ```
## Etape 6
Déposons le bloc ``||Variables: définir Joueur1 à 0||`` dans la condition ``||Logic: Si ...alors||`` 
et le bloc ``||Variables: définir Joueur1 à 1||`` dans la condition ``||Logic: sinon||``
```blocks
function Modifier_le_joueur () {
    if (Joueur1) {
        Joueur1 = 0
    } else {
        Joueur1 = 1
    }
}
 ```
## Etape 7
Déposons le bloc ``||Input: lorsque le bouton A est pressé||`` dans l'espace de travail. 
Glissons à l'intérieur le bloc "LED" ``||Led: éteindre x 0 y 0||`` ainsi que le bloc "Fonction" ``||Functions : appel Modifier le joueur||``
```blocks
let Joueur1 = 0
input.onButtonPressed(Button.A, function () {
    led.unplot(0, 0)
    Modifier_le_joueur()
})
function Modifier_le_joueur () {
    if (Joueur1) {
        Joueur1 = 0
    } else {
        Joueur1 = 1
    }
}
 ```
## @showdialog
A ce stade nous voulons savoir si chaque fois que l'on appuie sur le bouton A, la variable
``||Variables: joueur1||`` change d'état.
Pour cela nous allons utiliser le mode débogueur ![Afficher debogueur](https://github.com/jtamen/tuto1/blob/master/Images/Capture%20d%E2%80%99%C3%A9cran%20debogueur.jpg?raw=true)
Ce mode permet permet de voir l'état des variables ainsi que l'avancée dans le programme.
Nous pouvons même le ralentir en cliquant sur le mode "escargot" ![Afficher escargot](https://github.com/jtamen/tuto1/blob/master/Images/Capture%20d%E2%80%99%C3%A9cran%20ralentir.jpg?raw=true)

## @showdialog
En cliquant à plusieurs reprises sur le bouton A de la simulation, on voit dans ce mode "débogueur"
le changement d'état de la variable ``||Variables: joueur1||``.
![Afficher debogueur](https://github.com/jtamen/tuto1/blob/master/Images/debogueur.gif?raw=true)
Il est vivement recommandé d'utiliser ce mode de débogage, lorsqu'une nouvelle étape importante
du programme est créée. Cela permet de comparer le résultat par rapport à nos attentes.

 ## Etape 8
On crée 2 nouvelles variables :
* ``||Variables: x||``, qui indiquera la position de la led sur la ligne
(0 : position la plus à gauche de la matrice 5x4, 4: position la plus à droite de la matrice 5x4)
* ``||Variables: y||``, qui indiquera la position de la led sur la colonne
(0 : position la plus en haut de la matrice 5x4, 3: position la plus en bas de la matrice 5x4)
On défini ces 2 variables à 0 que l'on glisse dans le bloc ``||Basic: au démarrage||``.
```blocks
 basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
let Joueur1 = 1
let Y = 0
let x = 0
 ```
## Etape 9
Nous allons créer une nouvelle ``||Functions : fonction||``  qui permettra d'allumer la Del en bas à gauche (x:0 et y:4)
si c'est au joueur 1 de jouer et la Del en bas à droite (x:4 et y:4) si c'est au joueur 2.

Dans la catégorie "Avancé", choisir ``||Functions : Fonction||``, puis "Créer une fonction".
Nommons la ``||Functions : Del J1 ou J2||``.
- Plaçons-y un bloc ``||Logic: si Vrai...alors...sinon||``.
- Remplaçons ``||Logic: Vrai||`` par la variable ``||Variables: Joueur1||``.
- Déposons les blocs ``||Led: allumer x 0  y 4||`` et ``||Led: éteindre x 4  y 4||`` dans la condition ``||Logic: Si ...alors||``.
- Déposons les blocs ``||Led: allumer x 4  y 4||`` et ``||Led: éteindre x 0  y 4||`` dans la condition ``||Logic: sinon||``.
```blocks
function Del_J1_ou_J2 () {
    if (Joueur1) {
        led.plot(0, 4)
        led.unplot(4, 4)
    } else {
        led.plot(4, 4)
        led.unplot(0, 4)
    }
}
 ```
## Etape 10
Dans le bloc ``||basic: toujours||``, on glisse la fonction nouvellement créée.
```blocks
function Del_J1_ou_J2 () {
    let Joueur1 = 0
    if (Joueur1) {
        led.plot(0, 4)
        led.unplot(4, 4)
    } else {
        led.plot(4, 4)
        led.unplot(0, 4)
    }
}
basic.forever(function () {
    Del_J1_ou_J2()
})
```

## @showdialog
En cliquant à plusieurs reprises sur le bouton A de la simulation, on constate que
l'on permute de la Del du bas à gauche à celle de droite.
![Afficher nim1](https://github.com/jtamen/tuto1/blob/master/Images/nim1.gif?raw=true)

## Etape 11
Modifions à présent le bloc ``||Input: lorsque le bouton A est pressé||``. 
Dans le bloc "LED" ``||Led: éteindre x 0 y 0||``, glissons la variable ``||Variables: X||`` à la place du 0 à côté de x
et la variable ``||Variables: Y||`` à la place du 0 à côté de y
```blocks
input.onButtonPressed(Button.A, function () {
    led.unplot(X, Y)
    Modifier_le_joueur()
})
 ```
## Etape 12
Dans ce même bloc ``||Input: lorsque le bouton A est pressé||``, ajoutons un bloc
``||Variables: modifier X de 1||``. Chaque fois que l'on cliquera sur A, la Del suivante
s'éteindra.
```blocks
input.onButtonPressed(Button.A, function () {
    led.unplot(X, Y)
    X += 1
    Modifier_le_joueur()
})
 ```
 
## @showdialog
A ce stade, en mode débogueur nous constatons que chaque fois que nous cliquons sur A,
 la Del suivante s'éteint et c'est à l'autre joueur de jouer, mais lorsque la variable x
 atteint la valeur de 5, plus rien ne se passe. Ceci est normal car nous avons atteint la fin de la ligne.
 Dans la prochaine étape nous devrons faire varier Y.
![Afficher nim2](https://github.com/jtamen/tuto1/blob/master/Images/nim2.gif?raw=true)

## Etape 13
Toujours dans le bloc ``||Input: lorsque le bouton A est pressé||``, ajoutons un bloc
``||Logic: si ... alors||``. Mettons-y la condition "Si X supérieur ou égal à 5", et à l'intérieur
de cette boucle, glissons ``||Variables: définir X à 0||`` ainsi que ``||Variables: modifier Y de 1||``.
```blocks
input.onButtonPressed(Button.A, function () {
    led.unplot(X, Y)
    X += 1
    if (X >= 5) {
        X = 0
        Y += 1
    }
    Modifier_le_joueur()
})
 ```
## Etape 14
Nous arrivons à une étape cruciale pour simplifier le programme. Comme chaque joueur va devoir
à tour de rôle choisir d'éteindre une Del (cette partie vient d'être faite), deux ou trois Dels,
nous constatons que ces tâches vont être répétitives, nous allons donc en faire des sous-programmes ``||Functions: Fonctions||``.
Créons la fonction "eteindre del". 
```blocks
function eteindre_del () {
}
 ```
## Etape 15
Récupérons les blocs ``||Led: éteindre x X y Y||`` et ``||Variables: modifier X de 1||``
du bloc ``||Input: lorsque le bouton A est pressé||`` pour les glisser dans cette nouvelle fonction.
```blocks
function eteindre_del () {
    led.unplot(X, Y)
    X += 1
}
 ```

## Etape 16
Il faut ensuite faire appel à cette fonction ``||Functions: appel eteindre del||`` 
dans ``||Input: lorsque le bouton A est pressé||``
```blocks
function eteindre_del () {
    led.unplot(X, Y)
    X += 1
}
input.onButtonPressed(Button.A, function () {
    eteindre_del()
    if (X >= 5) {
        X = 0
        Y += 1
    }
    Modifier_le_joueur()
})
 ```

## Etape 17
De la même manière nous devons créer une ``||Functions: Fonction||`` "fin de ligne", y 
glisser le bloc ``||Logic: si X >= 5 alors||``, et déposer à la place 
dans ``||Input: lorsque le bouton A est pressé||`` cette nouvelle fonction.
```blocks
function fin_de_ligne () {
    if (X >= 5) {
        X = 0
        Y += 1
    }
}
input.onButtonPressed(Button.A, function () {
    Eteindre_del()
    fin_de_ligne()
    Modifier_le_joueur()
})
 ```
## Etape 18
Nous allons créer le bloc ``||Input: lorsque le bouton B est pressé||`` et y glisser 
deux fois à la suite les fonctions ``||Functions: appel eteindre del||`` + ``||Functions: appel fin de ligne||``.
Ainsi, lorsqu'un joueur appuiera sur le bouton B, deux Dels s'éteindrons au lieu d'une.
```blocks
function fin_de_ligne () {
    if (X >= 5) {
        X = 0
        Y += 1
    }
}
function Eteindre_del () {
    led.unplot(X, Y)
    X += 1
}
function Modifier_le_joueur () {
    if (Joueur1) {
        Joueur1 = 0
    } else {
        Joueur1 = 1
    }
}
input.onButtonPressed(Button.B, function () {
    Eteindre_del()
    fin_de_ligne()
    Eteindre_del()
    fin_de_ligne()
    Modifier_le_joueur()
})
 ```
## Etape 19
Répétons cette même opération avec un bloc ``||Input: lorsque le bouton A+B est pressé||``.
Cette fois nous y glissons trois fois à la suite les fonctions ``||Functions: appel eteindre del||`` + ``||Functions: appel fin de ligne||``.
Ainsi, lorsqu'un joueur appuiera sur les boutons A et B en même temps, trois Dels s'éteindrons.
```blocks
function fin_de_ligne () {
    if (X >= 5) {
        X = 0
        Y += 1
    }
}
function Eteindre_del () {
    led.unplot(X, Y)
    X += 1
}
function Modifier_le_joueur () {
    if (Joueur1) {
        Joueur1 = 0
    } else {
        Joueur1 = 1
    }
}
input.onButtonPressed(Button.AB, function () {
    Eteindre_del()
    fin_de_ligne()
    Eteindre_del()
    fin_de_ligne()
    Eteindre_del()
    fin_de_ligne()
    Modifier_le_joueur()
})
 ```
## Etape 20
Il reste une dernière étape qui consistera à désigner le gagnant. Pour rappel le gagnant
est celui qui prend la dernière alumette (éteint la dernière Del).
Dans la boucle ``||basic: toujours||``, nous ajoutons deux conditions :
* Condition 1 :``||Logic: si X=0 et Y=4 et Joueur1=1 alors||``, et on y glisse 
``||Basic: afficher texte "j2 GAGNE"||``.
* Condition 2 :``||Logic: si X=0 et Y=4 et Joueur1=0 alors||``, et on y glisse 
``||Basic: afficher texte "j1 GAGNE"||``.
```blocks
basic.forever(function () {
    Del_J1_ou_J2()
    if (X == 0 && Y == 4 && Joueur1 == 1) {
        basic.showString("J2 GAGNE")
    }
    if (X == 0 && Y == 4 && Joueur1 == 0) {
        basic.showString("J1 GAGNE")
    }
})
 ```
## @showdialog
Et voici ce que l'on doit obtenir:
![Afficher nim3](https://github.com/jtamen/tuto1/blob/master/Images/nim3.gif?raw=true)
## @showdialog
 Tu peux le transférer ton programme dans la carte micro:bit 
 à l'aide de la commande "Télécharger".
![Afficher bouton](https://github.com/jtamen/tuto1/blob/master/Images/Capture%20d%E2%80%99%C3%A9cran%202023-02-08%20145524.jpg?raw=true)
afin de le tester directement !