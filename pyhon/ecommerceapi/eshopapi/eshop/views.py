from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from eshop.models import Product,Collection
from .serializers import ProductSerializers


@api_view()
def product_list(request):
    queryset=Product.objects.select_related('collection').all()
    serializer=ProductSerializers(queryset,many=True)
    return Response(serializer.data)




@api_view()
def product_detail(request,id):
     product=get_object_or_404(Product,pk=id)
     serializer=ProductSerializers(product)
     return Response(serializer.data)
 
