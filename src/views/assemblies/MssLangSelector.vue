<template>
    <div class="wrapper" ref="dropdownRef">
        <MssIconButton icon="translate" @click="toggle"></MssIconButton>
        <transition name="fade-slide">
            <div v-if="open" class="dropdown-menu">
                <ul>
                    <li v-for="lang in languages" :key="lang.code">
                        <button @click="selectLang(lang.code)" :class="{ active: lang.code === locale }">
                            <MssIcon class="material-symbols-outlined check" icon="Check" />
                            <span class="lang-name">{{ lang.name }}</span>
                        </button>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAssembly } from '@/views/assemblies/useAssembly';

const { MssIconButton, MssIcon } = useAssembly();
const { locale } = useI18n();
const dropdownRef = ref<HTMLElement | null>(null);
const open = ref(false);
const toggle = () => (open.value = !open.value);

const languages = [
    { code: 'ja', name: '日本語' },
    { code: 'en', name: 'English' },
    // 必要に応じて追加
];

const selectLang = (code: string) => {
    locale.value = code;
    open.value = false;
};

const onClickOutside = (e: MouseEvent) => {
    if (
        open.value &&
        !dropdownRef.value.contains(e.target as Node)
    ) {
        open.value = false;
    }
};

onMounted(() => {
    window.addEventListener('click', onClickOutside);
});
onBeforeUnmount(() => {
    window.removeEventListener('click', onClickOutside);
});
</script>

<style lang="scss" scoped>
.dropdown-menu {
    margin-top: 0;
    background: $bg-color;
    border: 1.5px solid $secondary-color;
    border-radius: 4px;
    min-width: 128px;
    box-shadow: 0px 1px 7px 2px $shadow-color;
    z-index: 1000;
    position: absolute;
    right: 0;
    padding: .25rem;
}

.dropdown-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropdown-menu li button {
    margin: 0;
    width: 100%;
    height: 2.5rem;
    padding-left: .5em;
    border-radius: 2px;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    color: $font-color;
    vertical-align: middle;
    transition: all .25s;
}

.dropdown-menu li button .lang-name {
    vertical-align: middle;
}

.dropdown-menu li button:hover {
    background-color: $highlight-bg-color;
}

.dropdown-menu li button span.check {
    display: inline-block;
    color: transparent;
    font-size: 1.2rem;
    margin: 0 !important;
    padding: 0 !important;
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
}

.dropdown-menu li button.active {
    color: $primary-color-clarity;
    font-weight: bold;
}

.dropdown-menu li button.active span.check {
    color: $primary-color-clarity;
}

/* アニメーション */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>