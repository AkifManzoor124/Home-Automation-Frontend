import axios from 'axios'
const baseURL = '/api/devices/'

const toggle = async state => {
    const response = await axios.post(baseURL, {'BatmanLight': state})
    console.log("Response")
    return response
}

export default {toggle}