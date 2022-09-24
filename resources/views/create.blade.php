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
            <input type="text" name="post[name]" placeholder="食べ物についてのアンケート"/><br>
        </div>
            
       <form name="create" action"/create" method="POST" enctype="multipart/form-data">
            <div class="question">
                <p>質問</p>
                <input type="text" name="questions[name]" placeholder="好きな食べ物は何ですか？"/><br>
            </div>
            
            <div class="method">
                <p>【回答方法】</p>
                <input type="radio" name="methods[method]" value="1" id="method-0"><label for="method-0">選択</label><br>
                <input type="radio" name="methods[method]" value="2" id="method-1"><label for="method-1">自由記述</label><br>
                <input type="radio" name="methods[method]" value="3" id="method-2"><label for="method-2">制限付き自由記述</label><br>
                <input type="radio" name="methods[method]" value="4" id="method-3"><label for="method-3">スライダー</label><br>
                <input type="radio" name="methods[method]" value="5" id="method-4"><label for="method-4">データのアップロード</label><br>
            </div>
            
            <div id="choice" class="choice">
                <p>選択肢を作成してください。</p>
                <input type="text" name="choices[choice]" placeholder="りんご"/><br>
                <input type="text" name="choices[choice]" placeholder="バナナ"/><br>
                <button type="button" id="choice_btn">+</button>
            </div>

            <div id="limited_descriptions" class="limited_descriptions">
                <p>入力を許可する文字を選択してください。</p>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-0"><label for="limited-0">数字</label><br>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-1"><label for="limited-1">日本語</label><br>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-2"><label for="limited-2">ひらがな</label><br>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-3"><label for="limited-3">カタカナ</label><br>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-4"><label for="limited-4">アルファベット</label><br>
            </div>
            
            <div id="slider" class="slider">
                <p>最小値</p>
                <input type="number" name="questions[min_value]" placeholder="1"/><br>
                <p>最大値</p>
                <input type="number" name="questions[max_value]" placeholder="100"/><br>
                <p>左</p>
                <input type="text" name="questions[bar_left]" placeholder="低い、嫌い"/><br>
                <p>右</p>
                <input type="text" name="questions[bar_right]" placeholder="高い、好き"/><br>
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
                    <option value"10"10></option>
                </select>
            </div>
            
            <div class="setting">
                <p>【設定】</p>
                <input type="checkbox" name="questions[letter]" value="3" id="setting-0"><label for="setting-0">字数</label>
                    <div id="letter" class="letter">
                        <p>　最小</p>
                        <input type="number" name="questions[min_letter]" placeholder="1"/>
                        <p>最大</p>
                        <input type="number" name="questions[max_letter]" placeholder="100"/>
                    </div><br>
                <input type="checkbox" name="questions[show]" value="3" id="setting-1"><label for="setting-1">表示</label><br>
                <input type="checkbox" name="questions[image]" value="3" id="setting-2"><label for="setting-2">画像</label>
                    <div id="image" class="image">
                        <input type="file" name="questions[data]">
                    </div><br>
                <input type="checkbox" name="questions[required]" value="3" id="setting-3"><label for="setting-3">必須回答</label><br>
            </div>
            
            <div id="show" class="show">
                
            </div>
            
            
            
            <button id=btn type="button">+</button>
            
            
            //＋ボタンを押したら２問め以降の質問が生成される。
            <div class="question">
                <p>質問</p>
                <input type="text" name="questions[name]" placeholder="好きな食べ物は何ですか？"/><br>
            </div>
            
            <div class="method">
                <p>【回答方法】</p>
                <input type="radio" name="methods[method]" value="1" id="method-00"><label for="method-00">選択</label><br>
                <input type="radio" name="methods[method]" value="2" id="method-01"><label for="method-01">自由記述</label><br>
                <input type="radio" name="methods[method]" value="3" id="method-02"><label for="method-02">制限付き自由記述</label><br>
                <input type="radio" name="methods[method]" value="4" id="method-03"><label for="method-03">スライダー</label><br>
                <input type="radio" name="methods[method]" value="5" id="method-04"><label for="method-04">データのアップロード</label><br>
            </div>
            
            <div id="choice2" class="choice">
                 <p>選択肢を作成してください。</p>
                <input type="text" name="questions[]" placeholder="りんご"/><br>
                <input type="text" name="questions[]" placeholder="バナナ"/><br>
                <button type="button" id="choice_btn">+</button>
            </div>
            
            <div id="limited_descriptions2" class="limited_descriptions">
                <p>入力を許可する文字を選択してください。</p>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-0"><label for="limited-0">数字</label><br>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-1"><label for="limited-1">日本語</label><br>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-2"><label for="limited-2">ひらがな</label><br>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-3"><label for="limited-3">カタカナ</label><br>
                <input type="checkbox" name="limited_descriptions[limited]" value="3" id="limited-4"><label for="limited-4">アルファベット</label><br>
            </div>
            
            <div id="slider2" class="slider">
                <p>最小値</p>
                <input type="number" name="questions[min_value]" placeholder="1"/><br>
                <p>最大値</p>
                <input type="number" name="questions[max_value]" placeholder="100"/><br>
                <p>左</p>
                <input type="text" name="questions[]" placeholder="低い、嫌い"/><br>
                <p>右</p>
                <input type="text" name="questions[]" placeholder="高い、好き"/><br>
            </div>
            
            <div id="data2" class="data">
                <p>アップロードを許可する<br>
                   ファイルの個数を選択<br>
                   してください。</p>
                <select name="data" id="data_select">
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
                    <option value"10"10></option>
                </select>
            </div>
            
            
            <div class="setting">
                <p>【設定】</p>
                <input type="checkbox" name="questions[letter]" value="3" id="setting-00"><label for="setting-00">字数</label>
                    <div id="letter2" class="letter">
                        <p>　最小</p>
                        <input type="number" name="questions[min_letter]" placeholder="1"/>
                        <p>最大</p>
                        <input type="number" name="questions[max_letter]" placeholder="100"/>
                    </div><br>
                <input type="checkbox" name="questions[show]" value="3" id="setting-01"><label for="setting-01">表示</label><br>
                <input type="checkbox" name="questions[image]" value="3" id="setting-02"><label for="setting-02">画像</label>
                    <div id="image2" class="image">
                        <input type="file" name="questions[data]">
                    </div><br>
                <input type="checkbox" name="questions[required]" value="3" id="setting-03"><label for="setting-03">必須回答</label><br>
                <input type="checkbox" name="questions[branch]" value="3" id="setting-04"><label for="setting-04">分岐</label><br>
            </div>
            
            <div id="show2" class="show"></div>
            
            <div id="branch" class="branch"></div>
            
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