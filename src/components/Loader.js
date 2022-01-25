import React from 'react';
import styled from 'styled-components';

const Loader = () => {
    return (
        <Container>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </Container>
    );
};

export default Loader;

const Container = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;

    .lds-ripple {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }

    .lds-ripple div {
        position: absolute;
        border: 4px solid #ff7626;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }
`;
