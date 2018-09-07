const API_URL = 'http://localhost'
const API_PORT = ':3000'

export default {
  login_url: API_URL + API_PORT + '/api/authenticate/',
  add_fleet_url: API_URL + API_PORT + '/api/post/',
  get_fleets_url: API_URL + API_PORT + '/api/posts/'
  //images_url: API_URL + API_PORT + '/api/images/'
}
