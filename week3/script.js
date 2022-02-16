var offset = 0

function findTimezone() {
  var timezones = document.getElementsByName("timezone");
  var value = timezones[0].value;

  for (var i = 0; i < timezones.length; i++) {
    if (timezones[i].checked == true) {
      var value = timezones[i].value;
      document.getElementById("result").innerHTML = value;
      switch (value) {
        case "EST":
          offset = 0;
          break;
        case "CST":
          offset = -1;
          break;
        case "MST":
          offset = -2;
          break;
        case "PST":
          offset = -3;
          break;
        case "AST":
          offset = -4;
          break;
        case "HST":
          offset = -5;
      }
    }
  }
}

function findRealTime() {
}
