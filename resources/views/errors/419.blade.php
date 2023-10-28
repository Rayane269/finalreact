

@extends('errors::minimal')
@section('title', __('Page Expired'))



@section('image')
    <img src="{{asset('eureur/419.png')}}" class="image404" alt="">
@endsection

@section('lien')
    <a href="javascript:history.back()">Retour</a>
@endsection

@section('code', '419')
@section('message', __('Page Expired'))


