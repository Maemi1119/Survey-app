<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="{{ asset('/assets/css/index.css') }}">
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
        
        <div class=create>
        <h2 id="create-index" class="big">アンケート作成</h2>
            <p class="txt">下のボタンからアンケートを作成することができます。<br>
            調査のためのアンケートからテスト作成まで、誰にとっても<br>
            使いやすく、自由度の高いアンケートツールを目指しています。
            </p>
            
            <img src="assets/images/computer_laptop_angle1.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像">
            <img src="assets/images/computer_laptop_angle2.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像">
            
            <!--未作成のリンクあり-->
            <p class="exp">アンケートの作成方法は<a href="説明書のリンク" target="_blank">こちら</a>をご参照ください</p>
            
            <button type="button">アンケートを作る</button>
        </div>
        
        <h3 id="result-index" class="big">アンケート結果の確認</h3>
            <p class="txt">下のボタンからアンケート一覧を確認することができます。<br>
            アンケート一覧画面では、アンケート結果の確認と分析を行うことができます。
            </p>
            
            <div class="result">
                <img src="assets/images/computer_laptop_angle1.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像">
                <p class="exp">アンケート結果の確認方法は<a href="説明書のリンク">こちら</a>をご参照ください。</p>
                <button type="button">アンケートの表示</button>
            </div>
            
            <div id=analysis-index class="analysis">
                <img src="assets/images/computer_laptop_angle2.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像">
                <p class="exp">結果分析機能は近々実装予定です。 </p>
                 <button type="button">アンケートの分析</button>
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
    
</html>