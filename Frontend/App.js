import  {Component} from 'react'
import * as React from 'react'
import {Text, View, FlatList, StyleSheet, ImageBackground, Image, Button, ActivityIndicator,TouchableNativeFeedback,Platform} from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import { captureScreen } from "react-native-view-shot";
import ImageEditor from "@react-native-community/image-editor";

let cropData = {
  offset: {x: 0, y: 500},
  size: {width: 950, height: 900},
  displaySize: {width: 350, height: 350},
  
};

const styles = StyleSheet.create({
        
    container:{
        alignItems: "center",
        flex:1
       
    },

    header: {
        marginTop: 100,
        width: "90%",
        
        alignItems: "center",

    },

    headerText: {
        color: 'rgb(128, 0, 128)',
        fontSize: 50,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"
    },

    button: {
        marginBottom: 20,
        backgroundColor: 'rgba(128, 0, 128,0.7)',
        borderRadius: 10,

    },

    
    buttonSmall: {
        marginBottom: 5,
        backgroundColor: 'rgba(88, 20, 184,0.7)',
        borderRadius: 5
    },

    buttonText: {
        color: "white",
        fontSize: 24,
        padding: 10
    },

    buttonTextSmall: {
        color: "white",
        fontSize: 20,
        padding: 10
    },
    item: {
      padding: 9,
      fontSize: 22,
      color: "rgb(66, 47, 89)",
      fontWeight:"bold",
      fontFamily:"Roboto",
      opacity:1,
     
    },
  
    backgroundImage:{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: "center",
          alignItems: "center",
          
      },
    list:{
      padding:20,
      flex:1,
      backgroundColor:"rgba(156, 109, 153,0.7) ",
      margin:20,
      //opacity:0.7,
      borderRadius:10,
      borderColor:"steelblue",
      borderStyle:"solid",
      borderWidth:5,
      
    },
    playButton:{
      
      width: 180,
      height: 70,
      backgroundColor: 'rgba(0,128,128,1)',
      borderRadius:10,
      borderColor:"steelblue",
      borderStyle:"solid",
      borderWidth:2,
      alignSelf:"center",
      position:"relative",
      top:-20,
  
    },
    canvas: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#F5FCFF',
      width:400,
      height:400,
    },
     
  functionButton: {
	    marginHorizontal: 2.5, 
	    marginVertical: 8, 
	    height: 30, 
	    width: 60,
	    backgroundColor: '#39579A', 
	    justifyContent: 'center', 
	    alignItems: 'center', 
      borderRadius: 5,
      position:"relative",
      bottom:0,
    },
    strokeWidthButton: {
      marginHorizontal: 2.5, 
      marginVertical: 8, 
      width: 30, 
      height: 30, 
      borderRadius: 15,
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#39579A'
    },
    strokeColorButton: {
      marginHorizontal: 2.5, 
      marginVertical: 8, 
      width: 30, 
      height: 30, 
      borderRadius: 15,
    },
    textView: {
      marginTop: 10,
      width: "100%",
      
      alignItems: "center",

    },
    message: {
      color: 'firebrick',
      fontSize: 18,
      textAlign:"center",
      fontWeight: "bold",
      fontFamily: "Roboto",
      
      margin:4,
      flexWrap:"wrap"
      
      
    },
    classN: {
      fontWeight: "bold",
      fontSize: 22,
      textAlign:"center",
      width: "100%",
    }
    }
)

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam("title", "Home"),
        header:null,
    };
  };
    render(){
        return(
            <ImageBackground source={{uri:'https://media.giphy.com/media/2Y7tZMmIpwV6Lnc5QC/source.gif'}} style={{width:'100%', height:'100%'}}>
               <View style={{ flex:2,  alignItems: 'center', justifyContent: "space-evenly"}}>
                <View style={{flex:1, alignItems:'center', justifyContent:'space-evenly'}}>
                    <Text style={styles.headerText}>Sketchinator</Text>
                    <View style={{height:70}}></View>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <TouchableNativeFeedback  onPress={()=> this.props.navigation.navigate('Play', {title:'How To Play'})} background={TouchableNativeFeedback.SelectableBackground()}><View style={styles.button}><Text style={styles.buttonText}>Tap To Start</Text></View></TouchableNativeFeedback>
                </View>   
            </View>
            </ImageBackground>
            
        );
    }
}

