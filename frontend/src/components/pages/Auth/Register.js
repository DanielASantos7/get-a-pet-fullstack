import {useContext, useState} from 'react'


import Input from '../../form/InputAndTextarea'
import {Link} from 'react-router-dom'

import styles from '../../form/Form.module.css'

// contexts
import { Context } from '../../../assets/context/UseContext'

function Register() {
    const [user, setUser] = useState({})
    const {register} = useContext(Context)


    function handleOnChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        // enviar o usuario para o banco
        register(user)
    }

    return (
        <section className={styles.form_container}>
            <h1>Cadastrar</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handleOnChange={handleOnChange}
                />

                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu telefone"
                    handleOnChange={handleOnChange}
                />

                <Input 
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite o seu email"
                    handleOnChange={handleOnChange}
                />

                  <Input 
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    handleOnChange={handleOnChange}
                />

                  <Input 
                    text="Confirmação de senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a sua senha"
                    handleOnChange={handleOnChange}
                />

                <input type="submit" value="Cadastrar" />
            </form>
            <p>
                Já tem conta? <Link to="/login">Clique aqui</Link>
            </p>
        </section>
    )

}

export default Register