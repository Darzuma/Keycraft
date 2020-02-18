
let { 吃树,拔起,互动,集结点 } = require("../general_arch")
let keys = require('../keys')

let arch = {
    生命之树:{
        ico:[1,5],
        btn:[
            {
                tag:'小精灵',
                tip:'以前是男人，后来变成了女人',
                ico:[1,2],
                pos:[1,1],
                key:['ewsp'],
                val:keys['ewsp'],
                map:['Hotkey']
            },
            {
                tag:'自然的祝福',
                tip:'以前是男人，后来变成女人了',
                ico:[11,6],
                pos:[3,1],
                key:['Renb'],
                val:keys['Renb'],
                map:['Hotkey']
            },
            {
                tag:'背包升级',
                tip:'',
                ico:[12,6],
                pos:[4,1],
                key:['Repm'],
                val:keys['Repm'],
                map:['Hotkey']
            },
            {
                tag:'升级',
                tip:'生命之树升级为远古之树，远古之树升级为永恒之树',
                ico:[12,7],
                pos:[1,3],
                key:['etoa','etoe'],
                val:keys['etoa'],
                map:['Hotkey']
            },
            {
                tag:'缠绕金矿',
                tip:'',
                ico:[4,6],
                pos:[2,3],
                key:['Aent'],
                val:keys['Aent'],
                map:['Hotkey']
            },
            集结点,吃树,拔起
        ]
    },
    战争古树:{
        ico:[2,5],
        btn:[
            {
                tag:'弓箭手',
                tip:'',
                ico:[2,2],
                pos:[1,1],
                key:['earc'],
                val:keys['earc'],
                map:['Hotkey']
            },
            {
                tag:'女猎手',
                tip:'',
                ico:[3,2],
                pos:[2,1],
                key:['esen'],
                val:keys['esen'],
                map:['Hotkey']
            },
            {
                tag:'投刃车',
                tip:'',
                ico:[4,2],
                pos:[3,1],
                key:['ebal'],
                val:keys['ebal'],
                map:['Hotkey']
            },
            {
                tag:'精准射击',
                tip:'',
                ico:[7,1],
                pos:[1,2],
                key:['Remk'],
                val:keys['Remk'],
                map:['Hotkey']
            },
            {
                tag:'硬弓',
                tip:'',
                ico:[5,4],
                pos:[1,3],
                key:['Reib'],
                val:keys['Reib'],
                map:['Hotkey']
            },
            {
                tag:'月刃',
                tip:'',
                ico:[8,1],
                pos:[2,2],
                key:['Remg'],
                val:keys['Remg'],
                map:['Hotkey']
            },
            {
                tag:'猫头鹰哨兵',
                tip:'',
                ico:[6,4],
                pos:[2,3],
                key:['Resc'],
                val:keys['Resc'],
                map:['Hotkey']
            },
            {
                tag:'穿刺之刃',
                tip:'',
                ico:[7,4],
                pos:[3,2],
                key:['Repb'],
                val:keys['Repb'],
                map:['Hotkey']
            },
            集结点,吃树,拔起
        ]
    },
    猎手大厅:{
        ico:[3,5],
        btn:[
            {
                tag:'月神之力',
                tip:'',
                ico:[5,5],
                pos:[1,1],
                key:['Resm'],
                val:keys['Resm'],
                map:3
            },
            {
                tag:'野性之力',
                tip:'',
                ico:[6,5],
                pos:[2,1],
                key:['Resw'],
                val:keys['Resw'],
                map:3
            },
            {
                tag:'月神之甲',
                tip:'',
                ico:[5,6],
                pos:[1,2],
                key:['Rema'],
                val:keys['Rema'],
                map:3
            },
            {
                tag:'野性之甲',
                tip:'',
                ico:[6,6],
                pos:[2,2],
                key:['Rerh'],
                val:keys['Rerh'],
                map:3
            },
            {
                tag:'夜视',
                tip:'',
                ico:[7,5],
                pos:[3,1],
                key:['Reuv'],
                val:keys['Reuv'],
                map:['Hotkey']
            },
            {
                tag:'月井之春',
                tip:'',
                ico:[8,5],
                pos:[4,1],
                key:['Rews'],
                val:keys['Rews'],
                map:['Hotkey']
            },
        ]
    },
    远古守护者:{
        ico:[4,5],
        btn:[
            吃树,拔起
        ]
    },
    月亮井:{
        ico:[1,6],
        btn:[
            {
                tag:'使用井水',
                tip:'',
                ico:[10,6],
                pos:[1,1],
                key:['Ambt'],
                val:keys['Ambt'],
                map:['Hotkey','Unhotkey']
            },
        ]
    },
    长者祭坛:{
        ico:[2,6],
        btn:[
            {
                tag:'守望者',
                tip:'',
                ico:[4,1],
                pos:[1,2],
                key:['Ewar'],
                val:keys['Ewar'],
                map:['Hotkey']
            },
            {
                tag:'恶魔猎手',
                tip:'',
                ico:[1,1],
                pos:[1,3],
                key:['Edem'],
                val:keys['Edem'],
                map:['Hotkey']
            },
            {
                tag:'恶魔猎手',
                tip:'',
                ico:[2,1],
                pos:[2,3],
                key:['Ekee'],
                val:keys['Ekee'],
                map:['Hotkey']
            },
            {
                tag:'月女祭祀',
                tip:'',
                ico:[3,1],
                pos:[3,3],
                key:['Emoo'],
                val:keys['Emoo'],
                map:['Hotkey']
            },
        ]
    },
    知识古树:{
        ico:[3,6],
        btn:[
            {
                tag:'树妖',
                tip:'',
                ico:[1,3],
                pos:[1,1],
                key:['edry'],
                val:keys['edry'],
                map:['Hotkey']
            },
            {
                tag:'利爪德鲁伊',
                tip:'',
                ico:[2,3],
                pos:[2,1],
                key:['edoc'],
                val:keys['edoc'],
                map:['Hotkey']
            },
            {
                tag:'山岭巨人',
                tip:'',
                ico:[3,3],
                pos:[3,1],
                key:['emtg'],
                val:keys['emtg'],
                map:['Hotkey']
            },
            {
                tag:'研究驱散',
                tip:'',
                ico:[5,3],
                pos:[1,3],
                key:['Resi'],
                val:keys['Resi'],
                map:['Hotkey']
            },
            {
                tag:'利爪德鲁伊升级',
                tip:'',
                ico:[6,3],
                pos:[2,3],
                key:['Redc'],
                val:keys['Redc'],
                map:2
            },
            {
                tag:'研究利爪之印',
                tip:'让利爪德鲁伊在熊形态下，使用咆哮技能',
                ico:[6,2],
                pos:[2,2],
                key:['Reeb'],
                val:keys['Reeb'],
                map:['Hotkey']
            },
            {
                tag:'研究硬化皮肤',
                tip:'',
                ico:[7,2],
                pos:[3,2],
                key:['Rehs'],
                val:keys['Rehs'],
                map:['Hotkey']
            },
            {
                tag:'研究抗性皮肤',
                tip:'',
                ico:[7,3],
                pos:[3,3],
                key:['Rers'],
                val:keys['Rers'],
                map:['Hotkey']
            },
            集结点,拔起
        ]
    },
    被缠绕的金矿:{
        ico:[4,6],
        btn:[
            {
                tag:'装载小精灵',
                tip:'',
                ico:[5,7],
                pos:[1,3],
                key:['Slo2'],
                val:keys['Slo2'],
                map:['Hotkey']
            },
            {
                tag:'卸载小精灵',
                tip:'',
                ico:[6,7],
                pos:[2,3],
                key:['Adri'],
                val:keys['Adri'],
                map:['Hotkey']
            },
        ]
    },
    风之古树:{
        ico:[1,7],
        btn:[
            {
                tag:'角鹰兽',
                tip:'',
                ico:[1,4],
                pos:[1,1],
                key:['ehip'],
                val:keys['ehip'],
                map:['Hotkey']
            },
            {
                tag:'猛禽德鲁伊',
                tip:'',
                ico:[2,4],
                pos:[2,1],
                key:['edot'],
                val:keys['edot'],
                map:['Hotkey']
            },
            {
                tag:'精灵龙',
                tip:'',
                ico:[3,4],
                pos:[3,1],
                key:['efdr'],
                val:keys['efdr'],
                map:['Hotkey']
            },
            {
                tag:'驯服角鹰兽',
                tip:'1.32已取消此研究升级，角鹰可直接搭乘弓箭手;改设置只对老版本生效',
                ico:[1,9],
                pos:[1,3],
                key:['Reht'],
                val:keys['Reht'],
                map:['Hotkey']
            },
            {
                tag:'猛禽德鲁伊升级',
                tip:'',
                ico:[8,3],
                pos:[2,3],
                key:['Redt'],
                val:keys['Redt'],
                map:2
            },
            {
                tag:'猛禽之印',
                tip:'让德鲁伊在乌鸦形态下也能释放精灵之火',
                ico:[8,2],
                pos:[2,2],
                key:['Reec'],
                val:keys['Reec'],
                map:['Hotkey']
            },
            集结点,吃树,拔起
        ]
    },
    奇美拉栖木:{
        ico:[2,7],
        btn:[
            {
                tag:'研究腐蚀吐息',
                tip:'',
                ico:[8,4],
                pos:[1,3],
                key:['Recb'],
                val:keys['Recb'],
                map:['Hotkey']
            },
        ]
    },
    奇迹古树:{
        ico:[3,7],
        btn:[
            吃树,拔起,互动
        ]
    },
    精灵建造:{
        ico:[4,7],
        btn:[
            {
                tag:'生命之树',
                tip:'',
                ico:[1,5],
                pos:[1,1],
                key:['etol'],
                val:keys['etol'],
                map:['Hotkey']
            },
            {
                tag:'战争古树',
                tip:'',
                ico:[2,5],
                pos:[2,1],
                key:['eaom'],
                val:keys['eaom'],
                map:['Hotkey']
            },
            {
                tag:'猎手大厅',
                tip:'',
                ico:[3,5],
                pos:[3,1],
                key:['edob'],
                val:keys['edob'],
                map:['Hotkey']
            },
            {
                tag:'远古守护者',
                tip:'',
                ico:[4,5],
                pos:[4,1],
                key:['etrp'],
                val:keys['etrp'],
                map:['Hotkey']
            },
            {
                tag:'月亮井',
                tip:'',
                ico:[1,6],
                pos:[1,2],
                key:['emow'],
                val:keys['emow'],
                map:['Hotkey']
            },
            {
                tag:'长者祭坛',
                tip:'',
                ico:[2,6],
                pos:[2,2],
                key:['eate'],
                val:keys['eate'],
                map:['Hotkey']
            },
            {
                tag:'知识古树',
                tip:'',
                ico:[3,6],
                pos:[3,2],
                key:['eaoe'],
                val:keys['eaoe'],
                map:['Hotkey']
            },
            {
                tag:'风之古树',
                tip:'',
                ico:[1,7],
                pos:[1,3],
                key:['eaow'],
                val:keys['eaow'],
                map:['Hotkey']
            },
            {
                tag:'奇美拉栖木',
                tip:'',
                ico:[2,7],
                pos:[2,3],
                key:['edos'],
                val:keys['edos'],
                map:['Hotkey']
            },
            {
                tag:'奇迹古树',
                tip:'',
                ico:[3,7],
                pos:[3,3],
                key:['eden'],
                val:keys['eden'],
                map:['Hotkey']
            },
        ]
    }
}

arch.奇迹古树.btn[2].pos = [4,2]

module.exports = arch