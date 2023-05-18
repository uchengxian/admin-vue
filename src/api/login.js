// api.js
import axios from 'axios';

// 登录请求函数
export async function submitForm(form) {
    try {
        const response = await axios.post('http://localhost:3001/login', form, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}