<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="{{ asset('/assets/css/all_result.css') }}">
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
        <h2>アンケート結果</h2>
        <cfquery datasource="SurveyApp" name="answer">
            SELECT * FROM answers
        </cfquery>
        <table border="1">
            <cfoutput query="qAnswers">
            <tr>
                <td>#qAnswers.user_id->name#</td>
                <td>#qAnswers.question_id#</td>
                <td>#qAnswers.answer#</td>
                <td>#qAnswers.creatred_at#</td>
            </tr>
            </cfoutput>
        </table><br>

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