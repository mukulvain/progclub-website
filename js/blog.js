Vue.component("blog-component", {
    props: ['post'],
    template: `
    <div class="col-lg-4 d-flex align-items-stretch">
        <div class="card">
            <div class="mybeautifulclass">
            <img :src="post.imageLink" alt="" class="card-img-top" />
            </div>
            <div class="card-body" style="cursor:pointer" data-toggle="modal" :data-target="'#'+post.guid">
            <div class="card-title">
                {{post.title}}
            </div>
            <div class="blog-content" v-html="post.description"></div>
            </div>
            <div class="card-footer text-center">
            <a :href="post.link" target="_blank">
                <i class="align-text-middle fas fa-external-link-alt pr-2"></i>
                Medium
            </a>
            </div>
        </div>
    </div>
    `
});

Vue.component("blog-component-modal", {
    props: ['post'],
    template: `
    <div
    class="modal fade"
    :id="post.guid"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    >
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title font-weight-bold">{{post.title}}</h4>
                <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                >
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" v-html="post.description"></div>
            </div>
        </div>
    </div>

    `
});

