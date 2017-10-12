import { userConstants } from '../_constants';
import {LIST_FILES} from "../_actions/listfileaction";
console.log("in filelist reducer");


export const listoffiles = (state = {}, action) => {
  switch (action.type) {

case LIST_FILES :

            if(action.files && action.files.length > 0) {
              console.log("pojja here");
                return {

                   ...state,
                   "files":{
                        "files" : action.files,
                        //"pwd" : action.pwd,
                       // "msg" : action.msg
                    }
                };

            }
            else {

                return {
                   ...state,                  
                    "files":{
                        "files" :[],
                       // "pwd" : action.pwd,
                       // "msg" :"No files available"
                    }
                };

            }

            break;

default:
console.log("hiii its state" +  state);
return state
  }
};

//export default listoffiles;
