<template>
    <nav>
        <ul>
            <li><a href="/">Blogları göster</a></li>
            <li><a href="/ekle">Ekle</a></li>
            <!-- şimdi yukarıdaki link yollama ile sayfalar arası geçiş yapıyormuş gibi gözüküyor ama altta başka bir yöntemle o alık duraksama olmadna direk sayfa değiştiriyor -->
             <li><router-link to="/">Routerlink blog göster</router-link></li>
             <li><router-link to="/ekle">RouterlinkTo ekle</router-link></li>

        </ul>
    </nav>
</template>

<style scoped>

ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
    padding: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
    padding: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;    
}
.router-link-active{  
    background: #eee;
    color: #e40a0a;
}


</style>
