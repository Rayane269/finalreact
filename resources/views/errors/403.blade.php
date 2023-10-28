@extends('errors::minimal')

@section('title', __('Forbidden'))
@section('image')
    <img src="{{asset('eureur/403.png')}}" class="image404" alt="">
@endsection

@section('lien')
    <a href="javascript:history.back()">Retour</a>
@endsection

@section('code', '403')
@section('message',  __($exception->getMessage() ?: 'Forbidden'))
