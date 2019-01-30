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
                title: 'Bent over Row',
                image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/2016/07/3-2a-barbell-bent-over-row.jpg',
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
                title: 'Pull-up',
                image: 'https://static1.squarespace.com/static/56990f570ab377ee41d29305/t/582ae460725e25f5d009d610/1479205989913/',
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