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
                    <li>{{ t('env-apps') }}</li>
                    <ul>
                        <li>{{ t('java') }}</li>
                        <li>{{ t('graal') }}
                            <MssTooltips :msg="t('graal-tips')" />
                        </li>
                        <li>{{ t('ahk') }}
                            <MssTooltips :msg="t('ahk-tips')" />
                        </li>
                        <li>{{ t('obs') }}</li>
                    </ul>
                    <li>{{ t('instance') }}</li>
                    <ul>
                        <li>{{ t('fabric') }}
                            <MssTooltips :msg="t('fabric-tips')" />
                        </li>
                        <li>{{ t('mods') }}</li>
                        <ul>
                            <li><a @click="openLink('https://mods.tildejustin.dev/')">{{ t('mod-list') }}</a></li>
                        </ul>
                        <li>{{ t('ins-setting') }}</li>
                    </ul>
                    <li>{{ t('external') }}</li>
                    <ul>
                        <li>{{ t('jingle') }}
                            <MssTooltips :msg="t('jingle-tips')" />
                        </li>
                        <li>{{ t('ninb') }}
                            <MssTooltips :msg="t('ninb-tips')" />
                        </li>
                    </ul>
                    <li>{{ t('practice') }}</li>
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
import { useLocaleStore } from '@renderer/stores/LocaleStore';
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@renderer/utils/NaviUtils';
import { useLayout, useComponent } from '@renderer/utils/ComponentUtils';
import { modalService } from '@renderer/services/ModalService';
import Info from '@renderer/components/contents/Info.vue';

const { MssPage } = useLayout();
const { MssIcon, MssLangSelector, MssIconButton, MssWideButton, MssTooltips } = useComponent();
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