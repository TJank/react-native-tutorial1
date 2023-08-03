from rest_framework import viewsets
from ..models import *
from .serializers import *


class EventsViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer