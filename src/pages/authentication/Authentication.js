import React from 'react';
import styles from "./styles.module.css";
import Modal from 'react-modal';
import { Form, Input, Button, Checkbox } from 'antd';

function Authentication() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
  return (
    <div className={styles.container}>
      <div className={styles.box}>
     <h1>Log In</h1>
     <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <Form.Item
        name="Email Id"
        rules={[
          {
            required: true,
            message: 'Please input your Email id!',
          },
        ]}
      >
        <Input className={styles.inp1} placeholder="Enter Email id" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: false,
            message: 'Please input your password!',
          },
        ]}
      >
        <br></br>
        <Input type="password" className={styles.inp1} placeholder="Enter Password"/>
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 10,
        }}
      >
        <br></br>
        <Button className={styles.btn} type="primary" htmlType="submit">
          Log In
        </Button>
        <p className={styles.p1}>Or</p>
        <Button className={styles.btn} onClick={openModal} type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    <div >
    <Modal 
        className={styles.box1}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <span className={styles.p2}>Sign Up</span>
        <button onClick={closeModal} className={styles.btn1}>Close</button>
        <Form.Item
        name="First Name"
        rules={[
          {
            required: true,
            message: 'Please input your First Name!',
          },
        ]}
      >
        <br></br>
        <Input className={styles.inp1} placeholder="Enter First Name" />
      </Form.Item>
      <Form.Item
        name="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <br></br>
        <Input className={styles.inp1} placeholder="Enter Last Name" />
      </Form.Item>
      <Form.Item
        name="Email Id"
        rules={[
          {
            required: true,
            message: 'Please input your Email id!',
          },
        ]}
      >
        <br></br>
        <Input className={styles.inp1} placeholder="Enter Email id" />
      </Form.Item>
      
      <Form.Item
        name="password"
        rules={[
          {
            required: false,
            message: 'Please input your password!',
          },
        ]}
      >
        <br></br>
        <Input type="password" className={styles.inp1} placeholder="Enter Password"/>
      </Form.Item>
      <br></br>
      <Button className={styles.btn} type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Modal>
    </div>
    </div>
     </div>
  );
}


export default Authentication;