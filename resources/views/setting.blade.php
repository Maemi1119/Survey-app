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
        <form name="setting" action="/setting" method="POST">
            @csrf
            
            <div class="name">
                <h2>アンケート名</h2>
                <input type="text" name="post[name]" placeholder="食べ物についてのアンケート"/><br>
            </div>
        
            <div class="overview">
                <h2>アンケートの説明</h2>
                <textarea name="post[overview]" placeholder="このアンケートの目的は〇〇です。"></textarea><br>
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
                <input type="radio" name="post[show_question_count]" value="1" id="show-0"><label for="show-0">表示する</label><br>
                <input type="radio" name="post[show_question_count]" value="2" id="show-1"><label for="show-1">表示しない</label><br>
            </div>
        
            <div class="kind">
                <h2>アンケートの種類</h2>
                @foreach($settings as $setting)
                    @if($setting->id >= 1 && $setting->id <= 2)
                        <input type="radio" name="settings_radio" value="{{$setting->id}}" id="setting_{{$setting->id}}" onclick="{{$setting->id=== 1 ? 'returnDisplay()' : 'changeDisplay()'}}"><label for="setting_{{$setting->id}}">{{$setting->setting}}</label><br>
                    @endif
                @endforeach
                <input id="password" type="text" name="passwords[password]" /><br>
                <button type="button" id=btn>+</button>
            </div>
            
            <div class="is_logined">
                <h2>アプリへのログイン</h2>
                <input type="radio" name="post[is_logined]" value="1" id="login-0"><label for="login-0">必要</label><br>
                <input type="radio" name="post[is_logined]" value="2" id="login-1"><label for="login-1">不要</label><br>
            </div>
            
           <div class="user1">
                <h2>回答を閲覧できるユーザー</h2>
                @foreach($settings as $setting)
                    @if($setting->id >= 3 && $setting->id <= 6)
                        <input type="checkbox" name="settings[{{$setting->id}}]" value="{{$setting->id}}" id="setting_{{$setting->id}}"><label for="setting_{{$setting->id}}">{{$setting->setting}}</label><br>
                    @endif
                @endforeach
            </div>
            
            <div class="user2">
                <h2>回答を分析できるユーザー</h2>
                @foreach($settings as $setting)
                    @if($setting->id >= 7 && $setting->id <= 10)
                        <input type="checkbox" name="settings[{{$setting->id}}]" value="{{$setting->id}}" id="setting_{{$setting->id}}"><label for="setting_{{$setting->id}}">{{$setting->setting}}</label><br>
                    @endif
                @endforeach
            </div>
            
            <input type="submit" value="質問を作成"/>
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