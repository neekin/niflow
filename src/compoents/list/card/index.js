import React from 'react'
import './index.css'
import { Card, WhiteSpace, WingBlank, Tag } from 'antd-mobile'
class IndexListItem extends React.Component {
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Body>
            <div className="info">
              <div className="img">
                <img src={require('./imgs/0.jpeg')} alt="" />
              </div>

              <div className="infobox">
                <div className="title">抖音、陌陌各大平台信息流广告</div>

                <div className="infocontent">
                  <div className="money">
                    点击金额
                    <span className="red">
                      ￥<strong>2.00</strong>
                    </span>
                    <span className="location">广州</span>
                  </div>

                  <Tag>推广</Tag>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </WingBlank>
    )
  }
}

export default IndexListItem
