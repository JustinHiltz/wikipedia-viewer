// $(document).ready(function() {
//   alert("jQuery is loading");
// });

function searchWiki(query) {

  $.ajax({
    url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&action=query&list=search&srsearch="+query+"&callback=?",
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "jsonp",
    success: function (data, textStatus, jqXHR) {
      var results = data.query.search;
      var html = '';

      for (var i = 0; i < 10; i++) {
        html += '<a href="https://en.wikipedia.org/wiki/'+results[i].title+'"target="_blank"><h3>'+results[i].title+'</h3></a>';
        html += '<p>'+results[i].snippet+'</p>';
      }

    $("#results").html(html);
    },
    error: function (errorMessage) {
      console.log("Some error");
    }
  })
}

$(document).ready(function() {
  $('#search').keyup(function() {
    searchWiki($('#search').val());
  });
});
