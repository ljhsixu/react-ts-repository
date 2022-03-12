import React, { Component } from 'react'
import { Header, Footer, Carousel, SideMenu,ProductColletion } from '../../components'
import { Row, Col, Typography } from 'antd'
import { productList1,productList2,productList3 } from './mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import styles from './HomePage.module.css'
export  class HomePage extends Component {
  render() {
    return (
      <div>
            <Header></Header>
      {/* 页面内容 content */}
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu></SideMenu>
          </Col>
          <Col span={18}>
            <Carousel></Carousel>
          </Col>
        </Row>
        <ProductColletion
        title={<Typography.Title level={3} type='warning'>爆款推荐</Typography.Title>}
        sideImage={sideImage}
        products={productList1}
        ></ProductColletion>
         <ProductColletion
        title={<Typography.Title level={3} type='warning'>新品上市</Typography.Title>}
        sideImage={sideImage2}
        products={productList2}
        ></ProductColletion>
         <ProductColletion
        title={<Typography.Title level={3} type='warning'>国内游推荐</Typography.Title>}
        sideImage={sideImage3}
        products={productList3}
        ></ProductColletion>
      </div>
      <Footer></Footer>
      </div>
    )
  }
}
