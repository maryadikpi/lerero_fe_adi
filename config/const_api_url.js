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
export const IMPORT_USER_LIST_FILE = 'api/users/import'

// USER GROUP
export const GET_ALL_USER_GROUP = 'api/user-groups?' // GET
export const CREATE_USER_GROUP = 'api/user-groups?'  // POST
export const CHANGE_GROUP_STATUS = 'api/user-groups/status/' // PUT -> api/user-groups/status/12?
export const USER_GROUP_BASE = 'api/user-groups/'
export const GET_USERS_IN_GROUP = '/user?' // ex: USER_GROUP_BASE+{id}+GET_USERS_IN_GROUP
export const GET_USER_NOT_IN_GROUP = '/user/not-in-group?' // ex: USER_GROUP_BASE+{id}+GET_USER_NOT_IN_GROUP
export const UPDATE_USER_GROUP = '/user/add?' // ex: USER_GROUP_BASE+{id}+ADD_USER_TO_GROUP. Used to add or remove user from group
