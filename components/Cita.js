/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const Cita = ({ cita, eliminarPaciente }) => {
  const dialogoEliminar = (id) => {
    console.log('eliminando...', id)
    eliminarPaciente(id)
  }
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{cita.id}</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Síntomas:</Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight
        style={styles.btnEliminar}
        onPress={() => dialogoEliminar(cita.id)}>
          <Text style={styles.textEliminar}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    color: 'red',
  },
  texto: {
    fontSize: 16,
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#a70e0e',
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
})

export default Cita
