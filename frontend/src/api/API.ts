import axios from 'axios';

const url = 'https://fakestoreapi.com/products';

const fetchProducts = async () => {
    const { data } = await axios.get(url);
    return data;
};

export {
    fetchProducts,
}