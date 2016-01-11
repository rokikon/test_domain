import json
from django.http import HttpResponse
from django.shortcuts import redirect
from api.models import Domain
from api.serializers import DomainSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response


class DomainViewSet(viewsets.ModelViewSet):
    queryset = Domain.objects.all()
    serializer_class = DomainSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return redirect('/')
        else:
            return HttpResponse(json.dumps(serializer.errors))
