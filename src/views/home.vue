<!--
 * @Date: 2020-07-01 14:45:59
 * @LastEditors: Lee
 * @LastEditTime: 2020-07-03 15:46:41
--> 
<template>
    <div class="container">
        <div class="cards-wrap" >
            <div class="flip-container" :class="{ 'flipped': item.isFilt}" v-for="(item,index) in memorycards" :key='index'>
                <div class="card" :class="{'matched': item.isMatched}" @click="flit(item)">
                    <div class="front"><img src="../../static/imgs/bg.jpg" alt=""></div>
                    <div class="back"><img :src="'../../static/imgs/'+item.name+'.jpg'" alt=""></div>
                </div>
            </div>
        </div>
        <div class="title">
            <span>score:{{score}}</span>
            <span>time:{{time}}</span>
            <button @click="reset">重置</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mytime:null,
                flage:false,
                start:false,
                finish:false,
                cards:[
                    {
                       id:Math.random()*9999,
                       name:'watermelon' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'strawberry' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'banana' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'orange' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'pomegranate' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'apple' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'coconut' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'pineapple' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'cherry' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'grap' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'olive' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'eggplant' ,
                       isFilt:false,
                       isMatched:false
                    }
                ],
                cards2:[
                    {
                       id:Math.random()*9999,
                       name:'watermelon' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'strawberry' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'banana' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'orange' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'pomegranate' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'apple' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'coconut' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'pineapple' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'cherry' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'grap' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'olive' ,
                       isFilt:false,
                       isMatched:false
                    },
                    {
                       id:Math.random()*9999,
                       name:'eggplant' ,
                       isFilt:false,
                       isMatched:false
                    }
                ],
                memorycards:[],
                filtercards:[],
                score:0,
                time:0               
            }
        },
        created () {
            //点击同一张卡会出现bug
            // var card1 = JSON.parse(JSON.stringify(this.cards))
            // var card2  = JSON.parse(JSON.stringify(this.cards))
            var cardsx = this.memorycards.concat(this.cards,this.cards2)
            for (let i = 0; i < cardsx.length; i++) {
                let j = Math.floor(Math.random() *(cardsx.length-1))
                let temp = cardsx[i]
                cardsx[i] = cardsx[j]            
                cardsx[j] = temp
            }
            this.memorycards = cardsx
            setTimeout(() => {
                this.memorycards.map(res=>{
                    res.isFilt = false
                })
            }, 2000);
            // this.reset()
        },
        mounted () {
            ;
        },
        methods: {
            //卡片点击事件
            flit(item) {
                item.isFilt = true
                this.startGame()
                if(this.filtercards.length<2){
                    this.filtercards.push(item)
                }
                if(this.filtercards.length=== 2){
                   this.match(item)
                }
            },
            startGame(){
                if(!this.start){
                    this.mytime = setInterval(() => {
                        this.time+=1
                        this.start = true
                        if(this.memorycards.every(card => card.isMatched === true)){
                            clearInterval(this.mytime);
                        }
                    }, 1000);
                }
            },
            //匹配上去
            match(item){
                if(this.filtercards[0].id == this.filtercards[1].id){
                        this.filtercards.map(item=>item.isFilt = false)
                        this.filtercards = [];  
                        
                }else{
                    if(this.filtercards[0].name == this.filtercards[1].name){
                        setTimeout(() => {
                                this.filtercards.map(res=>res.isMatched = true)
                                this.filtercards = [];
                                this.score+=10
                        }, 500);
                    }else{
                        setTimeout(() => {
                                this.filtercards.map(res=>res.isFilt = false)
                                this.filtercards = [];
                                // console.log('fcard',this.filtercards)
                                if(this.score>0){
                                    this.score-=1
                                }
                        }, 500);
                    }
                }   
            },
            //重置
            reset(){
                // if(this.mytime)
                clearInterval(this.mytime);
                this.memorycards =[]
                this.cards.forEach((card) => {
                    card.isFilt = false,
                    card.isMatched = false
                });
                this.cards2.forEach((card) => {
                    card.isFilt = false,
                    card.isMatched = false
                });
                setTimeout(() => {
                    var cardsx = this.memorycards.concat(this.cards,this.cards2)
                    for (let i = 0; i < cardsx.length; i++) {
                        let j = Math.floor(Math.random() *(cardsx.length-1))
                        let temp = cardsx[i]
                        cardsx[i] = cardsx[j]            
                        cardsx[j] = temp
                    }
                    this.memorycards = cardsx
                    this.filtercards = [];  
                    this.time = 0
                    this.score = 0
                    this.start = false
                }, 600);
            }
        },
        beforeDestroy () {
            if(this.mytime)
                clearInterval(this.mytime);
        },
    }
</script>
<style scoped>
    .container{
        display: flex;
        padding:60px;
    }
    .cards-wrap{
        width:100vw;
        /* height: 100vh; */
        /* padding:20px; */
        display: grid;
        grid-template-columns: repeat(8, 12.5%);
        /* grid-template-rows: repeat(2, 150px); */
        /* grid-gap: 20px; */
        /* grid-gap: 20px 20px; */
        -webkit-perspective: 1000;
        -moz-perspective: 1000;
        -o-perspective: 1000;
        perspective: 1000;
        box-sizing: border-box;  
    }
    .flip-container {
        -webkit-perspective: 1000;
        -moz-perspective: 1000;
        -o-perspective: 1000;
        perspective: 1000;
        cursor: pointer;
    }
    .front,
    .back {
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -o-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: 1s;
        -webkit-transform-style: preserve-3d;
        -moz-transition: 1s;
        -moz-transform-style: preserve-3d;
        -o-transition: 1s;
        -o-transform-style: preserve-3d;
        -ms-transition: 1s;
        -ms-transform-style: preserve-3d;
        transition: 1s;
        transform-style: preserve-3d;
        top: 0;
        left: 0;
        width: 100%;
    }
    .back {
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
        -o-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        position: absolute;
        z-index: 1;
    }
    .card{
        /* width: 150px;
        height: 150px; */
        border:1px dotted seagreen;
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d; /* Safari and Chrome */
        /* -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -o-backface-visibility: hidden;
        backface-visibility: hidden; */ 
    }
    .card img{
        /* width: 150px;
        height: 150px; */
        width: 100%;
        height: 100%;
    }
     .flip-container.flipped .back {
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
    .flip-container.flipped .front {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }
    .matched{
        opacity: 0.3;
    }
    .title{
        position: absolute;
        top:0;
        font-size: 24px;
        width:100%;
    }
</style>