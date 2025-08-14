// Ejercicio 1
// Crear un componente que muestre un TextInput y, debajo, el texto que el usuario escribe.
const [input, setInput] = useState("gg");

return (
    <SafeAreaView style={styles.container}>
        <TextInput value={input} onChangeText={() => setInput()} />
        <Text> hola  {input}</Text>
    </SafeAreaView>
);