
const ButtonRow={

    template:`
        <div>
            <button @click="onHoodieClick">Hoodie</button>
        </div>
    
    
    
    `
}


new Vue({
    el: '#app',
    components: {
        'button-row': ButtonRow
    }
})