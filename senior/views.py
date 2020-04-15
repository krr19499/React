from .models import Users, States, Universities, Californiastateuniversitynorthridge
from  .serializers import UserSerializer, StatesSerializer, UniversitiesSerializer, CaliforniastateuniversitynorthridgeSerializer
from rest_framework import generics
# Create your views here.

class UserListCreate(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

class StateListCreate(generics.ListCreateAPIView):
    queryset= States.objects.all()
    serializer_class = StatesSerializer

class UniversitiesListCreate(generics.ListCreateAPIView):
    queryset= Universities.objects.all()
    serializer_class = UniversitiesSerializer

class CaliforniastateuniversitynorthridgeListCreate(generics.ListCreateAPIView):
    queryset= Californiastateuniversitynorthridge.objects.all()
    serializer_class = CaliforniastateuniversitynorthridgeSerializer
