new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "schol.jpg",
          img2: "school.jpg",
          img3: "schoool.jpg",
          title: "SCHOOL",
          isOpen: false,
        },
        {
          img1: "study.jpg",
          img2: "studyy.jpg",
          img3: "studyyy.jpg",
          title: "STUDYTOUR",
          isOpen: false,
        },
        {
          img1: "kafee.jpg",
          img2: "kafeee.jpg",
          img3: "kafe.jpg",
          title: "CAFE",
          isOpen: false,
        },
        {
          img1: "cugo.jpg",
          img2: "cugo1.jpg",
          img3: "cugoo.jpg",
          title: "KELELET CUGO",
          isOpen: false,
        },
        {
          img1: "homee.jpg",
          img2: "home.jpg",
          img3: "homeee.jpg",
          title: "HOME",
          isOpen: false,
        },
        {
          img1: "seblak.jpg",
          img2: "seblakk.jpg",
          img3: "seblakkk.jpg",
          title: "NYEBLAK KUY",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
