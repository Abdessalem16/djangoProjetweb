from django.contrib import admin

from stock.models import Article, Entree, Sortie

# Register your models here.
admin.site.register(Article)
admin.site.register(Entree)
admin.site.register(Sortie)