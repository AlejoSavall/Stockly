from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'sku', 'cost_price', 'sale_price', 'stock']
    search_fields = ['name', 'sku']