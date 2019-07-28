import React, { Fragment } from 'react'

import {
  List,
  InputItem,
  Button,
  WingBlank,
  WhiteSpace,
  TextareaItem
} from 'antd-mobile'

class MyAds extends React.Component {
  render() {
    return (
      <Fragment>
        <WingBlank>
          <h3 className="title">转发标题</h3>
          <TextareaItem placeholder="请输入转发标题" />
        </WingBlank>
        <WingBlank>
          <h3 className="title">营销链接</h3>
          <TextareaItem placeholder="请输入营销链接" />
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <List>
            <InputItem
              type="money"
              placeholder="活动总金额"
              clear
              onChange={v => {
                console.log('onChange', v)
              }}
              onBlur={v => {
                console.log('onBlur', v)
              }}
            >
              活动总金额
            </InputItem>
            <InputItem
              type="money"
              placeholder="活动总金额"
              clear
              onChange={v => {
                console.log('onChange', v)
              }}
              onBlur={v => {
                console.log('onBlur', v)
              }}
            >
              每日金额
            </InputItem>
            <InputItem
              type="money"
              placeholder="每个点击金额"
              clear
              onChange={v => {
                console.log('onChange', v)
              }}
              onBlur={v => {
                console.log('onBlur', v)
              }}
            >
              每个点击金额
            </InputItem>
          </List>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="warning">发布</Button>
        </WingBlank>
      </Fragment>
    )
  }
}

export default MyAds
