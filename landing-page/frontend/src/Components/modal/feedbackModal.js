import { Modal } from 'antd'
//import 'antd/dist/antd.css'

const feedbackModal = () => {
  return Modal.success({
    title: "提交成功！",
    content: (
      <p>感謝您願意提供意見與回饋！</p>
    ),
    okText: "確認"
  })
}

export { feedbackModal }