# communication_radio
```ghost
basic.forever(function () {
    for (let index = 0; index < 0 + 0; index++) {
        let test = 0
        music.playMelody("- - - - - - - - ", test)
        led.plot(0, 0)
        led.plotBrightness(0, 0, 255)
    }
})
```

## @showdialog
Tutoriel créé par :
![Afficher logo](https://github.com/jtamen/tuto1/blob/master/Images/logo-technotam-chappe1.jpg?raw=true)

## @showdialog
Académie :
![Afficher logo-académie](https://github.com/jtamen/tuto1/blob/master/Images/logo-IAN.png?raw=true)

## @showdialog
Tu dois réaliser un programme pour faire communiquer par radio deux cartes micro:bit entre elles.
Le protocole de communication permet de transmettre des données entre une carte « émettrice » 
et une carte « réceptrice » 

## Etape 1
 Sur la carte émetrice :
 ``||basic: Au démarrage||``, il faut régler « radio définir groupe » dans la même plage pour les deux cartes
(groupe 1 dans notre exemple) Ces plages (groupes) peuvent aller de 1 à 256…
Choisis le numéro correspondant à celui de ton îlot afin d'éviter les interférences entre toutes les cartes.
 ```blocks
 radio.setGroup(1)
 ```

## Etape 2
Sur la carte émetrice :
si l'émetteur appuie sur le bouton « A », on envoie le nombre « 0 » par radio
```blocks
 input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
 ```

## Etape 3 
Sur la carte émetrice :
si l'émetteur appuie sur le bouton « B », on envoie le nombre « 1 » par radio
```blocks
 input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
 ```
 
## Etape 4
Sur la carte émetrice :
Téléverse le programme dans la carte émettrice. Tu peux le transférer
dans la carte micro:bit à l'aide de la commande "Télécharger".
![Afficher bouton](https://github.com/jtamen/tuto1/blob/master/Images/Capture%20d%E2%80%99%C3%A9cran%202023-02-08%20145524.jpg?raw=true)

## Etape 5
Sur la carte réceptrice :
Reproduis l'étape 1 sur cette nouvelle carte.
```blocks
 radio.setGroup(1)
 ```

## Etape 6
Sur la carte réceptrice :
 Place le bloc ``||Radio:quand une donnée est reçue par radio||``
```blocks
 radio.onReceivedNumber(function (receivedNumber) {
 ```
## Etape 7
Sur la carte réceptrice :
 Sélectionne dans la catégorie "Logique : Expression conditionnelles" le bloc ``||Logic: Si "Vrai" alors||``
 et place le à l'intérieur du bloc ``||Radio:quand une donnée est reçue par radio||``.
 ```blocks
 radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
    }
})
```
## Etape 8
Sur la carte réceptrice :
Glisse à l'intérieur de "Vrai" un bloc ``||Logic: 0 = 0||``.
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (0 == 0) {
  	 }
})
```
## Etape 9
Sur la carte réceptrice :
Fais glisser le bloc ``||Variables : receivedNumber||`` qui se trouve dans le bloc ``||Radio:quand une donnée est reçue par radio||`` 
à l'intérieur du bloc ``||Logic: 0 = 0||`` en position du 1er 0. Cela a pour effet de le copier à l'intérieur.
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
   	    }
})
```
## Etape 10
Sur la carte réceptrice :
Il faut ensuite dans la consition "si", les 3 blocs suivants : 
* ``||basic: afficher texte "A"||``
* ``||basic: pause (ms) 1000||``
* ``||basic: montrer l'îcone "content"||``
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("A")
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
})
```
## Etape 11
Sur la carte réceptrice :
``||Logic: Si "Vrai" alors||``, avec valeur 1 au lieu de 0. "B" au lieu de "A" et
l'îcone "mécontent" au lieu de "content".
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("A")
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
    if (receivedNumber == 1) {
        basic.showString("B")
        basic.pause(1000)
        basic.showIcon(IconNames.Sad)
    }
})
```
## Etape 12
Sur la carte réceptrice :
 Téléverse le programme dans la carte réceptrice. Tu peux le transférer
dans la carte micro:bit à l'aide de la commande "Télécharger".
![Afficher bouton](https://github.com/jtamen/tuto1/blob/master/Images/Capture%20d%E2%80%99%C3%A9cran%202023-02-08%20145524.jpg?raw=true)

## @showdialog
Quand l''utilisateur appuiera sur le bouton A de la carte émettrice, 
la carte réceptrice affichera A pendant 1s, puis l'îcone "content".
Quand l''utilisateur appuiera sur le bouton B de la carte émettrice, 
la carte réceptrice affichera B pendant 1s, puis l'îcone "mécontent".
![Afficher gif animé](https://github.com/jtamen/tuto1/blob/master/Images/microbit-radio.gif?raw=true)