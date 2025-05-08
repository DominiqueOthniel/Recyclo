import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'; // For validation

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/14/a1/ad/14a1ad90bbac6d2fe3a9721350b0cd6a.jpg' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Recyclo</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log("Form Submitted", values);  // Debugging: check the values
          // Simulating a successful login
          if (values.email && values.password) {
            console.log("Login successful!");
            navigation.navigate('Home'); // Navigate to the home screen after successful login
          } else {
            console.log("Login failed: missing values");
          }
        }}
        validationSchema={validationSchema} // Adding validation schema
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={[styles.input, touched.email && errors.email ? styles.inputError : null]}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={[styles.input, touched.password && errors.password ? styles.inputError : null]}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f5e9', // Light green background
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1b5e20', // Dark green for the title
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 14,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: '#00796b', // Darker green border
    borderRadius: 8, // Rounded corners for modern feel
    backgroundColor: '#ffffff',
  },
  inputError: {
    borderColor: '#d32f2f', // Red border when there's an error
  },
  button: {
    width: '100%',
    padding: 14,
    backgroundColor: '#66bb6a', // Soft green for the button
    borderRadius: 8, // Rounded corners for the button
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#388e3c',
    fontSize: 14,
    fontWeight: '500',
  },
  errorText: {
    color: '#d32f2f', // Red text for error messages
    fontSize: 12,
    marginBottom: 10,
  },
});
