import { reactive } from 'vue';

export const store = reactive({
  score: 0,
  questionCount: 0,
  quizEnded: false,
  data: null,
  options: null,
  loading: false,
  currentQuestion: 0,
  step: 1,
  showAnswer: false,
  incrementScore() {
    this.score++;
  },
  restartQuiz() {
    this.score = 0;
    this.step = 1;
    this.questionCount = 0;
    this.quizEnded = false;
    this.data = null;
    this.loading = true;
  },
  setQuestionCount(count) {
    this.questionCount = count;
  },
  getData() {
    this.data = {
      results: [
        {
          question: '¿Donde nacio Jesus?',
          correct_answer: {
            key: '5',
            img: 'image1.png'
          },
          incorrect_answers: [{
            key: '1',
            img: 'image1.png'
          }, {
            key: '2',
            img: 'image1.png'
          }, {
            key: '3',
            img: 'image1.png'
          }, {
            key: '4',
            img: 'image1.png'
          }]
        },
        {
          question: '¿Que fue primero?',
          correct_answer: {
            key: '5',
            img: 'image1.png'
          },
          incorrect_answers: [{
            key: '1',
            img: 'image1.png'
          }, {
            key: '2',
            img: 'image1.png'
          }, {
            key: '3',
            img: 'image1.png'
          }, {
            key: '4',
            img: 'image1.png'
          }]
        },
        {
          question: '¿Como se llamaba el discipulo que bautizó a Jesús?',
          correct_answer: {
            key: '5',
            img: 'image1.png'
          },
          incorrect_answers: [{
            key: '1',
            img: 'image1.png'
          }, {
            key: '2',
            img: 'image1.png'
          }, {
            key: '3',
            img: 'image1.png'
          }, {
            key: '4',
            img: 'image1.png'
          }]
        },
        {
          question: '¿Que fue primero?',
          correct_answer: {
            key: '5',
            img: 'image1.png'
          },
          incorrect_answers: [{
            key: '1',
            img: 'image1.png'
          }, {
            key: '2',
            img: 'image1.png'
          }, {
            key: '3',
            img: 'image1.png'
          }, {
            key: '4',
            img: 'image1.png'
          }]
        },
        {
          question: '¿Cuantos discipulos formó Jesús?',
          correct_answer: {
            key: '5',
            img: 'image1.png'
          },
          incorrect_answers: [{
            key: '1',
            img: 'image1.png'
          }, {
            key: '2',
            img: 'image1.png'
          }, {
            key: '3',
            img: 'image1.png'
          }, {
            key: '4',
            img: 'image1.png'
          }]
        },
        {
          question: '¿Que fue despues?',
          correct_answer: {
            key: '5',
            img: 'image1.png'
          },
          incorrect_answers: [{
            key: '1',
            img: 'image1.png'
          }, {
            key: '2',
            img: 'image1.png'
          }, {
            key: '3',
            img: 'image1.png'
          }, {
            key: '4',
            img: 'image1.png'
          }]
        },
        {
          question: '¿Que fue primero?',
          correct_answer: {
            key: '5',
            img: 'image1.png'
          },
          incorrect_answers: [{
            key: '1',
            img: 'image1.png'
          }, {
            key: '2',
            img: 'image1.png'
          }, {
            key: '3',
            img: 'image1.png'
          }, {
            key: '4',
            img: 'image1.png'
          }]
        }
    ]
  };
    this.currentQuestion = 0;
    this.showAnswer = false;
    this.questionCount = this.data.results.length;
    this.loading = false;
  },
  checkAnswer(answer) {
    if (this.data.results[this.currentQuestion].correct_answer.key == answer) {
      this.incrementScore();
      this.showAnswer = true;
      this.data.results[this.currentQuestion].guessedRight = true;
      return;
    }
    this.data.results[this.currentQuestion].guessedRight = false;
    this.showAnswer = true;
  },
  getNextQuestion() {
    if (this.currentQuestion >= this.data.results.length - 1) {
      this.quizEnded = true;
      this.step = 2;
    }
    this.currentQuestion += 1;
    this.showAnswer = false;
  },
  startQuiz(payload) {
    this.options = payload;
    this.step = 1;
  },
});
