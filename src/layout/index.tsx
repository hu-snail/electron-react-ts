// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Layout, Nav, Button, Breadcrumb, Avatar } from '@douyinfe/semi-ui';
import { IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';
import { Outlet } from 'react-router-dom';

// import '@douyinfe/semi-ui/dist/css/semi.min.css'
const PublicLayout = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode');
        // 以下这行代码，window.setMode仅用于当通过本Demo切换时，通知Semi官网Header记录更新当前模式（只用于演示）。在您的代码里无需存在。
        // window.setMode('light');
    } else {
        body.setAttribute('theme-mode', 'dark');
        // window.setMode('dark');
    }
}
  return (
    <Layout >
    <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <Nav
            defaultSelectedKeys={['Home']}
            style={{ maxWidth: 220, height: '100vh' }}
            items={[
                { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
                { itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large" /> },
                { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
                { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
            ]}
            header={{
                logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
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
                            icon={<IconBell size="large" />}
                            style={{
                                color: 'var(--semi-color-text-2)',
                                marginRight: '12px',
                            }}
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
            <Breadcrumb
                style={{
                    marginBottom: '24px',
                }}
                routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
            />
                <Button
            onClick={switchMode}
        >
            Switch Mode
        </Button>
          <Outlet/>
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
                <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
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
 
export default React.memo(PublicLayout);
