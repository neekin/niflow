import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
@withRouter
class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
        >
          全名信息流
        </NavBar>
      </React.Fragment>
    )
  }
}
export default Header
