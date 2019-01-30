new Vue({
  el: '#app',
  data: {
    showLiked: false,
      highlighted: null,
      items: [
      {
            title: 'Deadlift',

            image: 'https://www.mensjournal.com/wp-content/uploads/mf/rookie-mistake-deadlift_0.jpg?w=1200&h=1200&crop=1',
              liked: false,
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
      },
            {
              title: 'Dumbell Squat',
                image: 'http://upl.stack.com/wp-content/uploads/Screen-Shot-2012-01-25-at-11.06.37-AM.png',
              liked: false
          },
          {
              title: 'Lunge',
              image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bootcamp-alternating-lunge-1441032989.jpg',
              liked: false
          },
          {
              title: 'Press-Up',
              image: 'https://vignette.wikia.nocookie.net/parkour/images/e/e0/Push_Up.jpg/revision/latest?cb=20141122161108',
              liked: false
          },
          {
              title: 'Plank',
              image: 'https://cdn.lifehack.org/wp-content/uploads/2017/08/11072609/plank.jpg',
              liked: false
          },
          {
              title: 'Treadmill',
              image: 'https://i5.walmartimages.com/asr/b09d6063-efe2-44e5-bff0-97d653aa95a9_1.4829b3fc50237806199628c721639ef8.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
              liked: false
          },
          {
              title: 'Bicycle Machine',
              image: 'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/191/23/rbrb_2291.jpg',
              liked: false
          },
          {
              title: 'Rowing Machine',
              image: 'https://www.allrowers.com/images/schwinn-crewmaster-rowing-machine.jpg',
              liked: false
          },
          {
              title: 'Pull-up',
              image: 'https://static1.squarespace.com/static/56990f570ab377ee41d29305/t/582ae460725e25f5d009d610/1479205989913/',
              liked: false
          },
          {
              title: 'Sit up',
              image: 'http://befitnesstraining.co.za/wp-content/uploads/2017/07/crunch-.jpg',
              liked: false
          },
          {
              title: 'Dumbell Hammer Head',
              image: 'http://gymgeek.com/wp-content/uploads/2014/09/dumbbell-hammer-curls.jpg',
              liked: false
          },
          {
              title: 'Cross Trainer',
              image: 'https://www.costco.co.uk/medias/sys_master/products/h73/hf1/10122962632734.jpg',
              liked: false
          },
          {
              title: 'Dumbell Shoulder press',
              image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/07/4-2b-seated-dumbbell-shoulder-press.jpg?itok=Vr3aGAgT',
              liked: false
          },
          {
              title: 'Arnold Press',
              image: 'https://static1.squarespace.com/static/5750d5129f72662d66448028/t/59db129be5dd5b95994357e8/1507529374792/arnoldpress-2.jpg',
              liked: false
          },
          {
              title: 'Leg Press',
              image: 'https://d318e6q4e3so0o.cloudfront.net/wp-content/uploads/2018/04/17082245/Starting_Leg_Press_300.jpg',
              liked: false
          },
          {
              title: 'Leg Curl',
              image: 'https://4.imimg.com/data4/FJ/LN/MY-3142623/leg-curl-machine-500x500.jpg',
              liked: false
          },
          {
              title: 'Lunge',
              image: 'https://3i133rqau023qjc1k3txdvr1-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/Stationary-Lunge_Exercise.jpg',
              liked: false
          },
          {
              title: 'Upright Row',
              image: 'http://upl.stack.com/wp-content/uploads/2017/05/18111315/Upright-Row-STACK-654x428.jpg',
              liked: false
          },
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