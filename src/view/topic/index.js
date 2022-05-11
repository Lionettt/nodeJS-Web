import { Alert } from 'antd';
import React, { useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { useTopic } from '../../store/action'
import Deatails from './details';
import Replies from './replaies';
export default function Topics() {
    const getData = useTopic();
    const history = useHistory()
    const { id } = useParams();
    const { loading, data, isError, err_msg } = useSelector(state => state.topic);
    useEffect(() => {
        getData(id);
    }, [id]);
    return (
        <div id="topic">
            {isError ? <Alert
                closable
                message={"请求出错"}
                type="error"
                description={
                    <Fragment>
                        <p>{err_msg}</p>
                        <p>点击关闭按钮返回上一步</p>
                    </Fragment>
                }
                afterClose={() => {
                    history.goBack();
                }}
            /> : (<Fragment>
                <Deatails
                    data={data}
                    loading={loading}
                />
                <Replies
                    data={data.replies}
                    loading={loading}
                />
            </Fragment>)}
        </div>
    )
}
