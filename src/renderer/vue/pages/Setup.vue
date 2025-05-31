<template>
    <v-container class="pa-4 d-flex ga-4 flex-column align-self-center h-100">
        <v-stepper v-model="step" class="h-100">
            <v-stepper-header>
                <v-stepper-item class="text-body-2 align-left" v-for="(s, i) in steps" :key="i" :value="i"
                    :title="s.name">
                    <v-stepper-subtitle class="text-caption ml-0 pl-0" v-show="s.skipable">{{ t('optional')
                        }}</v-stepper-subtitle>
                </v-stepper-item>
            </v-stepper-header>

            <v-stepper-window class="">
                <component :is="steps[step].card" class="" />

                <div class="d-flex ga-2 justify-end">
                    <v-btn text :disabled="step === 0" @click="step--" class="mr-auto" prepend-icon="mdi-arrow-left">
                        {{ t('back') }}
                    </v-btn>
                    <v-btn color="secondary" variant="outlined" @click="next(true)"
                        :disabled="step === steps.length - 1" v-show="steps[step].skipable" append-icon="mdi-skip-next">
                        {{ t('skip') }}
                    </v-btn>
                    <v-btn color="primary" variant="outlined" @click="next(false)" :disabled="step === steps.length - 1"
                        append-icon="mdi-arrow-right" class="border-primary-md">
                        {{ t('next') }}
                    </v-btn>
                </div>
            </v-stepper-window>
        </v-stepper>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ChooseDest from './steps/ChooseDest.vue';
import { useI18n } from 'vue-i18n';

const step = ref(0);
const { t } = useI18n();

interface Step {
    name: string,
    card: any,
    skipable: boolean,
}

const steps: Step[] = [
    {
        name: t('dest'),
        card: ChooseDest,
        skipable: false
    },
    {
        name: t('env'),
        card: null,
        skipable: true
    },
];

const next = (isSkip: boolean) => {
    if (step.value < steps.length - 1) step.value++
}
</script>

<style lang="css" scoped>
</style>