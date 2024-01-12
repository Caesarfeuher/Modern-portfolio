// import React, { useEffect } from 'react';
// import Image from 'next/image';


// export default function Skills() {
//   useEffect(() => {
//     document.body.classList.add('scrollable');

//     return () => {
//       document.body.classList.remove('scrollable');
//     };
//   }, []);

//   const parentStyle = {
//     width: '50%',
//     height: '100vh',
//     margin: 'auto',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px',
//   };

//   const childStyle = {
//     width: '20%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // backgroundImage: 'url(/greystripes.jpg)',
//     padding: '20px',
//     boxSizing: 'border-box',
    
//   };

//   const imageStyle = {
//     maxWidth: '100%',
//     maxHeight: '100%',
//     objectFit: 'cover',
//     borderRadius: '100px',
//   };
 
 


//   return (
//     <div style={parentStyle}>
//       <div style={childStyle} className='mx-2'>
//       <Image src={'/javascript.jpg'} width={800} height={400} style={imageStyle}/>
//       <Image src={'/react.jpg'} width={800} height={400} style={imageStyle}/>
//       <Image src={'/figma.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/git.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/firebase.jpg'} width={400} height={200} style={imageStyle}/>
//       <Image src={'/chatgpt.jpg'} width={800} height={400} style={imageStyle}/>
//       </div>

//       <div style={childStyle} className='mx-2'>
//       <Image src={'/vue.jpg'} width={800} height={400} style={imageStyle}/>
//       <Image src={'/expo.jpg'} width={800} height={20} style={imageStyle} />
//       <Image src={'/angular.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/typescript.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/wordpress.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/nextjs.jpg'} width={800} height={400} style={imageStyle} />
//       </div>

//       <div style={childStyle} className='mx-2'>
//       <Image src={'/nodejs-logo.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/AWS-Emblem.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/express.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/postman.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/aleo.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/nodemon.jpg'} width={800} height={400} style={imageStyle} />
//       </div>

//       <div style={childStyle} className='mx-2'>
//       <Image src={'/reactnative.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/mongo.jpg'} width={800} height={400} style={imageStyle} />
//       <Image src={'/eng.jpg'} width={800} height={400} style={imageStyle} />
     
//       </div>
//     </div>
//   );
// }





// import React, { useEffect } from 'react';
// import Image from 'next/image';

// export default function Skills() {
//   useEffect(() => {
//     document.body.classList.add('scrollable');
//     document.body.style.overflowX = 'hidden';

//     return () => {
//       document.body.classList.remove('scrollable');
//       document.body.style.overflowX = 'visible';
//     };
//   }, []);


//   const imageStyle = {
//     maxWidth: '100%',
//     maxHeight: '100%',
//     objectFit: 'cover',
//     borderRadius: '100px',
    
//    };

//   return (
//     <div className="parent">
//       <div className="child mx-2">
//         <Image src={'/javascript.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/react.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/figma.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/git.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/firebase.jpg'} width={400} height={200} style={imageStyle}/>
//         <Image src={'/chatgpt.jpg'} width={800} height={400}style={imageStyle}/>
//       </div>

//       <div className="child mx-2">
//         <Image src={'/vue.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/expo.jpg'} width={800} height={20} style={imageStyle}/>
//         <Image src={'/angular.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/typescript.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/wordpress.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/nextjs.jpg'} width={800} height={400} style={imageStyle}/>
//       </div>

//       <div className="child mx-2">
//         <Image src={'/nodejs-logo.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/AWS-Emblem.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/express.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/postman.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/aleo.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/nodemon.jpg'} width={800} height={400} style={imageStyle}/>
//       </div>

//       <div className="child mx-2">
//         <Image src={'/reactnative.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/mongo.jpg'} width={800} height={400} style={imageStyle}/>
//         <Image src={'/eng.jpg'} width={800} height={400} style={imageStyle}/>
//       </div>



//         <style jsx>{`

//          .parent {
//            width: 100%;
//            height: 100vh;
//            margin: auto;
//            display: flex;
//            justify-content: center;
//            align-items: center;
//            padding: 40px;
//          }

