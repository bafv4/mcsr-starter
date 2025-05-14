<template>
    <div v-html="renderedHtml" class="markdown-body scrollable"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import MarkdownIt from 'markdown-it';

const props = defineProps<{
    src: string
}>();

const renderedHtml = ref('');
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

const loadMarkdown = async () => {
    try {
        const res = await fetch(props.src);
        const text = await res.text();
        renderedHtml.value = md.render(text);
    } catch (err) {
        renderedHtml.value = '<p style="color: red">Markdownの読み込みに失敗しました。</p>';
    }
}

onMounted(loadMarkdown);
watch(() => props.src, loadMarkdown);
</script>

<style lang="scss">
.markdown-body {
    display: block;
}

.markdown-body ul,
.markdown-body ol {
    margin-top: 0;
    margin-left: 2em;
    margin-bottom: .5em;
}

/* 入れ子リストのスタイル */
.markdown-body ul ul,
.markdown-body ol ol {
    margin-left: 1.5em;
    list-style-type: circle;
}

.markdown-body li {
    margin: 0.3em 0;
}
</style>