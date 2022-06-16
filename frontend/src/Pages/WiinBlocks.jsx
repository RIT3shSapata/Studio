import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import { TextField } from '../styles/GlobalStyles';
import StudioBackground from '../dist/studioBackground.webp';

const StyledContainer = styled('div')((props) => ({
    backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(${StudioBackground})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    [props.theme.breakpoints.down('sm')]: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    height: '100vh',
    '& .container': {
        position: 'relative',
        boxShadow: '10px 10px 20px rgba(0,0,0,0.25)',
        background: 'rgba(0,0,0,0.55)',
        mixBlendMode: 'normal',
        border: '1px solid #000',
        borderRadius: '50px',
        marginLeft: '130px',
        maxWidth: '921px',
        maxHeight: '555px',
        width: '100%',
        transform: 'translateY(20vh)',
        [props.theme.breakpoints.down('xl')]: {
            marginLeft: '87px',
            maxWidth: '614px',
            maxHeight: '370px',
            borderRadius: '33px',
            padding: '1rem 0',
        },
        '& .child': {
            padding: '2rem 0',
        },
        [`${props.theme.breakpoints.down('sm')} and (orientation:landscape)`]: {
            display: 'block',
        },
        [`${props.theme.breakpoints.down('sm')} and (orientation:portrait)`]: {
            display: 'none',
        },
    },
    '& .turn': {
        display: 'none',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        '& .phone': {
            height: '50px',
            width: '100px',
            border: '3px solid white',
            borderRadius: '10px',
            animation: 'rotate 1.5s ease-in-out infinite alternate',
            // marginTop: '250%',
            // marginLeft: '40%',
        },
        '& .message': {
            color: 'white',
            fontSize: '3rem',
            marginTop: '100px',
            textAlign: 'center',
            // marginBottom: '150%',
        },
        [`${props.theme.breakpoints.down('sm')} and (orientation:landscape)`]: {
            display: 'none',
        },
        [`${props.theme.breakpoints.down('sm')} and (orientation:portrait)`]: {
            display: 'flex',
        },
    },
    '& .titleContainer': {
        maxWidth: '838px',
        width: '100%',
        background:
            'linear-gradient(90deg,rgba(20,96,185,0.6) 0%,rgba(123,42,255,0.24)82.6%,rgba(225,42,255,0.24)100%)',
        borderRadius: '30px',
        marginLeft: '-20px',
        '& .title': {
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '40px',
            color: '#fff',
            padding: '30px 60px',
        },
        [props.theme.breakpoints.down('xl')]: {
            maxWidth: '558px',
            borderRadius: '20px',
            marginLeft: '-13px',
            '& .title': {
                fontSize: '26px',
                padding: '18px 42px',
            },
        },
    },
    '& .cpy_data': {
        padding: '2rem 4.5rem',
        [props.theme.breakpoints.down('xl')]: {
            padding: '1.5rem 3rem',
        },
        '& .cpy_title': {
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontSize: '40px',
            color: '#fff',
            [props.theme.breakpoints.down('xl')]: {
                fontSize: '27px',
            },
        },
        '& .cpy_studio': {
            fontFamily: 'Kaisei Opti',
            fontSize: '120px',
            fontWeight: '900',
            color: '#f16017',
            [props.theme.breakpoints.down('xl')]: {
                fontSize: '80px',
            },
        },
        '& .cpy_count': {
            fontFamily: 'Poppins',
            fontSize: '32px',
            fontWeight: '400',
            color: '#fff',
            padding: '1rem 0',
            [props.theme.breakpoints.down('xl')]: {
                fontSize: '21px',
                padding: '0.8rem 0',
            },
        },
        '& .cpy_link': {
            borderRadius: '30px',
            display: 'block',
            width: 'max-content',
            '& .cpy_btn': {
                background: '#F16017',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '30px',
                width: 'max-content',
                padding: '1.5rem 11.5rem',
                fontSize: '40px',
                fontFamily: 'Poppins',
                fontWeight: '700',
                color: '#fff',
            },
            [props.theme.breakpoints.down('xl')]: {
                '& .cpy_btn': {
                    borderRadius: '14px',
                    padding: '1rem 7rem',
                    fontSize: '26px',
                },
            },
        },
    },
    '@keyframes rotate': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '50%': {
            transform: 'rotate(-90deg)',
        },
        '100%': {
            transform: 'rotate(0deg)',
        },
    },
}));

// .phone {
//   height: 50px;
//   width: 100px;
//   border: 3px solid white;
//   border-radius: 10px;
//   animation: rotate 1.5s ease-in-out infinite alternate;
//   margin-top: 250%;
//   margin-left: 40%;
//   /* display: none; */
// }

// .message {
//   color: white;
//   font-size: 3em;
//   margin-top: 140px;

//   margin-bottom: 150%;
//   /* display: none; */
// }
// @keyframes rotate {
//   0% {
// 		transform: rotate(0deg)
// 	}
// 	50% {
// 		transform: rotate(-90deg)
// 	}
// 	100% {
// 		transform: rotate(-90deg)
// 	}
// }

const Wiingblocks = () => {
    return (
        <StyledContainer>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <div className="container">
                        <div className="child">
                            <div className="titleContainer">
                                <TextField className="title">
                                    Create Games, Stories, Experiences
                                </TextField>
                            </div>
                            <div className="cpy_data">
                                <TextField className="cpy_title">
                                    Wiingy
                                </TextField>
                                <TextField className="cpy_studio">
                                    Studio
                                </TextField>
                                <TextField className="cpy_count">
                                    20,000+ Creators & Counting
                                </TextField>
                                <a
                                    className="cpy_link"
                                    href="https://studio.wiingy.com">
                                    <TextField className="cpy_btn">
                                        Enter
                                    </TextField>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="turn">
                        <div className="phone"></div>
                        <div className="message">
                            Please rotate your device!
                        </div>
                    </div>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Wiingblocks;
