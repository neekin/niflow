import React from 'react'
import './index.css'
import { List } from 'antd-mobile'
class MyPage extends React.Component {
  render() {
    return (
      <div className="my">
        <div className="header">
          <div className="headimg">
            <img src={require('./imgs/min_5.png')} alt="" />
          </div>
          <div className="linkman">
            <div className="phonenum">1380013800</div>
            <div className="invitaionCode">邀请码：123123</div>
          </div>
          <div className="info">
            <div className="money">
              <div className="withdrawable">
                6580
                <div className="text">可提金额</div>
              </div>
              <div className="todayEarn">
                123123
                <div className="text">今日收入</div>
              </div>
            </div>
            <div className="menu">
              <div className="btn">
                <div className="btnimg">
                  <img src={require('./imgs/min_1.png')} alt="" />
                </div>
                <div className="btntxt">提现</div>
              </div>
              <div className="btn">
                <div className="btnimg">
                  <img src={require('./imgs/min_2.png')} alt="" />
                </div>
                <div className="btntxt">充值</div>
              </div>
              <div className="btn">
                <div className="btnimg">
                  <img src={require('./imgs/min_3.png')} alt="" />
                </div>
                <div className="btntxt">邀请好友</div>
              </div>
              <div className="btn">
                <div className="btnimg">
                  <img src={require('./imgs/min_4.png')} alt="" />
                </div>
                <div className="btntxt">赚钱</div>
              </div>
            </div>
          </div>
        </div>

        <div className="menulist">
          <List>
            <List.Item
              arrow="horizontal"
              multipleLine
              onClick={() => {
                this.props.history.push('myads')
              }}
            >
              我的广告
            </List.Item>
            <List.Item arrow="horizontal" multipleLine onClick={() => {}}>
              曝光统计
            </List.Item>
            <List.Item arrow="horizontal" multipleLine onClick={() => {}}>
              收支账单
            </List.Item>
            <List.Item arrow="horizontal" multipleLine onClick={() => {}}>
              我的设置
            </List.Item>
          </List>
        </div>
      </div>
    )
  }
}

export default MyPage
