import React from 'react';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCol,
    IonRow,
    IonInput,
    IonText,
} from '@ionic/react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './SignIn.css';
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    showForgotPasswordAlert: false
};

export class SignIn extends React.Component<any> {
    state: any = {};
    props: any = {};
    constructor(props: any) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = (event: any) => {

    };
    onChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    toggleForgorPasswordModal = () => {
        const { showForgotPasswordAlert } = this.state;
        this.setState({
            showForgotPasswordAlert: !showForgotPasswordAlert
        })
    }
    forgotPassword = (event: any) => {

    }
    render() {
        const { email, password, error, showForgotPasswordAlert } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Sign In</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonRow class="row">
                        <div>
                            <IonText><h2 no-margin margin-vertical className="text-center">Sign In</h2></IonText>
                        </div>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                name="email"
                                value={email}
                                onIonChange={this.onChange}
                                clearInput
                                type="email"
                                placeholder="Email"
                                class="input"
                                padding-horizontal
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                clearInput
                                name="password"
                                value={password}
                                onIonChange={this.onChange}
                                type="password"
                                placeholder="Password"
                                class="input"
                                padding-horizontal
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <NavLink to="forgot-password">
                        <IonRow>
                            <IonCol onClick={this.toggleForgorPasswordModal}>
                                <IonText ><h6 no-margin text-end className="small black">Forgot Password?</h6></IonText>
                            </IonCol>
                        </IonRow>
                    </NavLink>
                    <IonRow>
                        <IonCol>
                            <IonButton disabled={isInvalid} onClick={this.onSubmit} type="submit" expand="block" color="undefined" class="btn-transition"><strong className="white">Sign In</strong></IonButton>
                        </IonCol>
                    </IonRow>
                    {error && <p>{error.message}</p>}
                    <NavLink to="signup">
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" fill="outline" color="undefined" class="btn-color"><strong>New? Create an Account</strong></IonButton>
                            </IonCol>
                        </IonRow>
                    </NavLink>
                    <NavLink to={ROUTES.HOME}>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" fill="outline" color="undefined" class="btn-color"><strong>Skip >>></strong></IonButton>
                            </IonCol>
                        </IonRow>
                    </NavLink>
                </IonContent >
            </IonPage >
        );
    }
}

export default compose(
    withRouter,
)(SignIn);