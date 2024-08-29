<template>
    <div class="chat-window">
        <div v-if="error" class="error">
            {{ error }}
        </div>
        <h1>yazışma bölümü</h1>
        <div v-if="documents" class="messages">
            <div v-for="document in documents" :key="document.id" class="single">
                <!-- <span class="created-at">{{ document.createdAt.toDate() }}</span> -->
                <!-- Tarih saat bölümünü Tr göre ayarladım-->
                <span class="created-at">
                    {{ document.createdAt.toDate().toLocaleDateString('tr-TR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    }) }},
                    {{ document.createdAt.toDate().toLocaleTimeString('tr-TR', {
                        hour: '2-digit',
                        minute: '2-digit'
                    }) }}
                </span>
                <br>
                <span class="name">{{ document.name }} : </span>
                <span class="message"> {{ document.message }}</span>
            </div>
        </div>
    </div>

</template>

<script>
import getCollection from '@/composables/getcollection';


export default {
    setup() {
        const { error, documents } = getCollection("messagesPath")


        return { error, documents }
    }
}
</script>

<style>
h1 {
    color: #333;
    text-align: center;
    margin: 0 auto;
    border-bottom: #999 solid 1px;
    padding-bottom: 10px;
}

.chat-window {
    background: #fafafa;
    padding: 30px 20px;
    text-align: left;
}

.single {
    margin: 18px 0;
    border-bottom: #999 solid 1px;


}

.created-at {
    display: block;
    color: #999;
    font-size: 11px;
    margin-bottom: 5px;
}

.name {
    font-weight: bold;
    margin-right: 7px;
}

.messages {
    max-height: 400px;
    overflow: auto;
}
</style>