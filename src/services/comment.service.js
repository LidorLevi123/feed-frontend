import { httpService } from './http.service.js'
import md5 from 'md5'

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment
}

window.cs = commentService // for console usage

async function query(filterBy = { email: '' }) {
    return httpService.get('comment', filterBy)
}
async function getById(commentId) {
    return httpService.get(`comment/${commentId}`)
}

async function remove(commentId) {
    return httpService.delete(`comment/${commentId}`)
}
async function save(comment) {
    var savedComment
    if (comment._id) {
        savedComment = await httpService.put(`comment/${comment._id}`, comment)
    } else {
        // comment.by.imgUrl = `https://robohash.org/${_encodeEmail(comment.by.email)}`
        comment.by.imgUrl = `https://robohash.org/${comment.by.email}.png?set=set5`
        savedComment = await httpService.post('comment', comment)
    }
    return savedComment
}

function getEmptyComment() {
    return {
        by: {
            email: '',
            imgUrl: ''
        },
        txt: ''
    }
}

function _encodeEmail(email) {
    var hashedEmail = md5(email)
    return hashedEmail.toLowerCase()
}