new Vue({
    el: '#app',
    data: {
        showLiked: false,
        highlighted: null,
        items: [
                          
            {
                title: 'Shoulder Press',
                image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/2016/07/4-1-overhead-press.jpg',
                liked: false
            },
          
            {
                title: 'Farmers Walk',
                image: 'https://gymjunkies.com/wp-content/uploads/2017/08/farmers-walk-exercises-2.jpg',
                liked: false
            },
          
            {
                title: 'Clean and Press',
                image: 'http://deadliftworkouts.com/wp-content/uploads/2013/10/cleanandpress1.jpg',
                liked: false
            },
          
            {
                title: 'Press-Up',
                image: 'https://vignette.wikia.nocookie.net/parkour/images/e/e0/Push_Up.jpg/revision/latest?cb=20141122161108',
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
                title: 'Upright Row',
                image: 'http://upl.stack.com/wp-content/uploads/2017/05/18111315/Upright-Row-STACK-654x428.jpg',
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