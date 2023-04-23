import { Layout, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import MainForm from '../components/MainForm';
const { Footer, Content } = Layout;

const contentStyle = {
    textAlign: 'center',
    minHeight: 0,
    paddingBottom: 50,
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
    <Content >
        <div style={contentStyle}>
            <Typography.Title level={3}>
                Formulario de Preguntas Anónimas <Tooltip placement='bottom' title="Este sitio fue diseñado para que pemanezcas en anonimato. BeKind."><InfoCircleOutlined /></Tooltip>
            </Typography.Title>
        </div>

        <MainForm />
    </Content>
    <Footer style={footerStyle}>Desarrollado con 🫰 - POD Género - Globant SCL </Footer>
</Layout>
);
export default MainLayout;