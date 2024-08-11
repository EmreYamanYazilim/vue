<template>
    <form action="#">
        <div class="container">
            <div class="container-inner">
                <div class="form-header"> <!-- bu alan ise Css için yakalamak için kullanacağım alan-->
                    <slot name="form-header"></slot>
                    <!-- bu Alan name yeri  App vue içine veri atmak için  template içinde dies ile yazılanalandır #form-header -->
                </div>
                <div class="form-elements">
                    <div class="form-elements-inner">
                        <slot name="form-elements" </slot>
                    </div>
                </div>

                <div class="form-controls">
                    <div class="form-controls-inner">
                        <slot name="form-controls"></slot>
                    </div>
                </div>
                <div class="useful-links">
                    <ul>
                        <li><a href="#">1 link</a></li>
                        <li><a href="#">2 link</a></li>
                        <li><a href="#">3 link</a></li>
                        <li><a href="#">4 link</a></li>
                        <li><a href="#">5 link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </form>
</template>
<style scoped>
.cotaniner {
    widows: 100%;
    margin: 0 auto;
}

.container-inner {
    width: 50%;
    margin: 0 auto;
    border: 1px solid #e2e2e2;
    padding: 15px;
}

.form-header {
    text-align: center;
    border-bottom: 1px solid #e2e2e2;
    margin-top: 35px;
}

.form-elements {
    display: flex;
    justify-content: center;
    margin-top: 35px;
}

.form-elements-inner {
    width: 50%;
}
/*  Önemli NOTTTT !!! 
input button buna benzer form elamanları event tetikleyen elemanlar  slot olduğunu anlayabilmesi için
bunu belirtmemiz gerekiyor  bunun içinde inputu yazmadan önce 
:sloted() parantez içinde yazarak Css kodlarımızı yazmalıyız
alt-bilesende.vue'de :slotted  yazacağız  eğerki App.vue içinde style içinde bu işlemi yapacak olsakalt-bilesen tagı içindede
dışındada yazmış olsakta  App.vue içindeki Style bölümünde sadece  alt bileşenden gelenleri etkilemesi için özel olarak :slotted
yazdığımız gibi  App içinde  :deep(input){}  yazıyoruz ki  sadece alt bilşenlerdeki cssleri etkilesin  yoksa 
alt bileşenler dışında yazılan yerlerdede Css olarak etkiler

*/
:slotted(input) {
    width: 100%;
    border: 1px solid #e2e2e2;
    height: 35px;
    border-radius: 5px;
    padding-left: 15px;
}
:slotted(button){
    height: 35px;border: 1px solid #e2e2e2;
    padding: 0 15px;
}

.form-controls {
    display: flex;
    justify-content: center;
    text-align: right;
    margin: 15px;
}

.form-controls-inner {
    width: 50%;
}

.useful-links {
    display: flex;
    justify-content: center;
    border-top: 1px solid #e2e2e2;
}

.useful-links ul {
    font-size: 20px;
    list-style-type: none;
    margin: 15px 0 0 0;
}

.useful-links ul li {
    float: left;
    margin-right: 5px;
}

.useful-links ul li a {
    text-decoration: none;
    color: #666;
    padding: 0 11px;

}

.useful-links ul li a:hover {
    color: #000;
    border-left: 1px solid;
    border-right: 1px solid;
    padding: 0 11px;
}
</style>