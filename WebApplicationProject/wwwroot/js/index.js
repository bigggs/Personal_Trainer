new Vue({
  el: '#app',
  data: {
    showLiked: false,
    highlighted: null,
    items: [
      {
        title: 'Deadlift',
            image: 'https://www.mensjournal.com/wp-content/uploads/mf/rookie-mistake-deadlift_0.jpg?w=1200&h=1200&crop=1',
        liked: false
      },
      {
        title: 'Bench Press',
          image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/07/1-1-bench-press.jpg?itok=bJYGPFGO',
        liked: false
      },
      {
        title: 'Shoulder Press',
          image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/2016/07/4-1-overhead-press.jpg',
        liked: false
      },
      {
        title: 'Bent over Row',
          image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/2016/07/3-2a-barbell-bent-over-row.jpg',
        liked: false
      },
      {
        title: 'Back Squat',
          image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2017/06/back-squat.jpg?itok=WbIWcsNG&timestamp=1498572015',
        liked: false
      },
      {
        title: 'Front Squat',
          image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2016/09/front-squat.jpg?itok=C_p0Nht6&timestamp=1474273851',
        liked: false
      },
      {
        title: 'Farmers Walk',
          image: 'https://gymjunkies.com/wp-content/uploads/2017/08/farmers-walk-exercises-2.jpg',
        liked: false
      },
      {
        title: 'Lat Pull-Down',
          image: 'https://cdn.shopify.com/s/files/1/0922/5592/products/body-soild-lat-pulldown-low-row-glm83.jpeg?v=1440606565',
        liked: false
      },
      {
        title: 'Barbell Bicep Curl',
          image: 'https://scarysymptoms.com/wp-content/uploads/2014/09/curl-1.jpg',
        liked: false
      },
      {
        title: 'Dumbell Bicep Curl',
          image: 'https://www.mensjournal.com/wp-content/uploads/mf/hammer_cheat_curl_main.jpg',
        liked: false
      },
      {
        title: 'Skull Crusher',
          image: 'http://assets.menshealth.co.uk/main/thumbs/33058/widegripskullcrusher12x8.jpg',
        liked: false
      },
      {
        title: 'Tricep Pushdown',
          image: 'https://workouttrends.com/wp-content/uploads/2013/10/How-To-Do-Triceps-Pushdown.jpg',
        liked: false
      },
      {
        title: 'Crunch',
          image: 'https://www.worldwidelifestyles.com/wp-content/uploads/2017/11/Basic-Crunch.jpg',
        liked: false
      },
      {
        title: 'Incline Dumbell Press',
          image: 'https://www.muscleandperformance.com/.image/t_share/MTQ1MzY2OTYwNTk0NTYwNTY3/image-placeholder-title.jpg',
        liked: false
      },
      {
        title: 'Dumbell Bench Press',
          image: 'https://www.womenly.net/wp-content/uploads/2018/06/Dumbbell-Bench-Press-1.jpg',
        liked: false
      },
      {
        title: 'Low Row',
          image: 'http://s3.amazonaws.com/prod.skimble/assets/1086046/image_iphone.jpg',
        liked: false
      },
      {
        title: 'Clean and Press',
          image: 'http://deadliftworkouts.com/wp-content/uploads/2013/10/cleanandpress1.jpg',
        liked: false
      }
    ]
  },
  computed: {
    featuredItems () {
      let i = _.clone(this.items);
      return i.splice(0, 4);
    },
    feedItems () {
      let i = _.clone(this.items);
      let a = null;
      
      if(this.showLiked) {
        a = this.likedItems;
      } else {
        a = i.splice(4, i.length-4);
      }
      
      return a;
    },
    totalLikes () {
      return _.filter(this.items, {'liked': true}).length;
    },
    likedItems () {
      return _.filter(this.items, {'liked': true});
    }
  },
  methods: {
    highlightItem(item) {
      this.highlighted = item;
    },
    likeItem (item) {
      if(item.liked) {
        item.liked = false;
      } else {
        item.liked = true;
      }
    }
  }
})