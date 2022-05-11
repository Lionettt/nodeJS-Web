import React, { useEffect } from 'react'
import qs from 'qs'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { useTopicsList } from '../../store/action'

import TopicsList from '../../component/list/topicList'
import IndexNav from './indexNav/indexNav'
import IndexPagination from './indexPagination/indexPagination'


export default function IndexPage(props) {
    let {data,loading} = useSelector(state=>{  return state.topics});
    let getData = useTopicsList();
    let {search} = useLocation();
    let {tab="all",page=1} = qs.parse(search.substr(1));
    useEffect(()=>{
      getData(tab,page);
    },[tab,page])
    return (<div style={{marginTop:10}}>
          <IndexNav />
          <TopicsList 
              data={data}
              loading={loading}
          />
          {loading?"":<IndexPagination />}
    </div>);
}
