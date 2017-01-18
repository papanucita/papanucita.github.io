---
layout: contactlayout
title: Contact
baseurl: /contact/
---

<header class="contactPageNav">
	<nav class="navbar navbar-default navbar-fixed-top">
	  	<div class="container-fluid">
	  		<a class="navbar-brand" href="https://papanucita.github.io">PN</a>
	    <!-- Brand and toggle get grouped for better mobile display -->
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#headerNav" aria-expanded="false">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		    </div>
		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="headerNav">
		      	<ul class="nav navbar-nav navbar-right">
		      		<li>
				    	<a href="/">HOME</a>
				    </li>
				    <li>
				    	<a href="/about/">ABOUT</a>
				    </li>
				    <li>
				    	<a href="/work/">WORK</a>
				    </li>
				    <li>
				    	<a href="/blog/">BLOG</a>
				    </li>
				    <li class="active">
				    	<a href="/contact/">CONTACT</a>
				    </li>
		      	</ul>
		    </div>
		 </div>
	</nav>
</header>
<section class = "container contactPage">
		<h1 class = "col-xs-12">Contact</h1>
		<form action="https://www.enformed.io/lw2o8614" method="POST" id="contactForm" class="col-xs-12 col-sm-10 col-sm-push-1 col-md-8 col-md-push-2">
		<!-- Email Subject -->
		<input type="hidden" name="*subject" value="Portfolio Visitor">
		<!-- Bots shall not pass -->
		<input type="hidden" name="*honeypot">
		<!-- Input fields -->
		<div class="col-xs-12 form_name">
			<label for="name">Name</label>
			<input type="text" name="first_name" id="name">
		</div>
		<div class="col-xs-12 form_email">
			<label for="mail">Email</label>
			<input type="email" id="email" name="email">
		</div>
		<div class="col-xs-12 form_comment">
			<label for="msg">How may I help?</label>
			<textarea id="msg" name="textarea"></textarea>
		</div>
		<!-- Submit button -->
		<div class="button col-xs-12">
			<button id="submitBtn" type="text" class="submit-button">Submit</button>
		</div>
		<!-- The Modal -->
		<div id="myModal" class="modal">
		  <!-- Modal content -->
			<div class="modal-content">
			    <span class="close">&times;</span>
			    <h1>Thank you!</h1>
			    <h3>I will replay soon.</h3>
			</div>
		</div>	
		<div id="myModal" class="modal2">
		  <!-- Modal content -->
			<div class="modal-content">
			    <span class="close">&times;</span>
			    <h1>Oh no!</h1>
			    <h3>We couldn't send your message. Please try again.</h3>
			</div>
		</div>
	</form>			
</section>
<footer class = "container">
	<a href="https://www.linkedin.com/in/patricia-padilla-nunez-87489599"><img class = "imgLinked" src="/img/linkedin.png" height="64" width="64" alt="https://www.linkedin.com/in/patricia-padilla-nunez-87489599"></a>
	<a href="https://github.com/papanucita?tab=repositories"><img class = "imgGit" src="/img/github.png" height="64" width="64" alt="https://github.com/papanucita?tab=repositories"></a>
</footer>