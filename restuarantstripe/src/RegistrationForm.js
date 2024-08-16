import React,{useRef,useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Paper, CircularProgress, Alert } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha'
import './App.css';
import { validationSchema } from './RegistrationValidation';

const RegistrationForm = () => {
    const recaptcha = useRef();
const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (values, { setSubmitting }) => {
    // setLoading(true);
    // setSuccessMessage('');
    try {
      setLoading(true);
      setSuccessMessage('');
        const captchaValue = recaptcha.current.getValue()
        if (!captchaValue) {
          alert('Please verify the reCAPTCHA!')
        } else {
            await axios.post('http://localhost:1337/api/auth/local/register', values);
            setSuccessMessage('Registration successful');
            
        }
    } catch (error) {
      console.error('Error during registration:', error);
      setSuccessMessage('Registration failed');
    } finally {
       setLoading(false);
        setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom sx={{
            fontWeight: 'bold',
            fontFamily: 'Roboto, sans-serif',
            color: 'black',
            textAlign: 'center'
          }} >
          Registration
        </Typography>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    name="username"
                    as={TextField}
                    label="Username"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="username" />}
                    error={Boolean(<ErrorMessage name="username" />)}
                    InputProps={{
                        style: { color: 'black' } 
                      }}
                      InputLabelProps={{
                        style: { color: 'black' } 
                      }}
                      sx={{
                        '& .MuiFormHelperText-root': {
                          color: 'red'
                        },
                        '& .MuiFormLabel-root.Mui-error': {
                          color: 'black'
                        },
                        '& .MuiInputBase-root.Mui-error': {
                          color: 'black'
                        }
                      }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="email"
                    as={TextField}
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="email" />}
                    error={Boolean(<ErrorMessage name="email" />)}
                    InputProps={{
                      style: { color: 'black' }
                    }}
                    InputLabelProps={{
                      style: { color: 'black' }
                    }}
                    sx={{
                      '& .MuiFormHelperText-root': {
                        color: 'red'
                      },
                      '& .MuiFormLabel-root.Mui-error': {
                        color: 'black'
                      },
                      '& .MuiInputBase-root.Mui-error': {
                        color: 'black'
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="password"
                    as={TextField}
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="password" />}
                    error={Boolean(<ErrorMessage name="password" />)}
                    InputProps={{
                      style: { color: 'black' }
                    }}
                    InputLabelProps={{
                      style: { color: 'black' }
                    }}
                    sx={{
                      '& .MuiFormHelperText-root': {
                        color: 'red'
                      },
                      '& .MuiFormLabel-root.Mui-error': {
                        color: 'black'
                      },
                      '& .MuiInputBase-root.Mui-error': {
                        color: 'black'
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="confirmPassword"
                    as={TextField}
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="confirmPassword" />}
                    error={Boolean(<ErrorMessage name="confirmPassword" />)}
                    InputProps={{
                      style: { color: 'black' }
                    }}
                    InputLabelProps={{
                      style: { color: 'black' }
                    }}
                    sx={{
                      '& .MuiFormHelperText-root': {
                        color: 'red'
                      },
                      '& .MuiFormLabel-root.Mui-error': {
                        color: 'black'
                      },
                      '& .MuiInputBase-root.Mui-error': {
                        color: 'black'
                      }
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                  <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} style={{ margin: '0 auto' }}/>
                </Grid>
               <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{
                      backgroundColor: '#003366', 
                      '&:hover': {
                        backgroundColor: '#002244' 
                      }
                    }}
                    disabled={isSubmitting}startIcon={loading ? <CircularProgress size={24} /> : null}> {isSubmitting ? 'Submitting...' : 'Register'}</Button>
                </Grid> 
              </Grid>
            {successMessage && (
                <Grid item xs={12} mt={2}>
                <Alert severity={successMessage === 'Registration successful' ? 'success' : 'error'}>
                    {successMessage}
      </Alert>
    </Grid>
  )}
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;

