<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="{{ asset('/assets/css/list.css') }}">
        <title>SurveyApp</title>
    </head>
       
    <header>
        <ul>
            <li><a href="#create-index">アンケート作成ツール　</a></li>
            <li><a href="#result-index">アンケート結果表示　</a></li>
            <li><a href="#analysis-index">アンケート結果分析　</a></li>
            <li><a href="説明書のリンク" target="_blank">各機能のご利用方法　</a></li>
        </ul>
        <h1>　SurveyApp</h1>
            
    </header>
    
    <body>
        <h2>アンケート投稿一覧画面</h2>
        <div class='lists'>
            @foreach ($lists as $list)
                <div class='list'>
                    <p class='name'>{{ $list->name }}<p>
                    <p class='category'>{{ $list->category }}</p>
                    <p class='user_id'>{{ $list->user_id }}{{ $list->name }}</p>
                    /*ここに回答数*/
                    <p class='create_at'>{{ $list->create_at }}</p>
                    <p class='updated_at'>{{ $list->update_at }}</p>
                    <button type="button">共有</button>
                    <button type="button">開く</button>
                </div>
            @endforeach
        </div>
    </body>
    
     <footer>
        <ul>
            <li><a href="#create-index">アンケート作成ツール　</a></li>
            <li><a href="#result-index">アンケート結果表示　</a></li>
            <li><a href="#analysis-index">アンケート結果分析　</a></li>
            <li><a href="説明書のリンク" target="_blank">各機能のご利用方法　</a></li>
        </ul>
        <ul>
            <li>ログイン情報</li>
            <li>アカウント情報</li>
            <li>アカウント管理</li>
            <li>ログアウト</li>
        </ul>
    </footer>