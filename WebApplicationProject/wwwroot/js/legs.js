new Vue({
    el: '#app',
    data: {
        showLiked: false,
        highlighted: null,
        items: [
            
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
                title: 'Lunge',
                image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bootcamp-alternating-lunge-1441032989.jpg',
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
   
        ]
    },
    computed: {
        featuredItems() {
            let i = _.clone(this.items);
            return i.splice(0, 4);

        },
        feedItems() {
            let i = _.clone(this.items);
            let a = null;

            if (this.showLiked) {
                a = this.likedItems;
            } else {
                a = i.splice(4, i.length - 4);
            }

            return a;
        },
        totalLikes() {
            return _.filter(this.items, { 'liked': true }).length;
        },
        likedItems() {
            return _.filter(this.items, { 'liked': true });
        }
    },
    methods: {
        highlightItem(item) {
            this.highlighted = item;
        },
        likeItem(item) {
            if (item.liked) {
                item.liked = false;
            } else {
                item.liked = true;
            }
        }
    }
})