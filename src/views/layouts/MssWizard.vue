<script lang="ts" setup>
</script>

<!-- ** MssWizard: インストーラ風レイアウトのコンポーネント ** -->
<template>
    <div id="layout">
        <div id="main-pane">
            <slot name="main"></slot>
        </div>
        <div id="btn-pane">
            <slot name="btn"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// 親
div#layout {
    display: grid;
    grid-template-rows: 1fr max-content;
    grid-template-areas: "main-pane" "btn-pane";
    min-height: 100%;
    margin: 0;
    padding: 0;
}

// メイン
div#main-pane {
    grid-area: main-pane;
    width: 100%;
}

// 下部(ボタンエリア)
div#btn-pane {
    grid-area: btn-pane;
    display: flex;
    flex-wrap: nowrap;
    justify-content: end;
    gap: 1rem;
    width: 100%;
    padding: .25rem 1rem;
}
</style>