const storage = require('main/const/storage')
let keys = require(storage + '/keys')

let { 移动,停止,保持,攻击,巡逻,攻击地面,选择技能 } = require("../general_unit")

let unit = {
    死亡骑士:{
        ico:[1,1],
        btn:[
            {
                tag:'死亡缠绕',
                tip:'黑暗便便',
                ico:[9,1],
                pos:[1,3],
                key:['AUdc'],
                val:keys['AUdc'],
            },
            {
                tag:'死亡契约',
                tip:'',
                ico:[10,1],
                pos:[2,3],
                key:['AUdp'],
                val:keys['AUdp'],
            },
            {
                tag:'邪恶光环',
                tip:'',
                ico:[11,1],
                pos:[3,3],
                key:['AUau'],
                val:keys['AUau'],
            },
            {
                tag:'操纵死尸',
                tip:'',
                ico:[12,1],
                pos:[4,3],
                key:['AUan'],
                val:keys['AUan'],
            },
            选择技能
        ]
    },
    恐惧魔王:{
        ico:[2,1],
        btn:[
            {
                tag:'腐臭蜂群',
                tip:'',
                ico:[9,2],
                pos:[1,3],
                key:['AUcs'],
                val:keys['AUcs'],
            },
            {
                tag:'催眠',
                tip:'',
                ico:[10,2],
                pos:[2,3],
                key:['AUsl'],
                val:keys['AUsl'],
            },
            {
                tag:'吸血光环',
                tip:'',
                ico:[11,2],
                pos:[3,3],
                key:['AUav'],
                val:keys['AUav'],
            },
            {
                tag:'地狱火',
                tip:'',
                ico:[12,2],
                pos:[4,3],
                key:['AUin'],
                val:keys['AUin'],
            },
            选择技能
        ]
    },
    巫妖王:{
        ico:[3,1],
        btn:[
            {
                tag:'霜冻新星',
                tip:'',
                ico:[9,3],
                pos:[1,3],
                key:['AUfn'],
                val:keys['AUfn'],
            },
            {
                tag:'冰霜护甲',
                tip:'',
                ico:[10,3],
                pos:[2,3],
                key:['AUfu'],
                val:keys['AUfu'],
            },
            {
                tag:'黑暗仪式',
                tip:'',
                ico:[11,3],
                pos:[3,3],
                key:['AUdr'],
                val:keys['AUdr'],
            },
            {
                tag:'死亡凋零',
                tip:'',
                ico:[12,3],
                pos:[4,3],
                key:['AUdd'],
                val:keys['AUdd'],
            },
            选择技能
        ]
    },
    地穴领主:{
        ico:[4,1],
        btn:[
            {
                tag:'穿刺',
                tip:'',
                ico:[9,4],
                pos:[1,3],
                key:['AUim'],
                val:keys['AUim'],
            },
            {
                tag:'尖刺外壳',
                tip:'',
                ico:[10,4],
                pos:[2,3],
                key:['AUts'],
                val:keys['AUts'],
            },
            {
                tag:'腐肉甲虫',
                tip:'',
                ico:[11,4],
                pos:[3,3],
                key:['AUcb'],
                val:keys['AUcb'],
            },
            {
                tag:'嗜血蝗群',
                tip:'',
                ico:[12,4],
                pos:[4,3],
                key:['AUls'],
                val:keys['AUls'],
            },
            选择技能
        ]
    },
    寺僧:{
        ico:[1,2],
        btn:[
            {
                tag:'亡灵建造',
                tip:'',
                ico:[4,7],
                pos:[1,3],
                key:['CmdBuildUndead'],
                val:keys['CmdBuildUndead'],
            },
            {
                tag:'反召唤',
                tip:'',
                ico:[8,1],
                pos:[2,3],
                key:['Auns'],
                val:keys['Auns'],
            },
            {
                tag:'黑暗修复',
                tip:'',
                ico:[8,8],
                pos:[2,2],
                key:['Arst'],
                val:keys['Arst'],
            },
            {
                tag:'寺僧采集',
                tip:'',
                ico:[9,8],
                pos:[4,2],
                key:['Aaha'],
                val:keys['Aaha'],
            },
        ]
    },
    食尸鬼:{
        ico:[2,2],
        btn:[
            {
                tag:'食尸',
                tip:'',
                ico:[5,5],
                pos:[1,3],
                key:['Acan'],
                val:keys['Acan'],
            },
            {
                tag:'返还木材/伐木',
                tip:'',
                ico:[5,7],
                pos:[4,2],
                key:['Ahrl'],
                val:keys['Ahrl'],
            },
        ]
    },
    穴居恶魔:{
        ico:[3,2],
        btn:[
            {
                tag:'蛛网',
                tip:'',
                ico:[6,5],
                pos:[1,3],
                key:['Aweb'],
                val:keys['Aweb'],
            },
            {
                tag:'遁地',
                tip:'',
                ico:[6,4],
                pos:[4,3],
                key:['Abur'],
                val:keys['Abur'],
            },
        ]
    },
    石像鬼:{
        ico:[4,2],
        btn:[
            {
                tag:'形态变换',
                tip:'',
                ico:[7,4],
                pos:[1,3],
                key:['Astn'],
                val:keys['Astn'],
            },
        ]
    },
    绞肉车:{
        ico:[1,3],
        btn:[
            {
                tag:'装载尸体',
                tip:'',
                ico:[9,6],
                pos:[1,3],
                key:['Amel'],
                val:keys['Amel'],
            },
            {
                tag:'卸载尸体',
                tip:'',
                ico:[10,6],
                pos:[2,3],
                key:['Amed'],
                val:keys['Amed'],
            },
            攻击地面
        ]
    },
    憎恶:{
        ico:[2,3],
        btn:[
            {
                tag:'食尸',
                tip:'',
                ico:[5,5],
                pos:[1,3],
                key:['Acn2'],
                val:keys['Acn2'],
            },
        ]
    },
    十胜石雕像:{
        ico:[3,3],
        btn:[
            {
                tag:'灵魂触摸',
                tip:'',
                ico:[11,6],
                pos:[1,3],
                key:['Arpm'],
                val:keys['Arpm'],
            },
            {
                tag:'枯萎精髓',
                tip:'',
                ico:[12,6],
                pos:[2,3],
                key:['Arpl'],
                val:keys['Arpl'],
            },
            {
                tag:'毁灭者',
                tip:'',
                ico:[4,3],
                pos:[4,3],
                key:['ubsp'],
                val:keys['ubsp'],
            },
        ]
    },
    毁灭者:{
        ico:[4,3],
        btn:[
            {
                tag:'吞噬魔法',
                tip:'',
                ico:[9,5],
                pos:[1,3],
                key:['Advm'],
                val:keys['Advm'],
            },
            {
                tag:'毁灭之球',
                tip:'',
                ico:[10,5],
                pos:[2,3],
                key:['Afak'],
                val:keys['Afak'],
            },
            {
                tag:'吸魔',
                tip:'',
                ico:[11,5],
                pos:[3,3],
                key:['Aabs'],
                val:keys['Aabs'],
            },
        ]
    },
    诅咒法师:{
        ico:[1,4],
        btn:[
            {
                tag:'召唤骷髅',
                tip:'',
                ico:[6,6],
                pos:[1,3],
                key:['Arai'],
                val:keys['Arai'],
            },
            {
                tag:'邪恶狂热',
                tip:'',
                ico:[7,6],
                pos:[2,3],
                key:['Auhf','Auuf'],
                val:keys['Auhf'],
            },
            {
                tag:'残废',
                tip:'',
                ico:[8,6],
                pos:[3,3],
                key:['Acri'],
                val:keys['Acri'],
            }
        ]
    },
    女妖:{
        ico:[2,4],
        btn:[
            {
                tag:'诅咒',
                tip:'',
                ico:[6,7],
                pos:[1,3],
                key:['Acrs'],
                val:keys['Acrs'],
            },
            {
                tag:'反魔法外壳',
                tip:'',
                ico:[7,7],
                pos:[2,3],
                key:['Aams','Aam2'],
                val:keys['Aams'],
            },
            {
                tag:'占据',
                tip:'',
                ico:[8,7],
                pos:[3,3],
                key:['Apos','Aps2'],
                val:keys['Apos'],
            },
        ]
    },
    腐尸甲虫:{
        ico:[3,4],
        btn:[
            {
                tag:'遁地',
                tip:'',
                ico:[6,4],
                pos:[1,3],
                key:['Abu2','Abu3'],
                val:keys['Abu2'],
            },
        ]
    },
    冰霜巨龙:{
        ico:[4,4],
        btn:[]
    },


}

let orders = [移动,停止,保持,攻击,巡逻]
for(let item in unit){
    if(!unit[item].btn) unit[item].btn = []
    unit[item].btn.push(...orders)
}

module.exports = unit