// AUTH
export const LOGIN = 'api/auth/login'


// USER
export const GET_ALL_ROLES = 'api/roles'
export const GET_ALL_USERS = 'api/users?'
export const CREATE_NEW_USER = 'api/users?'
export const BLOCK_USER = 'api/users/status/' //ex. api/users/status/24? (need to make dynamic variable for 24 later)
export const DELETE_USER_SOFT = 'api/users/' // api/users/25
export const CHANGE_USER_EMAIL = 'api/users/email/' // api/users/email/6
export const CHANGE_USER_ROLE = 'api/users/role/' // api/users/role/6
export const CHECK_ACTIVATION_TOKEN = 'api/auth/activation/' //api/auth/activation/tokenhere
export const ACTIVATE_USER = 'api/auth/activation/user'
