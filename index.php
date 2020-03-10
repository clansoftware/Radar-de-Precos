<?php 
define("VERSION", 1);
include "vendor/autoload.php";
?>

<!DOCTYPE html>
<html lang="pt-BR">
<div class=col-xs-12>
	<div class=row>
		<head>
			<meta charset="UTF-8">
			<title>Radar de Preços</title>
			<link rel="stylesheet" href="assets/css/style.css">

			<link rel="stylesheet" type="text/css" href="vendor/twbs/bootstrap/dist/css/bootstrap.css"> 
			<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
			<link rel="stylesheet" type="text/css" href="vendor/twbs/bootstrap/dist/css/style.css">

			<script type="text/javascript" src="vendor/components/jquery/jquery.js"></script>

			<!-- 	<script type="text/javascript" src="vendor/twbs/bootstrap/dist/js/script.js"></script> -->

		</head>
		<body>
			<h1 class="titulo">Radar de Preços</h1>

			<div class="container" id="loading_gif">
				<div>
					<img id="image" src="assets/img/loading.gif">
				</div>
			</div>

			<canvas id="icetran" width="600" height="150"></canvas>
			<canvas id="itt" width="600" height="150"></canvas>
			<canvas id="simead" width="600" height="150"></canvas>
			<canvas id="tecnodata" width="600" height="150"></canvas>
			<canvas id="tecnodata" width="600" height="150"></canvas>

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

		<!-- <div class="footer">
			<p>
				<a title="Is ao Site" href="https://clansoftware.com.br" target="_blank">
					<img src="assets/img/logo-clansoftware.jpeg" />
				</a>
			</p>
		</div> -->
		<script src="vendor/components/jquery/jquery.js?v=<?=VERSION;?>"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js?v=<?=VERSION;?>"> </script>
		<script src="assets/js/script.js?v=<?=VERSION;?>"></script>
	</body>
</div>
</body>
</html>