new Vue({
    el: '#app',
    data: {
        showLiked: false,
        highlighted: null,
        items: [
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
                title: 'Cross Trainer',
                image: 'https://www.costco.co.uk/medias/sys_master/products/h73/hf1/10122962632734.jpg',
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