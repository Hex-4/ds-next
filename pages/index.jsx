import Head from 'next/head'

import SideBar from "components/SideBar"

import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2'


export default function Home() {


    const [init, setInit] = useState(false);
    useEffect(() => {
        if (!init) {
            Swal.fire({
                title: 'You are on DiaStu NEXT',
                text: 'A rewrite of the website, with a entirely new framework and UI.',
                icon: 'info',
                confirmButtonText: 'Cool!'
            })


        }
        setInit(true)

        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            })
          }

    }, [])
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>


            </Head>

            <main>
                <div className='flex flex-row w-full h-full'>
                    <SideBar/>
                    <div className='flex-grow bg-primary h-full fixed left-16 right-0 -z-50 overflow-y-scroll'>
                        <div className='fancy-card group'>
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
                            <div class="card m-6 card-side bg-base-100 shadow-xl">
                            <figure><img src="https://images.unsplash.com/photo-1532483578477-e81e1513c3a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Movie" className='w-96'/></figure>
                                <div class="card-body">
                                    <h2 class="card-title text-4xl">New project: the Scribbleverse!</h2>
                                    <p>Yet another new project...</p>
                                    <p>The Scribbleverse is a collection of 1000 uniquely named NFTs affectionately named the Scribblings.</p>
                                    <div class="card-actions justify-end">
                                        <button class="btn btn-primary">more</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card m-6 card-side bg-base-100 shadow-xl">
                            <figure><img src="https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80" alt="Movie" className='w-96'/></figure>
                                <div class="card-body">
                                    <h2 class="card-title text-4xl">This... is a blog post.</h2>
                                    <p>The newest feature!</p>
                                    <div class="card-actions justify-end">
                                        <button class="btn btn-primary">more</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>


            </main>
        </>
    )

}
