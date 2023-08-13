
import { storageService } from './async-storage.service.js'
import md5 from 'md5'

const STORAGE_KEY = 'comment'

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment,
}
window.cs = commentService

async function query(filterBy = { email: '' }) {
    var comments = await storageService.query(STORAGE_KEY)
    if (filterBy.email) {
        const regex = new RegExp(filterBy.email, 'i')
        comments = comments.filter(comment => regex.test(comment.by.email))
    }
    return comments
}

async function getById(commentId) {
    return storageService.get(STORAGE_KEY, commentId)
}

async function remove(commentId) {
    await storageService.remove(STORAGE_KEY, commentId)
}

async function save(comment) {
    var savedComment
    if (comment._id) {
        savedComment = await storageService.put(STORAGE_KEY, comment)
    } else {
        // Later, owner is set by the backend
        comment.by.imgUrl = `https://www.gravatar.com/avatar/${_encodeEmail(comment.by.email)}`
        savedComment = await storageService.post(STORAGE_KEY, comment)
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