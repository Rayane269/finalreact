@extends('errors::minimal')

@section('title', __('Not Found'))
@section('image')
    <img src="{{asset('eureur/404_1.png')}}" class="image404" alt="">
@endsection

@section('lien')
    <a href="/">Go Back to HomePage</a>
@endsection

@section('code', '404')
@section('message', __('Not Found'))
