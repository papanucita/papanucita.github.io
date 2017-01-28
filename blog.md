---
layout: default
title: Blog
baseurl: /blog/
---
<div class = "row blogContainer col-xs-12">
	<h1>Blog</h1>
	<ul>
		{% for post in site.categories.post %}
		<li class ="col-xs-12 col-sm-5 col-sm-push-1">
		    <h3><a href="{{ post.url }}" target = "_blank">{{ post.title }}</a></h3>
		    <div class = "underline"></div>
		    <div id="first_post">
		  		<p>{{ post.excerpt}}</p>
			</div>
		</li>
		{% endfor %}
	</ul>
	{% assign last_post = site.posts.last %}
</div>