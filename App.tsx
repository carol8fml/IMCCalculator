import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const image = {
  uri: "https://cdn.dribbble.com/users/207059/screenshots/1820812/fatboywalkingdribbble2.gif",
};

export default function App() {
  const [weight, setWeight] = React.useState<any>();
  const [height, setHeight] = React.useState<any>();

  function handleSubmit() {
    const alt = height / 100;
    const imc = weight / (alt * alt);

    if (imc < 20) {
      alert("Você esta abaixo do peso!" + imc.toFixed(2));
    } else if (imc > 20 && imc <= 25) {
      alert("Peso Ideal" + imc.toFixed(2));
    } else {
      alert("Acima do peso" + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Calcule seu IMC</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={(weight) => setWeight(weight)}
          placeholder={"Peso (kg)"}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={(height) => setHeight(height)}
          placeholder={"Altura (cm)"}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#009885",
  },
  container: {
    flex: 1,
    marginTop: 40,
    marginRight: 40,
    marginLeft: 40,
    maxHeight: 200,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 25,
  },
  input: {
    borderRadius: 3,
    border: "none",
    backgroundColor: "#ffffff",
    marginTop: 20,
    padding: 10,
    fontSize: 15,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 3,
    marginTop: 20,
    padding: 10,
  },
  buttonText: {
    color: "#009885",
    fontWeight: "bold",
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
});
