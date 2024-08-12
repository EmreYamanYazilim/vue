<template>
    <alt-bilesen>
        <template #form-header>
            <h2>
                Giriş Formu 1
            </h2>
            <p>Giriş yapabilmek için lütfen formu doldurun</p>
        </template>

        <template #form-elements>
            <label for="email">E-mail : </label>
            <input type="email" name="email" placeholder="E posta Adersinizi Giriniz">

            <label for="password">Şifre : </label>
            <input type="password" name="password" id="" placeholder="Şifrenizi Giriniz">
        </template>

        <template #form-controls>
            <button>Giriş Yap</button>
        </template>
    </alt-bilesen>
</template>

<script>
import altBilesen from './alt-bilesen.vue'

export default {
    components: {
        "alt-bilesen": altBilesen
    },
    data() {
        return {

        }
    },
}

</script>