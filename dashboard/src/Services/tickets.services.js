import axios from 'axios';

import {checkout_url} from '../Keys/checkout.keys';
import {cart_url} from '../Keys/cart.keys';
import {_headers} from '../Keys/headers.keys';

function getCheckoutTickets() {
    return axios
        .get(checkout_url,
            {
                headers: {_headers}
            })
        .then(res => res)
        .catch(err => {throw err})
}

function getCartTickets() {
    return axios
        .get(cart_url, 
            {
                headers: {_headers}
            })
        .then(res => res)
        .catch(err => {throw err})
}