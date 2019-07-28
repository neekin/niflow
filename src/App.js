import React from 'react'

import Bscroll from 'better-scroll'
import { BrowserRouter, Route, Switch as RSwitch } from 'react-router-dom'
import './App.css'
import PageFooter from './compoents/footer'
import PageHeader from './compoents/header'

import IndexList from './compoents/list'
import MyPage from './compoents/my'
import MyAds from './compoents/myads'
import PushAd from './compoents/pushad'
import Detail from './compoents/Marketingdetails'
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
    return (
      <BrowserRouter>
        <div className="App">
          <PageHeader />
          <div className="content bscroll" ref="bscroll">
            <div className="bscroll-container">
              <RSwitch>
                <Route path="/detail/:id" component={Detail} />
                <Route path="/pushad" component={PushAd} />
                <Route path="/myads" component={MyAds} />
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
