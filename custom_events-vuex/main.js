
const state = {
    notes: [],
    timestamps: [],
    placeholder: 'Please Enter'
}


const store = new Vuex.Store({
    state,
    getters: {
        getNotes() {
            return state.notes;
        },
        getTimestamps() {
            return state.timestamps;
        },
        getNoteCount(state) {
            return state.notes.length;
        }
        , getPlaceholder(state) {
            return state.placeholder;
        },
        // ...mapGetters([
        //     'placeholder'
        // ])
    },
    mutations: {
        ADD_NOTE(state, payload) {
            let newNote = payload.payload;
            state.notes.push(newNote);
        },
        ADD_TIMESTAMP(state, payload) {
            let newNote = payload;
            state.timestamps.push(newNote);
        }
    },
    actions: {
        addNote(context, payload) {
            // context.commit('ADD_NOTE', payload)
            context.commit({
                type:'ADD_NOTE',
                payload
            })

        },
        addTimestamp(context, payload) {
            context.commit('ADD_TIMESTAMP', payload)
        }
    }
})


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

            // EventBus.$emit('add-note', {
            //     note: this.input,
            //     timestamp: new Date().toLocaleString()
            // })

            this.$store.dispatch('addNote', this.input)
            this.$store.dispatch('addTimestamp', new Date().toLocaleString())

            this.input = '';
        }
    }

}
const noteCountComponent = {
    template: `<div class="note-count">Note count: <strong>{{ noteCount }}</strong></div>`,
    computed: {
        noteCount() {
            return this.$store.getters.getNoteCount;
        }
    }

}
new Vue({
    el: '#app',
    store,
    components: {
        'input-component': inputComponent,
        'note-count-component': noteCountComponent
    },
    computed: {
        notes() {
            return this.$store.getters.getNotes;
        },
        timestamps() {
            return this.$store.getters.getTimestamps;
        },
        placeholder() {
            return this.$store.getters.placeholder;
        }
    }
})