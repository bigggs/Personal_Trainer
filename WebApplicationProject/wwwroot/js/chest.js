new Vue({
    el: '#app',
    data: {
        showLiked: false,
        highlighted: null,
        items: [
         
            {
                title: 'Bench Press',
                image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/07/1-1-bench-press.jpg?itok=bJYGPFGO',
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
                title: 'Press-Up',
                image: 'https://vignette.wikia.nocookie.net/parkour/images/e/e0/Push_Up.jpg/revision/latest?cb=20141122161108',
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