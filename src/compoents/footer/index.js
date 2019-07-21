import React from 'react'
import { TabBar } from 'antd-mobile'

class PageFooter extends React.Component {
  render() {
    // const pathname = children.props.location.pathname
    // console.log(pathname)
    const pathname = window.location.pathname
    return (
      <footer>
        <TabBar
          unselectedTintColor="#1F2125"
          tintColor="#F3494A"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('./imgs/nav_1.png')}) center center /  21px 21px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('./imgs/nav_1_active.png')}) center center /  21px 21px no-repeat`
                }}
              />
            }
            selected={pathname === '/'}
            onPress={() => {
              window.location = '/'
            }}
          />
          <TabBar.Item
            title="赚钱"
            key="makeMoney"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('./imgs/nav_2.png')}) center center /  21px 21px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('./imgs/nav_2_active.png')}) center center /  21px 21px no-repeat`
                }}
              />
            }
            selected={pathname === '/makeMoney'}
            onPress={() => {
              window.location = '/makeMoney'
            }}
          />
          <TabBar.Item
            title="邀请"
            key="invite"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('./imgs/nav_3.png')}) center center /  21px 21px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('./imgs/nav_3_active.png')}) center center /  21px 21px no-repeat`
                }}
              />
            }
          />
          <TabBar.Item
            title="我的"
            key="my"
            selected={pathname === '/my'}
            onPress={() => {
              window.location = '/my'
            }}
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('./imgs/nav_4.png')}) center center /  21px 21px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('./imgs/nav_4_active.png')}) center center /  21px 21px no-repeat`
                }}
              />
            }
          />
        </TabBar>
      </footer>
    )
  }
}

export default PageFooter
