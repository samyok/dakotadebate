import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import wideLogo from "../public/wide_logo.png"
import background from "../public/background.svg";
import styles from '../styles/Home.module.sass'
import React, {FormEvent, useCallback, useEffect, useRef, useState} from "react";
import {connectToDatabase} from '../utils/mongodb'

type opts = {
    isConnected: boolean
}
export default function Home(opts: opts) {
    useEffect(() => {
        window.document.getElementById("particles")?.addEventListener('load', () => {
            // @ts-ignore
            if (!window.particlesJS) return console.log(window.particlesJS);
            // @ts-ignore
            window.particlesJS("particles-js", {
                "particles": {
                    "number": {"value": 76, "density": {"enable": true, "value_area": 900}},
                    "color": {"value": "#ffffff"},
                    "shape": {
                        "type": "circle",
                        "stroke": {"width": 0, "color": "#000000"},
                        "polygon": {"nb_sides": 5},
                        "image": {"src": "img/github.svg", "width": 100, "height": 100}
                    },
                    "opacity": {
                        "value": 0.11403120289775,
                        "random": false,
                        "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
                    },
                    "size": {
                        "value": 3.945738208161363,
                        "random": true,
                        "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
                    },
                    "line_linked": {"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
                    "move": {
                        "enable": true,
                        "speed": 0.3,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {"enable": false, "mode": "repulse"},
                        "onclick": {"enable": false, "mode": "push"},
                        "resize": true
                    },
                    "modes": {
                        "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                        "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                        "repulse": {"distance": 200, "duration": 0.4},
                        "push": {"particles_nb": 4},
                        "remove": {"particles_nb": 2}
                    }
                },
                "retina_detect": true
            });
        })
    }, [])
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;
    const submitHandler = useCallback((event: FormEvent) => {
        event.preventDefault();
        let data = Object.fromEntries((new FormData(form.current)).entries());
        fetch('/api/submit', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(data)
        })
            .then(r => r.json())
            .then(r => {
                if (r.success) setSuccess(true);
                else setError(r.msg || r.data);
            })
        console.log();
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Brookings Debate Institute</title>
                <meta name="description"
                      content="A free debate camp for everyone. Preregister today to get an email as soon as registration is open!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div id="particles-js"/>
                <div className={styles.background}>
                    <Image layout="responsive" src={background}/>
                </div>
                <Script id={'particles'} src={"https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"}/>
                <div className={styles.preregisterForm}>
                    <div className={styles.logo}>
                        <Image layout='responsive' src={wideLogo} alt='Wide logo for Brookings Debate Institute'/>
                    </div>
                    <h1 className={styles.gap}>A free debate camp for all</h1>
                    <p className={styles.gap}>Pre-register below to get notified as soon as registration opens!</p>
                    {success ?
                        <p className={styles.success}>Thanks for showing your interest in BDI! You&apos;ll get an email
                            when
                            registration is open.</p> :

                        <form action="/api/submit" method='POST' onSubmit={submitHandler}
                              className={styles.preregisterForm}
                              ref={form}>
                            <input required type="text" name='name' placeholder="Name" autoComplete={"name"}/>
                            <input required type="text" name='phone' placeholder="Phone Number" autoComplete={"phone"}/>
                            <input required type="text" name='email' placeholder="Email" autoComplete={"email"}/>

                            <select required name='experience' placeholder="Debate Experience" autoComplete={"off"}
                                    defaultValue={"-"}>
                                <option value="-" disabled>Debate experience</option>
                                <option value="novice">Novice/0 years experience</option>
                                <option value="1year">Intermediate/1 year experience</option>
                                <option value="2+year">2+ years of debate experience</option>
                            </select>
                            {!!error && <p className={styles.error}>{error}</p>}
                            <button type="submit">Submit</button>
                        </form>
                    }
                </div>
            </main>

            {/*<footer className={styles.footer}>*/}
            {/*    Copyright &copy; 2021 Brookings Debate Institute*/}
            {/*</footer>*/}
        </div>
    )
}

export async function getServerSideProps() {
    const {client} = await connectToDatabase()

    const isConnected = await client.isConnected()

    return {
        props: {isConnected},
    }
}
