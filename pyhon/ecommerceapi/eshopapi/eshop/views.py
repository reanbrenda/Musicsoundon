from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from eshop.models import Product,Collection
from .serializers import ProductSerializers


@api_view(['GET','POST'])
def product_list(request):
    if request.method=='GET':
        queryset=Product.objects.select_related('collection').all()
        serializer=ProductSerializers(queryset,many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer=ProductSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
        


@api_view(['GET','PUT','DELETE'])
def product_detail(request,id):
     product=get_object_or_404(Product,pk=id)
     if request.method=="GET":
         serializer=ProductSerializers(product)
         return Response(serializer.data)
     elif request.method =="PUT":
         serializer=ProductSerializers(product,data=request.data)
         serializer.is_valid(raise_exception=True)
         serializer.save()
         return Response(serializer.data)
     elif request.METHOD=="DELETE":
         product.
     
   
 
