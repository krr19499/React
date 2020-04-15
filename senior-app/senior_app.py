from django.shortcuts import render

def index(request):
    return render(request,'senior-app/public/index.html')