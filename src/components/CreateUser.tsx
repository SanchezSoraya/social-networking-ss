import { Button, Card, Form, Input, Space, Typography } from 'antd'
import { type IUser } from '../interfaces/User'

export const CreateUser = () => {
  const { Title } = Typography
  const [antForm] = Form.useForm<IUser>()

  function handleSubmit() {
    const values = antForm.getFieldsValue()
  }

  function handleCancel() {
    console.log('completar ')
  }
  return (
    <Card>
      <Title level={4}>crear usuario</Title>
      <Form form={antForm} onFinish={handleSubmit}>
        <Form.Item name="firstname">
          <Input placeholder="Nombre" required />
        </Form.Item>
        <Form.Item name="lastname">
          <Input placeholder="Apellidos" required />
        </Form.Item>
        <Form.Item name="username">
          <Input placeholder="UserName" required />
        </Form.Item>
        <Form.Item name="age">
          <Input placeholder="Edad" required />
        </Form.Item>
        <Form.Item name="email">
          <Input placeholder="Email" required />
        </Form.Item>

        <Space
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button type="primary" danger onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="primary" htmlType="submit">
            Crear
          </Button>
        </Space>
      </Form>
    </Card>
  )
}
