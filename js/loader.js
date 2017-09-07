// No data was stored ? this function brings us a set
var getRawData = function() {
  /* Ugly hard-coded JSON. JSON is a plain-text notation for data.
  JSON is used to exchange data beetween programs, for example between a PHP
  back-end and a JavaScript front-end

  Here JSON is hard-coded : in means we directly wrote the JSON in the source
  code. In normal case, you'll get the JSON by an API call. This way of doing
  things is UGLY !!!

  We parse this hard-coded JSON to get an object we call rawData.
  For we simply use JSON.parse()

  If you have a look at rawData, you'll notice there is one section called items
  which contains the list of people. That's what we want to get
  */
  var rawData = JSON.parse('' +
    '{' +
    '' +
    '    "items": [' +
    '        {' +
    '            "index": 1,' +
    '            "age": 25,' +
    '            "size": 4.9,' +
    '            "name": "Nicole",' +
    '            "surname": "Bolton",' +
    '            "fullname": "Debra Bender",' +
    '            "email": "bob@marsh.eh",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 2,' +
    '            "age": 18,' +
    '            "size": 2.02,' +
    '            "name": "Shawn",' +
    '            "surname": "Dyer",' +
    '            "fullname": "Leon Barber",' +
    '            "email": "franklin@riley.gr",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 3,' +
    '            "age": 33,' +
    '            "size": 5.47,' +
    '            "name": "Shannon",' +
    '            "surname": "Cain",' +
    '            "fullname": "Allison Padgett",' +
    '            "email": "martin@bradshaw.sk",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 4,' +
    '            "age": 65,' +
    '            "size": 1.42,' +
    '            "name": "Willie",' +
    '            "surname": "Brock",' +
    '            "fullname": "Helen Hewitt",' +
    '            "email": "floyd@woodward.af",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 5,' +
    '            "age": 77,' +
    '            "size": 1.66,' +
    '            "name": "Alan",' +
    '            "surname": "Butler",' +
    '            "fullname": "Dolores McKnight",' +
    '            "email": "douglas@tilley.vg",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 6,' +
    '            "age": 32,' +
    '            "size": 4.97,' +
    '            "name": "Franklin",' +
    '            "surname": "Tyler",' +
    '            "fullname": "William Rowe",' +
    '            "email": "russell@crabtree.sb",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 7,' +
    '            "age": 29,' +
    '            "size": 2.87,' +
    '            "name": "Theresa",' +
    '            "surname": "Christensen",' +
    '            "fullname": "Judy Riley",' +
    '            "email": "joseph@raynor.co",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 8,' +
    '            "age": 47,' +
    '            "size": 2.58,' +
    '            "name": "Lois",' +
    '            "surname": "Vincent",' +
    '            "fullname": "Sheryl Farmer",' +
    '            "email": "herbert@harmon.ch",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 9,' +
    '            "age": 19,' +
    '            "size": 4.48,' +
    '            "name": "Dennis",' +
    '            "surname": "Cross",' +
    '            "fullname": "Sarah Weiss",' +
    '            "email": "janet@puckett.gg",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 10,' +
    '            "age": 37,' +
    '            "size": 5.82,' +
    '            "name": "Danny",' +
    '            "surname": "Norton",' +
    '            "fullname": "Arthur Burke",' +
    '            "email": "rhonda@lang.nf",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 11,' +
    '            "age": 56,' +
    '            "size": 4.58,' +
    '            "name": "Charlene",' +
    '            "surname": "Horne",' +
    '            "fullname": "Jeanette Love",' +
    '            "email": "melinda@jennings.hk",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 12,' +
    '            "age": 55,' +
    '            "size": 1.68,' +
    '            "name": "Megan",' +
    '            "surname": "Hayes",' +
    '            "fullname": "Pat Carver",' +
    '            "email": "erin@reid.sb",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 13,' +
    '            "age": 35,' +
    '            "size": 4.44,' +
    '            "name": "Christina",' +
    '            "surname": "Morris",' +
    '            "fullname": "Ronnie Chang",' +
    '            "email": "marianne@woodward.bj",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 14,' +
    '            "age": 41,' +
    '            "size": 1.77,' +
    '            "name": "Michelle",' +
    '            "surname": "Curry",' +
    '            "fullname": "Andrew Welch",' +
    '            "email": "kyle@brantley.er",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 15,' +
    '            "age": 20,' +
    '            "size": 1.05,' +
    '            "name": "Frances",' +
    '            "surname": "Thornton",' +
    '            "fullname": "Charlotte Walsh",' +
    '            "email": "crystal@bowling.ng",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 16,' +
    '            "age": 58,' +
    '            "size": 2.34,' +
    '            "name": "Bill",' +
    '            "surname": "Simpson",' +
    '            "fullname": "Sarah Heath",' +
    '            "email": "walter@wilkerson.eh",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 17,' +
    '            "age": 63,' +
    '            "size": 3.74,' +
    '            "name": "Kyle",' +
    '            "surname": "Lamb",' +
    '            "fullname": "Dan Conway",' +
    '            "email": "marc@mckenna.cr",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 18,' +
    '            "age": 32,' +
    '            "size": 3.68,' +
    '            "name": "Lois",' +
    '            "surname": "Burnette",' +
    '            "fullname": "Beth Nguyen",' +
    '            "email": "audrey@burnette.na",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 19,' +
    '            "age": 18,' +
    '            "size": 5.53,' +
    '            "name": "Caroline",' +
    '            "surname": "Ballard",' +
    '            "fullname": "Dennis Rose",' +
    '            "email": "nicholas@clapp.al",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 20,' +
    '            "age": 45,' +
    '            "size": 1.38,' +
    '            "name": "Rebecca",' +
    '            "surname": "Carver",' +
    '            "fullname": "Norman McPherson",' +
    '            "email": "florence@fleming.ss",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 21,' +
    '            "age": 47,' +
    '            "size": 5.7,' +
    '            "name": "Ashley",' +
    '            "surname": "Rosenberg",' +
    '            "fullname": "Edna Law",' +
    '            "email": "stacey@chang.org",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 22,' +
    '            "age": 25,' +
    '            "size": 4.86,' +
    '            "name": "Matthew",' +
    '            "surname": "Cline",' +
    '            "fullname": "Jerome Wiley",' +
    '            "email": "audrey@cooke.tr",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 23,' +
    '            "age": 25,' +
    '            "size": 5.22,' +
    '            "name": "Franklin",' +
    '            "surname": "Mueller",' +
    '            "fullname": "Kristine Garrett",' +
    '            "email": "allison@boykin.by",' +
    '            "drivinglicence": true' +
    '        },' +
    '        {' +
    '            "index": 24,' +
    '            "age": 68,' +
    '            "size": 4.25,' +
    '            "name": "Milton",' +
    '            "surname": "Nichols",' +
    '            "fullname": "Catherine Davidson",' +
    '            "email": "lillian@mcnamara.id",' +
    '            "drivinglicence": false' +
    '        },' +
    '        {' +
    '            "index": 25,' +
    '            "age": 33,' +
    '            "size": 1.16,' +
    '            "name": "Melinda",' +
    '            "surname": "Bowles",' +
    '            "fullname": "George Wolf",' +
    '            "email": "christy@grossman.tt",' +
    '            "drivinglicence": true' +
    '        }' +
    '    ]' +
    '' +
    '}' +
    '');
  // The people are in the item value of rawData object. So we retun only it
  return rawData.items;
}

// Some data was stored ? We load it
var getLocalStorageData = function() {
  /* localStorage.getItem(nameofthelocalstorage) to get the value of a localy
  stored data.

  As localStorage can only store text, the data is JSON encoded and we need to
  decode it before sending it. So we use JSON.parse on the data fetched with
  localStorage.getItem() */
  return JSON.Parse(localStorage.getItem('people'));
}

/* We test if the localStorage is empty or not
The localStorage.getItem function returns null if there is no data

We call getLocalStorageData if there is data in the localStorage,
we call getRawData to get a sample of fake data if there is no data in storage
*/
if (localStorage.getItem('people') != null) {
  console.log("Loading data");
  var people = getLocalStorageData();
}
else {
  console.log("Get data from hard-coded set");
  var people = getRawData();
}
