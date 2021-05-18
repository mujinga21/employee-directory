import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100";


// Export an object with a "search" method that searches the Giphy API for the passed query
const API= {
  search: function(query) {
    return axios.get(BASEURL);
  }
};

export default API;