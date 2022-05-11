import axios from "axios"
import { useDispatch } from "react-redux"

const http = axios.create({
    baseURL: "https://cnodejs.org/api/v1"
})

function useTopicsList() {
    let dispatch = useDispatch();
    return function (tab = "all", page = 1, limit = 20, mdrender = true) {
        dispatch({
            type: "topics_loading"
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`
        ).then((res) => {
            dispatch({
                type: "topics_loadover",
                data: res.data.data
            })
        });
    }
}

function useTopic() {
    let dispatch = useDispatch();
    return function (id) {
        dispatch({
            type: "topic_loading"
        })
        http.get(`/topic/${id}`).then((res) => {
            dispatch({
                type: "topic_loadover",
                data: res.data.data
            })
        }).catch((res) => {
            console.log(res);
            dispatch({
                type: "topic_error",
                err_msg: res.response.data.error_msg
            })
        });
    }
}
//获取用户详情数据
function useUser() {
    let dispatch = useDispatch();
    return function (loginname) {
        dispatch({
            type: "user_loading"
        })
        http.get(`/user/${loginname}`).then((res) => {
            dispatch({
                type: "user_loadover",
                data: res.data.data
            })
        }).catch((res) => {
            console.log(res);
            dispatch({
                type: "topic_error",
                err_msg: res.response.data.error_msg
            })
        });
    }
}
export { useTopicsList, useTopic, useUser }