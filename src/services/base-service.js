import axios from 'axios';


export default class BaseService {

    get(url) {
        return axios.get(url)
            .then(obj => {
                console.log('then de base service');
                return Promise.resolve(obj.data);
            })
            .catch(err => {
                return Promise.reject(`Erreur d'accès au serveur. Détail: ${err.toString()}`);
            });

    }

    post(url, obj) {
        //return axios.post(url, obj)
        return axios({
            method: 'post',
            url: url,
            data: obj
        }).then(obj => {
            return Promise.resolve(obj.data);
        }).catch(err => {
            return Promise.reject(`Erreur d'accès au serveur. Détail: ${err.toString()}`);
        });
    }
}