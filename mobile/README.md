# Passos para a construção:

  * Instalar expo globalmente na sua maquina : npm install -g expo-cli;
  * Criando projeto mobile                   : expo init <nomeProjeto>;
    OBS: no nosso projeto foi selecionado o template blank;
  * Instalar o app do expo no celular;
  * acessar a pasta e startar o projeto      : npm start;
  * Com o App do celular ler o QRCod;
     obs: * O celular e o PC devem estar na mesma rede;
  * Instalar o react-navigation              : npm install @react-navigation/native;
  * Instalar dependencias de projeto do expo : expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view;
  * Instalar stack navigation (navegação por abas): npm install @react-navigation/stack
  * Pacote de Constants do expo              : expo install expo-constants;
  * Para invocar o envio de e-mail           : expo install expo-mail-composer;
  * Para o direcionamento para o whatsap , é usado a bioteca Linking, do proprio react-native;
  * Instalar o axios para consumir a API     : npm install axios;
  * Pacote para formatação de valores        : npm install intl;