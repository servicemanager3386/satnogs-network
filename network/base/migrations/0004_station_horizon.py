# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-19 00:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_auto_20160119_1856'),
    ]

    operations = [
        migrations.AddField(
            model_name='station',
            name='horizon',
            field=models.PositiveIntegerField(default=10, help_text=b'In degrees above 0'),
        ),
    ]
