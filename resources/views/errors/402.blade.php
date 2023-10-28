
@extends('errors::minimal')


@section('title', __('Payment Required'))
@section('image')
<img src="{{asset('eureur/402.png')}}" class="image404" alt="">
@endsection

@section('lien')
<a href="javascript:history.back()">Retour</a>
@endsection

@section('code', '402')

@section('message', __('Payment Required'))
