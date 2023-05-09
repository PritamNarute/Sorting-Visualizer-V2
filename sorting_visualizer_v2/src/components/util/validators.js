
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_ARRAY = 'ARRAY';

export const VALIDATOR_MIN = (val) => ({type: VALIDATOR_TYPE_MIN, val: val});
export const VALIDATOR_MAX = (val) => ({type: VALIDATOR_TYPE_MAX, val: val});
export const VALIDATOR_ARRAY = (val) => ({type: VALIDATOR_TYPE_ARRAY, val: val});

export const validate = (value, validators) => {
    for(const validator of validators) {
        if(validator.type === VALIDATOR_TYPE_MIN) {
            if(!value || Number(value) < validator.val) {
                return false;
            }
        } 
        else if(validator.type === VALIDATOR_TYPE_MAX) {
            if(!value || Number(value) > validator.val) {
                return false;
            }
        }
        else if (validator.type === VALIDATOR_TYPE_ARRAY) {
            if(!value) {
                return false;
            }
            const arr = value.trim().split(' ');
            if(arr.length > validator.val) {
                return false;
            }
            for (let i = 0; i < arr.length; i++) {
                const num = Number(arr[i]);
                if(!num) {
                    continue;
                }
                if(num > 1000) {
                    return false;
                }
                if(num<=0 ) {
                    return false;
                }
                arr[i] = num;
            }
        }
    }
    return true;
};
