import axios from 'axios';


export default class BaseService {

    getConfig() {

        let headers = { 'Content-Type': 'application/json' };

        if (sessionStorage.getItem('USER') != null) {
            const user = JSON.parse(sessionStorage.getItem('USER'));
            headers = Object.assign(headers, { 'Authorization': `Bearer ${user.token}` });
        }

        return { headers: headers };
    }

    get(url) {
        return axios.get(url, this.getConfig())
            .then(resp => this.sendPromiseResolve(resp))
            .catch(err => this.sendPromiseReject(err));
    }

    post(url, obj) {
        //return axios.post(url, obj, this.getConfig())
        return axios(Object.assign({
            method: 'post',
            url: url,
            data: obj
        }, this.getConfig()))
            .then(resp => this.sendPromiseResolve(resp))
            .catch(err => this.sendPromiseReject(err));
    }

    delete(url) {
        return axios.delete(url, this.getConfig())
            .then(resp => this.sendPromiseResolve(resp))
            .catch(err => this.sendPromiseReject(err));
    }



    sendPromiseResolve(resp) {
        console.log(resp.statuts)
        return Promise.resolve(resp.data);
    }

    sendPromiseReject(err) {
        return Promise.reject(`Erreur d'accès au serveur. Détail: ${err.toString()}`);
    }


}