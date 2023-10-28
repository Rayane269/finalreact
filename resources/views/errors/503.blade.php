@extends('errors::minimal')

@section('title', __('Service Unavailable'))


@section('image')
<img src="{{asset('eureur/503.png')}}" class="image404" alt="">
@endsection

@section('lien')
<a href="javascript:history.back()">Retour</a>
@endsection


@section('code', '503')
@section('message', __('Service Unavailable'))
