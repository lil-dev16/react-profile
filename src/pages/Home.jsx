import React from 'react'
import Profile from '../components/Profile';
import Link from '../components/Link';
import { Socials } from '../components/Socials';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className='container'>
        <Profile />
        <div className="links">
        <Link nam="btn__zuri" title="Zuri Team" url="https://training.zuri.team/"/>
        <Link nam="books" title="Zuri Books" url=" http://books.zuri.team"/>
        <Link nam="book__python" title="Python Books" url="https://books.zuri.team/python-for-beginners?ref_id=yourslackname"/>
        <Link nam="pitch" title="Background Check for Coders" url="https://background.zuri.team"/>
        <Link nam="book__design" title="Design Books" url="https://books.zuri.team/design-rules"/>
        </div>
        <Socials />
        <Footer />
    </div>
  )
}

