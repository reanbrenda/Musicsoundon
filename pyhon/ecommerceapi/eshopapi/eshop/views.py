from django.shortcuts import get_object_or_404
from django.db.models.aggregates import Count
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.mixins import ListModelMixin,CreateModelMixin
from rest_framework.decorators import APIView
from eshop.models import Product,Collection
from .serializers import ProductSerializers
from .serializers import CollectionSerializers
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView





class Product(ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers

    def get_context_data(self, **kwargs):
        return {'request':self.request}

    def destroy(self, request,*args,kwargs):
         if Orderitem.objects.filter(product_id=kwargs['pk']).count>0:
             return Response({"error":'Product cannot be deleted because it is associated with an order item.'},status=status.HTTP_405_METHOD_NOT_ALLOWED)
         return super().destroy(request,*args,kwargs)


""" class ProductList(ListCreateAPIView):
    def get_queryset(self):
        return Product.objects.select_related('collection').all()
    def get_serializer_class(self):
        return ProductSerializers
    


class ProductDetail(RetrieveUpdateDestroyAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers
    def delete(self,request,id):
         if product.orderitem.count()>0:
             return Response({"error":'Product cannot be deleted because it is associated with an order item.'},status=status.HTTP_405_METHOD_NOT_ALLOWED)
         product.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)
     """
    
"""   def get(self,request):
        queryset=Product.objects.select_related('collection').all()
        serializer = ProductSerializers(
            queryset, many=True, context={'request': request})
        return Response(serializer.data)
    def post(self,request):
        serializer=ProductSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
 """
""" @api_view(['GET','POST'])
def product_list(request):
    if request.method=='GET':
        queryset=Product.objects.select_related('collection').all()
        serializer=ProductSerializers(queryset,many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer=ProductSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED) """
        




""" @api_view(['GET','PUT','DELETE'])
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
     elif request.method=="DELETE":
         if product.orderitem.count()>0:
             return Response({"error":'Product cannot be deleted because it is associated with an order item.'},status=status.HTTP_405_METHOD_NOT_ALLOWED)
         product.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)
@api_view(['GET','POST'])  
def collectionlist(request):
    if request.method=="GET":
        queryset = Collection.objects.annotate(products_count=Count('products')).all()
        serializer=CollectionSerializers(queryset)
        return Response(serializer.data)
    elif request.method=="POST":
        serializer=CollectionSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
@api_view(['GET','PUT','DELETE'])
def  collection_detail(request,id):
    collection=get_object_or_404.annotate(products_count=Count('products'), pk=pk)
    if request.method=="GET":
      serializer=CollectionSerializers(collection)
      return Response(serializer.data)
    elif request.method=="PUT":
      serializer=CollectionSerializers(collection,data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)


 
 """