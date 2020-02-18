
let { 移动,停止,保持,攻击,巡逻,采集,修理,攻击地面,选择技能 } = require("../general_unit")
let keys = require('../keys')

let unit = {
    剑圣:{
        ico:[1,1],
        btn:[
            {
                tag:'疾风步',
                tip:'',
                ico:[9,3],
                pos:[1,3],
                key:['AOwk'],
                val:keys['AOwk'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'镜像',
                tip:'',
                ico:[10,3],
                pos:[2,3],
                key:['AOmi'],
                val:keys['AOmi'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'致命一击',
                tip:'',
                ico:[11,3],
                pos:[3,3],
                key:['AOcr'],
                val:keys['AOcr'],
                map:['Researchhotkey']
            },
            {
                tag:'剑刃风暴',
                tip:'',
                ico:[12,3],
                pos:[4,3],
                key:['AOww'],
                val:keys['AOww'],
                map:['Hotkey','Researchhotkey']
            },
            选择技能
        ]
    },
    先知:{
        ico:[2,1],
        btn:[
            {
                tag:'闪电链',
                tip:'',
                ico:[9,4],
                pos:[1,3],
                key:['AOcl'],
                val:keys['AOcl'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'透视',
                tip:'',
                ico:[10,4],
                pos:[2,3],
                key:['AOfs'],
                val:keys['AOfs'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'幽灵狼',
                tip:'',
                ico:[11,4],
                pos:[3,3],
                key:['AOsf'],
                val:keys['AOsf'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'地震术',
                tip:'',
                ico:[12,4],
                pos:[4,3],
                key:['AOeq'],
                val:keys['AOeq'],
                map:['Hotkey','Researchhotkey']
            },
            选择技能
        ]
    },
    牛头人酋长:{
        ico:[3,1],
        btn:[
            {
                tag:'震荡波',
                tip:'',
                ico:[9,6],
                pos:[1,3],
                key:['AOsh'],
                val:keys['AOsh'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'战争践踏',
                tip:'',
                ico:[10,6],
                pos:[2,3],
                key:['AOws'],
                val:keys['AOws'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'坚韧光环',
                tip:'',
                ico:[11,6],
                pos:[3,3],
                key:['AOae'],
                val:keys['AOae'],
                map:['Researchhotkey']
            },
            {
                tag:'重生',
                tip:'',
                ico:[12,6],
                pos:[4,3],
                key:['AOre'],
                val:keys['AOre'],
                map:['Researchhotkey']
            },
            选择技能
        ]
    },
    巨魔巫医:{
        ico:[4,1],
        btn:[
            {
                tag:'治疗波',
                tip:'',
                ico:[9,5],
                pos:[1,3],
                key:['AOhw'],
                val:keys['AOhw'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'毒蛇守卫',
                tip:'',
                ico:[10,5],
                pos:[2,3],
                key:['AOsw'],
                val:keys['AOsw'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'妖术',
                tip:'',
                ico:[11,5],
                pos:[3,3],
                key:['AOhx'],
                val:keys['AOhx'],
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'无毒',
                tip:'喘气能回血，嘘嘘能回蓝，跳舞能无敌',
                ico:[12,5],
                pos:[4,3],
                key:['AOvd'],
                val:keys['AOvd'],
                map:['Hotkey','Researchhotkey']
            },
            选择技能
        ]
    },
    苦工:{
        ico:[1,2],
        btn:[
            {
                tag:'建造',
                tip:'',
                ico:[4,7],
                pos:[1,3],
                key:['CmdBuildOrc'],
                val:keys['CmdBuildOrc'],
                map:['Hotkey']
            },
            修理,采集
        ]
    },
    兽人步兵:{
        ico:[2,2],
    },
    猎头者:{
        ico:[3,2],
        btn:[
            {
                tag:'狂暴',
                tip:'',
                ico:[5,7],
                pos:[1,3],
                key:['Absk'],
                val:keys['Absk'],
                map:['Hotkey']
            },
        ]
    },
    投石车:{
        ico:[4,2],
        btn:[
            攻击地面
        ]
    },
    狼骑兵:{
        ico:[1,3],
        btn:[
            {
                tag:'诱捕',
                tip:'',
                ico:[5,4],
                pos:[1,3],
                key:['Aens'],
                val:keys['Aens'],
                map:['Hotkey']
            },
        ]
    },
    双足飞龙:{
        ico:[2,3],

    },
    科多兽:{
        ico:[3,3],
        btn:[
            {
                tag:'吞噬',
                tip:'',
                ico:[7,7],
                pos:[1,3],
                key:['Adev'],
                val:keys['Adev'],
                map:['Hotkey']
            },
        ]
    },
    自爆蝙蝠:{
        ico:[4,3],
        btn:[
            {
                tag:'不稳定化合物',
                tip:'',
                ico:[6,7],
                pos:[1,3],
                key:['Auco'],
                val:keys['Auco'],
                map:['Hotkey','Unhotkey']
            },
        ]
    },
    萨满:{
        ico:[1,4],
        btn:[
            {
                tag:'净化',
                tip:'',
                ico:[9,2],
                pos:[1,3],
                key:['Aprg'],
                val:keys['Aprg'],
                map:['Hotkey']
            },
            {
                tag:'闪电盾',
                tip:'',
                ico:[10,2],
                pos:[2,3],
                key:['Alsh'],
                val:keys['Alsh'],
                map:['Hotkey']
            },
            {
                tag:'嗜血',
                tip:'',
                ico:[11,2],
                pos:[3,3],
                key:['Ablo'],
                val:keys['Ablo'],
                map:['Hotkey','Unhotkey']
            },
        ]
    },
    巫医:{
        ico:[2,4],
        btn:[
            {
                tag:'侦查岗哨',
                tip:'',
                ico:[9,1],
                pos:[1,3],
                key:['Aeye'],
                val:keys['Aeye'],
                map:['Hotkey']
            },
            {
                tag:'静止陷阱',
                tip:'',
                ico:[10,1],
                pos:[2,3],
                key:['Asta'],
                val:keys['Asta'],
                map:['Hotkey']
            },
            {
                tag:'治疗守卫',
                tip:'',
                ico:[11,1],
                pos:[3,3],
                key:['Ahwd'],
                val:keys['Ahwd'],
                map:['Hotkey']
            },
        ]
    },
    灵魂行者:{
        ico:[3,4],
        btn:[
            {
                tag:'灵魂链接',
                tip:'',
                ico:[5,6],
                pos:[1,3],
                key:['Aspl'],
                val:keys['Aspl'],
                map:['Hotkey']
            },
            {
                tag:'消魔',
                tip:'驱散区域内的魔法效果，对敌对召唤单位造成250点伤害',
                ico:[6,6],
                pos:[2,3],
                key:['Adcn'],
                val:keys['Adcn'],
                map:['Hotkey']
            },
            {
                tag:'先祖之魂',
                tip:'',
                ico:[7,6],
                pos:[3,3],
                key:['Aast'],
                val:keys['Aast'],
                map:['Hotkey']
            },
            {
                tag:'肉体/灵魂形态切换',
                tip:'',
                ico:[8,6],
                pos:[4,3],
                key:['Acpf','Aetf'],
                val:keys['Acpf'],
                map:['Hotkey','Unhotkey']
            },
        ]
    },
    牛头人:{
        ico:[4,4],
    },
}

let orders = [移动,停止,保持,攻击,巡逻]
for(let item in unit){
    if(!unit[item].btn) unit[item].btn = []
    unit[item].btn.push(...orders)
}

module.exports = unit