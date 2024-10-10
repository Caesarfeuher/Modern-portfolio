import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';

export default function Projects() {
  useEffect(() => {
    // Add the 'scrollable' class to the body on mount
    document.body.classList.add('scrollable');

    // Remove the 'scrollable' class from the body on component unmount
    return () => {
      document.body.classList.remove('scrollable');
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
       <div className="flex justify-evenly p-10">
      <h2>BETHILLSZONE</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/bethills.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
          Bethillszone home for football predictions, stats and betting tips! Bethillszone is the best football prediction site in the world designed to help make you best bet prediction. Bethillszone site is powered by an advanced football api that has the best accuracy online          </p>
          <br />
          <Link href="https://bethillszone.com/">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Bethillszone
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly p-10">
        <h2>NETFLIX CLONE</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/netflix.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
          Netflix is a subscription-based streaming service that allows members to watch TV shows and movies on an internet-connected device.so i built a clone of the app using react it was a fun build while learning to integrate API and consume endpoints.
          </p>
          <br />
          <Link href="https://netflix-clone-65c3d.web.app">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Netflix
            </Button>
          </Link>
        </div>
      </div>
  

  <div className="flex justify-evenly p-10">
      <h2>Landmark ohms</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/landmark.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
          Landmark ohms is a site within a site that allows people to access information about various advertisement billboards across the country
          </p>
          <br />
          <Link href="https://landmarksohms.com">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Landmark
            </Button>
          </Link>
        </div>
      </div>

        <div className="flex justify-evenly p-10">
          <h2>CHATBOT</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/chatgptclone.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
            This a clone of chat gpt but without using the open AI api but rather the google gemini AI
          </p>
          <br />
          <Link href="https://chatbot-nine-azure.vercel.app">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Chatbot
            </Button>
          </Link>
        </div>
      </div>

       <div className="flex justify-evenly p-10">
      <h2>E-commerce</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/Nextcommerce.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
            This is an e-commerce site that makes use of sanity for storage of data and categories while utilizing stripe Api for payment processing.
          </p>
          <br />
          <Link href="https://e-commerce-stripe-u12x-36d3kv3hr-caesarfeuhers-projects.vercel.app">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View E-commerce
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly p-10">
      <h2>FUEL PAY AFRICA WEB</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/preview.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
            Fuel pay africa is a payment processing platform that helps nigerians pay for various petroleum products at any filling station of thei choice instantly while also ensuring quantity assurance.i.e ensuring every user gets their money worth of what was paid for.
          </p>
          <br />
          <Link href="">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Fuelpay
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly p-10">
      <h2>WEATHER FORECAST</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/weather.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
          This weather app displays current weather and gives daily forcast for up to a week due to the api limitations this was particularly a tough one back then building from scratch.
          </p>
          <br />
          <Link href="https://weather-app-72083.web.app">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Weather
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly p-10">
      <h2>TINDER CLONE</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/tinder.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
            Tinder is an online dating platform that connects people based on the location specifications set.
          </p>
          <br />
          <Link href="https://tinders-clones.vercel.app/">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
            View Tinder
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly p-10">
      <h2>Swift buy</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/swiftbuy.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
            swift buy is an online marketplace for buying and selling of items work is still ongoing stay tuned...
          </p>
          <br />
          <Link href="">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Swift Buy
            </Button>
          </Link>
        </div>
      </div>  
    </>
  );
}
