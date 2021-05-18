<template lang="html">
  <div class="message">
    <div class="messageBox" :style="boxStyle">
      {{title}}
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Prop } from 'vue-property-decorator'
export default class Message extends Vue {
  @Prop() private title !: string;
  private boxStyle : any = {display:'none',opacity:'0',transform:'translateY(-50px)'};
  openBox() : void {
    console.log(this.title)
    this.boxStyle = {display:'block',opacity:'0',transform:'translateY(-50px)'};
    setTimeout(() :void => {
      this.boxStyle = {display:'block',opacity:'1',transform:'translateY(0px)'};
    },100);
    setTimeout(() :void => {
      this.boxStyle = {display:'block',opacity:'0',transform:'translateY(-50px)'};
      setTimeout(() :void => {
        this.boxStyle = {display:'none',opacity:'0',transform:'translateY(-50px)'};
      },300)
    },3000)
  }

}
</script>

<style lang="scss" scoped>
.message{
  .messageBox{
    color:red;
    width:200px;
    height:40px;
    font-size: 16px;
    margin:0 auto;
    line-height: 40px;;
    background: blue;
    border-radius: 8px;
    transition:.3s all;
  }
}
</style>
