//registering component
AFRAME.registerComponent("log",{
    schema:{
message:{type:"string",default:"HELLO  WORLD"}
    },
init:function(){
console.log(this.data.message)
},
})