class PlayScreen extends Component {
     static navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam("title", "How To Play"),
        header:null,
    }; 
  };
  render(){
    const {navigation} = this.props;
    return(
      
        <View style={styles.container}>
        <ImageBackground style= { styles.backgroundImage } imageStyle= 
{{opacity:0.7}} source={require('./assets/doodleGif2.gif')}>
        
          <View style={{width: 50, height: 30}}></View>
          <View style={{alignItems:"center"}}>
           
            <Image  source={require('./assets/sketchinator4.png')}/>
          </View>
         
          <View style={styles.list}>
          
          <FlatList
            data={[
              {key: 'Improve your drawing skills on the screen!'},
              {key: 'Its pretty simple! '},
              {key: 'The app will give you the name of an object that you have to draw'},
              {key: 'Then our artificially intelligent model will judge your drawing skills'},
              {key: 'You\'ll get a score showing how good you are! '},
              
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
          <TouchableNativeFeedback
              onPress={()=> this.props.navigation.push('Canvas', {title: 'Canvas'})}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.playButton}>
              <Text style={{ margin:15, alignSelf:"center",fontWeight:"bold", fontFamily:"Roboto", color:"mintcream", fontSize:22,justifyContent:'center', textAlignVertical:'center'}} >Start Drawing!</Text>
            </View>
          </TouchableNativeFeedback>
          </View>
        
        </ImageBackground>
        </View>

    
     
    

    )
  }
}

class CanvasScreen extends Component {
  constructor(){

    super();

    this.state={

      imageURI : 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg',
      croppedImageURI:'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg',
      className:'none',
      isLoading: true,

    }
  }
    componentDidMount(){
      console.log("on mount url is ", this.state.croppedImageURI)
      return fetch('http://192.168.100.9:5000/randomizer')
        .then((response) => response.json())
        .then((responseJson)=>
        {this.setState({
            isLoading:false,
            className: responseJson.Sketch,
          }, ()=>{console.log("response", responseJson.Sketch)})
        })
        .catch((error) =>{
          console.error(error);
        });
    }
    /*static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam("title", "How To Play")
        };
    };
    render(){
        const {navigation} = this.props;
        return(
        <SketchCanvas
                style={{ flex: 1 }}
                strokeColor={'red'}
                strokeWidth={7}
              />
            </View>
          </View>
          <View style={{ flex:1,  alignItems: 'flex-end', justifyContent: "flex-end"}}>
                <TouchableNativeFeedback title="Submit" onPress={()=> this.props.navigation.push('Results', {title: 'Results'})}><View style={styles.button}><Text style={styles.buttonText}>Submit</Text></View></TouchableNativeFeedback>
          </View>
            <View style={{ flex:1,  alignItems: 'flex-end', justifyContent: "flex-end"}}>
                <TouchableNativeFeedback title="Submit" onPress={()=> this.props.navigation.push('Results', {title: 'Results'})}><View style={styles.button}><Text style={styles.buttonText}>Submit</Text></View></TouchableNativeFeedback>
            </View>
        );
    }
     savePreference={() => {
                  return {
                    folder: 'sketches',
                    filename: 'ímage',
                    transparent: false,
                    imageType: 'png',
                    includeImage: true,
                    includeText: false,
                    cropToImageSize: true
                  }
                }}
                onSketchSaved={this.onSave}
                <View style={{overflow:'hidden'}}>
           
             
              <Image source={{uri : this.state.croppedImageURI}} style={{width: 200, height: 200, marginTop: 5}}  resizeMode= 'contain'/></View>*/
     static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam("title", "Canvas"),
            header:null,
        };
    };
    render(){
        const {navigation} = this.props;
        if(this.state.isLoading){

          return (
            <ImageBackground source={{uri:'https://media.giphy.com/media/2Y7tZMmIpwV6Lnc5QC/source.gif'}} style={{width:'100%', height:'100%'}}>
              
            </ImageBackground>
          )
        }
        else{
        return (
          <ImageBackground source={require('./assets/bg.jpg')} style={{width:'100%', height:'100%'}}>
            <View style={styles.textView}><Text style={styles.message}>Hello There! Draw a{"\n"} <Text style={styles.classN}>{this.state.className}</Text></Text></View>
            <View style={{ flex: 4, flexDirection: 'row',width:350,height:300, margin:20 }}>
              <RNSketchCanvas
                containerStyle={{ backgroundColor: 'lavenderblush', flex: 1, width:400,height:400, borderStyle: 'dotted',borderWidth:2,borderColor:'khaki'}}
                canvasStyle={{ backgroundColor: 'white', flex: 1 }}
                defaultStrokeIndex={0}
                defaultStrokeWidth={4}
                undoComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Undo</Text></View>}
                clearComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Clear</Text></View>}
                
              />
           </View>  
            <View style={{ flex:1,flexDirection: 'row',  alignItems: 'center', justifyContent: "center"}}>
              <TouchableNativeFeedback title="Submit" onPress={this.onSubmit}><View style={styles.button}><Text style={styles.buttonText}>Submit</Text></View></TouchableNativeFeedback>
              
            </View>
            
          </ImageBackground>
        );
      }
      }
      onSubmit = () => {
        this.captureScreenFunction()
        this.setState({isLoading:true});
        //this.props.navigation.push('Results', {title: 'Results'})
        
          
        }

        sendToServer = () =>{
          console.log("sending image to server ", this.state.croppedImageURI);
          var data = new FormData();
          data.append('file', {
            uri: this.state.croppedImageURI, // your file path string
            name: 'file',
            type: 'image/jpg'
          })
          //data.append('sketch',this.state.className);
           return fetch('http://192.168.100.9:5000/upload', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            },
            method: 'POST',
            body: data
            })
            .then((response) => response.json())
            .then((responseJson)=>
              { if(responseJson.prediction===responseJson.Original){
                this.props.navigation.push('Results', {title: 'Results', pred:responseJson.prediction, accu:responseJson.OriginalAccuracy, label:responseJson.Original});
                console.log("same");
              }
              else{
                this.props.navigation.push('Results', {title: 'Results', pred:responseJson.prediction, accu:responseJson.OriginalAccuracy, label:responseJson.Original, msg:'Nice try, but our model thought it looked more like a '+responseJson.prediction});
                console.log("not same");
              }
                console.log("prediction by model: ", responseJson.prediction," accuracy: ",responseJson.OriginalAccuracy, "class: ",responseJson.Original)
              })
            .catch((error) =>{
              console.error(error);
            });
            
        }
       

      croppingImage = (done) =>{
        //let url='';
        console.log("screenshot url here",this.state.imageURI);
        ImageEditor.cropImage(this.state.imageURI, cropData)
        .then(/*url => {this.setState=({croppedImageURI:url}, 
        console.log("cropped url ",url, "new url", this.state.croppedImageURI))},
        error => console.error("Oops, Something Went Wrong", error)*/
       url =>{console.log("URL", url); 
        this.setState({croppedImageURI: url})}
        )
        .then(()=>{done()});
        
      }
      
      captureScreenFunction= async()=>{

        captureScreen({
          format: "jpg",
          quality: 0.8
        })
        .then(
          uri => {this.setState({ imageURI : uri });
        console.log("screenshot url ",uri)},
          error => console.error("Oops, Something Went Wrong", error)
        ).then(()=>{this.croppingImage(this.sendToServer)});
        
      }
      onSave = async (success, path) => {
        if(!success)
        {
          console.log("sketch not saved");
        }
        if(path==null)
        {
          console.log("path is null");
        }
        else
        {
          this.props.navigation.push('Results', {title: 'Results'})
        }
        
      }

}

class ResultScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam("title", "Results"),
            
            header:null,
        };
    };
   constructor(){

      super();
  
      this.state={
  
        msg:"",
  
      }
    }
   
  

    render(){
        const {navigation} = this.props;
        let accuracy = JSON.stringify(navigation.getParam('accu', 0));
        let pred = JSON.stringify(navigation.getParam('pred', ""));
        let label = JSON.stringify(navigation.getParam('label', ""));
        let msg = navigation.getParam('msg', "");
        accuracy= accuracy.substring(0,5);
        return(
          <ImageBackground source={{uri:'https://media.giphy.com/media/pHWPC9Hrr3mhGhyRAl/source.gif'}} style={{width:'100%', height:'100%'}}>
            <View style={{ flex:2,  alignItems: 'center', justifyContent: "space-evenly"}}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.message}>Your results are in! {"\n"} You scored a {accuracy}% </Text>
                    <Text style={styles.message} >{msg}</Text>
                </View>
                <View style={{ flex:1,  alignItems: 'center', justifyContent: "center"}}>
                    <TouchableNativeFeedback title="Try Again" onPress={()=> this.props.navigation.push('Canvas', {title: 'Canvas'})}><View style={styles.buttonSmall}><Text style={styles.buttonTextSmall}>Try Again</Text></View></TouchableNativeFeedback>
                    <TouchableNativeFeedback title="Learn To Play" onPress={()=> this.props.navigation.navigate('Play', {title: 'How to Play'})}><View style={styles.buttonSmall}><Text style={styles.buttonTextSmall}>Learn To Play</Text></View></TouchableNativeFeedback>
                    <TouchableNativeFeedback title="Return to Home" onPress={()=> this.props.navigation.popToTop( {title: 'Home'})}><View style={styles.buttonSmall}><Text style={styles.buttonTextSmall}>Return To Home</Text></View></TouchableNativeFeedback>
                </View>
            </View>
          </ImageBackground>
        );
    }
}

const AppNavigator = createStackNavigator({ Home:  HomeScreen, Play : PlayScreen, Canvas: CanvasScreen, Results: ResultScreen}, {initialRouteName: 'Home',});
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component{
    render() { return <AppContainer></AppContainer>}
}