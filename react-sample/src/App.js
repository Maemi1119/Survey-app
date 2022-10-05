import './App.css';

addChoice()

function App() {
  return (
    <div className='name'>
      <Title title='アンケート名'/>
      <p>{{ $questionaire->name }}</p>
    </div>
    
    <div className="question">
      <Title title='【質問】'/>
      <Text type={text} name={questions[0][question]} placeholder='好きな食べ物は何ですか？'/>
    </div>
    
    <div class="method">
      <Title title='【回答方法】'/>
      <Input type={radio} name={questions[0][method_id]} value="{{ $method->id }}" id="{{ $method->id }}"/><label for="{{ $method->id }}">{{ $method->method }}</label>
    </div>
    
    <div id='choice' className="choice">
      <Title title='選択肢を作成してください'/>
      <Text type={text} name={choices[choice][]} placeholder='りんご'/>
      <Text type={text} name={choices[choice][]} placeholder='バナナ'/>
      <Btn id={choice_btn} btnName='+'/>
    </div>
    
    <div id="limitedDescriptions" className="limitedDescriptions">
      <Title title='入力を許可する文字を選択してください。'/>
    </div>
    
    <div id="slider" className="slider">
      <Title title='最小値'/>
      <Text type={number} name={questions[0][min_value]} placeholder='1'/>
      <Title title='最大値'/>
      <Text type={number} name={questions[0][max_value]} placeholder='100'/>
      <Title title='右'/>
      <Text type={text} name={questions[0][bar_right]} placeholder='高い'/>
      <Title title='左'/>
      <Text type={text} name={questions[0][bar_left]} placeholder='低い'/>
    </div>
    
    <div id="data" className="data">
      <Title title='アップロードを許可するファイルの個数を選択してください。'/>
    </div>
    
    <div className="setting">
      <Title title='【設定】'/>
      <Input type={checkbox} name={questions[0][letter]} value="1" id="setting-0"/><label for="setting-0">'字数'</label>
      <Input type={checkbox} name={questions[0][image]} value="2" id="setting-1"/><label for="setting-1">'画像'</label>
      <Input type={checkbox} name={questions[0][show]} value="3" id="setting-2"/><label for="setting-2">'表示'</label>
      <Input type={checkbox} name={questions[0][required]} value="4" id="setting-3"/><label for="setting-3">'必須回答'</label>
    </div>
  );
}

export default App;
