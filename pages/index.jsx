/* eslint-disable jsx-a11y/anchor-is-valid */
// ========== Home
// import all modules
import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function Home() {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Belajar Next Js" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Belajar Next Js</title>
      </Head>
      <div>
        <h1>Belajar Next Js</h1>
        {/*  Untuk membuat link  */}
        <Link href="/users">
          <a>Users</a>
        </Link>
        {/* Menampilkan gambar harus menggunakan
				tag Image nya Next Js, dia akan auto
				ngekonvert ukuran gambarnya based on
				height dan width yg kita define */}
        <Image
          src="/img/image.jpeg"
          height={100}
          width={100}
          layout="responsive"
          alt="Gambar"
        />
        <Image
          src="https://api-portofolio.mathiuskormasela.my.id/uploads/Screenshot_2020-09-17_08-58-06-1600540992698.png"
          width={100}
          height={100}
          alt="Gambar"
        />
      </div>
    </Fragment>
  );
}

export default Home;
