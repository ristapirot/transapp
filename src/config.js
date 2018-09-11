const API_URL = 'http://localhost'
const API_PORT = ':3000'

export default {
  login_url: API_URL + API_PORT + '/api/authenticate/',
  register_url: API_URL + API_PORT + '/register/',
  add_fleet_url: API_URL + API_PORT + '/api/post/',
  get_fleets_url: API_URL + API_PORT + '/api/posts/',
  update_user_fleets_url: API_URL + API_PORT + '/api/user/',
  update_profile_url: API_URL + API_PORT + '/api/user/'
}
