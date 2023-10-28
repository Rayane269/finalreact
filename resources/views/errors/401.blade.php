@extends('errors::minimal')

@section('title', __('Unauthorized'))


@section('image')
<img src="{{asset('eureur/401.png')}}" class="image404" alt="">
@endsection

@section('lien')
<a href="javascript:history.back()">Retour</a>
@endsection

@section('code', '401')
@section('message', __('Unauthorized'))

