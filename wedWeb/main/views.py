from django.shortcuts import render
from .forms import AtriclesForm, AbsenceForm, LaterForm


def index(request):
    error = ''
    if request.method == 'POST':
        formLater = LaterForm(request.POST)
        formAtricles = AtriclesForm(request.POST)
        formAbsence = AbsenceForm(request.POST)


        if formAtricles.is_valid():
            formAtricles.save()

        elif formLater.is_valid():
            formLater.save()

        elif formAbsence.is_valid():
            formAbsence.save()

        else:
            error = 'Данные неверно заполнены'


    formAtricles = AtriclesForm()
    formAbsence = AbsenceForm()
    formLater = LaterForm()

    data = {
        'dataArticles': {
            'form': formAtricles,
            'error': error
        },
        'dataAbsence': {
            'form': formAbsence,
            'error': error
        },
        'dataLater': {
            'form': formLater,
            'error': error
        }
    }

    return render(request, 'main/index.html', data)