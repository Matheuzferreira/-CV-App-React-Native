import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, ImageBackground } from 'react-native'; 

const CONTACT_EMAIL = 'protimatheus@gmail.com'; 
const LINKEDIN_URL = 'https://www.linkedin.com/in/matheus-ferreira-b656322b8'; 
const GITHUB_URL = 'https://github.com/Matheuzferreira'; 

const handleCardPress = (title: string, content: string) => {
  Alert.alert(title, content);
};


const handleContactPress = () => {
    Alert.alert(
        'Opções de Contato',
        'Selecione o que deseja abrir:',
        [
            { 
                text: 'E-mail', 
                onPress: () => Linking.openURL(`mailto:${CONTACT_EMAIL}`) 
            },
            { 
                text: 'LinkedIn', 
                onPress: () => Linking.openURL(LINKEDIN_URL) 
            },
            { 
                text: 'GitHub', 
                onPress: () => Linking.openURL(GITHUB_URL) 
            },
            { 
                text: 'Cancelar', 
                style: 'cancel' 
            },
        ],
        { cancelable: true }
    );
};


export default function App() {
  return (
    
    <ImageBackground
      source={require('../assets/background_pattern.png')} 
      style={styles.backgroundImage}
      resizeMode="repeat" 
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}> 
        
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Image
            source={require('../assets/fotoperfil.png')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Matheus Ferreira R. Campos</Text>
          <Text style={styles.role}>Estudante de Análise e Desenvolvimento de Sistemas | UI/UX</Text>
        </View>

        {/* Sobre */}
        <Text style={styles.sectionTitle}>Sobre mim</Text>
        <Text style={styles.about}>
          Estudante de ADS na Faculdade Senac Recife (3º período), 23 anos. Meu foco é em Design de Interface (UI/UX) e desenvolvimento Front-end para criar experiências digitais funcionais e intuitivas.
        </Text>

        {/* Cards FUNCIONAIS com conteúdo detalhado */}
        <View style={styles.cardContainer}>
          
          {/* Card Formação (Detalha o Projeto Integrador) */}
          <TouchableOpacity 
            style={styles.card}
            onPress={() => handleCardPress(
              '🎓 Formação e Foco',
              'Tecnólogo em Análise e Desenvolvimento de Sistemas\nSenac Recife (2024-2026)\n\nProjeto Integrador:\n• Scrum Master e Designer do Aplicativo (Figma).\n• Experiência que impulsionou o interesse em UI/UX e estudos em Front-end.'
            )}
          >
            <Text style={styles.cardTitle}>🎓 Formação</Text>
            <Text style={styles.cardText}>Tecnólogo em Análise e Desenvolvimento de Sistemas — Senac Recife (2024-2026)</Text>
          </TouchableOpacity>

          {/* Card Experiência & Projetos */}
          <TouchableOpacity 
            style={styles.card}
            onPress={() => handleCardPress(
              '💼 Experiências Profissionais',
              '1. Hospital Esperança Olinda (Rede D\'Or):\nJovem Aprendiz (jun/2024 – mar/2025) no setor de Auditorias Médicas.\nFunções: Auxílio a auditoras, fechamento de contas e ajustes de planilhas Excel.\n\n2. Residência de Projetos – Accenture Recife (2024):\nExperiência prática no desenvolvimento de soluções digitais em equipe, aplicando UX/UI e metodologias ágeis.'
            )}
          >
            <Text style={styles.cardTitle}>💼 Experiência & Projetos</Text>
            <Text style={styles.cardText}>
              **Projeto Integrador**, **Hospital Esperança Olinda**, **Residência Accenture**. (Clique para detalhes)
            </Text>
          </TouchableOpacity>

          {/* Card Habilidades Técnicas e Soft Skills */}
          <TouchableOpacity 
            style={styles.card}
            onPress={() => handleCardPress(
              '🧠 Habilidades Técnicas e Comportamentais',
              'Hard Skills:\n• Figma, Miro, Canva (Mediano/Avançado)\n• HTML & CSS (Nível Médio)\n• JavaScript (Básico), Git, Inglês Básico.\n\nSoft Skills:\n• Vontade de Aprender, Responsabilidade, Proatividade, Comunicação Eficaz e Trabalho em Equipe.'
            )}
          >
            <Text style={styles.cardTitle}>🧠 Habilidades Técnicas</Text>
            <Text style={styles.cardText}>Figma • HTML • CSS • JavaScript (Básico) • Git • Inglês Básico</Text>
          </TouchableOpacity>

          {/* Card Contato (Agora abre um Alert com opções de links) */}
          <TouchableOpacity
            style={[styles.card, styles.contactCard]}
            onPress={handleContactPress} 
          >
            <Text style={styles.cardTitle}>📧 Contato</Text>
            <Text style={styles.cardText}>Clique para E-mail, LinkedIn ou GitHub</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
  backgroundImage: {
    flex: 1,
    
  },
  
  scrollViewContent: {
    padding: 20,
    
    backgroundColor: 'rgba(13, 13, 13, 0.7)', 
    minHeight: '100%',
  },
  container: {
    
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#6C63FF', 
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    marginTop: 15,
  },
  about: {
    color: '#ccc',
    marginBottom: 20,
  },
  cardContainer: {
    gap: 15,
  },
  card: {
    backgroundColor: '#1A1A1A',
    padding: 15,
    borderRadius: 12,
  },
  contactCard: {
    backgroundColor: '#262626',
    borderLeftWidth: 4, 
    borderLeftColor: '#6C63FF',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardText: {
    color: '#ccc',
    marginTop: 4,
  },
});