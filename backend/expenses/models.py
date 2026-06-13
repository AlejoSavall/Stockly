import uuid
from django.db import models

class Expense(models.Model):
    CATEGORY_CHOICES = [
        ('shipping', 'Envíos'),
        ('supplies', 'Insumos'),
        ('advertising', 'Publicidad'),
        ('taxes', 'Impuestos'),
        ('other', 'Otro'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='other')
    date = models.DateField()
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.description} — ${self.amount}"

    class Meta:
        ordering = ['-date']