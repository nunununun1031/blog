import React, { useEffect, useState } from 'react'
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { getLogin, selectLogin, changeAdmin } from '../../features/login/loginSlice';
import Header from '../organisms/Header';
import { useHistory } from 'react-router-dom';
import styles from "./Login.module.scss"

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const loginValue = useSelector(selectLogin);
    
    useEffect(() => {
        dispatch(getLogin())
    },[dispatch])
    
    const [password, setPassword] = useState("")

    const checkPassword = async() => {
        if(loginValue.isAdmin === false) {
            if(password === loginValue.password) {
                await dispatch(changeAdmin({isAdmin: true, password: "AdminIsMe"}));
            } else {
                setPassword("")
                alert("パスワードが違います。再度入力してください。")
            }
        } else {
            await dispatch(changeAdmin({isAdmin: false, password: "AdminIsMe"}))
        }
        setPassword("")
        history.push("/")
    }

    return (
        <div>
            <Header/>
            <div className={styles.root}>
            <Typography variant="h2">
                {loginValue.isAdmin === false ? "Login" : "Logout"}
            </Typography>

            {loginValue.isAdmin === false ? (
                <TextField
                    label="パスワード"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            ) : ""
            }
            <Button
                variant="contained"
                color="primary"
                onClick={checkPassword}
            >
            {loginValue.isAdmin === false ? "ログイン" : "ログアウト"}
            </Button>
            </div>
        </div>
    )
}

export default Login
