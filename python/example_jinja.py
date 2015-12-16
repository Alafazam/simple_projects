from jinja2 import Template


answers = [{
	'url':'google.com',
	'question':'Url for google'
},{
	'url':'google.com/q=',
	'question':'qQuery Url for google'
}]

template2 = Template('''
<ul>
	{% for answer in answers %}
 		<li><a href="{{ answer.url }}">{{ answer.question }}</a></li>
	{% endfor %}
</ul>
	''')

p2 = template2.render(answers=answers)

print p2
