import React, { Fragment } from 'react'

import { Button, WingBlank, SearchBar, WhiteSpace, List } from 'antd-mobile'

class MyAds extends React.Component {
  render() {
    return (
      <Fragment>
        <SearchBar
          placeholder="搜索"
          maxLength={8}
          onCancel={() => console.log('onCancel')}
        />
        <WhiteSpace />
        <WingBlank>
          <Button
            type="warning"
            onClick={() => {
              this.props.history.push('pushad')
            }}
          >
            {' '}
            发布营销活动{' '}
          </Button>
        </WingBlank>
        <WhiteSpace />
        <List>
          <List.Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {
              this.props.history.push('detail/1')
            }}
          >
            抖音广告xxxxxx<List.Item.Brief>营销中</List.Item.Brief>
          </List.Item>
          <List.Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {}}
          >
            抖音广告xxxxxx<List.Item.Brief>已停止</List.Item.Brief>
          </List.Item>
        </List>
      </Fragment>
    )
  }
}

export default MyAds
