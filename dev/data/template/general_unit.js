let keys = require('./keys.js')

module.exports = {
    移动:{
        tag:'移动',
        tip:'通用命令',
        key:['CmdMove'],
        val:keys['CmdMove'],
        ico:[1,8],
        pos:[1,1]
    },
    停止:{
        tag:'停止',
        tip:'通用命令',
        key:['CmdStop'],
        val:keys['CmdStop'],
        ico:[2,8],
        pos:[2,1]
    },
    保持:{
        tag:'保持',
        tip:'通用命令',
        key:['CmdHoldPos'],
        val:keys['CmdHoldPos'],
        ico:[3,8],
        pos:[3,1]
    },
    攻击:{
        tag:'攻击',
        tip:'通用命令',
        key:['CmdAttack'],
        val:keys['CmdAttack'],
        ico:[4,8],
        pos:[4,1]
    },
    巡逻:{
        tag:'巡逻',
        tip:'通用命令',
        key:['CmdPatrol'],
        val:keys['CmdPatrol'],
        ico:[5,8],
        pos:[1,2]
    },
    采集:{
        tag:'采集',
        ico:[9,8],
        pos:[4,2],
        key:['Ahar'],
        val:keys['Ahar'],
        map:['Hotkey','Unhotkey']
    },
    修理:{
        tag:'修理',
        ico:[8,8],
        pos:[2,2],
        key:['Arep'],
        val:keys['Arep'],
        map:['Hotkey','Unhotkey']
    },
    攻击地面:{
        tag:'攻击地面',
        tip:'迫击炮小队、投刃车、投石车、绞肉车 通用快捷键',
        ico:[6,8],
        pos:[4,2],
        key:['CmdAttackGround'],
        val:keys['CmdAttackGround'],
        map:['Hotkey']
    },
    选择技能:{
        tag:'选择技能',
        tip:'通用技能',
        ico:[7,8],
        pos:[4,2],
        key:['CmdSelectSkill'],
        val:keys['CmdSelectSkill'],
        map:['Hotkey']
    },
    影遁 : {
        tag:'影遁',
        tip:'月女祭祀、守望者、弓箭手、女猎手 通用快捷键',
        ico:[11,8],
        pos:[3,2],
        key:['Ashm'],
        val:keys['Ashm'],
        map:['Hotkey']
    }
}