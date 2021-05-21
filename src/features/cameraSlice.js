import { createSlice } from '@reduxjs/toolkit';


export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
  cameraImage: '', 
},

  reducers: {
     setCameraImage: (state, action) =>{
         state.cameraImage += action.payload;
     },
     resetCameraImage: (state) => {
        state.cameraImage = '';
     }
    }

});


export const { setCameraImage, resetCameraImage } = cameraSlice.actions;


export const selectCameraImage = (state) => state.camera.cameraImage;



export default cameraSlice.reducer;