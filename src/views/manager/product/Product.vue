<template>
    <div class="product">
        <!-- 调用自定义组件briup-fulllayout，全屏显示 -->
        <briup-fulllayout title='产品页面'>
            <van-row>
                <van-col span="6">
                    <!-- 左侧栏目 -->
                    <van-sidebar v-model="activeKey">
                        <van-sidebar-item @click="findProductHandler(item.id)" v-for='item in allCategory' :key='item.id' :title="item.name" />
                    </van-sidebar>
                </van-col>
                <van-col span="18">
                    <!-- 右侧产品列表 -->
                    <briup-product-item v-for='item in product' :key='item.id' :data='item'></briup-product-item>
                </van-col>
            </van-row>
            <!-- 底部总额、立即购买按钮 -->
            <div class='saveDiv'></div>
        </briup-fulllayout>
    </div>
</template>
<script>
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
    data(){
        return {
            activeKey:0
        }
    },
    computed:{
        ...mapState('home',['allCategory','product']),
    },
    created(){
        this.findAllCategory().then(()=>{
            // 根据栏目id查询产品
            if(this.$route.query.id){
                this.findProductById(this.$route.query.id)
            } else {
                this.findProductById(this.allCategory[0].id)
            }
        })
        // 页面加载的时候，获取浏览器地址栏上的索引，将左侧的选项切换至相应的位置
        this.activeKey = this.$route.query.index
    },
    // mounted(){
    //     setTimeout(()=>{
    //         if(this.$route.query.id){
    //             this.findProductById(this.$route.query.id)
    //         } else {
    //             this.findProductById(this.allCategory[0].id)
    //         }
    //     })
    // },
    methods:{
        ...mapActions('home',['findAllCategory','findProductById']),
        // 点击左侧栏目时，根据id查询产品
        findProductHandler(id){
            this.findProductById(id)
        }
    }
}
</script>

<style scoped>
    .saveDiv {
        height: 80px;
        background-color: rgb(209, 91, 91);
        position:fixed;
        bottom:0;
        width:100%;
    }
</style>