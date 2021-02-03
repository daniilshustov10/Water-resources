<template>
     <ul class="sidenav app-sidenav" :class="{open: value}">

        <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
        >
            <a href="#" class="waves-effect waves-light pointer">{{ link.title }}</a>
        </router-link>

    </ul>
</template>

<script>
export default {
    props: ['value'],
    data: () => ({
        links: [
            {title: 'Планирование задач', url: '/', exact: true},
            {title: 'Текущие задачи', url: '/tasks'},
            {title: 'Проектная документация', url: '/documentation'},
            {title: 'Управление', url: '/management'}
        ]
    })
}
</script>