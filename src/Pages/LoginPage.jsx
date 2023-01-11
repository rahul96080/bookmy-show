import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import "../Components/Styling/LoginPag.css";
import { Form, Input, Modal } from "antd";
import { Link } from "react-router-dom";


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Login({ action, handleCloseLogin }) {
  const [signInForm] = Form.useForm();

  return (
    <div>
      <Modal
        title="Get Started"
        open={action}
        onCancel={handleCloseLogin}
        footer={
          <div key="userModalFooter">
            <Button
              key="submit"
              type="primary"
              htmlType="submit"
              form="signInForm"
            >
              Sign In
            </Button>
          </div>
        }
        style={{textAlign:"center"}}
      >
         <Form form={signInForm} name="signInForm" onFinish={handleCloseLogin}>
            <Form.Item
              label="Username"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
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
          </Form>
          <div style={{ border: "none" }} className="google">
            {" "}
            OR
          </div>

          <div className="google">
            <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
              <title>Google</title>
              <g fill="none">
                <path
                  d="M18.33 9.744c0-.65-.058-1.274-.167-1.874H9.536v3.544h4.93a4.214 4.214 0 0 1-1.828 2.765v2.298h2.96c1.733-1.595 2.732-3.943 2.732-6.733z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M9.536 18.696c2.473 0 4.547-.82 6.062-2.219l-2.96-2.298c-.82.55-1.87.874-3.102.874-2.386 0-4.406-1.611-5.126-3.777H1.35v2.374a9.157 9.157 0 0 0 8.186 5.046z"
                  fill="#34A853"
                ></path>
                <path
                  d="M4.41 11.276a5.507 5.507 0 0 1-.287-1.74c0-.604.104-1.191.287-1.74V5.421H1.35a9.157 9.157 0 0 0-.975 4.114c0 1.478.354 2.877.974 4.114l3.06-2.374z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M9.536 4.018c1.345 0 2.552.463 3.502 1.37l2.627-2.627C14.08 1.283 12.005.375 9.535.375A9.157 9.157 0 0 0 1.35 5.422l3.06 2.373C5.13 5.63 7.15 4.018 9.537 4.018z"
                  fill="#EA4335"
                ></path>
                <path d="M.375.375h18.321v18.321H.375z"></path>
              </g>
            </svg>
            Continue with Google
          </div>
          <p>
              Create New Account <Link to="/signup">Sign Up</Link>
          </p>
          <div>
            I agree to the{" "}
            <a href="" color="DIMGRAY">
              Terms &amp; Conditions
            </a>{" "}
            &amp;{" "}
            <a href="" color="DIMGRAY">
              Privacy Policy
            </a>
          </div>
      </Modal>
    </div>
  );
}
