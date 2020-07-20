import axios from 'axios';
import {EXPLORER_API_URL} from "~/assets/variables.js";
import addToCamelInterceptor from '~/assets/to-camel.js';

const instance = axios.create({
    baseURL: EXPLORER_API_URL,
});
addToCamelInterceptor(instance);


export function getBipPrice() {
    return instance.get('status')
        .then((response) => response.data.data.bipPriceUsd);
}

