<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="{{ asset('/assets/css/setting.css') }}">
        <script type="text/javascript" src="{{ asset('/assets/js/setting.js') }}"></script>
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
        <form action="/setting/{{ $questionaires->id }}" method="GET">
            @csrf
            
            <div class="name">
                <h2>アンケート名</h2>
                <p name="post[name]"></p>{{ $questionaires->name }}</p><br>
            </div>
        
            <div class="overview">
                <h2>アンケートの説明</h2>
                <p name="post[overview]">{{ $questionaires->overview }}</p><br>
            </div>
        
            <div class="category">
                <h2>アンケートのカテゴリ</h2>
                <select name="categories[category]">
                    <option value="">設定しない</option>
                    @foreach($categories as $category)
                        <option value="{{$category->id}}">{{$category->name}}</option>
                    @endforeach
                </select>
            </div>
        
            <div class="show_question_count">
                <h2>設問数の表示</h2>
                <p name="post[show_question_count]">{{ $questionaires->show_question_count }}</p><br>
            </div>
        
            <div class="kind">
                <h2>アンケートの種類</h2>
                @foreach($questionaires->settings as $setting)
                    @if($setting->id >= 1 && $setting->id <= 2)
                        <p name="post[kind]">{{ $setting->setting }}</p>
                    @endif
                @endforeach
                <p name="passwords[password]">{{ $passwords->password }}</p><br>
            </div>
            
            <div class="is_logined">
                <h2>アプリへのログイン</h2>
                <p name="post[is_logined]">{{ $questionaires->is_logined }}</p><br>
            </div>
            
            <div class="user1">
                <h2>回答を閲覧できるユーザー</h2>
                @foreach($questionaires->settings as $setting)
                    @if($setting->id >= 3 && $setting->id <= 6)
                        <p name="post[user1]">{{ $setting->setting }}</p>
                    @endif
                @endforeach
            </div>
            
            <div class="user2">
                <h2>回答を分析できるユーザー</h2>
                @foreach($questionaires->settings as $setting)
                    @if($setting->id >= 7 && $setting->id <= 10)
                        <p name="post[user2]">{{ $setting->setting }}</p>
                    @endif
                @endforeach
            </div>
            
            <button type="button">設定を変更する</button>
            <input type="submit" value="質問のプレビュー"/>
        </form>
        
        
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