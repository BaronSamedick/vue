let app = new Vue({
    el: "#app",
    data: {
        answer: null,
        question_list: [
            {
                header: 'В корзине было 10 яблок. Вы взяли из нее 4. Сколько яблок у вас осталось?',
                answers: [
                    '1',
                    '10',
                    '6',
                    '4',
                    '3',
                ],
                right: 4,
            },
            {
                header: 'В некоторых месяцах 30 дней. В некоторых – 31. А в скольких месяцах 28 дней?',
                answers: [
                    '12',
                    '6',
                    '1',
                    '2',
                    'Ни в скольких',
                ],
                right: 1,
            },
            {
                header: 'Как далеко собака может забежать в лес?',
                answers: [
                    '6 километров',
                    '14 километров',
                    'До середины леса',
                    'До конца леса',
                    'Собаки не существует',
                ],
                right: 3,
            },
            {
                header: 'Мужчина показывает другу фотографию. Друг спрашивает: «Кто это?» Человек отвечает: «Братьев и сестер, у меня нет, но отец его отца - сын моего отца». Кто на картинке?',
                answers: [
                    'Его дядя',
                    'Его отец',
                    'Его дед',
                    'Сам человек',
                    'Его сын',
                ],
                right: 5,
            },
            {
                header: 'Если арахис падает с арахисового дерева, когда ветер дует в северном направлении, в какую сторону он упадет?',
                answers: [
                    'Вниз',
                    'Он не упадет',
                    'С юга',
                    'С севера от дерева',
                    'С запада',
                ],
                right: 2,
            },
        ]
        
    },
    methods: {
        checkAnswer: function(event) {
            event.preventDefault();
            let blocks = document.querySelectorAll(".block");
            let correct = 0
            for (let i = 0; i < blocks.length; i++) {
                let answers = blocks[i].querySelectorAll("input");
                for (let j = 0; j < answers.length; j++) {
                    if(answers[j].checked) {
                        if(answers[j].value == this.question_list[i].right) {
                            correct++;
                            blocks[i].querySelector("p").classList.add("correct");
                        }
                        else {
                            blocks[i].querySelector("p").classList.add("error");
                        }
                    }
                }
            }
            this.answer = "Правильных ответов: " + String(correct);
        }
    }
})