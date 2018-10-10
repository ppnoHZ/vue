const submissionComponent = {
    template: `
    <div  style="display: flex; width: 100%">
        <figure class="media-left">
        <img class="image is-64x64" v-bind:src="submission.submissionImage">
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>
                        <a v-bind:href="submission.url" class="has-text-info">{{submission.title}}</a>
                        <span class="tag is-small">#{{submission.id}}</span>
                    </strong>
                    <br>
                    {{submission.description}}
                    <br>
                    <small class="is-size-7">
                        Submitted by:
                        <img class="image is-24x24" :src="submission.avatar">
                    </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <span class="icon is-small" @click="upvote(submission.id)">
                <i class="fa fa-chevron-up"></i>
                <strong class="has-text-info">{{submission.votes}}</strong>
            </span>
        </div>
    </div>`,
    props:[
        'submission','submissions'
    ],
    methods:{
        upvote(submissionId) {
            // const submission = this.submissions.find(
            //     submission => submission.id === submissionId
            // );
            this.submission.votes++;
        }
    }
}



// Vue.component('submission-component', {

// })
new Vue({
    el: "#app",
    data: {
        submissions: Seed.submissions
    },
    components: {
        'submission-component':submissionComponent
    },
    computed: {
        sortedSubmissions() {
            console.log("computed:sortedSubmissions");
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            });
        }
    },
    methods: {
       
    }
})