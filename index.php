<?php 
	define("VERSION", 2);
	include "vendor/autoload.php";
?>
<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Radar de Preços</title>
		<link rel="stylesheet" href="assets/css/style.css">
		<link rel="stylesheet" type="text/css" href="vendor/twbs/bootstrap/dist/css/bootstrap.css"> 
		<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
		<script type="text/javascript" src="vendor/components/jquery/jquery.js?v=<?=VERSION;?>"></script>
	</head>

	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span class="sr-only">Radar de Preços</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#">Radar de Preços</a>
	    </div>

	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav">
	        <li class="active"><a href="#">Curso de Reciclagem <span class="sr-only">(current)</span></a></li>
	        <li><a href="#">Preventivo de Reciclagem</a></li>
	        <li class="dropdown">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Taxas de Prova <span class="caret"></span></a>
	          <ul class="dropdown-menu">
	            <li><a href="#">PR</a></li>
	            <li><a href="#">SC</a></li>
	            <li><a href="#">RS</a></li>
	          </ul>
	        </li>
	      </ul>
	      <form class="navbar-form navbar-left">
	        <div class="form-group">
	          <input type="text" class="form-control" placeholder="Empresa">
	        </div>
	        <button type="submit" class="btn btn-default">Filtrar</button>
	      </form>
	      <ul class="nav navbar-nav navbar-right">
	        <li><a href="#">Suporte</a></li>
	        <li class="dropdown">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Configurar <span class="caret"></span></a>
	          <ul class="dropdown-menu">
	            <li><a href="#">Credenciais</a></li>
	            <li><a href="#">Solicitar Credenciais</a></li>
	          </ul>
	        </li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>

	<body>
		<div id="loading_gif">
			<img id="image" src="assets/img/loading.gif" />
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6">
					<canvas id="icetran" width="600" height="150"></canvas>
				</div>
				<div class="col-md-6">
					<canvas id="simead" width="600" height="150"></canvas>
				</div>
				<div class="col-md-6">
					<canvas id="tecnodata" width="600" height="150"></canvas>
				</div>
				<div class="col-md-6">
					<canvas id="itt" width="600" height="150"></canvas>
				</div>
				<div class="col-md-6">
					<canvas id="ibac" width="600" height="150"></canvas>
				</div>
			</div>
		</div>
	</body>
	<footer class="container">
		<div class="row footer">
			<div class="col-md-3">
				<ul class="social_icon">
					<li><a href="https://www.facebook.com/clansoftware/" target="_BLANK"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
					<li><a href="https://github.com/clansoftware" target="_BLANK"><i class="fa fa-github" aria-hidden="true"></i></a></li>
					<li><a href="https://www.linkedin.com/company/clan-software" target="_BLANK"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
				</ul>
			</div>
			<div class="titlepage col-md-6">
				<div style="height: 30px"></div>
				<a href="https://api.whatsapp.com/send?phone=554184605647" target="_BLANK">
					<i class="fa fa-mobile" style="color: white"> (41) 8460-5647</i></a> | 
					<a href="tel:+554133611822" target="_BLANK">
						<i class="fa fa-phone" style="color: white"> (41) 3361-1822</i> 
					</a> | <a href="mailto:contato@clansoftware.com.br"><i class="fa fa-envelope-o" style="color: white"> contato@clansoftware.com.br</i></a>
			</div>
			<div class="col-md-3">
				<img id="clan-logo" src="./assets/img/clan-logo_transparent.png">
			</div>
		</div>
	</footer>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js?v=<?=VERSION;?>"> </script>
	<script src="assets/js/script.js?v=<?=VERSION;?>"></script>
</html>