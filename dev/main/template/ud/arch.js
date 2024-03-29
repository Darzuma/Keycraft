const storage = require('main/const/storage')
let keys = require(storage + '/keys')

let { 集结点,互动 } = require("../general_arch")

let arch = {
    浮空城:{
        ico:[1,5],
        btn:[
            {
                tag:'寺僧',
                tip:'',
                ico:[1,2],
                pos:[1,1],
                key:['uaco'],
                val:keys['uaco'],
            },
            {
                tag:'背包升级',
                tip:'',
                ico:[6,1],
                pos:[4,1],
                key:['Rupm'],
                val:keys['Rupm'],
            },
            {
                tag:'升级',
                tip:'大墓地升级为亡者大厅，亡者大厅升级为黑暗城堡',
                ico:[12,5],
                pos:[1,3],
                key:['unp1','unp2'],
                val:keys['unp1'],
            },
            集结点
        ]
    },
    地穴:{
        ico:[2,5],
        btn:[
            {
                tag:'食尸鬼',
                tip:'',
                ico:[2,2],
                pos:[1,1],
                key:['ugho'],
                val:keys['ugho'],
            },
            {
                tag:'穴居恶魔',
                tip:'',
                ico:[3,2],
                pos:[2,1],
                key:['ucry'],
                val:keys['ucry'],
            },
            {
                tag:'石像鬼',
                tip:'',
                ico:[4,2],
                pos:[3,1],
                key:['ugar'],
                val:keys['ugar'],
            },
            {
                tag:'食尸鬼狂暴',
                tip:'',
                ico:[5,4],
                pos:[1,2],
                key:['Rugf'],
                val:keys['Rugf'],
            },
            {
                tag:'穴居恶魔潜地升级',
                tip:'',
                ico:[6,4],
                pos:[2,2],
                key:['Rubu'],
                val:keys['Rubu'],
            },
            {
                tag:'石像形态升级',
                tip:'',
                ico:[7,4],
                pos:[3,2],
                key:['Rusf'],
                val:keys['Rusf'],
            },
            {
                tag:'食尸升级',
                tip:'',
                ico:[5,5],
                pos:[1,3],
                key:['Ruac'],
                val:keys['Ruac'],
            },
            {
                tag:'蛛网升级',
                tip:'',
                ico:[6,5],
                pos:[2,3],
                key:['Ruwb'],
                val:keys['Ruwb'],
            },
            集结点
        ]
    },
    闹鬼金矿:{
        ico:[3,5]
    },
    坟场:{
        ico:[4,5],
        btn:[
            {
                tag:'邪恶力量升级',
                tip:'',
                ico:[5,2],
                pos:[1,1],
                key:['Rume'],
                val:keys['Rume'],
            },
            {
                tag:'生物攻击升级',
                tip:'',
                ico:[6,2],
                pos:[2,1],
                key:['Rura'],
                val:keys['Rura'],
            },
            {
                tag:'邪恶护甲升级',
                tip:'',
                ico:[5,3],
                pos:[1,2],
                key:['Ruar'],
                val:keys['Ruar'],
            },
            {
                tag:'生物护甲升级',
                tip:'',
                ico:[6,3],
                pos:[2,2],
                key:['Rucr'],
                val:keys['Rucr'],
            },
        ]
    },
    通灵塔:{
        ico:[1,6],
        btn:[
            {
                tag:'幽灵塔',
                tip:'',
                ico:[7,2],
                pos:[1,3],
                key:['uzg1'],
                val:keys['uzg1'],
            },
            {
                tag:'蛛网怪塔',
                tip:'',
                ico:[8,2],
                pos:[2,3],
                key:['uzg2'],
                val:keys['uzg2'],
            },
        ]
    },
    黑暗祭坛:{
        ico:[2,6],
        btn:[
            {
                tag:'死亡骑士',
                tip:'',
                ico:[1,1],
                pos:[1,3],
                key:['Udea'],
                val:keys['Udea'],
            },
            {
                tag:'恐惧魔王',
                tip:'',
                ico:[2,1],
                pos:[2,3],
                key:['Udre'],
                val:keys['Udre'],
            },
            {
                tag:'巫妖',
                tip:'',
                ico:[3,1],
                pos:[3,3],
                key:['Ulic'],
                val:keys['Ulic'],
            },
            {
                tag:'地穴领主',
                tip:'',
                ico:[4,1],
                pos:[1,2],
                key:['Ucrl'],
                val:keys['Ucrl'],
            },
            集结点
        ]
    },
    诅咒神庙:{
        ico:[3,6],
        btn:[
            {
                tag:'诅咒法师',
                tip:'',
                ico:[1,4],
                pos:[1,1],
                key:['unec'],
                val:keys['unec'],
            },
            {
                tag:'女妖',
                tip:'',
                ico:[2,4],
                pos:[2,1],
                key:['uban'],
                val:keys['uban'],
            },
            {
                tag:'骷髅强化',
                tip:'骷髅兵的持续时间+20秒，并使其中一个骷髅兵变为骷髅法师',
                ico:[8,4],
                pos:[1,2],
                key:['Rusl','Rusm'],
                val:keys['Rusl'],
            },
            {
                tag:'巫师升级',
                tip:'',
                ico:[7,3],
                pos:[1,3],
                key:['Rune'],
                val:keys['Rune'],
            },
            {
                tag:'女妖升级',
                tip:'',
                ico:[8,3],
                pos:[2,3],
                key:['Ruba'],
                val:keys['Ruba'],
            },
            集结点
        ]
    },
    屠宰场:{
        ico:[4,6],
        btn:[
            {
                tag:'绞肉车',
                tip:'',
                ico:[1,3],
                pos:[1,1],
                key:['umtw'],
                val:keys['umtw'],
            },
            {
                tag:'憎恶',
                tip:'',
                ico:[2,3],
                pos:[2,1],
                key:['uabo'],
                val:keys['uabo'],
            },
            {
                tag:'十胜石雕像',
                tip:'',
                ico:[3,3],
                pos:[3,1],
                key:['uobs'],
                val:keys['uobs'],
            },
            {
                tag:'挖掘尸体',
                tip:'',
                ico:[7,5],
                pos:[1,3],
                key:['Ruex'],
                val:keys['Ruex'],
            },
            {
                tag:'瘟疫毒云',
                tip:'',
                ico:[8,5],
                pos:[2,3],
                key:['Rupc'],
                val:keys['Rupc'],
            },
            {
                tag:'毁灭者升级',
                tip:'',
                ico:[4,3],
                pos:[3,3],
                key:['Rusp'],
                val:keys['Rusp'],
            },
            集结点
        ]
    },
    深渊:{
        ico:[1,7],
        btn:[
            {
                tag:'献祭',
                tip:'',
                ico:[7,1],
                pos:[1,1],
                key:['Alam'],
                val:keys['Alam'],
            },
        ]
    },
    埋骨地:{
        ico:[2,7],
        btn:[
            {
                tag:'冰霜巨龙',
                tip:'很肥',
                ico:[4,4],
                pos:[1,1],
                key:['ufro'],
                val:keys['ufro'],
            },
            {
                tag:'冰霜吐息',
                tip:'',
                ico:[5,6],
                pos:[1,3],
                key:['Rufb'],
                val:keys['Rufb'],
            },
            集结点
        ]
    },
    遗物陵墓:{
        ico:[3,7],
        btn:[
            互动
        ]
    },
    亡灵建造:{
        ico:[4,7],
        btn:[
            {
                tag:'大墓地',
                tip:'',
                ico:[1,5],
                pos:[1,1],
                key:['unpl'],
                val:keys['unpl'],
            },
            {
                tag:'地穴',
                tip:'',
                ico:[2,5],
                pos:[2,1],
                key:['usep'],
                val:keys['usep'],
            },
            {
                tag:'闹鬼金矿',
                tip:'',
                ico:[3,5],
                pos:[3,1],
                key:['ugol'],
                val:keys['ugol'],
            },
            {
                tag:'坟场',
                tip:'',
                ico:[4,5],
                pos:[4,1],
                key:['ugrv'],
                val:keys['ugrv'],
            },
            {
                tag:'通灵塔',
                tip:'',
                ico:[1,6],
                pos:[1,2],
                key:['uzig'],
                val:keys['uzig'],
            },
            {
                tag:'黑暗祭坛',
                tip:'',
                ico:[2,6],
                pos:[2,2],
                key:['uaod'],
                val:keys['uaod'],
            },
            {
                tag:'诅咒神庙',
                tip:'',
                ico:[3,6],
                pos:[3,2],
                key:['utod'],
                val:keys['utod'],
            },
            {
                tag:'屠宰场',
                tip:'',
                ico:[4,6],
                pos:[4,2],
                key:['uslh'],
                val:keys['uslh'],
            },
            {
                tag:'献祭深渊',
                tip:'',
                ico:[1,7],
                pos:[1,3],
                key:['usap'],
                val:keys['usap'],
            },
            {
                tag:'埋骨地',
                tip:'',
                ico:[2,7],
                pos:[2,3],
                key:['ubon'],
                val:keys['ubon'],
            },
            {
                tag:'古墓废墟',
                tip:'',
                ico:[3,7],
                pos:[3,3],
                key:['utom'],
                val:keys['utom'],
            },
        ]
    }

}

module.exports = arch