from rest_framework import serializers
from .models import Users,States,Universities,Californiastateuniversitynorthridge

class UserSerializer (serializers.ModelSerializer):
    class Meta:
        model= Users
        fields= ('id','username','password','email','university','major')
class StatesSerializer (serializers.ModelSerializer):   
    class Meta:     
        model=  States
        fields= ('state_id','state_name')
class UniversitiesSerializer (serializers.ModelSerializer):
    class Meta:
        model = Universities
        fields= ('universities_id','universities_name','universities_parent_id')
class CaliforniastateuniversitynorthridgeSerializer(serializers.ModelSerializer):
    class Meta:
        model= Californiastateuniversitynorthridge
        fields=('californiastateuniversitynorthridge_id','californiastateuniversitynorthridge_major','californiastateuniversitynorthridge_courses','californiastateuniversitynorthridge_parent_id','californiastateuniversitynorthridge_courses_parent_id')        


