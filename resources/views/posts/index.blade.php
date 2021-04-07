@extends('layout.app')
@section('content')
<es-logo></es-logo>
<es-sidebar></es-sidebar>
<es-carousel></es-carousel>
@push('stylesheets')
    <link rel="stylesheet" href="/css/style.css">
@endpush
@push('scripts')
    <script src="/js/carousel.js"></script>
    <link>
@endpush
@endsection