import { Button, Col, Form, Row, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ProvideMoreInfoForm from './ProvideMoreInfoForm';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import words from '../assets/words.json';

const Filter = require("badwords-filter");
const config = {
    list: words,
    cleanWith: "$",
    useRegex: true,
};

const filter = new Filter(config);

const sendMessage = async (values) => {
    return new Promise(async (res, rej) => {
        const response = await axios.post('https://42ecpedzwf.execute-api.us-east-1.amazonaws.com/dev/question', {
            id: uuidv4(),
            message: values.question,
            ...values
        });
        if (response && response.data && response.data.message) {
            message.success(response.data.message);
            res(response.data);
        } else {
            rej(response.data);
        }
    })

}


const MainForm = () => {
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState({});
    const [sending, setSending] = useState(false);
    const onFinish = async (values) => {
        setFormValues(values);
        setSending(true);
    };

    useEffect(() => {
        if (sending) {
            if (validate(formValues.question)) {
                sendMessage(formValues).then(() => {
                    form.resetFields();
                    setSending(false);
                }).catch((err) => {
                    message.error(err.message);
                    setSending(false);
                }).finally(() => {
                    setSending(false);
                });
            } else {
                setSending(false);
            }
        }
    }, [sending, formValues, form]);

    const validate = (value) => {
        if (!value) return;
        if (filter.isUnclean(value)) {
            message.error('No se permiten algunas palabras, beKind!');
            return;
        }
        return true;
    }


    return <Row>
        <Col sm={{ span: 12, offset: 6 }} xs={{ span: 20, offset: 2 }}>
            <Form
                name="basic"
                onFinish={onFinish}
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
                            warningOnly: false,
                            validator: (_, value) => {
                                if (!value) return Promise.reject(new Error('Ingresa una pregunta por favor'));
                                if (filter.isUnclean(value)) {
                                    return Promise.reject(new Error('No se permiten algunas palabras, beKind!'));
                                }
                                return Promise.resolve()

                            }
                        }
                    ]}
                >
                    <TextArea />
                </Form.Item>
                <ProvideMoreInfoForm />

                <Form.Item

                >
                    <Button type="primary" htmlType="submit" loading={sending}>
                        Enviar mi pregunta
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    </Row >

};
export default MainForm;