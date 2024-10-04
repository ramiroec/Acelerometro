import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [steps, setSteps] = useState(0);
  const [previousMagnitude, setPreviousMagnitude] = useState(0);

  useEffect(() => {
    // Suscribirse al acelerómetro
    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);

      // Cálculo de la magnitud de la aceleración
      const { x, y, z } = accelerometerData;
      const magnitude = Math.sqrt(x * x + y * y + z * z);

      // Detectar paso basado en un umbral de magnitud (entre 1.1 y 1.5)
      if (magnitude > 1.1 && magnitude < 1.5 && previousMagnitude <= 1.1) {
        setSteps(steps + 1);
      }

      // Actualizar magnitud anterior
      setPreviousMagnitude(magnitude);
    });

    // Configurar el intervalo de actualización
    Accelerometer.setUpdateInterval(500);

    return () => subscription && subscription.remove();
  }, [steps, previousMagnitude]);

  const { x, y, z } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acelerómetro y Contador de Pasos</Text>

      {/* Iconos para mostrar información */}
      <View style={styles.iconRow}>
        <View style={styles.iconContainer}>
          <FontAwesome name="road" size={32} color="#333" />
          <Text style={styles.iconText}>{steps} Pasos</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="heartbeat" size={32} color="#e74c3c" />
          <Text style={styles.iconText}>Activo</Text>
        </View>
      </View>

      {/* Datos del acelerómetro */}
      <View style={styles.dataContainer}>
        <Text style={styles.text}>X: {x.toFixed(2)}</Text>
        <Text style={styles.text}>Y: {y.toFixed(2)}</Text>
        <Text style={styles.text}>Z: {z.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconText: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
  dataContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
});
