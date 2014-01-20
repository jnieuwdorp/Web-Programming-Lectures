  window.onload = function () {
    $("oneTimeButton").onclick = displayTimeAsync3;
    $("oneUpdateTimeButton").onclick = displayTimeAsync4;
    $("regularUpdateTimeButton").onclick = displayTimeAsync5;
  }

  function displayTimeAsync3() {
    new Ajax.Request(
     'time.php',
     {
        method:'get',
        onSuccess:timeFetchCompleted
     }
    );
  }

  function timeFetchCompleted(ajax) {
    $('time_async3').innerHTML = ajax.responseText;
  }


  function displayTimeAsync4() {
    new Ajax.Updater(
      "time_async4", //id of the element that gets assigned the data
      "time.php",
      {
          method:'get'
      }
    );
  }

 function displayTimeAsync5() {
    new Ajax.PeriodicalUpdater(
      "time_async5", //id of the element that gets assigned the data
      "time.php",
      {
          method:'get',
          frequency:3,
          decay:1
      }
    );
  }

  function evaluateXMLProperties(tag_name, id_to_display, prop1, prop2) {
    new Ajax.Request(
     'time.php?localXML=true',
     {
        method:'get',
        parameters: {tag: tag_name, id: id_to_display, property1: prop1, property2: prop2},
        onSuccess: evaluateXMLProperty
     }
    );
  }

  function evaluateXMLProperty(ajax) {
    var xml = ajax.responseXML;
    var elements = xml.getElementsByTagName(ajax.request.parameters['tag']);
    for (var i=0; i<elements.length; i++) {  
      var res = elements[i][ajax.request.parameters['property1']];
      if(ajax.request.parameters['property2']!=null && ajax.request.parameters['property2']!=undefined) {
        res = res[ajax.request.parameters['property2']];
      }

      $(ajax.request.parameters['id']).innerHTML = res;
    }
  }
