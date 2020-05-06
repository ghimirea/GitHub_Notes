import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const Search = ({ navigation: { navigate } }) => {
  const [state, setState] = React.useState({
    username: '',
    loading: false,
    error: false,
  });
  const { username, loading, error } = state;

  const getUsername = (text) => {
    setState({ ...state, username: text.toLowerCase().trim() });
  };

  const searchUsername = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}`
          );
          console.log(response.data);
          navigate('STACK_DASHBOARD', { user: response.data });
        
    } catch (error) {
        setState((prevState) => ({ ...prevState, error: true }));
        
    }
    
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}> Search for GitHub User</Text>
          <TextInput
            style={styles.searchInput}
            placeholder='Enter the GitHub Username'
            value={username}
            onChangeText={getUsername}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={searchUsername}
            value={username}
          >
            <Text style={styles.buttonText}>Search Username</Text>
          </TouchableOpacity>
          {loading && <ActivityIndicator size='large' color='blue' />}
          {error && <Text>Something is not right here!!!!</Text>}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#48BBEC',
    padding: 30,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: 30,
  },
  searchInput: {
    height: 50,
    padding: 5,
    marginRight: 5,
    fontSize: 22,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    color: 'white',
  },
  buttonText: {
    fontSize: 20,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  error: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default Search;
