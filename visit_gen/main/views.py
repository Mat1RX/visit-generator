from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import VisitCard


def index(request):
    return render(request, 'main/index.html')


def create_user(request):
    if request.method == 'GET':
        return redirect(index)

    elif request.method == 'POST':
        name = request.POST.get('name')
        phone_number = request.POST.get('phone_number')
        email = request.POST.get('email')
        telegram = request.POST.get('telegram')
        vk = request.POST.get('vk')
        youtube = request.POST.get('youtube')

        newvc = VisitCard(name=name, phone_number=phone_number, email=email, telegram=telegram, vk=vk, youtube=youtube, is_org=False)
        newvc.save()
        url = f'/{newvc.id}'

        return redirect(url)


def create_organization(request):
    if request.method == 'GET':
        return redirect(index)
    elif request.method == 'POST':
        name = request.POST.get('name')
        phone_number = request.POST.get('phone_number')
        email = request.POST.get('email')
        address = request.POST.get('address')
        type_activ = request.POST.get('type_activ')
        director = request.POST.get('director')
        site_url = request.POST.get('site_url')

        newvc = VisitCard(name=name, phone_number=phone_number, email=email, address=address, type_activ=type_activ, director=director, site_url=site_url, is_org=True)
        newvc.save()
        url = f'/{newvc.id}'

        return redirect(url)



def visitcard(request, id):
    try:
        vc = VisitCard.objects.get(pk=id)
    except VisitCard.DoesNotExist:
        return render(request, '404.html')

    if vc.is_org:
        data = {
            'name': vc.name,
            'phone_number': vc.phone_number,
            'email': vc.email,
            'address': vc.address,
            'type_activ': vc.type_activ,
            'director': vc.director,
            'site_url' : vc.site_url,
            'id': vc.id
        }
        return render(request, 'main/visitcard_ip.html', data)
    else:
        data = {
            'name': vc.name,
            'phone_number': vc.phone_number,
            'email': vc.email,
            'telegram': vc.telegram,
            'vk': vc.vk,
            'youtube': vc.youtube,
            'id': vc.id
        }
        return render(request, 'main/visitcard.html', data)


def search(request):
    if request.method == 'GET':
        return redirect(index)
    elif request.method == 'POST':
        id = request.POST.get('id')
        return redirect(f'{id}/')


def sec(request):
    resp = request.is_secure()

    return HttpResponse(resp)
