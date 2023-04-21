import React from 'react'
import Taro from '@tarojs/taro'
import './header.scss'

const Header = () => {
  const navigateTo = () => {
    Taro.navigateBack({
      delta: 1,
    })
  }

  const compName = () => {
    return ''
    // let allComps: any = []
    // let hashCompName = location.hash.split('pages/')[1].replace('/index', '')
    // console.log('xxx', hashCompName, config.nav)
    // config.nav.map((item: any) => {
    //   allComps = [...allComps, ...item.packages]
    // })
    //
    // let targetComp = allComps.filter(
    //   (item: any) => hashCompName === item.name.toLowerCase()
    // )
    //
    // return targetComp[0].name
  }

  return (
    <>
      {Taro.getEnv() === 'WEB' ? (
        <div className="applets-demo-header">
          <div className="back" onClick={navigateTo}>
            {/*<span className="home-icon"></span>*/}
          </div>
          <div className="applets-icon">
            <img src="https://img13.360buyimg.com/imagetools/jfs/t1/67106/30/23857/9375/63b4df85Fce5fd959/35265019206515fe.png" />
          </div>
          <div>{compName()}</div>
        </div>
      ) : null}
    </>
  )
}

export default Header