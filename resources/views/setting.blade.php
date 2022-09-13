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
            
            <dev class="name">
                <h2>アンケート名</h2>
                <input type="text" name="post[name]" placeholder="食べ物についてのアンケート"/><br>
            </dev>
        
            <dev class="overview">
                <h2>アンケート名</h2>
                <textarea name="post[overview]" placeholder="このアンケートの目的は〇〇です。"></textarea><br>
            </dev>
        
            <dev class="category">
                <h2>アンケートのカテゴリ</h2>
            </dev>
        
            <dev class="show-question-count">
                <h2>設問数の表示</h2>
                <input type="radio" name="post[show-question-count]" value="1" id="show-0"><label for="show-0">表示する</label><br>
                <input type="radio" name="post[show-question-count]" value="0" id="show-1"><label for="show-1">表示しない</label><br>
            </dev>
        
            <dev class="kind">
                <h2>アンケートの種類</h2>
                <input type="radio" name="post[setting]" value="1" id="kind-0" onclick="changeDisplay()"><label for="kind-0">パブリック</label><br>
                <input type="radio" name="post[setting]" value="2" id="kind-1" onclick="changeDisplay()"><label for="kind-1">プライベート</label><br>
                <input id="password" type="text" name="post[password]" /><br>
            </dev>
            
            <dev class="is_logined">
                <h2>アプリへのログイン</h2>
                <input type="radio" name="post[is_logined]" value="1" id="login-0"><label for="login-0">必要</label><br>
                <input type="radio" name="post[is_logined]" value="0" id="login-1"><label for="login-1">不要</label><br>
            </dev>
            
            <dev class="user1">
                <h2>回答を閲覧できるユーザー</h2>
                <input type="checkbox" name="post[setting]" value="3" id="user1-0"><label for="user1-0">投稿者(あなた)</label><br>
                <input type="checkbox" name="post[setting]" value="4" id="user1-1"><label for="user1-1">すべてのユーザー</label><br>
                <input type="checkbox" name="post[setting]" value="5" id="user1-2"><label for="user1-2">アプリにログインしたすべてのユーザー</label><br>
                <input id="brows" type="checkbox" name="post[setting]" value="6"><label for="brows">閲覧用パスワードを入力したすべてのユーザー</label><br>
            </dev>
            
            <dev class="user2">
                <h2>回答を分析できるユーザー</h2>
                <input type="checkbox" name="post[setting]" value="7" id="user2-0"><label for="user2-0">投稿者(あなた)</label><br>
                <input type="checkbox" name="post[setting]" value="8" id="user2-1"><label for="user2-1">回答を閲覧したすべてのユーザー</label><br>
                <input type="checkbox" name="post[setting]" value="9" id="user2-2"><label for="user2-2">閲覧用パスワードを入力したすべてのユーザー</label><br>
                <input id="analysis" type="checkbox" name="post[setting]" value="10"><label for="analysis">分析用パスワードを入力したすべてのユーザー</label><br>
            </dev>
            
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