
let { 集结点,互动 } = require("../general_arch")
let keys = require('../keys')

let arch = {
    大厅:{
        ico:[1,5],
        btn:[
            {
                tag:'苦工',
                tip:'喜欢偷懒和睡觉，经常被一些莫名其妙的人用木棒打醒',
                ico:[1,2],
                pos:[1,1],
                key:['opeo'],
                val:keys['opeo'],
                map:['Hotkey']
            },
            {
                tag:'掠夺',
                tip:'',
                ico:[3,7],
                pos:[3,1],
                key:['Ropg'],
                val:keys['Ropg'],
                map:['Hotkey']
            },
            {
                tag:'兽人背包',
                tip:'',
                ico:[6,1],
                pos:[4,1],
                key:['Ropm'],
                val:keys['Ropm'],
                map:['Hotkey']
            },
            {
                tag:'升级',
                tip:'大厅升级为要塞，要塞升级为堡垒',
                ico:[7,1],
                pos:[1,3],
                key:['ofrt','ostr'],
                val:keys['ofrt'],
                map:['Hotkey']
            },
            集结点
        ]
    },
    兵营:{
        ico:[2,5],
        btn:[
            {
                tag:'兽人步兵',
                tip:'',
                ico:[2,2],
                pos:[1,1],
                key:['ogru'],
                val:keys['ogru'],
                map:['Hotkey']
            },
            {
                tag:'猎头者',
                tip:'',
                ico:[3,2],
                pos:[2,1],
                key:['ohun'],
                val:keys['ohun'],
                map:['Hotkey']
            },
            {
                tag:'投石车',
                tip:'粉碎者',
                ico:[4,2],
                pos:[3,1],
                key:['ocat'],
                val:keys['ocat'],
                map:['Hotkey']
            },
            {
                tag:'狂暴力量',
                tip:'提高兽人步兵的生命值',
                ico:[5,2],
                pos:[1,3],
                key:['Robs'],
                val:keys['Robs'],
                map:['Hotkey']
            },
            {
                tag:'狂暴猎头者升级',
                tip:'',
                ico:[7,2],
                pos:[2,2],
                key:['Robk'],
                val:keys['Robk'],
                map:['Hotkey']
            },
            {
                tag:'巨魔再生',
                tip:'',
                ico:[6,2],
                pos:[2,3],
                key:['Rotr'],
                val:keys['Rotr'],
                map:['Hotkey']
            },
            {
                tag:'燃烧之油',
                tip:'',
                ico:[8,2],
                pos:[3,2],
                key:['Robf'],
                val:keys['Robf'],
                map:['Hotkey']
            },
            集结点
        ]
    },
    战争磨坊:{
        ico:[3,5],
        btn:[
            {
                tag:'近战武器升级',
                tip:'',
                ico:[5,3],
                pos:[1,1],
                key:['Rome'],
                val:keys['Rome'],
                map:3
            },
            {
                tag:'远程武器升级',
                tip:'',
                ico:[6,3],
                pos:[2,1],
                key:['Rora'],
                val:keys['Rora'],
                map:3
            },
            {
                tag:'尖刺防御升级',
                tip:'',
                ico:[8,1],
                pos:[3,1],
                key:['Rosp'],
                val:keys['Rosp'],
                map:2
            },
            {
                tag:'地洞和哨塔加强升级',
                tip:'',
                ico:[8,3],
                pos:[3,2],
                key:['Rorb'],
                val:keys['Rorb'],
                map:['Hotkey']
            },
            {
                tag:'兽人护甲升级',
                tip:'',
                ico:[7,3],
                pos:[1,2],
                key:['Rora'],
                val:keys['Rora'],
                map:3
            },
        ]
    },
    瞭望塔:{
        ico:[4,5],
    },
    地洞:{
        ico:[1,6],
        btn:[
            {
                tag:'战斗戒备',
                tip:'',
                ico:[8,7],
                pos:[1,3],
                key:['Abtl'],
                val:keys['Abtl'],
                map:['Hotkey']
            },
            {
                tag:'解除戒备',
                tip:'',
                ico:[9,7],
                pos:[2,3],
                key:['Astd'],
                val:keys['Astd'],
                map:['Hotkey']
            },
        ]
    },
    风暴祭坛:{
        ico:[2,6],
        btn:[
            {
                tag:'剑圣',
                tip:'',
                ico:[1,1],
                pos:[1,3],
                key:['Obla'],
                val:keys['Obla'],
                map:['Hotkey']
            },
            {
                tag:'先知',
                tip:'',
                ico:[2,1],
                pos:[2,3],
                key:['Ofar'],
                val:keys['Ofar'],
                map:['Hotkey']
            },
            {
                tag:'牛头人酋长',
                tip:'',
                ico:[3,1],
                pos:[3,3],
                key:['Otch'],
                val:keys['Otch'],
                map:['Hotkey']
            },
            {
                tag:'巨魔巫医',
                tip:'',
                ico:[4,1],
                pos:[1,2],
                key:['Oshd'],
                val:keys['Oshd'],
                map:['Hotkey']
            },
            集结点
        ]
    },
    灵魂小屋:{
        ico:[3,6],
        btn:[
            {
                tag:'萨满',
                tip:'',
                ico:[1,4],
                pos:[1,1],
                key:['oshm'],
                val:keys['oshm'],
                map:['Hotkey']
            },
            {
                tag:'巫医',
                tip:'',
                ico:[2,4],
                pos:[2,1],
                key:['odoc'],
                val:keys['odoc'],
                map:['Hotkey']
            },
            {
                tag:'萨满升级',
                tip:'',
                ico:[5,5],
                pos:[1,3],
                key:['Rost'],
                val:keys['Rost'],
                map:2
            },
            {
                tag:'巫医升级',
                tip:'',
                ico:[6,5],
                pos:[2,3],
                key:['Rowd'],
                val:keys['Rowd'],
                map:2
            },
            集结点
        ]
    },
    兽栏:{
        ico:[4,6],
        btn:[
            {
                tag:'狼骑兵',
                tip:'',
                ico:[1,3],
                pos:[1,1],
                key:['orai'],
                val:keys['orai'],
                map:['Hotkey']
            },
            {
                tag:'驭风者',
                tip:'双足飞龙',
                ico:[2,3],
                pos:[2,1],
                key:['owyv'],
                val:keys['owyv'],
                map:['Hotkey']
            },
            {
                tag:'科多兽',
                tip:'',
                ico:[3,3],
                pos:[3,1],
                key:['okod'],
                val:keys['okod'],
                map:['Hotkey']
            },
            {
                tag:'巨魔蝙蝠骑士',
                tip:'',
                ico:[4,3],
                pos:[4,1],
                key:['otbr'],
                val:keys['otbr'],
                map:['Hotkey']
            },
            {
                tag:'研究诱捕',
                tip:'',
                ico:[5,4],
                pos:[1,3],
                key:['Roen'],
                val:keys['Roen'],
                map:['Hotkey']
            },
            {
                tag:'研究浸毒标枪',
                tip:'',
                ico:[6,4],
                pos:[2,3],
                key:['Rovs'],
                val:keys['Rovs'],
                map:['Hotkey']
            },
            {
                tag:'研究燃烧弹',
                tip:'',
                ico:[8,4],
                pos:[3,2],
                key:['Rolf'],
                val:keys['Rolf'],
                map:['Hotkey']
            },
            {
                tag:'战鼓升级',
                tip:'',
                ico:[7,4],
                pos:[3,3],
                key:['Rwdm'],
                val:keys['Rwdm'],
                map:['Hotkey']
            },
            集结点
        ]
    },
    牛头人图腾:{
        ico:[1,7],
        btn:[
            {
                tag:'灵魂行者',
                tip:'',
                ico:[3,4],
                pos:[1,1],
                key:['ospm'],
                val:keys['ospm'],
                map:['Hotkey']
            },
            {
                tag:'牛头人',
                tip:'',
                ico:[4,4],
                pos:[2,1],
                key:['otau'],
                val:keys['otau'],
                map:['Hotkey']
            },
            {
                tag:'灵魂行者升级',
                tip:'',
                ico:[7,5],
                pos:[1,3],
                key:['Rowt'],
                val:keys['Rowt'],
                map:2
            },
            {
                tag:'研究粉碎',
                tip:'',
                ico:[8,5],
                pos:[2,3],
                key:['Rows'],
                val:keys['Rows'],
                map:['Hotkey']
            },
            集结点
        ]
    },
    巫毒小屋:{
        ico:[2,7],
        btn:[
            互动
        ]
    },
    空位:{
        ico:[12,8],
    },
    兽人建造:{
        ico:[4,7],
        btn:[
            {
                tag:'大厅',
                tip:'',
                ico:[1,5],
                pos:[1,1],
                key:['ogre'],
                val:keys['ogre'],
                map:['Hotkey']
            },
            {
                tag:'兵营',
                tip:'',
                ico:[2,5],
                pos:[2,1],
                key:['obar'],
                val:keys['obar'],
                map:['Hotkey']
            },
            {
                tag:'战争磨坊',
                tip:'',
                ico:[3,5],
                pos:[3,1],
                key:['ofor'],
                val:keys['ofor'],
                map:['Hotkey']
            },
            {
                tag:'哨塔',
                tip:'',
                ico:[4,5],
                pos:[4,1],
                key:['owtw'],
                val:keys['owtw'],
                map:['Hotkey']
            },
            {
                tag:'地洞',
                tip:'',
                ico:[1,6],
                pos:[1,2],
                key:['otrb'],
                val:keys['otrb'],
                map:['Hotkey']
            },
            {
                tag:'风暴祭坛',
                tip:'',
                ico:[2,6],
                pos:[2,2],
                key:['oalt'],
                val:keys['oalt'],
                map:['Hotkey']
            },
            {
                tag:'灵魂归宿',
                tip:'',
                ico:[3,6],
                pos:[3,2],
                key:['osld'],
                val:keys['osld'],
                map:['Hotkey']
            },
            {
                tag:'兽栏',
                tip:'',
                ico:[4,6],
                pos:[4,2],
                key:['obea'],
                val:keys['obea'],
                map:['Hotkey']
            },
            {
                tag:'牛头人图腾',
                tip:'',
                ico:[1,7],
                pos:[1,3],
                key:['otto'],
                val:keys['otto'],
                map:['Hotkey']
            },
            {
                tag:'巫毒商店',
                tip:'',
                ico:[2,7],
                pos:[2,3],
                key:['ovln'],
                val:keys['ovln'],
                map:['Hotkey']
            },
        ]
    },
}

module.exports = arch