let app = new Vue({
    el: "#app",
    data: {
        task_id: 1,
        task_name: null,
        task_list: [],
    },
    methods: {
        addTask: function (event) {
            event.preventDefault();
            let task_name = document.getElementById("task_name");

            this.task_name = task_name.value;

            let task = {id: this.task_id++, name: this.task_name};
            this.task_list.push(task);
            
        },

        checkBox: function(event) {
            let element = event.target;
            if(element.checked) {
                element.parentElement.parentElement.firstChild.classList.add("checked");
                element.remove();
            }
        },

        deleteObject: function(id) {
            const index = this.task_list.findIndex(n => n.id === id);
            if (index !== -1) {
                this.task_list.splice(index, 1);
            }
        },

        doubleClick: function(event, task_list = this.task_list, id=this.id) {
            let elem = event.target;
            let input = document.createElement('input');

            input.value = elem.innerHTML;

            elem.innerHTML = '';

            input.addEventListener('keypress', function(e) {
                    if (e.keyCode === 13) {
                        event.target.parentElement.remove();
                        task_list.push({id: id, name: this.value});
                    }
                });
            
            elem.appendChild(input);
        }
    }
})