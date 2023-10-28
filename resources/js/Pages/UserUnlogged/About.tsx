

import React from 'react';
import { Head } from '@inertiajs/react';
import { UnloggedLayout } from '@/Layouts/UnloggedLayout';
import { HeaderRenderer } from '@/Components/WelcomeUnloggedContent';
import Works from '@/Components/Works/Works';

interface Props {
  canLogin: boolean;
  userLogged: boolean,
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
}

export default function About() {
  return (
    <UnloggedLayout>
      <Head title='About us' />
      <AboutContent />
    </UnloggedLayout>
  );
}

type MemberType = {
  firstName: string,
  lastName: string,
  description: string,
  image: string,
  
}

const AboutContent = function () {
  
  const members: Array<MemberType> = [
    {firstName: 'Soulaiman', lastName: 'Rayane', description: 'Co-fondateur — Directeur Général,Chargé de Relations Clients', image: '', },
    {firstName: 'Abdoul-wahid', lastName: 'Hassani', description: 'Co-fondateur — Directeur Général,Chargé de Relations Clients', image: ''},
    {firstName: 'Nadhouimata', lastName: 'Ahamada', description: 'Co-fondateur — Directeur Général,Chargé de Relations Clients', image: ''},
    {firstName: 'Samirdine', lastName: 'Ahamed', description: 'Co-fondateur — Directeur Général,Chargé de Relations Clients', image: ''},
  ]

  return (
    <div className='pages-unlogged'>
      <section className='about-header'>
        <HeaderRenderer />
        <div className='h-full flex items-center'>
          <h1>Who we are & <br />what motivates us.</h1>
        </div>
      </section>
      <section className='about-motivation'>
        <span>about</span>
        <div className='about-motivation-content'>
          <div>
            <h2>Relentless creativity.<br />Fueled by data.</h2>
          </div>
          <aside>
            <div>
              <p>
                Digital has not only created new opportunities for brands but also more accountability for the agencies they work with. Gone are the days of prestige campaigns that win awards but not market share. Now, it’s about the results you can measure, the revenue you can trace back to strategic touchpoints. It’s about an agency devoting itself to top tier creative work and leveraging data to drive results.
              </p>
            </div>
            <h2>Union is a creative & <br /> performance marketing agency. </h2>
            <div>
              <p>
                Our position is simple – every client is our partner and we are invested in the success of every campaign. Specializing in travel & tourism, health & wellness, and food & beverage brands, we bring new ideas to life in digital campaigns that grow your business. It’s what our partners expect. And it’s why our work matters.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className='our-team'>
        <span>Our team</span>
        <div className='our-team-description'>
          <div>
            <h2>Meet the people that make performance possible.</h2>
          </div>
          <aside>
            <div>
              <p>
                This is what happens when you put talent into an environment where it thrives.
              </p>
            </div>
          </aside>
        </div>
        <div className="our-team-images">
          <div className="  mt-14 mx-6  mb-24 grid md:grid-cols-1">
            <div className=" md:grid grid-cols-4  gap-4 relativeduration-500 cursor-pointer overflow-hidden ">
              {members.map((member, index) => (<CardMember key={index} member={member} />))}
            </div>
          </div>
        </div>
      </section>
      <section className='our-partenar'  style={{"paddingBottom": "146px"}}>
        <span>Our Partenar</span>

        <div className='our-partenar-content'>
            <div>
                <h2>See the differents Partenars.</h2>
            </div>
            <Works />
        </div>
      </section>

    </div>
  )
}

const CardMember = function({member}: {member: MemberType}) {

  return (
    <div className='group relative  rounded-lg items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
      <div>
        <img className="h-auto max-w-full rounded-lg object-cover group-hover:rotate-2 group-hover:scale-110 transition-transform" src="/img/equipe/equipe14.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 goup-hover:via-black/60 group-hover:to-black/70">

      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center lg:px-4  text-center translate-y-[58%] sm:translate-y-[38%] md:translate-y-[38%] lg:translate-y-[52%] group-hover:translate-y-0 transition-all">
        <h1 className='text-3xl font-bold text-white'>{member.firstName}</h1>
        <h1 className='text-3xl uppercase font-bold text-white'>{member.lastName}</h1>
        <p className='text-lg italic text-white mb-3'>{member.description}</p>
        <button className='rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>button</button>
      </div>
    </div>
  )
}


