import axios from 'axios'


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers : {
    Authorization: 'Client-ID 1bc0fd6f35f614db0e6853f35accceaf5ed17612561f1ce3d1227d2eb70224f2'
}
});

 