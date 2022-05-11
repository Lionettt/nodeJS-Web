import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Comment, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import FromNow from '../../component/fromNow/fromnow'

export default function Replies(props) {
    const { data = [], loading } = props
    data.reverse()
    return (
        <div>
            <Card
                title="评论列表"
                loading={loading}
            >
                <List
                    dataSource={data}
                    renderItem={(itemData) => {
                        let { author, content, create_at } = itemData
                        return <List.Item>
                            <Comment
                                author={<Link to={'/user/${author.loginname}'}>{author.loginname}</Link>}
                                avatar={<Link to={'/user/${author.loginname}'}>
                                    {<Avatar
                                        icon={<UserOutlined />}
                                        src={author.avatar_url}
                                        title={author.loginname}
                                    />}
                                </Link>}
                                content={<div
                                    dangerouslySetInnerHTML={{
                                        __html: content
                                    }}
                                ></div>}
                                datetime={<time >发表于： {<FromNow data={create_at} />}</time>}
                            />
                        </List.Item>
                    }}
                    pagination={true}
                >
                </List>
            </Card>
        </div >
    )
}
