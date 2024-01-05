import React, { useEffect } from 'react';
import Image from 'next/image';


export default function Skills() {
  useEffect(() => {
    document.body.classList.add('scrollable');

    return () => {
      document.body.classList.remove('scrollable');
    };
  }, []);

  const parentStyle = {
    width: '50%',
    height: '100vh',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  };

  const childStyle = {
    width: '20%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundImage: 'url(/greystripes.jpg)',
    padding: '20px',
    boxSizing: 'border-box',
    
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    borderRadius: '100px',
  };

  return (
    <div style={parentStyle}>
      <div style={childStyle} className='mx-2'>
      <Image src={'/javascript.jpg'} width={800} height={400} style={imageStyle}/>
      <Image src={'/react.jpg'} width={800} height={400} style={imageStyle}/>
      <Image src={'/figma.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/git.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/firebase.jpg'} width={400} height={200} style={imageStyle}/>
      <Image src={'/chatgpt.jpg'} width={800} height={400} style={imageStyle}/>
      </div>

      <div style={childStyle} className='mx-2'>
      <Image src={'/vue.jpg'} width={800} height={400} style={imageStyle}/>
      <Image src={'/expo.jpg'} width={800} height={20} style={imageStyle} />
      <Image src={'/angular.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/typescript.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/wordpress.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/nextjs.jpg'} width={800} height={400} style={imageStyle} />
      </div>

      <div style={childStyle} className='mx-2'>
      <Image src={'/nodejs-logo.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/AWS-Emblem.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/express.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/postman.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/aleo.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/nodemon.jpg'} width={800} height={400} style={imageStyle} />
      </div>

      <div style={childStyle} className='mx-2'>
      <Image src={'/reactnative.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/mongo.jpg'} width={800} height={400} style={imageStyle} />
      <Image src={'/eng.jpg'} width={800} height={400} style={imageStyle} />
     
      </div>
    </div>
  );
}

