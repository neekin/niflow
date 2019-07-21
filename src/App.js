import React from 'react'
import { NavBar } from 'antd-mobile'
import { BrowserRouter, Route, Switch as RSwitch } from 'react-router-dom'
import './App.css'

import IndexList from './compoents/list'
import MyPage from './compoents/my'
import PageFooter from './compoents/footer'

import Bscroll from 'better-scroll'

class App extends React.Component {
  componentDidMount() {
    this.setState({
      bScroll: new Bscroll(this.refs.bscroll, { probeType: 3, click: true })
    })
  }

  componentDidUpdate() {
    //组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.state.bScroll) {
      this.state.bScroll.refresh()
    }
  }

  render() {
    // const { pathname } = this.location
    console.log('当前的路径是', this.location)
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar mode="dark">全名信息流</NavBar>
          <div className="content bscroll" ref="bscroll">
            <div className="bscroll-container">
              <RSwitch>
                <Route path="/my" component={MyPage} />
                <Route path="/" component={IndexList} />
              </RSwitch>
            </div>
          </div>
          <PageFooter />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
