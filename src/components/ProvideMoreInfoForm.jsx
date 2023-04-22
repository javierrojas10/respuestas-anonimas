import { Form, Input, InputNumber, Switch } from 'antd';
import { useState } from 'react';


const ProvideMoreInfoForm = () => {
    const [wantToProvideMoreInfo, setWantToProvideMoreInfo] = useState(false);
    return <>
        <Form.Item
            label="¿Quieres agregar más información para fines estadísticos?"
            name="wantToProvideMoreInfo"
            valuePropName="checked"
            initialValue={false}
        >
            <Switch

                onChange={setWantToProvideMoreInfo}
            />

        </Form.Item>
        {wantToProvideMoreInfo && <>
            <Form.Item
                label="Identidad de Género"
                name="identify"
                help="Ej: Mujer, Hombre, No binario, etc."
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Edad"
                name="age"
                help="Ej: 25"
            >
                <InputNumber />

            </Form.Item>
            <Form.Item
                label="Orientación Sexual"
                name="sexualOrientation"
                help="Bisexual, Heterosexual, Homosexual, Pansexual, Asexual, etc."
                style={{ marginBottom: 40 }}
            >
                <Input />
            </Form.Item>

        </>}</>
}

export default ProvideMoreInfoForm;