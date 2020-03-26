function validar(){
		var login = form1.login.value;
		var senha = form1.senha.value;
	
		if(login ==""){
			alert("Preencha o valor de login");
			form1.login.focus();
			return false;
		}
	
		if(senha ==""){
			alert("Preencha o valor de senha");
			form1.senha.focus();
			return false;
		}
		