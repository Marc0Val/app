import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contenedorPrincipal}>
        <View style={styles.cajaizquierda}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9I8MXJ2izSszikBw_sb3iWLqCn_YmocEhg&usqp=CAU' }}
            style={styles.coverCancion}
          />
          <View style={styles.botones}>
            <TouchableOpacity>
              <Image source={{ uri: 'https://img.icons8.com/?size=48&id=80442&format=png' }} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={{ uri: 'https://img.icons8.com/?size=48&id=BQLz1mqBTVDo&format=png' }} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={{ uri: 'https://img.icons8.com/?size=48&id=80441&format=png' }} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.cajaderecha}>
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.image} />
        </View>  */}

        <ScrollView style={styles.scroll}>
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.Image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.Image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.Image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.Image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.Image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.Image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.Image} />
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=VwNtH5f7bWpg&format=png' }} style={styles.Image} />
        </ScrollView>
      </View>

      <View style={styles.contenedorInferior}>
        <Image source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfcAAABkCAMAAACsLolMAAAAdVBMVEX///84ODipqanl5eUGBgYzMzMAAAA7Ozv8/PzLy8u2trbBwcHv7+8dHR3W1tazs7Ojo6P09PQnJyeMjIzCwsKamppdXV13d3ckJCQrKyvi4uJlZWUXFxfa2tp8fHxTU1OEhIRubm6SkpIRERFLS0tERERPT09R6pqxAAADtUlEQVR4nO3c2ZajKAAGYFBBRBSXuMVsaqff/xEHNZWaOj11USZoevJ/V+bC4MkfNkEJAQAAAAAAAAAAAAAAAAAAAAAAAAD43xFpKra+BlhbGl66Lg+Q/HtRlyaq64gV6dZXAisSeUZHrHZsFiMdeCl5zWYN21vMveUevJLDLXZGubaYe3XwKbySe+5eYTP3wYdXcs/dt5s72/r/DV+wOy+wmLu7d+GVBL+aKXs/ajGReyeSZWN7P1zjra8E1iR2V260x60vBNYWhzubc3cAAABYn/jjwIKjljKdSojNWEJJiRHFNlQo9TyGF6GJI9A2V+CFKHqp1XgQXwMiTlqeXHvFwfeCk9TTlF3lpTCfgkraK0ykxRjzMSRB3gUkKAjZ4zbRJvRYy4lWaZ50grSKKJszePdcnQtylKalL3ZE5nkpscFnC6Jvq/JIHCWIKIVqnfakLBangpS0u2kI0ZvcS+VWuD+4BWGGV/I01TnVijTbmR7YYnHKNPPOvKOnCIg07byp9rA+sRfEvUxV3OQuqCDHymJx8VkJepy6knxH3KtSFW4MbyE9aZL0JDajK3UWJHdIb3P9nQRVF0/jOSJNA7/vTjZXfeF7Kq8KQcbZVFqMvW5XWB9oiW+OYVXiyyGCAAAAAAAAAAAAAACAV4V1jHcUY9fAW9K8xz7gv0mq1DOW/yU/XJ2HNiJ+uYqvFwXPF7b/2tgl9NLdPpJfm6gNxdI/jiCh/Mw+KEvsLrVL1839Jz52dbjwayT3GWvqBx76SPjnySGPsN3MLh2xW+77C2fRQ7kzf+DF0uSTQ8QTNdf5kNfI3a4pd/NbK4cO1I+WbuKec2eUer8XdvOJ51PvPD0zhtztm+u7kGWUUeY/WN/H5Ju6XfREYeLR8eRyDBy5W2dyP5J9O7+d8wm5j6Il3fyY+/h60Prikh1yt00faJjz2n9m7n7E+x839rfczcleoT2M6ywzuSdd09Bn5k6bpv3xY/wfudOMdUmE3C0b2/lU/uKMPit3yoYy/PnD3HPuPhvaEO28ffO4zu0PB/85ufseXzSin3L3h0GnGNet4GP+7l6i5hm5N1G+eB5nBnX91FAgd+tuuYvxjm3GHpy/0yxb/FxnMjTZKcZ9m5Xo+uN+HVH6zB+p75Tx84KO/Sbh7f3kkGfI3S6HHz5yF0TlD+Tu8yhRy7dfOMXnyZJzvP3Brqetw7J6Ycf+H1Ksw/4lNK8C7LV6PzsHr197RwJVHQAAAAAAAAAAAAAAAAAAAAAAAAD+8A92YEs6ua1B8gAAAABJRU5ErkJggg=='}} style={styles.image1} />
      </View>

      <TouchableOpacity style={styles.botoncerrar} onPress={() => navigation.navigate('Login')}>
        <Image source={{ uri: 'https://img.icons8.com/?size=48&id=6Ah729gi0Fo8&format=png' }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFF5DE',
  },
  contenedorPrincipal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 250,
  },
  cajaizquierda: {
    width: 300,
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#CDDCBE',
  },
  coverCancion: {
    width: 190,
    height: 190,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  cajaderecha: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  Image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  botoncerrar: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'transparent',
  },
  contenedorInferior: {
    marginTop: 50,
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  image1: {
    width: 420,
    height:9,
  },
  scroll:{
    width: 300,
    height: 300,
  }
});

export default HomeScreen;
