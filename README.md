# Exploitation de données JSON en VanillaJS

Cours par Philippe Pary, 2017

## Demandes

1. Récupérer les données brutes via un copier/coller, parser le JSON, l’enregistrer dans un localStorage
2. Afficher le nombre de personnes
3. Afficher la liste des personnes comme des cartes, avec un bouton éditer et un bouton supprimer
4. Ajouter un bouton « créer »
5. Créer la page de création d’une personne
6. Créer la page pour modifier une personne
7. Créer la page pour supprimer une personne
8. Ajouter sur la page d’accueil un bouton d’export qui affiche le JSON
9. (bonus) Mettre les données brutes dans un fichier à part, l’appeler comme si c’était une API

### À utiliser:

* les fonctions [JSON](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON) de VanillaJS
* le [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage) pour enregistrer les données et leurs modifications
* le code déjà écrit dans d’autres projets pour éviter d’avoir à réinventer la roue
* de la patience

### À ne pas utiliser:

* PHP

## Données brutes:
    {

        "items": [
            {
                "index": 1,
                "age": 65,
                "size": 4.9,
                "name": "Nicole",
                "surname": "Bolton",
                "fullname": "Debra Bender",
                "email": "bob@marsh.eh",
                "drivinglicence": true
            },
            {
                "index": 2,
                "age": 65,
                "size": 2.02,
                "name": "Shawn",
                "surname": "Dyer",
                "fullname": "Leon Barber",
                "email": "franklin@riley.gr",
                "drivinglicence": true
            },
            {
                "index": 3,
                "age": 65,
                "size": 5.47,
                "name": "Shannon",
                "surname": "Cain",
                "fullname": "Allison Padgett",
                "email": "martin@bradshaw.sk",
                "drivinglicence": true
            },
            {
                "index": 4,
                "age": 65,
                "size": 1.42,
                "name": "Willie",
                "surname": "Brock",
                "fullname": "Helen Hewitt",
                "email": "floyd@woodward.af",
                "drivinglicence": true
            },
            {
                "index": 5,
                "age": 65,
                "size": 1.66,
                "name": "Alan",
                "surname": "Butler",
                "fullname": "Dolores McKnight",
                "email": "douglas@tilley.vg",
                "drivinglicence": true
            },
            {
                "index": 6,
                "age": 65,
                "size": 4.97,
                "name": "Franklin",
                "surname": "Tyler",
                "fullname": "William Rowe",
                "email": "russell@crabtree.sb",
                "drivinglicence": true
            },
            {
                "index": 7,
                "age": 65,
                "size": 2.87,
                "name": "Theresa",
                "surname": "Christensen",
                "fullname": "Judy Riley",
                "email": "joseph@raynor.co",
                "drivinglicence": false
            },
            {
                "index": 8,
                "age": 65,
                "size": 2.58,
                "name": "Lois",
                "surname": "Vincent",
                "fullname": "Sheryl Farmer",
                "email": "herbert@harmon.ch",
                "drivinglicence": false
            },
            {
                "index": 9,
                "age": 65,
                "size": 4.48,
                "name": "Dennis",
                "surname": "Cross",
                "fullname": "Sarah Weiss",
                "email": "janet@puckett.gg",
                "drivinglicence": true
            },
            {
                "index": 10,
                "age": 65,
                "size": 5.82,
                "name": "Danny",
                "surname": "Norton",
                "fullname": "Arthur Burke",
                "email": "rhonda@lang.nf",
                "drivinglicence": true
            },
            {
                "index": 11,
                "age": 65,
                "size": 4.58,
                "name": "Charlene",
                "surname": "Horne",
                "fullname": "Jeanette Love",
                "email": "melinda@jennings.hk",
                "drivinglicence": false
            },
            {
                "index": 12,
                "age": 65,
                "size": 1.68,
                "name": "Megan",
                "surname": "Hayes",
                "fullname": "Pat Carver",
                "email": "erin@reid.sb",
                "drivinglicence": true
            },
            {
                "index": 13,
                "age": 65,
                "size": 4.44,
                "name": "Christina",
                "surname": "Morris",
                "fullname": "Ronnie Chang",
                "email": "marianne@woodward.bj",
                "drivinglicence": false
            },
            {
                "index": 14,
                "age": 65,
                "size": 1.77,
                "name": "Michelle",
                "surname": "Curry",
                "fullname": "Andrew Welch",
                "email": "kyle@brantley.er",
                "drivinglicence": false
            },
            {
                "index": 15,
                "age": 65,
                "size": 1.05,
                "name": "Frances",
                "surname": "Thornton",
                "fullname": "Charlotte Walsh",
                "email": "crystal@bowling.ng",
                "drivinglicence": false
            },
            {
                "index": 16,
                "age": 65,
                "size": 2.34,
                "name": "Bill",
                "surname": "Simpson",
                "fullname": "Sarah Heath",
                "email": "walter@wilkerson.eh",
                "drivinglicence": false
            },
            {
                "index": 17,
                "age": 65,
                "size": 3.74,
                "name": "Kyle",
                "surname": "Lamb",
                "fullname": "Dan Conway",
                "email": "marc@mckenna.cr",
                "drivinglicence": false
            },
            {
                "index": 18,
                "age": 65,
                "size": 3.68,
                "name": "Lois",
                "surname": "Burnette",
                "fullname": "Beth Nguyen",
                "email": "audrey@burnette.na",
                "drivinglicence": false
            },
            {
                "index": 19,
                "age": 65,
                "size": 5.53,
                "name": "Caroline",
                "surname": "Ballard",
                "fullname": "Dennis Rose",
                "email": "nicholas@clapp.al",
                "drivinglicence": false
            },
            {
                "index": 20,
                "age": 65,
                "size": 1.38,
                "name": "Rebecca",
                "surname": "Carver",
                "fullname": "Norman McPherson",
                "email": "florence@fleming.ss",
                "drivinglicence": false
            },
            {
                "index": 21,
                "age": 65,
                "size": 5.7,
                "name": "Ashley",
                "surname": "Rosenberg",
                "fullname": "Edna Law",
                "email": "stacey@chang.org",
                "drivinglicence": true
            },
            {
                "index": 22,
                "age": 65,
                "size": 4.86,
                "name": "Matthew",
                "surname": "Cline",
                "fullname": "Jerome Wiley",
                "email": "audrey@cooke.tr",
                "drivinglicence": false
            },
            {
                "index": 23,
                "age": 65,
                "size": 5.22,
                "name": "Franklin",
                "surname": "Mueller",
                "fullname": "Kristine Garrett",
                "email": "allison@boykin.by",
                "drivinglicence": true
            },
            {
                "index": 24,
                "age": 65,
                "size": 4.25,
                "name": "Milton",
                "surname": "Nichols",
                "fullname": "Catherine Davidson",
                "email": "lillian@mcnamara.id",
                "drivinglicence": false
            },
            {
                "index": 25,
                "age": 65,
                "size": 1.16,
                "name": "Melinda",
                "surname": "Bowles",
                "fullname": "George Wolf",
                "email": "christy@grossman.tt",
                "drivinglicence": true
            }
        ]

    }
