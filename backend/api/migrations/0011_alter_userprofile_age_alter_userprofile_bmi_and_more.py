# Generated by Django 4.1.7 on 2023-03-17 09:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_userprofile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='age',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='bmi',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='bmr',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='cousine',
            field=models.CharField(choices=[('Morocco', 'Morocco'), ('Turkey', 'Turkey'), ('Spain', 'Spain')], max_length=10),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='diary',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='eggs',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='energy_intake',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='fish',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='halal',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='height',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='pal',
            field=models.CharField(choices=[('Sedentary', 'Sedentary'), ('Low active', 'Low Active'), ('Active', 'Active'), ('Very active', 'Very Active')], max_length=50),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='weight',
            field=models.FloatField(),
        ),
    ]
