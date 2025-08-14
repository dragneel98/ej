// Dada esta lista de frutas, mostrarla en una FlatList.

const frutas = [
    { id: "1", nombre: "Manzana" },
    { id: "2", nombre: "Banana" },
    { id: "3", nombre: "Naranja" }
];

return (
    <SafeAreaView style={styles.container}>
        <FlatList style={styles.list} data={frutas} keyExtractor={item => item.id} renderItem={({ item }) => <Text> {item.nombre} </Text>} />
    </SafeAreaView>
);
