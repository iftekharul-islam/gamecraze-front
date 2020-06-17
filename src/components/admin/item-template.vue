<template>
    <div>
        <span>{{ item.name }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            item: { required: true },
        }
    }
</script>

<style scope>
    .vue-suggestion .vs__list {
        width: 100%;
        text-align: left;
        border: none;
        border-top: none;
        max-height: 400px;
        overflow-y: auto;
        border-bottom: 1px solid #023d7b;
        position: relative;
    }
    .vue-suggestion .vs__list .vs__list-item {
        background-color: #fff;
        padding: 10px;
        border-left: 1px solid #023d7b;
        border-right: 1px solid #023d7b;
    }
    .vue-suggestion .vs__list .vs__list-item:last-child {
        border-bottom: none;
    }
    .vue-suggestion .vs__list .vs__list-item:hover {
        background-color: #eee !important;
    }
    .vue-suggestion .vs__list,
    .vue-suggestion .vs__loading {
        position: absolute;
    }
    .vue-suggestion .vs__list .vs__list-item {
        cursor: pointer;
    }
    .vue-suggestion .vs__list .vs__list-item.vs__item-active {
        background-color: #f3f6fa;
    }
</style>