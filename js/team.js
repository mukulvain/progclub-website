const members = [
  {
    id: 1,
    name: "Anurag Agarwal",
    division: "Competitive Programming",
    img: "img/team/Anurag Agarwal.jpg",
    year: "Third Year",
    linkCf: "https://codeforces.com/profile/Anurag203",
    linkGit: "https://github.com/anurag203",
    linkLin: "https://www.linkedin.com/in/anurag203/",
  },
  {
    id: 2,
    name: "Soham Roy",
    division: "Software Development",
    img: "img/team/Soham Roy.jpg",
    year: "Third Year",
    linkCf: "https://codeforces.com/profile/soham_roy8",
    linkGit: "https://github.com/Soham-Roy",
    linkLin: "https://www.linkedin.com/in/soham-roy8/",
  },
  {
    id: 3,
    name: "Saurabh Singh",
    division: "Competitive Programming",
    img: "img/team/Saurabh Singh.jpg",
    year: "Third Year",
    linkCf: "https://codeforces.com/profile/sksusha8853",
    linkGit: "https://github.com/sksusha8853",
    linkLin: "https://www.linkedin.com/in/saurabh-kumar-singh-b6a832203/",
  },
  {
    id: 4,
    name: "Vihaan Thora",
    division: "Software Development",
    img: "img/team/Vihaan Thora.jpg",
    year: "Third Year",
    linkCf: "https://codeforces.com/profile/vihaanthora",
    linkGit: "http://github.com/vihaanthora",
    linkLin: "https://www.linkedin.com/in/vihaanthora",
  },
  {
    id: 5,
    name: "Mayank Tayal",
    division: "Competitive Programming",
    img: "img/team/Mayank Tayal.jpeg",
    year: "Third Year",
    linkCf: "https://codeforces.com/profile/cse200001043",
    linkGit: "https://github.com/cse200001043",
    linkLin: "https://www.linkedin.com/in/mayank-tayal-136b54211",
  },
  {
    id: 6,
    name: "",
    division: "",
    img: "img/team/",
    year: "",
    linkCf: "",
    linkGit: "",
    linkLin: "",
  },
  {
    id: 7,
    name: "",
    division: "",
    img: "img/team/",
    year: "",
    linkCf: "",
    linkGit: "",
    linkLin: "",
  },
  {
    id: 8,
    name: "",
    division: "",
    img: "img/team/",
    year: "",
    linkCf: "",
    linkGit: "",
    linkLin: "",
  },
  {
    id: 9,
    name: "",
    division: "",
    img: "img/team/",
    year: "",
    linkCf: "",
    linkGit: "",
    linkLin: "",
  },
  {
    id: 10,
    name: "",
    division: "",
    img: "img/team/",
    year: "",
    linkCf: "",
    linkGit: "",
    linkLin: "",
  },
  {
    id: 11,
    name: "",
    division: "",
    img: "img/team/",
    year: "",
    linkCf: "",
    linkGit: "",
    linkLin: "",
  },
  
];

const heads = [
  {
    id: 1,
    name: "Mukul Jain",
    description: "President",
    img: "img/team/Mukul Jain.jpeg",
    division: "Software Development",
    year: "Third Year",
    linkGit: "https://github.com/mukulvain/",
    linkLin: "https://www.linkedin.com/in/mukul--jain",
    linkCf: "https://codeforces.com/profile/mukulj",
  },
  {
    id: 2,
    name: "Jaskaran Singh",
    description: "President",
    img: "",
    division: "Competitive Programming",
    year: "Third Year",
    linkGit: "",
    linkLin: "",
    linkCf: "",
  },
];

Vue.component("member-component", {
  template: `
  <div class="col-lg-4 d-flex align-items-stretch" style="flex: 0 0 100%">
    <div class="card" style="width: 100%">
      <div class="profile-container">
        <img class="card-img-top" :src="member.img" alt="Card image cap" />
      </div>
      <div
        class="card-body h-100 d-flex justify-content-center align-items-stretch align-content-stretch"
        style="width: 100%; flex-direction: column"
      >
        <h5
          class="card-title d-flex align-items-center justify-content-center"
          style="flex: 1 1 auto"
        >
          {{member.name}}
        </h5>
        <p
          class="card-text d-flex justify-content-center align-items-center"
          style="flex: 1 1 auto"
        >
          {{member.division}}
        </p>
        <p
          class="card-text mb-2 d-flex justify-content-center align-items-center"
          style="flex: 1 1 auto"
        >
          {{member.year}}
        </p>
        <div
          class="d-flex align-items-center justify-content-center"
          style="flex: 1 1 auto; flex-direction: row"
        >
          <a :href="member.linkCf"><img src="img/team/cf.png" class="d-flex justify-content-center" height="20" style="flex: 1 1 auto; padding: 0 0.2em;"></img></a>
          <a :href="member.linkGit"><i class="fab fa-github d-flex justify-content-center align-items-center" style="flex: 1 1 auto;  padding: 0 0.2em;"></i> </a>
          <a :href="member.linkLin"><i class="fab fa-linkedin d-flex justify-content-center align-items-center"  style="flex: 1 1 auto; padding: 0 0.2em;"></i> </a>
        </div>
      </div>
    </div>
  </div>

	`,
  props: {
    member: Object,
  },
});

Vue.component("head-component", {
  template: `
	<div class="col-lg-4 d-flex align-items-stretch" style="flex: 0 0 100%">
    <div class="card" style="width: 100%">
      <div class="profile-container">
        <img class="card-img-top" :src="head.img" alt="Card image cap" />
      </div>
      <div
        class="card-body h-100 d-flex justify-content-center align-items-stretch align-content-stretch"
        style="width: 100%; flex-direction: column"
      >
        <h5
          class="card-title d-flex align-items-center justify-content-center"
          style="flex: 1 1 auto"
        >
          {{head.name}}
        </h5>
        <p
          class="card-text d-flex align-items-center justify-content-center"
          style="flex: 1 1 auto"
        >
          {{head.description}}
        </p>
        <p class="card-text d-flex justify-content-center" style="flex: 1 1 auto">
          {{head.division}}
        </p>
        <p
          class="card-text mb-2 d-flex justify-content-center"
          style="flex: 1 1 auto"
        >
          {{head.year}}
        </p>
        <div
          class="d-flex align-items-center justify-content-center"
          style="flex: 1 1 auto; flex-direction: row"
        >
          <a :href="head.linkCf"><img src="img/team/cf.png" class="d-flex justify-content-center" height="20" style="flex: 1 1 auto; padding: 0 0.2em;"></img></a>
          <a :href="head.linkGit"><i class="fab fa-github d-flex justify-content-center"  style="flex: 1 1 auto; padding: 0 0.2em;"></i> </a>
          <a :href="head.linkLin"><i class="fab fa-linkedin d-flex justify-content-center"  style="flex: 1 1 auto; padding: 0 0.2em;"></i> </a>
        </div>
      </div>
    </div>
  </div>
	`,
  props: {
    head: Object,
  },
});

new Vue({
  el: "#app",
  data: {
    members,
    heads,
  },
});
