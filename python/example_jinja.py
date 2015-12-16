from jinja2 import Template
template = Template('Hello {{ name }}!')
p = template.render(name='John Doe')
print p