from django.conf.urls import url, include
from django.conf.urls.static import static
from django.views.generic import TemplateView
from domain import settings

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^api/', include('api.urls', namespace='api')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
