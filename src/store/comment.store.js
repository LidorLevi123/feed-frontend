import { commentService } from '../services/comment.service.local'
// import { commentService } from '../services/comment.service'

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
        // updateComment(state, { comment }) {
        //     const idx = state.comments.findIndex(c => c._id === comment._id)
        //     state.comments.splice(idx, 1, comment)
        // },
        // removeComment(state, { commentId }) {
        //     state.comments = state.comments.filter(comment => comment._id !== commentId)
        // },
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
        // async updateComment(context, { comment }) {
        //     try {
        //         comment = await commentService.save(comment)
        //         context.commit(getActionUpdateComment(comment))
        //         return comment
        //     } catch (err) {
        //         console.log('commentStore: Error in updateComment', err)
        //         throw err
        //     }
        // },
        // async removeComment(context, { commentId }) {
        //     try {
        //         await commentService.remove(commentId)
        //         context.commit(getActionRemoveComment(commentId))
        //     } catch (err) {
        //         console.log('commentStore: Error in removeComment', err)
        //         throw err
        //     }
        // },
    }
}