new Vue({
    el: '#app',
    data: {
        showLiked: false,
        highlighted: null,
        items: [
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
                title: 'Clean and Press',
                image: 'http://deadliftworkouts.com/wp-content/uploads/2013/10/cleanandpress1.jpg',
                liked: false
            },
        
            {
                title: 'Dumbell Hammer Head',
                image: 'http://gymgeek.com/wp-content/uploads/2014/09/dumbbell-hammer-curls.jpg',
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