<template>
    <div>
        <input class="line disabled-bold form-control form-control-sm is-valid phone-input"
               type="tel"
               :value="value"
               @input="change"
               placeholder="+7 (xxx) xxx xx xx"
               :class="{'is-invalid': !valid}"
               required>
    </div>
</template>

<script>

export default {
    name: "VPhoneInput",
    props: {
        value: {
            type: [Date, String],
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        valid: {
            type: [Boolean, Object],
            default: true
        },
        validationData: {
            type: Object,
            default: () => {
            }
        },
        state: null,
        required: {
            type: Boolean,
            default: false
        },
        nonValidated: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: 'Ошибка заполнения данных'
        }
    },
    mounted() {
        let selector = document.getElementsByClassName('phone-input');
        this.bindPhoneMask(selector);
    },
    methods: {
        change(value) {
            if (!value) return;
            let val = value;
            if (val[0] === '8') {
                val = val.replace('8', '+7');
            }
            if (val.replace(/[^0-9]+/g, '') === '789') {
                val = '79';
            }
            this.$emit('input', val);
        },
        bindPhoneMask(inputElement, regexMask = null, placeholder = null) {
            if (!regexMask) regexMask = '^\\+7 \\([3489]\\d\\d\\) \\d\\d\\d \\d\\d \\d\\d$';
            if (!placeholder) placeholder = '+7 (xxx) xxx-xx-xx';
        }
    }
}
</script>

<style scoped>
input{
    width: 98%;
    padding: 8px 0 7px 8px;
}
</style>