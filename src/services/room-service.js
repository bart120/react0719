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

    getRoomById(id) {
        return this.get(`${URL_ROOMS}/${id}`);
    }

    deleteRoomByd(id) {
        return this.delete(`${URL_ROOMS}/${id}`);
    }

    createRoom(obj) {
        return this.post(URL_ROOMS, obj);
    }
}