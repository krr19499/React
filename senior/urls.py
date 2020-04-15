from django.urls import path
from .import views

urlpatterns=[
    path('api/senior/user', views.UserListCreate.as_view()),
    path('api/senior/state', views.StateListCreate.as_view()),
    path('api/senior/universities',views.UniversitiesListCreate.as_view()),
    path('api/senior/universities/californiastateuniversitynorthridge',views.CaliforniastateuniversitynorthridgeListCreate.as_view()),
]