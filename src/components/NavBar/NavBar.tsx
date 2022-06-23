import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useRef, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from "../../redux/app/hooks";
import {searchMoviesAsync} from "../../redux/features/search-slice";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [searchInput, setSearchInput] = useState("");
    const [showNavBarBackground, setShowNavBarBackground] = useState(true);
    // const searchbarRef = useRef<HTMLDivElement>(document.createElement('div'));
    // const searchInputRef = useRef<HTMLInputElement>(document.createElement('input'));

    const fetchResults = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(searchMoviesAsync(searchInput))
        if (searchInput.length > 0) {
            navigate(`/search?q=${searchInput}`, {replace: true});
            // dispatch(fetchSearchResultsAsync(value));
        } else navigate(`/`, {replace: true});
    }

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearchInput(value);
    };


    useEffect(() => {
        window.addEventListener(('scroll'), () => {
            if (window.scrollY > 100) {
                setShowNavBarBackground(false)
            } else {
                setShowNavBarBackground(true)
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {
            })
        }
    }, [])

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed" sx={showNavBarBackground ? {
                background: 'transparent',
                boxShadow: 'none',
                transition: '.3s all ease-in-out'
            } : {transition: '.3s all ease-in-out'}}>
                <Toolbar>

                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        Movie Watcher App
                    </Typography>
                    <Box sx={{flexGrow: 1}}/>
                    <form onSubmit={fetchResults}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                                value={searchInput}
                                onChange={handleSearchInput}
                                // ref={searchInputRef}
                            />
                        </Search>
                    </form>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
