import { Layout, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import MainForm from '../components/MainForm';
const { Header, Footer, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#000',
    with: '100%',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 80,
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#000',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    left: 0
};
const layoutStyle = {
}
const MainLayout = () => (<Layout style={layoutStyle}>
    <Header style={headerStyle}>POD de Género Globant Chile</Header>
    <Content >
        <div style={contentStyle}>
            <Typography.Title level={2}>
                Formulario de Preguntas Anónimas <Tooltip placement='bottom' title="Este sitio fue diseñado para que pemanezcas en el anonimato. Recuerda ser BeKind."><InfoCircleOutlined /></Tooltip>
            </Typography.Title>
        </div>

        <MainForm />
    </Content>
    <Footer style={footerStyle}>Desarrollado con amor </Footer>
</Layout>
);
export default MainLayout;