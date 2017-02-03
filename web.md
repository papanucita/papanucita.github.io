---
layout: default
title: Work
baseurl: /web/
---

<div class = "row workContainer col-xs-12">
			<h1>Web</h1>
			<ul>
				{% for post in site.categories.projects %}
					<li class ="col-xs-12 col-sm-5 col-sm-push-1">
		    			<h3><a href="{{ post.url }}" target = "_blank">{{ post.title }}</a></h3>
		    			<div class = "underline"></div>
		  				<p>{{ post.excerpt}}</p>
					</li>
				{% endfor %}
			</ul>
			{% assign last_post = site.posts.last %}
		</div>