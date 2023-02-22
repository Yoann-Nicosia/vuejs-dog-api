new Vue({
    el : "#app",
    data:{
        source:"",
        alt:"",
    },
    methods:{
        getUrl:function(){
            fetch("https://api.thedogapi.com/v1/images/search")
            .then(result => {return result.json()})
            .then((data) =>
                this.source = data[0].url,
                // this.source = data[0].alt
            )
        }
    }
})