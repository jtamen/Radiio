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

 ## Etape 2bis
On crée 3 variables :
* ``||Variables: Joueur1||``, qui suivant qu'elle sera à 1 ou à 0 indiquera si c'est au joueur 1 de jouer ou pas.
* ``||Variables: x||``, qui indique la position de la led sur la ligne
(0 : position la plus à gauche de la matrice 5x4, 4: position la plus à droite de la matrice 5x4)
* ``||Variables: y||``, qui indique la position de la led sur la colonne
(0 : position la plus en haut de la matrice 5x4, 3: position la plus en bas de la matrice 5x4)
```blocks
 basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
let Joueur1 = 1
let X = 0
let Y = 0
 ```