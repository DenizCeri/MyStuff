new Vue ({
    el: '#app',
    data: { 
        person: {
            name: 'Günter',
            height: 185,
        },
        website: 'http://google.com/',
        atag: '<a href="http://google.com/">Testing Html</a>'    
    },
    methods:{
        sayHi: function(greeting){
            return greeting +' ' + this.person.name;
        },
    },
});