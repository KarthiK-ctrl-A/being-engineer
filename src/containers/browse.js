import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import  { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function BrowseContainer({ slides }) {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);


    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);
    

    return profile.displayName ? (

        <>
        {loading ?  <Loading src={user.photoURL} /> :  <Loading.ReleaseBody /> }

            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="BeingEngineer" />
                    <Header.TextLink>videos</Header.TextLink>
                    <Header.TextLink>Notes</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Engineer</Header.FeatureCallOut>
                    <Header.Text>
                        “Someone that gets excited about
                        things no one else cares about and
                        solves problems you dont know.”
                    </Header.Text>
                </Header.Feature>
            </Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );  
}

