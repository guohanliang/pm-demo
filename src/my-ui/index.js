
import LeftComponent from './left/LEFT.vue'
import NavComponent from './nav/NAV.vue'
import RightComponent from './righttop/RIGHTTOP.vue'
import RightcenterComponent from './rightcenter/RIGHTCENTER.vue'
import RightbiaoComponent from './rightbiao/RIGHTBIAO.vue'
import PagingComponent from './paging/PAGING.vue'
import TabComponent from './tab/TAB.vue'
import MsgbiaoComponent from './msgbiao/MSGBIAO.vue'
import SelectComponent from './select/SELECT.vue'
import BiaotiComponent from './biaoti/BIAOTI.vue'
import ZhaiyaoComponent from './zhaiyao/ZHAIYAO.vue'
import BianjiComponent from './bianji/BIANJI.vue'
import UeditorComponent from './ueditor/UEDITOR.vue'
import FujianComponent from './fujian/FUJIAN.vue'
import ShenpiComponent from './shenpi/SHENPI.vue'


import DzcxComponent from './DZCX.vue'
import DzgyComponent from './DZGY.vue'
import GrywComponent from './GRYW.vue'
import HzcxComponent from './HZCX.vue'
import MxcxComponent from './MXCX.vue'
import MzgzComponent from './MZGZ.vue'
import QyfwComponent from './QYFW.vue'
import XtcsComponent from './XTCS.vue'
import YwcsComponent from './YWCS.vue'
import ZylxComponent from './ZYLX.vue'



const Left={
  install:(Vue)=>{
    Vue.component('my-left',LeftComponent)
  }
}

const Nav={
  install:(Vue)=>{
    Vue.component('my-nav',NavComponent)
  }
}

const Righttop={
    install:(Vue)=>{
    Vue.component('my-righttop',RightComponent)
  }
}

const Rightcenter={
    install:(Vue)=>{
    Vue.component('my-rightcenter',RightcenterComponent)
  }
}

const Rightbiao={
    install:(Vue)=>{
    Vue.component('my-rightbiao',RightbiaoComponent)
  }
}

const Paging={
    install:(Vue)=>{
    Vue.component('my-paging',PagingComponent)
  }
}

const Tab={
    install:(Vue)=>{
    Vue.component('my-tab',TabComponent)
  }
}

const Msgbiao={
  install:(Vue)=>{
    Vue.component('my-msgbiao',MsgbiaoComponent)
  }
}

const Select={
  install:(Vue)=>{
    Vue.component('my-select',SelectComponent)
  }
}

const Biaoti={
  install:(Vue)=>{
    Vue.component('my-biaoti',BiaotiComponent)
  }
}

const Zhaiyao={
  install:(Vue)=>{
    Vue.component('my-zhaiyao',ZhaiyaoComponent)
  }
}

const Bianji={
  install:(Vue)=>{
    Vue.component('my-bianji',BianjiComponent)
  }
}

const Ueditor={
  install:(Vue)=>{
    Vue.component('my-ueditor',UeditorComponent)
  }
}

const Fujian={
  install:(Vue)=>{
    Vue.component('my-fujian',FujianComponent)
  }
}

const Shenpi={
  install:(Vue)=>{
    Vue.component('my-shenpi',ShenpiComponent)
  }
}

const Dzcx={
  install:(Vue)=>{
    Vue.component('my-dzcx',DzcxComponent)
  }
}

const Dzgy={
  install:(Vue)=>{
    Vue.component('my-dzgy',DzgyComponent)
  }
}

const Gryw={
  install:(Vue)=>{
    Vue.component('my-gryw',GrywComponent)
  }
}

const Hzcx={
  install:(Vue)=>{
    Vue.component('my-hzcx',HzcxComponent)
  }
}

const Mxcx={
  install:(Vue)=>{
    Vue.component('my-mxcx',MxcxComponent)
  }
}

const Mzgz={
  install:(Vue)=>{
    Vue.component('my-mzgz',MzgzComponent)
  }
}

const Qyfw={
  install:(Vue)=>{
    Vue.component('my-qyfw',QyfwComponent)
  }
}

const Xtcs={
  install:(Vue)=>{
    Vue.component('my-xtcs',XtcsComponent)
  }
}

const Ywcs={
  install:(Vue)=>{
    Vue.component('my-ywcs',YwcsComponent)
  }
}

const Zylx={
  install:(Vue)=>{
    Vue.component('my-zylx',ZylxComponent)
  }
}

export {Left,Nav,Righttop,Rightcenter,Rightbiao,Paging,Tab,Msgbiao,Select,Biaoti,Zhaiyao,Bianji,Ueditor,Fujian,Shenpi,Dzcx,Dzgy,Gryw,Hzcx,Mxcx,Mzgz,Qyfw,Xtcs,Ywcs,Zylx}
