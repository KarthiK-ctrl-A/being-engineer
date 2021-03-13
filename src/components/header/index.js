import React from 'react';
import {Link as ReactRouterLink } from 'react-router-dom';
import { Background ,FeatureCallOut ,Link ,Group ,Dropdown ,Feature ,Text ,Container ,Logo ,ButtonLink, Picture, Profile } from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {

    return bg ? <Background {...restProps}>{ children }</Background> : children;

}

Header.Profile = function HeaderProfile({ children, ...restProps}) {
     return <Profile {...restProps}> { children }</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={'/images/users/${src}.png'} />;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature { ...restProps }>{ children }</Feature>;
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{ children }</FeatureCallOut>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Header.Dropdown = function HeaderDrodown({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Text = function Headertext({children, ...restProps}) {
    return <Text {...restProps}> { children } </Text>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{ children }</Group>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {

    return <ButtonLink {...restProps}>{ children }</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {

    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};