<template>
    <div>
        <div class="app-main-layout"> 

        <Navbar @click="isOpenSidebar = !isOpenSidebar"/>
        <Sidebar v-model="isOpenSidebar" />

        <main class="app-content" :class="{full: !isOpenSidebar}">
            <div class="app-page">
                <router-view />
            </div>
        </main>
   
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default {
    data: () => ({
        isOpenSidebar: true
    }),
    components: {
        Navbar,
        Sidebar
    }    
}
</script>