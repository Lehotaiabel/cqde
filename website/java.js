function Buttontoggle()
{
  var t = document.getElementById("myButton");
  if(t.value=="ON"){
      t.value="OFF";
      document.getElementsByTagName("BODY")[0].style.backgroundColor = "#1c1c1c";
      document.getElementById("Dmode").style.color = '#FFF';
      document.getElementById("myButton").style.color = '#FFF';
      document.getElementById("myButton").style.borderColor = '#FFF';
      document.getElementById("Board").style.borderColor = '#FFF';
    }
  else if(t.value=="OFF"){
      t.value="ON";
      document.getElementsByTagName("BODY")[0].style.backgroundColor = "#FFF";
      document.getElementById("Dmode").style.color = 'black';
      document.getElementById("myButton").style.color = 'black';
      document.getElementById("myButton").style.borderColor = 'black';
      document.getElementById("Board").style.borderColor = 'black';
    }
}