//           .child {
//             width: 20%;
//             height: 100%;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//             align-items: center;
//             padding: 30px;
//             box-sizing: border-box;
//           }
      
      
//         /* Styles for screens with a maximum width of 290px */
//         @media screen and (max-width: 850px) {
//           .child {
//             width: 20%;
//             height: 100%;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//             align-items: center;
//             padding: 30px;
//             box-sizing: border-box; 
//           }
//         }
      
//         // /* Styles for screens with a minimum width of 639px */
//          @media screen and (min-width: 639px) {
//             .child {
//               width: 20%;
//               height: 100%;
//               display: flex;
//               flex-direction: column;
//               justify-content: space-between;
//               align-items: center;
//               padding: 30px;
//               box-sizing: border-box; 
//             }
//          }

//         // /* Styles for screens with a minimum width of 639px */
//         // @media screen and (min-width: 339px) {
//         //    .child {
//         //      width: 10%;
//         //      height: 50%;
//         //      display: flex;
//         //      flex-direction: column;
//         //      justify-content: space-between;
//         //      align-items: center;
//         //      padding: 30px;
//         //      box-sizing: border-box; 
//         //    }
//         // }
//       `}</style>
      
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Skills() {
  const [windowWidth, setWindowWidth] = useState(undefined);


  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach event listener to update window width on resize
    window.addEventListener('resize', updateWindowWidth);

    // Initial update
    updateWindowWidth();

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);



  useEffect(() => {
         document.body.classList.add('scrollable');
         document.body.style.overflowX = 'hidden';
  
         return () => {
           document.body.classList.remove('scrollable');
           document.body.style.overflowX = 'visible';
         };
       }, []);

  const isMobile = windowWidth && windowWidth <= 850;

  const imageStyle = {
         maxWidth: '100%',
         maxHeight: '100%',
         objectFit: 'cover',
         padding:'10px'
        //  borderRadius: '100px',
      
        };

  return (
    <div className={`centered ${isMobile && 'mobile'}`}>
      <div className='parent-item'>
        <Image src='/javascript.jpg' width={400} height={400}  style={imageStyle} />
        <Image src='/react.jpg' width={400} height={400}  style={imageStyle} />
        <Image src='/figma.jpg' width={400} height={400}  style={imageStyle} />
        <Image src='/git.jpg' width={400} height={400}  style={imageStyle} />
        <Image src='/firebase.jpg' width={400} height={400}  style={imageStyle} />
        <Image src='/chatgpt.jpg' width={400} height={400}   style={imageStyle}/>
      </div>

      <div className='parent-item'>
        <Image src='/vue.jpg' width={800} height={400}  style={imageStyle}/>
        <Image src='/expo.jpg' width={800} height={20}  style={imageStyle} />
        <Image src='/angular.jpg' width={800} height={400}  style={imageStyle} />
        <Image src='/typescript.jpg' width={800} height={400}  style={imageStyle} />
        <Image src='/wordpress.jpg' width={800} height={400} style={imageStyle} />
        <Image src='/nextjs.jpg' width={800} height={400} style={imageStyle} />
      </div>

      <div className='parent-item'>
        <Image src='/nodejs-logo.jpg' width={800} height={400}  style={imageStyle} />
        <Image src='/AWS-Emblem.jpg' width={800} height={400}  style={imageStyle} />
        <Image src='/express.jpg' width={800} height={400}  style={imageStyle} />
        <Image src='/postman.jpg' width={800} height={400} style={imageStyle} />
        <Image src='/aleo.jpg' width={800} height={400}  style={imageStyle} />
        <Image src='/nodemon.jpg' width={800} height={400}  style={imageStyle} />
      </div>

      <div className='parent-item'>
        <Image src='/reactnative.jpg' width={800} height={400}  style={imageStyle} />
        <Image src='/mongo.jpg' width={800} height={400}  style={imageStyle} />
        <Image src='/eng.jpg' width={800} height={400}  style={imageStyle} />
      </div>

      <style jsx>{`
        .centered {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .parent-item {
          margin-top: 5px;
          border: 1px solid #ccc;
          padding: 5px;
          width: 150px;
          text-align: center;
        }


        @media screen and (max-width: 850px) {
          .education-item {
            width: 50%;
            overflow: auto;
            text-align: center;
            border: 1px solid #ccc;
            margin-top: 32px;
            padding: 32px;
          }

          .education-item img {
            border-radius: 50px; /* Adjust border-radius for smaller screens */
          }
        }
      `}</style>
    </div>
  );
}
