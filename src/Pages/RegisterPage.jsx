
import { Form, Input, Button } from 'antd'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { AUTH_ERROR, AUTH_SUCCESS } from '../Redux/app/actionTypes';
import firebase from '../Utils/firebase';
import { auth } from '../Utils/firebase';
import { useDispatch } from "react-redux";

const RegisterPage = () => {
    const [signup] = Form.useForm();
    const [error, setError] = useState("")
    const dispatch = useDispatch();

    const onFormSubmit = async(values) => {
        console.log("submit: ", values)
       try {
         const userCredential = await createUserWithEmailAndPassword(
           auth,
           values.email,
           values.password
         );
         const user = userCredential.user;
         dispatch({
           type: AUTH_SUCCESS,
           payload: "Your account is successfully created!",
         });
         console.log("user: ", user);
       } catch (err) {
         console.log("error singup: ", err);
         dispatch({
           type: AUTH_ERROR,
           payload: "Sorry, account creation failed!!",
         });
       }
    }
  return (
    <div className='container' >
      <Form name="signup" labelCol={{ span: 8}} wrapperCol={{span: 16}}
      initialValues={{
        remember: true,
      }} autoComplete="off" onFinish={onFormSubmit}>

        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterPage