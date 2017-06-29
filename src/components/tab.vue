<template>
    <div class="tab-wrap">
        <div class="tab">
            <span v-for="(item,index) in tabData" v-bind:class="{active:index==current}" @click="getContent(index)" v-bind:key="index">{{item.title}}</span>
        </div>
        <ul class="tab-content">
            <!-- <li v-for="item in listData">
                <img v-bind:src="item.url">
                <div class="introduce">
                    <p>{{item.name}}</P>
                    <span>¥{{item.current_price}}</span>
                </div>
            </li>-->
            <mu-list>
                <template>
                    <li v-for="(item,index) in listData" v-bind:key="index">
                        <img v-bind:src="item.url">
                        <div class="introduce">
                            <p>{{item.name}}</P>
                            <span>¥{{item.current_price}}</span>
                        </div>
                    </li>
                </template>
            </mu-list>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"></mu-infinite-scroll>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0,
            tabData: [
                { title: '果园推荐' },
                { title: '全球鲜果' },
                { title: '生鲜美食' }
            ],
            pageData: '',
            listData: '',
            num: 130,
            category_id: 1538610584,
            page: 0,
            eachNum: 31,
            loading: false,
            scroller: null
        }
    },
    mounted() {
        this.scroller = this.$el;
    },
    computed: {
        url: function () {
            return '/shopui/upc/shopviewcategory?display=json&curr_page=' + this.page + '&num=' + this.num + '&category_id=' + this.category_id + '&shop_id=1459705391&lat=3643845.99&lng=13519551.39&from=pc'
        }
    },
    watch: {
        num: function () {
            this.getPageListData();//放在watch里面，如果放在getContent里执行的话num没变也会请求
        }
    },
    created() {
        this.getPageListData();
    },
    methods: {
        getContent(index) {
            this.current = index;
            if (index == 0) {
                this.num = 130;
                this.category_id = 1538610584;
            } else if (index == 1) {
                this.num = 84;
                this.category_id = 1538612066;
            } else {
                this.num = 59;
                this.category_id = 1538585402;
            }
        },
        getPageListData(arg) {
            var $this = this;
            this.$Axios.get($this.url).then(function (response) {
                $this.pageData = response.data.result.menu_info.menu_list;
                if (arg) {
                    $this.listData.push($this.pageData);
                    $this.loading = false
                } else {
                    $this.listData = $this.pageData;
                }
            })
        },
        loadMore() {
            this.loading = true;
            this.page = 1;
            this.getPageListData(1);
            this.eachNum += 31;
        }
    }
}

</script>
<style scoped>
.tab {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    align-items: stretch;
    background: #FCD159;
    color: #fff;
    font-size: 16px;
}

.tab-wrap span {
    flex-grow: 1;
    text-align: center;
}

.active {
    border-bottom: 4px solid #8cb91e;
}

.tab-content {
    padding: 0 0.1rem;
}

.tab-content li {
    display: flex;
    display: -webkit-flex;
    border-bottom: 1px solid #dcdcdc;
    padding: 0.1rem 0;
    position: relative;
}

.tab-content li img {
    width: 1.5rem;
    height: 1.5rem;
}

.introduce {
    flex-grow: 1;
    padding-left: 0.3rem;
}

.introduce p {
    padding: 0.1rem 0;
}

.introduce span {
    position: absolute;
    right: 0.4rem;
    bottom: 0.2rem;
    font-size: 18px;
    color: #f63;
}
</style>