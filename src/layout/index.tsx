// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Layout, Nav, Button, Avatar } from '@douyinfe/semi-ui'
import {
  IconMoon,
  IconSun,
  IconFolder,
  IconHelpCircle,
  IconBytedanceLogo,
  IconHome,
  IconBell,
  IconSetting,
  IconCode,
  IconPriceTag,
  IconTerminal,
} from '@douyinfe/semi-icons'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  const { Header, Footer, Sider, Content } = Layout
  const [isDark, setDark] = useState(false)

  const switchMode = () => {
    const body = document.body
    if (body.hasAttribute('theme-mode')) {
      setDark(false)
      body.removeAttribute('theme-mode')
    } else {
      setDark(true)
      body.setAttribute('theme-mode', 'dark')
    }
  }
  return (
    <Layout>
      <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <Nav
          defaultSelectedKeys={['Home']}
          style={{ maxWidth: 220, height: '100vh' }}
          items={[
            { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
            {
              itemKey: 'Project',
              text: '项目管理',
              icon: <IconFolder size="large" />,
              items: [
                {
                  itemKey: 'Github',
                  text: 'Github仓库',
                },
                {
                  itemKey: 'Gitee',
                  text: 'Gitee仓库',
                },
                {
                  itemKey: 'LocalProject',
                  text: '本地仓库',
                },
              ],
            },
            {
              itemKey: 'Histogram',
              text: '待办项',
              icon: <IconBell size="large" />,
            },
            {
              itemKey: 'Live',
              text: '笔记本',
              icon: <IconPriceTag size="large" />,
            },
            {
              itemKey: 'Code',
              text: '代码块',
              icon: <IconCode size="large" />,
            },
            {
              itemKey: 'Form',
              text: '代码生成',
              icon: <IconTerminal size="large" />,
            },
            {
              itemKey: 'Setting',
              text: '设置',
              icon: <IconSetting size="large" />,
            },
          ]}
          header={{
            logo: (
              <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />
            ),
            text: 'Hu-snail 工具箱',
          }}
          footer={{
            collapseButton: true,
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            mode="horizontal"
            footer={
              <>
                <Button
                  theme="borderless"
                  icon={
                    isDark ? (
                      <IconSun size="large" />
                    ) : (
                      <IconMoon size="large" />
                    )
                  }
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                  onClick={switchMode}
                />
                <Button
                  theme="borderless"
                  icon={<IconHelpCircle size="large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Avatar color="orange" size="small">
                  YJ
                </Avatar>
              </>
            }
          ></Nav>
        </Header>
        <Content
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
            <span>Copyright © 2022 hu-snail. All Rights Reserved. </span>
          </span>
          <span>
            <span style={{ marginRight: '24px' }}>平台客服</span>
            <span>反馈建议</span>
          </span>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default React.memo(PublicLayout)
