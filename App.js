import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');

  const [dadosEnviados, setDadosEnviados] = useState(null);

  useEffect(() => {
    console.log('Aplicativo de Cadastro Profissional iniciado!');
  }, []);

  const handleEnviar = () => {
    if (!nome || !curso || !disciplina || !descricao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos do formulário.');
      return;
    }

    setDadosEnviados({
      nome,
      curso,
      disciplina,
      descricao,
    });
  };
  const handleLimpar = () => {
    setNome('');
    setCurso('');
    setDisciplina('');
    setDescricao('');
    setDadosEnviados(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {}
        <View style={styles.header}>
          <Text style={styles.titulo}>Formulário de Cadastro</Text>
          <Text style={styles.subtituloHeader}>Preencha suas informações acadêmicas</Text>
        </View>

        {}
        <View style={styles.formCard}>
          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Ionicons name="person-outline" size={18} color="#555" />
              <Text style={styles.label}>Nome Completo</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Ionicons name="school-outline" size={18} color="#555" />
              <Text style={styles.label}>Curso</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Ex: Sistemas de Informação"
              value={curso}
              onChangeText={setCurso}
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Ionicons name="book-outline" size={18} color="#555" />
              <Text style={styles.label}>Disciplina</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Ex: Desenvolvimento Mobile"
              value={disciplina}
              onChangeText={setDisciplina}
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Ionicons name="chatbubble-ellipses-outline" size={18} color="#555" />
              <Text style={styles.label}>Descrição ou Apresentação Pessoal</Text>
            </View>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Conte um pouco sobre você..."
              value={descricao}
              onChangeText={setDescricao}
              multiline={true}
              numberOfLines={3}
            />
          </View>

          {}
          <View style={styles.buttonGroup}>
            <Button title="Enviar Dados" onPress={handleEnviar} color="#6200EE" />
            <Button title="Limpar" onPress={handleLimpar} color="#B00020" />
          </View>
        </View>

        {}
        {dadosEnviados && (
          <View style={styles.resultadoContainer}>
            <View style={styles.resultadoHeaderRow}>
              <Ionicons name="checkmark-circle-outline" size={24} color="#00C853" />
              <Text style={styles.resultadoTitulo}>Dados Cadastrados com Sucesso!</Text>
            </View>

            <View style={styles.resultadoCard}>
              <View style={styles.resultRow}>
                <Ionicons name="person-circle-outline" size={18} color="#333" />
                <Text style={styles.resultText}>
                  <Text style={styles.bold}>Nome:</Text> {dadosEnviados.nome}
                </Text>
              </View>

              <View style={styles.resultRow}>
                <Ionicons name="school-circle-outline" size={18} color="#333" />
                <Text style={styles.resultText}>
                  <Text style={styles.bold}>Curso:</Text> {dadosEnviados.curso}
                </Text>
              </View>

              <View style={styles.resultRow}>
                <Ionicons name="book-circle-outline" size={18} color="#333" />
                <Text style={styles.resultText}>
                  <Text style={styles.bold}>Disciplina:</Text> {dadosEnviados.disciplina}
                </Text>
              </View>

              <View style={styles.resultRow}>
                <Ionicons name="chatbubbles-outline" size={18} color="#333" />
                <Text style={styles.resultText}>
                  <Text style={styles.bold}>Descrição:</Text> {dadosEnviados.descricao}
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtituloHeader: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  formCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 15,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonGroup: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resultadoContainer: {
    marginBottom: 30,
  },
  resultadoHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  resultadoTitulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#00C853',
    textAlign: 'center',
    marginLeft: 8,
  },
  resultadoCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#00C853',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default App;
