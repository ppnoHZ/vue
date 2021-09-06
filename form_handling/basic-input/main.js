const ButtonRow = {
    data() {
        return {
            items: [],
            fields: {
                email: '',
                name: 'zhoudd',
                urgency: '',
                termsAndConditions: false
            },
            fieldErrors: {
                name: undefined,
                email: undefined,
                urgency: undefined,
                termsAndConditions: undefined
            }
        }
    },
    template: `
        <div class="input-form">
            <form  @submit="submitForm" class="ui form">
                <div class="field">
                    <label>
                        Name
                    </label>
                    <input v-model="fields.name" type="text" placeholder="Add an item!">
                </div>
                <div class="field">
                    <label>
                        Email
                    </label>
                    <input v-model="fields.email" type="text" placeholder="Add an item!">
                </div>
                <div class="field">
                    <label>Urgency</label>
                    <select v-model="fields.urgency" class="ui fluid search dropdown">
                        <option disabled value="">Please select one</option>
                        <option>Nonessential</option> 
                        <option>Moderate</option>
                        <option>Urgent</option>
                    </select>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                    <input v-model="fields.termsAndConditions" type="checkbox" />
                    <label>I accept the terms and conditions</label> </div>
                </div>
                <button class="ui button">Submit</button>
            </form>
            <div class="ui segment">
                <h4>Items</h4>
                <ul>
                    <li v-for="item in items" class="item">
                    {{item}}
                    </li>
                </ul>
            </div>
        </div>
    `,

    methods: {
        submitForm(event) {
            event.preventDefault(); // 阻止提交
            console.log(event.target.value)
            this.items.push(this.fields.name);
            this.fields.name = ''
        }
    }
}


new Vue({
    el: '#app',
    components: {
        'input-form': ButtonRow
    }
})