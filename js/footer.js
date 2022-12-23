Vue.component("footer-component", {
  template: `
  <div class="container-fluid bg-dark text-white pt-4 pb-2" id="footer">
    <div class="container">
      <h3 class="py-2"><strong>Connect with us</strong></h3>
      <ul class="list-inline">
        <li class="list-inline-item pb-3">
          <a target="_blank" href="https://www.youtube.com/@pclub_iiti" class="pt-2">
            <i class="fab fa-youtube"></i>
            <p class="pl-2">Our workshops</p>
          </a>
        </li>
        <li class="list-inline-item pb-3">
          <a
            target="_blank"
            href="https://www.instagram.com/pclub_iiti/"
            class="pt-2"
          >
            <i class="fab fa-instagram"></i>
            <p class="pl-2">Follow us on Instagram</p>
          </a>
        </li>
        <li class="list-inline-item pb-3">
          <a target="_blank" href="mailto:progclubiiti@iiti.ac.in" class="pt-2">
            <i class="far fa-envelope"></i>
            <p class="pl-2">Mail us</p>
          </a>
        </li>
        <li class="list-inline-item pb-3" style="float: right">
          Maintained by &nbsp
          <a href="https://github.com/DaemonLab/" target="_blank" class="pt-1">
            Daemon Labs
          </a>
        </li>
      </ul>
    </div>
  </div>

  `,
});

new Vue({
  el: "#foot",
});
