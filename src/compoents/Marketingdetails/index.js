import React from 'react'
import './index.css'
import { Flex, WingBlank } from 'antd-mobile'
class Datail extends React.Component {
  render() {
    return (
      <div className="dateils">
        <div className="header">
          <div class="infocount">
            <div className="h4">总点击率</div>
            <h3>5938</h3>
          </div>
          <div class="infocount">
            <div className="h4">新增点击率</div>
            <h3>468</h3>
          </div>
        </div>

        <div className="clickinfolist">
          <WingBlank>
            <div className="title">点击详情</div>
            <Flex>
              <Flex.Item>转发人</Flex.Item>
              <Flex.Item>点击来源</Flex.Item>
              <Flex.Item>时间</Flex.Item>
              <Flex.Item>访问标志码</Flex.Item>
            </Flex>
            <Flex>
              <Flex.Item>转发人</Flex.Item>
              <Flex.Item>点击来源</Flex.Item>
              <Flex.Item>时间</Flex.Item>
              <Flex.Item>访问标志码</Flex.Item>
            </Flex>
            <Flex>
              <Flex.Item>转发人</Flex.Item>
              <Flex.Item>点击来源</Flex.Item>
              <Flex.Item>时间</Flex.Item>
              <Flex.Item>访问标志码</Flex.Item>
            </Flex>
            <Flex>
              <Flex.Item>转发人</Flex.Item>
              <Flex.Item>点击来源</Flex.Item>
              <Flex.Item>时间</Flex.Item>
              <Flex.Item>访问标志码</Flex.Item>
            </Flex>
            <Flex>
              <Flex.Item>转发人</Flex.Item>
              <Flex.Item>点击来源</Flex.Item>
              <Flex.Item>时间</Flex.Item>
              <Flex.Item>访问标志码</Flex.Item>
            </Flex>
          </WingBlank>
        </div>
      </div>
    )
  }
}

export default Datail
