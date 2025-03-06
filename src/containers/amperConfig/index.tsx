// import { useParams } from "react-router-dom";
import GhAmperConfig from "./ghAmperConfig";
// import MainAmperConfig from "./mainAmperConfig";


const AmperConfig = () => {
    // amperId: 1-2-3 , type: main, gh
    // const params = useParams();


    // if (params.type === 'main') {
    //     return <MainAmperConfig />
    // } else if (params.type === 'gh') {
    //     return <GhAmperConfig />
    // }
    return <GhAmperConfig />
};


export default AmperConfig