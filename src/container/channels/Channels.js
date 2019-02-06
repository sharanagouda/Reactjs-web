import React,{ Component} from "react";
import {connect} from "react-redux";
import {Jombotran,Container, Rrid, Row, Col, Image, Button} from "react-bootstrap";
import {getChannel,activateChannel,fetchPost,defaultNews } from "../../action";
import "./Channels.css"
// style={{backgroundColor: active == channelString ? 'orange' :''}}
// const Channel =({channelName,channelLogo, channelString, onClick, active})=>(
//     <div onClick={()=>{onClick(channelString)}} className="col-lg-2 col-md-4 col-sm-6">
//         <div className="channel-mainDiv">
//             <Image src={channelLogo} className="channelLogo" rounded />
//             <p className="channelName">{channelName}</p>
//         </div>
//     </div>
    
// )
class Channel extends Component{
constructor(props){
    super(props);
    this.state={

    };
}
componentDidMount() {
    this.props.handleDefaultNewsRequest();
 }

render(){
    //const {newsName} =this.props;
    //console.log(newsName)
    return(
        <div onClick={()=>{this.props.onClick(this.props.channelName,this.props.channelString)}} className="col-md-3 col-sm-6">
        <div className="channel-mainDiv">
            <Image src={this.props.channelLogo} className="channelLogo" rounded />
            <p className="channelName">{this.props.channelName}</p>
        </div>
    </div>
    )
}
}

const mapStateToProps = (state)=> ({
    active:state.channel,
})
const mapDispatchToProps =(dispatch)=>({
    onClick:(channelString) => dispatch( getChannel(channelString)),
    onClick:(channelName,channelString) => dispatch(fetchPost(channelName,channelString)),
    handleDefaultNewsRequest : () => dispatch(defaultNews())
 })

export default connect(mapStateToProps,mapDispatchToProps)(Channel);