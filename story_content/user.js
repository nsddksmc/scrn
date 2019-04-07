function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xnidRLdQIY":
        Script1();
        break;
      case "6TBhQ5Nzu9P":
        Script2();
        break;
      case "5f5eNKWrSX2":
        Script3();
        break;
      case "6ZyOFLtIF6e":
        Script4();
        break;
      case "6RpPrZNQC3Z":
        Script5();
        break;
      case "6XshItG7oMo":
        Script6();
        break;
      case "6cE4yma1mI9":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

