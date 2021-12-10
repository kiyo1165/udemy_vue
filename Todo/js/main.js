const app = Vue.createApp({
    data(){
        return {
            newItem:'',
            todos: [],
        }
    },
    methods:{
        addItem(){
            if(this.newItem === '') return //入力欄が空だった時処理を終了
            let todo = {
                item: this.newItem,
                isDone: false,
                isActive: false
            }
            this.todos.push(todo)
            this.newItem = '' //todo登録後に入力欄を空にする
        },
        deleteItem(index){
            this.todos.splice(index, 1) //第一引数は削除する配列, 第二引数は削除する範囲

        },
        updateItem(index){
            this.todos[index].isActive = true
            this.todos[index].item = this.todos[index].item
        },
        updateDone(index){
            this.todos[index].isActive = false
        }
    }
})

app.mount('#app')