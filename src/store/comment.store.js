// import { commentService } from '../services/comment.service.local'
import { commentService } from '../services/comment.service'

export const commentStore = {
    state: {
        comments: []
    },
    getters: {
        comments({ comments }) { return comments },
    },
    mutations: {
        setComments(state, { comments }) {
            state.comments = comments
        },
        addComment(state, { comment }) {
            state.comments.push(comment)
        },
    },
    actions: {
        async addComment(context, { comment }) {
            try {
                comment = await commentService.save(comment)
                context.commit({ type: 'addComment', comment})
                return comment
            } catch (err) {
                console.log('commentStore: Error in addComment', err)
                throw err
            }
        },
        async loadComments({ commit }, { filterBy }) {
            try {
                const comments = await commentService.query(filterBy)
                commit({ type: 'setComments', comments })
            } catch (err) {
                console.log('commentStore: Error in loadComments', err)
                throw err
            }
        },
    }
}