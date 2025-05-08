import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Rapport de Collecte</Text>

      <Formik
        initialValues={{ type: '', poids: '', lieu: '' }}
        validationSchema={Yup.object({
          type: Yup.string().required('Requis'),
          poids: Yup.number().required('Requis').positive('Doit être positif'),
          lieu: Yup.string().required('Requis'),
        })}
        onSubmit={(values) => {
          alert(`Rapport soumis ✔️\n\nType: ${values.type}\nPoids: ${values.poids} kg\nLieu: ${values.lieu}`);
        }}
      >
        {({ handleChange, handleSubmit, values, setFieldValue, errors, touched }) => (
          <View style={styles.form}>
            <Text style={styles.label}>Type de déchet</Text>
            <Picker
              selectedValue={values.type}
              onValueChange={(value) => setFieldValue('type', value)}
              style={styles.picker}
            >
              <Picker.Item label="-- Choisir --" value="" />
              <Picker.Item label="Plastique" value="Plastique" />
              <Picker.Item label="Verre" value="Verre" />
              <Picker.Item label="Organique" value="Organique" />
              <Picker.Item label="Métal" value="Métal" />
            </Picker>
            {touched.type && errors.type && <Text style={styles.error}>{errors.type}</Text>}

            <Text style={styles.label}>Poids estimé (kg)</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Ex: 2.5"
              style={styles.input}
              value={values.poids}
              onChangeText={handleChange('poids')}
            />
            {touched.poids && errors.poids && <Text style={styles.error}>{errors.poids}</Text>}

            <Text style={styles.label}>Lieu de dépôt</Text>
            <TextInput
              placeholder="Ex: Point A, Rue 5"
              style={styles.input}
              value={values.lieu}
              onChangeText={handleChange('lieu')}
            />
            {touched.lieu && errors.lieu && <Text style={styles.error}>{errors.lieu}</Text>}

            <Text style={styles.label}>Photo (simulée)</Text>
            <Image
              source={{ uri: 'https://via.placeholder.com/150?text=Photo+déchet' }}
              style={styles.image}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Soumettre le rapport</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#f1f8e9',
      padding: 20,
    },
    header: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#2e7d32',
      marginBottom: 20,
      textAlign: 'center',
    },
    label: {
      fontSize: 16,
      fontWeight: '500',
      color: '#33691e',
      marginBottom: 6,
    },
    input: {
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#aed581',
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 12,
      fontSize: 16,
      marginBottom: 16,
    },
    picker: {
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#aed581',
      borderRadius: 10,
      marginBottom: 16,
    },
    imagePlaceholder: {
      width: '100%',
      height: 180,
      borderRadius: 12,
      backgroundColor: '#c8e6c9',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    placeholderText: {
      color: '#4caf50',
      fontSize: 16,
    },
    button: {
      backgroundColor: '#388e3c',
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  