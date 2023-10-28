@extends('errors::minimal')

@section('title', __('Server Error'))



@section('image')
<img src="{{asset('eureur/500_2.png')}}" class="image404" alt="">
@endsection

@section('lien')
<a href="javascript:history.back()">Retour</a>
@endsection


@section('code', '500')
@section('message', __('Server Error'))
