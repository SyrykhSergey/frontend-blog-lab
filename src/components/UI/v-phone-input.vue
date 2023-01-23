<template>
    <div class="phone">
        <input class="line disabled-bold form-control form-control-sm is-valid phone-input"
               type="tel"
               @input="change"
               v-model="phoneValue"
               placeholder="+7 (xxx) xxx-xx-xx"
               :class="{'is-invalid': !valid}">
    </div>
</template>

<script>
import Inputmask from "inputmask";

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
    data(){
        return{
            phoneValue: ''
        }
    },
    watch:{
        phoneValue(value){
            if(this.phoneValue != ''){
                this.$emit('newNumber', value)
            }
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
            console.log(this.value)
        },
        bindPhoneMask(inputElement, regexMask = null, placeholder = null) {
            if (!regexMask) regexMask = '^\\+7 \\([3489]\\d\\d\\) \\d\\d\\d-\\d\\d-\\d\\d$';
            if (!placeholder) placeholder = '+7 (xxx) xxx-xx-xx';

            Inputmask({
                regex: regexMask,
                placeholder: placeholder,
                postValidation: buffer => {
                    let nums = buffer.join('').replace(/[^0-9]+/g, '');
                    let hasSevenNumbersInARow = (/(\d)\1{6}/g).test(nums);
                    return !hasSevenNumbersInARow;
                }
            }).mask(inputElement);
        }
    }
}
</script>

<style scoped>
.phone{
    height: 30px;
    width: 100%;
}
input{
    box-sizing: border-box;
    width: 100%;
    height: 30px;
}
</style>