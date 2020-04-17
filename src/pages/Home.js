import React, { useContext } from 'react'
import { Typography, Row, Col } from 'antd';

import { GlobalContext } from '../context/GlobalContext'
import { Hero } from '../components/Hero/Hero.js'
import { RoomCard } from '../components/RoomCard/RoomCard.js'


export const Home = () => {
  const { Title, Paragraph } = Typography;

  const { data } = useContext(GlobalContext)
  const rooms = data && data.rooms.items.map(i => i.fields)
  const featuredRooms = rooms && rooms.filter(i => i.featured === true)


  return (
    <div>
      <Hero />
      <div className='container'>
        <Typography>
          <Row>
            <Col>
              <Title>React Resort</Title>
            </Col>
            <Col>
              <Paragraph>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties and
                duplication and reduce the efficiency of development.
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Title level={2}>Featured rooms</Title>
            </Col>
            <Row gutter={[12, 12]} style={{ width: '100%' }}>
              {featuredRooms && featuredRooms.map(item =>
                <Col span={6}>
                  <RoomCard key={item.slug} {...item} />
                </Col>
              )}
            </Row>
          </Row>
        </Typography>
      </div>
    </div>
  )
}
