

angular.module("Forca", []).controller("jogo", function($scope) {


  var palavraSortiada = [  
      
    "java","cobol","pascal","javascript","portugol"
  ];


  $scope.imagem = "1.png";
  $scope.botaoA = "btn btn-success";
  $scope.botaoB = "btn btn-success";
  $scope.botaoC = "btn btn-success";
  $scope.botaoD = "btn btn-success";
  $scope.botaoE = "btn btn-success";
  $scope.botaoF = "btn btn-success";
  $scope.botaoG = "btn btn-success";
  $scope.botaoH = "btn btn-success";
  $scope.botaoI = "btn btn-success";
  $scope.botaoJ = "btn btn-success";
  $scope.botaoK = "btn btn-success";
  $scope.botaoL = "btn btn-success";
  $scope.botaoM = "btn btn-success";
  $scope.botaoN = "btn btn-success";
  $scope.botaoO = "btn btn-success";
  $scope.botaoP = "btn btn-success";
  $scope.botaoQ = "btn btn-success";
  $scope.botaoR = "btn btn-success";
  $scope.botaoS = "btn btn-success";
  $scope.botaoT = "btn btn-success";
  $scope.botao =  "btn btn-success";
  $scope.botaoU = "btn btn-success";
  $scope.botaoV = "btn btn-success";
  $scope.botaoW = "btn btn-success";
  $scope.botaoX = "btn btn-success";
  $scope.botaoY = "btn btn-success";
  $scope.botaoZ = "btn btn-success";
  var numeroSorteado  = Math.floor(Math.random()*palavraSortiada.length);   

  var palavra = palavraSortiada[numeroSorteado];
  var cont = 1;
  
  $scope.palavraSecreta = new Array(palavra.length);

  $scope.restante = 5;
  
  for (i = 0; i < palavra.length; i++) {
    $scope.palavraSecreta[i] = "_";
  }

$scope.digitar = function(letra) {
	var verifica = false;  
    
   for (i = 0; i < palavra.length; i++) {
		
      if (palavra[i] == letra && $scope.restante != 0) {
        $scope.palavraSecreta[i] = letra;
		debugger;
				
		verifica = true;
		bloqueiaBotao(letra);
		
	}	
	
    }
	if(verifica == false && $scope.restante != 0){
		chamaBoneco();
	
			cont++;
		
		$scope.restante --;
		bloqueiaBotao(letra);
	}
	
  } 
  
  function chamaBoneco(){
	  
	 if(cont == 1){
		 $scope.imagem = "2.png";
		 return;
		 debugger;
	}
	
	else if(cont == 2){
		 $scope.imagem = "3.png";
		 return;
	}	
	
	else if(cont == 3){
		 $scope.imagem = "4.png";
		 return;
	}
	
	else if(cont == 4){
		 $scope.imagem = "5.png";
		 return;
	}
	
	else if(cont == 5){
		 $scope.imagem = "6.png";
		 return;
	}
	  
  }
  
  function bloqueiaBotao(letra){
	  
	  debugger;
	  
	  if(letra == "a" ){
		  $scope.botaoA = "btn btn-danger disabled";
		 
	  }
	  
	  else if(letra == "b"){
		  $scope.botaoB = "btn btn-danger disabled";
		 
	  }
	  
	  else if(letra == "c"){
		  $scope.botaoC = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "d"){
		  $scope.botaoD = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "e"){
		  $scope.botaoE = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "f"){
		  $scope.botaoF = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "g"){
		  $scope.botaoG = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "h"){
		  $scope.botaoH = "btn btn-danger disabled";
		 
	  }
	 else if(letra == "i"){
		  $scope.botaoI = "btn btn-danger disabled";
		 
	  }
	  
	  else if(letra == "j"){
		  $scope.botaoJ = "btn btn-danger disabled";
		 
	  }
	  
	  else if(letra == "k"){
		  $scope.botaoK = "btn btn-danger disabled";
		 
	  }
	  
	 else if(letra == "l"){
		  $scope.botaoL = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "m"){
		  $scope.botaoM = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "n"){
		  $scope.botaoN = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "o"){
		  $scope.botaoO = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "p"){
		  $scope.botaoP = "btn btn-danger disabled";
		 
	  }
	 else if(letra == "q"){
		  $scope.botaoQ = "btn btn-danger disabled";
		 
	  }
	  
	  else if(letra == "r"){
		  $scope.botaoR = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "s"){
		  $scope.botaoS = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "t"){
		  $scope.botaoT = "btn btn-danger disabled";
		 
	  }
	  
	  else if(letra == "u"){
		  $scope.botaoU = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "v"){
		  $scope.botaoV = "btn btn-danger disabled";
		 
	  }
	  
	  
	  else if(letra == "w"){
		  $scope.botaoW = "btn btn-danger disabled";
		 
	  }
	  
	  
	  else if(letra == "x"){
		  $scope.botaoX = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "z"){
		  $scope.botaoZ = "btn btn-danger disabled";
		 
	  }
	  else if(letra == "y"){
		  $scope.botaoY = "btn btn-danger disabled";
		 
	  }
	  
	  else if(letra == "รง"){
		  
		  $scope.botao = "btn btn-danger disabled";
		 
	  }
	  
	  
  }
  
  
});
