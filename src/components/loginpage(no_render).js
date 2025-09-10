// import React from "react";
// import { login, register } from "../utils";
// import { message } from "antd";


// class LoginPage extends React.Component {
//   formRef = React.createRef();
//   state = {
//     asHost: false,
//     loading: false,
//   };


//   handleLogin = async () => {
//     const formInstance = this.formRef.current;


//     try {
//       await formInstance.validateFields();
//     } catch (error) {
//       return;
//     }


//     this.setState({
//       loading: true,
//     });


//     try {
//       const { asHost } = this.state;
//       const resp = await login(formInstance.getFieldsValue(true));
//       this.props.handleLoginSuccess(resp.token, asHost);
//     } catch (error) {
//       message.error(error.message);
//     } finally {
//       this.setState({
//         loading: false,
//       });
//     }
//   };


//   handleRegister = async () => {
//     const formInstance = this.formRef.current;


//     try {
//       await formInstance.validateFields();
//     } catch (error) {
//       return;
//     }


//     this.setState({
//       loading: true,
//     });


//     try {
//       await register({
//         ...formInstance.getFieldsValue(true),
//         role: this.state.asHost ? "ROLE_HOST" : "ROLE_GUEST",
//       });
//       message.success("Register Successfully");
//     } catch (error) {
//       message.error(error.message);
//     } finally {
//       this.setState({
//         loading: false,
//       });
//     }
//   };


//   handleCheckboxOnChange = (e) => {
//     this.setState({
//       asHost: e.target.checked,
//     });
//   };
// }


// export default LoginPage;
