from  rest_framework import serializers
from decimal import Decimal
from eshop.models import Product,Collection
class CollectionSerializers(serializers.ModelSerializer):
    class Meta:
        model=Collection
        fields=['id','title']

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields=['id','title','unit_price','inventory','price_after_tax','collection']
    price_after_tax=serializers.SerializerMethodField(method_name='calculate_tax')
    
    def calculate_tax(self, product: Product):
        return product.unit_price * Decimal(1.1)
