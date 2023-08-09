export const baseUrlRick = 'https://rickandmortyapi.com/api'
export const baseUrlJson = 'https://jsonplaceholder.typicode.com'
export const baseUrlSpace = 'https://api.spacexdata.com/v3'

const rickmorty = '/character'
const posts = '/posts'
const launches = '/launches'
const users = '/users'
const comments = '/comments'

export const urls = {
    rickmorty,
    launches,
    users,
    comments,
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`,
    }
}