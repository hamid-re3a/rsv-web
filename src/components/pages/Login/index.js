
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../../redux/action';


class Login extends Component {
    componentWillMount() {
        this.setState({
            username: '',
            password: ''
        });
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    submitForm(event) {
        event.preventDefault();
        this.props.setUser({
            username : this.state.username
        })
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="page-content--bge5">
                <div className="container">
                    <div className="login-wrap">
                        <div className="login-content">
                            <div className="login-logo">
                               
                                    <img src="imgs/logo.png" alt="آجا لوگو" />
                                
                            </div>
                            <div className="login-form">
                                <form action=""  onSubmit={this.submitForm.bind(this)}>
                                    <div className="form-group">
                                        <label>نام کاربری</label>
                                        <input className="au-input au-input--full" type="text" name="username" placeholder="نام کاربری"
                                            value={this.state.username} onChange={this.handleChange.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <label>رمز عبور</label>
                                        <input className="au-input au-input--full" type="password" name="password" placeholder="رمز عبور"
                                            value={this.state.password} onChange={this.handleChange.bind(this)} />
                                    </div>
                                    <div className="login-checkbox">
                                        <label>
                                            <input type="checkbox" name="remember" />به خاطر بسپار
                                    </label>
                                        <label>
                                            فراموشی رمز عبور
                                        </label>
                                    </div>
                                    <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit" onClick={this.submitForm.bind(this)}>ورود</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let { user } = state;
    return { user };
}
export default connect(mapStateToProps, { setUser })(Login);


