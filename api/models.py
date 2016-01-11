from django.core.validators import RegexValidator
from django.db import models


class Domain(models.Model) :
	url = models.URLField(verbose_name = 'Domain URL', help_text = "Must start with 'https://'",
	                      validators = [RegexValidator(regex = '^https://')])
