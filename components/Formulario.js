import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  ScrollView, Alert
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const Formulario = () => {
  const [paciente, setPaciente] = useState('')
  const [telefono, setTelefono] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const showTimePicker = () => {
    setTimePickerVisibility(true)
  }

  const hideTimePicker = () => {
    setTimePickerVisibility(false)
  }

  const confirmarFecha = date => {
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }
    setFecha(date.toLocaleDateString('es-ES', opciones))
    // console.log(fecha+'Fecha')
    setDatePickerVisibility(false)
    hideDatePicker()
  }

  const confirmarHora = time => {
    const opciones = {
      hour: 'numeric',
      minute: '2-digit'
    }
    setHora(time.toLocaleTimeString('es-ES', opciones))
    setTimePickerVisibility(false)
    hideDatePicker()
  }

  const newCita = () => {
    // validar cita
    if (paciente.trim() === '' || telefono.trim() === '' || sintomas.trim() === '' || fecha.trim() === '' || hora.trim() === '') {
      mostrarAlerta()
    } else {

    }
  }

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Todos los Campos son obligatorios',
      [{ text: 'Ok' }]
    )
  }

  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => setPaciente(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Teléfono:</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={texto => setTelefono(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Síntomas:</Text>
          <TextInput
            style={styles.input}
            multiline
            onChangeText={texto => setSintomas(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Fecha:{fecha}</Text>

          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es-ES"
            headerTextIOS="Selecciona Fecha"
            cancelTextIOS="Cancelar Fecha"
            confirmTextIOS="confirmar"
          />
        </View>

        <View>
          <Text style={styles.label}>Hora:{hora}</Text>
          <Button title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Selecciona Hora"
            cancelTextIOS="Cancelar Fecha"
            confirmTextIOS="confirmar"
          />
        </View>
        <View>
          <TouchableHighlight
            style={styles.btnAdd}
            onPress={() => newCita()}>
            <Text style={styles.textAdd}>Agregar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 10,
    backgroundColor: 'navy'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    color: '#FFF'
  },
  input: {
    marginTop: 10,
    height: 40,
    fontSize: 16,
    textAlign: 'justify',
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    color: '#FFF'
  },
  btnAdd: {
    padding: 10,
    backgroundColor: 'blue',
    marginVertical: 10
  },
  textAdd: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  }
})

export default Formulario
