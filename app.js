const quiz = [
  {
    question:"日本で一番人口が少ない都道府県はどこ？",
    answers:[
      "岐阜県",
      "山形県",
      "鳥取県",
      "香川県"
    ],
    correct:"鳥取県"
  },
  {
    question:"茨城県にある日本一大きな〇〇とは？",
    answers:[
      "お城",
      "大仏",
      "神社",
      "古墳"
    ],
    correct:"大仏"
  },
  {
    question:"日本一動物の種類が多い動物園はどこ？",
    answers:[
      "上野動物園",
      "東山動植物園",
      "旭山動物園",
      "アドベンチャーワールド"
    ],
    correct:"東山動植物園"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//定数
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//定数の文字列をhtmlに反映させる
const setupQuiz = () => {
  //質問文出力
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  //ボタンのインデックス
  let buttonIndex = 0;
  //答えの選択肢
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

//定数
const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;

while (handleIndex < buttonLength){
  $button[handleIndex].addEventListener("click",(e) => {
    clickHandler(e);
  });
  handleIndex++;
}
