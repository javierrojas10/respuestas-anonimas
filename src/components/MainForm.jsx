import { Button, Col, Form, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ProvideMoreInfoForm from './ProvideMoreInfoForm';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const onFinish = async (values) => {
    await axios.post('https://42ecpedzwf.execute-api.us-east-1.amazonaws.com/dev/question', {
        id: uuidv4(),
        ...values
    });
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const MainForm = () => {
    const [form] = Form.useForm();

    return <Row>
        <Col span={12} offset={6}>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout='vertical'
                form={form}
            >
                <Form.Item
                    label="Pregunta"
                    name="question"
                    rules={[
                        {
                            required: true,
                            message: 'Ingresa una pregunta por favor',
                        },
                    ]}
                >
                    <TextArea />
                </Form.Item>
                <ProvideMoreInfoForm />

                <Form.Item

                >
                    <Button type="primary" htmlType="submit">
                        Enviar mi pregunta
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    </Row >

};
export default MainForm;