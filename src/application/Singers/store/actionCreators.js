import {
    getHotSingerListRequest,
    getSingerListRequest
  } from "../../../api/request";
  import {
    CHANGE_SINGER_LIST,
    CHANGE_CATOGORY,
    CHANGE_ALPHA,
    CHANGE_PAGE_COUNT,
    CHANGE_PULLUP_LOADING,
    CHANGE_PULLDOWN_LOADING,
    CHANGE_ENTER_LOADING
  } from './constants';
  import {
    fromJS
  } from 'immutable';


  const changeSingerList = (data) => ({
      type:CHANGE_SINGER_LIST,
      data:fromJS(data)
  }) 
  export const changPageCount = (data)=>({
      type:CHANGE_PAGE_COUNT,
      data
  })

  //进场loading
export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data
  });
  
  //滑动最底部loading
  export const changePullUpLoading = (data) => ({
    type: CHANGE_PULLUP_LOADING,
    data
  });
  
  //顶部下拉刷新loading
  export const changePullDownLoading = (data) => ({
    type: CHANGE_PULLDOWN_LOADING,
    data
  });