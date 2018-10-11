


const inputComponent = {
    template: `<input 
    v-model="input" 
    :placeholder="placeholder"
    @keyup.enter="monitorEnterKey"
     class="input is-small" type="text" />`,
    props: ['placeholder'],
    data() {
        return {
            input: ''
        }
    },
    methods: {
        monitorEnterKey() {
            // this.$emit('add-note', {
            //     note: this.input,
            //     timestamp: new Date().toLocaleString()
            // })

            EventBus.$emit('add-note', {
                note: this.input,
                timestamp: new Date().toLocaleString()
            })
            this.input = '';
        }
    }

}
const noteCountComponent = {
    template: `<div class="note-count">Note count: <strong>{{ noteCount }}</strong></div>`,
    data() {
        return {
            noteCount: 0
        }
    },
    created() {
        EventBus.$on('add-note', event => this.noteCount++)
    }
}
new Vue({
    el: '#app',
    data: {
        notes: [],
        timestamps: [],
        placeholder: 'Enter a note'
    },
    components: {
        'input-component': inputComponent,
        'note-count-component': noteCountComponent
    },
    methods: {
        addNote(event) {
            this.notes.push(event.note)
            this.timestamps.push(event.timestamp)
            console.log('event', event);

        }
    }, created() {
        console.log('created');
        EventBus.$on('add-note', event => {
            console.log('event', event);
            this.notes.push(event.note)
            this.timestamps.push(event.timestamp)
        })
    }
})