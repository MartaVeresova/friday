import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Error404} from '../pages/Error404'
import {Login} from '../pages/Login'
import {CheckIn} from '../pages/CheckIn';
import {Profile} from '../pages/Profile';
import {EnteringNewPassword} from '../pages/EnteringNewPassword';
import {PasswordRecovery} from '../pages/PasswordRecovery';


export const Routes = () => {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={'/'}/>}/>

                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/checkIn'} render={() => <CheckIn/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/passwordRecovery'} render={() => <PasswordRecovery/>}/>
                <Route path={'/enteringNewPassword'} render={() => <EnteringNewPassword/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/404'} render={() => <Error404/>}/>
                <Redirect from={'*'} to={'/404'}/>

            </Switch>
        </div>
    )
}