import React from 'react';
import Head from 'next/head';

function Home() {
    return (
        <>
            <Head>
                <title>Hi Sports! - BLOG</title>
                <meta name='description' content='Hi Sports. BLOG' />
                <meta property='og:image' content='https://hi-sports.tv/media/columnista1.png' />
                <link rel='apple-touch-icon' sizes='144x144' href='https://hi-sports.tv/media/columnista1.png' />
                <link rel='apple-touch-icon' sizes='114x114' href='https://hi-sports.tv/media/columnista1.png' />
                <link rel='apple-touch-icon' sizes='72x72' href='https://hi-sports.tv/media/columnista1.png' />
                <link rel='apple-touch-icon' href='https://hi-sports.tv/media/columnista1.png' />
                <link rel='icon' href='https://hi-sports.tv/media/columnista1.png' />
            </Head>
            <div>Estes es el blog</div>
        </>
    );
}

export default Home;
