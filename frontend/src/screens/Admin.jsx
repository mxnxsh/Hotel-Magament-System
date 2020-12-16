import Axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel } from '../actions/hotelAction';

function Admin() {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [capacity, setCapacity] = useState('');
   const [price, setPrice] = useState('');
   const [size, setSize] = useState('');
   const [avatar, setAvatar] = useState('');
   const [gallery, setGallery] = useState([]);
   const dispatch = useDispatch();

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(
         addHotel({
            title,
            description,
            capacity,
            size,
            price,
            avatar,
            gallery
         })
      );
   }
   const uploadImageHandler = e => {
      e.preventDefault()
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append('avatar', file);
      Axios.post('/api/hotels/avatar-uploads', bodyFormData, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
      .then((response) => {
         setAvatar(response.data);
      })
      .catch((err) => {
         console.log(err);
      });
   }
   
   const uploadGalleryHandler = e => {
      e.preventDefault()
      const files = e.target.files;
      const bodyFormData = new FormData();
      for (const key of files){
         bodyFormData.append('gallery', key);
      }
      Axios.post('/api/hotels/gallery-uploads', bodyFormData, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
      .then((response) => {
         setGallery(response.data);
      })
      .catch((err) => {
         console.log(err);
      });
      }
   return (
      <div className='container'>
         <h1 style={{ textAlign: 'center', padding: '10px' }}>
            Resort Admin Page
         </h1>
         <div className='row'>
            <div className='col-sm'>
               <form
                  onSubmit={handleSubmit}
                  style={{
                     border: 'solid 2px #f0932b',
                     padding: '25px',
                     borderRadius: '20px',
                  }}
               >
                  <div class='row mb-4'>
                     <div class='col'>
                        <div class='form-outline'>
                           <input
                              type='text'
                              value={title}
                              placeholder='Title'
                              onChange={e => {
                                 setTitle(e.target.value);
                              }}
                              name='title'
                              placeholder='title'
                              id='form6Example1'
                              class='form-control'
                           />
                        </div>
                     </div>
                     <div class='col'>
                        <div class='form-outline'>
                           <input
                              type='text'
                              value={avatar}
                              name='avatar'
                              placeholder='Image'
                              onChange={e => {
                                 setAvatar(e.target.value);
                              }}
                              id='form6Example2'
                              class='form-control'
                           />
                        </div>
                     </div>
                  </div>
                  <div class='form-outline mb-4'>
                     <input
                        type='file'
                        onChange={uploadImageHandler}
                        id='form6Example3'
                        class='form-control'
                     />
                  </div>
                  <div class='form-outline'>
                     <input
                        type='text'
                        value={gallery}
                        placeholder='Gallery'
                        name='gallery'
                        onChange={e => {
                           setGallery(e.target.value);
                        }}
                        id='form6Example2'
                        class='form-control'
                     />
                  </div>
                  <div class='form-outline mb-4'>
                     <input
                        type='file'
                        onChange={uploadGalleryHandler}
                        id='form6Example3'
                        class='form-control'
                        multiple
                     />
                  </div>
                  <div class='form-outline mb-4'>
                     <input
                        type='number'
                        value={capacity}
                        placeholder='Capacity'
                        onChange={e => {
                           setCapacity(e.target.value);
                        }}
                        name='capacity'
                        id='form6Example3'
                        class='form-control'
                     />
                  </div>
                  <div class='form-outline mb-4'>
                     <input
                        type='number'
                        value={price}
                        placeholder='Price'
                        onChange={e => {
                           setPrice(e.target.value);
                        }}
                        name='price'
                        id='form6Example4'
                        class='form-control'
                     />
                  </div>
                  <div class='form-outline mb-4'>
                     <input
                        type='number'
                        value={size}
                        placeholder='Size'
                        onChange={e => {
                           setSize(e.target.value);
                        }}
                        name='size'
                        id='form6Example5'
                        class='form-control'
                     />
                  </div>
                  <div class='form-outline mb-4'>
                     <textarea
                        type='text'
                        class='form-control'
                        placeholder='Description'
                        value={description}
                        onChange={e => {
                           setDescription(e.target.value);
                        }}
                        name='description'
                        id='form6Example7'
                        rows='4'
                     ></textarea>
                  </div>
                  <button
                     type='submit'
                     class='btn btn-warning btn-lg btn-block mb-4'
                     style={{ color: '#000', fontWeight: 'bold' }}
                  >
                     Create New Hotel Info
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Admin;
