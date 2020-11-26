import React, {useEffect} from 'react'
import { useFeathers } from 'figbird'
import Button from '@material-ui/core/Button';

const LoginButton = () => {
    const client = useFeathers();

    useEffect(() => {
        client.reAuthenticate().then((user) => {
            console.log(user)
          }).catch((error) => {
            console.log(error, 'go to login page')
          });

    }, [client])

    return (
        <div>
            <Button variant="contained" href="http://localhost:3030/oauth/google">Google Login</Button>
        </div>
    )
}

export default LoginButton;
