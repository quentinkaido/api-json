//Search
document.getElementById('search').addEventListener('keyup', function(e) {
  var search = this.value.toLowerCase();
  var documents = document.querySelectorAll('.document');

  Array.prototype.forEach.call(documents, function(document) {
    // We found the search
    if (document.innerHTML.toLowerCase().indexOf(search) > 0) {
      document.style.display = 'block';
    } else {
      document.style.display = 'none';

    }

  });
});
