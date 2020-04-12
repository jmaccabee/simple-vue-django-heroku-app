#!/bin/bash
coverage:
	@coverage run --source='.' manage.py test . && coverage report

lint:
	@npm run lint

lint-css:
	@npm run lint-css

run:
	@python manage.py runserver

run-vue-server:
	@npm run serve

shell:
	@python manage.py shell_plus --ipython

tests:
	python manage.py test
