import { API } from "../constant";

const productService = {
    getProduct(query = '') {
        return fetch(`${API}/product${query}`).then(res => res.json())
    }
}

export default productService;