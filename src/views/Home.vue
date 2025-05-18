<template>
    <div class="head">
        <MssIconButton icon="info" @click="openInfo" />
        <MssLangSelector class="lang-selector" />
    </div>

    <div class="scrollable">
        <MssPage>
            <h1 class="first">
                <MssIcon class="home-icon" icon="Home" />
                <span class="home-title">{{ t('home') }}</span>
            </h1>
            <div class="content">
                <h2>{{ t('setup') }}</h2>
                <p>{{ t('home-setup-s1') }}</p>
                <p>{{ t('home-setup-s2') }}</p>
                <p>{{ t('home-setup-s3') }}</p>
                <ul>
                    <li>{{ t('home-setup-d1') }}</li>
                    <ul>
                        <li>{{ t('home-setup-d1-jav') }}</li>
                        <li>{{ t('home-setup-d1-gra') }}
                            <MssTooltips :msg="t('sd1-gra-tips')" />
                        </li>
                        <li>{{ t('home-setup-d1-obs') }}</li>
                        <li>{{ t('home-setup-d1-ins') }}</li>
                        <li>{{ t('home-setup-d1-fab') }}
                            <MssTooltips :msg="t('sd1-fab-tips')" />
                        </li>
                        <li>{{ t('home-setup-d1-ahk') }}
                            <MssTooltips :msg="t('sd1-ahk-tips')" />
                        </li>
                    </ul>
                    <li>{{ t('home-setup-d2') }}</li>
                    <ul>
                        <li><a @click="openLink('https://mods.tildejustin.dev/')">{{ t('home-setup-d2-lis') }}</a></li>
                    </ul>
                    <li>{{ t('home-setup-d3') }}</li>
                    <li>{{ t('home-setup-d4') }}</li>
                    <ul>
                        <li>{{ t('home-setup-d4-jin') }}
                            <MssTooltips :msg="t('sd4-jin-tips')" />
                        </li>
                        <li>{{ t('home-setup-d4-nin') }}
                            <MssTooltips :msg="t('sd4-nin-tips')" />
                        </li>
                    </ul>
                    <li>{{ t('home-setup-d5') }}</li>
                </ul>
            </div>
            <MssWideButton @click="to('/dest/')">{{ t('setup') }}</MssWideButton>
            <div class="content">
                <h2>{{ t('tools') }}</h2>
                <p>{{ t('home-tools-s1') }}</p>
            </div>
            <!-- <MssWideButton @click="to('/env/')">{{ t('tools') }}</MssWideButton> -->
        </MssPage>
    </div>
</template>

<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale-store';
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@/utils/navi-utils';
import { useLayout, useComponent } from '@/utils/component-utils';
import { modalService } from '@/services/modal-service';
import Info from '@/components/contents/Info.vue';

const { MssPage } = useLayout();
const { MssIcon, MssLangSelector, MssIconButton, MssModal, MssWideButton, MssTooltips } = useComponent();
const { t, locale } = useI18n();
const { to, openLink } = useNavigator();
const localeStore = useLocaleStore();

localeStore.setLanguage('ja');
locale.value = 'ja';

const openInfo = () => {
    modalService.show({
        content: Info,
        closable: true,
    });
};
</script>

<style lang="scss" scoped>
.head {
    display: inline-block;
    display: flex;
    position: fixed;
    gap: .25rem;
    top: 1rem;
    right: 2rem;
    vertical-align: middle;
    font-size: 1rem;
    z-index: 128;
}

// main
.home-icon {
    vertical-align: middle;
    padding-right: .25em;
    font-size: 1.8rem;
}

.home-title {
    vertical-align: middle;
}
</style>