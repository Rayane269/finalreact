@extends('errors::minimal')

@section('title', __('Too Many Requests'))

@section('image')
<img src="{{asset('eureur/429.png')}}" class="image404" alt="">
@endsection

@section('lien')
<a href="javascript:history.back()">Retour</a>
@endsection

@section('code', '429')

@section('message', __('Too Many Requests'))



