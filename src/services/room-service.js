import axios from 'axios';
import BaseService from './base-service';


const URL_ROOMS = 'http://formation-roomy.inow.fr/api/rooms';

export default class RoomService extends BaseService {


    getAll() {
        // return axios(URL_ROOMS);
        /*.then(obj => {
            console.log(obj.data);
            return obj.data;
        });*/
        return this.get(URL_ROOMS);

    }
}