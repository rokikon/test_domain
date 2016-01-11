# Routers provide an easy way of automatically determining the URL conf.
from api.views import DomainViewSet
from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'domains', DomainViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]