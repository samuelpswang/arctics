import { Modal } from 'antd'
//import 'antd/dist/antd.css'

const successSubscribe = () => {
  return Modal.success({
    title: "提交成功！",
    content: (
      <p>已收到您的回覆！若日後有新訊息我們將主動通知您！</p>
    ),
    okText: "確認"
  })
}

const invalidSubmission = () => {
  return Modal.error({
    title: "提交形式有誤！",
    content: (
      <div>
       <p>請再次確認您的提交內容</p>
       <p>空白與不合格的電子郵件形式皆被視為無效提交！</p>
      </div>
    ),
    okText: "確認"
  })
}

export { successSubscribe, invalidSubmission }