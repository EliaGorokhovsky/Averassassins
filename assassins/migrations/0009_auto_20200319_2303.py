# Generated by Django 3.0.4 on 2020-03-19 23:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('assassins', '0008_auto_20200319_0522'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='alias',
            new_name='name',
        ),
    ]
