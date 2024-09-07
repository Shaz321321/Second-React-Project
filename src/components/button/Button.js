export default function Button(props){
    return(
        <a href="#" style={{backgroundColor: 'blue'}} className=" btn btn-primary">{props.title}</a>
    );
}