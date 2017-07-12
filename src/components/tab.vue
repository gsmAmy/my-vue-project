<template>
    <div class="tab-wrap">
        <div class="tab">
            <span v-for="(item,index) in tabData" v-bind:class="{active:index==current}" @click="getContent(index)" v-bind:key="index">{{item.title}}</span>
        </div>
        <ul class="tab-content">
            <router-link tag="li" :to="{ path:'detail',query:{id:item.id} }" v-for="(item,index) in listData" v-bind:key="index" class="ceshi">
                <a>
                    <img v-bind:src="item.url">
                    <div class="introduce">
                        <p>{{item.name}}</P>
                        <span>¥{{item.current_price}}</span>
                    </div>
                    <i v-bind:class="[item.islike?'i_likes':'i_like']" @click="collect(item)"></i>
                </a>
            </router-link>
            
            <li v-for="(item,index) in listData"  v-bind:key="index">
                <router-link :to="{ path:'detail',query:{id:item.id} }"  v-bind:key="index">
                    <img v-bind:src="item.url">
                    <div class="introduce">
                        <p>{{item.name}}</P>
                        <span>¥{{item.current_price}}</span>
                    </div>
                    <i v-bind:class="[item.islike?'i_likes':'i_like']" @click="collect(item)"></i>
                </router-link>
            </li>
            
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
            pageData:[],
            listData: [],
            num: 130,
            category_id: 1538610584,
            page: 0,
            eachNum: 31,
            loading: false,
            scroller: null,
            collectList:[]
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
        /*getContent()根据tab改变URL参数num、category_id的值*/
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
        /*请求数据获取listData*/
        getPageListData() {
            this.$Axios
            .get(this.url)
            .then(res => res.data)
            .then(data => {
                this.listData = data.result.menu_info.menu_list.map(t => (t.islike = !1,t))
            })
        },
        loadMore() {
            this.loading = true;
            this.page = 1;
            this.getPageListData(1);
            this.eachNum += 31;
        },
        /*收藏*/
        collect(item){
            item.islike = !item.islike;
            if(item.islike){
                this.collectList.push(item)
            }else{
                let collectObjNow = this.$ls.get("collectObj");
                // collectObjNow.filter(v => item.id !=  v.id);
                let collectObjNew = [];
                collectObjNow.filter(v => {
                    if(v.id != item.id){
                        collectObjNew.push(v);
                    }
                })
                this.collectList = collectObjNew;
            }
            this.$ls.set("collectObj",this.collectList)
        }
    },
}

</script>
<style lang="less">
@import "../assets/less/commonlist.less";
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
</style>