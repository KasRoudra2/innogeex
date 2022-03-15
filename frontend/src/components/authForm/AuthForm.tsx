import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./AuthForm.scss";

// ChangeEvent<HTMLInputElement>

const AuthForm = () => {
    const [ didMount, setDidMount ] = useState(false); 
    const [ formData, setFormData ] = useState({});
    const [ showPassword, setShowPassword ] = useState(false);
    const [ disable, setDisable] = useState(false);
    const [ confirm, setConfirm ] = useState(false);
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ message, setMessage ] = useState("");
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement>(null);
    const [ isSignup, setIsSignup ] = useState(false);
    const success = () => {
        setTimeout(() => {
          navigate("/");
        }, 1000)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        if (e.target.name==="password") setPassword(e.target.value);
    }
    const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleSwich = () => {
      setIsSignup(!isSignup);
      formRef?.current?.reset();
    };
    useEffect(() => {
        if (isSignup && password && confirmPassword){
          if (password!==confirmPassword) {
              setConfirm(false);
          } else {
              setConfirm(true);
          }
        }
        else {
            setConfirm(true)
        }
    }, [isSignup, password, confirmPassword])
    useEffect(()=>{
        if(formData){
            const isEmpty = Object.values(formData).some(x => x === '')
            if(isEmpty){
                setDisable(true);
            }
            else {
                setDisable(false);
            }
        }
        else {
            setDisable(false);
        }
    }, [formData])
    useEffect(()=>{
      setTimeout(() => setMessage(""), 3000);
    }, [message])
    useEffect(() => {
      setDidMount(true);
      return () => setDidMount(false);
    }, [])
    if(!didMount) return <CircularProgress size={400} />;
    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            { isSignup ? "Sign up" : "Sign In" }
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} ref={formRef}>
            <Grid container spacing={2}>
              { isSignup && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      onChange={handleChange}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'} 
                  id="password"
                  autoComplete="new-password"
                  InputProps={{endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={handleShowPassword}>
                         {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>)}}
                  onChange={handleChange}
                />
              </Grid>
              { isSignup && ( 
                <>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? 'text' : 'password'} 
                  id="confirmPassword"
                  autoComplete="new-password"
                  InputProps={{endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={handleShowPassword}>
                         {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>)}}
                  onChange={handleConfirm}
                />
                </Grid>
              </>
              )}
              {!confirm && (<Grid item xs={12}>
                  <Alert severity="warning">Passwords do not match!</Alert>
              </Grid>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={ (!message && confirm && !disable) ? false : true }
            >
              { isSignup ? "Sign up" : "Sign In" }
            </Button>
            <Grid item xs={12}>
            </Grid>
            {message && (
            <Grid item xs={12}>
              {(message === "Signup successful!" || message === "Login successful!") ? (
                <Alert severity="success">{message} {success()} </Alert>
              ) : (
                <Alert severity="error">{message}</Alert>
              )}
            </Grid>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={handleSwich} sx={{textTransform: "none",  fontSize:"16px"}}>
                  { isSignup ? 
                  "Already have an account? Sign in":
                  "Don't have an account? Sign Up"
                  }
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    )
};

export default AuthForm;