import { Form, Input, Button } from 'antd'
import { submitSubscriber } from '../axios/axios'

const Form1 = () => {
  const [form] = Form.useForm()

  const onFinish = async () => {
    const value = await form.validateFields()
    console.log('form value:', value)
    const {type, message} = await submitSubscriber(value.email)
    console.log(type, message)
    form.resetFields()
  }

  return (
    <Form form={form} layout="vertical" name="Subsriber Box" onFinish={onFinish}>
      <Form.Item name="email" label="Email" rules={[{required:true}]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form1