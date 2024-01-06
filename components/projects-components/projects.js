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
      <h2>SPOTIFY CLONE</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/spotify.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
          Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world. This was a fine build while learning to implement authentication in app.
          </p>
          <br />
          <Link href="https://spotify-clone-eeb6f.web.app">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Spotify
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly p-10">
        <h2>SLACK CLONE</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/slack.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
          Slack is a messaging app for business that connects people to the information they need. By bringing people together to work as one unified team, Slack transforms the way organizations communicate.
          </p>
          <br />
          <Link href="https://slack-clone-b7088.web.app">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Slack
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly p-10">
      <h2>TIKTOK CLONE</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/tiktok.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
            Netflix clone TikTok, known in China as Douyin, is a short-form video hosting service owned by the Chinese company ByteDance. It hosts a variety of user-submitted videos, from content such as pranks, stunts, tricks, jokes and dance, with durations from 15 seconds to ten minutes.
          </p>
          <br />
          <Link href="https://tiktok-clone-402eb.web.app">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Tiktok
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
      <h2>WHATSAPP CLONE</h2>
        <div className="w-1/3 pr-4">
        <Image src={'/whatsapp.jpg'} width={400} height={250} />
        </div>

        <div className="w-2/3 max-w-md">
          <p className="text-base leading-6 break-words">
            A social media platform used to send and receive messages almost instantly.this build centers around the use of node.js, expressjs, websockets and mode of operation of backend algorithm.
          </p>
          <br />
          <Link href="https://whatsapp-mern-tau.vercel.app/">
            <Button fontSize="large" style={{ color: "aqua" }} variant="contained" color="primary">
              View Whatsapp
            </Button>
          </Link>
        </div>
      </div>

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
    </>
  );
}
