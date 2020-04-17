import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Drawer, Button, Menu } from 'antd';
import { HomeOutlined, MenuOutlined, UnorderedListOutlined } from '@ant-design/icons';

export const Header = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)
  const style = {
    marginRight: '10px',
    paddingLeft: '8px'
  }

  return (
    <div>
      <div className='container'>
        <Button type="primary" onClick={() => showDrawer()}>
          <MenuOutlined />
        </Button>
      </div>
      <Drawer
        title="React Resort"
        placement="left"
        closable
        onClose={() => onClose()}
        visible={visible}
        bodyStyle={{ paddingLeft: 0, paddingTop: '12px' }}
      >
        <Menu
          style={{ width: 256 }}
        >
          <Menu.Item key="1" onClick={() => onClose()}>
            <Link to='/'>
              <p>
                <HomeOutlined style={style} />
                Home
              </p>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => onClose()}>
            <Link to='/rooms'>
              <p>
                <UnorderedListOutlined style={style} />
                Rooms
              </p>
            </Link>
          </Menu.Item>
        </Menu>
        <nav>
        </nav>
      </Drawer>
    </div>
  )
}
