import styled from 'styled-components/macro';


export const Container = styled.div`

    display: flex;
    justify-content: center;
    text-align: center;
    padding: 70px 250px;
    margin: auto;
    flex-direction: column;

    @media(max-width: 1000px){
        padding: 70px 30px;
    }
    animation-delay: -2s;
    @keyframes mymove {
        from {left: 0px;}
        to {left: 0px;}
      }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    animation-delay: -2s;
    @keyframes mymove {
        from {left: 0px;}
        to {left: 0px;}
      }
`;

export const Row = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px,1fr));
    grid-gap: 15px;

    @media(max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(150px,1fr));
    }

    animation-delay: -2s;
    @keyframes mymove {
        from {left: 0px;}
        to {left: 0px;}
      }
`;

export const Link = styled.a`
    font-family: Poppins;
    color: white;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
    animation-delay: -2s;
    @keyframes mymove {
        from {left: 0px;}
        to {left: 0px;}
      }
`;

export const Title = styled.p`
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    color: white;
    margin-bottom: 40px;
    animation-delay: -2s;
    @keyframes mymove {
        from {left: 0px;}
        to {left: 0px;}
      }

`;

export const Text = styled.p`
    font-family: Poppins;
    font-size: 16px;
    color: white;
    margin-bottom: 40px;
    animation-delay: -2s;
    @keyframes mymove {
        from {left: 0px;}
        to {left: 0px;}
      }

`;

export const Break = styled.p`
    flex-basis: 100&;
    height: 0;
    animation-delay: -2s;
    
    @keyframes mymove {
        from {left: 0px;}
        to {left: 0px;}
      }
`;














