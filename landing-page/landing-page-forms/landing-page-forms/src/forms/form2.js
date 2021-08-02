import { Form, Input, Button } from 'antd'
import { submitMessageForm } from '../axios/axios.js'

const From2 = () => {
  const [form] = Form.useForm()

  const onFinish = async () => {
    const value = await form.validateFields()
    console.log('form value:', value)
    const {type, message} = await submitMessageForm(value)
    console.log(type, message)
    form.resetFields()
  }

  return (
    <Form form={form} layout="vertical" name="Message Form" onFinish={onFinish}>
      <Form.Item name="name" label="Contact Name" rules={[{required:true}]}>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone No." rules={[{required:true}]}>
        <Input />
      </Form.Item>
      <Form.Item name="message" label="Message" rules={[{required:true}]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default From2