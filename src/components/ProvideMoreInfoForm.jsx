import { Form, Input, Select, Switch } from 'antd';
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
                label="Rango de Edad"
                name="age"
                help="Ej: 20 - 30, 30 - 40, etc."
            >
                <Select>
                    <Select.Option value="Menos de 20">Menos de 20</Select.Option>
                    <Select.Option value="21 - 30">21 - 30</Select.Option>
                    <Select.Option value="31 - 40">31 - 40</Select.Option>
                    <Select.Option value="41 - 50">41 - 50</Select.Option>
                    <Select.Option value="51+">51+</Select.Option>

                </Select>

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