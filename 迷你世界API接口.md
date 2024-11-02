·设置指定坐标处为某方块：

<table style="border-collapse: collapse; width: 480px; height: 218px;" border="1px"><tbody><tr style="height: 53px;"><td style="height: 53px; border: 1px solid #000000; width: 381.438px; text-align: left; vertical-align: middle;" colspan="2" rowspan="1" align="" valign="top" width="345"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">result=Block:setBlockAll(x , y , z , blockid , data)</span></p></td></tr><tr style="height: 129px;"><td style="height: 129px; border: 1px solid #000000; width: 183.719px; text-align: left; vertical-align: top;" colspan="1" rowspan="1" align="" valign="top" width="166"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">result：0成功 1001失败</span></p></td><td style="height: 129px; border: 1px solid #000000; width: 197.719px; text-align: left; vertical-align: top;" colspan="1" rowspan="1" align="" valign="top" width="179"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">x,y,z：要设置的坐标</span></p><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">blockid：要设置的方块id</span></p><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">data：要设置的方块数据</span></p></td></tr><tr style="height: 53px;"><td style="height: 26px; border: 1px solid #000000; width: 381.438px; text-align: left; vertical-align: middle;" colspan="2" rowspan="1" align="" valign="top" width="345"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="color: #a419d3; font-size: 16px;"><strong><span style="font-family: -apple-system, 'font-weight:700; color: #a419d3; vertical-align: baseline;';">Block:setBlockAll(</span><span style="font-family: -apple-system, 'font-weight:700; color: #0188fb; vertical-align: baseline;'; color: #0188fb;">0 , 7 , 0</span><span style="font-family: -apple-system, 'font-weight:700; color: #a419d3; vertical-align: baseline;';"><span style="color: #0188fb;"> </span>,</span><span style="font-family: -apple-system, 'font-weight:700; color: #2741b1; vertical-align: baseline;'; color: #2741b1;"> 1</span><span style="font-family: -apple-system, 'font-weight:700; color: #a419d3; vertical-align: baseline;';"> , </span><span style="font-family: -apple-system, 'font-weight:700; color: #0188fb; vertical-align: baseline;'; color: #0188fb;">0</span><span style="font-family: -apple-system, 'font-weight:700; color: #a419d3; vertical-align: baseline;';">)</span></strong></span></p></td></tr><tr style="height: 53px;"><td style="height: 10px; border: 1px solid #000000; width: 381.438px; text-align: left; vertical-align: middle;" colspan="2" rowspan="1" align="" valign="top" width="345"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="color: #a419d3; font-size: 16px;"><strong><span style="font-family: -apple-system, 'font-weight:700; color: #a419d3; vertical-align: baseline;';">在</span><span style="font-family: -apple-system, 'font-weight:700; color: #0188fb; vertical-align: baseline;'; color: #0188fb;">(0,0)高度7</span><span style="font-family: -apple-system, 'font-weight:700; color: #a419d3; vertical-align: baseline;';">的位置生成一个</span><span style="font-family: -apple-system, 'font-weight:700; color: #2741b1; vertical-align: baseline;'; color: #2741b1;">基石</span><span style="font-family: -apple-system, 'font-weight:700; color: #a419d3; vertical-align: baseline;';">，</span><span style="font-family: -apple-system, 'font-weight:700; color: #cc0000; vertical-align: baseline;'; color: #e03e2d;">数据</span><span style="font-family: -apple-system, 'font-weight:700; color: #a419d3; vertical-align: baseline;';">为</span><span style="font-family: -apple-system, 'font-weight:700; color: #0188fb; vertical-align: baseline;'; color: #0188fb;">0</span></strong></span></p></td></tr></tbody></table>

也就是说，只要调用这个接口，传入**被点击的坐标**、**金块id**和**方块数据**(这里不用考虑，传入0即可)，就可以把**指定坐标的方块设置为金块**。

那么如何获取“被点击的位置”呢？通过查询**方块事件**列表：

<table style="border-collapse: collapse; width: 500px; border-color: initial; border-style: none;" border="1px"><tbody><tr><td style="width: 139px; border: 1px solid #000000; text-align: center; vertical-align: middle;" colspan="1" rowspan="1" align="" valign="" width="120"><p class="paragraph text-align-type-center pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt" style="text-align: center;"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">Player.ClickBlock</span></p></td><td style="width: 121px; border: 1px solid #000000; text-align: center; vertical-align: middle;" colspan="1" rowspan="1" align="" valign="" width="94"><p class="paragraph text-align-type-center pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt" style="text-align: center;"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">玩家点击方块</span></p></td><td style="width: 273px; border: 1px solid #000000; text-align: left; vertical-align: middle;" colspan="1" rowspan="1" align="" valign="middle" width="225"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">eventobjid：点击方块的玩家迷你号</span></p><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">blockid：被点击的方块id</span></p><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">x,y,z：被点击的方块坐标</span></p></td></tr></tbody></table>

可以看到，“**玩家点击方块**”这个事件参数共有**{eventobjid,blockid,x,y,z}**五个值，其中**x、y、z**就是我们需要的**坐标值**，另外还需要**blockid**来判断**被点击的方块**是否为石头。迷你里**注册事件监听**的脚本代码为：

**ScriptSupportEvent:registerEvent(\[=\[事件名\]=\],函数名)**

比如这里我们需要监听事件“**玩家点击方块**”，那么就需要(函数名是任意的)：

``` lua
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=],click)
```

然后新建click函数：

``` lua
local function click(e)
    if e.blockid==104 then
        Block:setBlockAll(e.x,e.y,e.z,400,0)
    end
end
```

这里**104**是石头的id，**400**是金矿的id。完整代码如下：

``` lua
local function click(e)
    if e.blockid==104 then
       Block:setBlockAll(e.x,e.y,e.z,400,0)
    end
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=],click)

```

这样就实现了一个简单的**小功能**；各种**小功能**组合起来就可以实现复杂有趣的**玩法**。如果需要更详细的讲解可以参考[**迷你世界脚本教程**](https://dev-wiki.mini1.cn/wiki/1351.html?id=1351)。或者查看我们准备的[**Lua编程基础课程**](https://dev-wiki.mini1.cn/courses/1156)，以及[**Lua实例应用课程**](https://dev-wiki.mini1.cn/old/courses/1182)。

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1352)游戏内ID查询方法**


_强烈推荐使用此方法在游戏内查询ID，更新快且查询方便_

#### **方法一：**

第一步：点击编辑框上方“ID库”，选择要查询的ID类型

![](https://image.mini1.cn/d/20210719/64b695626baa55a542463648c1968322.png)

第二步：左侧选择分类，点击对象即可显示对应ID

![](https://image.mini1.cn/d/20210719/79ba7ed4b3be933579aaac7c16af49d9.png)

第三步：点击“插入ID”即可直接输入使用

![](https://image.mini1.cn/d/20210719/0a17d3327b78aded87a22eac949ebf6e.png)

#### **方法二：**

第一步：使用快捷键“Ctrl+I”，或右键单击输入框任意位置，选择“插入ID”

![](https://image.mini1.cn/d/20210719/bb5812f45ea5176f2a8d034055f54fb0.png)

第二步：在弹出的“ID搜索工具”窗口输入要查询的对象名称，即可直接搜索ID

![](https://image.mini1.cn/d/20210719/e6874125bad98c8c1ef6593dc487abba.png)

第三步：点击搜索列表即可输入使用

![](https://image.mini1.cn/d/20210719/55ff83a49a666bb2eba7745f49845f50.png)

``` 动效id
-- UI动效表数据

-- 显示动效
10001 渐显
10002 放大显示
10003 缩小显示

-- 隐藏动效
20001 渐显
20002 放大显示
20003 缩小显示

-- 循环动效
30001 颤抖
30002 跳动
30003 心跳
30004 摇摆
30005 旋转
30006 翻转
30007 顺时针扫描
30008 逆时针扫描
30009 闪烁

-- 文字动效
40001 打字机
```


### 事件列表：Event

彼得兔 更新时间: 2024-07-26 12:04:51

直接添加要监听的事件即可，无需自行创建事件管理对象。具体例子如下：

``` lua
--游戏事件---
ScriptSupportEvent:registerEvent([=[Game.Start]=], Game_StartGame)
ScriptSupportEvent:registerEvent([=[Game.Run]=], Game_Update)
ScriptSupportEvent:registerEvent([=[Game.End]=], Game_GameOver)
--玩家事件---
ScriptSupportEvent:registerEvent([=[Player.Die]=], Player_Dead)
ScriptSupportEvent:registerEvent([=[Player.Revive]=], Player_Revive)
ScriptSupportEvent:registerEvent([=[Player.AddItem]=], BackPack_AddItem)
--方块事件---
ScriptSupportEvent:registerEvent([=[Block.Add]=], Block_Add)
ScriptSupportEvent:registerEvent([=[Block.DestroyBy]=], Block_Destroy)
ScriptSupportEvent:registerEvent([=[Block.Trigger]=], Block_Trigger)
```

**目录**

*   [世界事件：地图内相关的事件](#世界事件-world)
*   [游戏逻辑：游戏逻辑相关的事件](#游戏逻辑-Game)
*   [玩家事件：玩家相关的事件](#玩家事件-Player)
*   [生物事件：生物(非玩家)相关的事件](#生物事件-Actor)
*   [方块事件：游戏内方块相关的事件](#方块事件-Block)
*   [道具事件：道具相关的事件](#道具事件-Item)
*   [特效事件：特效相关的事件](#特效事件-Particle)
*   [UI事件：自定义UI的事件](#UI事件-UI)
*   [其他事件：其他事件](#其他事件-)

#### 世界事件 (World)

<table style="border-collapse: collapse;"><colgroup><col width="174"><col width="163"><col width="208"><col width="279"></colgroup><tbody><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>名称</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>用法描述</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>接口参数</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>参数说明</strong></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Backpack.ItemChange</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">容器内道具变化</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">blockid,itemid,itemnum,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">方块类型,道具类型,道具数量,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Backpack.ItemPutIn</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">容器内有道具放入</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">blockid,itemid,itemnum,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">方块类型,道具类型,道具数量,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Backpack.ItemTakeOut</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">容器内有道具取出</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">blockid,itemid,itemnum,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">方块类型,道具类型,道具数量,方块坐标</td></tr></tbody></table>

#### 游戏逻辑 (Game)

<table style="border-collapse: collapse;"><colgroup><col width="174"><col width="163"><col width="208"><col width="279"></colgroup><tbody><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>名称</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>用法描述</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>接口参数</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>参数说明</strong></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Game.Hour</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">世界小时时间变化</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">hour</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">游戏小时时间</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Game.RunTime</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">世界Tick变化</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">second,ticks</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">游戏分钟,游戏秒</td></tr></tbody></table>

#### 玩家事件 (Player)

<table style="border-collapse: collapse; width: 900px; height: 1598px;" border="1px"><colgroup><col width="174"><col width="163"><col width="208"><col width="279"></colgroup><tbody><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><strong>名称</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><strong>用法描述</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><strong>接口参数</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><strong>参数说明</strong></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Game.AnyPlayer.Defeat</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">任一玩家失败</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,shortix,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,快捷栏索引,坐标位置</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Game.AnyPlayer.EnterGame</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">任一玩家进入</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,shortix,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,快捷栏索引,坐标位置</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Game.AnyPlayer.LeaveGame</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">任一玩家离开</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,shortix,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,快捷栏索引,坐标位置</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Game.AnyPlayer.Victory</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">任一玩家胜利</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,shortix,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,快捷栏索引,坐标位置</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.AddBuff</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家获得状态效果</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,buffid,bufflvl</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,状态ID,状态等级</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.AddItem</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家获得道具</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,itemid,itemnum</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,道具类型,道具数量</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.AreaIn</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家进入区域</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,areaid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,区域ID</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.AreaOut</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家离开区域</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,areaid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,区域ID</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.AttackHit</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家击中目标</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,targetactorid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,被攻击的对象</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.Attack</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家攻击</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,shortix,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家攻击</td></tr><tr style="height: 92px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">Player.BackPackChange</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">背包栏变化</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>eventobjid,itemid,</p><p>itemnum,itemix</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>事件玩家,道具类型,道具数量,</p><p>道具所在格子索引</p></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.BeHurt</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家受到伤害</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,hurtlv</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,伤害值</td></tr><tr style="height: 92px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">Player.ChangeAttr</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">玩家属性变化</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>eventobjid,shortix,playerattr,</p><p>playerattrval,x,y,z</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>事件玩家,快捷栏索引,改变的属性,</p><p>改变的值,坐标位置</p></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.ClickActor</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">点击生物</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,targetactorid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,被点击的对象</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.ClickBlock</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">点击方块</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,blockid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,点击的方块类型,方块位置</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.Collide</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家跟玩家/生物碰撞</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,toobjid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,目标对象</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.ConsumeItem</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家消耗道具</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,itemid,itemnum</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家消耗道具</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.DamageActor</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家造成伤害</td><td style="border: 1px solid #1f2329; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><p><span style="white-space: nowrap;">eventobjid,toobjid,</span></p><p><span style="white-space: nowrap;">targetactorid,hurtlv</span></p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><p>事件玩家,事件目标对象,</p><p>目标玩家,伤害值</p></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.DefeatActor</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家击败目标</td><td style="border: 1px solid #1f2329; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><p><span style="white-space: nowrap;">eventobjid,toobjid,</span></p><p><span style="white-space: nowrap;">targetactorid</span></p></td><td style="border: 1px solid #1f2329; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><p><span style="white-space: nowrap;">事件玩家,事件目标对象,</span></p><p><span style="white-space: nowrap;">被攻击的对象</span></p></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.Die</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家死亡</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,shortix,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,快捷栏索引,坐标位置</td></tr><tr style="height: 92px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">Player.DiscardItem</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">丢弃道具</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>eventobjid,itemid,</p><p>itemnum,toobjid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>事件玩家,道具类型,</p><p>道具数量,掉落物objid</p></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.DismountActor</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家骑乘下</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,targetactorid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,被攻击的对象</td></tr><tr style="height: 92px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">Player.EquipChange</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">装备栏变化</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>eventobjid,itemid,</p><p>itemnum,itemix</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>事件玩家,道具类型,道具数量,</p><p>道具所在格子索引</p></td></tr><tr style="height: 92px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">Player.EquipOff</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">脱下装备</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>eventobjid,itemid,</p><p>itemnum,itemix</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>事件玩家,道具类型,道具数量,</p><p>道具所在格子索引</p></td></tr><tr style="height: 92px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">Player.EquipOn</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">穿上装备</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>eventobjid,itemid,</p><p>itemnum,itemix</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>事件玩家,道具类型,道具数量,</p><p>道具所在格子索引</p></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.InputContent</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">输入字符串</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,content</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,事件中的字符串</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.InputKeyDown</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家按下按键</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,vkey</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,按下的键值</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.InputKeyOnPress</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家长按按键</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,vkey</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,按下的键值</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.InputKeyUp</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家松开按键</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,vkey</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,按下的键值</td></tr><tr style="height: 22px;"><td style="border: 1px solid #1f2329; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><span style="white-space: nowrap;">Player.InvateFriend</span></td><td style="border: 1px solid #1f2329; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><span style="white-space: nowrap;">邀请好友<span style="white-space: pre;"></span></span></td><td style="border: 1px solid #1f2329; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><span style="white-space: nowrap;">eventobjid,toobjid</span></td><td style="border: 1px solid #1f2329; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;"><span style="white-space: nowrap;">事件玩家,事件目标玩家</span></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.LevelModelUpgrade</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家等级发生改变</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.MotionStateChange</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家行为状态变更</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,playermotion</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,行为状态枚举</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.MountActor</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家骑乘上</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,targetactorid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,被攻击的对象</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.MoveOneBlockSize</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家移动(移动一格)</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,shortix,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.NewInputContent</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">从聊天框输入</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,content</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,事件中的字符串</td></tr><tr style="height: 92px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">Player.PickUpItem</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">玩家拾取</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>eventobjid,toobjid,</p><p>itemid,itemnum</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>事件玩家,掉落物objid,</p><p>道具类型ID,道具数量</p></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.PlayAction</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家使用表情动作</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,act</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,动作ID</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.RemoveBuff</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家失去指定状态效果</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,buffid,bufflvl</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,状态ID,状态等级</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.Revive</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">玩家复活</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,shortix,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,快捷栏索引,坐标位置</td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.SelectShortcut</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">快捷栏选择</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,itemid,itemnum</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件玩家,道具类型,道具数量</td></tr><tr style="height: 92px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">Player.ShortcutChange</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">快捷栏变化</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>eventobjid,itemid,</p><p>itemnum,itemix</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>事件玩家,道具类型,道具数量,</p><p>道具所在格子索引</p></td></tr><tr style="height: 22px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">Player.UseGiftPack</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">局部此类包裹道具被使用[]</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">eventobjid,itemid,itemnum</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 22px;">事件对象,道具类型,道具数量</td></tr><tr style="height: 92px;"><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">Player.UseItem</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;">玩家使用道具</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>eventobjid,itemid,</p><p>itemnum,itemix</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center; height: 92px;"><p>事件玩家,道具类型,道具数量,</p><p>道具所在格子索引</p></td></tr></tbody></table>

#### 生物事件 (Actor)

<table style="border-collapse: collapse;"><colgroup><col width="174"><col width="163"><col width="208"><col width="279"></colgroup><tbody><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>名称</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>用法描述</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>接口参数</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>参数说明</strong></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.AddBuff</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">生物获得状态效果</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,actorid,buffid,bufflvl</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,事件生物类型,状态ID,状态等级</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.AreaIn</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">生物进入区域</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,areaid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,区域ID</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.AreaOut</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">生物离开区域</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,areaid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,区域ID</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.AttackHit</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">攻击命中</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,toobjid,</p><p>actorid,targetactorid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>事件生物,攻击对象,事件生物类型,</p><p>攻击对象生物类型</p></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.Attack</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">攻击</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,toobjid,</p><p>actorid,targetactorid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>事件生物,攻击对象,事件生物类型,</p><p>攻击对象生物类型</p></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.BeHurt</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">受到伤害</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,toobjid,</p><p>hurtlv,actorid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,攻击对象,伤害值,事件生物类型</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.Beat</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">生物击败玩家/生物</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,toobjid,</p><p>actorid,targetactorid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>事件生物,攻击对象,事件生物类型,</p><p>攻击对象生物类型</p></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.ChangeAttr</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">属性变化</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,actorid,</p><p>actorattr,actorattrval</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,事件生物类型,属性枚举值,改变的值</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.ChangeMotion</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">生物行为状态变更到[n]</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,actorid,actormotion</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,事件生物类型,动作枚举值</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.Collide</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">碰撞到玩家/生物</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,toobjid,</p><p>actorid,targetactorid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>事件生物,攻击对象,事件生物类型,</p><p>攻击对象生物类型</p></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.Create</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">被创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,actorid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,事件生物类型</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.Damage</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">造成伤害</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,toobjid,hurtlv,</p><p>actorid,targetactorid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>事件生物,攻击对象,伤害值,事件生物类型,</p><p>攻击对象生物类型</p></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.Die</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">死亡</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,toobjid,actorid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,攻击对象,事件生物类型</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.Projectile.Hit</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">投掷物击中</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,toobjid,itemid,</p><p>targetactorid,x,y,z,</p><p>helperobjid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>事件投掷物对象,被击中的对象,道具类型,</p><p>被击中的生物类型,方块坐标,</p><p>投掷物所属对象</p></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Actor.RemoveBuff</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">生物失去状态效果</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,actorid,buffid,bufflvl</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,事件生物类型,状态ID,状态等级</td></tr></tbody></table>

#### 方块事件 (Block)

<table style="border-collapse: collapse;"><colgroup><col width="174"><col width="163"><col width="208"><col width="279"></colgroup><tbody><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>名称</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>用法描述</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>接口参数</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>参数说明</strong></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Block.Add</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">被创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">blockid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">方块类型,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Block.DestroyBy</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">局部此类方块被破坏时</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,blockid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,方块类型,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Block.Dig.Begin</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意方块被挖掘时</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,blockid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,方块类型,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Block.Dig.Cancel</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意方块被挖掘取消</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,blockid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,方块类型,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Block.Dig.End</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">方块被挖</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,blockid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,方块类型,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Block.Remove</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">方块移除</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">blockid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">方块类型,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Block.Trigger</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">活跃/通电</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,blockid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,方块类型,方块坐标</td></tr></tbody></table>

#### 道具事件 (Item)

<table style="border-collapse: collapse;"><colgroup><col width="174"><col width="163"><col width="208"><col width="279"></colgroup><tbody><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>名称</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>用法描述</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>接口参数</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>参数说明</strong></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">DropItem.AreaIn</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">掉落物进入区域</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,areaid,itemid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件掉落物,区域ID,道具类型</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">DropItem.AreaOut</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">掉落物离开区域</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,areaid,itemid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件掉落物,区域ID,道具类型</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Item.Create</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">掉落物被创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,itemid,</p><p>defaultvalue,x,y,z</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件掉落物,道具类型,掉落方式,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Item.Destroy</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">局部此类装备被破坏时</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,itemid,itemnum</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件对象,道具类型,道具数量</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Item.Disappear</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">掉落物消失</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,itemid,itemnum,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件掉落物,道具类型,道具数量,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Item.Pickup</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">掉落物被拾取</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,toobjid,itemid,</p><p>itemnum,x,y,z</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>事件玩家,被拾取的对象,道具类型,</p><p>道具数量,方块坐标</p></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Item.expend</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">局部此类食物道具被消耗</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,itemid,itemnum</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件对象,道具类型,道具数量</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Missile.AreaIn</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">投掷物进入区域</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,areaid,itemid,<p>helperobjid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>事件投掷物,区域ID,道具类型,</p><p>投掷物所属对象</p></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Missile.AreaOut</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">投掷物离开区域</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,areaid,itemid,<p>helperobjid</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件投掷物,区域ID,道具类型,<p>投掷物所属对象</p></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Missile.Create</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">投掷物被创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,itemid,toobjid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,道具类型,事件投掷物,方块坐标</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Particle.Item.OnCreate</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">当特效在掉落物上创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,effectid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件掉落物,特效类型,方块位置</td></tr></tbody></table>

#### 特效事件 (Particle)

<table style="border-collapse: collapse;"><colgroup><col width="174"><col width="163"><col width="208"><col width="279"></colgroup><tbody><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>名称</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>用法描述</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>接口参数</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>参数说明</strong></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Particle.Mob.OnCreate</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意生物身上特效被创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,effectid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件生物,特效类型,方块位置</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Particle.Player.OnCreate</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意玩家身上特效被创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,effectid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,特效类型,方块位置</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Particle.Pos.OnCreate</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意位置上特效被创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">effectid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">特效类型,方块位置</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Particle.Projectile.OnCreate</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意投掷物特效被创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,effectid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件投掷物,特效类型,方块位置</td></tr></tbody></table>

#### UI事件 (UI)

<table style="border-collapse: collapse;"><colgroup><col width="174"><col width="163"><col width="208"><col width="279"></colgroup><tbody><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>名称</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>用法描述</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>接口参数</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>参数说明</strong></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">UI.Button.Click</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">按钮点击</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,CustomUI,uielement</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,事件UI,事件元件</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">UI.Button.TouchBegin</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">按钮按下</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,CustomUI,uielement</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,事件UI</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><div>UI.GLoader3D.Click</div></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><div style="white-space-collapse: preserve;">当前界面的模型被松开</div></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><div style="white-space-collapse: preserve;">eventobjid,CustomUI,uielement</div></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><div><span class="text-only" style="white-space-collapse: preserve;">事件玩家,事件</span><span class="text-only text-with-abbreviation text-with-abbreviation-bottomline windows-bottomline" style="white-space-collapse: preserve;">UI</span><span class="text-only" style="white-space-collapse: preserve;">,事件元件</span></div></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><div style="white-space-collapse: preserve;">UI.GLoader3D.TouchBegin</div></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><div style="white-space-collapse: preserve;">当前界面的模型被按下</div></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><div style="white-space-collapse: preserve;">eventobjid,CustomUI,uielement</div></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><div style="white-space-collapse: preserve;">事件玩家,事件UI,事件元件</div></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">UI.Hide</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">界面被关闭</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,CustomUI</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,事件UI</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">UI.LostFocus</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">自定义ui输入框失去焦点</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>eventobjid,CustomUI,</p><p>uielement,content</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,事件UI,事件元件,输入的内容</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">UI.Show</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">界面被打开</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,CustomUI</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,事件UI</td></tr></tbody></table>

#### 其他事件 (\*)

<table style="border-collapse: collapse;"><colgroup><col width="174"><col width="163"><col width="208"><col width="279"></colgroup><tbody><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>名称</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>用法描述</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>接口参数</strong></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><strong>参数说明</strong></td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">BluePrint.BuildBegin</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">蓝图开始创建</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">areaid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">区域ID</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Craft.end</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意配方合成完成</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,craftid,itemid,itemnum</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件对象,配方ID,道具类型,道具数量</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Developer.BuyItem</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;"><p>任意玩家购买或提取</p><p>商品道具</p></td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,itemid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件对象,道具类型</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Furnace.begin</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意熔炼开始</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">furanceid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">熔炼ID,方块位置</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Furnace.end</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意熔炼结束</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">furanceid,x,y,z</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">熔炼ID,方块位置</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">MiNiVip_1</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">购买迷你大会员1个月</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">MiNiVip_3</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">购买迷你大会员3个月</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Plot.begin</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意剧情开始</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,toobjid,plotid,targetactorid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件对象,目标对象,剧情类型,目标生物类型</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">Plot.end</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">任意剧情结束</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,toobjid,plotid,targetactorid</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件对象,目标对象,剧情类型,目标生物类型</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">QQMusic.PlayBegin</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">QQ音乐开始播放</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">eventobjid,qqMusicId</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">事件玩家,音乐ID</td></tr><tr><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">minitimer.change</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">指定计时器变化</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">timerid,timername,timertime</td><td style="white-space: nowrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: normal; overflow-wrap: normal; text-align: center;">计时器ID,计时器名称,计时器时间</td></tr></tbody></table>



### 游戏规则：GameRule

彼得兔 更新时间: 2023-04-26 18:46:34

游戏规则可直接通过规则名称设置和获取，需注意的是：**大部分规则需要在游戏开始之前设置，也就是在Game.Start事件之前设置，否则规则不会生效。** 用法示例如下：

``` lua
local GameRule = class.GameRule.new()
function InitGameRule()
	GameRule.EndTime = 6  		 --游戏时长
	GameRule.TeamNum = 2         --队伍数量
	GameRule.MaxPlayers = 6      --最大玩家量
	GameRule.StartMode = 0       --开启模式 0:主开
	GameRule.StartPlayers = 1    --最低玩家量 2人
	GameRule.PlayerDieDrops = 1  --死亡掉落 1:true
	GameRule.DisplayScore = 1    --显示比分 1:true
	GameRule.AllowMidwayJoin = 1 --中途加入 1:允许
	GameRule.ScoreKillPlayer = 1 --击杀玩家 得1分
	GameRule.BlockDestroy = 1    --方块可被摧毁 1:true
	GameRule.WinLoseEndTime = 1  --游戏超时结束则全胜
	
	if GameRule.CameraDir ~= 1 then
		GameRule.CameraDir = 1 --设置缺省正视角
	end
end
```

<table style="border-collapse: collapse; width: 800px; height: 2496px; border-color: initial;" border="1px"><tbody><tr><td style="border: 1px solid #000000; width: 32.2382%; text-align: center;"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">名称</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; text-align: center;"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">描述</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.CurTime</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设置的游戏时间</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.TimeLocked</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否锁定时间(0:不锁定 1:锁定)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.Weather</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的天气(0:晴雨交错 1:晴天 2:雨天 3:雷暴)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.MaxPlayers</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的最大玩家数量</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.BlockDestroy</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否可破坏方块(0:不可 1:可以)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.BlockPlace</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否可放置方块(0:不可 1:可以)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.BlockUse</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否可使用方块(0:不可 1:可以)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.GravityFactor</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的重力倍数(0.1到10之间)</span></p></td></tr><tr style="height: 76px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 76px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.CameraDir</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 76px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的视角(0:主视角 1:背视角 2:正视角 3:锁定主视角 4:锁定背视角 5:锁定正视角 6:锁定俯视角 7:锁定自定义视角 8:背视角2 9:锁定背视角2)</span></p></td></tr><tr style="height: 92px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 92px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.StartMode</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 92px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的游戏开启模式</span></p><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">(0:房主开启 1:达到人数自动开启 2:不限条件自动开启)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.StartPlayers</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的开启游戏需求人数</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.TeamNum</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的队伍数量</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.AttackPlayerMode</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的攻击模式(0:队伍间攻击 1:禁止攻击玩家 2:自由攻击)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.EndTime</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的游戏是否限时(0:不限时 1-60:限时1-60分钟)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.EndScore</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否达到分数获得胜利(0:否 1-999:达到1-999分获得胜利)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ScoreKillPlayer</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的战胜玩家得分分数</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ScoreKillMob</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的战胜怪物得分分数</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ScoreCollectStar</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的获得星星得分分数</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ReviveMode</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的再次挑战时间(0:默认 1-320:死亡后1-320秒自动复活)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ReviveInvulnerable</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的再次挑战保护时间(1到99秒之间，0为默认5秒)</span></p></td></tr><tr style="height: 92px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 92px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.DisplayName</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 92px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的玩家名显示模式</span></p><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">(0:所有人可见 1:仅己方队伍可见 2:仅敌方队伍可见 3:全部不可见)</span></p></td></tr><tr style="height: 92px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 92px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.WinLoseEndTime</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 92px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的时间结束胜利判定</span></p><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">(0:分数高的队伍获胜 1:时间结束全体胜利 2:时间结束全体失败)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.SaveMode</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否退出重置(0:否 1:是)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.KillNotify</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否开启战斗提示(0:否 1:是)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.BgMusicMode</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的游戏背景音乐(-1:无音乐 0:默认 1-8:bgm1-8)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.MobGen</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否生成怪物(-1:创建时没有勾选生成怪物 0:否 1:是)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.SpawnPtMode</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的集结点规则(0:随机到小队集结点 1:到最近小队集结点)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.MinimapTeams</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的地图显示选项(0:不同队伍可见 1:不同队伍不可见)</span></p></td></tr><tr style="height: 92px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 92px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.PlayerDieDrops</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 92px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的玩家战败是否掉落物品</span></p><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">(0:正常掉落 1:清空背包 2:保留物品 3:掉落箱子)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.DisplayScore</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否显示比分和时间(0:否 1:是)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.LifeNum</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否限制游戏生命数(0:不限制 1-99:限制生命数为1-99)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ShowSight</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否显示准心(0:不显示 1:显示)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ScoreColorChange</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的染色得分分数</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.GPoisonSwitch</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否开启污染区(0:否 1:是)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.GPoisonSafeD0</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的第一个安全区半径(1到100区块)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.GPoisonSafeT0</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的第一段安全时间(1到600秒)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.AllowMidwayJoin</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否允许中途加入游戏(0:否 1:是)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.LifeNumTeamShare</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否开启队伍共用生命数(0:否 1是)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ViewMode</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否开启失败观战(0:否 1:是)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ViewType</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的观战类型(0:自由观战 1:跟随屏幕 2:可切换)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.CountDown</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的游戏开启倒计时时长(1到100秒)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ScoreResetRound</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的是否开启回合模式(0:否 1:是)</span></p></td></tr><tr style="height: 54px;"><td style="border: 1px solid #000000; width: 32.2382%; height: 54px; text-align: center;" align="" valign="" width="196"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">GameRule.ResetScore</span></p></td><td style="border: 1px solid #000000; width: 64.3975%; height: 54px; text-align: center;" align="" valign="" width="481"><p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><span style="font-size: 16px; font-family: -apple-system, 'color:#333333; vertical-align: baseline;';">编辑模式设定的达到分数重置的分数(1至100)</span></p></td></tr></tbody></table>



### 世界接口：World

彼得兔 更新时间: 2024-06-04 09:40:40

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [isDaytime(...)](#isdaytime) | 是否为白天 |
| 2 | [isCustomGame(...)](#iscustomgame) | 是否为自定义游戏 |
| 3 | [isCreativeMode(...)](#iscreativemode) | 是否为创造模式 |
| 4 | [isGodMode(...)](#isgodmode) | 多人创造模式 或者 自制玩法的编辑模式 |
| 5 | [isExtremityMode(...)](#isextremitymode) | 极限模式 |
| 6 | [isFreeMode(...)](#isfreemode) | 冒险模式之自由模式 |
| 7 | [isSurviveMode(...)](#issurvivemode) | 单人模式 或者 冒险模式之自由模式 |
| 8 | [isCreateRunMode(...)](#iscreaterunmode) | 由创造模式转的生存 |
| 9 | [isGameMakerMode(...)](#isgamemakermode) | 自制玩法的编辑模式 |
| 10 | [isGameMakerRunMode(...)](#isgamemakerrunmode) | 自制玩法的运行模式 |
| 11 | [getHours(...)](#gethours) | 获取游戏当前时间(h) |
| 12 | [setHours(...)](#sethours) | 设置游戏当前时间(h) |
| 13 | [getCameraEditState(...)](#getcameraeditstate) | 获取视角编辑状态 |
| 14 | [setCameraEditState(...)](#setcameraeditstate) | 设置视角编辑状态 |
| 15 | [getCustomCameraConfig(...)](#getcustomcameraconfig) | 获取自定义相机配置 |
| 16 | [getRangeXZ(...)](#getrangexz) | 获取区块(chunk)范围，返回区块始末位置 |
| 17 | [getRayLength(...)](#getraylength) | 计算指定方向射线长度(遇到方块结束) |
| 18 | [getRayBlock(...)](#getrayblock) | 射线打到的方块类型(遇到方块结束) |
| 19 | [getActorsByBox(...)](#getactorsbybox) | 获取范围内actor,type参考OBJ\_TYPE，0表示范围内全部的actor, 返回数量和objid数组 |
| 20 | [getPlayerTotal(...)](#getplayertotal) | 获取全部玩家数量，默认全部玩家 |
| 21 | [getAllPlayers(...)](#getallplayers) | 获取全部玩家,可限制存活情况(0表示阵亡，1表示存活)，默认全部玩家  |
| 22 | [randomOnePlayer(...)](#randomoneplayer) | 随机获取一名玩家 |
| 23 | [despawnActor(...)](#despawnactor) | 移除actor |
| 24 | [spawnCreature(...)](#spawncreature) | 生成生物(包括怪物、NPC、动物等) |
| 25 | [despawnCreature(...)](#despawncreature) | 移除生物 |
| 26 | [spawnItem(...)](#spawnitem) | 在指定位置生成道具 |
| 27 | [despawnItemByBox(...)](#despawnitembybox) | 移除道具(通过区域) |
| 28 | [despawnItemByObjid(...)](#despawnitembyobjid) | 移除道具(通过ID) |
| 29 | [spawnProjectile(...)](#spawnprojectile) | 生成投掷物 |
| 30 | [spawnProjectileByDir(...)](#spawnprojectilebydir) | 生成投掷物(通过方向) |
| 31 | [calcDistance(...)](#calcdistance) | 计算位置之间的距离 |
| 32 | [playParticalEffect(...)](#playparticaleffect) | 在指定位置播放特效 |
| 33 | [stopEffectOnPosition(...)](#stopeffectonposition) | 停止指定位置的特效 |
| 34 | [setEffectScaleOnPosition(...)](#seteffectscaleonposition) | 设置指定位置的特效大小 |
| 35 | [randomParticleEffectID(...)](#randomparticleeffectid) | 随机特效类型，随机返回一种特效ID |
| 36 | [playSoundEffectOnPos(...)](#playsoundeffectonpos) | 在指定位置上播放指定音效 |
| 37 | [stopSoundEffectOnPos(...)](#stopsoundeffectonpos) | 停止指定位置上的指定音效 |
| 38 | [getLightByPos(...)](#getlightbypos) | 获取光照强度 |
| 39 | [setBlockLightEx(...)](#setblocklightex) | 设置光照强度 |
| 40 | [randomSoundID(...)](#randomSoundID) | 随机出来的音乐ID |
| 41 | [randomWeatherID(...)](#randomWeatherID) | 随机出来的天气ID |
| 42 | [getLocalDate(...)](#getLocalDate) | 获取主机时间 |
| 43 | [getLocalDateString(...)](#getLocalDateString) | 获取完整设备时间 |
| 44   | [getServerDate(...)](#getServerDate) | 获取服务器时间 |
| 45   | [getServerDateString(...)](#getServerDateString) | 获取完整服务器时间 |
| 46   | [getDateFromTime(...)](#getDateFromTime) | 转换时间戳为时间单位 |
| 47   | [getDateStringFromTime(...)](#getDateStringFromTime) | 转换时间戳为完整时间 |
| 48   | [getTimeFromDateString(...)](#getTimeFromDateString) | 转换完整时间为时间戳 |
| 49   | [SetTimeVanishingSpeed(...)](#SetTimeVanishingSpeed) | 设置天空盒时间流逝速度 |
| 50   | [SetSkyBoxTemplate(...)](#SetSkyBoxTemplate) | 设置天空盒模板 |
| 51   | [SetSkyBoxMaps(...)](#SetSkyBoxMaps) | 设置天空盒贴图 |
| 52   | [SetSkyBoxColor(...)](#SetSkyBoxColor) | 设置天空盒颜色参数 |
| 53   | [SetSkyBoxAttr(...)](#SetSkyBoxAttr) | 设置天空盒属性参数 |
| 54   | [SetSkyBoxFilter(...)](#SetSkyBoxFilter) | 设置天空盒滤镜参数（包括滤镜模板） |
| 55   | [SetSkyBoxSwitch(...)](#SetSkyBoxSwitch) | 天空盒属性开关 |
| 56   | [SetSkyBoxFilterSwitch(...)](#SetSkyBoxFilterSwitch) | 天空盒滤镜属性开关 |
| 57   | [SetGroupWeather(...)](#SetGroupWeather) | 设置天气组天气 |
| 58   | [GetGroupWeather(...)](#GetGroupWeather) | 获取天气组天气 |
| 59   | [SetSkyBoxMapsAnim(...)](#SetSkyBoxMapsAnim) | 设置天空盒贴图(带动效) |
| 60   | [SetSkyBoxColorAnim(...)](#SetSkyBoxColorAnim) | 设置某玩家天空盒全部时间点的颜色参数(带动效) |
| 61   | [SetSkyBoxFilterAnim(...)](#SetSkyBoxFilterAnim) | 设置天空盒滤镜参数(带动效，可切换滤镜模板) |

#### isDaytime

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   code:number成功(ErrorCode.OK)[ErrorCode](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)
*   该方法的主要作用：是否为白天
    
*   具体使用案例如下：
    

``` lua
--判断现在是不是白天
local result=World:isDaytime()
if result==0 then--如果是白天
    Chat:sendSystemMsg("现在是白天！")
else--如果不是白天
    Chat:sendSystemMsg("现在是晚上！")
end
```

#### isCustomGame

*   参数及类型：无
    
*   返回值及类型：
    
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用：是否为自定义游戏
    
*   具体使用案例如下：
    

``` lua
--判断是不是自定义游戏
local result=World:isCustomGame()
if result==0 then--如果是自定义
    Chat:sendSystemMsg("当前是自定义游戏！")
else--如果不是自定义
    Chat:sendSystemMsg("当前不是自定义游戏！")
end
```

#### isCreativeMode

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：是否为创造模式
    
*   具体使用案例如下：
    

``` lua
--判断是不是创造模式
local result=World:isCreativeMode()
if result==0 then--如果是创造模式
    Chat:sendSystemMsg("当前是创造模式！")
else--如果不是创造模式
    Chat:sendSystemMsg("当前不是创造模式！")
end
```

#### isGodMode

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：多人创造模式 或者 自制玩法的编辑模式
    
*   具体使用案例如下：
    

``` lua
--判断是不是多人创造模式或者玩法编辑模式
local result=World:isGodMode()
if result==0 then--如果是多人创造或者玩法编辑
    Chat:sendSystemMsg("当前是多人创造或玩法编辑模式！")
else--如果不是
    Chat:sendSystemMsg("当前不是多人创造或玩法编辑模式！")
end
```

#### isExtremityMode


*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：极限模式
    
*   具体使用案例如下：
    

``` lua
--判断是不是极限模式
local result=World:isExtremityMode()
if result==0 then--如果是极限模式
    Chat:sendSystemMsg("当前是极限模式！")
else--如果不是极限模式
    Chat:sendSystemMsg("当前不是极限模式！")
end
```

#### isFreeMode

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：冒险模式之自由模式
    
*   具体使用案例如下：
    

``` lua
--判断是不是冒险自由模式
local result=World:isFreeMode()
if result==0 then--如果是冒险自由模式
    Chat:sendSystemMsg("当前是冒险自由模式！")
else--如果不是
    Chat:sendSystemMsg("当前不是冒险自由模式！")
end
```

#### isSurviveMode


*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：单人模式 或者 冒险模式之自由模式
    
*   具体使用案例如下：
    

``` lua
--判断是不是单人生存模式
local result=World:isSurviveMode()
if result==0 then--如果是单人生存模式
    Chat:sendSystemMsg("当前是单人生存模式！")
else--如果不是单人生存模式
    Chat:sendSystemMsg("当前不是单人生存模式！")
end
```

#### isCreateRunMode

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：由创造模式转的生存
    
*   具体使用案例如下：
    

``` lua
--判断是不是创造转生存模式
local result=World:isCreateRunMode()
if result==0 then--如果是创造转生存模式
    Chat:sendSystemMsg("当前是创造转生存模式！")
else--如果不是创造转生存模式
    Chat:sendSystemMsg("当前不是创造转生存模式！")
end
```

#### isGameMakerMode

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：自制玩法的编辑模式
    
*   具体使用案例如下：
    

``` lua
--判断是不是玩法编辑模式
local result=World:isGameMakerMode()
if result==0 then--如果是玩法编辑模式
    Chat:sendSystemMsg("当前是玩法编辑模式！")
else--如果不是玩法编辑模式
    Chat:sendSystemMsg("当前不是玩法编辑模式！")
end
```

#### isGameMakerRunMode

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：自制玩法的运行模式
    
*   具体使用案例如下：
    

``` lua
--判断是不是玩法运行模式
local result=World:isGameMakerRunMode()
if result==0 then--如果是玩法运行模式
    Chat:sendSystemMsg("当前是玩法运行模式！")
else--如果不是玩法运行模式
    Chat:sendSystemMsg("当前不是玩法运行模式！")
end
```

#### getHours

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取游戏当前时间(h)
    
*   具体使用案例如下：
    

``` lua
--获取当前时间
local result,time=World:getHours()
--在聊天框显示
Chat:sendSystemMsg("现在是"..time.."点！")
```

#### setHours


*   参数及类型：
    
    *   hour:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)小时时间
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置游戏当前时间(h)
    
*   具体使用案例如下：
    

``` lua
--设置时间为8点
World:setHours(8)
--在聊天框显示
Chat:sendSystemMsg("时间设置为8点！")
```

#### getCameraEditState

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   state:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)0默认，1编辑状态，2测试状态
*   该方法的主要作用：获取视角编辑状态
    
*   具体使用案例如下：
    

``` lua
--获取当前视角编辑状态
local result,state=World:getCameraEditState()
if state==0 then--0:默认
    Chat:sendSystemMsg("当前视角编辑状态为:默认")
elseif state==1 then--1:编辑中
    Chat:sendSystemMsg("当前视角编辑状态为:编辑中")
elseif state==2 then--2:测试中
    Chat:sendSystemMsg("当前视角编辑状态为:测试中")
end
```

#### setCameraEditState

*   参数及类型：
    
    *   state:[**`CameraEditState`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%86%E8%A7%92%E7%BC%96%E8%BE%91%E7%8A%B6%E6%80%81)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置视角编辑状态
    
*   具体使用案例如下：
    

``` lua
local result = World:setCameraEditState(state)
```

#### getCustomCameraConfig

*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   config:[**`CameraEditState`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%86%E8%A7%92%E7%BC%96%E8%BE%91%E7%8A%B6%E6%80%81)
*   该方法的主要作用：获取自定义相机配置
    
*   具体使用案例如下：
    

``` lua
local result = World:getCustomCameraConfig()
```

#### getRangeXZ


*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   startX,startZ,endX,endZ:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区块(chunk)范围，返回区块始末位置
    
*   具体使用案例如下：
    

``` lua
--获取区块范围
local result,startX,startZ,endX,endZ=World:getRangeXZ()
Chat:sendSystemMsg("区块起点横坐标："..startX)
Chat:sendSystemMsg("区块起点纵坐标："..startZ)
Chat:sendSystemMsg("区块终点横坐标："..endX)
Chat:sendSystemMsg("区块终点纵坐标："..endZ)
```

#### getRayLength


*   参数及类型：
    
    *   srcx,srcy,srcz:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起始点坐标
    *   dstx,dsty,dstz:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点坐标
    *   distance:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)预测的最大距离
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   length:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)两点间的长度
*   该方法的主要作用：计算指定方向射线长度(遇到方块结束)
    
*   具体使用案例如下：
    

``` lua
local function ClickBlock(event)
    local srcx,srcy,srcz=0,7,0--计算起点
    local dstx,dsty,dstz=0,7,10--计算终点(方向)
    local distance=1--计算距离(意义不明)
	--获取从起点开始，向终点方向到第一个方块的距离
    local result,length=World:getRayLength(srcx, srcy, srcz, dstx, dsty, dstz, distance)
    Chat:sendSystemMsg(math.floor(length))
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getRayBlock


*   参数及类型：
    
    *   srcx,srcy,srcz:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起始点
    *   face:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   distance:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：射线打到的方块类型(遇到方块结束)
    
*   具体使用案例如下：
    

``` lua
--获取从(0,0)高度10开始，向北50格内碰到的第一个方块id
--方向参数：0西 1东 2南 3北 4下 5上
local result,blockid=World:getRayBlock(0,10,0,3,50)
if id==-1 then--如果50格内没有方块
    Chat:sendSystemMsg("从(0,0)高度10开始，向北50格没有方块")
else--如果50格内有方块
    Chat:sendSystemMsg("从(0,0)高度10开始，向北50格第一个方块id是"..blockid)
end
```

#### getActorsByBox


*   参数及类型：
    
    *   objtype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)指定类型
    *   x1,y1,z1:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起始位置
    *   x2,y2,z2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)最终位置
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   objids:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)objid数组
*   该方法的主要作用：获取范围内actor,type参考OBJ\_TYPE，返回数量和objid数组
    
*   具体使用案例如下：
    

``` lua
--参数：
local objtype=1--类型参数：1玩家 2生物 3掉落物 4投掷物
local x1,y1,z1=0,7,0--区域起点坐标
local x2,y2,z2=50,57,50--区域终点坐标
--获取(x0,z0)高度y0到(x1,z1)高度y1范围内，类型为type的物品数量与列表
local result,num,objids=World:getActorsByBox(objtype,x1,y1,z1,x2,y2,z2)
--在聊天框显示数量
Chat:sendSystemMsg("在范围内一共有"..num.."个玩家")
--在聊天框显示列表
for i,a in ipairs(objids) do
    Chat:sendSystemMsg("第"..i.."个:"..a)
end
```

#### getPlayerTotal


*   参数及类型：
    
    *   alive:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)0表示阵亡，1表示存活，默认-1表示全体玩家
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)数量
*   该方法的主要作用：获取全部玩家数量，默认全部玩家
    
*   具体使用案例如下：
    

```
--获取当前存档玩家总数
local result,num=World:getPlayerTotal(-1)
Chat:sendSystemMsg("当前存档玩家总数为："..num)
--获取当前存档阵亡玩家数
result,num=World:getPlayerTotal(0)
Chat:sendSystemMsg("当前存档阵亡玩家数为："..num)
--获取当前存档存活玩家数
result,num=World:getPlayerTotal(1)
Chat:sendSystemMsg("当前存档存活玩家数为："..num)
```

#### getAllPlayers


*   参数及类型：
    
    *   alive:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)0表示阵亡，1表示存活，默认-1表示全体玩家
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)数量
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID数组
*   该方法的主要作用：获取全部玩家,可限制存活情况(0表示阵亡，1表示存活)，默认全部玩家
    
*   具体使用案例如下：
    

```
--获取当前存档全部玩家列表
--参数：-1全部玩家 0阵亡玩家 1存活玩家
local result,num,array=World:getAllPlayers(-1)
--在聊天框显示数量
Chat:sendSystemMsg("当前存档一共有"..num.."个玩家")
--在聊天框显示列表
for i,a in ipairs(array) do
    Chat:sendSystemMsg("第"..i.."个:"..a)
end
```

#### randomOnePlayer


*   参数及类型：
    
    *   alive:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)0表示阵亡，1表示存活，默认-1表示全体玩家
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：随机选取一名玩家
    
*   具体使用案例如下：
    

```
--从全部玩家中随机选取一名玩家
--参数：-1全部玩家 0阵亡玩家 1存活玩家
local result,playerid=World:randomOnePlayer(-1)
--在聊天框显示
Chat:sendSystemMsg("随机选取了一名玩家："..playerid)
```

#### despawnActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除actor
    
*   具体使用案例如下：
    

```
--参数：
local type=2--类型参数：1玩家 2生物 3掉落物 4投掷物
local x0,y0,z0=0,7,0--区域起点坐标
local x1,y1,z1=50,57,50--区域终点坐标
--获取(x0,z0)高度y0到(x1,z1)高度y1范围内，类型为type的物品数量与列表
local result,n,actors=World:getActorsByBox(type,x0,y0,z0,x1,y1,z1)
if n>0 then--如果范围内生物数量大于0
    --移除其中一个生物
    World:despawnActor(actors[1])
    --在聊天框显示
    Chat:sendSystemMsg("移除了"..actors[1])
else--如果范围内没有生物
    --在聊天框显示
    Chat:sendSystemMsg("(0,7,0)至(50,57,50)范围内没有生物")
end
```

#### spawnCreature


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actorid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   objids:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)objid数组
*   该方法的主要作用：生成生物(包括怪物、NPC、动物等)
    
*   具体使用案例如下：
    

```
--在(0,0)高度7的位置生成3只鸡
--前三个参数0,7,0是生成坐标
--第四个参数3400是生成的生物id
--最后一个参数3是生成的数量
local result,objids=World:spawnCreature(0,7,0,3400,3)
--在聊天框显示提示
Chat:sendSystemMsg("在(0,0)高度7的位置生成了3只鸡，它们在存档中的id分别是：")
--在聊天框显示id列表
for i=1,#objids do
    Chat:sendSystemMsg(objids[i])
end
```

#### despawnCreature


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除生物
    
*   具体使用案例如下：
    

```
--参数：
local type=2--类型参数：1玩家 2生物 3掉落物 4投掷物
local x0,y0,z0=0,7,0--区域起点坐标
local x1,y1,z1=50,57,50--区域终点坐标
--获取(x0,z0)高度y0到(x1,z1)高度y1范围内，类型为type的物品数量与列表
local result,n,actors=World:getActorsByBox(type,x0,y0,z0,x1,y1,z1)
if n>0 then--如果范围内生物数量大于0
    --移除其中一个生物
    World:despawnCreature(actors[1])
    --在聊天框显示
    Chat:sendSystemMsg("移除了"..actors[1])
else--如果范围内没有生物
    --在聊天框显示
    Chat:sendSystemMsg("(0,7,0)至(50,57,50)范围内没有生物")
end
```

#### spawnItem


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：在指定位置生成道具
    
*   具体使用案例如下：
    

```
--在(0,0)高度7的位置生成3个土块
--前三个参数0,7,0是生成坐标
--第四个参数101是生成的物品id
--最后一个参数3是生成的数量
local result,objid=World:spawnItem(0,7,0,101,3)
--在聊天框显示提示
Chat:sendSystemMsg("在(0,0)高度7的位置生成了3个土块，它们在存档中的id是"..objid)
```

#### despawnItemByBox


*   参数及类型：
    
    *   x1,y1,z1:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起始位置
    *   x2,y2,z2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)最终位置
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除道具(通过区域)
    
*   具体使用案例如下：
    

```
--移除指定区域内所有掉落物
--前三个参数为区域起点坐标
--后三个参数为区域终点坐标
World:despawnItemByBox(-20,0,-20,20,50,20)
--在聊天框显示
Chat:sendSystemMsg("移除了(-20,0,-20)至(20,50,20)区域内的所有掉落物")
```

#### despawnItemByObjid


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除道具(通过ID)
    
*   具体使用案例如下：
    

```
--每当有玩家做动画表情，移除房主周围10格内的某一掉落物
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
    --获取房主的坐标
    local result,x,y,z=Player:getPosition(0)
    --获取房主周围10格内的掉落物数量和列表
    local result2,num,list=World:getActorsByBox(3,x-10,y-10,z-10,x+10,y+10,z+10)
    if num>0 then--如果存在掉落物
        --移除第一组物品
        World:despawnItemByObjid(list[1])
        --在聊天框显示
        Chat:sendSystemMsg("附近10格发现掉落物品，已移除了其中一组")
    else--如果不存在掉落物
        --在聊天框显示
        Chat:sendSystemMsg("附近10格没有发现掉落物品！")
    end
end
--注册动画表情监听器，当玩家做动画表情时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)
```

#### spawnProjectile


*   参数及类型：
    
    *   shooter:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)设置投掷物归属的objid
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物id
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物起点
    *   dstx,dsty,dstz:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物终点
    *   speed:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物速度
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物的实例ID
*   该方法的主要作用：生成投掷物
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local shooter=event.eventobjid--投掷物发射者的实体id，这里是点击方块的玩家
	local itemid=12054--投掷物id，这里是小雪球
	local x,y,z=event.x,event.y+1,event.z--投掷起点坐标
	local dstx,dsty,dstz=event.x,event.y+10,event.z--向此坐标投掷
	local speed=50--抛出速度
	--创建并发射投掷物
    World:spawnProjectile(shooter, itemid, x, y, z, dstx, dsty, dstz, speed)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### spawnProjectileByDir

*   参数及类型：
    
    *   shooter:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)设置投掷物归属的objid
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物id
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物起点
    *   dstx,dsty,dstz:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物终点
    *   speed:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物速度
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)投掷物的实例ID
*   该方法的主要作用：生成投掷物(通过方向)
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local shooter=event.eventobjid--投掷物发射者的实体id，这里是点击方块的玩家
	local itemid=12054--投掷物id，这里是小雪球
	local x,y,z=event.x,event.y+1,event.z--投掷起点坐标
	local dirx,diry,dirz=0,1,0--向此方向投掷
	local speed=50--抛出速度
	--创建并发射投掷物
    World:spawnProjectileByDir(shooter, itemid, x, y, z, dirx, diry, dirz, speed)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### calcDistance


*   参数及类型：
    
    *   pos1:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起始位置{x,y,z}
    *   pos2:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)最终位置{x,y,z}
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   distance:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：计算位置之间的距离
    
*   具体使用案例如下：
    

```
--计算两点间的直线距离
--第一个参数是由起点坐标组成的表
--第二个参数是由终点坐标组成的表
local result,distance=World:calcDistance({x=0,y=0,z=0},{x=10,y=10,z=10})
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度0到(10,10)高度10的直线距离是"..distance)
```

#### playParticalEffect


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   particleId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效id
    *   scale:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效大小
    *   ptime:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)播放时长（单位：秒，非循环特效如果时长大于一次播放时长，将会重复播放）
    *   bUsePlayerViewRange:[`**boolean**`](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)是否根据视野裁剪范围
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：在指定位置播放特效
    
*   具体使用案例如下：
    

```
--在(0,0)高度7的位置播放烟雾特效
--前三个参数是播放特效的位置坐标
--第四个参数是播放特效的特效id，具体可以在“迷你世界ID查询”的“特效表数据”里查看
--第五个参数是特效的缩放比例
--第六个参数是播放时长，时长大于0时，特效会在设定时间内循环播放，直到时间结束；设置时间小于等于0或为nil时，循环类型的特效会持续播放，非循环类型的特效只播放一次
--最后一个参数可以设定是否根据视野裁剪范围，如果设定为false，特效稍远一点就会被裁剪，如果设定为true，会根据视野来决定裁剪范围

World:playParticalEffect(0,7,0,1001,1,3,true)
--在聊天框显示
Chat:sendSystemMsg("在(0,0)高度7的位置播放烟雾特效3秒，根据视野裁剪")
```

#### stopEffectOnPosition


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   particleId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效id
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：停止指定位置的特效
    
*   具体使用案例如下：
    

```
--停止指定位置的指定特效
--前三个参数是停止播放特效的位置坐标
--最后一个参数是需要停止的特效id
World:stopEffectOnPosition(0,7,0,1001)
--在聊天框显示
Chat:sendSystemMsg("停止了(0,0)高度7位置的1001烟雾特效")
```

#### setEffectScaleOnPosition


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   particleId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效id
    *   scale:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效大小
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置指定位置的特效大小
    
*   具体使用案例如下：
    

```
--缩放指定位置的指定特效
--前三个参数是需要缩放特效的坐标
--第四个参数是需要缩放的特效id
--最后一个参数是设置的缩放比例
World:setEffectScaleOnPosition(0,7,0,1001,2)
--在聊天框显示
Chat:sendSystemMsg("把(0,0)高度7位置的烟雾特效放大了两倍")
```

#### randomParticleEffectID


*   参数及类型：`none`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   result:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效id
*   该方法的主要作用：随机特效类型，随机返回一种特效ID
    
*   具体使用案例如下：
    

```
--获取一个随机特效id
local result,id=World:randomParticleEffectID()
--在聊天框显示
Chat:sendSystemMsg("获取到了一个随机特效id："..id)
```

#### playSoundEffectOnPos


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x,y,z}
    *   soundId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)音效ID
    *   volume:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)音量调节
    *   pitch:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)音调调节
    *   isLoop:[**`bool`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)是否循环播放
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：在指定位置上播放指定音效
    
*   具体使用案例如下：
    

```
--在(0,0)高度7的位置播放音乐10713
--第一个参数为播放音乐的坐标组成的表
--第二个参数10713为播放的音效id，具体可以在“迷你世界ID查询”的“音效表数据”里查看
--后三个参数分别是：音量、音高、是否循环播放
World:playSoundEffectOnPos({x=0,y=7,z=0},10713,100,1,false)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度7的位置正在播放音乐")
```

#### stopSoundEffectOnPos

*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x,y,z}
    *   soundId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：停止指定位置上的指定音效
    
*   具体使用案例如下：
    

```
--在(0,0)高度7的位置播放音乐10713
World:playSoundEffectOnPos({x=0,y=7,z=0},10713,100,1,false)
--在聊天框显示提示
Chat:sendSystemMsg("(0,0)高度7的位置正在播放音乐，做动画表情即可停止播放")
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
    --停止(0,0)高度7位置音乐10713的播放
    --第一个参数为要停止播放音乐的坐标组成的表
    --第二个参数为要停止播放的音乐id，具体可以在“迷你世界ID查询”的“音效表数据”里查看
    World:stopSoundEffectOnPos({x=0,y=7,z=0},10713)
    --在聊天框显示
    Chat:sendSystemMsg("停止了(0,0)高度7音乐10713的播放")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)
```

#### getLightByPos


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   lightlv:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取光照强度
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local x,y,z=event.x,event.y+1,event.z--要获取亮度的坐标，这里是被点击的方块表面(上面1格)
	local result,lightlv=World:getLightByPos(x,y,z)--获取坐标的亮度
	Chat:sendSystemMsg(lightlv)--在聊天框显示
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### setBlockLightEx


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   lv:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置光照强度
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local x,y,z=event.x,event.y+1,event.z--要设置亮度的坐标，这里是被点击的方块表面(上面1格)
	local lv=15--要设置的亮度级别(0-15)
	World:setBlockLightEx(x, y, z, lv)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

[](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)**randomSoundID**

*   参数及类型：
    *   无
*   返回值及类型：
    *   ErrorCode.OK
    *   soundid:number 声音ID
*   该方法的主要作用：随机出来的音乐ID
*   具体使用案例如下：

```
local result,soundid = World:randomSoundID()
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)randomWeatherID**

*   参数及类型：
    *   无
*   返回值及类型：
    *   ErrorCode.OK
    *   wtype:number 天气类型ID
*   该方法的主要作用：随机出来的天气ID
*   具体使用案例如下：

```
local result,wtype = World:randomWeatherID()
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)getLocalDate

*   参数及类型：
    *   enum:EVENTDATE
*   返回值及类型：
    *   ErrorCode.OK
    *   year:number 年日期
*   该方法的主要作用：获取主机时间
*   具体使用案例如下：

```
local result, year = World:getLocalDate(EVENTDATE.YEAR) -- 获取年
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)getLocalDateString**

*   参数及类型：
*   返回值及类型：
    *   ErrorCode.OK
    *   date:string 完整日期
*   该方法的主要作用：获取完整设备时间
*   具体使用案例如下：

```
local result,date = World:getLocalDateString() -- 获取日期
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)getServerDate

*   参数及类型：
    *   enum:EVENTDATEEVENTDATE
*   返回值及类型：
    *   ErrorCode.OK
    *   year:number 年日期
*   该方法的主要作用：获取服务器时间
*   具体使用案例如下：

```
function Game_StartGame(obj) 
    local result, year = World:getServerDate(EVENTDATE.YEAR) -- 获取服务器时间的年
      Chat:sendSystemMsg(year, 0)end
ScriptSupportEvent:registerEvent([=[Game.Start]=], Game_StartGame)
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)getServerDateString**

*   参数及类型：
*   返回值及类型：
    *   ErrorCode.OK
    *   date:string 完整服务器日期
*   该方法的主要作用：获取完整服务器时间
*   具体使用案例如下：

```
function Game_StartGame(obj) 
  local result,date = World:getServerDateString() -- 获取服务器日期
  Chat:sendSystemMsg(date, 0)end
ScriptSupportEvent:registerEvent([=[Game.Start]=], Game_StartGame)
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)getDateFromTime

*   参数及类型：
    *   time:number传入时间戳
    *   enum:EVENTDATE
*   返回值及类型：
    *   ErrorCode.OK
    *   year:number 年日期
*   该方法的主要作用：转换时间戳为时间单位
*   具体使用案例如下：

```
local result, year = World:getDateFromTime(os.time(),EVENTDATE.YEAR) -- 获取年
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)getDateStringFromTime

*   参数及类型：
    *   time:number传入时间戳
*   返回值及类型：
    *    ErrorCode.OK
    *   date:string 完整日期
*   该方法的主要作用：转换时间戳为完整时间
*   具体使用案例如下：

```
local result, date = World:getDateStringFromTime(os.time()) --  完整日期
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)get****Time****From****DateString**

*   参数及类型：
    *   timestr : string 完整时间（例如 2021-03-31 10:05:57， 年月日必填参数 时分秒默认0）
*   返回值及类型：
    *   code : number 成功(ErrorCode.OK) [ErrorCode](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)
    *   time : number 时间戳
*   该方法的主要作用：转换完整时间为时间戳
*   具体使用案例如下：

```
local code ,time = World:getTimeFromDateString(date_str)
if code == ErrorCode.OK then
    print('执行成功' ,time )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetTimeVanishingSpeed**

*   参数及类型：
    *   speed:number天空盒时间
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天空盒时间流逝速度
*   具体使用案例如下：

```
local code  = World:SetTimeVanishingSpeed(speed)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxTemplate

*   参数及类型：
    *   value:number参数值(0-9)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天空盒模板
*   具体使用案例如下：

```
local code  = World:SetSkyBoxTemplate(value)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxMaps**

*   参数及类型：
    *   time:number游戏时间
    *   itype:number贴图类型(SKYBOXMAP)SKYBOXMAP
    *   url:string图片链接
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天空盒贴图
*   具体使用案例如下：

```
local code  = World:SetSkyBoxMaps(itype, url)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxColor**

*   参数及类型：
    *   time:number游戏时间
    *   itype:number颜色属性枚举(SKYBOXCOLOR)SKYBOXCOLOR
    *   color:string16进制颜色值(0xffffff)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天空盒颜色参数
*   具体使用案例如下：

```
local code  = World:SetSkyBoxColor(time, itype, color)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end

```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxAttr**

*   参数及类型：
    *   time:number游戏时间
    *   itype:number参数类型(SKYBOXATTR)SKYBOXATTR
    *   value:number参数值(0~100)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天空盒属性参数
*   具体使用案例如下：

```
local code  = World:SetSkyBoxAttr(time, itype, value)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxFilter**

*   参数及类型：
    *   itype:number参数类型(SKYBOXFILTER)SKYBOXFILTER
    *   value:number:参数值(0~100) 或者 string:16进制颜色值(0xffffff)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天空盒滤镜参数（包括滤镜模板）
*   具体使用案例如下：

```
local code  = World:SetSkyBoxFilter(playerid, itype, value)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxSwitch**

*   参数及类型：
    *   time:number游戏时间
    *   itype:number参数类型(SKYBOXSWITCH)SKYBOXSWITCH
    *   value:number参数值(0~1)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 天空盒属性开关
*   具体使用案例如下：

```
local code  = World:SetSkyBoxSwitch(time, itype, value)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

[](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)**SetSkyBoxFilterSwitch**

*   参数及类型：
    *   itype:number参数类型(SKYBOXFILTERSWITCH)SKYBOXFILTERSWITCH
    *   value:number参数值(0~1)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 天空盒滤镜属性开关
*   具体使用案例如下：

```
local code  = World:SetSkyBoxFilterSwitch(playerid, itype, value)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetGroupWeather**

*   参数及类型：
    *   groupid:number地形组ID(WEATHERGROUP)WEATHERGROUP
    *   weatherid:number天气类型(WEATHERSTATUS)WEATHERSTATUS
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天气组天气
*   具体使用案例如下：

```
local ret  = World:SetGroupWeather(groupid, weatherid)
if ret == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)GetGroupWeather**

*   参数及类型：
    *   groupid:number地形组ID(WEATHERGROUP)
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 获取天气组天气
*   具体使用案例如下：

```
local ret  = World:GetGroupWeather(groupid)
if ret == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxMapsAnim**

*   参数及类型：
    *   time:number游戏时间
    *   itype:number贴图类型(SKYBOXMAP)SKYBOXMAP
    *   url:string图片链接
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天空盒贴图(带动效)
*   具体使用案例如下：

```
local code  = World:SetSkyBoxMapsAnim(playerid, itype, url, animId, animTime)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxColorAnim**

*   参数及类型：
    *   time:number游戏时间
    *   itype:number颜色属性枚举(SKYBOXCOLOR)SKYBOXCOLOR
    *   color:string16进制颜色值(0xffffff)
    *   animId:number动画ID
    *   animTime:number动画时间
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置某玩家天空盒全部时间点的颜色参数(带动效)
*   具体使用案例如下：

```
local code  = World:SetSkyBoxColorAnim(playerid, itype, color, animId, animTime)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxFilterAnim**

*   参数及类型：
    *   itype:number参数类型(SKYBOXFILTER)SKYBOXFILTER
    *   value:number:参数值(0~100) 或者 string:16进制颜色值(0xffffff)
    *   animId:number动画ID
    *   animTime:number动画时间
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天空盒滤镜参数(带动效，可切换滤镜模板)
*   具体使用案例如下：

```
local code  = World:SetSkyBoxFilterAnim(playerid, itype, value, animId, animTime)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1355)SetSkyBoxFilterAnim**

*   参数及类型：
    *   itype:number参数类型(SKYBOXFILTER)SKYBOXFILTER
    *   value:number:参数值(0~100) 或者 string:16进制颜色值(0xffffff)
    *   animId:number动画ID
    *   animTime:number动画时间
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置天空盒滤镜参数(带动效)
*   具体使用案例如下：

```
local code  = World:SetSkyBoxFilterAnim(playerid, itype, value, animId, animTime)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```


### 游戏接口：Game

彼得兔 更新时间: 2024-05-07 15:52:59

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [doGameEnd(...)](#doGameEnd) | 游戏结束 |
| 2 | [dispatchEvent(...)](#dispatchEvent) | 派发自定义事件 |
| 3 | [getDefString(...)](#getDefString) | 获取默认字符串 |
| 4 | [setScriptVar(...)](#setScriptVar) | 设置脚本参数，供自定义使用 |
| 5 | [getScriptVar(...)](#getScriptVar) | 获取脚本参数，自定义使用 |
| 6 | [sendScriptVars2Client(...)](#sendScriptVars2Client) | 上传设置好的脚本参数 |
| 7 | [addRenderGlobalEffect(...)](#addRenderGlobalEffect) | 新增全局效果 |
| 8 | [removeRenderGlobalEffect(...)](#removeRenderGlobalEffect) | 移除全局效果 |
| 9 | [setRenderGlobalEffectPos(...)](#setRenderGlobalEffectPos) | 设置全局效果位置 |
| 10 | [setRenderGlobalEffectScale(...)](#setRenderGlobalEffectScale) | 设置全局效果缩放 |
| 11 | [msgBox(...)](#msgBox) | 消息弹框 |
| 12 | [splitStr(...)](#splitStr) | 分割字符串 |

#### doGameEnd

*   参数及类型： 无
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 游戏结束
*   具体使用案例如下：

```
--每当玩家做动画表情，就会游戏结束
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
    --结束游戏
    Game:doGameEnd(nil)
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)
```

#### dispatchEvent

*   参数及类型：
    *   msgid:string事件ID
    *   params:table事件参数
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 派发自定义事件
*   具体使用案例如下：

```
--派发自定义事件
local function func_event(param)
    -- 自定义事件的数据
    local data = {id = 123,ops = "aaa"}
    -- 将数据转化为json字符串形式
    local ok, json = pcall(JSON.encode, JSON, data)
    -- 派发自定义事件，将json字符串存储在customdata字段中
    Game:dispatchEvent("customevent",{customdata = json})
end
ScriptSupportEvent:registerEvent('Player.PlayAction', func_event)
--自定义事件监听
local function func_event(param)
    -- 从事件数据的customdata字段中取出json字符串，并解码成原先的数据格式
    local ret, data = pcall(JSON.decode,JSON,param.customdata)
    -- 按照原先的格式读取事件的数据
    if data then
        print("id:"..tostring(data.id))
        print("ops:"..data.ops)
    end
end
ScriptSupportEvent:registerEvent('customevent', func_event)
```

#### getDefString

*   参数及类型：
    *   id:string字符串ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   str:string获取到的字符串
*   该方法的主要作用： 获取默认字符串
*   具体使用案例如下：

```
--获取id为1的默认字符串，参数1为默认字符串id(不建议使用此接口)
local result,str=Game:getDefString(1)
--在聊天框显示
Chat:sendSystemMsg("id为1的默认字符串内容为："..str)
```

#### setScriptVar**

*   参数及类型：
    *   index:number序列索引(0~100)
    *   val:number索引对应的值
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置脚本参数，供自定义使用
*   具体使用案例如下：

```
local code = Game:setScriptVar(index, val)
if code == ErrorCode.OK then
    print('执行成功', code )
else
    print('执行失败')
end
```

#### getScriptVar

*   参数及类型：
    *   index:number序列索引(0~100)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   val:number索引对应的值
*   该方法的主要作用： 获取脚本参数，自定义使用
*   具体使用案例如下：

```
local code, val = Game:getScriptVar(index)
if code == ErrorCode.OK then
    print('执行成功', code, val )
else
    print('执行失败')
end
```

#### sendScriptVars2Client

*   参数及类型： 无
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 上传设置好的脚本参数
*   具体使用案例如下：

```
local code = Game:sendScriptVars2Client()
if code == ErrorCode.OK then
    print('执行成功', code )
else
    print('执行失败')
end
```

#### addRenderGlobalEffect**

*   参数及类型：
    *   path:string效果名称
    *   effectid:number命名ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 新增全局效果
*   具体使用案例如下：

```
--在游戏添加一个迷雾特效，目前参数只支持一个"particles/Fog.ent"
local result,effectid = Game:addRenderGlobalEffect("particles/Fog.ent")
--在聊天框显示
Chat:sendSystemMsg("添加了一个迷雾效果！id为"..effectid)
```

#### removeRenderGlobalEffect

*   参数及类型：
    *   effectid:number命名ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 移除全局效果
*   具体使用案例如下：

```
--移除id为1的地图特效，参数1为要移除的特效id
Game:removeRenderGlobalEffect(1)
--在聊天框显示
Chat:sendSystemMsg("移除了id为1的地图特效")
```

#### setRenderGlobalEffectPos**

*   参数及类型：
    *   effectid:number命名ID
    *   x,y,z:number方块坐标
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置全局效果位置
*   具体使用案例如下：

```
--把id为1的地图特效移动至(10,10)高度7
--第一个参数为特效id
--后三个参数为移动至坐标
Game:setRenderGlobalEffectPos(1,10,7,10)
--在聊天框显示
Chat:sendSystemMsg("把id为1的特效移动到了坐标(0,0)高度7的位置")
```

#### setRenderGlobalEffectScale

*   参数及类型：
    *   effectid:number命名ID
    *   scalex:numberx缩放值
    *   scaley:numbery缩放值
    *   scalez:numberz缩放值
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置全局效果缩放
*   具体使用案例如下：

```
--把id为1的地图特效放大两倍
--第一个参数为需要缩放的特效id
--后三个参数分别为特效在x、y、z方向上的缩放倍数
Game:setRenderGlobalEffectScale(1,2,2,2)
--在聊天框显示
Chat:sendSystemMsg("把id为1的特效放大了2倍")
```

#### msgBox

*   参数及类型：
    *   msg:string设置的消息
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 消息弹框
*   具体使用案例如下：

```
--每当玩家做动画表情，显示一个弹窗
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
    --显示一个游戏弹窗，参数为弹窗显示内容
    Game:msgBox("这是一个弹窗！")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)
```

#### splitStr

*   参数及类型：
    *   str:string分割的字符串
    *   mark:'string'分割符号
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   strs:table字符串组
*   该方法的主要作用： 分割字符串
*   具体使用案例如下：

```
local code, strs = Game:splitStr(str, mark)
if code == ErrorCode.OK then
    print('执行成功', code, strs )
else
    print('执行失败')
end
```
.

### 方块接口：Block

彼得兔 更新时间: 2024-08-27 11:04:56

**具体函数名及描述如下：**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [isSolidBlock(...)](#issolidblock) | 是否是固体方块 |
| 2 | [isLiquidBlock(...)](#isliquidblock) | 是否是液体方块 |
| 3 | [isAirBlock(...)](#isairblock) | 是否是气体方块 |
| 4 | [getBlockID(...)](#getblockid) | 获取block对应id |
| 5 | [setBlockAll(...)](#setblockall) | 设置blockalldata 更新+通知 |
| 6 | [getBlockData(...)](#getblockdata) | 获得blockdata |
| 7 | [destroyBlock(...)](#destroyblock) | 摧毁方块 dropitem:掉落道具(默认false,不掉落) |
| 8 | [placeBlock(...)](#placeblock) | 放置方块 |
| 9 | [replaceBlock(...)](#replaceblock) | 替换方块 |
| 10 | [setBlockAllForUpdate(...)](#setblockallforupdate) | 设置blockalldata 通知周围方块 |
| 11 | [setBlockAllForNotify(...)](#setblockallfornotify) | 设置blockalldata 更新当前位置方块 |
| 12 | [setBlockSettingAttState(...)](#setblocksettingattstate) | 设置方块设置属性状态 |
| 13 | [getBlockSettingAttState(...)](#getblocksettingattstate) | 获取方块设置属性状态 |
| 14 | [getBlockSwitchStatus(...)](#getblockswitchstatus) | 获取功能方块的开关状态 |
| 15 | [setBlockSwitchStatus(...)](#setblockswitchstatus) | 设置功能方块的开关状态 |
| 16 | [getBlockDataByDir(...)](#getblockdatabydir) | 通过方向获取方块data值 |
| 17 | [getBlockPowerStatus(...)](#getblockpowerstatus) | 获取方块的通电状态 |
| 18   | [randomBlockID(...)](#randomBlockID) | 获取随机方块 ID      |
| 19   | [GetBlockDefName(...)](#GetBlockDefName) | 获取方块名称         |
| 20   | [GetBlockDefDesc(...)](#GetBlockDefDesc) | 获取方块描述         |
| 21   | [GetBlockFacade(...)](#GetBlockFacade) | 获取方块外观         |
| 22   | [PlayAct(...)](#PlayAct) | 微缩方块播放动作     |
| 23   | [ReplaceBluePrint(...)](#ReplaceBluePrint) | 放置蓝图            |


#### isSolidBlock


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：是否为固体方块
    
*   具体使用案例如下：
    

```
--判断(0,0)高度6的位置是不是固体方块
local result=Block:isSolidBlock(0,6,0)
if result==0 then--是固体方块
	Chat:sendSystemMsg("坐标(0,0)高度6的位置是固体方块")
else--不是固体方块
	Chat:sendSystemMsg("坐标(0,0)高度6的位置不是固体方块")
end

```

#### isLiquidBlock


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：是否为液体方块
    
*   具体使用案例如下：
    

```
--判断(0,0)高度6的位置是不是液体方块
local result=Block:isLiquidBlock(0,6,0)
if result==0 then--是液体方块
	Chat:sendSystemMsg("坐标(0,0)高度6的位置是液体方块")
else--不是液体方块
	Chat:sendSystemMsg("坐标(0,0)高度6的位置不是液体方块")
end

```

#### isAirBlock


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：是否为气体方块
    
*   具体使用案例如下：
    

```
--判断(0,0)高度6的位置是不是气体方块
local result=Block:isAirBlock(0,6,0)
if result==0 then--是气体方块
	Chat:sendSystemMsg("坐标(0,0)高度6的位置是气体方块")
else--不是气体方块
	Chat:sendSystemMsg("坐标(0,0)高度6的位置不是气体方块")
end

```

#### getBlockID


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   id:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取指定位置的方块ID
    
*   具体使用案例如下：
    

```
--获取(0,0)高度6的位置的方块id
local result,id=Block:getBlockID(0,6,0)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度6的位置的方块id是"..id)

```

#### setBlockAll


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   data:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置blockalldata 更新+通知
    
*   具体使用案例如下：
    

```
--把(0,0)高度6的位置设置为基岩
--倒数第二个参数1为方块id，最后一个参数0为方块data
--data是方块数据，比如硬砂块的颜色、音乐方块的音调等等，具体可以用getBlockData获取
Block:setBlockAll(0,6,0,1,0)
--在聊天框显示
Chat:sendSystemMsg("把(0,0)高度6的位置设置为基岩，data为0")

```

#### getBlockData


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   data:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获得blockdata
    
*   具体使用案例如下：
    

```
--获取(0,0)高度6的位置的方块data
--data是方块数据，比如硬砂块的颜色、音乐方块的音调等等
local result,data=Block:getBlockData(0,6,0)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度6的位置的方块data是"..data)

```

#### destroyBlock


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   dropitem:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：摧毁方块 dropitem:掉落道具(默认false,不掉落)
    
*   具体使用案例如下：
    

```
--破坏(0,0)高度6的方块并掉落
--最后一个参数true为掉落，false为不掉落
Block:destroyBlock(0,6,0,true)
--在聊天框显示
Chat:sendSystemMsg("破坏了(0,0)高度6的方块并掉落")

```

#### placeBlock


*   参数及类型：
    
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   face:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   color:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：放置方块
    
*   具体使用案例如下：
    

```
--在(0,0)高度7放置一个基岩，朝向西。如果这个位置已经有了方块是无法放置的。
--第一个参数1为放置的方块id
--中间三个参数0,7,0为放置坐标
--最后一个参数0为朝向参数：0西 1东 2南 3北 4下 5上
Block:placeBlock(1,0,7,0,0)
--在聊天框显示
Chat:sendSystemMsg("在(0,0)高度7的位置放置了一个基岩，朝向西")

```

#### replaceBlock


*   参数及类型：
    
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   face:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   color:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：替换方块
    
*   具体使用案例如下：
    

```
--把(0,0)高度6的位置替换为基岩，朝向西。
--第一个参数1为放置的方块id
--中间三个参数0,6,0为替换坐标
--最后一个参数0为朝向参数：0西 1东 2南 3北 4下 5上
Block:replaceBlock(1,0,6,0,0)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度6的位置被替换成了基岩，朝向西")

```

#### setBlockAllForUpdate


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置blockalldata 通知周围方块
    
*   具体使用案例如下：
    

```
--把(0,0)高度6的位置设置为基岩(id:1)
--前三个参数0,6,0为坐标，最后一个参数1为方块id
Block:setBlockAllForUpdate(0,6,0,1)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度6的位置被设置为了基岩")

```

#### setBlockAllForNotify


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置blockalldata 更新当前位置方块
    
*   具体使用案例如下：
    

```
--把(0,0)高度6的位置设置为基岩(id:1)
--前三个参数0,6,0为坐标，最后一个参数1为方块id
Block:setBlockAllForNotify(0,6,0,1)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度6的位置被设置为了基岩")

```

#### setBlockSettingAttState


*   参数及类型：
    
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attrtype:[**`BLOCKATTR_ENABLE`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E6%96%B9%E5%9D%97%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE)
    *   switch:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置方块设置属性状态
    
*   具体使用案例如下：
    

```
--把所有土块设置为不可破坏
--第一个参数101为方块id
--第二个参数1为方块属性：1破坏 2操作 4推拉 8掉落 16推拉掉落
--第三个参数false为“不可”，改为true表示“可以”
Block:setBlockSettingAttState(101,1,false)
--在聊天框显示
Chat:sendSystemMsg("所有土块被设置为了不可破坏！")

```

#### getBlockSettingAttState


*   参数及类型：
    
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attrtype:[**`BLOCKATTR_ENABLE`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E6%96%B9%E5%9D%97%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   switch:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取方块设置属性状态
    
*   具体使用案例如下：
    

```
--获取土块是否可被破坏
--第一个参数101为方块id
--第二个参数1为方块属性：1破坏 2操作 4推拉 8掉落 16推拉掉落
local result,switch=Block:getBlockSettingAttState(101,1)
if switch then--可以破坏
	Chat:sendSystemMsg("土块可以被破坏！")
else--不可破坏
	Chat:sendSystemMsg("土块无法被破坏！")
end

```

#### getBlockSwitchStatus


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x,y,z}
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   isactive:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取功能方块的开关状态
    
*   具体使用案例如下：
    

```
--判断(0,0)高度7的位置的方块(比如开关)是否被打开
local result,isactive=Block:getBlockSwitchStatus({x=0,y=7,z=0})
if isactive then--被打开
	Chat:sendSystemMsg("(0,0)高度7的位置的方块已被打开！")
else--没有被打开
	Chat:sendSystemMsg("(0,0)高度7的位置的方块没有被打开！")
end

```

#### setBlockSwitchStatus


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x,y,z}
    *   isactive:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置功能方块的开关状态
    
*   具体使用案例如下：
    

```
--打开(0,0)高度7位置的方块(比如开关)
--最后一个参数true为打开，false为关闭
Block:setBlockSwitchStatus({x=0,y=7,z=0},true)
--在聊天框显示
Chat:sendSystemMsg("打开了(0,0)高度7的位置的方块！")

```

#### getBlockDataByDir


*   参数及类型：
    
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   dir:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   data:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：通过方向获取方块data值
    
*   具体使用案例如下：
    

```
--获取朝向北的落叶松木的data
--第一个参数201为方块id
--第二个参数3为朝向参数：0西 1东 2南 3北 4下 5上
local result,data=Block:getBlockDataByDir(201,3)
--在聊天框显示
Chat:sendSystemMsg("落叶松木在朝向北的时候的data为:"..data)

```

#### getBlockPowerStatus


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x,y,z}
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   isactive:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取方块的通电状态
    
*   具体使用案例如下：
    

```
--判断(0,0)高度7的位置的方块有没有通电
local result,isactive=Block:getBlockPowerStatus({x=0,y=7,z=0})
if isactive then--通电
	Chat:sendSystemMsg("(0,0)高度7的位置的方块已被通电！")
else--没有通电
	Chat:sendSystemMsg("(0,0)高度7的位置的方块没有通电！")
end

```

#### randomBlockID**

*   参数及类型：
    *   无
*   返回值及类型：
    *   ErrorCode.OK
    *   blockid:number 获取随机方块id
*   该方法的主要作用：获取随机方块id
*   具体使用案例如下：

```
local result,blockid = Block:randomBlockID()
```

#### GetBlockDefName

*   参数及类型：
    *   blockid:number方块类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   name:number 方块名称
*   该方法的主要作用：获取方块名称
*   具体使用案例如下：

```
local result,name = Block:GetBlockDefName(blockid)
```

#### GetBlockDefDesc

*   参数及类型：
    *   blockid:number方块类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   desc:number 方块描述
*   该方法的主要作用：获取方块描述
*   具体使用案例如下：

```
local result,desc = Block:GetBlockDefDesc(blockid)
```

#### GetBlockFacade

*   参数及类型：
    *   blockid:number方块类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   faced:number 方块外观名
*   该方法的主要作用：获取方块外观
*   具体使用案例如下：

```
local result,faced = Block:GetBlockFacade(blockid)
```

#### PlayAct

*   参数及类型：
    *   x,y,z:number位置坐标
    *   animid:number动作ID
    *   playmode:number播放模式(ANIMMODE)
*   返回值及类型：
    *   ErrorCode.OK
    *   faced:number 方块外观名
*   该方法的主要作用：微缩方块播放动作
*   具体使用案例如下：

```
local result = Block:PlayAct(0,8,0,12,ANIMMODE.ANIM_MODE_LOOP) --在坐标（0,8,0）的微缩方块循环播放跑的动画
```

#### ReplaceBluePrint

*   参数及类型：
    *   x,y,z:number位置坐标
    *   blueprint:string蓝图资源ID
    *   angle:number旋转角度
    *   mirror:boolean是否镜像
    *   placeMode:boolean是否放置
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 放置蓝图
*   具体使用案例如下：

```
local code  = Block:ReplaceBluePrint(x, y, z, blueprint, angle, mirror, placeMode)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```



### 状态接口：Buff

迷你世界 更新时间: 2023-04-26 20:07:54

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [addBuff(...)](#addBuff) | 给对象附加效果 |
| 2 | [removeBuff(...)](#removeBuff) | 给对象移除指定效果 |
| 3 | [clearAllBuff(...)](#clearAllBuff) | 给对象清除所有效果 |
| 4 | [clearAllBadBuff(...)](#clearAllBadBuff) | 为对象清除所有负面效果 |
| 5 | [hasBuff(...)](#hasBuff) | 判断对象身上是否有指定效果 |
| 6 | [getBuffList(...)](#getBuffList) | 获取对象身上效果列表 |
| 7 | [getBuffNumByBuffid(...)](#getBuffNumByBuffid) | 获取对象身上指定效果数量 |
| 8    | [getBuffIndex(...)](#getBuffIndex) | 获取对象身上指定效果的索引位置（索引从1开始） |
| 9    | [getBuffLeftTime(...)](#getBuffLeftTime) | 获取对象身上指定效果剩余时间   |
| 10   | [getBuffName(...)](#getBuffName) | 获取对象身上状态效果名称      |
| 11   | [GetBuffDefName(...)](#GetBuffDefName) | 获取状态效果名称              |
| 12   | [GetBuffDefDesc(...)](#GetBuffDefDesc) | 获取状态效果描述              |

#### addBuff

*   参数及类型：
    *   objid:number对象ID
    *   buffid:number效果ID
    *   bufflv:number效果等级
    *   customticks:number效果持续时间(-1表示默认配置，0表示无限)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 给对象附加效果
*   具体使用案例如下：

```
local code  = Buff:addBuff(objid, buffid, bufflv, customticks)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### removeBuff

*   参数及类型：
    *   objid:number对象ID
    *   buffid:number效果ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 给对象移除指定效果
*   具体使用案例如下：

```
local code  = Buff:removeBuff(objid, buffid)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### clearAllBuff

*   参数及类型：
    *   objid:number对象ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 给对象清除所有效果
*   具体使用案例如下：

```
local code  = Buff:clearAllBuff(objid)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### clearAllBadBuff

*   参数及类型：
    *   objid:number对象ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 为对象清除所有负面效果
*   具体使用案例如下：

```
local code  = Buff:clearAllBadBuff(objid)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### hasBuff

*   参数及类型：
    *   objid:number对象ID
    *   buffid:number效果ID
    *   bufflv:number效果等级
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 判断对象身上是否有指定效果
*   具体使用案例如下：

```
local code  = Buff:hasBuff(objid, buffid, bufflv)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### getBuffList

*   参数及类型：
    *   objid:number对象ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   num:number效果数量
    *   arr:number效果ID数组
*   该方法的主要作用： 获取对象身上效果列表
*   具体使用案例如下：

```
local code ,num,arr = Buff:getBuffList(objid)
if code == ErrorCode.OK then
	print('执行成功' ,num,arr )
else
	print('执行失败')
end
```

#### getBuffNumByBuffid

*   参数及类型：
    *   objid:number对象ID
    *   buffid:number效果ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   num:number数量
*   该方法的主要作用： 获取对象身上指定效果数量
*   具体使用案例如下：

```
local code ,num = Buff:getBuffNumByBuffid(objid, buffid)
if code == ErrorCode.OK then
	print('执行成功' ,num )
else
	print('执行失败')
end
```

#### getBuffIndex

*   参数及类型：
    *   objid:number对象ID
    *   buffid:number效果ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   ix:number效果索引 从1开始
*   该方法的主要作用： 获取对象身上指定效果的索引位置(索引从1开始)
*   具体使用案例如下：

```
local code ,ix = Buff:getBuffIndex(objid, buffid)
if code == ErrorCode.OK then
	print('执行成功' ,ix )
else
	print('执行失败')
end
```

#### getBuffLeftTime

*   参数及类型：
    *   objid:number对象ID
    *   buffid:number效果ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   num:number剩余时间(秒)，0表示永久
*   该方法的主要作用： 获取对象身上指定效果剩余时间
*   具体使用案例如下：

```
local code ,num = Buff:getBuffLeftTime(objid, buffid)
if code == ErrorCode.OK then
	print('执行成功' ,num )
else
	print('执行失败')
end
```

#### getBuffName

*   参数及类型：
    *   objid:number对象ID
    *   buffid:number效果ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   name:string效果名称
*   该方法的主要作用： 获取对象身上状态效果名称
*   具体使用案例如下：

```
local code ,name = Buff:getBuffName(objid, buffid)
if code == ErrorCode.OK then
	print('执行成功' ,name )
else
	print('执行失败')
end
```

#### GetBuffDefName

*   参数及类型：
    *   buffid:number效果ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   name:string效果名称
*   该方法的主要作用： 获取状态效果名称
*   具体使用案例如下：

```
local code ,name = Buff:GetBuffDefName(buffid)
if code == ErrorCode.OK then
	print('执行成功' ,name )
else
	print('执行失败')
end
```

#### GetBuffDefDesc

*   参数及类型：
    *   buffid:number效果ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   desc:string效果名称
*   该方法的主要作用： 获取状态效果描述
*   具体使用案例如下：

```
local code ,desc = Buff:GetBuffDefDesc(buffid)
if code == ErrorCode.OK then
	print('执行成功' ,desc )
else
	print('执行失败')
end
```


### 实体接口：Actor

彼得兔 更新时间: 2024-05-31 17:39:51

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [isPlayer(...)](#isplayer) | 检测是否为玩家 |
| 2 | [isMob(...)](#ismob) | 检测是否为怪物 |
| 3 | [getObjType(...)](#getobjtype) | 获取对象类型（玩家、生物、投掷物、掉落物等^） |
| 4 | [isInAir(...)](#isinair) | 是否在空中 |
| 5 | [getPosition(...)](#getposition) | 获取actor位置 |
| 6 | [setPosition(...)](#setposition) | 设置actor位置 |
| 7 | [jump(...)](#jump) | 跳跃 |
| 8 | [killSelf(...)](#killself) | 杀死自己 |
| 9 | [getCurPlaceDir(...)](#getcurplacedir) | 获取当前朝向 |
| 10 | [tryMoveToActor(...)](#trymovetoactor) | 向目标行动者移动 |
| 11 | [tryMoveToPos(...)](#trymovetopos) | 向目标位置移动 |
| 12 | [addHP(...)](#addhp) | 增加当前生命量 |
| 13 | [getHP(...)](#gethp) | 获取当前生命量 |
| 14 | [getMaxHP(...)](#getmaxhp) | 获取最大生命量 |
| 15 | [addOxygen(...)](#addoxygen) | 增加当前氧气值 |
| 16 | [getOxygen(...)](#getoxygen) | 获取当前氧气值 |
| 17 | [addEnchant(...)](#addenchant) | 增加装备附魔 |
| 18 | [removeEnchant(...)](#removeenchant) | 移除装备附魔 |
| 19 | [findNearestBlock(...)](#findnearestblock) | 寻找附近方块 |
| 20 | [setFaceYaw(...)](#setfaceyaw) | 设置actor原地旋转偏移角度 |
| 21 | [getFaceYaw(...)](#getfaceyaw) | 获取actor原地旋转偏移角度 |
| 22 | [turnFaceYaw(...)](#turnfaceyaw) | 转动actor横向偏移角度 |
| 23 | [setFacePitch(...)](#setfacepitch) | 设置actor视角仰望角度 |
| 24 | [getFacePitch(...)](#getfacepitch) | 获取actor视角仰望角度 |
| 25 | [turnFacePitch(...)](#turnfacepitch) | 转动actor仰望偏移角度 |
| 26 | [playBodyEffect(...)](#playbodyeffect) | 对象播放特效 |
| 27 | [stopBodyEffect(...)](#stopbodyeffect) | 对象停止特效 |
| 28 | [playBodyEffectByFile(...)](#playbodyeffectbyfile) | 播放文件特效（暂未开放） |
| 29 | [stopBodyEffectByFile(...)](#stopbodyeffectbyfile) | 停止文件特效（暂未开放） |
| 30 | [playSound(...)](#playsound) | 播放声音 |
| 31 | [playSoundSpecial(...)](#playsoundspecial) | 播放声音(特定类型:GSOUND\_TYPE) |
| 32 | [clearActorWithId(...)](#clearactorwithid) | 清除生物ID为actorid的生物 |
| 33 | [setAttackType(...)](#setattacktype) | 设置伤害类型 |
| 34 | [setImmuneType(...)](#setimmunetype) | 设置免疫伤害类型 |
| 35 | [mountActor(...)](#mountactor) | 登上、脱离载具 |
| 36 | [setActionAttrState(...)](#setactionattrstate) | 设置生物行为属性状态 |
| 37 | [getActionAttrState(...)](#getactionattrstate) | 获取生物特殊属性的状态 |
| 38 | [tryNavigationToPos(...)](#trynavigationtopos) | 寻路到目标位置 |
| 39 | [randomActorID(...)](#randomactorid) | 在资源库里随机创建一个生物 |
| 40 | [getRidingActorObjId(...)](#getridingactorobjid) | 获取骑乘生物的objid |
| 41 | [playBodyEffectById(...)](#playbodyeffectbyid) | 在指定对象身上播放粒子特效 |
| 42 | [stopBodyEffectById(...)](#stopbodyeffectbyid) | 停止指定对象身上的粒子特效 |
| 43 | [setBodyEffectScale(...)](#setbodyeffectscale) | 设置指定对象身上的特效大小 |
| 44 | [playSoundEffectById(...)](#playsoundeffectbyid) | 在指定对象身上播放音效 |
| 45 | [stopSoundEffectById(...)](#stopsoundeffectbyid) | 停止指定对象身上的音效 |
| 46 | [appendSpeed(...)](#appendspeed) | 给对象附加一个速度 |
| 47 | [getFaceDirection(...)](#getfacedirection) | 获取actor朝向 |
| 48 | [calcDirectionByDirection(...)](#calcdirectionbydirection) | 通过局部坐标方向计算绝对方向 |
| 49 | [calcDirectionByAngle(...)](#calcdirectionbyangle) | 通过局部球坐标方向计算绝对方向 |
| 50 | [calcDirectionByYawDirection(...)](#calcdirectionbyyawdirection) | 通过局部坐标方向计算绝对正方向(忽略视角仰角) |
| 51 | [calcDirectionByYawAngle(...)](#calcdirectionbyyawangle) | 通过局部球坐标方向计算绝对正方向(忽略视角仰角) |
| 52 | [getEyeHeight(...)](#geteyeheight) | 获取眼睛高度 |
| 53 | [getEyePosition(...)](#geteyeposition) | 获取眼睛位置 |
| 54 | [getBodySize(...)](#getbodysize) | 获取身体尺寸 |
| 55 | [playAct(...)](#playact) | 播放动作 |
| 56 | [shownickname(...)](#shownickname) | 设置昵称显示 |
| 57 | [setnickname(...)](#setnickname) | 设置昵称 |
| 58 | [getActorFacade(...)](#getactorfacade) | 获取Actor的外观 |
| 59 | [changeCustomModel(...)](#changecustommodel) | 改变Actor外观 |
| 60 | [recoverinitialModel(...)](#recoverinitialmodel) | 恢复生物外观 |
| 61 | [addBuff(...)](#addbuff) | 增加指定BUFF |
| 62 | [hasBuff(...)](#hasbuff) | 是否已经有了指定BUFF |
| 63 | [removeBuff(...)](#removebuff) | 移除指定BUFF |
| 64 | [clearAllBuff(...)](#clearallbuff) | 清除全部BUFF |
| 65 | [clearAllBadBuff(...)](#clearallbadbuff) | 清除全部减益BUFF |
| 66 | [getBuffList(...)](#clearallbadbuff) | 获取已有BUFF |
| 67 | [getBuffLeftTick(...)](#getbufflefttick) | 获取BUFF剩余tick |
| 68   | [randomFacadeID(...)](#randomFacadeID) | 获取随机外观 ID 字符串      |
| 69   | [playerHurt(...)](#playerHurt) | 使玩家对生物或其他玩家造成伤害 |
| 70   | [playerHurtArea(...)](#playerHurtArea) | 使玩家伤害区域内的目标       |
| 71   | [actorHurt(...)](#actorHurt) | 使生物对生物或玩家造成伤害   |
| 72   | [actorHurtArea(...)](#actorHurtArea) | 使生物伤害区域内的目标       |
| 73   | [getPositionV2(...)](#getPositionV2) | 获取 actor 位置              |
| 74   | [setFaceDirection(...)](#setFaceDirection) | 设置对象朝向                 |
| 75   | [ChangePlayerSkin(...)](#ChangePlayerSkin) | 改变对象为指定玩家 ID 的皮肤外观 |

#### isPlayer


*   参数及类型：`objid`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK是玩家是玩家
*   该方法的主要作用：检测是否为玩家
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中对象，判断被攻击的对象是不是玩家
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--判断某对象是不是玩家，参数为对象在存档中的id
	local result=Actor:isPlayer(event.toobjid)
	if result==0 then--如果是玩家
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的对象是玩家")
	else--如果不是玩家
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的对象不是玩家")
	end
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### isMob


*   参数及类型：`objid`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK是怪物是怪物
*   该方法的主要作用：检测是否为怪物
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中对象，判断被攻击的对象是不是怪物
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--判断某对象是不是怪物，参数为对象在存档中的id
	local result=Actor:isMob(event.toobjid)
	if result==0 then--如果是怪物
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的对象是怪物")
	else--如果不是怪物
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的对象不是怪物")
	end
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### getObjType


*   参数及类型：`objid`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   objtype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取对象类型（玩家、生物、投掷物、掉落物等^）
    
*   具体使用案例如下：
    

```
--每当有玩家做动画表情，聊天框显示房主周围10格内其中一个对象的所属类型
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取房主的坐标
	local result,x,y,z=Player:getPosition(0)
	--获取房主周围10格内对象的数量和列表
	local result2,num,objids=World:getActorsByBox(0,x-10,y-10,z-10,x+10,y+10,z+10)
	if num>0 then--如果获取到了对象
		--获取对象列表中的第一个对象的类型，参数为要获取类型的对象在存档中的id
		--返回值可能是：1玩家 2生物 3掉落物 4投掷物
		local result3,objtype=Actor:getObjType(objids[1])
		--在聊天框显示
		Chat:sendSystemMsg("附近10格发现对象！其中一个对象类型为(1玩家 2生物 3掉落物 4投掷物)"..objtype)
	else--如果获取失败
		--在聊天框显示
		Chat:sendSystemMsg("附近10格没有发现对象！")
	end
end
--注册动画表情监听器，当玩家做动画表情时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### isInAir


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：是否在空中
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中某对象，判断该对象是否在空中
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--判断某对象是否在空中，参数为对象在存档中的id
	local result=Actor:isInAir(event.toobjid)
	if result==0 then--如果在空中
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的生物在空中")
	else--如果不在空中
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的生物不在空中")
	end
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### getPosition


*   参数及类型：`objid`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取actor位置
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中某对象，获取该对象的坐标
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--获取某对象的坐标，参数为对象在存档中的id
	local result,x,y,z=Actor:getPosition(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的坐标为("..x..","..y..","..z..")")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### setPosition


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置actor位置
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中某对象，设置该对象的位置
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--设置指定对象的坐标
	--第一个参数为对象在存档中的id
	--后三个参数为要设置的坐标
	Actor:setPosition(event.toobjid,10,20,10)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物被设置到了(10,10)高度20的位置")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### jump


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：跳跃
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中某对象，让该对象跳跃
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--让指定对象跳跃，参数为对象在存档中的id
	Actor:jump(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("让objid为"..event.toobjid.."的生物跳跃了一次")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### killSelf


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：杀死自己
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中某生物，清除该生物
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--清除指定生物，参数为生物在存档中的id
	Actor:killSelf(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("清除了objid为"..event.toobjid.."的生物")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### getCurPlaceDir


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   dir:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取当前朝向
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中某生物，获取该生物的朝向
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--获取指定生物的朝向，参数为生物在存档中的id
	--返回值可能是：0西 1东 2南 3北 4下 5上
	local result,dir=Actor:getCurPlaceDir(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物当前朝向为(0西 1东 2南 3北 4下 5上)"..dir)
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### tryMoveToActor


*   参数及类型：
    
    *   self\_objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   target\_objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   speed:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：向目标行动者移动
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中某生物，让该生物向另一生物移动
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--让指定生物向另一生物移动
	--第一个参数为要移动的生物在存档中的id
	--第二个参数为移动目标生物在存档中的id
	--第三个参数为移动速度
	Actor:tryMoveToActor(event.toobjid,event.eventobjid,3)
	--在聊天框显示
	Chat:sendSystemMsg("让objid为"..event.toobjid.."的生物向objid为"..event.eventobjid.."的生物移动，速度为3")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### tryMoveToPos


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   speed:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：向目标位置移动
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中某生物，让该生物移动至某位置
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--让某生物移动至某坐标
	--第一个参数为要移动的生物在存档中的id
	--中间三个参数10,7,10为要移动至的坐标
	--最后一个参数为移动速度
	Actor:tryMoveToPos(event.toobjid,10,7,10,3)
	--在聊天框显示
	Chat:sendSystemMsg("让objid为"..event.toobjid.."的生物移动至(10,10)高度7的位置，速度为3")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### addHP


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   hp:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：增加当前生命量
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，给该玩家增加生命值
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--给指定生物增加生命值
	--第一个参数为生物在存档中的id，可以是玩家迷你号
	--第二个参数为要增加的生命值
	Actor:addHP(event.eventobjid,10)
	--在聊天框显示
	Chat:sendSystemMsg("给objid为"..event.eventobjid.."的生物增加了10点生命值")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### getHP


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取当前生命量
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，获取该玩家当前生命值
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取指定生物的当前生命值，参数为生物在存档中的id，可以是玩家迷你号，0是房主
	local result,value=Actor:getHP(event.eventobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.eventobjid.."的生物当前生命值为:"..value)
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### getMaxHP


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取最大生命量
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，获取该玩家最大生命值
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取指定生物的最大生命值，参数为生物在存档中的id，可以是玩家迷你号，0是房主
	local result,value=Actor:getMaxHP(event.eventobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.eventobjid.."的生物最大生命值为:"..value)
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### addOxygen


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   oxygen:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：增加当前氧气值
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，增加该玩家氧气值
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--增加指定生物的氧气值
	--第一个参数为生物在存档中的id，可以是玩家迷你号
	--第二个参数为要增加的值
	Actor:addOxygen(event.eventobjid,10)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.eventobjid.."的生物氧气值增加了10")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### getOxygen


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取当前氧气值
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，获取该玩家当前氧气值
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取指定生物的当前氧气值，参数为生物在存档中的id，可以是玩家迷你号，0是房主
	local result,value=Actor:getOxygen(event.eventobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.eventobjid.."的生物当前氧气值为:"..value)
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### addEnchant


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   slot:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   enchantId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   enchantLevel:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：增加装备附魔
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，给该玩家的装备添加附魔
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--给指定玩家的装备添加附魔
	--第一个参数为生物在存档中的id，可以是玩家迷你号
	--第二个参数为装备栏id：0头饰 1胸甲 2裤子 3鞋子 4披风 5手中持有的物品
	--后两个参数为附魔和附魔等级，具体可以在“迷你世界ID查询”的“附魔表数据”中查看
	Actor:addEnchant(event.eventobjid,5,10,5)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.eventobjid.."的生物手中的物品被添加了点燃5的附魔")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### removeEnchant


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   slot:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   enchantId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除装备附魔
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，移除指定装备的附魔
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--移除指定生物的指定装备的指定附魔
	--第一个参数为生物在存档中的id，可以是玩家迷你号
	--第二个参数为装备栏id：0头饰 1胸甲 2裤子 3鞋子 4披风 5手中持有的物品
	--第三个参数为要移除的附魔，具体可以在“迷你世界ID查询”的“附魔表数据”中查看
	Actor:removeEnchant(event.eventobjid,5,10)
	--在聊天框显示
	Chat:sendSystemMsg("移除了objid为"..event.eventobjid.."的生物手持物品的点燃附魔")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### findNearestBlock


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   blockRange
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：寻找附近方块
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--实体id
	local blockid=1--寻找方块id
	local blockRange=10--寻找范围
	--寻找附近方块
	local result,x,y,z=Actor:findNearestBlock(objid, blockid, blockRange)
	if result==0 then
		Chat:sendSystemMsg("范围内找到了方块")
	else
		Chat:sendSystemMsg("范围内未找到方块")
	end
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### setFaceYaw


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   yaw:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)角度
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置actor原地旋转偏移角度
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中生物，设置被命中生物的朝向
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--设置指定玩家的朝向
	--第一个参数为生物在存档中的id
	--第二个参数为要设置的偏移角度，0为南方，从南向西角度递增
	Actor:setFaceYaw(event.toobjid,0)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物朝向被设置为了南方")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### getFaceYaw


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   yaw:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取actor原地旋转偏移角度
    
*   具体使用案例如下：
    

```
--获取指定生物的朝向偏转角度，参数为生物在存档中的id，可以是玩家迷你号，0是房主
local result,yaw=Actor:getFaceYaw(0)
--在聊天框显示
Chat:sendSystemMsg("房主的朝向偏转角度为"..yaw)

```

#### turnFaceYaw


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)转动角度
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：转动actor横向偏移角度
    
*   具体使用案例如下：
    

```
--玩家以攻击命中生物的方式选中要旋转的对象，之后每次做动画表情，该生物都会旋转90度
local objid--储存生物id的变量
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--把命中的生物id赋值给上面的变量
	objid=event.toobjid
	--在聊天框显示
	Chat:sendSystemMsg("选中了"..event.toobjid.."，现在每次做动画表情该生物都会旋转90度")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--旋转指定生物某一角度
	--第一个参数为生物在存档中的id
	--第二个参数为要旋转的角度
	Actor:turnFaceYaw(objid,90)
	--在聊天框显示
	Chat:sendSystemMsg("生物"..objid.."被旋转了90度")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### setFacePitch


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   pitch:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)仰望角度
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置actor视角仰望角度
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中生物，设置被命中生物的竖直朝向
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--设置指定玩家的竖直朝向
	--第一个参数为生物在存档中的id
	--第二个参数为要设置的偏移角度，0为正前方，仰视为正，俯视为负
	Actor:setFacePitch(event.toobjid,0)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物竖直朝向被设置为了正前方")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### getFacePitch


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   pitch:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取actor视角仰望角度
    
*   具体使用案例如下：
    

```
--获取指定生物的竖直朝向偏转角度，参数为生物在存档中的id，可以是玩家迷你号，0是房主
local result,pitch=Actor:getFacePitch(0)
--在聊天框显示
Chat:sendSystemMsg("房主的竖直朝向偏转角度为"..pitch)

```

#### turnFacePitch


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)转动角度
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：转动actor仰望偏移角度
    
*   具体使用案例如下：
    

```
--玩家以攻击命中生物的方式选中要旋转的对象，之后每次做动画表情，该生物的竖直朝向都会旋转90度
local objid--储存生物id的变量
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--把命中的生物id赋值给上面的变量
	objid=event.toobjid
	--在聊天框显示
	Chat:sendSystemMsg("选中了"..event.toobjid.."，现在每次做动画表情该生物的竖直朝向都会旋转90度")
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--旋转指定生物的竖直朝向某一角度
	--第一个参数为生物在存档中的id
	--第二个参数为要旋转的角度
	Actor:turnFacePitch(objid,90)
	--在聊天框显示
	Chat:sendSystemMsg("生物"..objid.."的竖直朝向被旋转了90度")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### playBodyEffect


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   type:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效类型[ACTORBODY\_EFFECT](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%94%9F%E7%89%A9%E8%BA%AB%E4%BD%93%E7%89%B9%E6%95%88)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：播放特效
    
*   具体使用案例如下：
    

```
--给指定生物添加特效
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要添加的特效id，大致从1000开始
Actor:playBodyEffect(0,1027)
--在聊天框显示
Chat:sendSystemMsg("房主被添加了特效1027")

```

#### stopBodyEffect


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   type:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效类型[ACTORBODY\_EFFECT](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%94%9F%E7%89%A9%E8%BA%AB%E4%BD%93%E7%89%B9%E6%95%88)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：停止特效
    
*   具体使用案例如下：
    

```
--取消指定生物的特效
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要取消的特效id，大致从1000开始
Actor:stopBodyEffect(0,1027)
--在聊天框显示
Chat:sendSystemMsg("房主被取消了特效1027")

```

#### playBodyEffectByFile


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   filename:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)文件名
    *   sync:[**`bool`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)同步
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：播放文件特效
    
*   具体使用案例如下：
    

```
local result = Actor:playBodyEffectByFile(objid, filename, sync)

```

#### stopBodyEffectByFile


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   filename:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)文件名
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：停止文件特效
    
*   具体使用案例如下：
    

```
local result = Actor:stopBodyEffectByFile(objid, filename)

```

#### playSound


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   name:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   volume:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   pitch:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   flag:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：播放声音
    
*   具体使用案例如下：
    

```
local result = Actor:playSound(objid, name, volume, pitch, flag)

```

#### playSoundSpecial


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   name:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   type:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)指定类型([GSOUND\_TYPE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%A3%B0%E9%9F%B3%E7%B1%BB%E5%9E%8B))
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：播放声音(特定类型:GSOUND\_TYPE)
    
*   具体使用案例如下：
    

```
local result = Actor:playSoundSpecial(objid, name, type)

```

#### clearActorWithId


*   参数及类型：
    
    *   actorid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   bkill:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：清除生物ID为actorid的生物
    
*   具体使用案例如下：
    

```
--清除存档指定生物
--第一个参数为要清除的生物id，3402是猪，具体可以在“迷你世界ID查询”的“生物表数据”中查看
--第二个参数为是否显示死亡效果：true显示 false直接消失
Actor:clearActorWithId(3402,false)
--在聊天框显示
Chat:sendSystemMsg("清除了存档里所有的猪")

```

#### setAttackType


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attacktype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置伤害类型
    
*   具体使用案例如下：
    

```
local function ClickActor(event)
	local objid=event.toobjid--被点击的生物
	local attacktype=0--近战伤害(伤害类型可在常量列表查询)
	--设置被点击的生物伤害类型为近战伤害
	Actor:setAttackType(objid, attacktype)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物
```

#### setImmuneType


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   immunetype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   isadd:[**`bool`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置免疫伤害类型
    
*   具体使用案例如下：
    

```
local function ClickActor(event)
	local objid=event.toobjid--被点击的生物
	local immunetype=0--近战伤害(伤害类型可在常量列表查询)
	local isadd=true--开启
	--被点击的生物开启免疫近战伤害
	Actor:setImmuneType(objid, immunetype, isadd)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物
```

#### mountActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   mountobjid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   posindex:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)骑乘位
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：登上、脱离载具
    
*   具体使用案例如下：
    

```
--每当玩家攻击命中生物，玩家骑乘被命中生物
--当玩家攻击命中时会执行此函数
local function Player_AttackHit(event)
	--让指定生物骑乘另一生物
	--第一个参数为骑乘的生物在存档中的id，可以为玩家迷你号
	--第二个参数为被骑乘生物在存档中的id
	--第三个参数为骑乘位
	Actor:mountActor(event.eventobjid,event.toobjid,0)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.eventobjid.."的生物骑乘坐骑objid为"..event.toobjid)
end
--注册监听器，玩家攻击命中时执行Player_AttackHit函数
ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],Player_AttackHit)

```

#### setActionAttrState


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actionattr:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[CREATUREATTR\_ENABLE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%94%9F%E7%89%A9%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE)
    *   switch:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置生物行为属性状态
    
*   具体使用案例如下：
    

```
--设置生物的属性
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要设置的属性，1是移动，具体可以在“游戏数据类型”的“生物属性设置”中查看
--第三个参数为设置：true可以 false不可
Actor:setActionAttrState(0,1,false)
--在聊天框显示
Chat:sendSystemMsg("房主被设置为不可移动")

```

#### getActionAttrState


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actionattr:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[CREATUREATTR\_ENABLE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%94%9F%E7%89%A9%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   switch:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取生物特殊属性的状态
    
*   具体使用案例如下：
    

```
--获取指定生物的属性
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要获取的属性，1是移动，具体可以在“游戏数据类型”的“生物属性设置”中查看
local result=Actor:getActionAttrState(0,1)
if result==0 then--如果可以
	--在聊天框显示
	Chat:sendSystemMsg("房主当前可移动")
else--如果不可以
	--在聊天框显示
	Chat:sendSystemMsg("房主当前不可移动")
end

```

#### tryNavigationToPos


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   cancontrol:boolean bshowtipboolean
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：寻路到目标位置
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--自动寻路的生物实体id，这里是点击方块的玩家
	local x,y,z=event.x+10,event.y+1,event.z--寻路目的地
	local cancontrol=false--寻路过程中是否可控制：否
	local showtip=true--是否显示路线提示：是
	--让生物自动寻路
	Actor:tryNavigationToPos(objid, x, y, z, cancontrol, showtip)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### randomActorID


*   参数及类型：`nil`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：在资源库里随机创建一个生物
    
*   具体使用案例如下：
    

```
--随机生成一个生物id，返回值可以在“迷你世界ID查询”的“生物表数据”中查看
local result,id=Actor:randomActorID()
--在聊天框显示
Chat:sendSystemMsg("随机选取了一个生物id"..id)

```

#### getRidingActorObjId


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：获取骑乘生物的objid
    
*   具体使用案例如下：
    

```
--获取指定生物的骑乘坐骑在存档中的id
--参数为生物在存档中的id，可以是玩家迷你号，0是房主
local result,objid=Actor:getRidingActorObjId(0)
if objid==0 then--如果没有坐骑
	--在聊天框显示
	Chat:sendSystemMsg("房主当前没有骑乘坐骑")
else--如果正在骑乘坐骑
	--在聊天框显示
	Chat:sendSystemMsg("房主当前骑乘的坐骑在存档中的objid为："..objid)
end

```

#### playBodyEffectById


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物对象
    *   particleId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效id
    *   scale:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效大小
    *   ptme:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)时长（单位：秒）
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：在指定对象身上播放特效
    
*   具体使用案例如下：
    

```
--给指定生物添加特效
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要添加的特效id，大致从1000开始
--第三个参数为特效的缩放比例
--最后一个参数是播放时长，时长大于0时，特效会在设定时间内循环播放，直到时间结束；设置时间小于等于0或为nil时，循环类型的特效会持续播放，非循环类型的特效只播放一次
Actor:playBodyEffectById(0,1029,1,3)
--在聊天框显示
Chat:sendSystemMsg("给房主添加了1029特效，缩放比例为1，播放时间3秒")

```

#### stopBodyEffectById


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   particleId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效id
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：停止指定玩家身上的特效
    
*   具体使用案例如下：
    

```
--停止指定生物的某特效
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要停止的特效id，大致从1000开始
Actor:stopBodyEffectById(0,1029)
--在聊天框显示
Chat:sendSystemMsg("停止了房主的1029特效")

```

#### setBodyEffectScale


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   particleId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效id
    *   scale:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)特效大小
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置指定玩家身上的特效大小
    
*   具体使用案例如下：
    

```
--给房主添加特效
Actor:playBodyEffectById(0,1029,1)
--在聊天框显示
Chat:sendSystemMsg("给房主添加了1029特效，缩放比例为1")
--设置生物指定特效的缩放比例
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要缩放的特效id，大致从1000开始
--第三个参数为缩放比例
Actor:setBodyEffectScale(0,1029,2)
--在聊天框显示
Chat:sendSystemMsg("把房主的1029特效放大了两倍")

```

#### playSoundEffectById


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   soundId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   volume:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   pitch:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   isLoop:[**`bool`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：在指定Actor身上播放音效
    
*   具体使用案例如下：
    

```
--给指定生物播放音乐
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数10713为播放的音效id，具体可以在“迷你世界ID查询”的“音效表数据”里查看
--后三个参数分别是：音量、音高、是否循环播放
Actor:playSoundEffectById(0,10713,100,1,false)
--在聊天框显示
Chat:sendSystemMsg("正在给房主播放音乐")

```

#### stopSoundEffectById


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   soundId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：停止指定Actor身上的音效
    
*   具体使用案例如下：
    

```
--给房主播放音乐
Actor:playSoundEffectById(0,10713,100,1,false)
--在聊天框显示提示
Chat:sendSystemMsg("正在给房主播放音乐，做动画表情即可停止播放")
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--停止音乐10713对房主的播放
	--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
	--第二个参数为要停止播放的音乐id，具体可以在“迷你世界ID查询”的“音效表数据”里查看
	Actor:stopSoundEffectById(0,10713)
	--在聊天框显示
	Chat:sendSystemMsg("停止了音乐10713对房主的播放")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### appendSpeed


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)对象objid
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)轴向方向上的速度大小
*   返回值及类型：
    
    *   code:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)成功([ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK)
*   该方法的主要作用：给对象附加一个速度
    
*   具体使用案例如下：
    

```
--给指定生物附加一个速度
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--后三个参数分别为向东、上、北三个方向的分速度，可以为负
Actor:appendSpeed(0,5,6,7)
--在聊天框显示
Chat:sendSystemMsg("房主被弹了出去，向东、上、北方向的速度分别为5,6,7")

```

#### getFaceDirection


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：获取actor朝向
    
*   具体使用案例如下：
    

```
--获取指定生物在各个方向的朝向，参数为生物在存档中的id，可以是玩家迷你号，0是房主
local result,dirx,diry,dirz=Actor:getFaceDirection(0)
--在聊天框显示
Chat:sendSystemMsg("房主当前在东西方向偏移"..dirx.."，在上下方向偏移"..diry.."，在南北方向偏移"..dirz)

```

#### calcDirectionByDirection


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   vx
    *   vy
    *   vz:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)局部方向
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x=number, y=number, z=number}
*   该方法的主要作用：通过局部坐标方向计算绝对方向
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家id
	local vx,vy,vz=10,10,10--以objid的朝向建立坐标系的局部坐标
	--通过局部坐标计算在地图默认坐标系上的绝对坐标
	local result,dir=Actor:calcDirectionByDirection(objid, vx, vy, vz)
	print(dir)--输出绝对坐标
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### calcDirectionByAngle


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   yaw:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)局部水平偏移
    *   pitch:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)局部垂直偏移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x=number, y=number, z=number}
*   该方法的主要作用：通过局部球坐标方向计算绝对方向
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家id
	local yaw,pitch=90,90--以objid的朝向为基准的旋转角度(水平、垂直)
	--计算在地图上的绝对方向
	local result,dir=Actor:calcDirectionByAngle(objid, yaw, pitch)
	print(dir)--输出绝对方向
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### calcDirectionByYawDirection


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   vx
    *   vy
    *   vz:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)局部方向
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x=number, y=number, z=number}
*   该方法的主要作用：通过局部坐标方向计算绝对正方向(忽略视角仰角)
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家id
	local vx,vy,vz=10,10,10--以objid的朝向建立坐标系的局部坐标
	--计算绝对正方向(忽略竖坐标)
	local result,dir=Actor:calcDirectionByYawDirection(objid, vx, vy, vz)
	print(dir)--输出绝对正方向
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### calcDirectionByYawAngle


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   yaw:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)局部水平偏移
    *   pitch:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)局部垂直偏移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x=number, y=number, z=number}
*   该方法的主要作用：通过局部球坐标方向计算绝对正方向(忽略视角仰角)
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家id
	local yaw,pitch=90,90--以objid的朝向为基准的旋转角度(水平、垂直)
	--计算绝对正方向(忽略仰角)
	local result,dir=Actor:calcDirectionByYawAngle(objid, yaw, pitch)
	print(dir)--输出绝对正方向
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getEyeHeight


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   height:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取眼睛高度
    
*   具体使用案例如下：
    

```
--获取指定生物的眼睛高度，参数为生物在存档中的id，可以是玩家迷你号，0是房主
local result,height=Actor:getEyeHeight(0)
--在聊天框显示
Chat:sendSystemMsg("房主的眼睛高度为"..height)

```

#### getEyePosition


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   x
    *   y
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取眼睛位置
    
*   具体使用案例如下：
    

```
--获取指定生物的眼睛坐标，参数为生物在存档中的id，可以是玩家迷你号，0是房主
local result,x,y,z=Actor:getEyePosition(0)
--在聊天框显示
Chat:sendSystemMsg("房主眼睛坐标为：("..x..","..y..","..z..")")

```

#### getBodySize


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   w:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   h:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取身体尺寸
    
*   具体使用案例如下：
    

```
--获取指定生物的尺寸，参数为生物在存档中的id，可以是玩家迷你号，0是房主
local result,w,h=Actor:getBodySize(0)
--在聊天框显示
Chat:sendSystemMsg("房主身体宽："..w.."，高："..h)

```

#### playAct


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)动作id
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：播放动作
    
*   具体使用案例如下：
    

```
--让指定生物播放动画表情
--第一个参数为生物在存档中的实体id，可以是玩家迷你号，0是房主
--第二个参数为动作表情id，具体可以在“迷你世界ID查询”的“动作表数据”查询
Actor:playAct(0,1)
--在聊天框显示
Chat:sendSystemMsg("让房主播放打招呼动作")

```
```
local function ClickActor(event)
    local objid=event.toobjid--被点击的生物
	local actid=17--要播放的动作id，这里是“死亡”动作，具体可以在ID库查询
	--让生物播放动作
    Actor:playAct(objid,actid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物
```

#### shownickname


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   bshow:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)是否显示
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置昵称显示
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--要显示昵称的实体id，这里是点击方块的玩家
	local isshow=true--是否显示昵称：是
	--设置objid的昵称
	Actor:setnickname(objid, "昵称")
	--显示objid的昵称
	Actor:shownickname(objid, isshow)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### setnickname


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   nickname:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)名称
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置昵称
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--要设置昵称的实体id，这里是点击方块的玩家
	local name="昵称"--要设置的昵称
	--显示objid的昵称
	Actor:shownickname(objid, true)
	--设置objid的昵称
	Actor:setnickname(objid, name)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getActorFacade


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   name:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取Actor的外观
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--要获取外观的实体id，这里是玩家
	--获取objid的外观
	local result,name=Actor:getActorFacade(objid)
	Chat:sendSystemMsg(name)--在聊天框显示
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### changeCustomModel


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   modelName
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：改变Actor外观（只能切换已拥有皮肤的外观）
    
*   具体使用案例如下：
    

```
local function ClickActor(event)
	local objid=event.toobjid--要获取外观的实体id，这里是被点击的生物
	local result,name=Actor:getActorFacade(objid)--获取objid的外观
	
	local objid2=event.eventobjid--要设置外观的实体id，这里是点击生物的玩家
	--设置objid2的外观为刚刚获取的name
	Actor:changeCustomModel(objid2, name)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物
```

#### recoverinitialModel


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：恢复生物外观
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--要恢复外观的实体id，这里是点击方块的玩家
	--恢复objid的外观
	Actor:recoverinitialModel(objid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### addBuff


*   参数及类型：
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   buffid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   bufflv:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   customticks:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：增加指定BUFF
*   具体使用案例如下：

```
--给指定生物添加buff
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二、三个参数为要添加的buff，具体可以在“迷你世界ID查询”的“状态(效果)表数据”中查看
--最后一个参数为buff持续时长
Actor:addBuff(0,50,4,10000)
--在聊天框显示
Chat:sendSystemMsg("房主被添加了快速生命恢复4级的buff，持续时长10000")

```

#### hasBuff


*   参数及类型：
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   buffid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   ret:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：是否已经有了指定BUFF
*   具体使用案例如下：

```
--判断某生物是否有某buff
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要判断的buff，具体可以在“迷你世界ID查询”的“状态(效果)表数据”中查看
local result=Actor:hasBuff(0,50)
if result==0 then--如果有
	--在聊天框显示
	Chat:sendSystemMsg("房主当前有快速生命恢复的buff")
else--如果没有
	--在聊天框显示
	Chat:sendSystemMsg("房主当前没有快速生命恢复的buff")
end

```

#### removeBuff


*   参数及类型：
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   buffid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除指定BUFF
*   具体使用案例如下：

```
--移除指定生物的指定buff
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要移除的buff，具体可以在“迷你世界ID查询”的“状态(效果)表数据”中查看
Actor:removeBuff(0,50)
--在聊天框显示
Chat:sendSystemMsg("移除了房主的快速生命恢复的buff")

```

#### clearAllBuff


*   参数及类型：
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：清除全部BUFF
*   具体使用案例如下：

```
--移除某生物所有buff，参数为生物在存档中的id，可以是玩家迷你号，0是房主
Actor:clearAllBuff(0)
--在聊天框显示
Chat:sendSystemMsg("清空了房主所有buff")

```

#### clearAllBadBuff


*   参数及类型：
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：清除全部减益BUFF
*   具体使用案例如下：

```
--移除某生物所有负面buff，参数为生物在存档中的id，可以是玩家迷你号，0是房主
Actor:clearAllBadBuff(0)
--在聊天框显示
Chat:sendSystemMsg("清空了房主所有负面buff")

```

#### getBuffList


*   参数及类型：
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)buff数量
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)buffid数组
*   该方法的主要作用：获取已有BUFF
*   具体使用案例如下：

```
--获取某生物buff列表，参数为生物在存档中的id，可以是玩家迷你号，0是房主
local result,num,array=Actor:getBuffList(0)
if num>0 then--如果有buff
	for i,a in ipairs(array) do
		--在聊天框显示buff列表
		Chat:sendSystemMsg("房主第"..i.."个buff为："..a)
	end
else--如果没有buff
	--在聊天框显示
	Chat:sendSystemMsg("房主当前没有buff")
end

```

#### getBuffLeftTick


*   参数及类型：
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   buffid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   ticks:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取BUFF剩余tick
*   具体使用案例如下：

```
--获取某生物指定buff的剩余时长
--第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
--第二个参数为要获取剩余时长的buff，具体可以在“迷你世界ID查询”的“状态(效果)表数据”中查看
local result,ticks=Actor:getBuffLeftTick(0,50)
--在聊天框显示
Chat:sendSystemMsg("房主当前快速生命恢复的buff剩余时长为："..ticks)

```

#### randomFacadeID

*   参数及类型：
    *   无
*   返回值及类型：
    *   ErrorCode.OK
    *   facadeid:string
*   该方法的主要作用：获取随机外观id字符串
*   具体使用案例如下：

```
local result = Actor:randomFacadeID()
```

#### playerHurt


*   参数及类型：
    *   objidA:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   objidB:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   hp:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attackType:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：
*   具体使用案例如下：

```
local function ClickActor(event)
    local objidA=event.eventobjid--攻击者，这里是点击生物的玩家
    local objidB=event.toobjid--被攻击者，这里是被点击的生物
    local hp=999--造成的伤害数值
    local attackType=0--伤害类型，这里是近战伤害，可以在常量列表查询
	--使玩家对生物造成伤害
    Actor:playerHurt(objidA, objidB, hp, attackType)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物，执行函数ClickActor

```

#### playerHurtArea

*   参数及类型：
    *   objidA:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   hp:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attackType:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：
*   具体使用案例如下：

```
local function ClickBlock(event)
    local objidA=event.eventobjid--攻击者，这里是点击方块的玩家
	--以被点击的方块为中心，向前后左右上下各扩展10格创建一个区域
    local result,areaid=Area:createAreaRect({x=event.x,y=event.y,z=event.z},{x=10,y=10,z=10})
    local hp=999--造成的伤害数值
    local attackType=0--伤害类型，这里是近战伤害，可以在常量列表查询
	--使玩家对区域内的所有目标造成伤害
    Actor:playerHurtArea(objidA, areaid, hp, attackType)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块，执行函数ClickBlock
```

#### actorHurt


*   参数及类型：
    *   objidA:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   objidB:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   hp:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attackType:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：
*   具体使用案例如下：

```
local function ClickActor(event)
    local objidA=event.toobjid--攻击者，这里是被点击的生物
    local objidB=event.eventobjid--被攻击者，这里是点击生物的玩家
    local hp=999--造成的伤害数值
    local attackType=0--伤害类型，这里是近战伤害，可以在常量列表查询
	--使生物对玩家造成伤害
    Actor:actorHurt(objidA, objidB, hp, attackType)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物，执行函数ClickActor
```

#### actorHurtArea


*   参数及类型：
    *   objidA:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   hp:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attackType:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：
*   具体使用案例如下：

```
local function ClickActor(event)
    local objidA=event.toobjid--攻击者，这里是被点击的生物
    local _,x,y,z=Actor:getPosition(objidA)--获取被点击的生物坐标
    --以被点击的生物为中心，向前后左右上下各扩展10格创建区域
    local _,areaid=Area:createAreaRect({x=x,y=y,z=z},{x=10,y=10,z=10})
    local hp=999--造成的伤害数值
    local attackType=0--伤害类型，这里是近战伤害，可以在常量列表查询
	--使生物对区域内的所有目标造成伤害(包括生物自身)
    Actor:actorHurtArea(objidA, areaid, hp, attackType)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物，执行函数ClickActor
```

#### getPositionV2

*   参数及类型：
    *   objid:number对象的objid
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   pos:table方块坐标
*   该方法的主要作用： 获取actor位置
*   具体使用案例如下：

```
local code ,pos = Actor:getPositionV2(objid)
if code == ErrorCode.OK then
	print('执行成功' ,pos )
else
	print('执行失败')
end
```

#### setFaceDirection

*   参数及类型：
    *   objid:number对象objid
    *   x,y,z:number轴向上的方向
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置对象朝向
*   具体使用案例如下：

```
local code  = Actor:setFaceDirection(objid, x, y, z)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### ChangePlayerSkin

*   参数及类型：
    *   objid:number玩家或生物objid
    *   uin:number玩家UIn
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 改变对象为指定玩家ID的皮肤外观
*   具体使用案例如下：

```
local code  = Actor:ChangePlayerSkin(objid, uin)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```



### 玩家接口：Player
彼得兔 更新时间: 2024-07-28 17:49:05

继承自 [Actor](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1358)

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [getAttr(...)](#getattr) | 玩家属性获取 |
| 2 | [setAttr(...)](#setattr) | 玩家属性设置 |
| 3 | [getHostUin(...)](#gethostuin) | 获取房主uin |
| 4 | [isMainPlayer(...)](#ismainplayer) | 是否是本地玩家 |
| 5 | [getMainPlayerUin(...)](#getmainplayeruin) | 获取本地玩家的uin |
| 6 | [getGameResults(...)](#getgameresults) | 获取玩家比赛结果 |
| 7 | [setGameResults(...)](#setgameresults) | 设置玩家比赛结果 |
| 8 | [getGameScore(...)](#getgamescore) | 获取玩家游戏分数 |
| 9 | [setGameScore(...)](#setgamescore) | 设置玩家游戏分数 |
| 10 | [getGameRanking(...)](#getgameranking) | 获取玩家的排行 |
| 11 | [setGameRanking(...)](#setgameranking) | 给玩家设置排行 |
| 12 | [gainItems(...)](#gainitems) | 给玩家增加道具 |
| 13 | [teleportHome(...)](#teleporthome) | 传送到出生点 |
| 14 | [getCurToolID(...)](#getcurtoolid) | 获取玩家当前手持的物品id |
| 15 | [getNickname(...)](#getnickname) | 获取玩家昵称 |
| 16 | [removeBackpackItem(...)](#removebackpackitem) | 移走背包里的物品 |
| 17 | [getDieTimes(...)](#getdietimes) | 获取玩家死亡次数 |
| 18 | [getLeftLifeNum(...)](#getleftlifenum) | 获取玩家剩下的生命次数 |
| 19 | [setTeam(...)](#setteam) | 设置玩家队伍 |
| 20 | [getTeam(...)](#getteam) | 获取玩家队伍 |
| 21 | [getFoodLevel(...)](#getfoodlevel) | 获取当前饱食度 |
| 22 | [setFoodLevel(...)](#setfoodlevel) | 设置玩家饱食度 |
| 23 | [getCurShotcut(...)](#getcurshotcut) | 获取当前所用快捷栏键 |
| 24 | [onCurToolUsed(...)](#oncurtoolused) | 设置当前玩家手持的道具消耗 |
| 25 | [setSkillCD(...)](#setskillcd) | 设置CD |
| 26 | [reviveToPos(...)](#revivetopos) | 复活玩家到指定点 |
| 27 | [setRevivePoint(...)](#setrevivepoint) | 改变玩家复活点位置 |
| 28 | [mountActor(...)](#mountactor) | 玩家乘上坐骑 |
| 29 | [playAct(...)](#playact) | 玩家播放动画 |
| 30 | [notifyGameInfo2Self(...)](#notifygameinfo2self) | 对玩家显示飘窗文字 |
| 31 | [useItem(...)](#useitem) | 使玩家使用当前道具 |
| 32 | [rotateCamera(...)](#rotatecamera) | 旋转玩家镜头 |
| 33 | [changeViewMode(...)](#changeviewmode) | 改变玩家视角模式 |
| 34 | [setActionAttrState(...)](#setactionattrstate) | 设置玩家行为属性状态 |
| 35 | [checkActionAttrState(...)](#checkactionattrstate) | 获取玩家特殊属性的状态 |
| 36 | [isEquipByResID(...)](#isequipbyresid) | 设置玩家是否装备了某件装备 |
| 37 | [setPosition(...)](#setposition) | 设置player位置 |
| 38 | [getAimPos(...)](#getaimpos) | 获取player准星位置 |
| 39 | [setItemAttAction(...)](#setitemattaction) | 设置玩家道具设置属性：丢弃、掉落 |
| 40 | [playMusic(...)](#playmusic) | 对玩家播放背景音乐 |
| 41 | [stopMusic(...)](#stopmusic) | 停止播放玩家背景音乐 |
| 42 | [setGameWin(...)](#setgamewin) | 使玩家获得游戏胜利 |
| 43 | [openDevStore(...)](#opendevstore) | 打开开发者商店 |
| 44 | [getPropsType(...)](#getpropstype) | 玩家手持道具的类型 |
| 45 | —— | —— |
| 46 | [setCheckBoxScale(...)](#setcheckboxscale) | 设置检测掉落物半径 |
| 47 | [openBoxByPos(...)](#openboxbypos) | 打开可以操作的箱子 |
| 48 | [forceOpenBoxUI(...)](#forceopenboxui) | 强制打开可以操作的方块 如工具箱 |
| 49 | [openDevGoodsBuyDialog(...)](#opendevgoodsbuydialog) | customDesc : 自定义商品描述 |
| 50 | —— | —— |
| 51 | [changPlayerMoveType(...)](#changPlayerMoveType) | 改变玩家移动方式 |
| 52 | [setImmuneType(...)](#setImmuneType) | 设置玩家免疫伤害类型开关 |
| 53 | [shakeCamera(...)](#shakeCamera) | 抖动玩家摄像机 |
| 54 | [stopShakeCamera(...)](#stopShakeCamera) | 停止抖动玩家摄像机 |
| 55   | [playQQMusic(...)](#playQQMusic)       | 玩家播放QQ音乐                             |
| 56   | [operateQQMusic(...)](#operateQQMusic) | 暂停/恢复/停止玩家的QQ音乐                 |
| 57   | [OpenAppraiseView(...)](#OpenAppraiseView) | 打开评价界面                               |
| 58   | [OpenCollectionView(...)](#OpenCollectionView) | 打开收藏界面                               |
| 59   | [IsMiniVip(...)](#IsMiniVip)           | 是否为迷你会员                             |
| 60   | [SendFriendApply(...)](#SendFriendApply) | 发送好友请求                               |
| 61   | [HasFriend(...)](#HasFriend)           | 是否是好友判断                             |
| 62   | [PlayActInHand(...)](#PlayActInHand)   | 手持道具播放动画                           |
| 63   | [openDevStoreNew(...)](#openDevStoreNew) | 玩家打开开发者商店（仅开发者可用）        |
| 64   | [OpenBuiltinRank(...)](#OpenBuiltinRank) | 打开内置排行榜                             |
| 65   | [HideBuiltinRank(...)](#HideBuiltinRank) | 隐藏内置排行榜                             |
| 67   | [openDevGoodsBuyDetailedDialog(...)](#openDevGoodsBuyDetailedDialog) | 打开开发者商店商品详情页                   |
| 68   | [setMobileVibrate(...)](#setMobileVibrate) | 玩家手机震动                               |
| 69   | [SetCameraPosTransformBy(...)](#SetCameraPosTransformBy) | 玩家摄像机变换相对位置                     |
| 70   | [SetCameraPosTransformTo(...)](#SetCameraPosTransformTo) | 玩家摄像机变换到位置                       |
| 71   | [SetCameraRotTransformBy(...)](#SetCameraRotTransformBy) | 玩家摄像机旋转相对角度                     |
| 72   | [SetCameraRotTransformTo(...)](#SetCameraRotTransformTo) | 玩家摄像机旋转到角度                       |
| 73   | [SetCameraFovTransformBy(...)](#SetCameraFovTransformBy) | 玩家摄像机Fov变换相对值                    |
| 74   | [SetCameraFovTransformTo(...)](#SetCameraFovTransformTo) | 玩家摄像机Fov变换到值                      |
| 75   | [SetCameraAttrState(...)](#SetCameraAttrState) | 设置玩家的摄像机设置开关                   |
| 76   | [SetCameraRotMode(...)](#SetCameraRotMode) | 设置玩家的摄像机旋转模式                   |
| 77   | [SetCameraMountObj(...)](#SetCameraMountObj) | 设置玩家的摄像机挂载到对象                 |
| 78   | [SetCameraMountPos(...)](#SetCameraMountPos) | 设置玩家的摄像机挂载到位置                 |
| 79   | [ResetCameraAttr(...)](#ResetCameraAttr) | 重置玩家摄像机                             |
| 80   | [openDevGoodsSkinBuyDialog(...)](#openDevGoodsSkinBuyDialog) | 打开皮肤商品购买弹框                       |
| 81   | [openDevGoodsSkinDetail(...)](#openDevGoodsSkinDetail) | 打开皮肤商品详情页（仅限自定义UI按钮响应事件） |
| 82   | [openDevGoodsSkin(...)](#openDevGoodsSkin) | 打开皮肤商店（仅限自定义UI按钮响应事件）  |
| 83   | [OpenInviteBulletBox(...)](#OpenInviteBulletBox) | 打开好友邀请界面                           |
| 84   | [GetFirstInviter(...)](#GetFirstInviter) | 获取玩家首次邀请人（阻塞接口，请求间隔10s） |
| 85   | [GetNewInviteGroup(...)](#GetInviteGroupS) | 获取玩家新邀请的玩家组（阻塞接口，最多返回200个数据，请求间隔10s） |
| 86   | [OpenDevGoodsPage(...)](#OpenDevGoodsPage) | 打开开发者商店页面                         |
| 87   | [GetPlayerCostStatic(...)](#GetPlayerCostStatic) | 获取玩家的消费统计                         |

#### getAttr


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attrtype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[PLAYERATTR](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%8E%A9%E5%AE%B6%E5%B1%9E%E6%80%A7%E6%9E%9A%E4%B8%BE)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：玩家属性获取
    
*   具体使用案例如下：
    

```
--获取房主的生命值
--第一个参数0为游戏玩家id或玩家迷你号，0是房主
--第二个参数2是属性：当前生命值，具体可以在“游戏数据类型”的“玩家属性枚举”中查看
local result,value=Player:getAttr(0,2)
--在聊天框显示
Chat:sendSystemMsg("房主当前生命值为："..value)

```

#### setAttr


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attrtype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[PLAYERATTR](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%8E%A9%E5%AE%B6%E5%B1%9E%E6%80%A7%E6%9E%9A%E4%B8%BE)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：玩家属性设置
    
*   具体使用案例如下：
    

```
--设置房主的生命上限
--第一个参数0为游戏玩家id或玩家迷你号，0是房主
--第二个参数1是属性：生命上限，具体可以在“游戏数据类型”的“玩家属性枚举”中查看
--第三个参数500是需要设置属性的值
Player:setAttr(0,1,500)
--在聊天框显示
Chat:sendSystemMsg("房主生命上限被设置为500")

```

#### getHostUin


*   参数及类型：`nil`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   uin:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取房主uin
    
*   具体使用案例如下：
    

```
--获取房主迷你号
local result,uin=Player:getHostUin()
--在聊天框显示
Chat:sendSystemMsg("房主迷你号为："..uin)

```

#### isMainPlayer


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK是本地玩家是本地玩家
*   该方法的主要作用：是否是本地玩家
    
*   具体使用案例如下：
    

```
--判断某迷你号是不是本地玩家(房主)
--参数1000是需要判断的迷你号
local result=Player:isMainPlayer(1000)
if result==0 then--如果是
	--在聊天框显示
	Chat:sendSystemMsg("1000是本地玩家(房主)")
else--如果不是
	--在聊天框显示
	Chat:sendSystemMsg("1000不是本地玩家(房主)")
end

```

#### getMainPlayerUin


*   参数及类型：`nil`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   uin:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取本地玩家的uin
    
*   具体使用案例如下：
    

```
--获取本地玩家(房主)迷你号
local result,uin=Player:getMainPlayerUin()
--在聊天框显示
Chat:sendSystemMsg("本地玩家(房主)迷你号为："..uin)

```

#### getGameResults


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取玩家比赛结果
    
*   具体使用案例如下：
    

```
--获取玩家的游戏状态或比赛结果
--参数0是玩家id或玩家迷你号，0是房主
--返回值可能是：0游戏中 1游戏胜利 2游戏结束
local result,value=Player:getGameResults(0)
Chat:sendSystemMsg("当前房主的游戏状态是(0游戏中 1游戏胜利 2游戏结束)："..value)

```

#### setGameResults


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   result
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置玩家比赛结果
    
*   具体使用案例如下：
    

```
--设置玩家的游戏状态或比赛结果
--第一个参数是玩家id或玩家迷你号，0是房主
--第二个参数为游戏状态或比赛结果：0游戏中 1游戏胜利 2游戏结束
Player:setGameResults(0,1)
--在聊天框显示
Chat:sendSystemMsg("设置房主游戏胜利")

```

#### getGameScore


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取玩家游戏分数
    
*   具体使用案例如下：
    

```
--当玩家做动画表情时在聊天框显示房主游戏分数
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取房主的游戏分数
	--参数0为玩家id或玩家迷你号，0是房主
	local result,value=Player:getGameScore(0)
	--在聊天框显示
	Chat:sendSystemMsg("房主当前的游戏分数为"..value)
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### setGameScore


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   score:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置玩家游戏分数
    
*   具体使用案例如下：
    

```
--把房主的分数设为100(玩家分数不是玩家所在队伍的分数，要注意区别。队伍分数可查阅Team)
--第一个参数是玩家id或玩家迷你号，0是房主
--第二个参数为要设置的游戏分数
Player:setGameScore(0,100)
--在聊天框显示
Chat:sendSystemMsg("房主的游戏分数被设置为了100(玩家分数不是玩家所在队伍的分数)")

```

#### getGameRanking


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   rank:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取玩家的排行
    
*   具体使用案例如下：
    

```
--获取玩家的游戏排行
--参数0为玩家id或玩家迷你号，0是房主
local result,rank=Player:getGameRanking(0)
--在聊天框显示
Chat:sendSystemMsg("房主的游戏排行为"..rank)

```

#### setGameRanking


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   rank:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：给玩家设置排行
    
*   具体使用案例如下：
    

```
--设置房主的排行为第一名
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为玩家排行
Player:setGameRanking(0,1)
--在聊天框显示
Chat:sendSystemMsg("房主排行被设置为了第一名")

```

#### gainItems


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   prioritytype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)(1是优先快捷栏2是优先背包栏)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：给玩家增加道具
    
*   具体使用案例如下：
    

```
--给玩家背包增加某道具或物品
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数是添加物品的id，1是基岩
--第三个参数是添加的物品数量
--最后一个参数是优先快捷栏还是背包栏：1优先快捷栏 2优先背包栏
Player:gainItems(0,1,10,1)
--在聊天框显示
Chat:sendSystemMsg("给房主快捷栏或背包增加了10个基岩")

```

#### teleportHome


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：传送到出生点
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情房主都会被传送回出生点
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--把玩家传送至出生点，参数为玩家id或玩家迷你号，0是房主
	Player:teleportHome(0)
	--在聊天框显示
	Chat:sendSystemMsg("房主被传送到了出生点")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### getCurToolID


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   ret
*   该方法的主要作用：获取玩家当前手持的物品id
    
*   具体使用案例如下：
    

```
--获取玩家手持物品的id，参数为玩家id或玩家迷你号，0是房主
local result,id=Player:getCurToolID(0)
--在聊天框显示
Chat:sendSystemMsg("房主当前拿着的物品的id为"..id)

```

#### getNickname


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   name:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取玩家昵称
    
*   具体使用案例如下：
    

```
--获取玩家昵称，参数为玩家id或玩家迷你号，0是房主
local result,name=Player:getNickname(0)
--在聊天框显示
Chat:sendSystemMsg("房主的昵称为："..name)

```

#### removeBackpackItem


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移走背包里的物品
    
*   具体使用案例如下：
    

```
--移除玩家背包里的物品
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为要移除的物品id，101是土块
--第三个参数为要移除的物品数量
Player:removeBackpackItem(0,101,10)
--在聊天框显示
Chat:sendSystemMsg("移除了房主背包里的10个土块")

```

#### getDieTimes


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取玩家死亡次数
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，聊天框显示房主死亡次数
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取玩家死亡次数，参数为玩家id或玩家迷你号，0是房主
	local result,value=Player:getDieTimes(0)
	--在聊天框显示
	Chat:sendSystemMsg("房主的死亡次数为"..value)
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### getLeftLifeNum


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取玩家剩下的生命次数
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，聊天框显示房主剩余生命数
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取玩家剩余生命数，参数为玩家id或玩家迷你号，0是房主
	local result,value=Player:getLeftLifeNum(0)
	--在聊天框显示
	Chat:sendSystemMsg("房主剩余生命数为"..value)
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### setTeam


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置玩家队伍
    
*   具体使用案例如下：
    

```
--设置玩家队伍
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为要设置为的队伍
Player:setTeam(0,2)
--在聊天框显示
Chat:sendSystemMsg("房主被设置为第二队")

```

#### getTeam


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取玩家队伍
    
*   具体使用案例如下：
    

```
--获取玩家所在队伍，参数为玩家id或玩家迷你号，0是房主
local result,value=Player:getTeam(0)
--在聊天框显示
Chat:sendSystemMsg("房主所在队伍为："..value)

```

#### getFoodLevel


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：获取当前饱食度
    
*   具体使用案例如下：
    

```
--获取玩家饱食度，参数为玩家id或玩家迷你号，0是房主
local result,value=Player:getFoodLevel(0)
--在聊天框显示
Chat:sendSystemMsg("房主当前饱食度为"..value)

```

#### setFoodLevel


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   foodLevel:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置玩家饱食度
    
*   具体使用案例如下：
    

```
--设置玩家饱食度
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为要设置的饱食度
Player:setFoodLevel(0,100)
--在聊天框显示
Chat:sendSystemMsg("设置房主的饱食度为100")

```

#### getCurShotcut


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   scutIdx:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取当前所用快捷栏键
    
*   具体使用案例如下：
    

```
--获取玩家当前选中的快捷栏位置，参数为玩家id或玩家迷你号，0是房主
local result,scutIdx=Player:getCurShotcut(0)
--在聊天框显示
Chat:sendSystemMsg("房主当前选中的快捷栏为："..scutIdx)

```

#### onCurToolUsed


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具数量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置当前玩家手持的道具消耗
    
*   具体使用案例如下：
    

```
--设置玩家手持物品的消耗
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为消耗的道具数量(貌似没效果)
Player:onCurToolUsed(0,1)
--在聊天框显示
Chat:sendSystemMsg("房主当前选中的物品被移除了1个")

```

#### setSkillCD


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   cd:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置CD
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，房主的钻石剑CD都会变为100秒
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--设置玩家的道具CD
	--第一个参数为玩家id或玩家迷你号，0是房主
	--第二个参数为道具id，12005是能量剑(钻石剑)
	--第三个参数为设置的技能冷却时长
	Player:setSkillCD(0,12005,100)
	--在聊天框显示
	Chat:sendSystemMsg("房主的钻石剑技能冷却时间被设置为了100秒")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### reviveToPos


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：复活玩家到指定点
    
*   具体使用案例如下：
    

```
--复活玩家到指定位置(貌似没效果，也许只对死亡玩家有效)
--第一个参数为玩家id或玩家迷你号，0是房主
--后三个参数为复活到坐标
Player:reviveToPos(0,50,7,50)
--在聊天框显示
Chat:sendSystemMsg("把房主复活到(50,50)高度7的位置")

```

#### setRevivePoint


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：改变玩家复活点位置
    
*   具体使用案例如下：
    

```
--设置玩家的复活点坐标
--第一个参数为玩家id或玩家迷你号，0是房主
--后三个参数为设置的复活点坐标
Player:setRevivePoint(0,50,7,50)
--在聊天框显示
Chat:sendSystemMsg("房主复活点被设置在了(50,50)高度7的位置")

```

#### mountActor


*   参数及类型：
    
    *   objid:number玩家Uin
    *   objid:number坐骑ID(传入0，登下坐骑)
    *   bctrl:boolean是否可以控制（不填写则默认不可控制）
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：玩家乘上坐骑
    
*   具体使用案例如下：
    

```
local code = Player:mountActor(playerid, objid)
if code == ErrorCode.OK then
    print('执行成功', code )
else
    print('执行失败')
end
```

#### playAct


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)动作id
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：玩家播放动画
    
*   具体使用案例如下：
    

```
--让玩家播放动画表情
--第一个参数为玩家迷你号
--第二个参数为动作表情id，具体可以在“迷你世界ID查询”的“动作表数据”查询
Player:playAct(1000,1)
--在聊天框显示
Chat:sendSystemMsg("让迷你号为1000的玩家播放打招呼动作")

```

#### notifyGameInfo2Self


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   info:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)文字内容
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：对玩家显示飘窗文字
    
*   具体使用案例如下：
    

```
--对玩家显示飘窗提示框
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数是显示的文本内容
Player:notifyGameInfo2Self(0,"这里是飘窗文字内容")

```

#### useItem


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   status:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)使用状态
    *   onshift:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)是否按下shift键
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：使玩家使用当前道具
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--使用道具的玩家
	local itemid=12005--使用的道具id
	local status=1--使用状态(意义不明)
	local onshift=false--是否按下shift：否
	--使玩家使用道具(貌似无效)
	Player:useItem(objid, itemid, status, onshift)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### rotateCamera


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   yaw:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   pitch:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：旋转玩家镜头
    
*   具体使用案例如下：
    

```
--设置玩家视角方向
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为水平方向旋转角度，正北为0，由北向东为正方向
--第三个参数为俯仰角，90为俯视，-90为仰视，之间的角度可任意设置
Player:rotateCamera(0,90,90)
--在聊天框显示
Chat:sendSystemMsg("房主视角被设置为面向正东、俯视")

```

#### changeViewMode


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   viewmode:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[VIEWPORTTYPE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E8%A7%86%E5%8F%A3%E6%96%B9%E5%90%91)
    *   islock:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：改变玩家视角模式
    
*   具体使用案例如下：
    

```
--设置玩家视角模式
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为视角模式：0主视角 1背视角 2正视角 3俯视角 4俯视角 5自定义视角
--第三个参数为是否锁定视角：true锁定 false不锁定
Player:changeViewMode(0,0,true)
--在聊天框显示
Chat:sendSystemMsg("锁定房主视角为第一人称主视角")

```

#### setActionAttrState


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actionattr:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[PLAYERATTR\_ENABLE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%8E%A9%E5%AE%B6%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE)
    *   switch:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置玩家行为属性状态
    
*   具体使用案例如下：
    

```
--设置玩家行为属性状态
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数是行为属性值，1是“移动”，具体可以在“游戏数据类型”的“玩家属性设置”里查看
--第三个参数为“是否可以”，true可以 false不可以
Player:setActionAttrState(0,1,false)
--在聊天框显示
Chat:sendSystemMsg("设置房主不可移动")

```

#### checkActionAttrState


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actionattr:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[PLAYERATTR\_ENABLE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%8E%A9%E5%AE%B6%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：获取玩家特殊属性的状态
    
*   具体使用案例如下：
    

```
--获取玩家的行为属性状态
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数是行为属性值，1是“移动”，具体可以在“游戏数据类型”的“玩家属性设置”里查看
local result=Player:checkActionAttrState(0,1)
if result==0 then--如果可以
	--在聊天框显示
	Chat:sendSystemMsg("房主可以移动")
else--如果不可以
	--在聊天框显示
	Chat:sendSystemMsg("房主不可移动")
end

```

#### isEquipByResID


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   resid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置玩家是否装备了某件装备
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--检测的玩家
	local itemid=12241--要检测的装备，这里是蓝钻头盔
	--获取玩家是否穿戴itemid装备
	local result=Player:isEquipByResID(objid, itemid)
	if result==0 then
		Chat:sendSystemMsg("玩家穿着蓝钻头盔")
	else
		Chat:sendSystemMsg("玩家没有穿戴蓝钻头盔")
	end
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### setPosition


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置player位置
    
*   具体使用案例如下：
    

```
--设置玩家到某坐标
--第一个参数为玩家id或玩家迷你号，0是房主
--后三个参数为设置到的坐标
Player:setPosition(0,100,7,100)
--在聊天框显示
Chat:sendSystemMsg("房主被设置到了(100,100)高度7的位置")

```

#### getAimPos


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：获取player准星位置
    
*   具体使用案例如下：
    

```
--获取玩家准心坐标，参数为玩家id或玩家迷你号，0是房主
local result,x,y,z=Player:getAimPos(0)
--在聊天框显示
Chat:sendSystemMsg("房主当前准心坐标为("..x..","..y..","..z..")")
--输出到控制台
print("房主当前准心坐标为("..x..","..y..","..z..")")

```

#### setItemAttAction


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attrtype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[PLAYERATTR\_ITEM](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%8E%A9%E5%AE%B6%E9%81%93%E5%85%B7%E8%AE%BE%E7%BD%AE)
    *   switch:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置玩家道具设置属性：丢弃、掉落
    
*   具体使用案例如下：
    

```
--设置玩家的道具的操作属性
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为要设置的道具的id，101是土块
--第三个参数为属性值：1不可丢弃 2不可掉落
--最后一个参数为是否开启属性：true开启 false关闭
Player:setItemAttAction(0,101,1,true)
--在聊天框显示
Chat:sendSystemMsg("房主被设置为不可丢弃土块")

```

#### playMusic


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   musicId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   volume:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   pitch:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   isLoop:[**`bool`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：对玩家播放背景音乐
    
*   具体使用案例如下：
    

```
--对玩家播放音乐
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为音乐id，具体可以在“迷你世界ID表查询”的“音效表数据”里查看
--第三个参数为播放音量
--第四个参数为播放音高
--最后一个参数为是否循环播放
Player:playMusic(0,10713,100,1,false)
--在聊天框显示
Chat:sendSystemMsg("开始对房主播放音乐10713")

```

#### stopMusic


*   参数及类型：
    
    *   objid:number玩家Uin
    *   musicId:string声音ID
*   返回值及类型：
    
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用：停止播放玩家背景音乐
    
*   具体使用案例如下：
    

```
--对房主播放音乐10713
Player:playMusic(0,10713,100,1,false)
--在聊天框显示
Chat:sendSystemMsg("开始对房主播放音乐10713，做动画表情即可停止播放")
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--停止对玩家播放音乐，参数为玩家id或玩家迷你号，0是房主
	Player:stopMusic(0, 10713)
	--在聊天框显示
	Chat:sendSystemMsg("停止对房主播放音乐")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### setGameWin


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：使玩家获得游戏胜利
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，让指定迷你号的玩家获胜
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--指定迷你号玩家获胜，参数为玩家迷你号
	local result=Player:setGameWin(1000)
	if result==0 then--如果房间里存在迷你号为1000的玩家
		--在聊天框显示
		Chat:sendSystemMsg("设置玩家1000获胜")
	else--如果房间里没有迷你号为1000的玩家
		--在聊天框显示
		Chat:sendSystemMsg("房间里没有玩家迷你号为1000")
	end
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### openDevStore

*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：打开开发者商店
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，为指定玩家打开开发者商店
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--为指定玩家打开开发者商店，参数为玩家id或玩家迷你号，0是房主
	Player:openDevStore(0)
	--在聊天框显示
	Chat:sendSystemMsg("为房主打开了开发者商店")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### getPropsType


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：玩家手持道具的类型
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local playerid=event.eventobjid--玩家
	--获取玩家手持道具id
	local result,id=Player:getPropsType(playerid)
	if result==0 then
		Chat:sendSystemMsg("玩家手持道具id为".. id)
	else
		Chat:sendSystemMsg("玩家当前没有手持道具")
	end
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### setCheckBoxScale


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   range:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)缩放比例
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置检测掉落物半径
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家
	local range=10--缩放倍数
	--设置玩家检测掉落物半径放大10倍
	Player:setCheckBoxScale(objid, range)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### openBoxByPos


*   参数及类型：
    *   objid:[**`number`**](https://developers.mini1.cn/wiki/global.html#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   x
    *   y
    *   z:[**`number`**](https://developers.mini1.cn/wiki/global.html#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)方块位置
*   返回值及类型：
    *   [ErrorCode](https://developers.mini1.cn/wiki/global.html#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：打开可以操作的箱子
*   具体使用案例如下：

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家
	local x,y,z=0,7,0--箱子坐标
	--为玩家打开位于(0,0)高度7处的箱子(前提是这个位置有箱子且可以打开)
	Player:openBoxByPos(objid, x, y, z)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### forceOpenBoxUI


*   参数及类型：
    *   objid:[**`number`**](https://developers.mini1.cn/wiki/global.html#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   itemid:[**`number`**](https://developers.mini1.cn/wiki/global.html#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)工具箱方块ID
*   返回值及类型：
    *   [ErrorCode](https://developers.mini1.cn/wiki/global.html#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：强制打开可以操作的方块 如工具箱
*   具体使用案例如下：

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家
	local itemid=824--可以操作的方块id，这里是黄铜工匠台
	--为玩家打开操作界面(不需要实际放置)
	Player:forceOpenBoxUI(objid, itemid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### openDevGoodsBuyDialog


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   devGoodsId:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)商品id
    *   customDesc:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)商品描述
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：打开开发者商店商品弹窗
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家
	local devGoodsId=1--商品id，具体可在脚本编辑界面ID库查询
	local customDesc="商品描述"--商品描述
	--为玩家打开开发者商品购买弹窗
	Player:openDevGoodsBuyDialog(objid, devGoodsId, customDesc)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### changPlayerMoveType


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   moveType:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)移动方式类型
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：改变玩家移动方式
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
    local objid=event.eventobjid--点击方块的玩家
    local moveType=1--移动方式：1飞行 2默认
    --设置玩家的移动方式为飞行
	Player:changPlayerMoveType(objid, moveType)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块，执行函数ClickBlock
```

#### setImmuneType


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   immunetype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   isadd:[**`bool`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置玩家免疫伤害类型
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--点击方块的玩家
	local immunetype=0--近战伤害(伤害类型可在常量列表查询)
	local isadd=true--开启
	--给玩家开启免疫近战伤害
	Player:setImmuneType(objid, immunetype, isadd)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### shakeCamera


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   duration:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   power:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：抖动玩家镜头
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--要抖动镜头的玩家，这里是点击方块的玩家
	local duration=10--抖动持续秒数
	local power=100--抖动力度
	--抖动玩家的镜头持续duration秒，力度为power
	Player:shakeCamera(objid, duration, power)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### stopShakeCamera


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：停止抖动玩家镜头
    
*   具体使用案例如下：
    

```
--玩家点击方块，开始抖动镜头持续1000秒
local function ClickBlock(event)
	local objid=event.eventobjid--要抖动镜头的玩家，这里是点击方块的玩家
	local duration=1000--抖动持续秒数
	local power=100--抖动力度
	--抖动玩家的镜头持续duration秒，力度为power
	Player:shakeCamera(objid, duration, power)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
--玩家点击生物，停止镜头抖动
local function ClickActor(event)
	local objid=event.eventobjid--要停止抖动镜头的玩家，这里是点击生物的玩家
	--停止抖动玩家的镜头
	Player:stopShakeCamera(objid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物
```

#### playQQMusic


*   参数及类型：
    *   objid:number玩家ID
    *   musicId:number音乐ID
    *   volume:number音量
    *   isLoop:boolean是否循环
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：玩家播放qq音乐
*   具体使用案例如下：

```
local result = Player:playQQMusic(objid,musicId,valume,idLoop)

```

#### operateQQMusic


*   参数及类型：
    *   operate:numberQQMUSICOP
    *   objid:number玩家ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：暂停/恢复/停止玩家的QQ音乐
*   具体使用案例如下：

```
local result = Player:playQQMusic(objid,musicId,valume,idLoop)

```

#### OpenAppraiseView(...)**

*   参数及类型：
    *   objid:number玩家ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：打开评价界面**（用户游玩游戏超过3分钟后才能触发。触发后有十分钟的CD）**
*   具体使用案例如下：

```
local function callback(event)
  local ret = Player:OpenAppraiseView(event.eventobjid)
  if ret == ErrorCode.OK then
      print('打开成功')
  end
end
ScriptSupportEvent:registerEvent([[Player.ClickBlock]],callback) --点击方块事件
```

#### OpenCollectionView(...)

*   参数及类型：
    *   objid:number玩家ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：打开收藏界面**（用户游玩游戏超过3分钟后才能触发。触发后有十分钟的CD）**
*   具体使用案例如下：

```
local function callback(event)
  local ret = Player:OpenCollectionView(event.eventobjid)
  if ret == ErrorCode.OK then
      print('打开成功')
  end
end
ScriptSupportEvent:registerEvent([[Player.ClickBlock]],callback) --点击方块事件
```

#### IsMiniVip(...)

*   参数及类型：
    *   objid:number玩家ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：判断是否是迷你会员
*   具体使用案例如下：

```
local function callback(event)
  local ret = Player:IsMiniVip(event.eventobjid)
  if ret == ErrorCode.OK then
      print('玩家是会员')
  else
      print('玩家不是会员')
  end
end
ScriptSupportEvent:registerEvent([[Player.ClickBlock]],callback) --点击方块事件
```

#### SendFriendApply

*   参数及类型：
    *   playerid:number发送请求的玩家ID
    *   playerid2:number被添加的好友ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：发送好友请求
*   具体使用案例如下：

```
local result = Player:SendFriendApply(playerid,playerid2)
```

#### HasFriend

*   参数及类型：
    *   playerid:number发送请求的玩家ID
    *   playerid2:number判断是否是好友的ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：判断playerid是否有好友playerid2
*   具体使用案例如下：

```
local result = Player:HasFriend(playerid,playerid2)
```

#### PlayActInHand

*   参数及类型：
    *   playerid:number玩家ID
    *   animid:number动作ID
    *   playmode:number播放模式(ANIMMODE)
*   返回值及类型：
    *   ErrorCode.OK
    *   value:number 属性值
*   该方法的主要作用：玩家手持微缩道具播放动画
*   具体使用案例如下：

```
local result = Player:PlayActInHand(objid,12,ITEMATTR.ATTACK) --指定玩家当前选择的微缩道具循环播放跑动画
```

#### openDevStoreNew**

*   参数及类型：
    *   objid:number玩家Uin
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 玩家打开开发者商店（仅开发者可用）
*   具体使用案例如下：

```
local code  = Player:openDevStoreNew(objid)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### OpenBuiltinRank

*   参数及类型：
    *   objid:number对象ID
    *   id:number排行榜ID(也可填索引)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 打开内置排行榜
*   具体使用案例如下：

```
local code  = Player:OpenBuiltinRank(playerid, id)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### HideBuiltinRank

*   参数及类型：
    *   objid:number对象ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 隐藏内置排行榜
*   具体使用案例如下：

```
local code  = Player:HideBuiltinRank(playerid)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### openDevGoodsBuyDetailedDialog

*   参数及类型：
    *   objid:number玩家Uin
    *   devGoodsId:number商品ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 打开开发者商店商品详情页
*   具体使用案例如下：

```
local code  = Player:openDevGoodsBuyDetailedDialog(objid, devGoodsId)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### setMobileVibrate

*   参数及类型：
    *   playerid:number玩家Uin
    *   time:number震动时长(单位：ms)
    *   amplitude:number震动强度(范围：1~255)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 玩家手机震动
*   具体使用案例如下：

```
local code  = Player:setMobileVibrate(playerid, time, amplitude)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraPosTransformBy

*   参数及类型：
    *   playerid:number玩家Uin
    *   vec:table变换轴向，不变换的轴向可不填（{x=100 y=100}摄像机xy轴分别增加100）
    *   animid:number动画枚举(LinearTransformation)LinearTransformation
    *   time:number动画时长
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 玩家摄像机变换相对位置
*   具体使用案例如下：

```
local code  = Player:SetCameraPosTransformBy(playerid, vec, animid, time)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraPosTransformTo

*   参数及类型：
    *   playerid:number玩家Uin
    *   vec:table变换轴向，不变换的轴向可不填（{x=100 y=100}摄像机xy轴分别变换到100的位置）
    *   animid:number动画枚举(LinearTransformation)LinearTransformation
    *   time:number动画时长
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 玩家摄像机变换到位置
*   具体使用案例如下：

```
local code  = Player:SetCameraPosTransformTo(playerid, vec, animid, time)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraRotTransformBy

*   参数及类型：
    *   playerid:number玩家Uin
    *   vec:table变换轴向，不变换的轴向可不填（{x=90 y=90}摄像机xy轴分别旋转90度）
    *   animid:number动画枚举(LinearTransformation)LinearTransformation
    *   time:number动画时长
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 玩家摄像机旋转相对角度
*   具体使用案例如下：

```
local code  = Player:SetCameraRotTransformBy(playerid, vec, animid, time)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraRotTransformTo

*   参数及类型：
    *   playerid:number玩家Uin
    *   vec:table变换轴向，不变换的轴向可不填（{x=90 y=90}摄像机xy轴分别旋转到90度）
    *   animid:number动画枚举(LinearTransformation)LinearTransformation
    *   time:number动画时长
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 玩家摄像机旋转到角度
*   具体使用案例如下：

```
local code  = Player:SetCameraRotTransformTo(playerid, vec, animid, time)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraFovTransformBy

*   参数及类型：
    *   playerid:number玩家Uin
    *   value:number视场角
    *   animid:number动画枚举(LinearTransformation)LinearTransformation
    *   time:number动画时长
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 玩家摄像机Fov变换相对值
*   具体使用案例如下：

```
local code  = Player:SetCameraFovTransformBy(playerid, value, animid, time)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraFovTransformTo

*   参数及类型：
    *   playerid:number玩家Uin
    *   value:number视场角
    *   animid:number动画枚举(LinearTransformation)LinearTransformation
    *   time:number动画时长
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 玩家摄像机Fov变换到值
*   具体使用案例如下：

```
local code  = Player:SetCameraFovTransformTo(playerid, value, animid, time)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraAttrState

*   参数及类型：
    *   playerid:number玩家Uin
    *   attr:number摄像机属性(CameraModel)CameraModel
    *   enable:boolean是否
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置玩家的摄像机设置开关
*   具体使用案例如下：

```
local code  = Player:SetCameraAttrState(playerid, attr, enable)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraRotMode

*   参数及类型：
    *   playerid:number玩家Uin
    *   attr:number摄像机旋转模式(CameraRotate)CameraRotate
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置玩家的摄像机旋转模式
*   具体使用案例如下：

```
local code  = Player:SetCameraRotMode(playerid, attr)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraMountObj

*   参数及类型：
    *   playerid:number玩家Uin
    *   objid:number对象objid
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置玩家的摄像机挂载到对象
*   具体使用案例如下：

```
local code  = Player:SetCameraMountObj(playerid, objid)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetCameraMountPos

*   参数及类型：
    *   playerid:number玩家Uin
    *   pos:table位置坐标
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置玩家的摄像机挂载到位置
*   具体使用案例如下：

```
local code  = Player:SetCameraMountPos(playerid, pos)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### ResetCameraAttr

*   参数及类型：
    *   playerid:number玩家Uin
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 重置玩家摄像机
*   具体使用案例如下：

```
local code  = Player:ResetCameraAttr(playerid)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end

```

#### openDevGoodsSkinBuyDialog

*   参数及类型：
    *   playerid:number玩家Uin
    *   skin:string模型ID
    *   desc:string描述语
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 打开皮肤商品购买弹框
*   具体使用案例如下：

```
local code  = Player:openDevGoodsSkinBuyDialog(playerid, skin, desc)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end

```

#### openDevGoodsSkinDetail

*   参数及类型：
    *   playerid:number玩家Uin
    *   skin:string模型ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 打开皮肤商品详情页(仅限自定义UI按钮响应事件)
*   具体使用案例如下：

```
local code  = Player:openDevGoodsSkinDetail(playerid, skin)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### openDevGoodsSkin

*   参数及类型：
    *   playerid:number玩家Uin
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 打开皮肤商店(仅限自定义UI按钮响应事件)
*   具体使用案例如下：

```
local code  = Player:openDevGoodsSkin(playerid)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### OpenInviteBulletBox

*   参数及类型：
    *   playerid:number玩家Uin
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 打开好友邀请界面
*   具体使用案例如下：

```
local code  = Player:OpenInviteBulletBox(playerid)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### GetFirstInviter

*   参数及类型：
    *   playerid:number被邀请的玩家Uin
*   返回值及类型：
    *   code:number成功(ErrorCode.OK) ErrorCode
    *   uin:number邀请人的玩家Uin(获取失败时返回错误码)
*   该方法的主要作用： 获取玩家首次邀请人(阻塞接口，请求间隔10s)
*   具体使用案例如下：

```
local code , uin = Player:GetFirstInviter(playerid)
if code == ErrorCode.OK then
    print('执行成功' , uin )
else
    print('执行失败')
end
```

#### GetNewInviteGroup

*   参数及类型：
    *   objid:number玩家Uin
*   返回值及类型：
    *   code:number成功(ErrorCode.OK) ErrorCode
    *   uins:table玩家ID的数组
*   该方法的主要作用： 获取玩家新邀请的玩家组(阻塞接口，最多返回200个数据，请求间隔10s)
*   具体使用案例如下：

```
local code ,uins = Player:GetNewInviteGroup(playerid)
if code == ErrorCode.OK then
    print('执行成功' ,uins )
else
    print('执行失败')
end
```

#### OpenDevGoodsPage

*   参数及类型：
    *   objid:number玩家Uin
    *   pagetype:number页面枚举值(MiniShopPage)MiniShopPage
    *   pagetitle:string页面标题
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 打开开发者商店页面
*   具体使用案例如下：

```
local code  = Player:OpenDevGoodsPage(playerid, pagetype, pagetitle)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### GetPlayerCostStatic

*   参数及类型：
    *   objid : number 玩家Uin
    *   tbegin : number 开始时间的时间戳（时间戳（Unix timestamp）是指自协调世界时（UTC）的1970年1月1日00:00:00起至现在所经过的秒数。时间戳一般是一个10位数字）
    *   tend : number 结束时间的时间戳
    *   costtype : number 查询类型（1迷你豆 2迷你币）
*   返回值及类型：
    *   code : number 成功(ErrorCode.OK) [ErrorCode](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)
    *   icount : number 消费数量
*   该方法的主要作用： 获取玩家的消费统计（有15s冷却限制，查询失败或触发冷却返回-1）
*   具体使用案例如下：

```
local code ,icount = Player:GetPlayerCostStatic(playerid, tbegin, tend, costtype)
if code == ErrorCode.OK then
    print('执行成功' ,icount )
else
    print('执行失败')
end
```



### 生物接口：Creature

彼得兔 更新时间: 2024-05-22 17:51:22

继承自 [Actor](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1358)

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [getAttr(...)](#getattr) | 生物属性获取 |
| 2 | [setAttr(...)](#setattr) | 生物属性设置 |
| 3 | [isAdult(...)](#isadult) | 判断该生物是否成年 |
| 4 | [setOxygenNeed(...)](#setoxygenneed) | 设置是否依赖氧气 |
| 5 | [getTamedOwnerID(...)](#gettamedownerid) | 获取驯养主ID |
| 6 | [setPanic(...)](#setpanic) | 设置是否正在惊慌 |
| 7 | [setAIActive(...)](#setaiactive) | 设置AI是否生效 |
| 8 | [getActorID(...)](#getactorid) | 获取生物actorID |
| 9 | [getActorName(...)](#getactorname) | 获取生物名称 |
| 10 | [addModAttrib(...)](#addmodattrib) | 增加模组属性 |
| 11 | [getModAttrib(...)](#getmodattrib) | 获取模组属性 |
| 12 | [setTeam(...)](#setteam) | 设置生物队伍 |
| 13 | [getTeam(...)](#getteam) | 获取生物队伍 |
| 14 | [getMaxFood(...)](#getmaxfood) | 获取最大饥饿度 |
| 15 | [getFood(...)](#getfood) | 获取饥饿度 |
| 16 | [setFood(...)](#setfood) | 设置饥饿度 |
| 17 | [getHpRecover(...)](#gethprecover) | HP恢复 |
| 18 | [getMaxOxygen(...)](#getmaxoxygen) | 最大氧气值 |
| 19 | [getWalkSpeed(...)](#getwalkspeed) | 行走速度 |
| 20 | [getSwimSpeed(...)](#getswimspeed) | 游泳速度（水中速度） |
| 21 | [getJumpPower(...)](#getjumppower) | 跳跃力 |
| 22 | [getMass(...)](#getmass) | 重量 |
| 23 | [getDodge(...)](#getdodge) | 闪避 |
| 24 | [getPunchAttack(...)](#getpunchattack) | 近程攻击 |
| 25 | [getRangeAttack(...)](#getrangeattack) | 远程攻击 |
| 26 | [getPunchDefense(...)](#getpunchdefense) | 近程防御 |
| 27 | [getRangeDefense(...)](#getrangedefense) | 远程防御 |
| 28 | [setMaxHp(...)](#setmaxhp) | 设置血量 |
| 29 | [setHP(...)](#sethp) | 设置血量 |
| 30 | [setHpRecover(...)](#sethprecover) | 设置HP恢复 |
| 31 | [setOxygen(...)](#setoxygen) | 设置氧气 |
| 32 | [setWalkSpeed(...)](#setwalkspeed) | 设置行走速度 |
| 33 | [setSwimSpeed(...)](#setswimspeed) | 设置游泳速度（水中速度） |
| 34 | [setJumpPower(...)](#setjumppower) | 设置跳跃力 |
| 35 | [setDodge(...)](#setdodge) | 设置闪避 |
| 36 | [setPunchAttack(...)](#setpunchattack) | 设置近程攻击 |
| 37 | [setRangeAttack(...)](#setrangeattack) | 设置远程攻击 |
| 38 | [setPunchDefense(...)](#setpunchdefense) | 设置近程防御 |
| 39 | [setRangeDefense(...)](#setrangedefense) | 设置远程防御 |
| 40 | [replaceActor(...)](#replaceActor) | 替换生物 |
| 41   | [GetMonsterDefName(...)](#GetMonsterDefName) | 获取生物名称                               |
| 42   | [GetMonsterDefDesc(...)](#GetMonsterDefDesc) | 获取生物描述                               |

#### getAttr


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attrtype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[CREATUREATTR](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%94%9F%E7%89%A9%E5%B1%9E%E6%80%A7%E6%9E%9A%E4%B8%BE)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：生物属性设置获取
    
*   具体使用案例如下：
    

```
--玩家点击生物，聊天框显示生物属性
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的指定属性
	--第一个参数为要获取属性的生物在存档中的id
	--第二个参数为要获取的属性，2是当前生命值，具体可在“游戏数据类型”的“生物属性枚举”中查看
	local result,value=Creature:getAttr(event.toobjid,2)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的当前生命值为："..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setAttr


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attrtype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[CREATUREATTR](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E7%94%9F%E7%89%A9%E5%B1%9E%E6%80%A7%E6%9E%9A%E4%B8%BE)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)需要设置的数值
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：生物属性设置
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物属性
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的指定属性
	--第一个参数为要设置属性的生物在存档中的id
	--第二个参数为要设置的属性，1是最大生命值，具体可在“游戏数据类型”的“生物属性枚举”中查看
	--第三个参数为要设置的值
	Creature:setAttr(event.toobjid,1,999)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的最大生命值被设置为了999")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### isAdult


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK已经成年已经成年
*   该方法的主要作用：判断该生物是否成年
    
*   具体使用案例如下：
    

```
--玩家点击生物，聊天框显示生物是否成年
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--判断生物是否成年，参数为生物在存档中的id
	local result=Creature:isAdult(event.toobjid)
	if result==0 then--如果已成年
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的生物已成年")
	else--如果未成年
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的生物未成年")
	end
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setOxygenNeed


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   v:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置是否依赖氧气
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置该生物是否需要氧气生成
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置生物是否需要氧气
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为是否需要氧气：true需要 false不需要
	Creature:setOxygenNeed(event.toobjid,false)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物被设置为了不需要氧气生存")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getTamedOwnerID


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   uin:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)0表示未驯服
*   该方法的主要作用：获取驯养主ID
    
*   具体使用案例如下：
    

```
--玩家点击生物，聊天框显示生物主人
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物是否被驯服、被谁驯服
	local result,uin=Creature:getTamedOwnerID(event.toobjid)
	if uin==0 then--如果没有被驯服
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的生物没有被驯服")
	else--如果被驯服
		--在聊天框显示
		Chat:sendSystemMsg("objid为"..event.toobjid.."的生物被玩家"..uin.."驯服")
	end
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setPanic


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   v:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置是否正在惊慌
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物是否惊慌
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置生物是否正在惊慌
	--第一个参数为生物在存档中的id
	--第二个参数为是否正在惊慌：true是 false否
	Creature:setPanic(event.toobjid,true)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物被设置为了正在惊慌")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setAIActive


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   v:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置AI是否生效
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物AI是否生效
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置生物AI是否生效
	--第一个参数为生物在存档中的id
	--第二个参数为AI是否生效：true是 false否
	Creature:setAIActive(event.toobjid,false)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物AI被设置为了不生效")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getActorID


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   actorid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取生物actorID
    
*   具体使用案例如下：
    

```
--玩家点击生物，在聊天框显示生物id
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的生物id，参数为生物在存档中的id
	local result,actorid=Creature:getActorID(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物在当前存档中的生物id为："..actorid)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getActorName


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   name:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取生物名称
    
*   具体使用案例如下：
    

```
--玩家点击生物，在聊天框显示生物名字
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的生物名字，参数为生物在存档中的id
	local result,name=Creature:getActorName(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的名字为："..name)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### addModAttrib


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attrtype:[**`MODATTRIB_TYPE`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%99%84%E9%AD%94%E5%B1%9E%E6%80%A7%E7%B1%BB%E5%9E%8B)附魔属性类型
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)设置数值大小
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：增加模组属性
    
*   具体使用案例如下：
    

```
--玩家点击生物，增加被点击生物的buff属性
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--增加指定生物的buff属性
	--第一个参数为要增加属性的生物在存档中的id
	--第二个参数为要增加的附魔属性，0是移动速度，具体可以在“游戏数据类型”的“附魔属性类型”中查看
	--第三个参数为要增加的值
	Creature:addModAttrib(event.toobjid,0,1)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的移动速度附魔等级被增加了1")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getModAttrib


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   attrtype:[**`MODATTRIB_TYPE`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%99%84%E9%AD%94%E5%B1%9E%E6%80%A7%E7%B1%BB%E5%9E%8B)附魔属性类型
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取模组属性
    
*   具体使用案例如下：
    

```
--玩家点击生物，聊天框显示生物buff属性
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的buff属性值
	--第一个参数为要获取属性的生物在存档中的id
	--第二个参数为要获取的附魔属性，0是移动速度，具体可以在“游戏数据类型”的“附魔属性类型”中查看
	local result,value=Creature:getModAttrib(event.toobjid,0)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的移动速度附魔等级为："..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setTeam


*   参数及类型：
    
    *   objids:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置生物队伍
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物队伍
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置生物所属的队伍
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置为的队伍id
	Creature:setTeam(event.toobjid,1)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物被设置到了队伍1")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getTeam


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取生物队伍
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物队伍
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物所属的队伍，参数为要获取的生物在存档中的id
	local result,teamid=Creature:getTeam(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物所属的队伍为："..teamid)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getMaxFood


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取最大饥饿度
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物最大饥饿度
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 最大饥饿度，参数为要获取的生物在存档中的id
	local result,value=Creature:getMaxFood(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 最大饥饿度为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getFood


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取饥饿度
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物当前饥饿度
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 当前饥饿度，参数为要获取的生物在存档中的id
	local result,value=Creature:getFood(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 当前饥饿度为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setFood


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置饥饿度
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的当前饥饿度
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的当前饥饿度
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setFood(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 当前饥饿度被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getHpRecover


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：HP恢复
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物HP恢复
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 HP恢复，参数为要获取的生物在存档中的id
	local result,value=Creature:getHpRecover(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 HP恢复为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getMaxOxygen


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：最大氧气值
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物最大氧气值
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 最大氧气值，参数为要获取的生物在存档中的id
	local result,value=Creature:getMaxOxygen(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 最大氧气值为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getWalkSpeed


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：行走速度
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物行走速度
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 行走速度，参数为要获取的生物在存档中的id
	local result,value=Creature:getWalkSpeed(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 行走速度为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getSwimSpeed


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：游泳速度（水中速度）
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物游泳速度
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 游泳速度，参数为要获取的生物在存档中的id
	local result,value=Creature:getSwimSpeed(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 游泳速度为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getJumpPower


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：跳跃力
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物跳跃力
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 跳跃力，参数为要获取的生物在存档中的id
	local result,value=Creature:getJumpPower(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 跳跃力为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getMass


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：重量
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物重量
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 重量，参数为要获取的生物在存档中的id
	local result,value=Creature:getMass(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 重量为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getDodge


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：闪避
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物闪避值
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 闪避值，参数为要获取的生物在存档中的id
	local result,value=Creature:getDodge(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 闪避值为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getPunchAttack


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：近程攻击
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物近战攻击
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 近战攻击，参数为要获取的生物在存档中的id
	local result,value=Creature:getPunchAttack(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 近战攻击为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getRangeAttack


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：远程攻击
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物远程攻击
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 远程攻击，参数为要获取的生物在存档中的id
	local result,value=Creature:getRangeAttack(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 远程攻击为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getPunchDefense


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：近程防御
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物近战防御
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 近战防御，参数为要获取的生物在存档中的id
	local result,value=Creature:getPunchDefense(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 近战防御为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### getRangeDefense


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：远程防御
    
*   具体使用案例如下：
    

```
--玩家点击生物，获取生物远程防御
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--获取指定生物的 远程防御，参数为要获取的生物在存档中的id
	local result,value=Creature:getRangeDefense(event.toobjid)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物 远程防御为"..value)
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setMaxHp


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置血量上限
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的最大生命值
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的最大生命值
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setMaxHp(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 最大生命值被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setHP


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置血量
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的当前生命值
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的当前生命值
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setHP(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 当前生命值被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setHpRecover


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置HP恢复
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的生命恢复
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的生命恢复
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setHpRecover(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 生命恢复被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setOxygen


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置氧气
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的氧气值
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的氧气值
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setOxygen(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 氧气值被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setWalkSpeed


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置行走速度
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的行走速度
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的行走速度
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setWalkSpeed(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 行走速度被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setSwimSpeed


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置游泳速度（水中速度）
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的游泳速度
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的游泳速度
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setSwimSpeed(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 游泳速度被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setJumpPower


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置跳跃力
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的跳跃力
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的跳跃力
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setJumpPower(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 跳跃力被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setDodge


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置闪避
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的闪避值
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的闪避值
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setDodge(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 闪避值被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setPunchAttack


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置近程攻击
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的近战攻击
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的近战攻击
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setPunchAttack(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 近战攻击被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setRangeAttack


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置远程攻击
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的远程攻击
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的远程攻击
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setRangeAttack(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 远程攻击被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setPunchDefense


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置近程防御
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的近战防御
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的近战防御
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setPunchDefense(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 近战防御被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### setRangeDefense


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置远程防御
    
*   具体使用案例如下：
    

```
--玩家点击生物，设置生物的远程防御
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置指定生物的远程防御
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置的值
	Creature:setRangeDefense(event.toobjid,100)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物的 远程防御被设置为了100")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)

```

#### replaceActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actorid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   hp:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：替换生物
    
*   具体使用案例如下：
    

```
local function ClickActor(event)
	local objid=event.toobjid--要替换掉的生物实体id，这里是被点击的生物
	local actorid=3400--要替换为的生物类型id，这里是鸡，具体可以在ID库查询
	local hp=10--替换后的生物血量
	--把被点击的生物替换为actorid，生命值为hp
	Creature:replaceActor(objid, actorid, hp)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物
```

#### GetMonsterDefName

*   参数及类型：
    *   monsterid:number生物类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   name:number 生物类型名称
*   该方法的主要作用：获取生物名称
*   具体使用案例如下：

```
local result,name = Creature:GetMonsterDefName(monsterid)
```

#### GetMonsterDefDesc

*   参数及类型：
    *   monsterid:number生物类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   desc:number 生物类型描述
*   该方法的主要作用：获取生物类型描述
*   具体使用案例如下：

```
local result,desc = Creature:GetMonsterDefDesc(monsterid)
```


### 世界UI接口：UI

彼得兔 更新时间: 2023-10-25 10:40:44

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [setGBattleUI(...)](#setgbattleui) | 设置战斗总结UI |
| 2 | [world2RadarPos(...)](#world2radarpos) | 世界坐标转换到小地图 |
| 3 | [world2RadarDist(...)](#world2radardist) | 世界长度转换到小地图 |
| 4 | [setMinimapRenderMode(...)](#setminimaprendermode) | 设置小地图模式。1：45度旋转视角；2：全图俯视角 |
| 5 | [setShapeLine(...)](#setshapeline) | 地图标记形状设置，设置成线条(LineShape) |
| 6 | [setShapeCircle(...)](#setshapecircle) | 地图标记形状设置，设置成圆(CircleShape) |
| 7 | [ShowScreenEffect(...)](#showscreeneffect) | 显示屏幕特效 |

#### setGBattleUI

*   参数及类型：
    
    *   name:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)设定名
    *   value:string or boolean设定值
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置战斗总结UI
    
*   具体使用案例如下：
    

```
--设置游戏结束界面(有些貌似没效果)
--设置左标题，只需要修改第二个参数
UI:setGBattleUI("left_title","这里是左标题")
--设置右标题，只需要修改第二个参数
UI:setGBattleUI("rigjt_title","这里是右标题")
--设置左描述，只需要修改第二个参数
UI:setGBattleUI("left_desc","这里是左描述")
--设置左简述，只需要修改第二个参数
UI:setGBattleUI("left_title_desc","这里是左简述")
--设置右简述，只需要修改第二个参数
UI:setGBattleUI("right_title_desc","这里是右简述")
--设置比分导航栏面板按钮是否显示，true显示 false不显示
UI:setGBattleUI("battle_btn",true)
--设置比赛结果是否显示，true显示 false不显示
UI:setGBattleUI("result",true)
--设置比赛结果底板是否显示，true显示 false不显示
UI:setGBattleUI("result_bkg",true)
--设置再来一局按钮是否显示，true显示 false不显示
UI:setGBattleUI("reopen",true)
--在聊天框显示提示
Chat:sendSystemMsg("做动画表情结束游戏即可查看效果")
--每当玩家做动画表情，就会游戏结束
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--结束游戏
    Game:doGameEnd(nil)
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### world2RadarPos

*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：世界坐标转换到小地图
    
*   具体使用案例如下：
    

```
--获取存档里(100,100)的位置在地图上的坐标
local result,x,z=UI:world2RadarPos(100,100)
--在聊天框显示
Chat:sendSystemMsg("坐标(100,100)在当前地图上的坐标为("..x..","..z..")")

```

#### world2RadarDist

*   参数及类型：
    
    *   length:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   length:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：世界长度转换到小地图
    
*   具体使用案例如下：
    

```
--获取存档里100格距离在地图上的长度
local result,length=UI:world2RadarDist(100)
--在聊天框显示
Chat:sendSystemMsg("存档里100格距离在地图上的长度为"..length)

```

#### setMinimapRenderMode

*   参数及类型：
    
    *   mode:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置小地图模式。1：45度旋转视角；2：全图俯视角
    
*   具体使用案例如下：
    

```
--设置地图查看模式为45度旋转视角
--参数 0:默认 1:45度旋转视角 2:全图固定俯视角
UI:setMinimapRenderMode(1)
--在聊天框显示
Chat:sendSystemMsg("设置地图查看模式为45度旋转视角")

```

#### setShapeLine


*   参数及类型：
    
    *   uiname:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   p1x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   p1y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   p2x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   p2y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：地图标记形状设置，设置成线条(LineShape)
    
*   具体使用案例如下：
    

```
local result = UI:setShapeLine(uiname, p1x, p1y, p2x, p2y)

```

#### setShapeCircle

*   参数及类型：
    
    *   uiname:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   radius:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：地图标记形状设置，设置成圆(CircleShape)
    
*   具体使用案例如下：
    

```
local result = UI:setShapeCircle(uiname, x, y, radius)

```

#### ShowScreenEffect

*   参数及类型：
    
    *   type:number效果类型
    *   isloop:boolean是否循环
    *   incspeed:number增速
    *   bshow:bool是否显示
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：显示屏幕特效
    
*   具体使用案例如下：
    

```
--显示雾效(貌似没效果)
--第一个参数为屏幕效果id：1 speedline 2 powerline 3 fog
--第二个参数为是否循环：true是 false否
--第三个参数为增速
UI:ShowScreenEffect(3,false,1)
--在聊天框显示
Chat:sendSystemMsg("显示雾效")

```


### 区域接口：Area

彼得兔 更新时间: 2023-12-18 11:35:14

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [createAreaRect(...)](#createarearect) | 创建矩形区域 |
| 2 | [createAreaRectByRange(...)](#createarearectbyrange) | 创建矩形区域(通过范围) |
| 3 | [destroyArea(...)](#destroyarea) | 销毁区域 |
| 4 | [getAreaByPos(...)](#getareabypos) | 通过位置查找区域 |
| 5 | [offsetArea(...)](#offsetarea) | 区域偏移 |
| 6 | [expandArea(...)](#expandarea) | 扩大区域 |
| 7 | [getAreaCenter(...)](#getareacenter) | 获取区域中间点 |
| 8 | [getAreaRectLength(...)](#getarearectlength) | 获取区域各边长 |
| 9 | [getAreaRectRange(...)](#getarearectrange) | 获取区域范围 |
| 10 | [getRandomPos(...)](#getrandompos) | 随机区域内位置 |
| 11 | [objInArea(...)](#objinarea) | 检测obj是否在区域内 |
| 12 | [blockInArea(...)](#blockinarea) | 检测区域内是否有某个方块 |
| 13 | [posInArea(...)](#posinarea) | 位置是否在区域内 |
| 14 | [getAreaPlayers(...)](#getareaplayers) | 获取区域中的所有玩家 |
| 15 | [getAreaCreatures(...)](#getareacreatures) | 获取区域中的所有生物 |
| 16 | [fillBlock(...)](#fillblock) | 用方块填充区域 |
| 17 | [clearAllBlock(...)](#clearallblock) | 清空区域内全部方块 |
| 18 | [cloneArea(...)](#clonearea) | 复制区域内方块到另一个区域 |
| 19 | [getPosOffset(...)](#getposoffset) | 传入两个坐标列表，得到相加后的位置 |
| 20 | [replaceAreaBlock(...)](#replaceareablock) | 替换方块类型为新的方块类型 |
| 21 | [blockInAreaRange(...)](#blockinarearange) | 区域范围内有方块 |
| 22 | [getAllObjsInAreaRange(...)](#getallobjsinarearange) | 获取区域范围内全部对象 |
| 23 | [getAllObjsInAreaRangeByObjTypes(...)](#getallobjsinarearangebyobjtypes) | 获取区域范围内全部对象 |
| 24 | [getAllPlayersInAreaRange(...)](#getallplayersinarearange) | 获取区域范围内全部玩家 |
| 25 | [getAllCreaturesInAreaRange(...)](#getallcreaturesinarearange) | 获取区域范围内全部生物 |
| 26 | [fillBlockAreaRange(...)](#fillblockarearange) | 用方块填充区域范围 |
| 27 | [clearAllBlockAreaRange(...)](#clearallblockarearange) | 清空区域范围内方块 |
| 28 | [cloneAreaRange(...)](#clonearearange) | 复制区域范围内方块到另一个区域 |
| 29 | [replaceAreaRangeBlock(...)](#replacearearangeblock) | 替换区域范围方块 |
| 30 | [DestroyBlockAreaRange(...)](#DestroyBlockAreaRange) | 破坏区域范围方块 |

#### 区域复制代码示例：

*   创建1个区域，用方块填充后，再复制到另一个地点

```
act = function()
	local ret, hostid = Player:getHostUin()	
	local ret,num = Player:getCurShotcut(hostid)
	if num == 0 then 
			--房主按下快捷栏1的时候，创建一个矩形区域,中心点是10.7.10，边长是5
		local pos1 = {x = 3, y = 10 ,z = 8}
		local dim = {x = 2, y = 2,z = 2}--  注意这里的边长算法是x*x+1=实际边长
		ret111, areaid = Area:createAreaRect(pos1, dim)
		Area:fillBlock(areaid, 112)  --用112这个方块填充区域
		
	end
	if num == 1 then
	-- 房主按下快捷栏2的时候，把上面这个矩形复制到10.12.10位置（以右下角为原点，而不是中心点）
		local pos2 = {x = 3 , y = 15 ,z = 8}
		local ret = Area:cloneArea(areaid, pos2)
	end
	
end
ScriptSupportEvent:registerEvent([=[Player.SelectShortcut]=], act)


```

#### createAreaRect


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)中心位置
    *   dim:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)尺寸
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：创建矩形区域
    
*   具体使用案例如下：
    

```
--通过中心点和扩展长度创建一个区域
--第一个参数{x=0,y=10,z=0}为区域中心坐标组成的表
--第二个参数{x=1,y=2,z=3}为区域各方向扩展的距离组成的表
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=1,y=2,z=3})
--在聊天框显示
Chat:sendSystemMsg("以(0,0)高度10为中心，左右各扩展1格，上下各扩展2格，前后各扩展3格，创建了一个区域，id为"..areaid)

```

#### createAreaRectByRange


*   参数及类型：
    
    *   posBeg:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   posEnd:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：创建矩形区域(通过范围)
    
*   具体使用案例如下：
    

```
--通过起点终点坐标创建区域
--第一个参数为区域起点坐标组成的表，即面朝北时，区域的左、下、后方的顶点坐标
--第二个参数为区域终点坐标组成的表，即面朝北时，区域的右、上、前方的顶点坐标
local result,areaid=Area:createAreaRectByRange({x=0,y=7,z=0},{x=5,y=10,z=5})
--在聊天框显示
Chat:sendSystemMsg("以(0,0)高度7为起点，(5,5)高度10为终点创建一个区域，id为"..areaid)

```

#### destroyArea

*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：销毁区域
    
*   具体使用案例如下：
    

```
--销毁指定区域，参数为区域id
Area:destroyArea(1)
--在聊天框显示
Chat:sendSystemMsg("销毁了id为1的区域")

```

#### getAreaByPos

*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)中心位置
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：通过位置查找区域
    
*   具体使用案例如下：
    

```
--判断某坐标所属的区域，参数为坐标组成的表
local result,areaid=Area:getAreaByPos({x=0,y=7,z=0})
if result==0 then--如果获取成功
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7所在的区域id为"..areaid)
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("获取失败，或(0,0)高度7不属于任何区域")
end

```

#### offsetArea


*   参数及类型：
    
    *   areaid:number区域ID
    *   x,y,z:number偏移距离
*   返回值及类型：
    
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   areaid:number新的区域ID
*   该方法的主要作用：区域偏移
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--平移区域范围
--第一个参数为要平移的区域id
--后三个参数分别为向右、上、前的平移距离，可为负
Area:offsetArea(areaid,5,5,5)
--在聊天框显示
Chat:sendSystemMsg("id为"..areaid.."的区域被向右、上、前各移动了5格")

```

#### expandArea


*   参数及类型：
    
    *   areaid:number区域ID
    *   x,y,z:number偏移距离
*   返回值及类型：
    
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   areaid:number新的区域ID
*   该方法的主要作用：扩大区域(产生新的区域)
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--扩充区域范围
--第一个参数为区域id
--后三个参数分别为区域向左右、上下、前后扩充的距离
Area:expandArea(areaid,2,2,2)
--在聊天框显示
Chat:sendSystemMsg("id为"..areaid.."的区域向左右、上下、前后各扩充了2格范围")

```

#### getAreaCenter


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)中心位置
*   该方法的主要作用：获取区域中间点
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--获取指定区域的中心坐标，参数为要获取中心的区域id
local result,pos=Area:getAreaCenter(areaid)
--在聊天框显示
Chat:sendSystemMsg("id为"..areaid.."的区域的中心点坐标为：("..pos.x..","..pos.y..","..pos.z..")")

```

#### getAreaRectLength


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   x
    *   y
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区域各边长
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--获取指定区域各方向的边长，参数为区域id
local result,x,y,z=Area:getAreaRectLength(areaid)
--在聊天框显示
Chat:sendSystemMsg("id为"..areaid.."的区域各方向的边长为：左右"..x..",上下"..y..",前后"..z)

```

#### getAreaRectRange


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   posBeg:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   posEnd:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区域范围
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--获取指定区域的起点和终点坐标，参数为区域id
local result,posBeg,posEnd=Area:getAreaRectRange(areaid)
--在聊天框显示
Chat:sendSystemMsg("id为"..areaid.."的区域的起点坐标为("..posBeg.x..","..posBeg.y..","..posBeg.z..")，终点坐标为("..posEnd.x..","..posEnd.y..","..posEnd.z..")")

```

#### getRandomPos


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：随机区域内位置
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--从指定区域中随机获取一个坐标，参数为区域id
local result,pos=Area:getRandomPos(areaid)
--在聊天框显示
Chat:sendSystemMsg("从id为"..areaid.."的区域中随机获取了一个坐标("..pos.x..","..pos.y..","..pos.z..")")

```

#### objInArea


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：检测obj是否在区域内
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--判断某对象是否在指定区域中
--第一个参数为区域id
--第二个参数为对象id，可以是玩家迷你号、生物id或掉落物id等等
local result=Area:objInArea(areaid,1000)
if result==0 then--如果在区域内
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000在区域"..areaid.."内部")
else--如果不在内部或获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在区域"..areaid.."内部，或玩家1000不在当前存档")
end

```

#### blockInArea


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：检测区域内是否有某个方块
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--判断指定区域是否包含某种方块
--第一个参数为区域id
--第二个参数为方块id
local result=Area:blockInArea(areaid,101)
if result==0 then--如果包含
	--在聊天框显示
	Chat:sendSystemMsg("id为"..areaid.."的区域内有土块")
else--如果不包含
	--在聊天框显示
	Chat:sendSystemMsg("id为"..areaid.."的区域内没有土块")
end

```

#### posInArea


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：位置是否再区域内
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--判断某坐标是否在指定区域内
--第一个参数为要判断的坐标组成的表
--第二个参数为区域id
local result=Area:posInArea({x=0,y=7,z=0},areaid)
if result==0 then--如果在内部
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置在id为"..areaid.."的区域内")
else--如果不在内部
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置不在id为"..areaid.."的区域内")
end

```

#### getAreaPlayers


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   playerlist:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区域中的所有玩家
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--获取区域内的玩家列表，参数为区域id
local result,playerlist=Area:getAreaPlayers(areaid)
if #playerlist>0 then--如果区域内存在玩家
	for i,a in ipairs(playerlist) do
		--在聊天框显示列表
		Chat:sendSystemMsg("区域"..areaid.."内第"..i.."个玩家："..a)
	end
else--如果区域内不存在玩家
	--在聊天框显示
	Chat:sendSystemMsg("区域"..areaid.."内没有玩家")
end

```

#### getAreaCreatures


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   creaturelist:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区域中的所有生物
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--获取区域内的生物列表，参数为区域id
local result,creaturelist=Area:getAreaCreatures(areaid)
if #creaturelist>0 then--如果区域内存在生物
	for i,a in ipairs(creaturelist) do
		--在聊天框显示列表
		Chat:sendSystemMsg("区域"..areaid.."内第"..i.."个生物："..a)
	end
else--如果区域内不存在生物
	--在聊天框显示
	Chat:sendSystemMsg("区域"..areaid.."内没有生物")
end

```

#### fillBlock


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   face:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：用方块填充区域
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=3,y=3,z=3})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展3格的区域，区域id为"..areaid)
--用方块填充指定区域
--第一个参数为区域id
--第二个参数为要填充的方块id，1为基岩
--第三个参数为方块朝向：0西 1东 2南 3北 4下 5上
Area:fillBlock(areaid,1,0)
--在聊天框显示
Chat:sendSystemMsg("区域"..areaid.."被填充了基岩")

```

#### clearAllBlock


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：清空区域内全部方块
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--清空指定区域内的指定方块
--第一个参数为区域id
--第二个参数为要清除的方块id
Area:clearAllBlock(areaid,101)
--在聊天框显示
Chat:sendSystemMsg("清空了区域"..areaid.."内的所有土块")

```

#### cloneArea


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   deststartpos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：复制区域内方块到另一个区域
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--复制区域内的方块到另一位置
--第一个参数为要复制的区域id
--第二个参数为要复制到的起点坐标组成的表
Area:cloneArea(areaid,{x=0,y=10,z=0})
--在聊天框显示
Chat:sendSystemMsg("把区域"..areaid.."内的所有方块复制到了(0,0)高度10的位置，此坐标与区域起点对应")

```

#### getPosOffset


*   参数及类型：
    
    *   srcpos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x=0,y=0,z=0}
    *   dim:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x=2,y=2,z=2}
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B){x=2,y=2,z=2}
*   该方法的主要作用：传入两个坐标列表，得到相加后的位置
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local srcpos={x=event.x,y=event.y,z=event.z}--起点坐标，这里是被点击的坐标
	local dim={x=10,y=10,z=10}--偏移距离
	--计算偏移后的坐标
	local result,pos=Area:getPosOffset(srcpos, dim)
	print(pos)--在日志输出
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### replaceAreaBlock


*   参数及类型：
    
    *   areaid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   srcblockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   destblockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   face:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：替换方块类型为新的方块类型
    
*   具体使用案例如下：
    

```
--创建一个区域
local result,areaid=Area:createAreaRect({x=0,y=10,z=0},{x=30,y=30,z=30})
--在聊天框显示
Chat:sendSystemMsg("创建了以(0,0)高度10为中心，向左右上下前后各扩展30格的区域，区域id为"..areaid)
--把指定区域内的一种方块替换成新的方块
--第一个参数为区域id
--第二个参数为要替换掉的方块id，101是土块
--第三个参数为要替换为的方块id，1是地心基石
--最后一个参数为方块朝向：0西 1东 2南 3北 4下 5上
Area:replaceAreaBlock(areaid,101,1,0)
--在聊天框显示
Chat:sendSystemMsg("区域"..areaid.."内所有土块被替换为了基岩")

```

#### blockInAreaRange


*   参数及类型：
    
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   posbeg:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起点{x=number, y=number, z=number}
    *   posend:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点{x=number, y=number, z=number}
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：区域范围内有方块
    
*   具体使用案例如下：
    

```
--判断两点之前的范围内有没有某种方块
--第一个参数为方块id，101是土块
--后两个参数分别是范围起点和终点坐标组成的表
local result=Area:blockInAreaRange(101,{x=0,y=5,z=0},{x=1,y=8,z=1})
if result==0 then--如果包含
	--在聊天框显示
	Chat:sendSystemMsg("在(0,0)高度5到(1,1)高度8的范围内有土块")
else--如果不包含
	--在聊天框显示
	Chat:sendSystemMsg("在(0,0)高度5到(1,1)高度8的范围内没有土块")
end

```

#### getAllObjsInAreaRange


*   参数及类型：
    
    *   posbegin:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起点{x=number, y=number, z=number}
    *   posend:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点{x=number, y=number, z=number}
    *   objtype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[OBJ\_TYPE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E6%B8%B8%E6%88%8F%E5%AE%9E%E4%BE%8B%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   objids:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区域范围内全部对象
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local x,y,z=event.x,event.y,event.z--点击坐标
	local posbegin={x=x-10,y=y-10,z=z-10}--起点
	local posend={x=x+10,y=y+10,z=z+10}--终点
	local objtype=1--对象类型，1是玩家
	--获取范围内所有玩家
	local result,objids=Area:getAllObjsInAreaRange(posbegin, posend, objtype)
	Chat:sendSystemMsg("区域内共有".. #objids .."个玩家")--在聊天框显示玩家数量
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getAllObjsInAreaRangeByObjTypes


*   参数及类型：
    
    *   posbegin:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起点{x=number, y=number, z=number}
    *   posend:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点{x=number, y=number, z=number}
    *   objtypes:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[OBJ\_TYPE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E6%B8%B8%E6%88%8F%E5%AE%9E%E4%BE%8B%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   objids:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区域范围内全部对象
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local x,y,z=event.x,event.y,event.z--点击坐标
	local posbegin={x=x-10,y=y-10,z=z-10}--起点
	local posend={x=x+10,y=y+10,z=z+10}--终点
	local objtypes={1,2}--对象类型，1是玩家，2是生物
	--获取范围内所有玩家和生物
	local result,objids=Area:getAllObjsInAreaRangeByObjTypes(posbegin, posend, objtypes)
	Chat:sendSystemMsg("区域内共有".. #objids .."个玩家和生物")--在聊天框显示
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getAllPlayersInAreaRange


*   参数及类型：
    
    *   posbegin:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起点{x=number, y=number, z=number}
    *   posend:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点{x=number, y=number, z=number}
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   objids:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区域范围内全部玩家
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local x,y,z=event.x,event.y,event.z--点击坐标
	local posbegin={x=x-10,y=y-10,z=z-10}--起点
	local posend={x=x+10,y=y+10,z=z+10}--终点
	--获取范围内所有玩家
	local result,objids=Area:getAllPlayersInAreaRange(posbegin, posend)
	Chat:sendSystemMsg("区域内共有".. #objids .."个玩家")--在聊天框显示
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getAllCreaturesInAreaRange


*   参数及类型：
    
    *   posbegin:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起点{x=number, y=number, z=number}
    *   posend:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点{x=number, y=number, z=number}
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   objids:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区域范围内全部生物
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local x,y,z=event.x,event.y,event.z--点击坐标
	local posbegin={x=x-10,y=y-10,z=z-10}--起点
	local posend={x=x+10,y=y+10,z=z+10}--终点
	--获取范围内所有生物
	local result,objids=Area:getAllCreaturesInAreaRange(posbegin, posend)
	Chat:sendSystemMsg("区域内共有".. #objids .."个生物")--在聊天框显示
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### fillBlockAreaRange


*   参数及类型：
    
    *   posbeg:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起点{x=number, y=number, z=number}
    *   posend:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点{x=number, y=number, z=number}
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)方块ID
    *   face:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：用方块填充区域范围
    
*   具体使用案例如下：
    

```
--在两点之间的范围内填充某方块
--前两个参数为填充范围的起点和终点坐标组成的表
--第三个参数1为要填充的方块id，1是地心基石
--第四个参数0为方块朝向：0西 1东 2南 3北 4下 5上
Area:fillBlockAreaRange({x=0,y=7,z=0},{x=5,y=9,z=5},1,0)
--在聊天框显示
Chat:sendSystemMsg("从(0,0)高度7到(5,5)高度9的范围被填充了基岩")

```

#### clearAllBlockAreaRange


*   参数及类型：
    
    *   posbeg:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起点{x=number, y=number, z=number}
    *   posend:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点{x=number, y=number, z=number}
    *   blockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)方块ID
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：清空区域范围内方块
    
*   具体使用案例如下：
    

```
--清空两点之间范围内的某方块
--前两个参数为范围的起点和终点坐标组成的表
--第三个参数为要清除的方块id，101是土块
Area:clearAllBlockAreaRange({x=0,y=7,z=0},{x=5,y=9,z=5},101)
--在聊天框显示
Chat:sendSystemMsg("清空了(0,0)高度7到(5,5)高度9范围内的土块")

```

#### cloneAreaRange


*   参数及类型：
    
    *   posbeg:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起点{x=number, y=number, z=number}
    *   posend:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点{x=number, y=number, z=number}
    *   deststartpos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)目标起始位置 {x=number, y=number, z=number}
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：复制区域范围内方块到另一个区域
    
*   具体使用案例如下：
    

```
--复制两点之间范围内的方块到另一位置
--前两个参数为范围的起点和终点坐标组成的表
--后一个参数为要复制到的范围起点坐标
Area:cloneAreaRange({x=0,y=3,z=0},{x=5,y=7,z=5},{x=0,y=10,z=0})
--在聊天框显示
Chat:sendSystemMsg("把(0,0)高度3到(5,5)高度7范围内的方块复制到了(0,0)高度10（以此为起点）")

```

#### replaceAreaRangeBlock


*   参数及类型：
    
    *   posbeg:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)起点{x=number, y=number, z=number}
    *   posend:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)终点{x=number, y=number, z=number}
    *   srcblockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)替换原始方块
    *   destblockid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)替换目标方块
    *   face:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：替换区域范围方块
    
*   具体使用案例如下：
    

```
--替换两点之间范围内的某种方块为另一种方块
--前两个参数为范围的起点和终点坐标组成的表
--第三个参数101为要替换掉的方块id，101是土块
--第四个参数为要替换为的方块id，1是地心基石
--最后一个参数为方块朝向：0西 1东 2南 3北 4下 5上
Area:replaceAreaRangeBlock({x=0,y=3,z=0},{x=5,y=7,z=5},101,1,0)
--在聊天框显示
Chat:sendSystemMsg("从(0,0)高度3到(5,5)高度7的范围内，所有的土块被替换为了基岩")

```

#### DestroyBlockAreaRange

*   参数及类型：
    *   posbeg:table起点{x=number, y=number, z=number}
    *   posend:table终点{x=number, y=number, z=number}
    *   blockid:number破坏的方块ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：破坏区域范围方块
*   具体使用案例如下：

```
Area:DestroyBlockAreaRange({x=0,y=6,z=0},{x=5,y=7,z=5},100)
```

### 聊天接口：Chat

彼得兔 更新时间: 2023-04-26 10:18:43

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [sendChat(...)](#sendchat) | 发送聊天消息(默认全部玩家) |
| 2 | [sendSystemMsg(...)](#sendsystemmsg) | 发送系统消息(默认全部玩家) |

#### sendChat


*   参数及类型：
    
    *   content:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   targetuin:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)发给uin为targetuin的玩家，0表示发给所有玩家
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：发送聊天消息(默认全部玩家)
    
*   具体使用案例如下：
    

```
--发送一条聊天消息
--第一个参数是消息内容，第二个参数是接收消息的玩家的uin，0表示全部玩家(貌似没有效果)
Chat:sendChat("这是一条聊天消息！",0)
Chat:sendChat("也可以只输入消息内容，默认发给全部玩家")

```

#### sendSystemMsg


*   参数及类型：
    
    *   content:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   targetuin:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)发给uin为targetuin的玩家，0表示发给所有玩家
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：发送系统消息(默认全部玩家)
    
*   具体使用案例如下：
    

```
--发送一条系统消息
--第一个参数是消息内容，第二个参数是接收消息的玩家的uin，0表示全部玩家(貌似没有效果)
Chat:sendSystemMsg("这是一条系统消息！",0)
Chat:sendSystemMsg("也可以只输入消息内容，默认发给全部玩家")

```

### 组队接口：Team

彼得兔 更新时间: 2023-04-26 10:19:04

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [getNumTeam(...)](#getnumteam) | 当前队伍数量 |
| 2 | [getTeamPlayerNum(...)](#getteamplayernum) | 获取指定队伍玩家数量 |
| 3 | [getTeamPlayers(...)](#getteamplayers) | 获取指定队伍玩家 |
| 4 | [randomTeamPlayer(...)](#randomteamplayer) | 随机一名玩家 |
| 5 | [getTeamCreatures(...)](#getteamcreatures) | 获取指定队伍生物 (类似 getTeamPlayers) |
| 6 | [setTeamScore(...)](#setteamscore) | 队伍分数 |
| 7 | [getTeamScore(...)](#getteamscore) | 获取组队分数 |
| 8 | [addTeamScore(...)](#addteamscore) | 增加队伍分数 |
| 9 | [setTeamResults(...)](#setteamresults) | 队伍胜负结果 |
| 10 | [getTeamResults(...)](#getteamresults) | 获取当前队伍胜负 |
| 11 | [setTeamDieTimes(...)](#setteamdietimes) | 队伍阵亡次数 |
| 12 | [getTeamDieTimes(...)](#getteamdietimes) | 获取队伍总死亡数 |
| 13 | [addTeamDieTimes(...)](#addteamdietimes) | 增加队伍总死亡数 |
| 14 | [changePlayerTeam(...)](#changeplayerteam) | 改变玩家队伍 |

#### getNumTeam


*   参数及类型：`nil`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：当前队伍数量
    
*   具体使用案例如下：
    

```
--获取队伍数量
local result,num=Team:getNumTeam()
--在聊天框显示
Chat:sendSystemMsg("当前队伍数量为："..num)

```

#### getTeamPlayerNum


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)队伍ID，默认全部
    *   alive:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)是否存活，默认全部
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)队伍玩家数量
*   该方法的主要作用：获取指定队伍玩家数量
    
*   具体使用案例如下：
    

```
--获取第一个队伍的玩家数量
--第一个参数为队伍id
--第二个参数：0为当前队伍的死亡玩家数量 1为存活 2为全部
local result,num=Team:getTeamPlayerNum(1,2)
--在聊天框显示
Chat:sendSystemMsg("第一个队伍的玩家总数为："..num)

```

#### getTeamPlayers


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)队伍ID，默认全部
    *   alive:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)是否存活，默认全部
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)队伍玩家数量
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)成员uin数组
*   该方法的主要作用：获取指定队伍玩家
    
*   具体使用案例如下：
    

```
--获取第一个队伍的玩家数量和列表
--第一个参数为队伍id
--第二个参数：0为当前队伍的死亡玩家数量 1为存活 2为全部
local result,num,array=Team:getTeamPlayers(1,2)
--在聊天框显示数量
Chat:sendSystemMsg("第一个队伍的玩家总数为："..num)
for i,a in ipairs(array) do
	--在聊天框显示列表
	Chat:sendSystemMsg("第"..i.."个："..a)
end

```

#### randomTeamPlayer


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)队伍ID，默认全部
    *   alive:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)是否存活，默认全部
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   uin:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)随机出玩家的uin
*   该方法的主要作用：随机一名玩家
    
*   具体使用案例如下：
    

```
--从队伍中随机选取一名玩家
--第一个参数为队伍id
--第二个参数：0为当前队伍的死亡玩家数量 1为存活 2为全部
local result,uin=Team:randomTeamPlayer(1,2)
--在聊天框显示
Chat:sendSystemMsg("从第一个队伍中随机选取了一名玩家："..uin)

```

#### getTeamCreatures


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)队伍ID
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)objid数组
*   该方法的主要作用：获取指定队伍生物 (类似 getTeamPlayers)
    
*   具体使用案例如下：
    

```
--获取属于第一个队伍的生物列表，参数为队伍id
local result,array=Team:getTeamCreatures(1)
if #array==0 then--如果没有生物
	--在聊天框显示
	Chat:sendSystemMsg("没有动物或怪物属于第一个队伍")
else--如果有生物
	for i,a in ipairs(array) do
		--在聊天框显示生物列表
		Chat:sendSystemMsg("属于第一个队伍的生物id，"..i.."："..a)
	end
end

```

#### setTeamScore


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   score:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：队伍分数
    
*   具体使用案例如下：
    

```
--设置指定队伍的分数
--第一个参数为队伍id
--第二个参数为要设置的分数
Team:setTeamScore(1,10)
--在聊天框显示
Chat:sendSystemMsg("第一个队伍的分数被设置为了10")

```

#### getTeamScore


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   score:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取组队分数
    
*   具体使用案例如下：
    

```
--获取队伍的分数，参数为队伍id
local result,score=Team:getTeamScore(1)
--在聊天框显示
Chat:sendSystemMsg("第一个队伍的游戏分数为"..score)

```

#### addTeamScore


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   score:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：增加队伍分数
    
*   具体使用案例如下：
    

```
--给指定队伍增加分数
--第一个参数为队伍id
--第二个参数为要增加的游戏分数
Team:addTeamScore(1,10)
--在聊天框显示
Chat:sendSystemMsg("第一个队伍的分数被增加了10")

```

#### setTeamResults


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   result:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：队伍胜负结果
    
*   具体使用案例如下：
    

```
--每当玩家做动画表情，让指定队伍获胜或失败
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--让队伍1获胜
	--第一个参数为队伍id
	--第二个参数为：1获胜 2失败
	Team:setTeamResults(1,1)
	--在聊天框显示
	Chat:sendSystemMsg("队伍1获胜")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### getTeamResults


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   teamresult:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取当前队伍胜负
    
*   具体使用案例如下：
    

```
--获取队伍是否获胜，参数为队伍id
local result,teamresult=Team:getTeamResults(1)
--在聊天框显示
Chat:sendSystemMsg("队伍1当前获胜状态为(1:获胜 2:失败)："..teamresult)

```

#### setTeamDieTimes


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   times:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：队伍阵亡次数
    
*   具体使用案例如下：
    

```
--设置队伍玩家的阵亡次数，第一个参数为队伍id，第二个参数为阵亡次数
Team:setTeamDieTimes(1,10)
--在聊天框显示
Chat:sendSystemMsg("队伍1的玩家阵亡次数被设置为了10")

```

#### getTeamDieTimes


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   times:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取队伍总死亡数
    
*   具体使用案例如下：
    

```
--获取队伍1的总阵亡次数，参数为队伍id
local result,times=Team:getTeamDieTimes(1)
--在聊天框显示
Chat:sendSystemMsg("队伍1的总阵亡次数为："..times)

```

#### addTeamDieTimes


*   参数及类型：
    
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：增加队伍总死亡数
    
*   具体使用案例如下：
    

```
--增加队伍的阵亡次数，参数为队伍id
Team:addTeamDieTimes(1)
--在聊天框显示
Chat:sendSystemMsg("队伍1的死亡次数被增加了1（即队伍1的总生命数减少了1）")

```

#### changePlayerTeam


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   teamid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：改变玩家队伍
    
*   具体使用案例如下：
    

```
--把指定玩家设置到指定队伍
--第一个参数为玩家id或玩家迷你号，0是房主
--第二个参数为要移动到的队伍id
Team:changePlayerTeam(0,2)
--在聊天框显示
Chat:sendSystemMsg("房主被设置到了队伍2")

```

### 道具接口：Item

彼得兔 更新时间: 2023-04-26 10:26:18

继承自 [Actor](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1358)

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [getItemName(...)](#getitemname) | 获取道具名称 |
| 2 | [getItemId(...)](#getitemid) | 获取actor对应的道具ID，如球类等 |
| 3 | [getDropItemNum(...)](#getdropitemnum) | 获取掉落物数量 |
| 4    | [randomItemID(...)](#randomItemID)     | 获取随机道具id                             |
| 5    | [randomProjectileID(...)](#randomProjectileID) | 获取随机投掷物id                           |
| 6    | [getItemDesc(...)](#getitemdesc)       | 获取道具类型描述                           |
| 7    | [GetAttr(...)](#getattr-2)               | 获取道具属性                               |
| 8    | [playAct(...)](#playact-3)               | 微缩模型的掉落物播放动画                   |

#### getItemName


*   参数及类型：
    
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   name:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取道具名称
    
*   具体使用案例如下：
    

```
--获取id为1的物品的名称，参数1就是需要获取名称的物品id
local result,name=Item:getItemName(1)
--在聊天框显示
Chat:sendSystemMsg("id为1的物品的名字是："..name)

```

#### getItemId


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取actor对应的道具ID，如球类等
    
*   具体使用案例如下：
    

```
--每当有玩家做动画表情，聊天框显示房主周围10格内其中一个掉落物的id
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取房主的坐标
	local result,x,y,z=Player:getPosition(0)
	--获取房主周围10格内的掉落物数量和列表
	local result2,num,objids=World:getActorsByBox(3,x-10,y-10,z-10,x+10,y+10,z+10)
	if num>0 then--如果存在掉落物
		--获取掉落物列表中的第一个物品的id
		local result3,itemid=Item:getItemId(objids[1])
		--在聊天框显示
		Chat:sendSystemMsg("附近10格发现掉落物品！其中一个物品id为"..itemid)
	else--如果不存在掉落物
		--在聊天框显示
		Chat:sendSystemMsg("附近10格没有发现掉落物品！")
	end
end
--注册动画表情监听器，当玩家做动画表情时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### getDropItemNum


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   itemnum:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取掉落物数量
    
*   具体使用案例如下：
    

```
--每当有玩家做动画表情，聊天框显示房主周围10格内其中一个掉落物的堆叠数量
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取房主的坐标
	local result,x,y,z=Player:getPosition(0)
	--获取房主周围10格内的掉落物数量和列表
	local result2,num,objids=World:getActorsByBox(3,x-10,y-10,z-10,x+10,y+10,z+10)
	if num>0 then--如果存在掉落物
		--获取掉落物列表中的第一个物品的堆叠数量
		local result3,itemnum=Item:getDropItemNum(objids[1])
		--在聊天框显示
		Chat:sendSystemMsg("附近10格发现掉落物品！其中一种物品有"..itemnum.."个堆叠在了一起")
	else--如果不存在掉落物
		--在聊天框显示
		Chat:sendSystemMsg("附近10格没有发现掉落物品！")
	end
end
--注册动画表情监听器，当玩家做动画表情时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

#### randomItemID

*   参数及类型：
    *   无
*   返回值及类型：
    *   ErrorCode.OK
    *   itemid:number 随机道具id
*   该方法的主要作用：获取随机道具id
*   具体使用案例如下：

```
local result,blockid = Item:randomItemID()
```

#### randomProjectileID

*   参数及类型：
    *   无
*   返回值及类型：
    *   ErrorCode.OK
    *   itemid:number 随机投掷物id
*   该方法的主要作用：获取随机投掷物id
*   具体使用案例如下：

```
local result,itemid = Item:randomProjectileID()
```

#### getItemDesc

*   参数及类型：
    *   itemid:number道具类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   desc:number 道具类型描述
*   该方法的主要作用：获取道具类型描述
*   具体使用案例如下：

```
local result,desc = Item:getItemDesc(itemid)
```

#### GetAttr

*   参数及类型：
    *   itemid:number道具类型ID
    *   attr:number道具属性枚举(ITEMATTR)
*   返回值及类型：
    *   ErrorCode.OK
    *   value:number 属性值
*   该方法的主要作用：获取道具属性
*   具体使用案例如下：

```
local result,value = GetAttr(itemid,ITEMATTR.ATTACK)
```

#### playAct

*   参数及类型：
    *   objid:number掉落物objid
    *   animid:number动作ID
    *   playmode:number播放模式(ANIMMODE)
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：掉落物播放动画
*   具体使用案例如下：

```
local result = Item:playAct(objid,12,ITEMATTR.ATTACK) --指定掉落物循环播放跑动画
```

### 背包接口：Backpack

彼得兔 更新时间: 2023-10-25 10:29:21

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [getBackpackBarIDRange(...)](#getbackpackbaridrange) | 获取道具背包栏ID范围(起始ID~结束ID) |
| 2 | [getBackpackBarSize(...)](#getbackpackbarsize) | 获取道具背包栏大小 |
| 3 | [setGridItem(...)](#setgriditem) | 设置背包格道具 |
| 4 | [removeGridItem(...)](#removegriditem) | 移除背包格内一定数量道具，通过道具格移除，默认全部移除 |
| 5 | [removeGridItemByItemID(...)](#removegriditembyitemid) | 移除背包内一定数量道具，通过道具ID移除，默认全部移除 |
| 6 | [clearPack(...)](#clearpack) | 清空指定背包栏 |
| 7 | [clearAllPack(...)](#clearallpack) | 清空全部背包(包含背包栏、快捷栏、装备栏) |
| 8 | [moveGridItem(...)](#movegriditem) | 移动背包道具，默认全部转移 |
| 9 | [swapGridItem(...)](#swapgriditem) | 交换背包道具 |
| 10 | [enoughSpaceForItem(...)](#enoughspaceforitem) | 背包(包含背包栏、快捷栏)是否有足够的空间存放一定数量的道具 |
| 11 | [calcSpaceNumForItem(...)](#calcspacenumforitem) | 计算背包(包含背包栏、快捷栏)能存放的道具剩余总数量 |
| 12 | [getBackpackBarValidList(...)](#getbackpackbarvalidlist) | 获取道具背包栏有效格ID列表(道具已存在)，背包格ID数组 |
| 13 | [getBackpackBarItemList(...)](#getbackpackbaritemlist) | 获取道具背包栏已拥有道具，道具ID数组 |
| 14 | [hasItemByBackpackBar(...)](#hasitembybackpackbar) | 检测背包是否持有某个道具 |
| 15 | [getItemNumByBackpackBar(...)](#getitemnumbybackpackbar) | 获取背包持有某个道具总数量，同时返回装有道具的背包格数组 |
| 16 | [getGridItemID(...)](#getgriditemid) | 获取背包格道具ID(返回itemid, num) |
| 17 | [getGridItemName(...)](#getgriditemname) | 获取背包格道具名称 |
| 18 | [getGridStack(...)](#getgridstack) | 获取背包格道具堆叠数(返回curstack, maxstack) |
| 19 | [getGridDurability(...)](#getgriddurability) | 获取背包格道具耐久度(返回durcur, durmax) |
| 20 | [getGridEnchantList(...)](#getgridenchantlist) | 获取背包格道具附魔，返回附魔id数组 |
| 21 | [getGridToolType(...)](#getgridtooltype) | 获取背包道具工具类型(<0表示非工具) |
| 22 | [addItem(...)](#additem) | 添加道具到背包 |
| 23 | [discardItem(...)](#discarditem) | 丢弃背包某个格子里的道具 |
| 24 | [getGridNum(...)](#getgridnum) | 获取背包某个格子的道具数量 |
| 25 | [actEquipUpByResID(...)](#actequipupbyresid) | 玩家穿上装备 |
| 26 | [actEquipOffByEquipID(...)](#actequipoffbyequipid) | 玩家脱下装备栏装备 |
| 27 | [actCreateEquip(...)](#actcreateequip) | 创建装备 |
| 28 | [actDestructEquip(...)](#actdestructequip) | 销毁装备 |
| 29   | [PlayShortCutIxEffect(...)](#PlayShortCutIxEffect) | 设置手持栏道具上播放特效                   |
| 30   | [StopShortCutIxEffect(...)](#StopShortCutIxEffect) | 停止手持栏道具上播放特效                   |
| 31   | [PlayShortCutItemEffect(...)](#PlayShortCutItemEffect) | 设置快捷栏指定道具上播放特效               |
| 32   | [StopShortCutItemEffect(...)](#StopShortCutItemEffect) | 停止快捷栏指定道具上播放特效               |

#### getBackpackBarIDRange


*   参数及类型：
    
    *   bartype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)背包类型，快捷栏、存储栏、装备栏
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   begid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具格起始ID
    *   endid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具格末尾ID
*   该方法的主要作用：获取道具背包栏ID范围(起始ID~结束ID)
    
*   具体使用案例如下：
    

```
--获取快捷栏的物品格id，参数为背包栏类型：1快捷栏 2储存栏 3装备栏
local result,begid,endid=Backpack:getBackpackBarIDRange(1)
--在聊天框显示
Chat:sendSystemMsg("快捷栏的物品格id为："..begid.."至"..endid)
--获取储存栏的物品格id
result,begid,endid=Backpack:getBackpackBarIDRange(2)
--在聊天框显示
Chat:sendSystemMsg("储存栏的物品格id为："..begid.."至"..endid)
--装备栏的物品格id
result,begid,endid=Backpack:getBackpackBarIDRange(3)
--在聊天框显示
Chat:sendSystemMsg("装备栏的物品格id为："..begid.."至"..endid)

```

#### getBackpackBarSize


*   参数及类型：
    
    *   bartype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)[BPACK\_SINDEX](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%AD%98%E5%82%A8%E6%A0%8F%E8%B5%B7%E5%A7%8B%E4%BD%8D)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   size:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取道具背包栏大小
    
*   具体使用案例如下：
    

```
--获取背包栏总格数，参数为背包类型：1快捷栏 2储存栏 3装备栏
local result,size=Backpack:getBackpackBarSize(1)
--在聊天框显示
Chat:sendSystemMsg("快捷栏一共有"..size.."格")

```

#### setGridItem


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具格ID
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)默认1
    *   durability:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)耐久度，默认满耐久
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置背包格道具
    
*   具体使用案例如下：
    

```
--给指定玩家的指定背包栏添加物品
--第一个参数1000为玩家迷你号
--第二个参数0为背包栏id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
--第三个参数为要添加的物品id，12005是钻石剑
--第四个参数为要添加的物品数量
--最后一个参数为要添加的物品耐久，nil为默认满
Backpack:setGridItem(1000,0,12005,10,nil)
--在聊天框显示
Chat:sendSystemMsg("给迷你号为1000的玩家储存栏的第一格添加了10把钻石剑，耐久为满")

```

#### removeGridItem


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)默认全部道具
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除背包格内一定数量道具，通过道具格移除，默认全部移除
    
*   具体使用案例如下：
    

```
--移除指定玩家的指定背包栏的物品
--第一个参数为玩家迷你号
--第二个参数0为背包栏id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
--第三个参数为移除数量
Backpack:removeGridItem(1000,0,10)
--在聊天框显示
Chat:sendSystemMsg("移除了玩家1000的背包栏第一格10个物品")

```

#### removeGridItemByItemID


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)默认全部道具
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)成功移除数量
*   该方法的主要作用：移除背包内一定数量道具，通过道具ID移除，默认全部移除
    
*   具体使用案例如下：
    

```
--移除指定玩家背包里的指定物品
--第一个参数为玩家迷你号
--第二个参数为要移除的物品id，101为土块
--第三个参数为要移除的物品数量
local result,num=Backpack:removeGridItemByItemID(1000,101,50)
--在聊天框显示
Chat:sendSystemMsg("尝试移除玩家1000背包里的50个土块，实际移除了"..num.."个")

```

#### clearPack


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   bartype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)背包类型
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：清空指定背包栏
    
*   具体使用案例如下：
    

```
--清空指定玩家的背包物品
--第一个参数为玩家迷你号
--第二个参数为背包类型：1快捷栏 2储存栏 3装备栏
Backpack:clearPack(1000,1)
--在聊天框显示
Chat:sendSystemMsg("清空了玩家1000的快捷栏物品")

```

#### clearAllPack


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
*   该方法的主要作用：清空全部背包(包含背包栏、快捷栏、装备栏)
    
*   具体使用案例如下：
    

```
--清空指定玩家的所有物品，包括快捷栏、储存栏和装备栏，参数为玩家迷你号
Backpack:clearAllPack(1000)
--在聊天框显示
Chat:sendSystemMsg("清空了玩家1000的所有物品，包括快捷栏、储存栏和装备栏")

```

#### moveGridItem


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridsrc:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   griddst:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)默认全部转移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移动背包道具，默认全部转移
    
*   具体使用案例如下：
    

```
--移动玩家背包物品到指定物品栏
--第一个参数为玩家迷你号
--第二个参数0为要移动的背包栏id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
--第三个参数1000为移动至的背包栏id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
--第四个参数为移动数量
local result=Backpack:moveGridItem(1000,0,1000,10)
if result==0 then--如果移动成功
	--在聊天框显示
	Chat:sendSystemMsg("把玩家1000的储存栏的第一格物品移动了10个到快捷栏第一格")
else--如果移动失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档，或无法移动")
end

```

#### swapGridItem


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridsrc:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   griddst:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：交换背包道具
    
*   具体使用案例如下：
    

```
--交换玩家两个物品栏的物品
--第一个参数为玩家迷你号
--后两个参数为要交换的背包栏id：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
local result=Backpack:moveGridItem(1000,0,1000)
if result==0 then--如果交换成功
	--在聊天框显示
	Chat:sendSystemMsg("交换了玩家1000的储存栏第一格和快捷栏第一格的物品")
else--如果交换失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档，或无法交换")
end

```

#### enoughSpaceForItem


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)默认1
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：背包(包含背包栏、快捷栏)是否有足够的空间存放一定数量的道具
    
*   具体使用案例如下：
    

```
--判断玩家背包(包括快捷栏和储存栏)是否能继续容纳指定数量的物品
--第一个参数为玩家迷你号
--第二个参数为要判断的物品id，101为土块
--第三个参数为物品数量
local result=Backpack:enoughSpaceForItem(1000,101,999)
if result==0 then--如果可以
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的背包可以继续容纳999个土块")
else--如果不可以或判断失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的背包无法继续容纳999个土块，或玩家1000不在当前存档")
end

```

#### calcSpaceNumForItem


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：计算背包(包含背包栏、快捷栏)能存放的道具剩余总数量
    
*   具体使用案例如下：
    

```
--获取指定玩家的背包(包括快捷栏和储存栏)还能添加多少指定物品
--第一个参数为玩家迷你号
--第二个参数为要获取剩余容纳数量的物品，101为土块
local result,num=Backpack:calcSpaceNumForItem(1000,101)
if result==0 then--如果获取成功
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的背包还能添加"..num.."个土块")
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### getBackpackBarValidList


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   bartype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)背包类型
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)数量
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)背包格ID数组
*   该方法的主要作用：获取道具背包栏有效格ID列表(道具已存在)，背包格ID数组
    
*   具体使用案例如下：
    

```
--获取指定玩家的背包中已有物品的格子id
--第一个参数为玩家迷你号
--第二个参数为背包栏类型：1快捷栏 2储存栏 3装备栏
local result,num,array=Backpack:getBackpackBarValidList(1000,2)
if result==0 then--如果获取成功
	--在聊天框显示已有物品的格子数量
	Chat:sendSystemMsg("玩家1000的储存栏一共有"..num.."格已经放置了物品")
	for i,a in ipairs(array) do
		--在聊天框显示格子id列表
		Chat:sendSystemMsg("第"..i.."个有物品的物品格id："..a)
	end
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### getBackpackBarItemList


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   bartype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)背包类型
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)数量
    *   arr:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具ID数组
*   该方法的主要作用：获取道具背包栏已拥有道具，道具ID数组
    
*   具体使用案例如下：
    

```
--获取指定玩家背包的物品列表
--第一个参数为玩家迷你号
--第二个参数为背包栏类型：1快捷栏 2储存栏 3装备栏
local result,num,arr=Backpack:getBackpackBarItemList(1000,1)
if result==0 then--如果获取成功
	--在聊天框显示种类数
	Chat:sendSystemMsg("玩家1000的快捷栏一共有"..num.."种物品")
	for i,a in ipairs(arr) do
		--在聊天框显示物品id列表
		Chat:sendSystemMsg("第"..i.."种物品id："..a)
	end
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### hasItemByBackpackBar

*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   bartype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：检测背包是否持有某个道具
    
*   具体使用案例如下：
    

```
--判断玩家背包是否包含某物品
--第一个参数为玩家迷你号
--第二个参数为背包栏类型：1快捷栏 2储存栏 3装备栏
--第三个参数为要判断的物品id，1是地心基石
local result=Backpack:hasItemByBackpackBar(1000,1,1)
if result==0 then--如果有
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的快捷栏里有地心基石")
else--如果没有或获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的快捷栏里没有地心基石或玩家1000不在当前存档")
end

```

#### getItemNumByBackpackBar


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   bartype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具总数量
    *   arr:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具格ID数组
*   该方法的主要作用：获取背包持有某个道具总数量，同时返回装有道具的背包格数组
    
*   具体使用案例如下：
    

```
--获取指定玩家的背包有多少个指定物品
--第一个参数为玩家迷你号
--第二个参数为背包栏类型：1快捷栏 2储存栏 3装备栏
--第三个参数为要获取的物品id，101为土块
local result,num,arr=Backpack:getItemNumByBackpackBar(1000,2,101)
if result==0 then--如果获取成功
	--在聊天框显示物品数量
	Chat:sendSystemMsg("玩家1000的储存栏里有"..num.."个土块")
	for i,a in ipairs(arr) do
		--在聊天框显示物品格列表
		Chat:sendSystemMsg("有土块的第"..i.."个物品格id为："..a)
	end
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### getGridItemID


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取背包格道具ID(返回itemid, num)
    
*   具体使用案例如下：
    

```
--获取指定玩家指定物品格的物品id和数量
--第一个参数为玩家迷你号
--第二个参数0为背包栏物品格id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
local result,itemid,num=Backpack:getGridItemID(1000,0)
if result==0 then--如果获取成功
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的背包储存栏的第一格物品id为："..itemid.."，数量为："..num)
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### getGridItemName


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   name:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取背包格道具名称
    
*   具体使用案例如下：
    

```
--获取指定玩家指定物品格的物品名称
--第一个参数为玩家迷你号
--第二个参数0为背包栏物品格id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
local result,name=Backpack:getGridItemName(1000,0)
if result==0 then--如果获取成功
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的背包储存栏的第一格物品名称为："..name)
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("获取失败，可能是玩家1000不在当前存档")
end

```

#### getGridStack


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   maxstack:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取背包格道具堆叠数(返回curstack, maxstack)
    
*   具体使用案例如下：
    

```
--获取指定玩家指定背包物品格的物品堆叠数量和最大堆叠数
--第一个参数为玩家迷你号
--第二个参数0为背包栏id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
local result,num,maxstack=Backpack:getGridStack(1000,0)
if result==0 then--如果获取成功
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的背包储存栏第一格的物品当前堆叠了"..num.."个，该物品最大可以堆叠"..maxstack.."个")
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### getGridDurability


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   durcur:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   durmax:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取背包格道具耐久度(返回durcur, durmax)
    
*   具体使用案例如下：
    

```
--获取指定玩家指定背包物品格的物品当前耐久值和最大耐久值
--第一个参数为玩家迷你号
--第二个参数0为背包栏id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
local result,durcur,durmax=Backpack:getGridDurability(1000,0)
if result==0 then--如果获取成功
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的背包储存栏第一格的物品的耐久值为"..durcur.."，该物品最大耐久值为"..durmax)
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### getGridEnchantList


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)数量
    *   arr:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)附魔ID数组
*   该方法的主要作用：获取背包格道具附魔，返回附魔id数组
    
*   具体使用案例如下：
    

```
--获取指定玩家背包中某格物品的附魔数量与id
--第一个参数为玩家迷你号
--第二个参数为背包栏id，1000为快捷栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
local result,num,arr=Backpack:getGridEnchantList(1000,1000)
if result==0 then--如果获取成功
	--在聊天框显示附魔数量
	Chat:sendSystemMsg("玩家1000的快捷栏第一格物品附魔数量为"..num)
	for i,a in ipairs(arr) do
		--在聊天框显示附魔列表
		Chat:sendSystemMsg("第"..i.."个附魔id为："..a)
	end
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### getGridToolType


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   type:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)工具类型
*   该方法的主要作用：获取背包道具工具类型(<0表示非工具)
    
*   具体使用案例如下：
    

```
--获取指定玩家指定物品格的物品道具类型
--第一个参数为玩家迷你号
--第二个参数为背包栏id，1000为快捷栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
--返回值可能是：-1非道具 1斧 2镐 3铲 4锄 6剑 7弓 14投掷 等
local result,type=Backpack:getGridToolType(1000,1000)
--在聊天框显示
Chat:sendSystemMsg("玩家1000快捷栏第一格物品类型为：(-1非道具 1斧 2镐 3铲 4锄 6剑 7弓 14投掷)"..type)

```

#### addItem


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   successNum:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)成功添加的数量
*   该方法的主要作用：添加道具到背包
    
*   具体使用案例如下：
    

```
--给指定玩家的背包添加物品
--第一个参数为玩家迷你号
--第二个参数为要添加的物品id，101为土块
--第三个参数为要添加的物品数量
local result,successNum=Backpack:addItem(1000,101,999)
if result==0 then--如果添加成功
	--在聊天框显示
	Chat:sendSystemMsg("尝试给玩家1000的背包添加999个土块，实际添加了"..successNum)
else--如果添加失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### discardItem


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：丢弃背包某个格子里的道具
    
*   具体使用案例如下：
    

```
--移除指定玩家的指定背包栏的物品
--第一个参数为玩家迷你号
--第二个参数0为背包栏id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
--第三个参数为移除数量
Backpack:discardItem(1000,0,10)
--在聊天框显示
Chat:sendSystemMsg("移除了玩家1000的背包栏第一格10个物品")

```

#### getGridNum


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   gridid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：获取背包某个格子的道具数量
    
*   具体使用案例如下：
    

```
--获取指定玩家指定物品格的物品数量
--第一个参数为玩家迷你号
--第二个参数0为背包栏物品格id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
local result,num=Backpack:getGridNum(1000,0)
if result==0 then--如果获取成功
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000的背包储存栏的第一格物品数量为："..num)
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("玩家1000不在当前存档")
end

```

#### actEquipUpByResID


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   resid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：玩家穿上装备
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家
	local resid=12241--装备id
	--给玩家穿上装备(前提是玩家背包里有这件装备)
	Backpack:actEquipUpByResID(objid, resid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### actEquipOffByEquipID


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   equipid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：玩家脱下装备栏装备
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家
	local equipid=0--装备栏id，0代表头盔
	--给玩家脱下装备(前提是玩家装备栏里有装备)
	Backpack:actEquipOffByEquipID(objid, equipid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### actCreateEquip


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   resid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建装备
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家
	local resid=12241--装备id，这里是蓝钻头盔
	--给玩家创建装备(不消耗玩家物品)
	Backpack:actCreateEquip(objid, resid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### actDestructEquip


*   参数及类型：
    
    *   playerid:number玩家ID
    *   equipid:number装备栏ID（0~4）
*   返回值及类型：
    
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用：销毁装备
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local objid=event.eventobjid--玩家
	local equipid=0--装备栏id，0代表头盔
	--销毁玩家装备(不放入背包)
	Backpack:actDestructEquip(objid, equipid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### PlayShortCutIxEffect

*   参数及类型：
    *   objid:number玩家ID
    *   effectid:number特效ID
    *   scale:number缩放大小
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：设置手持栏道具上播放特效
*   具体使用案例如下：

```
local result = Backpack:PlayShortCutIxEffect(objid, effectid,scale)
```

#### StopShortCutIxEffect

*   参数及类型：
    *   objid:number玩家ID
    *   effectid:number特效ID
*   返回值及类型：
*   ErrorCode.OK
*   该方法的主要作用：停止手持栏道具上播放特效
*   具体使用案例如下：

```
local result = Backpack:StopShortCutIxEffect(objid, equipid)
```

#### PlayShortCutItemEffect

*   参数及类型：
    *   objid:number玩家ID
    *   itemid:number道具ID
    *   effectid:number特效ID
    *   scale:number缩放大小
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：设置快捷栏指定道具上播放特效
*   具体使用案例如下：

```
local result = Backpack:PlayShortCutItemEffect(objid,itemid, effectid,scale)
```

#### StopShortCutItemEffect

*   参数及类型：
    *   objid:number玩家ID
    *   itemid:number道具ID
    *   effectid:number特效ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：停止快捷栏指定道具上播放特效
*   具体使用案例如下：

```
local result = Backpack:StopShortCutItemEffect(objid, itemid,effectid)
```


### 对象库接口：ObjectLib

迷你世界 更新时间: 2023-04-26 20:21:09

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [getAreaData(...)](#getAreaData) | 获取区域数据 |
| 2 | [getPositionData(...)](#getPositionData) | 获取位置数据 |
| 3 | [getLivingData(...)](#getLivingData) | 获取生物数据 |
| 4 | [getItemData(...)](#getItemData) | 获取道具点数据 |

#### getAreaData

*   参数及类型：
    *   uuid:number区域ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   id:number区域运行ID
*   该方法的主要作用： 获取区域数据
*   具体使用案例如下：

```
local result,areaid= ObjectLib:getAreaData(10000001) --场景中拉取的区域
if result == 0 then--是液体方块
	Chat:sendSystemMsg("获取的区域ID是 "..areaid)
end
```

#### getPositionData

*   参数及类型：
    *   uuid:number位置ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   id:number位置运行ID
*   该方法的主要作用： 获取位置数据
*   具体使用案例如下：

```
local result,areaid= ObjectLib:getPositionData(20000001) --场景中放置的位置
if result == 0 then--是液体方块
	Chat:sendSystemMsg("获取的区域ID是 "..areaid)
end
```

#### getLivingData

*   参数及类型：
    *   uuid:number生物ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   id:number生物运行ID
*   该方法的主要作用： 获取生物数据
*   具体使用案例如下：

```
local result,areaid= ObjectLib:getLivingData(30000001) --场景中放置的生物
if result == 0 then--是液体方块
	Chat:sendSystemMsg("获取的区域ID是 "..areaid)
end
```

#### getItemData

*   参数及类型：
    *   uuid:number道具ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   id:number道具运行ID
*   该方法的主要作用： 获取道具点数据
*   具体使用案例如下：

```
local result,areaid= ObjectLib:getItemData(50000001) --场景中放置的道具点
if result == 0 then--是液体方块
	Chat:sendSystemMsg("获取的区域ID是 "..areaid)
end
```

### 变量库接口：VarLib

彼得兔 更新时间: 2023-04-26 10:19:37

**（此类接口针对变量库中已创建的变量进行改动、调用）**

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [setGlobalVarByName(...)](#setglobalvarbyname) | 设置变量库全局变量 |
| 2 | [getGlobalVarByName(...)](#getglobalvarbyname) | 获取变量库全局变量 |
| 3 | [setPlayerVarByName(...)](#setplayervarbyname) | 设置变量库私有变量 |
| 4 | [getPlayerVarByName(...)](#getplayervarbyname) | 获取变量库私有变量 |

#### setGlobalVarByName

*   参数及类型：
    
    *   actionattr:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，查看参数：[VARTYPE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   msg:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，在变量库中创建的参数名称
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，设置的值
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置变量库中的全局变量
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行函数
local function clickblock(event)
    local actionattr=3--变量类型：数值
    local msg="数值01"--变量名
    local val=50--要设置的值
    --设置数值“数值01”的值为50
    VarLib2:setGlobalVarByName(actionattr,msg,val)
end
ScriptSupportEvent:registerEvent('Player.ClickBlock', clickblock)
```

#### getGlobalVarByName


*   参数及类型：
    
    *   actionattr:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，查看参数：[VARTYPE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   msg:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，在变量库中创建的参数名称
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取变量库的全局变量
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行函数
local function clickblock(event)
    local actionattr=3--变量类型：数值
    local msg="数值01"--变量名
    --获取数值“数值01”的值，赋值给value
    local result,value = VarLib2:getGlobalVarByName(actionattr,msg)
    --在聊天框显示数值
    Chat:sendSystemMsg("数值“数值01”的值为"..value)
end
ScriptSupportEvent:registerEvent('Player.ClickBlock', clickblock)
```

#### setPlayerVarByName


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actionattr:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，查看参数：[VARTYPE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   msg:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，在变量库中创建的参数名称
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，设置的值
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置变量库中的私有变量
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行函数
local function clickblock(event)
    local objid=event.eventobjid--点击方块的玩家迷你号（私有变量所属对象）
    local actionattr=3--变量类型：数值
    local msg="数值01"--变量名
    local val=50--要设置的值
    --设置私有数值“数值01”的值为50
    VarLib2:setPlayerVarByName(objid,actionattr,msg,val)
end
ScriptSupportEvent:registerEvent('Player.ClickBlock', clickblock)
```

#### getPlayerVarByName


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   actionattr:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，查看参数：[VARTYPE](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   msg:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)，在变量库中创建的参数名称
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取变量库中的私有变量
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行函数
local function clickblock(event)
    local objid=event.eventobjid--点击方块的玩家迷你号（私有变量所属对象）
    local actionattr=3--变量类型：数值
    local msg="数值01"--变量名
    --获取私有数值“数值01”的值，赋值给value
    local result,value = VarLib2:getPlayerVarByName(objid,actionattr,msg)
    --在聊天框显示私有数值
    Chat:sendSystemMsg("私有数值“数值01”的值为"..value)
end
ScriptSupportEvent:registerEvent('Player.ClickBlock', clickblock)
```

### 小地图接口：Mapmark

彼得兔 更新时间: 2023-10-25 10:33:48

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [newShape(...)](#newshape) | 新增一个形状(线，矩形，圆形) |
| 2 | [deleteShape(...)](#deleteshape) | 删除一个形状 |
| 3 | [setShapeColor(...)](#setshapecolor) | 设置形状颜色 |
| 4 | [showShape(...)](#showshape) | 设置形状显示 or 隐藏 |
| 5 | [updateLine(...)](#updateline) | 更新形状(线形)，传入起始坐标和末尾坐标 |
| 6 | [updateRectangle(...)](#updaterectangle) | 更新形状(矩形)，传入起始坐标和尺寸 |
| 7 | [updateCircle(...)](#updatecircle) | 更新形状(圆形)，传入圆心坐标和半径 |

#### newShape


*   参数及类型：
    
    *   type:number类型标记
    *   isshow:boolean是否显示
    *   r,g,b:number颜色值(范围0~255)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   shapeid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：新增一个形状(线，矩形，圆形)
    
*   具体使用案例如下：
    

```
--在地图创建一条黑色的线并显示(貌似没有效果)
--第一个参数0是形状类型：0线 1矩形 2圆形
--第二个参数是是否显示：true是 false否
--后三个参数是形状颜色，分别是R、G、B(红绿蓝)
local result,shapeid=MapMark:newShape(0,true,0,0,0)
--在聊天框显示
Chat:sendSystemMsg("创建了一条黑色的线！")

```

#### deleteShape


*   参数及类型：
    
    *   shapeid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：删除一个形状
    
*   具体使用案例如下：
    

```
--把id为1的形状删除，参数1就是要删除的形状id
MapMark:deleteShape(1)
--在聊天框显示
Chat:sendSystemMsg("删除了id为1的形状！")

```

#### setShapeColor


*   参数及类型：
    
    *   shapeid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   r:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   g:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   b:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置形状颜色
    
*   具体使用案例如下：
    

```
--把id为1的形状设置为黑色
--第一个参数是形状id
--后三个参数是要改成的颜色，分别是R、G、B(红绿蓝)
MapMark:setShapeColor(1,0,0,0)
--在聊天框显示
Chat:sendSystemMsg("id为1的形状被设置成了黑色！")

```

#### showShape


*   参数及类型：
    
    *   shapeid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   showflag:[**`boolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置形状显示 or 隐藏
    
*   具体使用案例如下：
    

```
--把id为1的形状隐藏
--第一个参数是形状id
--第二个参数是是否隐藏，true显示 false隐藏
MapMark:showShape(1,false)
--在聊天框显示
Chat:sendSystemMsg("隐藏了id为1的形状！")

```

#### updateLine


*   参数及类型：
    
    *   shapeid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   sx:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   sz:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   ex:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   ez:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：更新形状(线形)，传入起始坐标和末尾坐标
    
*   具体使用案例如下：
    

```
--把id为1的形状(只能是直线)设置为从(0,0)到(1,1)
--第一个参数1是直线形状id
--第二、三个参数0,0是直线起点坐标
--后两个参数1,1是直线终点坐标
MapMark:updateLine(1,0,0,1,1)
--在聊天框显示
Chat:sendSystemMsg("id为1的直线被设置为了从(0,0)到(1,1)")

```

#### updateRectangle


*   参数及类型：
    
    *   shapeid:number形状ID
    *   sx:numberx坐标值
    *   sz:numberz坐标值
    *   w:numberx方向坐标差
    *   h:numberz方向坐标差
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：更新形状(矩形)，传入起始坐标和尺寸
    
*   具体使用案例如下：
    

```
--把id为1的形状(只能是矩形)设置为从(0,0)开始宽和高分别为1和1的矩形
--第一个参数1是矩形形状id
--第二、三个参数0,0是矩形起点坐标
--后两个参数1,1是矩形宽高尺寸
MapMark:updateRectangle(1,0,0,1,1)
--在聊天框显示
Chat:sendSystemMsg("id为1的矩形被设置为了起点在(0,0)，宽高分别是1和1")

```

#### updateCircle


*   参数及类型：
    
    *   shapeid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   cx:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   cz:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   r:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：更新形状(圆形)，传入圆心坐标和半径
    
*   具体使用案例如下：
    

```
--把id为1的形状(只能是圆)设置为圆心为(0,0)，半径为1的圆
--第一个参数1是圆形形状id
--第二、三个参数0,0是圆的圆心坐标
--最后一个参数1是圆的半径
MapMark:updateCircle(1,0,0,1)
--在聊天框显示
Chat:sendSystemMsg("id为1的圆被设置为了圆心在(0,0)，半径为1")

```

### 出生点接口：Spawnport

彼得兔 更新时间: 2023-04-26 10:19:56

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [getSpawnPoint(...)](#getspawnpoint) | 获取默认出生点 |
| 2 | [setSpawnPoint(...)](#setspawnpoint) | 设置出生点位置 |
| 3 | [getChunkValidSpawnPos(...)](#getchunkvalidspawnpos) | 获取区块有效刷新点，可作为出生点 |

#### getSpawnPoint


*   参数及类型：`nil`
    
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取默认出生点
    
*   具体使用案例如下：
    

```
--获取存档的默认出生点坐标
local result,x,y,z=Spawnport:getSpawnPoint()
--在聊天框显示
Chat:sendSystemMsg("默认出生点坐标为：("..x..","..y..","..z..")")

```

#### setSpawnPoint


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置出生点位置
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local x,y,z=event.x,event.y,event.z--被点击的坐标
	--设置出生点坐标(貌似无效)
	Spawnport:setSpawnPoint(x, y, z)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getChunkValidSpawnPos


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：获取区块有效刷新点，可作为出生点
    
*   具体使用案例如下：
    

```
--随机获取区块(0,0,0)的有效刷新点坐标(意义不明)
local result,x,y,z=Spawnport:getChunkValidSpawnPos(0,0,0)
--在聊天框显示
Chat:sendSystemMsg("区块(0,0,0)的随机有效刷新点坐标为：("..x..","..y..","..z..")")

```

### 计时器接口：MiniTimer

彼得兔 更新时间: 2023-04-26 20:24:50

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [isExist(...)](#isexist) | 判断计时器是否存在 |
| 2 | [createTimer(...)](#createtimer) | 添加计时器 |
| 3 | [deleteTimer(...)](#deletetimer) | 删除计时器 |
| 4 | [startBackwardTimer(...)](#startbackwardtimer) | 启动倒计时 |
| 5 | [startForwardTimer(...)](#startforwardtimer) | 启动正向计时 |
| 6 | [pauseTimer(...)](#pausetimer) | 暂停计时器 |
| 7 | [resumeTimer(...)](#resumetimer) | 恢复计时器 |
| 8 | [stopTimer(...)](#stoptimer) | 停止计时器 |
| 9 | [changeTimerTime(...)](#changetimertime) | 改变计时器计时 |
| 10 | [getTimerTime(...)](#gettimertime) | 获取计时器时间 |
| 11   | [showTimerWnd(...)](#showTimerWnd)     | 显示计时器窗口（若其他计时器已经显示，则替换显示） |
| 12   | [hideTimerWnd(...)](#hideTimerWnd)     | 隐藏计时器窗口                             |

#### isExist


*   参数及类型：
    
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   result:[**`bool`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：判断计时器是否存在
    
*   具体使用案例如下：
    

```
--判断id为1的计时器是否存在，参数1就是计时器id
local result=MiniTimer:isExist(1)
if result==0 then--如果存在
	--在聊天框显示
	Chat:sendSystemMsg("id为1的计时器存在！")
	--让id为1的计时器开始20秒倒计时
	MiniTimer:startBackwardTimer(1,20,false)
	--在房主游戏界面显示计时时间
	MiniTimer:showTimerTips({0},1,"id为1的计时器的计时为：",true)
	--在聊天框显示
	Chat:sendSystemMsg("开始20秒倒计时！")
else--如果不存在
	--在聊天框显示
	Chat:sendSystemMsg("id为1的计时器不存在！")
	--创建一个计时器，命名为“timer”
	local result2,id=MiniTimer:createTimer("timer",nil,true)
	--在聊天框显示
	Chat:sendSystemMsg("创建了一个名为“timer”的新计时器并开始20秒倒计时！计时器id为"..id)
	--让新创建的这个计时器开始20秒倒计时
	MiniTimer:startBackwardTimer(id,20,false)
	--在房主游戏界面显示计时时间
	MiniTimer:showTimerTips({0},id,"id为1的计时器的计时为：",true)
end

```

#### createTimer


*   参数及类型：
    
    *   name:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器索引
*   该方法的主要作用：添加计时器
    
*   具体使用案例如下：
    

```
--创建一个新计时器，命名为“timer”
--第一个参数就是创建的计时器的名字，第二个参数是地图id(作用不明，默认不传)，第三个参数是是否为存档私有计时器(改为false则所有存档可共用此计时器。默认不传)
local result,id=MiniTimer:createTimer("timer",nil,true)
--在聊天框显示
Chat:sendSystemMsg("新建了名为“timer”的计时器，id为"..id)

```

#### deleteTimer


*   参数及类型：
    
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：删除计时器
    
*   具体使用案例如下：
    

```
--删除id为1的计时器。参数为要删除的计时器的id
MiniTimer:deleteTimer(1)
--在聊天框显示
Chat:sendSystemMsg("删除了id为1的计时器！")

```

#### startBackwardTimer


*   参数及类型：
    
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器索引
    *   interval:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)倒计时间隔时间
    *   repeated:[**`bool`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)是否重复执行
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：启动倒计时
    
*   具体使用案例如下：
    

```
--让id为1的计时器开始20秒倒计时
--第一个参数为计时器id，第二个参数为倒计时时间，第三个参数为是否重复执行(貌似无效)
MiniTimer:startBackwardTimer(1,20,false)
--在聊天框显示
Chat:sendSystemMsg("启动了id为1的计时器，倒计时20秒！")
--在房主游戏界面显示id为1的计时器的计时
MiniTimer:showTimerTips({0},1,"id为1的计时器的计时为：",true)

```

#### startForwardTimer


*   参数及类型：
    
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器索引
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：启动正向计时
    
*   具体使用案例如下：
    

```
--让id为1的计时器递增计时，参数1就是计时器id
MiniTimer:startForwardTimer(1)
--在聊天框显示
Chat:sendSystemMsg("id为1的计时器开始正向计时！")
--在房主游戏界面显示id为1的计时器的计时
MiniTimer:showTimerTips({0},1,"id为1的计时器的计时为：",true)

```

#### pauseTimer


*   参数及类型：
    
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器索引
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：暂停计时器
    
*   具体使用案例如下：
    

```
--暂停id为1的计时器的计时，参数1就是计时器的id
MiniTimer:pauseTimer(1)
--在聊天框显示
Chat:sendSystemMsg("暂停了id为1的计时器！")

```

#### resumeTimer


*   参数及类型：
    
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器索引
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：恢复计时器
    
*   具体使用案例如下：
    

```
--恢复id为1的计时器的计时，参数1就是计时器的id
MiniTimer:resumeTimer(1)
--在聊天框显示
Chat:sendSystemMsg("恢复了id为1的计时器！")
--在房主游戏界面显示id为1的计时器的计时
MiniTimer:showTimerTips({0},1,"id为1的计时器的计时为：",true)

```

#### stopTimer


*   参数及类型：
    
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器索引
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：停止计时器
    
*   具体使用案例如下：
    

```
--停止id为1的计时器的计时，参数1就是计时器的id
MiniTimer:stopTimer(1)
--在聊天框显示
Chat:sendSystemMsg("停止了id为1的计时器！")

```

#### changeTimerTime


*   参数及类型：
    
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器索引
    *   time:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器计时
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：改变计时器计时
    
*   具体使用案例如下：
    

```
local result = MiniTimer:changeTimerTime(id, curtime)

```

#### getTimerTime


*   参数及类型：
    
    *   id:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器索引
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   second:[**`int`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)计时器运行时间
*   该方法的主要作用：获取计时器时间
    
*   具体使用案例如下：
    

```
--在聊天框显示提示
Chat:sendSystemMsg("每次做动画表情都会显示id为1的计时器的计时时间！")
--当监听到动画表情时，执行此函数
local function showtime()
	--获取id为1的计时器的计时时间，参数1就是计时器的id
	local result,second=MiniTimer:getTimerTime(1)
	--在聊天框显示
	Chat:sendSystemMsg("id为1的计时器的计时时间为"..second)
end
--注册动画表情监听器，执行showtime函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],showtime)

```

#### showTimerWnd

*   参数及类型：
    *   playerids:table玩家ID数组(nil表示全部玩家)
    *   timerid:number计时器ID
    *   title:string计时器窗口显示的标题
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 显示计时器窗口(若其他计时器已经显示，则替换显示)
*   具体使用案例如下：

```
local code  = MiniTimer:showTimerWnd(playerids, timerid, title)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

#### hideTimerWnd

*   参数及类型：
    *   playerids:table玩家ID数组(nil表示全部玩家)
    *   timerid:number计时器ID
    *   title:string计时器窗口显示的标题
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 隐藏计时器窗口
*   具体使用案例如下：

```
local code  = MiniTimer:hideTimerWnd(playerids, timerid)
if code == ErrorCode.OK then
	print('执行成功'  )
else
	print('执行失败')
end
```

### 文字板接口：Graphics

彼得兔 更新时间: 2024-08-27 11:12:18

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [makeGraphicsText(...)](#makegraphicstext) | 创建文字板信息 |
| 2 | [makeflotageText(...)](#makeflotagetext) | 创建漂浮文字信息 |
| 3 | [makeGraphicsProgress(...)](#makegraphicsprogress) | 创建进度条信息 |
| 4 | [makeGraphicsArrowToPos(...)](#makegraphicsarrowtopos) | 生成指向位置的箭头数据 |
| 5 | [makeGraphicsLineToPos(...)](#makegraphicslinetopos) | 生成指向位置的线数据 |
| 6 | [makeGraphicsSurfaceToPos(...)](#makegraphicssurfacetopos) | 生成指向位置的面数据 |
| 7 | [makeGraphicsArrowToActor(...)](#makegraphicsarrowtoactor) | 生成指向对象的箭头数据 |
| 8 | [makeGraphicsLineToActor(...)](#makegraphicslinetoactor) | 生成指向对象的线数据 |
| 9 | [makeGraphicsSurfaceToActor(...)](#makegraphicssurfacetoactor) | 生成指向对象的面数据 |
| 10 | [createGraphicsTxtByPos(...)](#creategraphicstxtbypos) | 在位置上创建文字板 |
| 11 | [createGraphicsTxtByActor(...)](#creategraphicstxtbyactor) | 在生物身上创建文字板 |
| 12 | [createflotageTextByPos(...)](#createflotagetextbypos) | 在位置上创建漂浮文字 |
| 13 | [createflotageTextByActor(...)](#createflotagetextbyactor) | 在生物身上创建漂浮文字 |
| 14 | [createGraphicsProgressByPos(...)](#creategraphicsprogressbypos) | 在位置上创建进度条 |
| 15 | [createGraphicsProgressByActor(...)](#creategraphicsprogressbyactor) | 在生物身上创建进度条 |
| 16 | [removeGraphicsByPos(...)](#removegraphicsbypos) | 删除位置上的图文信息 |
| 17 | [removeGraphicsByObjID(...)](#removegraphicsbyobjid) | 删除生物的图文信息 |
| 18 | [updateGraphicsTextById(...)](#updategraphicstextbyid) | 更新图文信息的文字内容 |
| 19 | [updateGraphicsProgressById(...)](#updategraphicsprogressbyid) | 更新进度条的进度 |
| 20 | [createGraphicsArrowByActorToPos(...)](#creategraphicsarrowbyactortopos) | 创建生物指向位置的箭头 |
| 21 | [createGraphicsArrowByActorToActor(...)](#creategraphicsarrowbyactortoactor) | 创建生物指向生物的箭头 |
| 22 | [createGraphicsArrowByPosToPos(...)](#creategraphicsarrowbypostopos) | 创建位置指向位置的箭头 |
| 23 | [createGraphicsArrowByPosToActor(...)](#creategraphicsarrowbypostoactor) | 创建位置指向生物的箭头 |
| 24 | [createGraphicsLineByActorToPos(...)](#creategraphicslinebyactortopos) | 创建生物与位置的线 |
| 25 | [createGraphicsLineByActorToActor(...)](#creategraphicslinebyactortoactor) | 创建指向生物的线 |
| 26 | [createGraphicsLineByPosToPos(...)](#creategraphicslinebypostopos) | 创建位置指向位置的线 |
| 27 | [createGraphicsLineByPosToActor(...)](#creategraphicslinebypostoactor) | 创建位置指向生物的线 |
| 28 | [createGraphicsSurfaceByActorToPos(...)](#creategraphicssurfacebyactortopos) | 创建指向位置的面 |
| 29 | [createGraphicsSurfaceByActorToActor(...)](#creategraphicssurfacebyactortoactor) | 创建指向生物的面 |
| 30 | [createGraphicsSurfaceByPosToPos(...)](#creategraphicssurfacebypostopos) | 创建位置指向位置的面 |
| 31 | [createGraphicsSurfaceByPosToActor(...)](#creategraphicssurfacebypostoactor) | 创建位置指向生物的面 |
| 32 | [snycGraphicsInfo2Client(...)](#snycgraphicsinfo2client) | 刷新信息至客机,在更新图文信息接口之后调用 |
| 33   | [makeGraphicsImage(...)](#makeGraphicsImage) | 创建图片信息                               |
| 34   | [createGraphicsImageByActor(...)](#createGraphicsImageByActor) | 在生物身上创建图片                         |
| 35   | [createGraphicsImageByPos(...)](#createGraphicsImageByPos) | 在位置上创建图片                           |

#### makeGraphicsText


*   参数及类型：
    
    *   title:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)显示的文字标题
    *   font:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)字体大小
    *   apha:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)不透明度
    *   itype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)文字板的编号
    *   autoWrap:[**`bolean`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)是否自动换行，可缺省，默认值为ture
*   返回值及类型：
    
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)文本信息内容
*   该方法的主要作用：创建文字板信息。当autoWrap参数为ture时，保持以前的固定宽度自动换行的表现当autoWrap参数为false时候，不会自动换行。当在文本中识别到/n 字符时候，会将文本换行
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local title="这是一个文字板"--文字内容
	local font=15--字体大小
	local alpha=100--背景透明度(0:完全透明 100:不透明)
	local itype=1--文字板编号
	--创建一个文字板信息，存到graphicsInfo中
	local graphicsInfo=Graphics:makeGraphicsText(title, font, alpha, itype)
	local x,y,z=event.x,event.y+1,event.z--显示信息的坐标
	local x2,y2=0,0--偏移量
	local result,graphid=Graphics:createGraphicsTxtByPos(x, y, z, graphicsInfo, x2, y2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### makeflotageText


*   参数及类型：
    
    *   title:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)显示的文字标题
    *   font:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)字体大小
    *   itype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)漂浮文字的编号
*   返回值及类型：
    
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：创建漂浮文字信息
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local title="这是一个漂浮文字"--文字内容
	local font=15--字体大小
	local itype=1--漂浮文字编号
	--创建一个漂浮文字信息存到graphicsInfo中
	local graphicsInfo=Graphics:makeflotageText(title, font, itype)
	local x,y,z=event.x,event.y+1,event.z--显示漂浮文字的坐标
	local x2,y2=0,0--水平偏移距离
	--在位置上显示漂浮文字
	local result,graphid=Graphics:createflotageTextByPos(x, y, z, graphicsInfo, x2, y2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### makeGraphicsProgress


*   参数及类型：
    
    *   v1:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)进度条的当前值
    *   v2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)进度条的最大值
    *   color:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)进度条的颜色
    *   itype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)进度条的编号
*   返回值及类型：
    
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：创建进度条信息
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local v1=50--进度条当前值
	local v2=100--进度条最大值
	local color=0xff0000--进度条的颜色
	local itype=1--进度条编号
	--创建一个进度条信息，存到graphicsInfo中
	local graphicsInfo=Graphics:makeGraphicsProgress(v1, v2, color, itype)
	local x,y,z=event.x,event.y+1,event.z--显示进度条的坐标
	local x2,y2=0,0--水平偏移距离
	--在位置上显示进度条
	local result,graphid = Graphics:createGraphicsProgressByPos(x, y, z, graphicsInfo, x2, y2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### makeGraphicsArrowToPos


*   参数及类型：
    
    *   pos:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   size:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)大小
    *   color:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)颜色
    *   id:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)编号
*   返回值及类型：
    
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：生成指向位置的箭头数据
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event.y,event.z--指向坐标
	local size=0.5--箭头大小
	local color=0xff0000--箭头颜色
	local id=1--箭头数据编号
	--创建一个指向位置的箭头数据
	local info=Graphics:makeGraphicsArrowToPos(x, y, z, size, color, id)

	local objid=event.eventobjid--在玩家身上创建
	local dir={x=0,y=10,z=0}--偏移方向
	local offset=10--偏移距离
	--在生物身上创建指向坐标的箭头
	Graphics:createGraphicsArrowByActorToPos(objid, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### makeGraphicsLineToPos


*   参数及类型：
    
    *   pos:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   size:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)大小
    *   color:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)颜色
    *   id:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)编号
*   返回值及类型：
    
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：生成指向位置的线数据
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event.y,event.z--指向坐标
	local size=0.5--线的尺寸
	local color=0xff0000--线的颜色
	local id=1--线数据编号
	--创建一个指向位置的线数据
	local info=Graphics:makeGraphicsLineToPos(x, y, z, size, color, id)

	local objid=event.eventobjid--在玩家身上创建
	local dir={x=0,y=0,z=0}--偏移方向
	local offset=0--偏移距离
	--在生物身上创建指向坐标的箭头
	Graphics:createGraphicsLineByActorToPos(objid, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### makeGraphicsSurfaceToPos


*   参数及类型：
    
    *   pos:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   size:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)大小
    *   color:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)颜色
    *   id:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)编号
*   返回值及类型：
    
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：生成指向位置的面数据
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event.y,event.z--指向坐标
	local size=0.5--面的尺寸
	local color=0xff0000--面的颜色
	local id=1--面数据编号
	--创建指向位置的面数据
	local info=Graphics:makeGraphicsSurfaceToPos(x, y, z, size, color, id)
    --基于创建的数据创建一个面
    Graphics:MakeGraphicsArrowToPos(event.eventobjid, info, {x=0,y=0,z=0}, 0)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### makeGraphicsArrowToActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物id
    *   size:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)大小
    *   color:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)颜色
    *   id:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)编号
*   返回值及类型：
    
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：生成指向对象的箭头数据
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--指向对象
	local size=0.5--箭头大小
	local color=0xff0000--箭头颜色
	local id=1--箭头数据编号
	--创建一个指向对象的箭头数据
	local info=Graphics:makeGraphicsArrowToActor(objid, size, color, id)

	local objid2=event.eventobjid--在玩家身上创建
	local dir={x=0,y=10,z=0}--偏移方向
	local offset=10--偏移距离
	--在玩家身上创建指向生物的箭头
	Graphics:createGraphicsArrowByActorToActor(objid2, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### makeGraphicsLineToActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物id
    *   size:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)大小
    *   color:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)颜色
    *   id:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)编号
*   返回值及类型：
    
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：生成指向对象的线数据
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--指向对象
	local size=0.5--线的尺寸
	local color=0xff0000--线的颜色
	local id=1--线数据编号
	--创建一个指向对象的线数据
	local info=Graphics:makeGraphicsLineToActor(objid, size, color, id)

	local objid2=event.eventobjid--在玩家身上创建
	local dir={x=0,y=0,z=0}--偏移方向
	local offset=0--偏移距离
	--在玩家身上创建指向生物的线
	Graphics:createGraphicsLineByActorToActor(objid2, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### makeGraphicsSurfaceToActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物id
    *   size:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)大小
    *   color:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)颜色
    *   id:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)编号
*   返回值及类型：
    
    *   array:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：生成指向对象的面数据
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--指向对象
	local size=0.5--面的尺寸
	local color=0xff0000--面的颜色
	local id=1--面数据编号
	--创建一个指向对象的面数据
	local info=Graphics:makeGraphicsSurfaceToActor(objid, size, color, id)

	local objid2=event.eventobjid--在玩家身上创建
	local dir={x=0,y=0,z=0}--偏移方向
	local offset=0--偏移距离
	--在玩家身上创建指向生物的面
	Graphics:createGraphicsSurfaceByActorToActor(objid2, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### createGraphicsTxtByPos


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   graphicInfo:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文设置的属性信息
    *   x2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)2d平面上x轴的偏移量
    *   y2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)2d平面上y轴的偏移量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   graphid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：在位置上创建文字板
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local title="这是一个文字板"--文字内容
	local font=15--字体大小
	local alpha=100--背景透明度(0:完全透明 100:不透明)
	local itype=1--文字板编号
	--创建一个文字板信息，存到graphicsInfo中
	local graphicsInfo=Graphics:makeGraphicsText(title, font, alpha, itype)
	local x,y,z=event.x,event.y+1,event.z--显示信息的坐标
	local x2,y2=0,0--偏移量
	local result,graphid=Graphics:createGraphicsTxtByPos(x, y, z, graphicsInfo, x2, y2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createGraphicsTxtByActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物objid
    *   graphicInfo:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文设置的属性信息
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文信息在生物身上的朝向
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)在方向上的偏移
    *   x2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)2d平面上x轴的偏移量
    *   y2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)2d平面上y轴的偏移量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   graphid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：在生物身上创建文字板
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local title="这是一个文字板"--文字内容
	local font=15--字体大小
	local alpha=100--背景透明度(0:完全透明 100:不透明)
	local itype=1--文字板编号
	--创建一个文字板信息，存到graphicsInfo中
	local graphicsInfo=Graphics:makeGraphicsText(title, font, alpha, itype)
	local objid=event.toobjid--显示信息的实体id
	local dir={x=0,y=10,z=0}--偏移方向
	local offset=10--方向上的偏移距离
	local x2,y2=0,0--水平偏移距离
	--在实体上显示文字板
	local result,graphid=Graphics:createGraphicsTxtByActor(objid, graphicsInfo, dir, offset, x2, y2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### createflotageTextByPos


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   graphicInfo:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文设置的属性信息
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   graphid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：在位置上创建漂浮文字
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local title="这是一个漂浮文字"--文字内容
	local font=15--字体大小
	local itype=1--漂浮文字编号
	--创建一个漂浮文字信息存到graphicsInfo中
	local graphicsInfo=Graphics:makeflotageText(title, font, itype)
	local x,y,z=event.x,event.y+1,event.z--显示漂浮文字的坐标
	local x2,y2=0,0--水平偏移距离
	--在位置上显示漂浮文字
	local result,graphid=Graphics:createflotageTextByPos(x, y, z, graphicsInfo, x2, y2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createflotageTextByActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物objid
    *   graphicInfo:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文设置的属性信息
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文信息在生物身上的朝向
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)在方向上的偏移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   graphid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：在生物身上创建漂浮文字
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local title="这是一个漂浮文字"--文字内容
	local font=15--字体大小
	local itype=1--漂浮文字编号
	--创建一个漂浮文字信息存到graphicsInfo中
	local graphicsInfo=Graphics:makeflotageText(title, font, itype)
	local objid=event.toobjid--显示文字的生物实体id
	local dir={x=0,y=0,z=0}--偏移方向
	local offset=0--方向上的偏移距离
	local x2,y2=0,0--水平偏移距离
	--在生物身上显示漂浮文字
	local result,graphid = Graphics:createflotageTextByActor(objid, graphicsInfo, dir, offset, x2, y2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### createGraphicsProgressByPos


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   graphicInfo:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)进度条设置的属性信息
    *   x2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)2d平面上x轴的偏移量
    *   y2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)2d平面上y轴的偏移量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   graphid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：在位置上创建进度条
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local v1=50--进度条当前值
	local v2=100--进度条最大值
	local color=0xff0000--进度条的颜色
	local itype=1--进度条编号
	--创建一个进度条信息，存到graphicsInfo中
	local graphicsInfo=Graphics:makeGraphicsProgress(v1, v2, color, itype)
	local x,y,z=event.x,event.y+1,event.z--显示进度条的坐标
	local x2,y2=0,0--水平偏移距离
	--在位置上显示进度条
	local result,graphid = Graphics:createGraphicsProgressByPos(x, y, z, graphicsInfo, x2, y2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createGraphicsProgressByActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物objid
    *   graphicInfo:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)进度条设置的属性信息
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文信息在生物身上的朝向
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)在方向上的偏移
    *   x2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)2d平面上x轴的偏移量
    *   y2:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)2d平面上y轴的偏移量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   graphid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   该方法的主要作用：在生物身上创建进度条
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local v1=50--进度条当前值
	local v2=100--进度条最大值
	local color=0xff0000--进度条的颜色
	local itype=1--进度条编号
	--创建一个进度条信息，存到graphicsInfo中
	local graphicsInfo=Graphics:makeGraphicsProgress(v1, v2, color, itype)
	local objid=event.toobjid--显示进度条的实体id
	local dir={x=0,y=10,z=0}--偏移方向
	local offset=10--方向上偏移距离
	local x2,y2=0,0--水平偏移距离
	--在生物上显示进度条
	local result,graphid = Graphics:createGraphicsProgressByActor(objid, graphicsInfo, dir, offset, x2, y2)

end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### removeGraphicsByPos


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   itype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文信息组类型
    *   graphType:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文类型枚举值
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：删除位置上的图文信息
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event,y+1,event.z--要移除图文信息的坐标
	local itype=1--要移除图文信息的编号
	local graphType=1--要移除图文信息的类型(1表示文字板，其他见常量列表)
	--移除被点击方块上面一格编号为1的文字板
	Graphics:removeGraphicsByPos(x, y, z, itype, graphType)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### removeGraphicsByObjID


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物objid
    *   itype:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文信息组类型
    *   graphType:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图文类型枚举值
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：删除生物的图文信息
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--要移除图文信息的实体
	local itype=1--要移除图文信息的编号
	local graphType=1--要移除图文信息的类型(1表示文字板，其他见常量列表)
	--移除被点击生物身上编号为1的文字板
	Graphics:removeGraphicsByObjID(objid, itype, graphType)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### updateGraphicsTextById


*   参数及类型：
    
    *   graphid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)已创建的图文信息ID
    *   title:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)文字内容
    *   fontsize:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)字体大小(可不填值)
    *   aphanumber
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：更新图文信息的文字内容
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local graphid=1--此处要改为create文字板返回的graphid值，表示文字板的id
	local title="更新了文字板"--更新之后显示的内容
	local fontsize=20--文字大小
	local alpha=100--背景透明度
	--更新id为graphid的文字板的内容
	Graphics:updateGraphicsTextById(graphid, title, fontsize, alpha)
	--刷新信息至客机(避免房主以外的玩家看不到更新内容)
	Graphics:snycGraphicsInfo2Client()
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### updateGraphicsProgressById


*   参数及类型：
    
    *   graphid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)已创建的图文信息ID
    *   curval:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)进度条的当前值
    *   maxval:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)进度条的最大值
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：更新进度条的进度
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local graphid=1--此处要改为create进度条返回的graphid值，表示进度条的id
	local val1,val2=80,100--更新后显示的进度条当前值和最大值
	--更新id为graphid的进度条的内容
	Graphics:updateGraphicsProgressById(graphid, val1, val2)
	--刷新信息至客机(避免房主以外的玩家看不到更新内容)
	Graphics:snycGraphicsInfo2Client()
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createGraphicsArrowByActorToPos


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物id
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)箭头信息
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)偏移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建生物指向位置的箭头
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event.y,event.z--指向坐标
	local size=0.5--箭头大小
	local color=0xff0000--箭头颜色
	local id=1--箭头数据编号
	--创建一个指向位置的箭头数据
	local info=Graphics:makeGraphicsArrowToPos(x, y, z, size, color, id)
	
	local objid=event.eventobjid--在玩家身上创建
	local dir={x=0,y=10,z=0}--偏移方向
	local offset=10--偏移距离
	--在生物身上创建指向坐标的箭头
	Graphics:createGraphicsArrowByActorToPos(objid, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createGraphicsArrowByActorToActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物id
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)箭头信息
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)偏移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建生物指向生物的箭头
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--指向对象
	local size=0.5--箭头大小
	local color=0xff0000--箭头颜色
	local id=1--箭头数据编号
	--创建一个指向对象的箭头数据
	local info=Graphics:makeGraphicsArrowToActor(objid, size, color, id)
	
	local objid2=event.eventobjid--在玩家身上创建
	local dir={x=0,y=10,z=0}--偏移方向
	local offset=10--偏移距离
	--在玩家身上创建指向生物的箭头
	Graphics:createGraphicsArrowByActorToActor(objid2, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### createGraphicsArrowByPosToPos


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)箭头信息
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建位置指向位置的箭头
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event.y,event.z--指向坐标
	local size=0.5--箭头大小
	local color=0xff0000--箭头颜色
	local id=1--箭头数据编号
	--创建一个指向位置的箭头数据
	local info=Graphics:makeGraphicsArrowToPos(x, y, z, size, color, id)
	
	local result,x2,y2,z2=Actor:getPosition(event.eventobjid)--获取玩家所在位置
	--在玩家位置创建指向坐标的箭头
	Graphics:createGraphicsArrowByPosToPos(x2, y2, z2, info)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createGraphicsArrowByPosToActor


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)箭头信息
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建位置指向生物的箭头
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--指向对象
	local size=0.5--箭头大小
	local color=0xff0000--箭头颜色
	local id=1--箭头数据编号
	--创建一个指向对象的箭头数据
	local info=Graphics:makeGraphicsArrowToActor(objid, size, color, id)
	
	local result,x,y,z=Actor:getPosition(event.eventobjid)--获取玩家坐标
	--在玩家位置创建指向生物的箭头
	Graphics:createGraphicsArrowByPosToActor(x, y, z, info)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### createGraphicsLineByActorToPos


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物id
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)线信息
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)偏移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建生物与位置的线
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event.y,event.z--指向坐标
	local size=0.5--线的尺寸
	local color=0xff0000--线的颜色
	local id=1--线数据编号
	--创建一个指向位置的线数据
	local info=Graphics:makeGraphicsLineToPos(x, y, z, size, color, id)
	
	local objid=event.eventobjid--在玩家身上创建
	local dir={x=0,y=0,z=0}--偏移方向
	local offset=0--偏移距离
	--在生物身上创建指向坐标的箭头
	Graphics:createGraphicsLineByActorToPos(objid, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createGraphicsLineByActorToActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物id
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)线信息
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)偏移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建指向生物的线
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--指向对象
	local size=0.5--线的尺寸
	local color=0xff0000--线的颜色
	local id=1--线数据编号
	--创建一个指向对象的线数据
	local info=Graphics:makeGraphicsLineToActor(objid, size, color, id)
	
	local objid2=event.eventobjid--在玩家身上创建
	local dir={x=0,y=0,z=0}--偏移方向
	local offset=0--偏移距离
	--在玩家身上创建指向生物的线
	Graphics:createGraphicsLineByActorToActor(objid2, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### createGraphicsLineByPosToPos


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)线信息
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建位置指向位置的线
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event.y,event.z--指向坐标
	local size=0.5--线的尺寸
	local color=0xff0000--线的颜色
	local id=1--线数据编号
	--创建一个指向位置的线数据
	local info=Graphics:makeGraphicsLineToPos(x, y, z, size, color, id)
	
	local result,x2,y2,z2=Actor:getPosition(event.eventobjid)--获取玩家坐标
	--在玩家位置上生成指向坐标的线
	Graphics:createGraphicsLineByPosToPos(x2, y2, z2, info)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createGraphicsLineByPosToActor


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)线信息
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建位置指向生物的线
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--指向对象
	local size=0.5--线的尺寸
	local color=0xff0000--线的颜色
	local id=1--线数据编号
	--创建一个指向对象的线数据
	local info=Graphics:makeGraphicsLineToActor(objid, size, color, id)
	
	local result,x,y,z=Actor:getPosition(event.eventobjid)--获取玩家坐标
	--在玩家坐标上创建指向生物的线
	Graphics:createGraphicsLineByPosToActor(x, y, z, info)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### createGraphicsSurfaceByActorToPos


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物id
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)面信息
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)偏移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建指向位置的面
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event.y,event.z--指向坐标
	local size=0.5--面的尺寸
	local color=0xff0000--面的颜色
	local id=1--面数据编号
	--创建一个指向位置的面数据
	local info=Graphics:makeGraphicsSurfaceToPos(x, y, z, size, color, id)
	
	local objid=event.eventobjid--在玩家身上创建
	local dir={x=0,y=0,z=0}--偏移方向
	local offset=0--偏移距离
	--在生物身上创建指向坐标的箭头
	Graphics:createGraphicsSurfaceByActorToPos(objid, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createGraphicsSurfaceByActorToActor


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)生物id
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)面信息
    *   dir:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)朝向
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)偏移
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建指向生物的面
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--指向对象
	local size=0.5--面的尺寸
	local color=0xff0000--面的颜色
	local id=1--面数据编号
	--创建一个指向对象的面数据
	local info=Graphics:makeGraphicsSurfaceToActor(objid, size, color, id)
	
	local objid2=event.eventobjid--在玩家身上创建
	local dir={x=0,y=0,z=0}--偏移方向
	local offset=0--偏移距离
	--在玩家身上创建指向生物的面
	Graphics:createGraphicsSurfaceByActorToActor(objid2, info, dir, offset)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### createGraphicsSurfaceByPosToPos


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)面信息
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建位置指向位置的面
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local x,y,z=event.x,event.y,event.z--指向坐标
	local size=0.5--面的尺寸
	local color=0xff0000--面的颜色
	local id=1--面数据编号
	--创建一个指向位置的面数据
	local info=Graphics:makeGraphicsSurfaceToPos(x, y, z, size, color, id)
	
	local result,x2,y2,z2=Actor:getPosition(event.eventobjid)--获取玩家坐标
	--在玩家位置上生成指向坐标的面
	Graphics:createGraphicsSurfaceByPosToPos(x2, y2, z2, info)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### createGraphicsSurfaceByPosToActor


*   参数及类型：
    
    *   pos:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)位置
    *   info:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)面信息
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：创建位置指向生物的面
    
*   具体使用案例如下：
    

```
--玩家点击生物时，执行此函数
local function clickactor(event)
	local objid=event.toobjid--指向对象
	local size=0.5--面的尺寸
	local color=0xff0000--面的颜色
	local id=1--面数据编号
	--创建一个指向对象的面数据
	local info=Graphics:makeGraphicsSurfaceToActor(objid, size, color, id)
	
	local result,x,y,z=Actor:getPosition(event.eventobjid)--获取玩家坐标
	--在玩家坐标上创建指向生物的面
	Graphics:createGraphicsSurfaceByPosToActor(x, y, z, info)
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], clickactor)
```

#### snycGraphicsInfo2Client


*   参数及类型：
*   返回值及类型：
*   该方法的主要作用：刷新信息至客机,在更新图文信息接口之后调用
*   具体使用案例如下：

```
--玩家点击方块时，执行此函数
local function clickblock(event)
	local graphid=1--此处要改为create图文信息返回的graphid值，表示图文信息的id
	--更新id为graphid的文字板的内容
	Graphics:updateGraphicsTextById(graphid, "更新了文字板", 20, 100)
	--刷新信息至客机(避免房主以外的玩家看不到更新内容)
	Graphics:snycGraphicsInfo2Client()
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### makeGraphicsImage

*   参数及类型：
    *   imgid:number图片ID
    *   scale:number图片大小缩放
    *   apha:number图片透明度
    *   id:number图片的编号
*   返回值及类型：
    *   array:table
*   该方法的主要作用：创建图片信息
*   具体使用案例如下：

```
local result = Graphics:makeGraphicsImage(v1, v2, color, itype)
```

#### createGraphicsImageByActor

*   参数及类型：
    *   objid:table生物或玩家ID
    *   info:table图片信息(makeGraphicsImage生成)
    *   dir:table图文信息在生物身上的朝向
    *   offest:number在方向上的偏移
    *   x2:number2d平面上x轴的偏移量
    *   y2:number2d平面上y轴的偏移量
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：创建位置指向生物的面
*   具体使用案例如下：

```
local result = Graphics:createGraphicsImageByActor(objid,info,dir,offest,x2,y2)
```

#### createGraphicsImageByPos

*   参数及类型：
    *   x,y,z:table位置坐标信息
    *   info:table图片信息(makeGraphicsImage生成)
    *   x2:number2d平面上x轴的偏移量
    *   y2:number2d平面上y轴的偏移量
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：创建位置指向生物的面
*   具体使用案例如下：

```
local result = Graphics:createGraphicsImageByPos(x,y,z, info,x2,y2)
```

### 函数监听接口：ListenParam

彼得兔 更新时间: 2023-04-26 10:20:18

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [AddGraphicsListenParam(...)](#addgraphicslistenparam) | 添加图文信息 监听触发器参数 刷新的对象id 参数信息 回调方法 |

#### AddGraphicsListenParam


*   参数及类型：
    
    *   graphid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)已创建的图文信息ID
    *   funcs:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)监听函数列表
    *   param:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)监听函数需要的参数
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：添加图文信息 监听触发器参数 刷新的对象id 参数信息 回调方法
    
*   具体使用案例如下：
    

```
-- 创建进度条基本信息
local function func_3()
    local v1 = math.random(1,100) -- 进度条的当前值
    local v2 = 100  -- 进度条的最大值
    local v3 = 0xFFC107  --颜色代码
    local v4 = 1  -- 编号
    return Graphics:makeGraphicsProgress(v1, v2, v3, v4)
end
local function getdir(playerid)
    return {x =0 ,y =1,z = 0}
end
-- 触发器时间回调函数
local function func_event(param)
    local playerid = CurEventParam.TriggerByPlayer
    if playerid then
        local offest = 100 -- 方向上的偏移距离
        local dir = getdir(playerid) -- 获取方向
        local graphinfo = func_3() -- 获取图文信息
        -- 创建一个进度条信息
        local result, grapid = Graphics:createGraphicsProgressByActor(playerid,graphinfo,dir,offest)
        if result == ErrorCode.OK then
            -- 获取进度条的当前值
			local function getCurValue(params)
				local cur = Player:getAttr(params.TriggerByPlayer,PLAYERATTR.CUR_HP) -- 获取当前血量
				return cur + math.random(1,20)
			end
			-- 获取进度条的最大值
			local function getMaxValue(params)
				local max = Player:getAttr(params.TriggerByPlayer,PLAYERATTR.MAX_HP) -- 获取最大血量
				return max + math.random(50,100)
			end
			--监听的函数列表
			local funcs = {getCurValue,getMaxValue} 
			-- 将创建成功的进度条添加进自动监听
            ListenParam:AddGraphicsListenParam(grapid,funcs,param) 
        end
    end
end
ScriptSupportEvent:registerEvent('Player.PlayAction', func_event)
```

### 变量组接口：ValueGroup

彼得兔 更新时间: 2023-04-26 10:20:36

**（此类接口针对变量库中已创建的变量进行改动、调用）**

**具体函数名及描述如下:**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [getAllGroupItem(...)](#getallgroupitem) | 获取组中所有值 |
| 2 | [insertInGroupByName(...)](#insertingroupbyname) | 添加任意值到任意组 |
| 3 | [removeValueIndexByName(...)](#removevalueindexbyname) | 从任意组移除指定编号的值 |
| 4 | [removeValueByName(...)](#removevaluebyname) | 从任意组移除任意值 |
| 5 | [clearGroupByName(...)](#cleargroupbyname) | 清空任意组 |
| 6 | [getGrouplengthByName(...)](#getgrouplengthbyname) | 获取数组长度 |
| 7 | [getValueNoByName(...)](#getvaluenobyname) | 获取组中索引值 |
| 8 | [setValueNoByName(...)](#setvaluenobyname) | 设置组中索引值 |
| 9 | [getRandomValueByName(...)](#getrandomvaluebyname) | 获得数组里面的随机值 |
| 10 | [insertValueByName(...)](#insertvaluebyname) | 在任意组插入任意值 |
| 11 | [deleteNoByName(...)](#deletenobyname) | 从任意组删除指定编号的值 |
| 12 | [deleteValueByName(...)](#deletevaluebyname) | 从任意组删除指定编号的值 |
| 13 | [clearNoValueByName(...)](#clearnovaluebyname) | 从任意组删除指定编号的值 |
| 14 | [addGroupByName(...)](#addgroupbyname) | 在任意组中添加一组值 |
| 15 | [removeGroupByName(...)](#removegroupbyname) | 在任意组中将一组值设为空值 |
| 16 | [deleteGroupByName(...)](#deletegroupbyname) | 在任意组中删除一组值 |
| 17 | [insertGroupByName(...)](#insertgroupbyname) | 在任意组插入一组值 |
| 18 | [replaceValueByName(...)](#replacevaluebyname) | 替换任意组中的任意值 |
| 19 | [sortGroupByName(...)](#sortgroupbyname) | 对任意组的值排序 |
| 20 | [hasValueByName(...)](#hasvaluebyname) | 任意组是否有任意值 |
| 21 | [hasNoByName(...)](#hasnobyname) | 任意组位置上是否有值 |
| 22 | [getValueCountByName(...)](#getvaluecountbyname) | 获取任意组种任意值的数量 |
| 23 | [getGroupNoByValue(...)](#getgroupnobyvalue) | 获取任意组种任意值的编号 |
| 24 | [getSpcialValueByName(...)](#getspcialvaluebyname) | 获取最大最小值 |

#### getAllGroupItem


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libname:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   ret:[**`table`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)所有元素
*   该方法的主要作用：获取变量组中所有值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--获取类型为vartype的变量组中所有变量的值
	local result,ret=Valuegroup:getAllGroupItem(vartype, libname, playerid)
	print(ret)--在日志输出
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### insertInGroupByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   value需:要添加的值
    *   playerid:私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：添加任意值到任意组，加在组的最后一位
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local value=10--值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--添加value到vartype类型的变量组的最后一位
	Valuegroup:insertInGroupByName(vartype, libname, value, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### removeValueIndexByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   indx:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组中的编号索引
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：从任意组移除指定编号的值，变为nil，编号不会移除
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local index=1--序号
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--删除类型为vartype的变量组中序号为index的值，删除后值为nil
	Valuegroup:removeValueIndexByName(vartype, libname, index, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### removeValueByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   value需要删除的值
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：从任意组移除任意值为nil
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local value=10--值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--删除类型为vartype的变量组中值为value的值，删除后值为nil
	Valuegroup:removeValueByName(vartype, libname, value, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### clearGroupByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：清空任意组，编号和内容全部清空
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--清空类型为vartype名为libname的变量组
	Valuegroup:clearGroupByName(vartype, libname, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getGrouplengthByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   number:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)数组长度
*   该方法的主要作用：获取数组长度
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--获取变量组长度
	local result,length=Valuegroup:getGrouplengthByName(vartype, libname, playerid)
	print(length)--在日志输出
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getValueNoByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   indx:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组中的编号索引
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   libvarid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)编号的值
*   该方法的主要作用：获取组中指定编号的值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local index=1--序号
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--获取变量组指定序号的值
	local result,value=Valuegroup:getValueNoByName(vartype, libname, index, playerid)
	print(value)--在日志输出
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### setValueNoByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   indx:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组中的编号索引
    *   value设置的值
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置组中编号索引的值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local index=1--序号
	local value=10--要设置的值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--设置变量组指定序号的值为value
	Valuegroup:setValueNoByName(vartype, libname, index, value, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getRandomValueByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   value获取到的值
*   该方法的主要作用：随机获得数组里面的值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--随机获取变量组中的一个值
	local result,value=Valuegroup:getRandomValueByName(vartype, libname, playerid)
	print(value)--在日志输出
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### insertValueByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   no插入的编号位置
    *   value设置的值
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：在任意组任意编号位置插入任意值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local no=1--要插入的位置
	local val=10--要插入的值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--在变量组中no的位置插入值val
	Valuegroup:insertValueByName(vartype, libname, no, val, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### deleteNoByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   no清空的编号位置
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：从任意组清空指定编号的值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local no=1--要清空的编号位置
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--清空变量组中编号为no的值
	Valuegroup:deleteNoByName(vartype, libname, no, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### deleteValueByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   val清空的值
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：从任意组清空指定值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local val=10--要清空的值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--清空变量组中值为val的值
	Valuegroup:deleteValueByName(vartype, libname, val, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### addGroupByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   libvarid2:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   playerid1:私有组的玩家ID，全局组为0
    *   playerid2:私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：在组1的末尾添加组2的值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local libname="数值组02"--组名
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	local playerid2=0--私有变量组所属玩家id，0代表全局变量组
	--在libname组的末尾添加libname2组的值
	Valuegroup:addGroupByName(vartype, libname, libname2, playerid, playerid2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### removeGroupByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   libvarid2:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   playerid1:私有组的玩家ID，全局组为0
    *   playerid2:私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：比较组1和组2，若组1中有与组2种相同的值则设为nil
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local libname2="数值组02"--组名
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	local playerid2=0--私有变量组所属玩家id，0代表全局变量组
	--将libname组中和libname2组中重复的值设为nil
	Valuegroup:removeGroupByName(vartype, libname, libname2, playerid, playerid2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### deleteGroupByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   libvarid2:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   playerid1:私有组的玩家ID，全局组为0
    *   playerid2:私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：比较组1和组2，若组1中有与组2种相同的值则清除
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local libname2="数值组02"--组名
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	local playerid2=0--私有变量组所属玩家id，0代表全局变量组
	--将libname组中和libname2组中重复的值清除
	Valuegroup:deleteGroupByName(vartype, libname, libname2, playerid, playerid2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### insertGroupByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   no:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)插入的位置
    *   libvarid2:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   playerid1:私有组的玩家ID，全局组为0
    *   playerid2:私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：在组1指定编号位置插入组2的值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local no=1--要插入的位置
	local libname2="数值组02"--组名
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	local playerid2=0--私有变量组所属玩家id，0代表全局变量组
	--把libname2组的值插入到libname组编号为no的位置
	Valuegroup:insertGroupByName(vartype, libname, no, libname2, playerid, playerid2)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### replaceValueByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   oldval旧值
    *   newval新值
    *   playerid私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：替换任意组中的任意值为新的值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local oldval=10--要替换掉的值
	local newval=20--替换为的值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--把组中值为oldval的值替换为newval
	Valuegroup:replaceValueByName(vartype, libname, oldval, newval, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### sortGroupByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   sortType排序类型[排序类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E6%8E%92%E5%BA%8F%E6%9E%9A%E4%B8%BE)升序：0，降序：1
    *   playerid1私有组的玩家ID，全局组为0
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：对任意组的值排序
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local sortType=1--排序方式：0升序 1降序
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--对组中的值排序
	Valuegroup:sortGroupByName(vartype, libname, sortType, playerid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### hasValueByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   val查询的值
    *   playerid私有组的玩家ID
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：任意组是否有任意值，如果有result返回0
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local val=10--要检测的值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--检测组中是否包含val
	local result=Valuegroup:hasValueByName(vartype, libname, val, playerid)
	if result==0 then
		Chat:sendSystemMsg("包含")
	else
		Chat:sendSystemMsg("不包含")
	end
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### hasNoByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   no:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)索引值
    *   playerid私有组的玩家ID
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：任意组位置上是否有值，有则result返回0
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local no=1--要检测的编号
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--检测组中no的位置是否有值
	local result=Valuegroup:hasNoByName(vartype, libname, no, playerid)
	if result==0 then
		Chat:sendSystemMsg("有值")
	else
		Chat:sendSystemMsg("没有值")
	end
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getValueCountByName


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   val查询的值
    *   playerid私有组的玩家ID
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   libvarid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)值数量
*   该方法的主要作用：获取任意组种任意值的数量
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local val=10--要计数的值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--获取组中值为val的数量
	local result,num=Valuegroup:getValueCountByName(vartype, libname, val, playerid)
	print(num)--在日志输出
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getGroupNoByValue


*   参数及类型：
    
    *   vartype: [VARTYPE枚举组类型](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   val查询的值
    *   playerid私有组的玩家ID
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：获取任意组种任意值的编号，如果多个相同值，只返回第一个
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local vartype=17--变量组类型，17是数值组
	local libname="数值组01"--组名
	local val=10--要获取编号的值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--获取组中值为val的编号
	local result,no=Valuegroup:getGroupNoByValue(vartype, libname, val, playerid)
	print(result,no)--在日志输出
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

#### getSpcialValueByName


*   参数及类型：
    
    *   libvarid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)组名
    *   type取最小值参数为0，最大值参数为1
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：获取组内最大最小值
    
*   具体使用案例如下：
    

```
local function ClickBlock(event)
	local libname="数值组01"--组名
	local itype=1--获取类型：0最小值 1最大值
	local playerid=0--私有变量组所属玩家id，0代表全局变量组
	--获取组中最值
	local result,m=Valuegroup:getSpcialValueByName(libname, itype, playerid)
	print(result,m)--在日志输出
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```

### 自定义UI接口：Customui

彼得兔 更新时间: 2024-09-29 14:44:22

*   **具体函数名及描述如下:（除前两个，其余的目前只能在UI编辑器内部的脚本使用）**

| **序号** | **函数名** | **函数描述** |
| --- | --- | --- |
| 1 | [openUIView(...)](#openuiview) | 打开一个UI界面（注意：继承自player对象） |
| 2 | [hideUIView(...)](#hideuiview) | 隐藏一个UI界面（注意：继承自player对象） |
| 1 | [setText(...)](#settext) | 设置文本元件内容（只在UI局部脚本有效） |
| 2 | [setTexture(...)](#settexture) | 设置文本元件图案纹理（只在UI局部脚本有效） |
| 3 | [setSize(...)](#setsize) | 设置元件大小（只在UI局部脚本有效） |
| 4 | [setFontSize(...)](#setfontsize) | 设置文本元件字体大小（只在UI局部脚本有效） |
| 5 | [setColor(...)](#setcolor) | 设置文本元件颜色（只在UI局部脚本有效） |
| 6 | [showElement(...)](#showelement) | 显示元件（只在UI局部脚本有效） |
| 7 | [hideElement(...)](#hideelement) | 隐藏元件（只在UI局部脚本有效） |
| 8 | [rotateElement(...)](#rotateelement) | 旋转元件（只在UI局部脚本有效） |
| 9 | [setState(...)](#setState) | 切换页面状态（只在UI局部脚本有效） |
| 10 | [setAlpha(...)](#setAlpha) | 设置元件透明度（只在UI局部脚本有效） |
| 11 | [setPosition(...)](#setPosition) | 设置元件位置（只在UI局部脚本有效） |
| 12   | [getItemIcon(...)](#getItemIcon)        | 获取道具类型图标iconID（只在UI局部脚本有效） |
| 13   | [getMonsterObjIcon(...)](#getMonsterObjIcon) | 获取生物图标iconID（只在UI局部脚本有效）   |
| 14   | [getMonsterIcon(...)](#getMonsterIcon)     | 获取生物类型图标iconID（只在UI局部脚本有效） |
| 15   | [getStatusIcon(...)](#getStatusIcon)       | 获取状态类型图标iconID（只在UI局部脚本有效） |
| 16   | [getBlockIcon(...)](#getBlockIcon)         | 获取方块类型图标iconID（只在UI局部脚本有效） |
| 17   | [getRoleIcon(...)](#getRoleIcon)           | 获取角色类型图标iconID                  |
| 18   | [getShuctIcon(...)](#getShuctIcon)         | 获取玩家快捷栏道具图标iconID            |
| 19   | [SmoothMoveTo(...)](#SmoothMoveTo)         | 元件平滑移动到指定位置                   |
| 20   | [SmoothMoveBy(...)](#SmoothScaleBy)        | 元件平滑移动相对距离                     |
| 21   | [SmoothScaleTo(...)](#SmoothScaleTo)       | 元件平滑改变到指定宽度和高度             |
| 22   | [SmoothScaleBy(...)](#SmoothScaleBy)       | 元件平滑改变相对宽度和高度               |
| 23   | [SmoothRotateTo(...)](#SmoothRotateTo)     | 元件平滑旋转到指定角度                   |
| 24   | [SmoothRotateBy(...)](#SmoothRotateBy)     | 元件平滑旋转到相对角度                   |
| 25   | [PlayElementAnim(...)](#PlayElementAnim)   | 元件播放动画                             |
| 26   | [StopAnim(...)](#StopAnim)                 | 元件停止动画                             |
| 27   | [SetLoaderModel(...)](#SetLoaderModel)     | 设置装载器的模型                         |
| 28   | [SetLoaderModelScale(...)](#SetLoaderModelScale) | 设置装载器的模型缩放                  |
| 29   | [SetLoaderModelDir(...)](#SetLoaderModelDir) | 设置装载器的模型方向                  |
| 30   | [SetLoaderModelAct(...)](#SetLoaderModelAct) | 设置装载器的模型动画                  |
| 31   | [TurnSliderToPos(...)](#TurnSliderToPos)   | 滑动列表跳转到某位置                     |
| 32   | [SetSliderDir(...)](#SetSliderDir)         | 设置滑动列表的滑动方式                   |
| 33   | [SetSliderBarImg(...)](#SetSliderBarImg)   | 设置滑动条的图案                         |
| 34   | [SetProgressBarValue(...)](#SetProgressBarValue) | 设置玩家界面进度条的值               |
| 35   | [SetProgressBarResId(...)](#SetProgressBarResId) | 设置玩家界面进度条的纹理             |
| 36   | [SmoothIncreaseProgress(...)](#SmoothIncreaseProgress) | 进度条文本平滑计时                    |

*   **如何查看界面、元件和图片id？**

方法一：

![](https://image.mini1.cn/d/20210730/ef6bc8beb74fc6e4765a9985b70c9a15.png)

方法二：

1.利用触发器触发需要获得id的对象：

![](https://image.mini1.cn/d/20210730/8c086e01568d27ac79b2bb5adc337d19.png)

2.在运行日志里可以看到相关id：

![](https://image.mini1.cn/d/20210730/022e92518fae07ef04445af9ff6b5287.png)

**特别注意：界面id、元件id均为字符串，使用时需要添加引号；图片id使用字符串或数字均可。**

#### openUIView


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   uiname:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)自定义界面的UIID
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：打开一个UI界面
    
*   具体使用案例如下：
    

```
--有玩家进入游戏时，执行此函数
local function player_enter(event)
    local uin=event.eventobjid--进入游戏的玩家迷你号
    local uiid="6986982063319417057"--要打开的界面id
    Player:openUIView(uin,uiid)--给玩家打开界面
end
ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.EnterGame]=],player_enter)
```

#### hideUIView


*   参数及类型：
    
    *   objid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   uiname:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)自定义界面的UIID
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：隐藏一个UI界面
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local uin=event.eventobjid--点击方块的玩家迷你号
    local uiid="6986982063319417057"--要隐藏的界面id
    Player:hideUIView(uin,uiid)--给玩家隐藏界面
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=],clickblock)
```

#### setText


*   参数及类型：
    
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   text:string文本内容
    *   animid:number动画ID(缺省参数)
    *   time:number动画时长(缺省参数)
    *   mode:number播放模式(缺省参数)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置文本元件内容
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6986982063319417057"--界面id
    local elementid="6986982063319417057_1"--文本元件id
    local text="你好呀"--要设置的文本内容
    --设置玩家的文本元件的显示内容
    Customui:setText(playerid, uiid, elementid, text)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### setTexture


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   uiid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)自定义界面的UIID
    *   elementid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)元件的UIID
    *   url:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)图片ID
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置图片元件图案纹理
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6986982063319417057"--界面id
    local elementid="6986982063319417057_3"--图片元件id
    local url="10010"--要设置的图案id
    --设置玩家的图片元件的图案
    Customui:setTexture(playerid, uiid, elementid, url)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### setSize


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   uiid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)自定义界面的UIID
    *   elementid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)元件的UIID
    *   width:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)元件宽度
    *   height:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)元件高度
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置元件大小
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6986982063319417057"--界面id
    local elementid="6986982063319417057_3"--元件id
    local width,height=500,200--设置元件的宽高
    --设置玩家的元件的大小
    Customui:setSize(playerid, uiid, elementid, width, height)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### setFontSize


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   uiid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)自定义界面的UIID
    *   elementid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)元件的UIID
    *   size:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)字体大小
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置文本元件字体大小
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6986982063319417057"--界面id
    local elementid="6986982063319417057_1"--文本元件id
    local size=50--要设置的文本元件的字体大小
    --设置玩家的文本元件的字体大小
    Customui:setFontSize(playerid, uiid, elementid, size)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### setColor


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   uiid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)自定义界面的UIID
    *   elementid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)元件的UIID
    *   color:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)16进制颜色值
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置文本元件颜色
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6986982063319417057"--界面id
    local elementid="6986982063319417057_1"--元件id
    local color="0xFF0000"--要设置的元件颜色
    --设置玩家的元件颜色
    Customui:setColor(playerid, uiid, elementid, color)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)
```

#### showElement


*   参数及类型：
    
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   effectid:number动画ID(缺省参数)
    *   time:number动画时长(缺省参数)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：显示元件
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6986982063319417057"--要显示的元件所在的界面id
    local elementid="6986982063319417057_1"--要显示的元件id
    --对玩家显示元件
    Customui:showElement(playerid, uiid, elementid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=],clickblock)
```

#### hideElement


*   参数及类型：
    
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   effectid:number动画ID(缺省参数)
    *   time:number动画时长(缺省参数)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：隐藏元件
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6986982063319417057"--要隐藏的元件所在的界面id
    local elementid="6986982063319417057_1"--要隐藏的元件id
    --对玩家隐藏元件
    Customui:hideElement(playerid, uiid, elementid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=],clickblock)
```

#### rotateElement


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   uiid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)自定义界面的UIID
    *   elementid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)元件的UIID
    *   rotate:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)旋转角度
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：旋转元件
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6986982063319417057"--要旋转的元件所在的界面id
    local elementid="6986982063319417057_1"--要旋转的元件id
    local rotate=90--要旋转的度数（顺时针）
    --对玩家旋转元件
    Customui:rotateElement(playerid, uiid, elementid, rotate)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=],clickblock)
```

#### setState


*   参数及类型：
    
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   pageIndex:string状态值
    *   effectid:number动作枚举LinearTransformation.None或LinearLinearTransformation
    *   time:number动画事件(缺省参数)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：切换页面状态
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6997615793455979871"--界面id
    local statename="6997615793455979871-基础页面1"--页面状态
    --切换玩家的页面状态
    Customui:setState(playerid, uiid, statename)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)

```

#### setAlpha


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   uiid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)自定义界面的UIID
    *   elementid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)元件的UIID
    *   alpha:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)透明度
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置元件透明度
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6997615793455979871"--界面id
	local elementid="6997615793455979871_1"--元件id
	local alpha=99--透明度
    --设置元件透明度
    Customui:setAlpha(playerid, uiid, elementid, alpha)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)

```

#### setPosition


*   参数及类型：
    
    *   playerid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)玩家ID
    *   uiid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)自定义界面的UIID
    *   elementid:[**`string`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)元件的UIID
    *   x, y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)坐标
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置元件位置
    
*   具体使用案例如下：
    

```
--玩家点击方块时，执行此函数
local function clickblock(event)
    local playerid=event.eventobjid--点击方块的玩家迷你号
    local uiid="6997615793455979871"--界面id
	local elementid="6997615793455979871_1"--元件id
	local x,y=100,100--要设置到的坐标
    --设置元件位置
    Customui:setPosition(playerid, uiid, elementid, x, y)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], clickblock)

```

**getItemIcon

*   参数及类型：
    *   itemid:number道具类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   iconid:number道具iconID
*   该方法的主要作用：获取道具类型图标iconID
*   具体使用案例如下：

```
local result,iconid = Customui:getItemIcon(itemid)
```

#### getMonsterObjIcon

*   参数及类型：
    *   objid:number生物ID
*   返回值及类型：
    *   ErrorCode.OK
    *   iconid:number生物iconID
*   该方法的主要作用：获取生物图标iconID
*   具体使用案例如下：

```
local result,iconid = Customui:getMonsterObjIcon(objid)
```

**getMonsterIcon

*   参数及类型：
    *   actorid:number生物类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   iconid:number生物iconID
*   该方法的主要作用：获取生物类型图标iconID
*   具体使用案例如下：

```
local result,iconid = Customui:getMonsterIcon(actorid)
```

#### getStatusIcon

*   参数及类型：
    *   buffid:number状态类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   iconid:number状态iconID
*   该方法的主要作用：获取状态类型图标iconID
*   具体使用案例如下：

```
local result,iconid = Customui:getStatusIcon(buffid)
```

**getBlockIcon

*   参数及类型：
    *   blockid:number方块类型ID
*   返回值及类型：
    *   ErrorCode.OK
    *   iconid:number方块iconID
*   该方法的主要作用：获取方块类型图标iconID
*   具体使用案例如下：

```
local result,iconid = Customui:getBlockIcon(blockid)
```

**getRoleIcon

*   参数及类型：
    *   playerid:number玩家ID
*   返回值及类型：
    *   ErrorCode.OK
    *   iconid:number角色iconID
*   该方法的主要作用：获取角色类型图标iconID
*   具体使用案例如下：

```
local result,iconid = Customui:getRoleIcon(playerid)
```

**getShuctIcon

*   参数及类型：
    *   playerid:number玩家ID
    *   ix:number快捷栏索引（1~8）
*   返回值及类型：
    *   ErrorCode.OK
    *   iconid:number道具iconID
*   该方法的主要作用：获取玩家快捷栏道具图标iconID
*   具体使用案例如下：

```
local result,iconid = Customui:getShuctIcon(playerid，ix)
```

#### SmoothMoveTo

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   time:number执行时间(需大于0)
    *   x:number横坐标值
    *   y:number竖坐标值
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 元件平滑移动到指定位置
*   具体使用案例如下：

```
local code  = Customui:SmoothMoveTo(playerid, uiid, elementid, time, x, y)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SmoothMoveBy

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   time:number执行时间(需大于0)
    *   x:number横向距离
    *   y:number竖向距离
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 元件平滑移动相对距离
*   具体使用案例如下：

```
local code  = Customui:SmoothMoveBy(playerid, uiid, elementid, time, x, y)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SmoothScaleTo

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   time:number执行时间(需大于0)
    *   w:number宽度
    *   h:number高度
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 元件平滑改变到指定宽度和高度
*   具体使用案例如下：

```
local code  = Customui:SmoothScaleTo(playerid, uiid, elementid, time, w, h)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SmoothScaleBy

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   time:number执行时间(需大于0)
    *   w:number宽度
    *   h:number高度
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 元件平滑改变相对宽度和高度
*   具体使用案例如下：

```
local code  = Customui:SmoothScaleBy(playerid, uiid, elementid, time, w, h)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

**SmoothRotateTo

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   time:number执行时间(需大于0)
    *   angle:number角度值
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 元件平滑旋转到指定角度
*   具体使用案例如下：

```
local code  = Customui:SmoothRotateTo(playerid, uiid, elementid, time, angle)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SmoothRotateBy

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   time:number执行时间(需大于0)
    *   angle:number角度值
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 元件平滑旋转到相对角度
*   具体使用案例如下：

```
local code  = Customui:SmoothRotateBy(playerid, uiid, elementid, time, angle)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### PlayElementAnim

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   animid:number动画ID
    *   time:number单次时长(需大于0)
    *   mode:number播放模式循环1单次2(VIEDOPLAYMODE)VIEDOPLAYMODE
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 元件播放动画
*   具体使用案例如下：

```
local code  = Customui:PlayElementAnim(playerid, uiid, elementid, animid, time, mode)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### StopAnim

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 元件停止动画
*   具体使用案例如下：

```
local code  = Customui:StopAnim(playerid, uiid, elementid)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetLoaderModel

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   modleName:string模型名称
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用：设置装载器的模型
*   具体使用案例如下：

```
local code  = Customui:SetLoaderModel(playerid, uiid, elementid, modleName)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetLoaderModelScale

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   modlescale:number缩放大小
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用：设置装载器的模型缩放
*   具体使用案例如下：

```
local code  = Customui:SetLoaderModelScale(playerid, uiid, elementid, modlescale)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetLoaderModelDir

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   yaw:number水平角度(角度制)
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用：设置装载器的模型方向
*   具体使用案例如下：

```
local code  = Customui:SetLoaderModelDir(playerid, uiid, elementid, yaw)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetLoaderModelAct

*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   animid:number动画ID
    *   playmode:number播放模式([ANIMMODE](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376))
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用：设置装载器的模型动画
*   具体使用案例如下：

```
local code  = Customui:SetLoaderModelAct(playerid, uiid, elementid, animid, playmode)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### TurnSliderToPos

*   参数及类型：
    *   playerid : number 玩家ID
    *   uiid : string 界面ID
    *   elementid : string 元件ID
    *   x : number X坐标值
    *   y : number Y坐标值
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用：滑动列表跳转到某位置
*   具体使用案例如下：

```
local code  = Customui:TurnSliderToPos(playerid, uiid, elementid, x, y)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetSliderDir

*   参数及类型：
    *   playerid : number 玩家ID
    *   uiid : string 界面ID
    *   elementid : string 元件ID
    *   dir : number 滑动方式（0仅左右，1仅上下，2自由滑动）
*   返回值及类型：
    *   code : number成功(ErrorCode.OK) [ErrorCode](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)
*   该方法的主要作用：设置滑动列表的滑动方式
*   具体使用案例如下：

```
local code  = Customui:SetSliderDir(playerid, uiid, elementid, dir)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetSliderBarImg

*   参数及类型：
    *   playerid : number 玩家ID
    *   uiid : string 界面ID
    *   elementid : string 元件ID
    *   url : string 图片库链接
*   返回值及类型：
    *   code : number成功(ErrorCode.OK) [ErrorCode](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)
*   该方法的主要作用：设置滑动条的图案
*   具体使用案例如下：

```
local code  = Customui:SetSliderBarImg(playerid, uiid, elementid, url)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### SetProgressBarValue


*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   itype:number类型枚举（1最小值，2最大值，3当前值）
    *   value:number值类型
*   返回值及类型：
    *   ret:bool是否成功
*   该方法的主要作用： 设置玩家界面进度条的值
*   具体使用案例如下：

``` lua
    local ret  = Customui:SetProgressBarValue(playerid, uiid, elementid, itype, value)
    if ret == ErrorCode.OK then
        print('执行成功'  )
    else
        print('执行失败')
    end
```
    

#### SetProgressBarResId


*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   itype:number类型枚举（1背景，2进度条）
    *   url:string图片ID
*   返回值及类型：
    *   ret:bool是否成功
*   该方法的主要作用： 设置玩家界面进度条的纹理
*   具体使用案例如下：
``` lua
    local ret  = Customui:SetProgressBarResId(playerid, uiid, elementid, itype, url)
    if ret == ErrorCode.OK then
        print('执行成功'  )
    else
        print('执行失败')
    end
    ```
    

#### SmoothIncreaseProgress


*   参数及类型：
    *   playerid:number玩家ID
    *   uiid:string界面ID
    *   elementid:string元件ID
    *   time:number时长
    *   ptype:number类型枚举（1增加，2减小，3变化至）
    *   value:number变化的值
*   返回值及类型：
    *   ret:bool是否成功
*   该方法的主要作用： 进度条文本平滑计时
*   具体使用案例如下：
``` lua
    local ret  = Customui:SmoothIncreaseProgress(playerid, uiid, elementid, time, ptype, value)
    if ret == ErrorCode.OK then
        print('执行成功'  )
    else
        print('执行失败')
    end
    ```

### 容器接口：WorldContainer

彼得兔 更新时间: 2023-04-26 10:21:02

**具体函数名及描述如下:**

| 序号 | 函数名 | 函数描述 |
| --- | --- | --- |
| 1 | [addFurnace(...)](#addfurnace) | 新增熔炉 |
| 2 | [removeFurnace(...)](#removefurnace) | 移除熔炉 |
| 3 | [checkFurnace(...)](#checkfurnace) | 检测是否为熔炉 |
| 4 | [getFurnaceHeatPercent(...)](#getfurnaceheatpercent) | 获取熔炉热度百分比 |
| 5 | [getFurnaceMeltPercent(...)](#getfurnacemeltpercent) | 获取熔炉融化百分比 |
| 6 | [addStorageBox(...)](#addstoragebox) | 新增储物箱 |
| 7 | [removeStorageBox(...)](#removestoragebox) | 移除储物箱 |
| 8 | [checkStorage(...)](#checkstorage) | 检测是否为储物箱 |
| 9 | [clearStorageBox(...)](#clearstoragebox) | 清空储物箱 |
| 10 | [checkStorageEmptyGrid(...)](#checkstorageemptygrid) | 检测储物箱空余格子，传入道具ID则同时检测已存该道具的格子 |
| 11 | [setStorageItem(...)](#setstorageitem) | 设置储物箱道具 |
| 12 | [getStorageItem(...)](#getstorageitem) | 获取储物箱道具ID |
| 13 | [addStorageItem(...)](#addstorageitem) | 给储物箱添加道具 |
| 14 | [removeStorageItemByID(...)](#removestorageitembyid) | 移除储物箱内指定类型的道具 |
| 15 | [removeStorageItemByIndex(...)](#removestorageitembyindex) | 移除储物箱内指定格子的道具 |
| 16 | [addItemToContainer(...)](#additemtocontainer) | 将一定数量道具添加到储物箱中 |
| 17 | [removeContainerItemByID(...)](#removecontaineritembyid) | 移除储物箱内一定数量道具 |
| 18 | [clearContainer(...)](#clearcontainer) | 清空指定位置的储物箱 |

#### addFurnace


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：新增熔炉
    
*   具体使用案例如下：
    

```
--在(0,0)高度7生成熔炉
--参数为要生成熔炉的位置的坐标
WorldContainer:addFurnace(0,7,0)
--在聊天框显示
Chat:sendSystemMsg("在(0,0)高度7的位置生成了一个熔炉！")

```

#### removeFurnace


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除熔炉
    
*   具体使用案例如下：
    

```
--移除(0,0)高度7的熔炉(或其他方块)
--参数为要移除的熔炉(或其他方块)的坐标
WorldContainer:removeFurnace(0,7,0)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度7的位置的熔炉(或其他方块)被移除！")

```

#### checkFurnace


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：检测是否为熔炉
    
*   具体使用案例如下：
    

```
--判断(0,0)高度7的位置是不是熔炉，参数为要判断的位置的坐标
local result=WorldContainer:checkFurnace(0,7,0)
if result==0 then--如果是熔炉
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置是熔炉")
else--如果不是熔炉
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置不是熔炉")
end

```

#### getFurnaceHeatPercent


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)百分比
*   该方法的主要作用：获取熔炉热度百分比
    
*   具体使用案例如下：
    

```
--获取(0,0)高度7的位置的熔炉燃料热量剩余百分比，参数为熔炉坐标
local result,val=WorldContainer:getFurnaceHeatPercent(0,7,0)
if result==0 then--如果获取成功
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置的熔炉燃料热量剩余百分比为："..val)
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("获取失败，可能(0,0)高度7的位置不是熔炉")
end

```

#### getFurnaceMeltPercent


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   val:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)百分比
*   该方法的主要作用：获取熔炉融化百分比
    
*   具体使用案例如下：
    

```
--获取(0,0)高度7的位置的熔炉当前已烧制的百分比，参数为熔炉坐标
local result,val=WorldContainer:getFurnaceMeltPercent(0,7,0)
if result==0 then--如果获取成功
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置的熔炉当前已烧制的百分比为："..val)
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("获取失败，可能(0,0)高度7的位置不是熔炉")
end

```

#### addStorageBox


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：新增储物箱
    
*   具体使用案例如下：
    

```
--在(0,0)高度7的位置生成一个储物箱，参数为要生成储物箱的坐标
WorldContainer:addStorageBox(0,7,0)
--在聊天框显示
Chat:sendSystemMsg("在(0,0)高度7的位置生成了一个储物箱！")

```

#### removeStorageBox


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除储物箱
    
*   具体使用案例如下：
    

```
--移除(0,0)高度7的箱子(或其他方块)
--参数为要移除的箱子(或其他方块)的坐标
WorldContainer:removeStorageBox(0,7,0)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度7的位置的箱子(或其他方块)被移除！")

```

#### checkStorage


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：检测是否为
    
*   储物箱
    
*   具体使用案例如下：
    

```
--判断(0,0)高度7的位置是不是箱子，参数为要判断的位置的坐标
local result=WorldContainer:checkStorage(0,7,0)
if result==0 then--如果是箱子
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置是箱子")
else--如果不是箱子
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置不是箱子")
end

```

#### clearStorageBox


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：清空储物箱
    
*   具体使用案例如下：
    

```
--清空指定坐标下箱子的物品，参数为要清空的箱子的坐标
WorldContainer:clearStorageBox(0,7,0)
--在聊天框显示
Chat:sendSystemMsg("清空了(0,0)高度7的箱子的物品")

```

#### checkStorageEmptyGrid


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：检测储物箱空余格子，传入道具ID则同时检测已存该道具的格子
    
*   具体使用案例如下：
    

```
--判断(0,0)高度7的位置的储物箱有没有空余格子或指定物品
--前三个参数为要判断的箱子的坐标
--最后一个参数为要判断的物品id，0代表空余格子
local result=checkStorageEmptyGrid(0,7,0,0)
if result==0 then--如果有
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置的储物箱还有空余格子")
else--如果没有
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置的储物箱没有空余格子")
end
--判断有没有基岩，id为1
result=checkStorageEmptyGrid(0,7,0,1)
if result==0 then--如果有
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置的储物箱里有地心基石")
else--如果没有
	--在聊天框显示
	Chat:sendSystemMsg("(0,0)高度7的位置的储物箱没有地心基石")
end

```

#### setStorageItem


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)仓库格子索引
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：设置储物箱道具
    
*   具体使用案例如下：
    

```
--设置指定位置的箱子的指定格子的物品
--前三个参数为要设置的箱子的坐标
--第四个参数0为指定格子的序号，0为第一个格子
--第五个参数为要放置的物品id，101为土块
--最后一个参数为要放置的物品数量
WorldContainer:setStorageItem(0,7,0,0,101,30)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度7的位置的箱子第一格，被放置了30个土块")

```

#### getStorageItem


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)储物箱位置
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)仓库格子索引
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具ID
    *   itemNum:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具数量
*   该方法的主要作用：获取储物箱道具ID
    
*   具体使用案例如下：
    

```
--获取指定坐标下的箱子指定格子的物品id和数量
--前三个参数为箱子坐标
--最后一个参数为格子序号，0为第一格
local result,itemid,itemNum=WorldContainer:getStorageItem(0,7,0,0)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度7的位置的箱子的第一个格子，有"..itemNum.."个id为"..itemid.."的物品")

```

#### addStorageItem


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)储物箱位置
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具数量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   relNum:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)成功添加数量
*   该方法的主要作用：给储物箱添加道具
    
*   具体使用案例如下：
    

```
--在指定坐标的箱子里添加指定物品
--前三个参数为箱子坐标
--第四个参数为要添加的物品的id，101为土块
--最后一个参数为要添加的数量
local result,relNum=WorldContainer:addStorageItem(0,7,0,101,99)
--在聊天框显示
Chat:sendSystemMsg("尝试在(0,0)高度7位置的箱子里添加99个土块，实际添加了"..relNum.."个")

```

#### removeStorageItemByID


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)储物箱位置
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具类型ID
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具数量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除储物箱内指定类型的道具
    
*   具体使用案例如下：
    

```
--移除指定坐标下箱子的指定物品
--前三个参数为箱子坐标
--第四个参数为要移除的物品id，101是土块
--最后一个参数为要移除的数量
WorldContainer:removeStorageItemByID(0,7,0,101,10)
--在聊天框显示
Chat:sendSystemMsg("移除了(0,0)高度7位置的箱子里的10个土块")

```

#### removeStorageItemByIndex


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)储物箱位置
    *   offset:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)储物箱格子索引，从0开始
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具数量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除储物箱内指定格子的道具
    
*   具体使用案例如下：
    

```
--移除指定坐标下箱子的指定格子的物品
--前三个参数为箱子坐标
--第四个参数为要移除的格子序号，0是第一格
--最后一个参数为要移除的数量
WorldContainer:removeStorageItemByIndex(0,7,0,0,5)
--在聊天框显示
Chat:sendSystemMsg("把(0,0)高度7的位置的箱子里第一格的物品移除了5个")

```

#### addItemToContainer


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)储物箱位置
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具数量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
    *   relNum:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)成功添加数量
*   该方法的主要作用：将一定数量道具添加到储物箱中
    
*   具体使用案例如下：
    

```
--在指定坐标的箱子里添加指定物品
--前三个参数为箱子坐标
--第四个参数为要添加的物品的id，101为土块
--最后一个参数为要添加的数量
local result,relNum=WorldContainer:addItemToContainer(0,7,0,101,99)
--在聊天框显示
Chat:sendSystemMsg("尝试在(0,0)高度7位置的箱子里添加99个土块，实际添加了"..relNum.."个")

```

#### removeContainerItemByID


*   参数及类型：
    
    *   x,y,z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)储物箱位置
    *   itemid:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具类型ID
    *   num:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)道具数量
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：移除储物箱内一定数量道具
    
*   具体使用案例如下：
    

```
--移除指定坐标下箱子的指定物品
--前三个参数为箱子坐标
--第四个参数为要移除的物品id，101是土块
--最后一个参数为要移除的数量
WorldContainer:removeContainerItemByID(0,7,0,101,10)
--在聊天框显示
Chat:sendSystemMsg("移除了(0,0)高度7位置的箱子里的10个土块")

```

#### clearContainer


*   参数及类型：
    
    *   x:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   y:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    *   z:[**`number`**](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#lua%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
*   返回值及类型：
    
    *   [ErrorCode](https://dev-wiki.mini1.cn/wiki/1376.html?id=1376#%E9%94%99%E8%AF%AF%E7%A0%81%E4%BF%A1%E6%81%AF).OK
*   该方法的主要作用：清空指定位置的储物箱
    
*   具体使用案例如下：
    

```
--清空指定坐标下箱子的物品，参数为要清空的箱子的坐标
WorldContainer:clearContainer(0,7,0)
--在聊天框显示
Chat:sendSystemMsg("清空了(0,0)高度7的箱子的物品")

```

### 显示板管理接口：DisPlayBoard

迷你世界 更新时间: 2023-04-26 10:21:14

具体函数名及描述如下:

<table style="border-collapse: collapse; width: 47.4183%; height: 88px;" border="1"><tbody><tr style="height: 22px;"><td style="width: 23.3827%; text-align: center; height: 22px;"><strong>序号<span style="white-space: pre;"></span></strong></td><td style="width: 25.3873%; text-align: center; height: 22px;"><strong>函数名</strong></td><td style="width: 46.768%; text-align: center; height: 22px;"><strong>函数描述</strong></td></tr><tr style="height: 22px;"><td style="width: 23.3827%; text-align: center; height: 22px;">1</td><td style="width: 25.3873%; text-align: center; height: 22px;"><a href="#miniapi/?id=showboard">showBoard(...)<span style="white-space: pre;"></span></a></td><td style="width: 46.768%; text-align: center; height: 22px;">对玩家显示显示板</td></tr><tr style="height: 22px;"><td style="width: 23.3827%; text-align: center; height: 22px;">2</td><td style="width: 25.3873%; text-align: center; height: 22px;"><a href="#miniapi/?id=hideboard">hideBoard(...)</a></td><td style="width: 46.768%; text-align: center; height: 22px;">对玩家隐藏显示板</td></tr><tr style="height: 22px;"><td style="width: 23.3827%; text-align: center; height: 22px;">3</td><td style="width: 25.3873%; text-align: center; height: 22px;"><a href="#miniapi/?id=setboardpicture">setBoardPicture</a></td><td style="width: 46.768%; text-align: center; height: 22px;">对玩家设置显示板的图片</td></tr></tbody></table>

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2056)showBoard

*   参数及类型：
    *   playerid:number玩家ID
    *   boardid:number显示板ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：对玩家显示显示板
*   具体使用案例如下：

```
local result = DisPlayBoard:showBoard(playerid, boardid)
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2056)hideBoard

*   参数及类型：
    *   playerid:number玩家ID
    *   boardid:number显示板ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：对玩家隐藏显示板
*   具体使用案例如下：

```
local result = DisPlayBoard:hideBoard(playerid, boardid)
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2056)setBoardPicture

*   参数及类型：
    *   playerid:number玩家ID
    *   boardid:number显示板ID
    *   pictureid:string图片ID
*   返回值及类型：
    *   ErrorCode.OK
*   该方法的主要作用：对玩家设置显示板的图片
*   具体使用案例如下：

```
local result = DisPlayBoard:setBoardPicture(playerid, boardid, pictureid)

```

### 云服数据存储接口：CloudSever

迷你世界 更新时间: 2024-04-28 19:09:10

**具体函数名及描述如下：**

<table style="border-collapse: collapse; width: 500px; height: 560px;" border="1px"><tbody><tr style="height: 33px;"><td style="text-align: center; border: 1px solid #000000; height: 33px;"><strong>序号<span style="white-space: pre;"></span></strong></td><td style="text-align: center; border: 1px solid #000000; height: 33px;"><strong>函数名<span style="white-space: pre;"></span></strong></td><td style="text-align: center; border: 1px solid #000000; height: 33px;"><strong>函数描述</strong></td></tr><tr style="height: 44px;"><td style="text-align: center; border: 1px solid #000000; height: 44px;">1</td><td style="text-align: center; border: 1px solid #000000; height: 44px;"><a href="#setOrderDataBykey">setOrderDataBykey(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 44px;"><span style="color: #24292e; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 16px; background-color: #ffffff;">设置排行榜中指定键的数值</span></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">2</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><a href="#removeOrderDataByKey">removeOrderDataByKey(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">删除排行榜中指定键的数值</td></tr><tr style="height: 44px;"><td style="text-align: center; border: 1px solid #000000; height: 44px;"><span style="font-size: 16px;">3</span></td><td style="text-align: center; border: 1px solid #000000; height: 44px;"><a href="#getOrderDataByKeyEx">getOrderDataByKeyEx(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 44px;">获取排行榜中指定键的数值</td></tr><tr style="height: 44px;"><td style="text-align: center; border: 1px solid #000000; height: 44px;"><span style="font-size: 16px;">4</span></td><td style="text-align: center; border: 1px solid #000000; height: 44px;"><a href="#getOrderDataIndexValueEx">getOrderDataIndexValueEx(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 44px;">获取排行榜中指定排名的数值</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">5</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><a href="#ClearOrderData">ClearOrderData(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">清理排行榜</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 21px;"><span style="font-size: 16px;">6</span></td><td style="text-align: center; border: 1px solid #000000; height: 21px;"><a href="#automaticByKey">automaticByKey(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 21px;">变量自运算</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">7</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><a href="#getOrderDataIndexAreaEx">getOrderDataIndexAreaEx(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><p>获取排行榜中多条数据</p><p>(一次最多100条数据)</p></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">8</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><a href="#getOrderDataValueAreaEx">getOrderDataValueAreaEx(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><p>获取排行榜中指定值区域的前多少名数据</p><p>(一次最多100条数据)</p></td></tr><tr style="height: 44px;"><td style="text-align: center; border: 1px solid #000000; height: 44px;"><span style="font-size: 16px;">9</span></td><td style="text-align: center; border: 1px solid #000000; height: 44px;"><a href="#setDataListBykey">setDataListBykey(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 44px;">设置表中指定键的值</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">10</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><a href="#removeDataListByKey">removeDataListByKey(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">删除表中指定键的值</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">11</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><a href="#getDataListByKeyEx">getDataListByKeyEx(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">获取表中指定键的值</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">12</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><a href="#ClearDataList">ClearDataList(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">清空表数据</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">13</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><a href="#getlistCache">getlistCache(...)</a></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">获取表或排行榜当前缓存数据</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">14</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;"><a href="#UpdateDataListByKey">UpdateDataListByKey(...)</a><br></span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">安全更新数据</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">15</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;"><a href="#SendSeverMsg">SendSeverMsg(...)</a><br></span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">发送服务通知消息</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">16</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;"><a href="#TransmitToMap">TransmitToMap(...)</a><br></span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">传送玩家到指定地图</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">17</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;"><a href="#TransmitToRoom">TransmitToRoom(...)</a><br></span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">传送玩家到指定房间</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">18</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;"><a href="#TransmitOtherRoom">TransmitOtherRoom(...)</a><br></span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">传送玩家其他房间</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">19</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;"><a href="#GetRoomID">GetRoomID(...)</a><br></span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">获取当前云服房间ID</td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;">20</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;"><span style="font-size: 16px;"><a href="#TransmitOtherRoom">TransmitToCategoryRoom(...)</a><br></span></td><td style="text-align: center; border: 1px solid #000000; height: 22px;">传送玩家到指定分类房间</td></tr><tr><td style="text-align: center; border: 1px solid #000000;"><span style="font-size: 16px;">21</span></td><td style="text-align: center; border: 1px solid #000000;"><span style="font-size: 16px;"><a href="#SetForbidJoin">SetForbidJoin(...)</a><br></span></td><td style="text-align: center; border: 1px solid #000000;">当前房间停止进入玩家（仅云服生效）</td></tr><tr><td style="text-align: center; border: 1px solid #000000;"><span style="font-size: 16px;">22</span></td><td style="text-align: center; border: 1px solid #000000;"><span style="font-size: 16px;"><a href="#CloseCurRoom">CloseCurRoom(...)</a><br></span></td><td style="text-align: center; border: 1px solid #000000;">关闭当前房间（仅云服生效）</td></tr><tr><td style="text-align: center; border: 1px solid #000000;"><span style="font-size: 16px;">23</span></td><td style="text-align: center; border: 1px solid #000000;"><a href="#GetRoomCategory"><span style="font-size: 16px;">GetRoomCategory(...)</span></a></td><td style="text-align: center; border: 1px solid #000000;">获取当前房间的分类信息（仅云服生效）</td></tr></tbody></table>

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)setOrderDataBykey

*   参数及类型：
    *   libvarname:string排行榜变量设计名
    *   key:string获取的键值
    *   value:number设置的数值
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置排行榜中指定键的数值
*   具体使用案例如下：

```
local libvarname = 'rank_1'
local ret = CloudSever:setOrderDataBykey(libvarname,"key1",1)
if ret == ErrorCode.OK then
    print('设置排行榜值成功 k = key1 ,v = 1')
else
    print('设置排行榜值失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)removeOrderDataByKey**

*   参数及类型：
    *   libvarname:string排行榜变量设计名
    *   key:string获取的键值
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 删除排行榜中指定键的数值
*   具体使用案例如下：

```
local libvarname = 'rank_1'
local ret = CloudSever:removeOrderDataByKey(libvarname,"key1")
if ret == ErrorCode.OK then
    print('删除排行榜数据成功')
else
    print("删除排行榜数据失败")
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)getOrderDataByKeyEx**

*   参数及类型：
    *   libvarname:string排行榜变量设计名
    *   key:string获取的键值
    *   callback:function更新回调(function(code/错误码 ...)0成功1失败2数据不存在)
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 获取排行榜中指定键的数值
*   具体使用案例如下：

```
local callback = function (ret,k,v,ix) -- 返回结果不一定有排名
    if ret == ErrorCode.OK then
        if ix then
            print('返回数据成功 键= '..k..' 值='..v..' 排名='..ix )
        else
            print('返回数据成功 键= '..k..' 值='..v)
        end
    else
        if ret == 2 then --=不存在数据
            print('数据不存在')
        else
            print('获取失败')
        end
    end
end
local libvarname = 'rank_1'
local ret = CloudSever:getOrderDataByKeyEx(libvarname,"key1",callback)
if ret == ErrorCode.OK then
    print('请求排行榜数据成功')
else
    print("请求排行榜数据失败")
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)getOrderDataIndexValueEx**

*   参数及类型：
    *   libvarname:string排行榜变量设计名
    *   index:number获取数据的名次
    *   callback:function更新回调(function(code/错误码 ...)0成功1失败2数据不存在)
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 获取排行榜中指定排名的数值
*   具体使用案例如下：

```
local callback = function (ret,k,v,ix)
    if ret == ErrorCode.OK then
        print('返回数据成功 键= '..k..' 值='..v..' 排名='..ix )
    else
        if ret == 2 then --=不存在数据
            print('数据不存在')
        else
            print('获取失败')
        end
    end
end
local libvarname = 'rank_1'---4
local ret = CloudSever:getOrderDataIndexValueEx(libvarname,1,callback) -- 请求第1名的数据
if ret == ErrorCode.OK then
    print('请求排行榜数据成功')
else
    print("请求排行榜数据失败")
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)ClearOrderData**

*   参数及类型：
    *   libvarname:string排行榜变量设计名
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 清理排行榜
*   具体使用案例如下：

```
local libvarname = 'rank_1'
local ret = CloudSever:ClearOrderData(libvarname) -- 清空排行榜
if ret == ErrorCode.OK then
    print('清空排行榜值成功')
else
    print('清空排行榜值失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)automaticByKey**

*   参数及类型：
    *   libvarname:string排行榜变量设计名
    *   key:string获取的键值
    *   value:number每次加的值
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 变量自运算
*   具体使用案例如下：

```
local libvarname = 'rank_1'
local value = 10
local ret = CloudSever:automaticByKey(libvarname,"key1",value) -- 设置自运算值加10
if ret == ErrorCode.OK then
    print('设置排行榜值成功 k = key1 ,v = 1')
else
    print('设置排行榜值失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)getOrderDataIndexAreaEx

*   参数及类型：
    *   libvarname:string排行榜变量设计名
    *   icount:number获取数据的条数
    *   callback:function更新回调(function(code/错误码 ...)0成功1失败2数据不存在)
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   callback返回数据格式示例：

*   *   本地：

``` lua
        {
            {
                -- 玩家1迷你号，string类型
                k = [[1000]],
                -- 玩家1排行榜数值，number类型
                v = 1
            },
            {
                -- 玩家2迷你号，string类型
                k = [[1001]],
                -- 玩家2排行榜数值，number类型
                v = 3
            }
            -- 更多玩家数据依次类推
        }
        -- 本地返回的数据格式示例
```

*   *   云服：

``` lua
        {
            {
                -- 玩家1迷你号，string类型
                k = [[1000]],
                -- 玩家1排行榜数值，number类型
                v = 1,
                -- 玩家1昵称，string类型
                nick = [[迷你队长]]
            },
            {
                -- 玩家2迷你号，string类型
                k = [[1001]],
                -- 玩家2排行榜数值，数值类型
                v = 3,
                -- 玩家2昵称，string类型
                nick = [[迷你策划 Max]]
            }
            -- 更多玩家数据依次类推
        }
        -- 云服返回的数据格式示例
```
        

*   该方法的主要作用： 获取排行榜中多条数据(一次最多100条数据)
*   具体使用案例如下：

``` lua
--百人排行榜展示例子
local libvarname = 'rank_1'--排行榜名称
local reqcount = 100 --榜单上线
local refreshdt = 10 --首次请求间隔
local updatetime = 0 --当前更新时间
local RankInfos = {}
local function func_runtime(param)
    local curtime = os.time()
    if curtime - updatetime > refreshdt then
        updatetime = curtime
        local tmfos = {}
        local callback = function (ret,value) -- 返回结果不一定有排名
            if ret == ErrorCode.OK and value then
                refreshdt = 1200 --刷新时间修改
                for ix,  v in pairs(value) do
                    table.insert(tmfos,v)
                end
                if #tmfos == reqcount or #tmfos > #RankInfos then 
                    RankInfos = tmfos
                end
            end
        end
        local ret = CloudSever:getOrderDataIndexAreaEx(libvarname,reqcount,callback)
        if ret == ErrorCode.OK then
            print('请求排行榜数据成功')
        else
            print("请求排行榜数据失败")
        end
    end
end
ScriptSupportEvent:registerEvent('Game.RunTime', func_runtime)
local RankUI  = "7275576434651487802" -- 填入UIID
local RefishTxt = 
{
    -- {"名次",'昵称','分数'}的元件ID,
    {"7275576434651487802_1",'7275576434651487802_2','7275576434651487802_3'},
}
local PageItemCount = #RefishTxt
local AllUserinfo = {}
local function RankRefish(uin)
    if not AllUserinfo[uin] then AllUserinfo[uin] = 0 end
    print(AllUserinfo[uin])
    local istr = AllUserinfo[uin]*PageItemCount + 1
    if istr > #RankInfos  then return end
    for i = 1, PageItemCount, 1 do
        if RefishTxt[i] then
            if istr <= #RankInfos  then
                Customui:setText(uin,RankUI,RefishTxt[i][1],tostring(istr))
                Customui:setText(uin,RankUI,RefishTxt[i][2],tostring(RankInfos[istr].nick or RankInfos[istr].k))
                Customui:setText(uin,RankUI,RefishTxt[i][3],tostring(RankInfos[istr].v))
                istr = istr + 1
            else
                Customui:setText(uin,RankUI,RefishTxt[i][1],"")
                Customui:setText(uin,RankUI,RefishTxt[i][2],"")
                Customui:setText(uin,RankUI,RefishTxt[i][3],"")
            end
        end
    end
end
local function func_openui(e)
    if #RankInfos > 0 and e.CustomUI == RankUI then
        local uin = e.eventobjid
        AllUserinfo[uin] = 0
        RankRefish(uin)
    end
end
ScriptSupportEvent:registerEvent('UI.Show', func_openui)
--[[
--翻页功能
local pageupele = "7275576434651487802_7" -- 填入向上翻页按钮节点
local pagedownele = "7275576434651487802_8"-- 填入向下翻页按钮节点
local function func_page(e)
    local uin = e.eventobjid
    if  uin and  e.btnelenemt then
        if e.btnelenemt ==  pageupele then
            if not AllUserinfo[uin] then AllUserinfo[uin] = 0 end
            AllUserinfo[uin] =  AllUserinfo[uin] + 1
            if AllUserinfo[uin] > math.ceil(#RankInfos / PageItemCount )  then AllUserinfo[uin] = math.ceil(#RankInfos / PageItemCount) return end
            RankRefish(uin)
        elseif e.btnelenemt ==  pagedownele then
            if not AllUserinfo[uin] then AllUserinfo[uin] = 0 end
            AllUserinfo[uin] =  AllUserinfo[uin] -  1
            if AllUserinfo[uin] < 0  then AllUserinfo[uin] = 0 return end
            RankRefish(uin)
        end
    end
end
ScriptSupportEvent:registerEvent('UI.Button.Click', func_page)
]]--

```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)getOrderDataValueAreaEx

*   参数及类型：
    *   libvarname:string排行榜变量设计名
    *   icount:number获取数据的条数
    *   minvalue:number最小值
    *   maxvalue:number最大值
    *   callback:function更新回调(function(code/错误码...)0成功1失败)
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 获取排行榜中指定值区域的前多少名数据(一次最多100条数据)
*   具体使用案例如下：

```
local callback = function (ret,value)
    if ret == ErrorCode.OK and value then
        for ix,  v in pairs(value) do
            local txt = '第'.. ix..'名'..'键 = ' ..v.k..'值 = '..v.v
            print(txt)
        end
    end
end
local libvarname = 'rank_1'
local ret  = CloudSever:getOrderDataValueAreaEx(libvarname,-2,50,200,callback) -- 请求值是50 - 200的从大到小排序的前2名的数据
if ret == ErrorCode.OK then
    print('请求排行榜数据成功')
else
    print("请求排行榜数据失败")
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)setDataListBykey

*   参数及类型：
    *   libvarname:string表变量设计名
    *   key:string获取的键值
    *   value:Any任意值(number,string,table)
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 设置表中指定键的值
*   具体使用案例如下：

```
local libvarname = 'list_1'
local ret = CloudSever:setDataListBykey(libvarname,"key1.score",1)
if ret == ErrorCode.OK then
    print('设置排行榜值成功 k = key1 ,v = 1')
else
    print('设置排行榜值失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)removeDataListByKey

*   参数及类型：
    *   libvarname:string表变量设计名
    *   key:string获取的键值
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 删除表中指定键的值
*   具体使用案例如下：

```
local libvarname = 'list_1'
local ret = CloudSever:removeDataListByKey(libvarname,"key1.score") --获取key1的分数
if ret == ErrorCode.OK then
    print('请求删除排行榜数据成功')
else
    print("请求删除排行榜数据失败")
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)getDataListByKeyEx**

*   参数及类型：
    *   libvarname:string表变量设计名
    *   key:string获取的键值
    *   callback:function更新回调(function(code/错误码...)0成功1失败2数据不存在)
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 获取表中指定键的值
*   具体使用案例如下：

```
local callback = function (ret,k,v)
    if ret == ErrorCode.OK then
        print('获取数据成功 键= '..k..' 值='..v)
    else
        if ret == 2 then --=不存在数据
            print('数据不存在')
        else
            print('获取失败')
        end
    end
end
local libvarname = 'list_1'
local ret = CloudSever:getDataListByKeyEx(libvarname,"key1.score",callback) --获取key1的分数
if ret == ErrorCode.OK then
    print('请求排行榜数据成功')
else
    print("请求排行榜数据失败")
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)ClearDataList**

*   参数及类型：
    *   libvarname:string表变量设计名
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 清空表数据
*   具体使用案例如下：

```
local libvarname = 'list_1'
local ret = CloudSever:ClearDataList(libvarname) 
if ret == ErrorCode.OK then
    print('清空表成功')
else
    print('清空表失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)getlistCache

*   参数及类型：
    *   libvarname:string表变量设计名
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 获取表或排行榜当前缓存数据
*   具体使用案例如下：

```
local libvarname = 'list_1'
local ret,values = CloudSever:getlistCache(libvarname)
if ret == ErrorCode.OK then
    print('获取数据成功')
else
    print('获取数据失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)UpdateDataListByKey**

*   参数及类型：
    *   libvarname:string表变量设计名
    *   key:string更新的键值
    *   callback:function更新回调(function(code/错误码...))
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 安全更新数据
*   具体使用案例如下：

```
local callback = function (ret,key,value)
    -- ret 0 很遗憾，数据冲突了，
    -- 需要根据带回来的最新value进行逻辑处理后返回给底层重试
    if ret == 0 then
        print("有冲突，这是数据库里最新的值" , value)
        --逻辑处理
        value = value + 1
        --返回给底层重试
        return value
    -- ret 2 修改成功啦
    elseif ret == 2 then
        print("成功，更新后的值 " , value)
    end
  end
  local ret = CloudSever:UpdateDataListByKey('list','score',callback)
  if ret == ErrorCode.OK then
  end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)SendSeverMsg**

*   参数及类型：
    *   msg:string消息名称
    *   customdata:any消息附带参数
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 发送服务通知消息
*   具体使用案例如下：

```
--派发自定义事件
local function func_event(param)
    local data = {id = 123,ops = "aaa"} --自定义事件带入的参数
    local ok, json = pcall(JSON.encode, JSON, data) --转换成json格式
    CloudSever:SendSeverMsg("customevent",{customdata = json}) -- 发送云服消息广播
end
ScriptSupportEvent:registerEvent('Player.PlayAction', func_event)
--云服消息广播监听
local function func_event(param)
    print(param) --打印自定义事件参数
end
ScriptSupportEvent:registerEvent('customevent', func_event)
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)TransmitToMap**

*   参数及类型：
    *   playerid:uin玩家UIN或玩家uin的数组
    *   mapid:number地图ID
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 传送玩家到指定地图
*   具体使用案例如下：

```
local ret  = CloudSever:TransmitToMap(playerid, mapid)
if ret == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)TransmitToRoom**

*   参数及类型：
    *   playerid:uin玩家UIN或玩家uin的数组
    *   roomid:string房间ID
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 传送玩家到指定房间
*   具体使用案例如下：

```
local ret  = CloudSever:TransmitToRoom(playerid, roomid)
if ret == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)TransmitOtherRoom**

*   参数及类型：
    *   playerid:玩家UIN或玩家uin的数组
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 传送玩家到其他房间
*   具体使用案例如下：

```
local ret  = CloudSever:TransmitOtherRoom(playerid)
if ret == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)GetRoomID**

*   参数及类型： 无
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
    *   roomid:string房间ID
*   该方法的主要作用： 获取当前云服房间ID
*   具体使用案例如下：

```
local ret ,roomid = CloudSever:GetRoomID()
if ret == ErrorCode.OK then
    print('执行成功' ,roomid )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)TransmitToCategoryRoom**

*   参数及类型：
    *   playerid:uin玩家UIN或玩家uin的数组
    *   roomtype:string分类ID(数值和字符串组合)
    *   mapid:string地图ID
*   返回值及类型：
    *   ret:number成功(ErrorCode.OK)ErrorCode
*   该方法的主要作用： 传送玩家到指定分类房间
*   具体使用案例如下：

```
local ret  = CloudSever:TransmitToCategoryRoom(playerid, roomtype, mapid)
if ret == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)SetForbidJoin**

*   参数及类型：
    *   seconds:number倒计时事件（小于等于零立即生效，默认0）
*   返回值及类型：
    *   code:number成功(ErrorCode.OKErrorCode
*   该方法的主要作用： 当前房间停止进入玩家（仅云服生效）
*   具体使用案例如下：

```
local code  = CloudSever:SetForbidJoin(seconds)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)CloseCurRoom**

*   参数及类型：
    *   countdown:number倒计时事件（小于等于零立即生效，默认0）
    *   msg:string提示语
*   返回值及类型：
    *   code:number成功(ErrorCode.OKErrorCode
*   该方法的主要作用： 关闭当前房间（仅云服生效）
*   具体使用案例如下：

```
local code  = CloudSever:CloseCurRoom(countdown, msg)
if code == ErrorCode.OK then
    print('执行成功'  )
else
    print('执行失败')
end
```

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=2067)GetRoomCategory

*   参数及类型：无
*   返回值及类型：
    *   code:number成功(ErrorCode.OK)ErrorCode
    *   msg:string分类信息
*   该方法的主要作用： 获取当前房间的分类信息（仅云服生效，和传送到指定分类房间接口配合使用）
*   具体使用案例如下：

```
local code ,msg = CloudSever:GetRoomCategory()
if code == ErrorCode.OK then
    print('执行成功' ,msg )
else
    print('执行失败')
end
```

### 学习案例

彼得兔 更新时间: 2024-04-26 16:50:31

**示例1：**

游戏开始，角色附近每隔10秒随机刷新一批怪物，怪物生存时间是10秒，玩家需要击杀10只野人，则游戏胜利，弹出胜利界面

```
local ActorId = 3102
local obj_ids = {} --怪物id表
local def_count = 0 --击败次数
local mob_count = 5 --怪物数量
local function SpawnMonsters()
	local ret, x, y, z = Player:getPosition()
	for idx = 1, mob_count do --生成怪物ID
		local newX = math.random(-5, 5) + x 
		local newZ = math.random(-5, 5) + z
		local ret, objids = World:spawnCreature(newX, y, newZ, ActorId)
		if ret == ErrorCode.OK then
			obj_ids[#obj_ids+1] = objids[1]
			obj_ids[#obj_ids+1] = objids[2]
		end
	end
end
local function ClearMonsters()
	if #obj_ids == 0 then return end
	for idx = 1, #obj_ids do
		World:despawnCreature(obj_ids[idx])
	end
	obj_ids = {}--将ID表清空
end

Game_Start = function()
	local ret, timerId = MiniTimer:createTimer("计时X")
	if ret == ErrorCode.OK then --启动计时器
		MiniTimer:startForwardTimer(timerId)
		SpawnMonsters()
	end
end

Timer_Change = function(event_args)
	local timerid = event_args['timerid']
	local ret, secs = MiniTimer:getTimerTime(timerid)
	if ret == ErrorCode.OK then
		if math.fmod(secs, 10) == 0 then
			ClearMonsters() --每隔10秒刷新下怪物
			SpawnMonsters()
		end
	end
end

Defeat_Actor = function(event_args)
	local toobjid = event_args['toobjid'] --被击败的目标ID
	local playerId = event_args['eventobjid']--玩家ID
	local ret, actorId = Creature:getActorID(toobjid)
	if ret==ErrorCode.OK and actorId==ActorId then
		def_count = def_count + 1
		Chat:sendSystemMsg("杀怪数量:"..def_count)
		if def_count == 10 then
			local win = TEAM_RESULTS.TEAM_RESULTS_WIN
			local result = Player:setGameResults(playerId, win)
			if result == ErrorCode.OK then
				Game:doGameEnd() --游戏结束
			end
		end
	end
end

ScriptSupportEvent:registerEvent([=[Game.Start]=], Game_Start)
ScriptSupportEvent:registerEvent([=[minitimer.change]=], Timer_Change)
ScriptSupportEvent:registerEvent([=[Player.DefeatActor]=], Defeat_Actor)


```

**示例2：**

游戏开始后，玩家每走一步，就在自己的右前方放置一个石块（右侧或者旁边，很直观的能看到）

```
Player_MoveStep = function(event_args)
	local playerId = event_args['eventobjid']
	local ret, x, y, z = Player:getPosition()

	local ret, curdir = Player:getCurPlaceDir(playerId)
	if curdir == FACE_DIRECTION.DIR_NEG_X then x = x+2; z = z+2 end
	if curdir == FACE_DIRECTION.DIR_POS_X then x = x-2; z = z-2 end
	if curdir == FACE_DIRECTION.DIR_NEG_Z then z = z+2; x = x+2 end
	if curdir == FACE_DIRECTION.DIR_POS_Z then z = z-2; x = x-2 end
	Block:replaceBlock(104, x, y, z)
end
ScriptSupportEvent:registerEvent([=[Player.MoveOneBlockSize]=], Player_MoveStep)
```

**示例3：**

在场景中放置开关和灯，当玩家挖掉10个土块，电灯亮起

```
local x, y, z = 5, 7, 5 --信号灯的位置
Game_Start = function()
	-- 放置开关和信号灯
	local palyer_1 = Player:getHostUin()
	Player:setPosition(palyer_1, 0, 7, 0)
	local switchId, lightId = 724, 707
	Block:replaceBlock(lightId, x, y, z)
	Block:replaceBlock(switchId, x, y+1, z, 4)
	for idx= 1, 10 do -- 放置草块
		Block:replaceBlock(100, x+idx, y, z)
	end
end

local remove_count = 0
Block_Removed = function(event_args)
	local blockid = event_args['blockid']
	if blockid == 100 then --草块被破坏
		remove_count = remove_count + 1
		if remove_count == 10 then --将开关打开
			Block:setBlockSwitchStatus({x=x,y=y+1,z=z}, true)
		end
	end
end
ScriptSupportEvent:registerEvent([=[Game.Start]=], Game_Start)
ScriptSupportEvent:registerEvent([=[Block.Remove]=], Block_Removed)

```

### 迷你世界ID查询

迷你世界 更新时间: 2024-04-29 16:15:00

#### 游戏内ID查询方法


_强烈推荐使用此方法在游戏内查询ID，更新快且查询方便_

**_目前仅支持在Windows PC平台上进行查询_**

#### 方法一：

第一步：点击编辑框上方“ID库”，选择要查询的ID类型

![](https://image.mini1.cn/d/20210719/64b695626baa55a542463648c1968322.png)

第二步：左侧选择分类，点击对象即可显示对应ID

![](https://image.mini1.cn/d/20210719/79ba7ed4b3be933579aaac7c16af49d9.png)

第三步：点击“插入ID”即可直接输入使用

![](https://image.mini1.cn/d/20210719/0a17d3327b78aded87a22eac949ebf6e.png)

#### 方法二：

第一步：使用快捷键“Ctrl+I”，或右键单击输入框任意位置，选择“插入ID”

![](https://image.mini1.cn/d/20210719/bb5812f45ea5176f2a8d034055f54fb0.png)

第二步：在弹出的“ID搜索工具”窗口输入要查询的对象名称，即可直接搜索ID

![](https://image.mini1.cn/d/20210719/e6874125bad98c8c1ef6593dc487abba.png)

第三步：点击搜索列表即可输入使用

![](https://image.mini1.cn/d/20210719/55ff83a49a666bb2eba7745f49845f50.png)

```
-- UI动效表数据

-- 显示动效
10001 渐显
10002 放大显示
10003 缩小显示

-- 隐藏动效
20001 渐显
20002 放大显示
20003 缩小显示

-- 循环动效
30001 颤抖
30002 跳动
30003 心跳
30004 摇摆
30005 旋转
30006 翻转
30007 顺时针扫描
30008 逆时针扫描
30009 闪烁

-- 文字动效
40001 打字机
```

### 接口常量列表

彼得兔 更新时间: 2024-04-26 16:32:55

可在代码里直接调用无需新建对象，调用形式如下：

```
local errorCode = ErrorCode.OK
local worldType = WorldType.OWTYPE_GAMEMAKER
```

#### Lua原生数据类型


<table style="border-collapse: collapse; width: 800px;" border="1"><tbody><tr style="height: 22px;"><td style="border: 1px solid #000000; height: 22px; width: 10.7715%;"><span style="font-size: 16px;">数据名称</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 89.1107%;"><span style="font-size: 16px;">用法描述</span></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 10.7715%;"><span style="font-size: 16px;">nil</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 89.1107%;"><span style="font-size: 16px;">表示一个无效值(在条件表达式中相当于false)</span></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 10.7715%;"><span style="font-size: 16px;">boolean</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 89.1107%;"><span style="font-size: 16px;">布尔值,包含两个值：false和true</span></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 10.7715%;"><span style="font-size: 16px;">number</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 89.1107%;"><span style="font-size: 16px;">实数,表示双精度类型的实浮点数,也可以是整数</span></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 10.7715%;"><span style="font-size: 16px;">string</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 89.1107%;"><span style="font-size: 16px;">字符串,由一对单引号或双引号来表示</span></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 10.7715%;"><span style="font-size: 16px;">table</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 89.1107%;"><span style="font-size: 16px;">Lua的一种数据结构，可用来创建不同的数据类型，如：数组、字典等</span></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 10.7715%;"><span style="font-size: 16px;">function</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 89.1107%;"><span style="font-size: 16px;">由 C 或 Lua 编写的函数</span></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 10.7715%;"><span style="font-size: 16px;">userdata</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 89.1107%;"><span style="font-size: 16px;">表示任意存储在变量中的C数据结构</span></td></tr><tr style="height: 22px;"><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 10.7715%;"><span style="font-size: 16px;">thread</span></td><td style="text-align: center; border: 1px solid #000000; height: 22px; width: 89.1107%;"><span style="font-size: 16px;">表示执行的独立线路，用于执行协同程序</span></td></tr></tbody></table>

#### 错误码信息


<table style="border-collapse: collapse; width: 800px;" border="1"><tbody><tr><td style="text-align: center; border: 1px solid #000000; width: 31.7058%;"><span style="font-size: 16px;">名称</span></td><td style="text-align: center; border: 1px solid #000000; width: 8.74606%;"><span style="font-size: 16px;">数值</span></td><td style="text-align: center; border: 1px solid #000000; width: 58.6786%;"><span style="font-size: 16px;">用法描述</span></td></tr><tr><td style="text-align: center; border: 1px solid #000000; width: 31.7058%;"><span style="font-size: 16px;">ErrorCode.OK</span></td><td style="text-align: center; border: 1px solid #000000; width: 8.74606%;"><span style="font-size: 16px;">0</span></td><td style="text-align: center; border: 1px solid #000000; width: 58.6786%;"><span style="font-size: 16px;">正确返回</span></td></tr><tr><td style="text-align: center; border: 1px solid #000000; width: 31.7058%;"><span style="font-size: 16px;">ErrorCode.FAILED</span></td><td style="text-align: center; border: 1px solid #000000; width: 8.74606%;"><span style="font-size: 16px;">1001</span></td><td style="text-align: center; border: 1px solid #000000; width: 58.6786%;"><span style="font-size: 16px;">错误返回</span></td></tr></tbody></table>

#### 存储栏起始位


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BPACK\_SINDEX.BACKPACK\_START\_INDEX | 0 | 背包栏 |
| BPACK\_SINDEX.SHORTCUT\_START\_INDEX | 1000 | 快捷栏 |
| BPACK\_SINDEX.STORAGE\_START\_INDEX | 3000 | 储物箱 |
| BPACK\_SINDEX.EQUIP\_START\_INDEX | 8000 | 装备栏 |

#### 游戏模式


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| WorldType.OWTYPE\_SINGLE | 0 | 单人模式 |
| WorldType.OWTYPE\_CREATE | 1 | 多人创造模式 |
| WorldType.OWTYPE\_EXTREMITY | 2 | 极限模式 |
| WorldType.OWTYPE\_CREATE\_RUNGAME | 3 | 由创造模式转的生存 |
| WorldType.OWTYPE\_GAMEMAKER | 4 | 自制玩法的编辑模式 |
| WorldType.OWTYPE\_GAMEMAKER\_RUN | 5 | 自制玩法的运行模式 |
| WorldType.OWTYPE\_FREEMODE | 6 | 冒险模式之自由模式 |
| WorldType.OWTYPE\_RECORD | 9 | 录像模式 |

#### 游戏地形


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| TerrainType.TERRAIN\_FLAT | 0 | 平坦地形 |
| TerrainType.TERRAIN\_NORMAL | 1 | 随机地形 |

#### 自定义视角编辑状态


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CameraEditState.CAMERA\_EDIT\_STATE\_NULL | 0 | 空 |
| CameraEditState.CAMERA\_EDIT\_STATE\_EDIT | 1 | 编辑 |
| CameraEditState.CAMERA\_EDIT\_STATE\_TEST | 2 | 测试 |

#### 小地图绘图类型


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| MAPMARK\_TYPE.MMARK\_LINE | 0 | 线形标记 |
| MAPMARK\_TYPE.MMARK\_RECTANGLE | 1 | 矩形标记 |
| MAPMARK\_TYPE.MMARK\_CIRCLE | 2 | 圆形标记 |

#### 装备部位类型


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| EQUIP\_SLOT\_TYPE.EQUIP\_HEAD | 0 | 头 |
| EQUIP\_SLOT\_TYPE.EQUIP\_BREAST | 1 | 身体 |
| EQUIP\_SLOT\_TYPE.EQUIP\_LEGGING | 2 | 腿 |
| EQUIP\_SLOT\_TYPE.EQUIP\_SHOE | 3 | 脚 |
| EQUIP\_SLOT\_TYPE.EQUIP\_PIFENG | 4 | 披风 |
| EQUIP\_SLOT\_TYPE.EQUIP\_WEAPON | 5 | 武器 |
| EQUIP\_SLOT\_TYPE.MAX\_EQUIP\_SLOTS | 6 | \--- |

#### 附魔属性类型


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| MODATTRIB\_TYPE.MODATTR\_MOVE\_SPEED | 0 | 移动速度 |
| MODATTRIB\_TYPE.MODATTR\_SWIM\_SPEED | 1 | 游泳速度 |
| MODATTRIB\_TYPE.MODATTR\_JUMP\_SPEED | 2 | 往上跳的速度 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_PUNCH | 3 | 近程攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_RANGE | 4 | 远程攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_EXPLODE | 5 | 爆炸攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_FIRE | 6 | 火攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_POISON | 7 | 毒攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_WITHER | 8 | 混乱攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_PLAYER | 9 | 攻击玩家时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_UNDEAD | 10 | 攻击亡灵时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_ANIMAL | 11 | 攻击动物别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_PUNCH | 12 | 被近程攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_RANGE | 13 | 被远程攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_EXPLODE | 14 | 被爆炸攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_FIRE | 15 | 被火攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_POISON | 16 | 被毒攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_WITHER | 17 | 被混乱攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_FALLING | 18 | 高处掉下伤害加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ARMOR\_PUNCH | 19 | 近程护甲加点 |
| MODATTRIB\_TYPE.MODATTR\_ARMOR\_RANGE | 20 | 远程护甲加点 |
| MODATTRIB\_TYPE.MODATTR\_ARMOR\_EXPLODE | 21 | 爆炸护甲加点 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGE\_ABSORB | 22 | 吸收伤害 |
| MODATTRIB\_TYPE.MODATTR\_CRITICAL\_HIT | 23 | 暴击伤害加成 |
| MODATTRIB\_TYPE.MODATTR\_KNOCK | 24 | 增加攻击别人的击退距离 |
| MODATTRIB\_TYPE.MODATTR\_KNOCK\_RESIST | 25 | 减少击退距离 |
| MODATTRIB\_TYPE.MODATTR\_KNOCK\_RESIST\_PROB | 26 | 击退概率抵抗值, 0.2表示有20%概率不被击退 |
| MODATTRIB\_TYPE.MODATTR\_ACTOR\_SCALE | 27 | 角色大小 0 - 1.0 只针对玩家对象有效 |
| MODATTRIB\_TYPE.MAX\_MOB\_MODATTR | 28 | 怪物 最大附魔属性 |
| MODATTRIB\_TYPE.MODATTR\_DIG\_SPEED | 28 | 挖掘速度 |
| MODATTRIB\_TYPE.MODATTR\_LUCK\_DIG | 29 | 挖掘幸运, 0.2表示增加20%掉落概率 |
| MODATTRIB\_TYPE.MODATTR\_LUCK\_KILLMOB | 30 | 怪物掉落 |
| MODATTRIB\_TYPE.MODATTR\_VIEW\_BRIGHT | 31 | 视野亮度 0 - 1.0 |
| MODATTRIB\_TYPE.MODATTR\_OXYGEN\_SUPPLY | 32 | 氧气提供1:只能水底用， 100: 只能太空用， 101：都能用 10000:恢复氧气 |
| MODATTRIB\_TYPE.MAX\_PLAYER\_MODATTR | 33 | \--- |
| MODATTRIB\_TYPE.MAX\_MOD\_ATTRIB | 33 | \--- |

#### 游戏战斗结果


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| TEAM\_RESULTS.TEAM\_RESULTS\_NONE | 0 | 胜负未定 |
| TEAM\_RESULTS.TEAM\_RESULTS\_WIN | 1 | 胜利 |
| TEAM\_RESULTS.TEAM\_RESULTS\_LOSE | 2 | 失败 |
| TEAM\_RESULTS.TEAM\_RESULTS\_DOGFALL | 3 | 平局 |

#### 声音类型


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| GSOUND\_TYPE.GSOUND\_DIG | 0 | 挖掘 |
| GSOUND\_TYPE.GSOUND\_DESTROY | 1 | 破坏 |
| GSOUND\_TYPE.GSOUND\_PLACE | 2 | 放置 |
| GSOUND\_TYPE.GSOUND\_FALLGROUND | 3 | 摔落 |
| GSOUND\_TYPE.GSOUND\_WALK | 4 | 行走 |

#### 生物身体特效


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| ACTORBODY\_EFFECT.BODYFX\_HURT | 0 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_FIRE | 1 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_PORTAL | 2 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_ACCUMFIRE | 3 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONFIRE | 4 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONSUMMON | 5 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TAME\_SUCCEED | 6 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TAME\_FAILED | 7 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TAME\_FOOD | 8 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TAME\_NOFOOD | 9 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_AI\_NEEDREEDS | 10 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_FEAR | 11 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_ROLECOLLECT | 12 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_ROLEJUMP | 13 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DEADPROTECT | 14 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONDIE0 | 15 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONDIE1 | 16 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONDIE2 | 17 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_HORSE\_FLY | 18 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DISAPPEAR | 19 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_HORSE\_BENTENG | 20 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DANCE | 21 | \--- |
| ACTORBODY\_EFFECT.TOOLFX\_JETPACK2 | 22 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_INTERACTION | 23 | \--- |
| ACTORBODY\_EFFECT.HUDFX\_HEADSHOT | 24 | \--- |
| ACTORBODY\_EFFECT.HUDFX\_NORMALSHOT | 25 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_MILKING | 26 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_AI\_ANGRY | 27 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_AI\_SLEEP | 28 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TRANSPORT | 29 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_FORBIDDEN | 30 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_CONCEAL | 31 | 潜行 |
| ACTORBODY\_EFFECT.BODYFX\_WEAPON\_FIRE | 32 | 野人猎手武器上的火 |
| ACTORBODY\_EFFECT.BODYFX\_DIZZY | 33 | 眩晕 |
| ACTORBODY\_EFFECT.BODYFX\_MAKETROUBLE | 34 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TRAINMOVE | 35 | 火车移动 |
| ACTORBODY\_EFFECT.BODYFX\_AI\_HUNGRY | 36 | 饥饿 |
| ACTORBODY\_EFFECT.BODYFX\_BALL\_CHARGE | 37 | 蓄力踢球的特效 |
| ACTORBODY\_EFFECT.BODYFX\_BALL\_SHOOT\_RELEASE | 38 | 射球瞬间的爆发特效 |
| ACTORBODY\_EFFECT.BODYFX\_ENCH\_FALL | 39 | 附魔速降 |

#### 游戏实例类型


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| OBJ\_TYPE.OBJTYPE\_PLAYER | 1 | 玩家 |
| OBJ\_TYPE.OBJTYPE\_CREATURE | 2 | 生物(包含怪物、动物、NPC ，BOSS等) |
| OBJ\_TYPE.OBJTYPE\_DROPITEM | 3 | 掉落物 |
| OBJ\_TYPE.OBJTYPE\_MISSILE | 4 | 投掷物 |

#### 玩家背包类型


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BACKPACK\_TYPE.SHORTCUT | 1 | 快捷栏 |
| BACKPACK\_TYPE.INVENTORY | 2 | 存储栏 |
| BACKPACK\_TYPE.EQUIP | 3 | 装备栏 |

#### 玩家朝向


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| FACE\_DIRECTION.DIR\_NOT\_INIT | \-1 | 未指定 |
| FACE\_DIRECTION.DIR\_NEG\_X | 0 | X反方向 |
| FACE\_DIRECTION.DIR\_POS\_X | 1 | X正方向 |
| FACE\_DIRECTION.DIR\_NEG\_Z | 2 | Z反方向 |
| FACE\_DIRECTION.DIR\_POS\_Z | 3 | Z正方向 |
| FACE\_DIRECTION.DIR\_NEG\_Y | 4 | Y反方向 |
| FACE\_DIRECTION.DIR\_POS\_Y | 5 | Y正方向 |

#### 生物属性枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CREATUREATTR.MAX\_HP | 1 | 最大生命值 |
| CREATUREATTR.CUR\_HP | 2 | 当前生命值 |
| CREATUREATTR.HP\_RECOVER | 3 | 生命恢复 |
| CREATUREATTR.MAX\_HUNGER | 5 | 最大饥饿值 |
| CREATUREATTR.CUR\_HUNGER | 6 | 当前饥饿值 |
| CREATUREATTR.MAX\_OXYGEN | 7 | 最大氧气值 |
| CREATUREATTR.CUR\_OXYGEN | 8 | 当前氧气值 |
| CREATUREATTR.RECOVER\_OXYGEN | 9 | 氧气恢复速度 |
| CREATUREATTR.WALK\_SPEED | 10 | 移动速度 |
| CREATUREATTR.RUN\_SPEED | 11 | 奔跑速度 |
| CREATUREATTR.SWIN\_SPEED | 13 | 游泳速度 |
| CREATUREATTR.JUMP\_POWER | 14 | 跳跃力 |
| CREATUREATTR.WEIGHT | 15 | 重量 |
| CREATUREATTR.DODGE | 16 | 闪避率 |
| CREATUREATTR.ATK\_MELEE | 17 | 近战攻击 |
| CREATUREATTR.ATK\_REMOTE | 18 | 远程攻击 |
| CREATUREATTR.DEF\_MELEE | 19 | 近战防御 |
| CREATUREATTR.DEF\_REMOTE | 20 | 远程防御 |
| CREATUREATTR.DIMENSION | 21 | 模型大小 |
| CREATUREATTR.ATK\_PHYSICAL  |   | 物理攻击  |
| CREATUREATTR.ATK\_MAGIC  |   | 元素攻击  |
| CREATUREATTR.DEF\_PHYSICAL  |   | 物理防御  |
| CREATUREATTR.DEF\_MAGIC  |   | 元素防御  |

#### 生物属性设置


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CREATUREATTR.ENABLE\_MOVE | 1 | 可移动 |
| CREATUREATTR.ENABLE\_ATTACK | 32 | 可攻击 |
| CREATUREATTR.ENABLE\_BEATTACKED | 64 | 可被攻击 |
| CREATUREATTR.ENABLE\_BEKILLED | 128 | 可被杀死 |
| CREATUREATTR.ENABLE\_PICKUP | 256 | 可拾取道具 |
| CREATUREATTR.ENABLE\_DEATHDROPITEM | 512 | 死亡掉落 |

#### 生物行为枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CREATUREMOTION.IDLE | 1 | 空闲 |
| CREATUREMOTION.STANDBY | 2 | 待机 |
| CREATUREMOTION.STROLL | 3 | 闲逛 |
| CREATUREMOTION.ATK\_MELEE | 4 | 近战攻击 |
| CREATUREMOTION.ATK\_REMOTE | 5 | 远程攻击 |
| CREATUREMOTION.FOLLOW | 6 | 跟随 |
| CREATUREMOTION.SWIM | 7 | 游泳 |
| CREATUREMOTION.RUN\_AWAY | 8 | 逃跑 |
| CREATUREMOTION.SELF\_BOMB | 9 | 自爆 |
| CREATUREMOTION.BEATTRACTED | 10 | 被吸引 |
| CREATUREMOTION.COPULATION | 11 | 交配 |

#### 玩家属性枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| PLAYERATTR.MAX\_HP | 1 | 最大生命值 |
| PLAYERATTR.CUR\_HP | 2 | 当前生命值 |
| PLAYERATTR.HP\_RECOVER | 3 | 生命恢复 |
| PLAYERATTR.LIFE\_NUM | 4 | 生命数 |
| PLAYERATTR.MAX\_HUNGER | 5 | 最大饥饿值 |
| PLAYERATTR.CUR\_HUNGER | 6 | 当前饥饿值 |
| PLAYERATTR.MAX\_OXYGEN | 7 | 最大氧气值 |
| PLAYERATTR.CUR\_OXYGEN | 8 | 当前氧气值 |
| PLAYERATTR.RECOVER\_OXYGEN | 9 | 氧气恢复速度 |
| PLAYERATTR.WALK\_SPEED | 10 | 移动速度 |
| PLAYERATTR.RUN\_SPEED | 11 | 奔跑速度 |
| PLAYERATTR.SNEAK\_SPEED | 12 | 潜行速度 |
| PLAYERATTR.SWIN\_SPEED | 13 | 游泳速度 |
| PLAYERATTR.JUMP\_POWER | 14 | 跳跃力 |
| PLAYERATTR.DODGE | 16 | 闪避率 |
| PLAYERATTR.ATK\_MELEE | 17 | 近战攻击 |
| PLAYERATTR.ATK\_REMOTE | 18 | 远程攻击 |
| PLAYERATTR.DEF\_MELEE | 19 | 近战防御 |
| PLAYERATTR.DEF\_REMOTE | 20 | 远程防御 |
| PLAYERATTR.DIMENSION | 21 | 大小 |
| PLAYERATTR.SCORE | 22 | 分数 |
| PLAYERATTR.LEVEL | 23 | 星星等级 |
| PLAYERATTR.CUR\_STRENGTH | 28 | 当前体力值 |
| PLAYERATTR.MAX\_STRENGTH | 29 | 当前最大体力值 |
| PLAYERATTR.STRENGTH\_RECOVER | 30 | 当前体力值恢复速度 |
| PLAYERATTR.ATK\_PHYSICAL  |   | 物理攻击  |
| PLAYERATTR.ATK\_MAGIC  |   | 元素攻击  |
| PLAYERATTR.DEF\_PHYSICAL  |   | 物理防御  |
| PLAYERATTR.DEF\_MAGIC  |   | 元素防御  |
| PLAYERATTR.CUR\_LEVELEXP | 26 | 当前经验 |
| PLAYERATTR.CUR\_LEVEL | 27 | 当前等级 |

#### 玩家属性设置


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| PLAYERATTR.ENABLE\_MOVE | 1 | 可移动 |
| PLAYERATTR.ENABLE\_PLACEBLOCK | 2 | 可摆放方块 |
| PLAYERATTR.ENABLE\_OPERATEBLOCK | 4 | 可操作方块 |
| PLAYERATTR.ENABLE\_DESTROYBLOCK | 8 | 可破坏方块 |
| PLAYERATTR.ENABLE\_USEITEM | 16 | 可使用道具 |
| PLAYERATTR.ENABLE\_ATTACK | 32 | 可攻击 |
| PLAYERATTR.ENABLE\_BEATTACKED | 64 | 可被攻击 |
| PLAYERATTR.ENABLE\_BEKILLED | 128 | 可被杀死 |
| PLAYERATTR.ENABLE\_PICKUP | 256 | 可拾取道具 |
| PLAYERATTR.ENABLE\_DEATHDROPITEM | 512 | 死亡掉落 |
| PLAYERATTR.ENABLE\_VEHICLEAUTOFORWARD | 1024 | 载具自动前行 |
| PLAYERATTR.ENABLE\_DISCARDITEM | 2048 | 可丢弃道具 |

#### 玩家道具设置


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| PLAYERATTR.ITEM\_DISABLE\_THROW | 1 | 道具不可丢弃 |
| PLAYERATTR.ITEM\_DISABLE\_DROP | 2 | 道具不可掉落 |

#### 玩家行为枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| PLAYERMOTION.STATIC | 0 | 静止 |
| PLAYERMOTION.WALK | 1 | 行走 |
| PLAYERMOTION.RUN | 2 | 奔跑 |
| PLAYERMOTION.JUMP | 4 | 跳跃 |
| PLAYERMOTION.JUMP\_TWICE | 8 | 二段跳 |
| PLAYERMOTION.SNEAK | 16 | 潜行 |
| PLAYERMOTION.FALL\_GROUND | 32 | 落地 |
| PLAYERMOTION.TURNBACK | 1000000 | 转身(已经取消) |
| PLAYERMOTION.UP | 1000001 | 上升(已经取消) |
| PLAYERMOTION.DOWN | 1000002 | 下降(已经取消) |
| PLAYERMOTION.FALL | 1000003 | 下落(已经取消) |

#### 队伍属性枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| TEAMATTR.PLAYER\_NUM | 1 | 玩家数量 |
| TEAMATTR.SCORE | 2 | 分数 |

#### 伤害类型枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| HURTTYPE.MELEE | 0 | 近战伤害 ATTACK\_PUNCH |
| HURTTYPE.REMOTE | 1 | 远程伤害 ATTACK\_RANGE |
| HURTTYPE.BOMB | 2 | 爆炸伤害 ATTACK\_EXPLODE |
| HURTTYPE.PHYSICS | 3 | 物理伤害 MAX\_PHYSICS\_ATTACK |
| HURTTYPE.BURNING | 3 | 燃烧伤害 ATTACK\_FIRE |
| HURTTYPE.TOXIN | 4 | 毒素伤害 ATTACK\_POISON |
| HURTTYPE.WITHER | 5 | 混乱伤害 ATTACK\_WITHER |
| HURTTYPE.MAGIC | 6 | 元素伤害 MAX\_MAGIC\_ATTACK |
| HURTTYPE.SUN | 6 | 日晒 ATTACK\_SUN |
| HURTTYPE.FALL | 7 | 跌落伤害 ATTACK\_FALLING |
| HURTTYPE.ANVIL | 8 | 被砸中伤害 ATTACK\_ANVIL |
| HURTTYPE.CACTUS | 9 | 仙人掌伤害 ATTACK\_CACTUS |
| HURTTYPE.ASPHYXIA | 10 | 窒息伤害 ATTACK\_WALL |
| HURTTYPE.DROWN | 11 | 溺水伤害 ATTACK\_DROWN |
| HURTTYPE.SUFFOCATE | 12 | 水下生物在空气中窒息伤害 ATTACK\_SUFFOCATE |
| HURTTYPE.ANTIINJURY | 13 | 反伤 ATTACK\_ANTIINJURY |
| HURTTYPE.LASER | 14 | 被激光伤害 ATTACK\_BLOCK\_LASER |

#### 特殊方块类型


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BLOCKID.AIR | 0 | 空气 |

#### 方块属性枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BLOCKATTR.EXPLODE\_RESISTANCE | 1 | 爆炸抗性 |
| BLOCKATTR.HARDNESS | 2 | 硬度 |
| BLOCKATTR.GLISSADE | 3 | 滑行惯性 |
| BLOCKATTR.BURNING\_SPEED | 4 | 燃烧速度 |
| BLOCKATTR.BURNING\_PROBABILITY | 5 | 燃烧几率 |
| BLOCKATTR.LIGHTNESS | 6 | 亮度 |

#### 方块属性设置


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BLOCKATTR.ENABLE\_DESTROYED | 1 | 可破坏 |
| BLOCKATTR.ENABLE\_BEOPERATED | 2 | 可操作 |
| BLOCKATTR.ENABLE\_BEPUSHED | 4 | 可被推动 |
| BLOCKATTR.ENABLE\_DROPITEM | 8 | 可掉落道具 |
| BLOCKATTR.BEPUSHED\_DROPITEM | 16 | 被推动掉落 |

#### 方块状态


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BLOCKSTATUS.ACTIVE | 1 | 活跃(被激活) |
| BLOCKSTATUS.INACTIVE | 2 | 不活跃(未被激活) |

#### 天气状态枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| WEATHERSTATUS.SHINE\_AND\_RAIN | 0 | 晴雨交替 |
| WEATHERSTATUS.SHINE | 1 | 晴天 |
| WEATHERSTATUS.RAIN | 2 | 雨天 |

#### 视口方向


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| VIEWPORTTYPE.MAINVIEW | 0 | 主视角 |
| VIEWPORTTYPE.BACKVIEW | 1 | 背视角 |
| VIEWPORTTYPE.FRONTVIEW | 2 | 正视角 |
| VIEWPORTTYPE.BACK2VIEW | 3 | 背视角2 |
| VIEWPORTTYPE.TOPVIEW | 4 | 俯视角 |
| VIEWPORTTYPE.CUSTOMVIEW | 5 | 自定义视角 |

#### 模板库类型


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| RESLIBTYPE.NONE | 0 | 无 |
| RESLIBTYPE.BLOCK | 1 | 方块 |
| RESLIBTYPE.ITEM | 2 | 道具 |
| RESLIBTYPE.MONSTER | 3 | 生物 |
| RESLIBTYPE.PARTICLE | 4 | 特效 |
| RESLIBTYPE.SOUND | 5 | 音效 |

#### 变量类型


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| POSITION | 1 | 位置 |
| AREAINS | 2 | 区域 |
| NUMBER | 3 | 数值 |
| STRING | 4 | 字符串 |
| BOOLEAN | 5 | 布尔值 |
| PLAYER | 6 | 玩家 |
| PLAYERGROUT | 7 | 玩家组 |
| BLOCKTYPE | 8 | 方块类型 |
| ITEMTYPE | 9 | 道具类型 |
| CREATURE | 10 | 生物 |
| ACTORID | 11 | actor类型 |
| CREATUREGROUP | 12 | 生物组 |
| TIMER | 13 | 计时器 |
| EFFECTTYPE | 14 | 特效类型 |
| SITEGROUP | 15 | 位置组 |
| AREAGROUP | 16 | 区域组 |
| NUMBERGROUP | 17 | 数值组 |
| STRINGGROUP | 18 | 字符串组 |
| BOOLEANGROUP | 19 | 布尔值组 |
| BLOCKTYPEGROUP | 20 | 方块类型组 |
| ITEMTYPEGROUP | 21 | 道具类型组 |
| CREATURETYPEGROUP | 22 | 生物类型组 |
| TIMERGROUP | 23 | 计时器组 |
| EFFECTTYPEGROUP | 24 | 特效类型组 |

#### 图文信息枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| GRAPHICS.GRAPHICS\_HORNBOOK | 1 | 文字板 |
| GRAPHICS.GRAPHICS\_SUSPENDBOOK | 2 | 漂浮文字 |
| GRAPHICS.GRAPHICS\_PROGRESS | 3 | 进度条 |
| GRAPHICS.GRAPHICS\_ARROW\_POS | 4 | 箭头 指向位置 |
| GRAPHICS.GRAPHICS\_ARROW\_ACTOR | 5 | 箭头 指向生物 |
| GRAPHICS.GRAPHICS\_LINE\_POS | 6 | 线 指向位置 |
| GRAPHICS.GRAPHICS\_LINE\_ACTOR | 7 | 线 指向生物 |
| GRAPHICS.GRAPHICS\_SURFACE\_POS | 8 | 面 指向界面 |
| GRAPHICS.GRAPHICS\_SURFACE\_ACTOR | 9 | 面 指向生物 |
| GRAPHICS.GRAPHICS\_IMAGE  | 10 | 图片 图片  |

#### 合成炉枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| FURNACEID.FURNACEID\_STONE | 802 | 石炉, |
| FURNACEID.FURNACEID\_IRON | 798 | 铁炉, |
| FURNACEID.FURNACEID\_COPPER | 799 | 铜炉, |

#### 储物箱枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| STORAGEID.STORAGEID\_BOX | 801 | 储物箱, |
| STORAGEID.STORAGEID\_BOXROW | 1180 | 大型储物箱（横）, |
| STORAGEID.STORAGEID\_BOXCOL | 1181 | 大型储物箱（竖）, |

#### 排序枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| SORT.UP | 0 | 升序, |
| SORT.DOWN | 1 | 降序, |

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)按键值枚举


| 字符串 | 用法描述 |
| --- | --- |
| "SPACE" | 空格键(手机跳跃键) |
| "SHIFT" | Shift键(手机潜行键) |
| "A" | A键(手机左移键) |
| "B" | B键 |
| "C" | C键 |
| "D" | D键(手机右移键) |
| "E" | E键 |
| "F" | F键 |
| "G" | G键 |
| "H" | H键 |
| "I" | I键 |
| "J" | J键 |
| "K" | K键 |
| "L" | L键 |
| "M" | M键 |
| "N" | N键 |
| "O" | O键 |
| "P" | P键 |
| "Q" | Q键 |
| "R" | R键 |
| "S" | S键(手机后移键) |
| "T" | T键 |
| "U" | U键 |
| "V" | V键 |
| "W" | W键(手机前移键) |
| "X" | X键 |
| "Y" | Y键 |
| "Z" | Z键 |

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)移动方式枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| MOVETYPE.FLY | 1 | 飞行 |
| MOVETYPE.IDLE | 2 | 默认移动方式 |

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)设备完整时间类型枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CurEventParam.EventDate.time | 1 | 设备完整时间 |

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)设备时间类型枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CurEventParam.EventDate.year | 1 | 设备时间-年 |
| CurEventParam.EventDate.month | 2 | 设备时间-月 |
| CurEventParam.EventDate.day | 3 | 设备时间- 日 |
| CurEventParam.EventDate.hour | 4 |  设备时间-时 |
| CurEventParam.EventDate.minute | 5 |  设备时间-分 |
|  CurEventParam.EventDate.second | 6 |  设备时间-秒 |

#### [](https://dev-wiki.mini1.cn/cyclopdeia?wikiMenuId=3&wikiId=1376)事件参数类型枚举


| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CurEventParam.EventString | 1 | 事件中的字符串 |

#### QQMusic操作类型

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| QQMUSICOP.PAUSE | 0 | 暂停 |
| QQMUSICOP.RESUME  | 1 | 恢复 |
| QQMUSICOP.STOP  | 2 | 停止 |

#### EVENTDATE操作类型

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| EVENTDATE.YEAR | 0 | 年 |
| EVENTDATE.MONTH | 1 | 月 |
| EVENTDATE.DAY | 2 | 日 |
| EVENTDATE.HOUR | 3 | 时  |
| EVENTDATE.MINUTE | 4 | 分  |
| EVENTDATE.SECOND | 5 | 秒  |
| EVENTDATE.TIMESTAMP | 6 | 时间戳  |

#### ITEMATTR道具属性

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| ITEMATTR.ATTACK | 1 | 攻击力 |
| ITEMATTR.STACKMAX | 2 | 叠加数 |
| ITEMATTR.SHORTDEFENSE | 3 | 近战防御 |
| ITEMATTR.LONGDEFENSE | 4 | 远程防御 |
| ITEMATTR.EXPLODEDEFENSE | 5 | 爆炸防御 |
| ITEMATTR.FIREDEFENSE | 6 | 燃烧防御 |
| ITEMATTR.POISONDEFENSE | 7 | 毒素防御 |
| ITEMATTR.WITHERDEFENSE | 8 | 混乱防御 |
| ITEMATTR.DURATION | 9 | 耐久度 |
| ITEMATTR.FIREINTERVAL | 10 | 射击间隔 |
| ITEMATTR.MAGAZINES | 11 | 弹夹量 |

#### DROPMODE掉落方式

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| DROPMODE.DISCARDITEM | 2 | 丢弃道具 |
| DROPMODE.DESTROYBOX | 3 | 箱子被破坏掉落 |
| DROPMODE.DEFEATMOB | 4 | 生物被击败掉落 |
| DROPMODE.DESTROYBLOCK | 5 | 方块被破坏掉落 |
| DROPMODE.SPAWNITEM | 6 | 触发器创建 |
| DROPMODE.CHANGEPLAYMODE | 7 | 掉落物对象转玩法创建 |

#### 动作播放方式

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| ANIMMODE.ANIM\_MODE\_LOOP | 0 | 循环播放 |
| ANIMMODE.ANIM\_MODE\_ONCE | 1 | 播放一次 |
| ANIMMODE.ANIM\_MODE\_ONCE\_STOP | 2 | 播放一次完毕，停在末尾 |
| ANIMMODE.ANIM\_MODE\_DEFAULT | 3 | 表格默认值播放 |

#### 线性变换

<table style="border-collapse: collapse;"><colgroup><col width="259"><col width="72"><col width="148"></colgroup><tbody><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">名称</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;">数值</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">用法描述</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.None</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="-1">-1</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">无动画</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.Linear</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="0">0</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">直线变换</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.QuadIn</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="4">4</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">平方曲线1渐入</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.QuadOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="5">5</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">平方曲线2渐出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.QuadInOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="6">6</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">平方曲线3进出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.ExpoIn</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="16">16</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">指数曲线1渐入</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.ExpoOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="17">17</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">指数曲线2渐出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.ExpoInOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="18">18</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">指数曲线3进出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.CircIn</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="19">19</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">圆曲线1渐入</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.CircOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="20">20</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">圆曲线2渐出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.CircInOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="21">21</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">圆曲线3进出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.ElasticIn</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="22">22</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">弹簧曲线1渐入</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.ElasticOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="23">23</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">弹簧曲线2渐出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.ElasticInOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="24">24</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">弹簧曲线3进出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.BackIn</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="25">25</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">回退曲线1渐入</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.BackOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="26">26</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">回退曲线2渐出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.BackInOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="27">27</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">回退曲线3进出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.BounceIn</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="28">28</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">弹跳曲线1渐入</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.BounceOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="29">29</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">弹跳曲线1渐出</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">LinearTransformation.BounceInOut</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="30">30</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">弹跳曲线1进出</td></tr></tbody></table>

#### 天空盒贴图

<table style="border-collapse: collapse;"><colgroup><col width="197"><col width="105"><col width="105"></colgroup><tbody><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">名称</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;">数值</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">用法描述</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXMAP.SKYMAP</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="1">1</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">天空贴图</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXMAP.SUNMAP</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="2">2</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">太阳贴图</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXMAP.MOONMAP</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="3">3</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">月亮贴图</td></tr></tbody></table>

#### 天空盒颜色

<table style="border-collapse: collapse;"><colgroup><col width="262"><col width="41"><col width="105"></colgroup><tbody><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">名称</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;">数值</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">用法描述</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXCOLOR.TOPCOLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="1">1</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">天空顶部颜色</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXCOLOR.MIDDLECOLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="2">2</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">天空腰部颜色</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXCOLOR.BOTTOMCOLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="3">3</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">天空底部颜色</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXCOLOR.LIGHTCOLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="4">4</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">天空光照颜色</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXCOLOR.ENVCOLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="5">5</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">环境光颜色</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXCOLOR.SUNCOLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="6">6</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">太阳颜色</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXCOLOR.MOONCOLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="7">7</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">月亮颜色</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXCOLOR.CLOUDCOLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="8">8</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">云颜色</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXCOLOR.FOGCOLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="9">9</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">雾颜色</td></tr></tbody></table>

#### 天空盒参数

<table style="border-collapse: collapse;"><colgroup><col width="259"><col width="72"><col width="148"></colgroup><tbody><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">名称</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;">数值</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">用法描述</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXATTR.SUNSCALE</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="1">1</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">太阳大小</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXATTR.MOONSCALE</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="2">2</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">月亮大小</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXATTR.STARDENSITY</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="3">3</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">星星密度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXATTR.CLOUDSPEED</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="4">4</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">云的运动速度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXATTR.CLOUDENSITY</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="5">5</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">云的密度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXATTR.CLOUDHIGH</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="6">6</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">云的高度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXATTR.FOGREMINDIS</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="7">7</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">雾的最近距离</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXATTR.FOGREMAXDIS</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="8">8</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">雾的最远距离</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXATTR.TEMPLATE</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="9">9</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">模板</td></tr></tbody></table>

#### 天空盒环境粒子参数

<table style="border-collapse: collapse;"><colgroup><col width="271"><col width="72"><col width="148"></colgroup><tbody><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">名称</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;">数值</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">用法描述</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXPARTICLE.STRENGTH</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="1">1</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">强度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXPARTICLE.RANGE</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="2">2</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">范围</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXPARTICLE.SPEED</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="3">3</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">速度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXPARTICLE.RANDOMNESS</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="4">4</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">运动不规则度</td></tr></tbody></table>

#### 天空盒滤镜参数

<table style="border-collapse: collapse;"><colgroup><col width="271"><col width="72"><col width="148"></colgroup><tbody><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">名称</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;">数值</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">用法描述</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.CONTRAST</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="1">1</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">对比度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.SATURATION</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="2">2</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">饱和度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.FLOOD</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="3">3</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">泛光强度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.EXPOSURE</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="4">4</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">曝光强度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.VOLUMELIGHT</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="5">5</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">体积光强度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.GAMMA</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="6">6</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">伽马强度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.DEPTH</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="7">7</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">景深强度</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.COLOR</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="8">8</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">滤镜颜色</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.LUT</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="9">9</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">色彩校正</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">SKYBOXFILTER.TEMPLATE</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="10">10</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">滤镜模板</td></tr></tbody></table>

#### 摄像机属性

<table style="border-collapse: collapse;"><colgroup><col width="271"><col width="72"><col width="148"></colgroup><tbody><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">名称</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;">数值</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">用法描述</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">CameraModel.MoveFollow</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="1">1</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">跟随角色移动</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">CameraModel.RotateFollow</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="2">2</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">跟随角色旋转</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">CameraModel.Autoindent</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="3">3</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">阻挡后自动缩进</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">CameraModel.RelativeRotate</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="4">4</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">相对人物旋转</td></tr><tr><td style="border: 1px solid #1f2329; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; text-align: left;"><span style="color: #24292e;"><span style="white-space-collapse: preserve;">CameraModel.RoleTranslucent</span></span></td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;">&nbsp;</td><td style="border: 1px solid #1f2329; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; text-align: left;"><span style="color: #24292e;"><span style="white-space-collapse: preserve;">角色半透</span></span></td></tr></tbody></table>

#### 摄像机旋转模式

<table style="border-collapse: collapse;"><colgroup><col width="271"><col width="72"><col width="148"></colgroup><tbody><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">名称</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;">数值</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">用法描述</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">CameraRotate.AllDir</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="1">1</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">全方向</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">CameraRotate.OnlyYaw</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="2">2</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">仅左右</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">CameraRotate.OnlyPitch</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="3">3</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">仅上下</td></tr><tr><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">CameraRotate.NoTurn</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: center;" data-sheet-value="4">4</td><td style="white-space: pre-wrap; border: 1px solid #1f2329; font-size: 12pt; font-style: normal; font-weight: normal; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; text-align: left;">无法转动</td></tr></tbody></table>

#### 开发者商店页面类型

<table style="border-collapse: collapse;" border="1px"><colgroup><col style="width: 64.5238%;" width="271"><col style="width: 35.2381%;" width="148"></colgroup><tbody><tr style="height: 22px;"><td style="border-style: solid; border-color: #1f2329; white-space-collapse: preserve; font-size: 12pt; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; height: 22px; text-align: left;">名称</td><td style="border-style: solid; border-color: #1f2329; white-space-collapse: preserve; font-size: 12pt; font-weight: 600; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; height: 22px;">用法描述</td></tr><tr style="height: 22px;"><td style="border-style: solid; border-color: #1f2329; white-space-collapse: preserve; font-size: 12pt; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; height: 22px;">MiniShopPage.Item</td><td style="border-style: solid; border-color: #1f2329; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; height: 22px;"><span style="color: #24292e;"><span style="font-size: 12pt; white-space-collapse: preserve;">道具购买</span></span></td></tr><tr style="height: 22px;"><td style="border-style: solid; border-color: #1f2329; white-space-collapse: preserve; font-size: 12pt; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; height: 22px;">MiniShopPage.Skin</td><td style="border-style: solid; border-color: #1f2329; white-space-collapse: preserve; font-size: 12pt; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; height: 22px;">皮肤</td></tr><tr style="height: 22px;"><td style="border-style: solid; border-color: #1f2329; white-space-collapse: preserve; font-size: 12pt; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; height: 22px;">MiniShopPage.Convert</td><td style="border-style: solid; border-color: #1f2329; white-space-collapse: preserve; font-size: 12pt; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; height: 22px;">兑换</td></tr><tr style="height: 22px;"><td style="border-style: solid; border-color: #1f2329; white-space-collapse: preserve; font-size: 12pt; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; height: 22px;">MiniShopPage.Welfare</td><td style="border-style: solid; border-color: #1f2329; white-space-collapse: preserve; font-size: 12pt; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; color: #24292e; height: 22px;">福利</td></tr><tr style="height: 22px;"><td style="border-style: solid; border-color: #1f2329; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; height: 22px;"><span style="color: #24292e;"><span style="white-space-collapse: preserve;">MiniShopPage.MiniVip</span></span></td><td style="border-style: solid; border-color: #1f2329; vertical-align: middle; word-break: break-word; overflow-wrap: break-word; height: 22px;"><span style="color: #24292e;"><span style="font-size: 12pt; white-space-collapse: preserve;">大会员</span></span></td></tr></tbody></table>

### 脚本常见问题

彼得兔 更新时间: 2024-05-22 17:54:44

**在查阅开发者学院中的脚本API时，若有任何问题或建议，欢迎通过问卷进行反馈！[【点我填写问卷】](https://mini1.feishu.cn/share/base/form/shrcnnyvjZ0jo6mOpbg8ttMd75c)**

#### 1.Block中的data在什么地方使用


data使用有具体需求,此处不建议开发者使用。开发者尽可能使用已封装过的没有data的新接口

* * *

#### 2.自定义的Block和Item应该如何获取ID (或 data?)(用于 setBlock、spawnItem 等)


有两种办法可以获取到自定义类型的ID，<1>使用手持触发器去点击获取 <2>依赖相关的触发事件去打印ID 比如，如果是自定义的方块或者生物，可以将其放置在地图里然后用手持触发器去点击获取信息，也可以通过触发相关事件去打印出ID。 代码示例如下：

```
Callback_ClickBlock = function(event_args)
   local blockid = event_args['blockid']
   Chat:sendSystemMsg('点击的方块ID为'..blockid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], Callback_ClickBlock)
```

* * *

#### 3.Block 接口中的 setBlockAllForNotify/setBlockAllForUpdate 方法的参数 flag 需要更多信息


setBlockAllForNotify/setBlockAllForUpdate方法中的flag和data参数对开发者来说都是不可用的，新版wiki描述上已修正

* * *

#### 4.ObjectLib 方法里的 uuid 该如何获取


目前开发者暂时没法直接获取到，我们会在下一版里迭代更新，详情请关注更新通知

* * *

#### 5.World:playSoundEffectOnPos 方法的 soundId 参数需要更多信息


最新一期Wiki会放出soundId\[2\]表，与触发器内的音效库同步

* * *

#### 6.World 类中可否提供一个获取有所有 Actor 的方法，或者历遍其的方法 (非 World:getActorsByBox)


由于游戏机制及效率考虑的原因，此功能不给予提供。但我们会提供触发器生物库的ActorId\[3\]表

* * *

#### 7.Event 需要更详细的用法及参数解释


Event即为开发者事件，是指玩家在游戏内进行了某些操作后触发的对应事件。比如玩家点击了某个方块， 这时就会触发玩家的点击方块事件，即名为"Player.ClickBlock"的事件，开发者只要注册监听该事件就能进行点击方块后的对应操作。 注册监听事件的方法如下：ScriptSupportEvent:registerEvent(\[=\[Player.ClickBlock\]=\], function(event\_args) ... end)。 而开发者事件在进行回调时会传回来一些对应的参数，每个开发者事件对应的参数可参考wiki中的事件系统\[4\]部分。

* * *

#### 8.UI 接口中的 setGBattleUI/setShapeLine/setShapeCircle 方法的参数 name 及 uiname 需要更多信息


1)setGBattleUI方法的参数name是string类型的枚举值，可选值有如下几种情况:

<table style="border-collapse: collapse; width: 61.2485%; height: 432px;" border="1"><tbody><tr><td style="width: 32.948%; text-align: center;"><span style="font-size: 16px;">name</span></td><td style="width: 33.3333%; text-align: center;"><span style="font-size: 16px;">value type</span></td><td style="width: 33.526%; text-align: center;"><span style="font-size: 16px;">value describe</span></td></tr><tr style="text-align: center;"><td style="width: 32.948%;"><span style="font-size: 16px;">'left_title'</span></td><td style="width: 33.3333%;"><span style="font-size: 16px;">string</span></td><td style="width: 33.526%;"><span style="font-size: 16px;">左标题（第1）</span></td></tr><tr style="text-align: center;"><td style="width: 32.948%;"><span style="font-size: 16px;">'right_title'</span></td><td style="width: 33.3333%;"><span style="font-size: 16px;">string</span></td><td style="width: 33.526%;"><span style="font-size: 16px;">右标题（/40）</span></td></tr><tr style="text-align: center;"><td style="width: 32.948%;"><span style="font-size: 16px;">'left_desc'</span></td><td style="width: 33.3333%;"><span style="font-size: 16px;">string</span></td><td style="width: 33.526%;"><span style="font-size: 16px;">左描述（大吉大利，我是第一）</span></td></tr><tr style="text-align: center;"><td style="width: 32.948%;"><span style="font-size: 16px;">'left_little_desc'</span></td><td style="width: 33.3333%;"><span style="font-size: 16px;">string</span></td><td style="width: 33.526%;"><span style="font-size: 16px;">左简述（排名1）</span></td></tr><tr style="text-align: center;"><td style="width: 32.948%;"><span style="font-size: 16px;">'right_little_desc'</span></td><td style="width: 33.3333%;"><span style="font-size: 16px;">string</span></td><td style="width: 33.526%;"><span style="font-size: 16px;">右简述（战胜4）</span></td></tr><tr style="text-align: center;"><td style="width: 32.948%;"><span style="font-size: 16px;">'battle_btn'</span></td><td style="width: 33.3333%;"><span style="font-size: 16px;">boolean</span></td><td style="width: 33.526%;"><span style="font-size: 16px;">比分导航栏面板按钮显示</span></td></tr><tr style="text-align: center;"><td style="width: 32.948%;"><span style="font-size: 16px;">'result'</span></td><td style="width: 33.3333%;"><span style="font-size: 16px;">boolean</span></td><td style="width: 33.526%;"><span style="font-size: 16px;">比赛结果显示</span></td></tr><tr style="text-align: center;"><td style="width: 32.948%;"><span style="font-size: 16px;">'result_bkg'</span></td><td style="width: 33.3333%;"><span style="font-size: 16px;">boolean</span></td><td style="width: 33.526%;"><span style="font-size: 16px;">比赛结果底板显示</span></td></tr><tr style="text-align: center;"><td style="width: 32.948%;"><span style="font-size: 16px;">'reopen'</span></td><td style="width: 33.3333%;"><span style="font-size: 16px;">boolean</span></td><td style="width: 33.526%;"><span style="font-size: 16px;">再来一局按钮显示</span></td></tr></tbody></table>

2)setShapeLine及setShapeCircle这两个接口目前暂时无效果，可不用理会。后面自定义用户界面(Custom UI)完成后可将其替代

* * *

#### 9.UI:ShowScreenEffect 方法的 type 需要更多信息


该接口是用于显示屏幕特效，其中type的值为1表示speedline，2表示powerline，3表示fog

* * *

#### 10.Game:addRenderGlobalEffect 方法的 path 参数需要更多信息


path即为全局特效的路径，目前可用的是path只有"particles/Fog.ent"，详情可参考范例集合\[5\]里面给出的例子

* * *

#### 11.Game:getDefString 方法的 id 需要更多信息


不提倡开发者使用上述接口，鼓励开发者使用自己定义的字符串

* * *

#### 12.Player:setActionAttrState 方法的 actionattr 参数需要更多信息


setActionAttrState是设置玩家特殊属性的状态(例如可移动、可攻击等)的接口，actionattr参数可参考PLAYERATTR\_ENABLE\[6\]

* * *

#### 13.Team 接口中的 teamid 参数需要更多信息


目前我们游戏中最多支持六个队伍，六个队伍的ID及颜色对应如下： 

<table style="border-collapse: collapse; width: 45.8186%; height: 168px;" border="1"><tbody><tr style="height: 21px;"><td style="width: 30.1546%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp; 队伍</span></td><td style="width: 37.8866%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp; 对应颜色</span></td><td style="width: 31.701%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;TeamID</span></td></tr><tr style="height: 21px;"><td style="width: 30.1546%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;队伍1</span></td><td style="width: 37.8866%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;红色</span></td><td style="width: 31.701%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;1</span></td></tr><tr style="height: 21px;"><td style="width: 30.1546%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;队伍2</span></td><td style="width: 37.8866%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;蓝色</span></td><td style="width: 31.701%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;2</span></td></tr><tr style="height: 21px;"><td style="width: 30.1546%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;队伍3</span></td><td style="width: 37.8866%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;绿色</span></td><td style="width: 31.701%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;3</span></td></tr><tr style="height: 21px;"><td style="width: 30.1546%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;队伍4</span></td><td style="width: 37.8866%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;黄色</span></td><td style="width: 31.701%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;4</span></td></tr><tr style="height: 21px;"><td style="width: 30.1546%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;队伍5</span></td><td style="width: 37.8866%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;橙色</span></td><td style="width: 31.701%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;5</span></td></tr><tr style="height: 21px;"><td style="width: 30.1546%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;队伍6</span></td><td style="width: 37.8866%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;紫色</span></td><td style="width: 31.701%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;6</span></td></tr><tr style="height: 21px;"><td style="width: 30.1546%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;观战队</span></td><td style="width: 37.8866%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;无</span></td><td style="width: 31.701%; height: 21px; text-align: center;"><span style="font-size: 16px;">&nbsp;999</span></td></tr></tbody></table>

Team相关接口中，可以teamid使用-1表示全部队伍。玩家或生物如果不设置队伍的话默认teamid是为0，也是无队伍的一种

* * *

#### 14.appendSpeed 接口中的x,y,z参数信息


该接口的参数x,y,z表示设定一个移动距离，需要传入整数。

案例：假设把Z设定为5，当执行一次该接口后，那么objid就会向+z轴移动5格的距离

写法：appendSpeed(objid,0,0,5)

* * *

#### 15.getBlockPowerStatus 接口中的pos的使用方法


假设想判断坐标为（7、7、7）位置的方块通电状态

正确的写法：

```
local pos = {x=7,y=7,z=7}
Block:getBlockPowerStatus(pos)
```

常见错误写法：

```
local pos = {7,7,7}
Block:getBlockPowerStatus(pos)
```

* * *

#### 16.UI接口为什么没有效果？


ui相关的接口暂时不能用，等后续更新。

* * *

#### 17.如何让游戏开始5秒后，每隔5秒生成一批生物？

```
--5秒后开始刷怪 每隔5秒刷一次 坐标(0,7,0) 怪物id3400 生成5只
local function r(e)
    local t=e.second
    if t>5 and (t-20)%5==0 then
        World:spawnCreature(0,7,0,3400,5)
    end
end
ScriptSupportEvent:registerEvent("Game.RunTime",r)
```

* * *

#### 18.游戏坐标(x,y,z)分别指什么？


x：横坐标，y：竖坐标，z：纵坐标；

（x，y，z）代表：坐标（x，z）高度y的位置，如图：

![](https://image.mini1.cn/c/20210227/7c85d0cd4c0cf394dafd00629e6c94ab.png)

* * *

#### 19.如何查看某个方块的坐标？


```
--点击方块显示坐标
local function f2(e)
    local x,y,z=math.floor(e.x),math.floor(e.y),math.floor(e.z)
    Chat:sendSystemMsg("( "..x.." , "..y.." , "..z.." )")
    print(x,y,z)
end
ScriptSupportEvent:registerEvent('Player.ClickBlock',f2)
```

* * *

#### 20.输出的聊天框消息为什么会是星号(\*)？


数字太多会被屏蔽，可以使用print输出，然后打开“测试”，在运行日志里查看：

![](https://image.mini1.cn/c/20210227/03d9e489723fee91194636413b984d58.png)

* * *

#### 21.可以自定义NPC的AI吗？


目前没有相关接口。可以使用插件里自带的一些AI。

* * *

#### 22.为什么生成方块接口那么卡？


不要一次性生成太多方块，不同设备性能不同，一般尽量不要超过100。

* * *

#### 23.如何修改玩家的血量和饱食度？或者跳跃高度、移动速度等属性？


使用Player:setAttr(uid,attr,value)接口。

* * *

#### 24.如何不允许玩家放置某种特定方块？

```
--不允许放置的方块id为1
local function f3(e)
    if e.blockid==1 then
        Block:destroyBlock(e.x,e.y,e.z)
    end
end
ScriptSupportEvent:registerEvent('Block.PlaceBy',f3)
```

* * *

#### 25.为什么我用脚本生成的生物，离一定距离的话，隔段时间就消失了？


这是bug，已经提交修复，等待后续更新。

* * *

#### 26.如何在游戏开始30秒后，从(0,7,0)到(15,10,15)范围内随机生成一些生物？


```
--30:游戏开始30秒后 (0,7,0)和(15,10,15):生成范围 {{3400,5},{3401,6},{3402,7}}:生成的生物id和数量
local st=30
local x0,y0,z0=0,7,0
local x1,y1,z1=15,10,15
local actors={{3400,5},{3401,6},{3402,7}}
local function r(e)
    local t=e.second
    if t==st then
        local i=0
        for i=1,#actors do
            World:spawnCreature(math.random(x0,x1),math.random(y0,y1),math.random(z0,z1),actors[i][1],actors[i][2])
        end
    end
end
ScriptSupportEvent:registerEvent("Game.RunTime",r)
```

* * *

#### 27.如何更改玩家模型？


修改状态插件，在“效果”里选择“更改玩家模型”。需要改模型的时候使用Actor:addBuff(objid,buffid,bufflv)接口给玩家添加这个状态即可。

* * *

#### 28.能否让玩家在某个区域范围内，自动向前加速？


```
local x0,y0,z0=0,7,0
local x1,y1,z1=15,10,15
local function r()
    local r,n,ps=World:getAllPlayers(1)
    local i=0
    for i=1,n do
        local r2,x,y,z=Player:getPosition(ps[i])
        if x>x0 and x<x1 and y>y0 and y<y1 and z>z0 and z<z1 then
            local r3,dx,dy,dz=Actor:getFaceDirection(ps[i])
            Actor:appendSpeed(ps[i],dx/math.abs(dx+dz),0,dz/math.abs(dx+dz))
        end
    end
end
ScriptSupportEvent:registerEvent("Game.Run",r)
```

* * *

#### 29.如何查看生物id？


```
--点击生物，输出id
local function c(e)
    local r,id=Creature:getActorID(e.toobjid)
    Chat:sendSystemMsg(id)
end
ScriptSupportEvent:registerEvent('Player.ClickActor',c)
```

* * *

#### 30.如何清空玩家背包？


使用Backpack:clearAllPack(uid)接口。

* * *

#### 31.为什么使用Player:setPosition(uid,x,y,z)接口，玩家会卡在虚空无法移动？


如果设置的坐标距离过远，不在玩家加载的区块范围内（视野范围），就会导致玩家卡在虚空。可以使用“复活玩家到指定坐标”代替，即Player:reviveToPos(uid,x,y,z)接口。

* * *

#### 32.如何修改生物属性，比如血量、速度等？


使用Creature:setAttr(objid,attr,value)接口。

* * *

#### 33.如何等待1秒后继续执行？


```
threadpool:wait(1)
```

* * *

#### 34.如何在指定位置生成生物？


使用World:spawnCreature(x,y,z,actorid,num)接口。

* * *

#### 35.如何攻击生物时，在生物头顶显示剩余血量？


```
local function Eath(e)
    local p,a=e.eventobjid,e.toobjid
    local r=Actor:isPlayer(a)
    if r~=0 then
        local r1,maxhp=Creature:getAttr(a,1)
        local r2,hp=Creature:getAttr(a,2)
        Actor:shownickname(a,true)
        Actor:setnickname(a,"#G"..math.floor(hp).."#R/"..math.floor(maxhp))
    end
end
ScriptSupportEvent:registerEvent('Player.AttackHit',Eath)
```

* * *

#### 36.能否监听玩家放置生物蛋的事件？


可以，玩家放置生物蛋会触发“生物生成”事件。

* * *

#### 37.如何实现玩家长按Shift加速？


监听“长按按键事件”，判断事件中的按键如果是Shift，就增加玩家速度。

* * *

#### 38.如何获取玩家手持道具的id？


使用Player:getCurToolID(uid)接口。

* * *

#### 39.为什么计时器窗口会消失？


打开背包后计时器的文字会消失，目前不能解决。可以把显示计时器放在“游戏运行”事件里。

* * *

#### 40.如何设置玩家坐标？


使用Actor:setPosition(objid,x,y,z)或Player:setPosition(objid,x,y,z)接口。

* * *

#### 41.能否在游戏运行中更改地图游戏人数上限？


不能。但是可以监听玩家进入游戏事件，然后判断当前游戏人数是否大于某个值，是的话就传送玩家到地图外面。

* * *

#### 42.能否把玩家踢出游戏？


可以设置玩家游戏结果为负，或者在“游戏运行”事件里设置玩家坐标的高度为负，让玩家在地图下方无法移动。

* * *

#### 43.为什么设置了方块无法被破坏，但还是会被炸掉？


目前“方块无法被破坏”无法避免炸弹、激光等的破坏，只能在插件设置方块抗性为-1，或者监听方块被破坏事件，破坏后重新生成。

* * *

#### 44.玩家离开一定距离后，NPC会消失，这个bug可以解决吗？


已经提交，等待后续更新。目前可以改成“玩家进入区域，生成NPC；玩家离开区域，移除NPC”来代替。

* * *

#### 45.如何改变生物模型？


目前没有这种接口。只能先移除再创建。

* * *

#### 46.能否获取整个地图的生物数量？


无法获取整个地图的，但是可以获取指定区域的生物数量。

* * *

#### 47.如何清除某个生物？


使用World:despawnCreature(objid)或Actor:killSelf(objid)接口。

* * *

#### 48.能否获取指定坐标上的生物id？


不能从坐标获取生物。可以从范围获取，获取到的是整个区域内的生物。

* * *

#### 49.如何让生物出现几秒后消失，如何再出现，一直循环？


```
as={}
function r2(e)
    if e.second%4==0 then
        _,as=World:spawnCreature(0,7,0,3400,5)
    elseif e.second%4==2 then
        for _,a in pairs(as) do
            World:despawnActor(a)
        end
    end
end
ScriptSupportEvent:registerEvent([=[Game.RunTime]=],r2)
```

* * *

#### 50.能否移除家园宠物？

```
local function depet(e)
    local p,a=e.eventobjid,e.toobjid
    if Actor:isPlayer(p)==1001 then a=p end
    local _,id=Creature:getActorID(a)
    if id>10000 then
        World:despawnActor(a)
    end
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],depet)
ScriptSupportEvent:registerEvent([=[Actor.Collide]=],depet)
```

* * *

#### 51.如何设置生物的队伍？  



```
--玩家点击生物，设置生物队伍
--当点击生物时会执行此函数
local function Player_ClickActor(event)
	--设置生物所属的队伍
	--第一个参数为要设置的生物在存档中的id
	--第二个参数为要设置为的队伍id
	Creature:setTeam(event.toobjid,1)
	--在聊天框显示
	Chat:sendSystemMsg("objid为"..event.toobjid.."的生物被设置到了队伍1")
end
--注册监听器，点击生物时执行Player_ClickActor函数
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],Player_ClickActor)
```