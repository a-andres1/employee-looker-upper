import axios from 'axios';

let obj = {
    searchUsers: function(){
        return axios.get("https://randomuser.me/api/?results=20&nat=us")
    }
}

export default obj