from .models import Atricles, Absence, Later
from django.forms import ModelForm, TextInput


class AtriclesForm(ModelForm):
    class Meta:
        model = Atricles
        fields = ['quest_1', 'quest_2', 'quest_3', 'names']

        widgets = {
            "quest_1": TextInput(attrs={
                'type': 'radio',
                'value': 'Буду присутствовать',
                'name': 'one'
            }),
            "quest_2": TextInput(attrs={
                'type': 'hidden',
                'value': 'Something',
            }),
            "quest_3": TextInput(attrs={
                'type': 'radio',
                'value': 'Организованный трансфер',
                'name': 'two',
            }),
            "names": TextInput(attrs={
                'type': 'text',
                'class': 'form__input',
                'id': 'text-name',
                'placeholder': 'Иван Иванов',
            })
        }


class AbsenceForm(ModelForm):
    class Meta:
        model = Absence
        fields = ['name']

        widgets = {
            "name": TextInput(attrs={
                'type': 'text',
                'class': 'form__input text-toggle-2',
                'id': 'name',
                'placeholder': 'Иван Иванов',
            })
        }

class LaterForm(ModelForm):
    class Meta:
        model = Later
        fields = ['name', 'answer']

        widgets = {
            "name": TextInput(attrs={
                'type': 'text',
                'class': 'form__input text-toggle-1',
                'id': 'name-text',
                'placeholder': 'Иван Иванов',
            }),
            "answer": TextInput(attrs={
                'type': 'hidden',
                'class': 'form__input text-toggle-1',
                'id': 'name-text',
                'value': 'Отвечу позже'
            })
        }