import Head from 'next/head'

import SideBar from "components/SideBar"

import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2'
import {GraphQLClient} from "graphql-request"
import parse from "marked"
import {
    BsFillLightningFill,
    BsDiamondFill,
    BsPeopleFill,
  } from "react-icons/bs";
import { HiSquares2X2, HiSparkles } from "react-icons/hi2";
import {IoPlanet} from "react-icons/io5"
import {BiNews} from "react-icons/bi"
export async function getStaticProps() {
    const hygraph = new GraphQLClient(
      'https://api-ca-central-1.hygraph.com/v2/cldtk9kco5n4u01un1r1gacjy/master'
    );
    const { posts } = await hygraph.request(
        `
        query Posts {
            posts(orderBy: publishedAt_DESC, first: 2) {
              createdAt
              content {
                markdown
              }
              title
              publishedAt
              updatedAt
              cover {
                url
              }
            }
          }
          
        `
      );
    
      return {
        props: {
          posts,
        },
      };
    }


export default function Home({posts}) {


    const [init, setInit] = useState(false);
    useEffect(() => {
        if (!init) {
            Swal.fire({
                title: 'You are on DiaStu NEXT',
                text: 'A rewrite of the website, with a entirely new framework and UI.',
                icon: 'info',
                confirmButtonText: 'Cool!'
            })
            console.log(posts)


        }
        setInit(true)

    }, [])

   

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

            </Head>

            <main>
                <div className='flex flex-row w-full h-full font-sans'>
                    <SideBar/>
                    <div className='flex-grow bg-primary h-full fixed left-16 right-0 -z-50 overflow-y-scroll'>
                        <div className='fancy-card-home fancy-card group'>
                            <div className='fancy-card-content'>
                                <h1 className='fancy-fancy-card-title'>Welcome to the <span className="magic">Dimaverse.</span></h1>
                                <h4 className='fancy-card-subtitle'>
                                    <span className="fancy-card-subtitle-word">The </span>
                                    <span className="delay-[50ms] fancy-card-subtitle-word  magic">magical </span>
                                    <span className="delay-[100ms] fancy-card-subtitle-word ">dimension </span>
                                    <span className="delay-[150ms] fancy-card-subtitle-word">where </span>
                                    <span className="delay-[200ms] fancy-card-subtitle-word">our </span>
                                    <span className="fancy-card-subtitle-word delay-[250ms]">work </span>
                                    <span className="fancy-card-subtitle-word delay-[300ms]">comes </span>
                                    <span className="fancy-card-subtitle-word delay-[350ms]">to </span>
                                    <span className="fancy-card-subtitle-word delay-[400ms]">life.</span>
                                </h4>
                            </div>
                        </div>

                        <div className=" m-6 flex justify-center items-center"><button className='btn btn-primary m-4 loading text-center rounded-full shadow-xl'>now in development</button></div>

                        <div className="bg-slate-800 shadow-md p-4 h-16"><h1 className='text-3xl text-white'>The Latest</h1></div>

                        <div>
                        {posts.map((post) => (
                            <div className="card m-6 card-side bg-base-100 shadow-xl flex flex-row h-96" key={post.title}>
                                <figure className='flex-grow'><img src={post.cover.url} alt="cover image" className='flex-grow w-96 aspect-square'/></figure>
                                <div className="card-body flex-shrink w-5/6">
                                    <h2 className="card-title text-4xl">{post.title}</h2>
                                    <p>{post.content.markdown}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary align-bottom">more</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                            
                        </div>

                        <div className="bg-slate-800 shadow-md p-4 h-16"><h1 className='text-3xl text-white'>Explore</h1></div>
                        
                        <div className="bg-box shadow-lg m-4 h-16 rounded-lg flex items-center justify-end group hover:bg-slate-700 transition-all">
                             <div className="flex-grow m-4">
                                <h1 className="text-3xl text-content">Check out what&apos;s stirring in Projects</h1>
                             </div>
                            <div className="bg-slate-700 group-hover:bg-tertiary shadow-lg h-full aspect-square float-right rounded-r-lg text-secondary flex items-center justify-center transition-all">
                                <HiSquares2X2 size="45" />
                            </div>
                        </div>
                        <div className="bg-box shadow-lg m-4 h-16 rounded-lg flex items-center justify-end group hover:bg-slate-700 transition-all">
                             <div className="flex-grow m-4">
                                <h1 className="text-3xl text-content">Meet the Denizens in The &apos;Verse</h1>
                             </div>
                            <div className="bg-slate-700 group-hover:bg-tertiary shadow-lg h-full aspect-square float-right rounded-r-lg text-secondary flex items-center justify-center transition-all">
                                <IoPlanet size="45" />
                            </div>
                        </div>
                        <div className="bg-box shadow-lg m-4 h-16 rounded-lg flex items-center justify-end group hover:bg-slate-700 transition-all">
                             <div className="flex-grow m-4">
                                <h1 className="text-3xl text-content">History is made with the Diastu Newsletter</h1>
                             </div>
                            <div className="bg-slate-700 group-hover:bg-tertiary shadow-lg h-full aspect-square float-right rounded-r-lg text-secondary flex items-center justify-center transition-all">
                                <BiNews size="45" />
                            </div>
                        </div>
                        <div className="bg-box shadow-lg m-4 h-16 rounded-lg flex items-center justify-end group hover:bg-slate-700 transition-all">
                             <div className="flex-grow m-4">
                                <h1 className="text-3xl text-content">It&apos;s always party o&apos;clock in Special Events</h1>
                             </div>
                            <div className="bg-slate-700 group-hover:bg-tertiary shadow-lg h-full aspect-square float-right rounded-r-lg text-secondary flex items-center justify-center transition-all">
                                <HiSparkles size="45" />
                            </div>
                        </div>


                        


                    </div>
                </div>

            </main>
        </>
    )

}
