new Vue({
    el: '#app',
    data: {
        showLiked: false,
        highlighted: null,
        items: [
            
                                     {
                title: 'Crunch',
                image: 'https://www.worldwidelifestyles.com/wp-content/uploads/2017/11/Basic-Crunch.jpg',
                liked: false
            },
           
            {
                title: 'Plank',
                image: 'https://cdn.lifehack.org/wp-content/uploads/2017/08/11072609/plank.jpg',
                liked: false
            },
           
            {
                title: 'Sit up',
                image: 'http://befitnesstraining.co.za/wp-content/uploads/2017/07/crunch-.jpg',
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