<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="{{ asset('/assets/css/account.css') }}">
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
        
        <p>こちらはアカウント作成フォームになります。<br>
        すでにアカウントをお持ちの方は<a href="ログイン画面のリンク" target="_blank">ログイン</a>してください。</p>
        
        <form action="/account" method="POST">
            @csrf
            
            <dev class="name">
                <h2>氏名</h2>
                <input type="text" name="post[name]" placeholder="鈴木　花子"/><br>
            </dev>
            
            <dev class="nickname">
                <h2>ニックネーム</h2>
                <input type="text" name="post[nickname]" placeholder="ハナタロウ"/><br>
            </dev>
            
            <dev class="email">
                <h2>メールアドレス</h2>
                <input type="text" name="post[email]" placeholder="surveyapp@survey.com"/><br>
            </dev>
            
            <dev class="phone">
                <h2>電話番号</h2>
                <input type="number" maxlength="11" name="post[phone]" placeholder="0101110000"/><br>
            </dev>
            
            <dev class="sex">
                <h2>性別</h2>
                <input type="radio" name="post[nickname]" value="女">女<br>
                <input type="radio" name="post[nickname]" value="男">男<br>
                <input type="radio" name="post[nickname]" value="その他">その他<br>
            </dev>
            
            <dev class="birth">
                <h2>生年月日</h2>
                <select name="year">
                    <option value="">--</option>
                    @for($year = 1900; $year < 2021; $year++)
                        <option value="{{$year}}">{{$year}}</option>
                    @endfor
                </select>
                年
                <select name="month">
                    <option value="">--</option>
                    @for($month = 1; $month < 13; $month++)
                        <option value="{{$month}}">{{$month}}</option>
                    @endfor
                </select>
                月
                <select name="day">
                    <option value="">--</option>
                    @for($day = 1; $day < 32; $day++)
                        <option value="{{$day}}">{{$day}}</option>
                    @endfor
                </select>
                日 <br>
                <br>
            </dev>
            
            <dev class="job">
                <h2>職業</h2>
                <select name="job">
                <option value="">--</option>
                <option value="students">学生</option>
                <option value="regular">会社員・会社役員</option>
                <option value="public">公務員・団体職員</option>
                <option value="tercher">教員・学校職員</option>
                <option value="parttime">派遣社員・パート・アルバイト</option>
                <option value="home">専業主婦・主夫</option>
                <option value="other">その他</option>
                </select>
            </dev>
            
            <dev class="password">
                <h2>パスワード</h2>
                <input type="password" name="post[password]" placeholder="********"/><br>
            </dev>
            
            <dev class="password2">
                <h2>パスワード確認</h2>
                <input type="password" name="post[password2]" placeholder="********"/><br>
            </dev>
            
            <input type="submit" value="登録"/>
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