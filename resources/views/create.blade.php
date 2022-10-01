<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="{{ asset('/assets/css/create.css') }}">
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
       <h2>アンケート作成</h2>
       
       <div class="name">
            <h2>アンケート名</h2>
            <p>{{$questionaire->name}}</p>
        </div>
            
       <form name="create" action="/create/{{$questionaire->id}}" method="POST" enctype="multipart/form-data">
           @csrf
            <div class="question">
                <p>質問</p>
                <input type="text" name="questions[0][question]" placeholder="好きな食べ物は何ですか？"/><br>
            </div>
            
            <div class="method">
                <p>【回答方法】</p>
                @foreach($methods as $method)
                <input type="radio" name="questions[0][method_id]" value="{{ $method->id }}" id="{{ $method->id }}"><label for="{{ $method->id }}">{{ $method->method }}</label><br>
                @endforeach
            </div>
            
            <div id="choice" class="choice">
                <p>選択肢を作成してください。</p>
                <input type="text" name="choices[choice][]" placeholder="りんご"/><br>
                <input type="text" name="choices[choice][]" placeholder="バナナ"/><br>
                <button type="button" id="choice_btn">+</button>
            </div>

            <div id="limited_descriptions" class="limited_descriptions">
                <p>入力を許可する文字を選択してください。</p>
                <input type="checkbox" name="limited_descriptions[limited][]" value="1" id="limited-0"><label for="limited-0">数字</label><br>
                <input type="checkbox" name="limited_descriptions[limited][]" value="2" id="limited-1"><label for="limited-1">日本語</label><br>
                <input type="checkbox" name="limited_descriptions[limited][]" value="3" id="limited-2"><label for="limited-2">ひらがな</label><br>
                <input type="checkbox" name="limited_descriptions[limited][]" value="4" id="limited-3"><label for="limited-3">カタカナ</label><br>
                <input type="checkbox" name="limited_descriptions[limited][]" value="5" id="limited-4"><label for="limited-4">アルファベット</label><br>
            </div>
            
            <div id="slider" class="slider">
                <p>最小値</p>
                <input type="number" name="questions[0][min_value]" placeholder="1"/><br>
                <p>最大値</p>
                <input type="number" name="questions[0][max_value]" placeholder="100"/><br>
                <p>左</p>
                <input type="text" name="questions[0][bar_left]" placeholder="低い、嫌い"/><br>
                <p>右</p>
                <input type="text" name="questions[0][bar_right]" placeholder="高い、好き"/><br>
            </div>
                
            <div id="data" class="data">
                <p>アップロードを許可する<br>
                ファイルの個数を選択<br>
                してください。</p>
                <select name="data">
                    <option value"">--</option>
                    <option value"1">1</option>
                    <option value"2">2</option>
                    <option value"3">3</option>
                    <option value"4">4</option>
                    <option value"5">5</option>
                    <option value"6">6</option>
                    <option value"7">7</option>
                    <option value"8">8</option>
                    <option value"9">9</option>
                    <option value"10">10</option>
                </select>
            </div>
            
            <div class="setting">
                <p>【設定】</p>
                <input type="checkbox" name="questions[0][letter]" value="1" id="setting-0"><label for="setting-0">字数</label>
                    <div id="letter" class="letter">
                        <p>　最小</p>
                        <input type="number" name="questions[0][min_letter]" placeholder="1"/>
                        <p>最大</p>
                        <input type="number" name="questions[0][max_letter]" placeholder="100"/>
                    </div><br>
                <input type="checkbox" name="questions[0][show]" value="2" id="setting-1"><label for="setting-1">表示</label><br>
                <input type="checkbox" name="questions[0][image]" value="3" id="setting-2"><label for="setting-2">画像</label>
                    <div id="image" class="image">
                        <input type="file" name="questions[0][data]">
                    </div><br>
                <input type="checkbox" name="questions[0][required]" value="4" id="setting-3"><label for="setting-3">必須回答</label><br>
            </div>
            
            <div id="show" class="show">
                
            </div>
            
            <button id=btn type="button">+</button>
            
            
            
            
            
            <input type="submit" value="プレビュー"/>
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