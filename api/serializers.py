# Serializers define the API representation.
from api.models import Domain
from rest_framework import serializers


class DomainSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Domain
        fields = ('url', )
