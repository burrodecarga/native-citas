import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Cita from './components/Cita'
import Formulario from './components/Formulario'

const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [citas, setCitas] = useState([
    { id: '1', paciente: 'Perrin', sintomas: 'No come' },
    { id: '2', paciente: 'Perron', sintomas: 'No duerme' },
    { id: '3', paciente: 'Perrun', sintomas: 'No canta' },
    { id: '4', paciente: 'Perruan', sintomas: 'No jiliopoyea' },
    { id: '5', paciente: 'Perrinua', sintomas: 'No dico' },
    { id: '6', paciente: 'Perrinoctio', sintomas: 'No Bdc' }
  ])

  // Elimina Pacientes del state

  const eliminarPaciente = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id)
    })
  }

  return (
      <View style={styles.contenedor}>
      <Text style={styles.titulo}>{citas.length > 0 ? 'Administrador de Citas' : 'No hay Citas'}</Text>

      <View style={styles.contenido}>
           <Formulario />

      <FlatList
        style={styles.listado}
        data={citas}
        keyExtractor={cita => cita.id}
        renderItem={({ item }) => <Cita cita={item} eliminarPaciente={eliminarPaciente}/>}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'dodgerblue'
  },
  titulo: {
    marginTop: 40,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF'
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado: {
    flex: 1,
    marginHorizontal: '2.5%'
  }
})

export default App
