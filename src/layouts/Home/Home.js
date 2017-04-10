import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Button,
  Left,
  Icon,
  Text,
  Item,
  Input
} from 'native-base';
import { View, Image, Linking, Keyboard } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from './styles';
import images from 'Lafzi/src/assets/images';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      keyboardShown: false
    };
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    this.setState({keyboardShown: true});
  }

  _keyboardDidHide () {
    this.setState({keyboardShown: false});
  }

  openHomepage() {
    Linking.openURL('http://cs.ipb.ac.id').catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
        <Image source={images.background} style={styles.backgroundImage}>
            <Container style={{ backgroundColor: (this.state.keyboardShown) ? 'white' : 'transparent' }}>
                <Header noShadow="true" style={{ backgroundColor: 'transparent' }}>
                    <Left>
                        <Button transparent androidRippleColor="rgba(120, 120, 120, 0.3)">
                            <Icon name='menu' style={{ color: 'black' }}/>
                        </Button>
                    </Left>
                </Header>
                <View style={{ flex: 1 }}>
                    <Grid>
                        <Row style={{justifyContent: 'center', alignItems: 'flex-end', padding: 20}} >
                            <Image source={images.logo} style={{ width: 250, height: 110 }} />
                        </Row>
                        <Row style={{justifyContent: 'center'}}>
                            <View>
                                <Item style={{width: 320}}>
                                    <Input placeholder='Cari lafadz'/>
                                    <Button rounded small style={{marginTop: 10}}>
                                        <Icon name='search' />
                                    </Button>
                                </Item>
                            </View>
                        </Row>
                    </Grid>
                </View>
                <Footer style={{ height: 50, backgroundColor: 'transparent' }} >
                    <Button transparent androidRippleColor="rgba(120, 120, 120, 0.3)" onPress={() => this.openHomepage()}>
                        <Text style={{ color: '#803300' }} >
                            ©2017 Computer Science IPB
                        </Text>
                    </Button>
                </Footer>
            </Container>
        </Image>
    );
  }
}
