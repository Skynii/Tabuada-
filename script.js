function calcular(){
  var num = parseInt(document.getElementById("num").value);
  var resposta = document.getElementById('resposta');
  var tabuada='';
  var tabuada2= '';
  
  
 
  for(var count=1; count<=10 ; count++){
   tabuada += num+ " + "+count+" = "+(num+count)+"<br>"     
    resposta.innerHTML = tabuada
  }
}